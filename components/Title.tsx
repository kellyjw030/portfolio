import React from 'react'

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({title}) => {
  return (
    <h1 className="mx-5 flex justify-center items-center text-xl pt-17 tracking-widest">
      {title}
    </h1>
  )
}

export default Title