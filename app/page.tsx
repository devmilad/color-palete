"use client"
import DisplayImage from "@/components/DisplayImage";
import { ChangeEvent, useState } from "react";
import ColorThief from 'colorthief';

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState('')
  const [colorPalette, setColorPalette] = useState<number[] []>([])

  const uploadImage =(e: ChangeEvent<HTMLInputElement>) =>{
      const file =e.target.files?.[0]
      const reader = new FileReader()

      reader.onload = async (event:ProgressEvent<FileReader>) =>{
        const result = event.target?.result as string;
        const img = new Image()

        img.onload =() =>{
          const colorThief = new ColorThief();
         const colorPalette = colorThief.getPalette(img, 6);
          setColorPalette(colorPalette)
        }
        img.src = result;
        setUploadedImage(result)
      }
      reader.readAsDataURL(file as Blob)
  }

 
  return (
    <>
      <header className='py-5 px-16 w-full min-h-[10vh] bg-gray-950 shadow-md border-b border-b-gray-600 flex items-center justify-between gap-12'>
        <h1 className='text-4xl font-extrabold text__gradient'>Palette Gen</h1>
        <div className='flex items-center justify-center'>
          <label htmlFor="file" className='py-2 px-4 rounded-lg border border-gray-600 cursor-pointer flex items-center justify-center gap-3'>
            <i className='bx bx-images text-2xl'></i>
            Upload Image
          </label>
          <input type='file' id='file' hidden onChange={uploadImage}/>
        </div>
      </header>
      <main className="min-h-[90vh] py-3 px-12 flex items-center justify-center">
        <DisplayImage
            colorPalette={colorPalette}
            uploadedImage={uploadedImage}
        />
      </main>
    </>
  )
}
