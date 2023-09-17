import React from 'react'

interface TitleProps {
  name: string
}

export function Title({ name }: TitleProps) {
  return (
    <div className='flex justify-center w-full font-bold textw p-4 text-4xl text-ctext'>
      {name}
    </div>
  )
}
