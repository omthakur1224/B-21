import React from 'react'

type ButtonProps={
    color?:"red"|"green"|"blue";
    children:React.ReactNode;
    handleClick?:()=>void;
}
const Button = (props:ButtonProps) => {
    let {color, children, handleClick}=props;
  return (
    <>
        <button style={{backgroundColor:color}} onClick={
            ()=>
            handleClick && handleClick()}//if handleclick exists then it will execute handleclick()
            >
            {children}</button>
    </>
  )
}

export default Button