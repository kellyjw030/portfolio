import React from 'react'
import type { ImageGroupType, SingleImageType } from '@/types/ImageType';
import SingleImage from '@/components/SingleImage';
import ImageGroup from '@/components/ImageGroup';
import Footer from './Footer';

interface ProjectInfoProps {
  contributions: string[];
  duration: string;
  brief: string;
  tools: string[];
  features: string[];
  images: ImageGroupType[];
  singleImages: SingleImageType[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({contributions, duration, brief, tools, features, images, singleImages}) => {

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-3 p-10 lg:w-[1100px] sm:m-3">
      <div className="lg:col-start-1 col-start-1">
        <p className="text-gray-700 tracking-widest text-sm py-4">RESPONSIBILITIES</p>
        {
          contributions.map((contribution, idx) => (
            <p key={idx} className="text-black tracking-widest pb-2">
              {contribution}
            </p>
          ))
        }
        <p className="text-gray-700 tracking-widest text-sm py-4">BUILT WITH</p>
        {
          tools.map((item, index) => (
          <span 
          key={index}
          className="me-1 inline-flex items-center rounded-md bg-gray px-2 py-1 text-xs font-medium text-gray-700 inset-ring inset-ring-gray-700/20">
            {item}
          </span>
          ))
        }
        <p className="text-gray-700 tracking-widest text-sm py-4">DURATION</p>
        <p className="text-black tracking-widest pb-2">{duration}</p>
      </div>
      <div className="lg:col-start-2 col-start-1">
        <p className="text-gray-700 tracking-widest text-sm py-4">PROJECT SUMMARY</p>
        <p className="text-black pb-2 tracking-widest leading-7">{brief}</p>
      </div>
      
      <hr className="col-span-2 text-gray-200 mt-5"></hr>
      <div className="col-span-2 pt-7">
        <h2 className="text-gray-700 tracking-widest text-md pb-3">FEATURES</h2>
        <ul className="list-disc ps-10">
          {
            features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))
          }
        </ul>
      </div>
      
      <div className="col-span-2">

        {images.map((imgGroup, idx) => (
          <ImageGroup key={idx} imageGroup={imgGroup} index={idx} />
        ))}

        { // List of SingleImage
          singleImages.map((img, idx) => (
            <SingleImage
              key={idx}
              singleImage={img}
              index={idx}
            />
          ))
        }

      </div>
    </div>
    
  )
}

export default ProjectInfo