import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='fixed bottom-0 p-2 bg-gray-800 w-full text-white font-black'>
      <div className="flex justify-center space-x-2">
      
      <Link to="https://github.com/ayushchaubey17/" className="h1"><GitHubIcon /></Link>
      <h1 className="h2">facebook</h1>
      <h1 className="h3">Twitter</h1>
      <h1 className="h4">Linkedin</h1>
      </div>
      <h1 className="text-gray-400 text-center ">this is created by ayush chaubey</h1>
    </div>
  )
}
