import React, { useState } from "react";
import { motion } from "framer-motion";
import { images1, images2 } from "@/constants";
import Typography from "./Typography";


const Gallery = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (src) => {
    setPreviewImage(src);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  console.log(images1);

  return (
    <section className=" bg-gray-100 rounded-xl shadow-none">
      <div className=" max-w-7xl mx-auto p-4">      
      {/* Scrollable Grid */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-xl bg-white">
        <div className="grid grid-rows-2 gap-y-8 w-[1200px] p-10">
          {/* First Row */}
          <div className="flex justify-between ">
              {images1.map((item) => (
                <motion.div
                  key={item.id}
                  className={`${
                    item.id % 2 == 1 ? "w-[395px]" : "w-[290px]"
                  } h-[200px] rounded-xl overflow-hidden shadow-md flex-shrink-0 mx-6 flex items-center justify-center`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => item.type !== "text" && openPreview(item.src)}
                >
                  {item.type === "text" ? (
                    <div className=" grid text-center gap-4 justify-center">
                      <Typography variant="subtitle" className="text-sm">{item.subtitle}</Typography> 
                      <Typography variant="h1" h1Parts={item.titleParts} />
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={`Gallery ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              ))}
            </div>

          {/* Second Row */}
          <div className="flex justify-between mx-16 ">
          {images2.map((image) => (
            <motion.div
              key={image.id}
              className={`${
                image.id % 2 == 1 ? "w-[400px]" : "w-[300px]"
              } h-[200px] rounded-xl overflow-hidden shadow-md flex-shrink-0 mx-10 `}
              whileHover={{ scale: 1.05 }}
              onClick={() => openPreview(image.src)}
              >
              <img
                src={image.src}
                alt={`Gallery ${image.id}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          </div>
        </div>
      </div>

      {/* Image Preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closePreview}
        >
          <motion.img
            src={previewImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      </div>
    </section>
  );
};

export default Gallery;
