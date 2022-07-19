import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom';
import { saveAs } from 'file-saver'

var FileSaver = require('file-saver');
function Add () {
const videoRef=useRef(null)
const canvasRef=useRef(null)
const  videoShow=()=>{
    const video=videoRef.current
    const constrains = {
     video: true,
     audio: false
    }   
    navigator.mediaDevices.getUserMedia(constrains)
    .then(stream => {
    video.srcObject = stream;
    }) 
 }
   const uploadImage=()=>{
    // 展示相片的image标签
    // canvas会读取video中的内容，然后输出（有点类似于给video截图）
    const canvas = canvasRef.current
    const video=videoRef.current   
   // const context = canvas.getContext('2d')
   // context.drawImage(video, 0, 0,640,480)
    //console.log(video.height,video.width)
    //获取摄像头实时图像的截图
    let startTime = new Date().getTime();
    let timer=setInterval(
     function(){
      if(new Date().getTime() - startTime > 12000){
        clearInterval(timer);
        return;
    }
       const context = canvas.getContext('2d')
       context.drawImage(video, 0, 0,640,480)
       saveImage()
     },3000)
    }
 const videoClose=()=>{
  const video=videoRef.current
  const stream = video.srcObject;
  if ('getTracks' in stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => {
      track.stop();
    });
  }
 }
  const saveImage=()=>{
  const canvas = canvasRef.current
  canvas.toBlob(function(blob){
    saveAs(blob,"preety image.png")
  })
 }
  
    return (
      <div>         
          <div>
                <button onClick={videoShow}>获取摄像头图像</button>
                <button onClick={uploadImage}>上传</button>
                <button onClick={saveImage}>保存图片</button>
                <button onClick={videoClose}>关闭摄像头</button>
                <video ref={videoRef} autoPlay />
                <canvas ref={canvasRef} height="480" width="640"/>              
          </div>   
                <Outlet/>
      </div>
    )
}
export default  Add