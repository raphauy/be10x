"use client"
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Screens2() {
  const images = [
    "/Screenshot-2023-04-30-232805.png",
    "/ai_7.png-e1677782684598.jpg",
    "/ai_1.png",
    "/WhatsApp-Image-2023-03-02-at-18.36.52-1.jpg",
    "/WhatsApp-Image-2023-03-02-at-18.36.53-2.jpg",
    "/ai_3.png",
    "/WhatsApp-Image-2023-03-03-at-09.02.50.jpg",
    "/WhatsApp-Image-2023-03-02-at-18.36.52.jpg",
    "/ai_5.png.jpg",
    "/ai_2-e1677782513296.png",
  ];
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {images.map((image, i) => (
          <div key={i} className="overflow-hidden">
            <Image            
              src={image}
              width={500}
              height={500}
              style={{ width: "100%", display: "block" }}
              alt=""
              className="transition duration-200 hover:scale-110"
            />          
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
