import { motion } from "motion/react";
import img1 from "../../assets/2a3f8764b8b9eb49e39a03244675bafd5afbe67e.png";
import img2 from "../../assets/f4bafd440cc80bd89c1f3fab4c3d34590006c6da.png";
import img3 from "../../assets/f493a05504860b04af7f5cca47c0b88876f4a94f.png";
import img4 from "../../assets/eeb45c16a377a6058c9fe5bf098af52b1f5d6169.png";
import img5 from "../../assets/1e39d5f82fadc6ac0825b8677e5f3fa14bb15923.png";
import img6 from "../../assets/a99308638e47f22baefee3bf8c1206bc1829bef0.png";
import img7 from "../../assets/903f4b0983f4c706f58cc26d5fa7c874137d7b1f.png";
import img8 from "../../assets/dcad0fb57db3e9a69831665009d028ec6f324895.png";
import img9 from "../../assets/c733a87010f765f3b48ff958362634e8926b5305.png";
import img10 from "../../assets/8ad5a13dbbd262267582a260ca2af86cb0be0615.png";
import img11 from "../../assets/cff9a68438a4d63909ecc2b93724780aced4c4c8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

export function Gallery() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-3xl sm:text-4xl text-center text-pink-400 mb-2">Our Work</h2>
        <p className="text-center text-gray-600 text-base sm:text-lg">
          See the difference we make in every space
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="flex w-max gap-4 sm:gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 90,
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-44 sm:w-80 sm:h-56 lg:w-[352px] lg:h-[264px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Cleaning work ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}