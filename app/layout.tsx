import './globals.css'
import {GrGallery} from 'react-icons/gr'

export const metadata = {
  title: 'Color Palatte Generation',
  description: 'Generated color palatte with image',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className='h-screen text-gray-400'>
        
        {children}
      </body>
    </html>
  )
}
