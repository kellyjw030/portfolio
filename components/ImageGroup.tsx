import React from 'react'
import type { ImageGroupType } from "@/types/ImageType";

interface ImageGroupProps {
  imageGroup: ImageGroupType;
  index: number;
}

const ImageGroupMobile: React.FC<ImageGroupProps> = ({imageGroup, index}) => {
return (
  <div className="w-full flex flex-col items-center mt-10" key={index}>
    <div className="flex flex-wrap gap-4 justify-center">
      {imageGroup.images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Image ${idx + 1}`}
          className="w-[200px] h-auto object-cover"
        />
      ))}
    </div>
    <p className="mt-2 text-sm text-gray-700 text-center">{imageGroup.caption}</p>
  </div>
);

}

export default ImageGroupMobile