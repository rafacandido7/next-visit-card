import React from 'react'

interface DescriptionProps {
  content: string
}

export function Description({ content }: DescriptionProps) {
  return (
    <div className='font-semibold text-xl text-ctext' >
      {content}
    </div>
  )
}
