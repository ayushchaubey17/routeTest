import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='fixed bottom-0 p-2 bg-gray-800 w-full text-white font-black'>
      <div className="flex justify-center space-x-2">
      
      <Link to="https://github.com/ayushchaubey17/" className="h1"><GitHubIcon /></Link>
    
      </div>
      <h1 className="text-gray-400 text-center "> Ayush chaubey</h1>
    </div>
  )
}
