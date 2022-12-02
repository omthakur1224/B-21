import React from 'react'

import { useRouter } from 'next/router'

const Movie = ({movie}) => {

    const router=useRouter();

  return (
    <div>
      movie.Title
    </div>
  )
}
// export async function getStaticPaths(context){
//     console.log(context)
//     const{query:{imdbID}}=context;
//     const response=await fetch("https://mock-server-686g.onrender.com/movies/?imdbID=${imdbID}")
//     let data= await response.json();
//     return{
//      props:{
//        movie:data
//      }
//     }

export async function getServerSideProps(context){
    console.log(context)
    const {
        query:{id},
       }=context;
    const response=await fetch(`http://localhost:8080/movies/${id}`)
    let data= await response.json();
    console.log(data,"data")
    return{
     props:{
       movie:data
     }
    }
}
export default Movie
