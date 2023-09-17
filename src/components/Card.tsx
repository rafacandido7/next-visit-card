import React from 'react'
import { StaticImageData } from 'next/image'
import { Title } from './Title'
import { Description } from './Description'
import { Photo } from './Photo'
import { SocialMedias } from './SocialMedias'

interface CardProps {
  name: string
  description: string
  photo: StaticImageData
  instagram: string
  linkedin: string
  github: string
}

export function Card({ name, description, photo, instagram, linkedin, github }: CardProps) {
  return (
    <>
      <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
        <div className='max-w-430 mx-auto border border-solid bg-optional border-secondary rounded-lg shadow-lg p-10 md:w-card-md lg:w-card-lg'>
          <Title name={name} />
          <div className='flex flex-col items-center justify-center p-6 ' >
            <div className='flex gap-5 items-center justify-around'>
              <div className='w-2/3'>
                <Description
                  content={description}
                />
              </div>
              <div className='w-full md:w-1/3 md:pl-5'>
                <Photo
                  src={photo}
                  alt='rafael-candido'
                  quality={100}
                />
              </div>
            </div>

              <SocialMedias
                linkedin={linkedin}
                github={github}
                instagram={instagram}
              />
          </div>
        </div>
      </div>

    </>
  )
}
