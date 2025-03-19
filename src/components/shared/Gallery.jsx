import React, { useState } from "react";
import { motion } from "framer-motion";
import { images1, images2 } from "@/constants";


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
    <section className=" bg-gray-100 rounded-xl shadow-lg">
      {/* Header */}
      <div className=" max-w-7xl mx-auto p-4">
        {/* <p className="text-sm text-indigo-600 font-semibold">Our Gallery</p> */}
        <h1 className=" text-center text-3xl font-bold text-gray-800 mb-6">Our Gallery</h1>
      

      {/* Scrollable Grid */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-xl bg-white">
        <div className="grid grid-rows-2 gap-y-8 w-[1200px] p-10">
          {/* First Row */}
          <div className="flex justify-between ">
            {images1.map((image) => (
              <motion.div
                key={image.id}
                className={`${image.id%2 == 1 ?"w-[395px]" :"w-[290px]"} h-[200px] rounded-xl overflow-hidden shadow-md flex-shrink-0 mx-6`}
                whileHover={{ scale: 1.05 }}
                onClick={() => openPreview(image.src.image1)}
              >
                <img
                  src={image.src.image1}
                  alt={`Gallery ${image.id}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-between mx-16 ">
            {images2.map((image) => (
              <motion.div
                key={image.id}
                className={`${image.id%2 == 1 ?"w-[400px]" :"w-[300px]"} h-[200px] rounded-xl overflow-hidden shadow-md flex-shrink-0 mx-10 `}
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
