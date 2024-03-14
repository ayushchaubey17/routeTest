import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

export default function Header() {
  let a = "text-orange-700 underline";
  let b = "text-gray-700"
  
  return (
    <div>
      <div className="bg-red-800">

        <ul className="flex gap-4 bg-gray-200 font-bold p-2 text-lg ">
        
         <NavLink to="/"  className={({isActive}) =>
                                        `block pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline" : "text-gray-700"}   `
                                    }>
         <li >home</li>
         </NavLink>   


<NavLink className={({isActive})=>{
  return `${isActive?a:b}`
}} to="/about">  <li className="list2">about</li> </NavLink>
<NavLink className={({isActive})=>{
  return`${isActive?a:b}`
}} to="/contact"> <li className="list3">contact</li></NavLink>

<NavLink className={({isActive})=>{
  return `${isActive?a:b}`
}} to="/more"><li className="list4">more</li> </NavLink>
          
            
            
        </ul>
      </div>
    </div>
  )
}
