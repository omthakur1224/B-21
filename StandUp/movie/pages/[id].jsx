import React from 'react'
import axios from 'axios';
const SingleMovie = ({movie}) => {
    const han
  return (
    <div>
        <button onClick={handleClick(movie)}>{movie.Title}</button>
    </div>
  )
}
export async function getStaticPaths(){
    // console.log(context)
    const response= await axios.get(`http://localhost:8080/movies`);
    let data= await response.data;
    return {
        paths: data.map((movie)=>({params:{id:movie.id.toString()}})),
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context){
    console.log(context)
    const {params:{id}}=context;
    const response= await axios.get(`http://localhost:8080/movies/${id}`);
    let data= await response.data;
    return{
        props:{
            movie:data
        }
    }
}


export default SingleMovie