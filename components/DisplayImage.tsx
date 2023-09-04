import React from 'react'
import ListItem from './ListItem'

interface DisplayImageProps{
    colorPalette: number[][]
    uploadedImage : string
}

const DisplayImage = ({colorPalette,uploadedImage}: DisplayImageProps) => {
  return (
    <div className='flex items-center justify-center flex-col gap-8 '>
      <div className='w-[576px] h-[300px] flex items-center justify-center border border-gray-800 rounded-lg overflow-hidden transition-all ease-in-out delay-200'>
        {uploadedImage ? (
            <img 
                src={uploadedImage} 
                alt="upload" 
                className='w-full h-full object-cover object-center rounded-lg'
            />
        ) :
            <h2>Put An Image Here...</h2>
        }
      </div>
      {colorPalette && 
        <ul className='flex items-center justify-center flex-wrap gap-4'>
            {colorPalette.map((color, index)=> (
                <ListItem 
                    key={index}
                    color={color}
                />
            ))}
        </ul>
    }
    </div>
  )
}

export default DisplayImage
