import React from 'react'
import type { SingleImageType } from "@/types/ImageType";

interface SingleImageProps {
  singleImage: SingleImageType;
  index: number;
}

const SingleImage: React.FC<SingleImageProps> = ({singleImage, index}) => {
return (
  <div className="w-full flex flex-wrap gap-4 justify-center mt-10" key={index}>
    <div className="flex flex-col items-center">
      <img
        className="h-auto object-cover"
        src={singleImage.image}
        alt={singleImage.caption || "Image"}
      />
      {singleImage.caption && (
        <p className="mt-2 text-sm text-gray-700 text-center">
          {singleImage.caption}
        </p>
      )}
    </div>
  </div>
);
}

export default SingleImage