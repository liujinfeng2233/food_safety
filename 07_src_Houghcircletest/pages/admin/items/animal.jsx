import React ,{useEffect}from 'react'
import { Outlet } from 'react-router-dom';
import openCV from 'react-opencvjs'

function Animal(props){
  useEffect(()=>{
    openCV({
      onLoaded: () => console.log('open cv loaded'),
      onFailed: () => console.log('open cv failed to load'),
      version: '4.5.1'
    })
    console.log(openCV)
  },[])
  
  return <div>
      <Outlet/>
  </div>
}

export default Animal