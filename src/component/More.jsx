import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

function More() {
 let [id,setId] = useState("ayushchaubey17");
  let [data,setData] = useState('');
  
  
  let fetchFun = ()=>{
    fetch(`https://api.github.com/users/${id}`).then(
      (response)=>{return response.json()}
    )
    .then(
      (data)=>{
        console.log(data);
        setData(data);
      }
    ).catch(
      (err)=>{
   console.log(err);
   console.log("no data found")
      }
    );
   
    }
  useEffect(fetchFun,[]);
  

  let updateId = (event)=>{
setId(event.target.value);
  }
    
  return (

    <div className="
    ">
<div className='text-center h-screen my-10 bg-gray-600 text-white p-4 '>
    {/* <img src={data.avatar_url} alt="Git picture" width={300} /> */}
    <img className="w-10/12 rounded-t-full mx-auto h-fit" src={data.avatar_url} alt="" />
    <h1 className="font-bold">{data.name}</h1>
    <h1 className="">your id: {data.login}</h1>
    <h1 className=""> followers: {data.followers}</h1>
    

<div className="mt-4 border-2 bg-gray-500 rounded-md">
  <h1 className='text-3xl my-4'>Search your id</h1>
  <input type="text" onChange={updateId} value={id} placeholder='search your githubid' className="border-2 text-blue-800 p-1 rounded-md" />
<br /><button className='bg-sky-400 p-2 font-bold m-4 rounded-md' onClick={fetchFun}>Search</button>
</div>
</div>
    </div>
    
  )
}

export default More

