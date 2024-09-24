import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const routes = [
    ["Home ","/"],
    ["Projects ", "/"],
    ["# ","/"],
  ]

  return (
    <>
    <nav className='flex gap-3 sm:justify-center bg-cyan-100'>
      {routes.map(([title, url])=>(
        <a className='rounded-lg px-3 py-2 hover:bg-red-600' href={url}>{title}</a>
      ))}
    </nav>
      <div className="bg-red-300 text-xs font-bold">Perrito</div>
      <div className="bg-red-300 text-xl text-left">Perritos</div>


      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      
    </>
  )
}

function Card(params) {
  let srcImg = "https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg?w=996&t=st=1727141517~exp=1727142117~hmac=e146777ce86eda94611e960304175e8356fd8e43572edeabeda8a527ecb333f7"
  return(
    <div className='flex border-solid border-2 border-red-700 rounded-lg bg-yellow-300'>
      <a href="#"></a>
      <div>
        <span>Subtitulo</span>
        <h4 className='text-lg sm:text-xl'>Title</h4>
      </div>
      <button>Button</button>
      <img src={srcImg} alt="perrito" />
    </div>
  )
  
}

export default App
