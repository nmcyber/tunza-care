import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { images1, images2 } from "@/constants"
import Typography from "./Typography"

const Gallery = () => {
  const [previewImage, setPreviewImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollableRef = useRef(null)
  const scrollbarRef = useRef(null)
  const thumbRef = useRef(null)
  const [thumbPosition, setThumbPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startScrollLeft, setStartScrollLeft] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const openPreview = (src, allImages) => {
    setPreviewImage(src)
    // Find the index of the clicked image
    const index = [...allImages].findIndex((img) => img.src === src)
    setCurrentIndex(index)
  }

  const closePreview = () => {
    setPreviewImage(null)
  }

  const navigatePreview = (direction, allImages) => {
    const filteredImages = allImages.filter((img) => img.type !== "text")
    let newIndex = currentIndex + direction

    if (newIndex < 0) newIndex = filteredImages.length - 1
    if (newIndex >= filteredImages.length) newIndex = 0

    setCurrentIndex(newIndex)
    setPreviewImage(filteredImages[newIndex].src)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX || (e.touches && e.touches[0].clientX))
    if (scrollableRef.current) {
      setStartScrollLeft(scrollableRef.current.scrollLeft)
    }
    if (thumbRef.current) {
      thumbRef.current.style.cursor = "grabbing"
    }
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    if (scrollableRef.current) {
      setStartScrollLeft(scrollableRef.current.scrollLeft)
    }
  }

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !scrollableRef.current || !scrollbarRef.current || !thumbRef.current) return

      const clientX = e.clientX || (e.touches && e.touches[0].clientX)
      if (!clientX) return

      const deltaX = clientX - startX
      const scrollableWidth = scrollableRef.current.scrollWidth - scrollableRef.current.clientWidth
      const scrollbarWidth = scrollbarRef.current.offsetWidth
      const thumbWidth = thumbRef.current.offsetWidth

      // Calculate the ratio of thumb movement to content scroll
      const scrollRatio = scrollableWidth / (scrollbarWidth - thumbWidth)

      // Calculate the new scrollLeft value
      const newScrollLeft = startScrollLeft + deltaX * scrollRatio

      scrollableRef.current.scrollLeft = newScrollLeft
    },
    [isDragging, startX, startScrollLeft],
  )

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || !scrollableRef.current) return

      const deltaX = e.touches[0].clientX - startX
      const newScrollLeft = startScrollLeft - deltaX

      scrollableRef.current.scrollLeft = newScrollLeft
    },
    [isDragging, startX, startScrollLeft],
  )

  const handleMouseUp = () => {
    setIsDragging(false)
    if (thumbRef.current) {
      thumbRef.current.style.cursor = "grab"
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [handleMouseMove, handleTouchMove])

  useEffect(() => {
    const scrollableElement = scrollableRef.current
    const scrollbarElement = scrollbarRef.current
    const thumbElement = thumbRef.current

    if (scrollableElement && scrollbarElement && thumbElement) {
      const handleScroll = () => {
        const scrollableWidth = scrollableElement.scrollWidth - scrollableElement.clientWidth
        const scrollLeft = scrollableElement.scrollLeft
        const scrollbarWidth = scrollbarElement.offsetWidth
        const thumbWidth = thumbElement.offsetWidth

        if (scrollableWidth <= 0) {
          setThumbPosition(0)
          return
        }

        const thumbPositionRatio = scrollLeft / scrollableWidth
        const maxThumbPosition = scrollbarWidth - thumbWidth
        const newThumbPosition = Math.max(0, Math.min(maxThumbPosition, thumbPositionRatio * maxThumbPosition))
        setThumbPosition(newThumbPosition)
      }

      scrollableElement.addEventListener("scroll", handleScroll)
      window.addEventListener("resize", handleScroll) // Update thumb on window resize

      // Initial calculation
      handleScroll()

      return () => {
        scrollableElement.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleScroll)
      }
    }
  }, [])

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  // Combine all images for preview navigation
  const allImages = [...images1, ...images2].filter((img) => img.type !== "text")

  return (
    <motion.section
      className="bg-gray-100 rounded-xl shadow-none py-8"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-[90vw] md:max-w-[85vw] mx-auto px-4">

        {/* Scrollable Grid */}
        <div
          ref={scrollableRef}
          className="overflow-x-auto rounded-xl bg-white hide-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
          onTouchStart={handleTouchStart}
        >
          <style global="true">{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
              padding-bottom: 20px;
            }
            
            @media (max-width: 767px) {
              .gallery-row {
                padding-left: 16px;
                padding-right: 16px;
              }
              
              .gallery-item-text {
                min-width: 260px !important;
              }
              
              .gallery-item-odd {
                min-width: 260px !important;
                max-width: 260px !important;
              }
              
              .gallery-item-even {
                min-width: 220px !important;
                max-width: 220px !important;
              }
            }
          `}</style>

          <div className="flex flex-col gap-y-8 w-full p-6 md:p-10">
            {/* First Row */}
            <div className="gallery-row flex justify-start gap-x-4 md:gap-x-8 pb-2">
              {images1.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`
                    ${item.type === "text" ? "gallery-item-text" : item.id % 2 === 1 ? "gallery-item-odd" : "gallery-item-even"}
                    ${item.id % 2 === 1 ? "w-[395px]" : "w-[290px]"}
                    h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md flex-shrink-0 flex items-center 
                    ${item.type !== "text" ? "cursor-pointer" : ""}
                  `}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => item.type !== "text" && openPreview(item.src, images1)}
                  variants={imageVariants}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ ...imageVariants.whileInView.transition, delay: index * 0.1 }}
                >
                  {item.type === "text" ? (
                    <div className="grid text-center gap-2 md:gap-4 justify-center w-full p-4">
                      {/* <Typography variant="subtitle" className="text-xs md:text-sm">
                        {item.subtitle}
                      </Typography> */}
                      <Typography variant="h1" className="text-lg md:text-xl" h1Parts={item.titleParts} />
                    </div>
                  ) : (
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={`Gallery ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Second Row */}
            <div className="gallery-row flex justify-start gap-x-4 md:gap-x-8 pb-2">
              {images2.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`
                    ${image.id % 2 === 1 ? "gallery-item-odd" : "gallery-item-even"}
                    ${image.id % 2 === 1 ? "w-[400px]" : "w-[300px]"}
                    h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md flex-shrink-0 cursor-pointer
                  `}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openPreview(image.src, images2)}
                  variants={imageVariants}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ ...imageVariants.whileInView.transition, delay: index * 0.1 }}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={`Gallery ${image.id}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Scrollbar */}
        <div
          ref={scrollbarRef}
          className="relative h-2 bg-gray-200 rounded-full mt-4 mx-auto max-w-[200px] md:max-w-[300px]"
        >
          <div
            ref={thumbRef}
            className="absolute h-2 bg-[#1a6b9f] rounded-full cursor-grab active:cursor-grabbing"
            style={{ width: "50px", transform: `translateX(${thumbPosition}px)` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          />
        </div>

        {/* Image Preview */}
        <AnimatePresence>
          {previewImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              onClick={closePreview}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative max-w-[90%] max-h-[90%]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={previewImage || "/placeholder.svg"}
                  alt="Preview"
                  className="max-w-full max-h-[80vh] rounded-lg object-contain"
                />

                <button
                  className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    closePreview()
                  }}
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>

                {!isMobile && (
                  <>
                    <button
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 md:p-3 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigatePreview(-1, allImages)
                      }}
                    >
                      <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </button>

                    <button
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 md:p-3 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigatePreview(1, allImages)
                      }}
                    >
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                  </>
                )}

                {isMobile && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                    <button
                      className="bg-white/20 hover:bg-white/40 rounded-full p-3 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigatePreview(-1, allImages)
                      }}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      className="bg-white/20 hover:bg-white/40 rounded-full p-3 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigatePreview(1, allImages)
                      }}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Gallery

