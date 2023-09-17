import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface PhotoProps {
  src: StaticImageData
  alt: string
  quality: number
}

export function Photo({ src, alt, quality }: PhotoProps) {
  return (
    <div className='w-full h-full rounded-full shadow-md overflow-hidden'>
      <Image
        src={src}
        alt={alt}
        quality={quality}
      />
    </div>
  )
}
