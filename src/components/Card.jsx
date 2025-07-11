import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";


function Card({ data, reference, onDelete }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      className="relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-700/80 text-white p-6 overflow-hidden shadow-lg"
    >
      {/* Delete Button */}
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-red-400 hover:text-red-600 text-xl  w-6 h-6 flex items-center justify-center"
      >
        ✕
      </button>

      {/* Note Icon */}
      <div className="text-xl mb-4">📝</div>

      {/* Note Title */}
      <h3 className="text-lg font-bold mb-3 line-clamp-2">
        {data.title}
      </h3>

      {/* Note Content */}
      <p className="text-sm text-zinc-300 leading-relaxed mb-4 line-clamp-4">
        {data.content}
      </p>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Date */}
        <div className="px-6 py-2">
          <p className="text-xs text-zinc-400">{data.date}</p>
        </div>

        {/* Category Tag */}
        {data.category && (
          <div
            className={`w-full py-3 flex items-center justify-center ${
              data.categoryColor === "blue"
                ? "bg-blue-600"
                : data.categoryColor === "red"
                ? "bg-red-600"
                : data.categoryColor === "green"
                ? "bg-green-600"
                : data.categoryColor === "purple"
                ? "bg-purple-600"
                : "bg-amber-600"
            }`}
          >
            <h4 className="text-sm font-semibold">{data.category}</h4>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;