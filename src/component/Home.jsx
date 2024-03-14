import React, { useState } from 'react'
import Header from './Header'

export default function Home({}) {
  let [dark,setDark] = useState(false);
  return (
    <div>
      <div className="w-4 fixed right-2 animate-pulse rounded-md top-4 h-4 border-2 border-blue-900">

      </div>

      
       I am the home page
    </div>
  )
}
