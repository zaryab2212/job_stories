import React, { useEffect, useState } from 'react'
import JobCard from './components/JobCard'
import "./App.css"

const App = () => {
  const [postsId,setPostsId] = useState([])
  const [posts,setPosts] = useState([])
  const [page,setPage] = useState(1)
  const [isDataSet,setIsDataSet] = useState(false)
  

  const endPoint = "https://hacker-news.firebaseio.com/v0/jobstories.json";

  const getApi = async(api)=>{
    const res = await fetch(`${api}`)

  const data = await res.json()
  setPostsId(()=>data)

setIsDataSet(true)
  


  }

useEffect(()=>{
getApi(endPoint)
},[page])


if(isDataSet){
  
  async function PromiseFunc() {
    if(postsId.length > 1){


      const AllDetailedPosts = await Promise.all(

        
        postsId.slice((page-1) *6 , (page)*6 ).map( async(itemId)=>{  
          const res = await fetch( `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
          return res.json()
      }
  
  
  )
      
   
      )
  setPosts([...posts,...AllDetailedPosts])
  
  }
  }
  PromiseFunc()
  setIsDataSet(false)
}

  return (
    <>

    <h2>Hacker jobs Api</h2>
    <div>
      {posts?.map((item)=>(<div>
    <JobCard item = {{...item}}/>

        </div>
      ))}
    </div>
  {(postsId.length/6 > page) &&  <button className='btn' onClick={()=>setPage(page+1)}>see more..</button> }  

    </>
  )
}

export default App