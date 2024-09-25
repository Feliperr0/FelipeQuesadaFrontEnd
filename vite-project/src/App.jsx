import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const routes = [
    ["Home ", "/"],
    ["Razas Exóticas ", "/"],
    ["# ", "/"],
  ]
  let razasPerros = [
    {
      raza: "Chihuahua",
      tamaño: "chico",
      imagen: "https://todaslasrazasdeperros.co/wp-content/uploads/2024/07/chihuahua-300x300.jpg" // Aquí colocarás la ruta de la imagen
    },
    {
      raza: "Labrador Retriever",
      tamaño: "grande",
      imagen: "https://p.turbosquid.com/ts-thumb/79/8jMfpy/Dk/priwrig/jpg/1721423181/300x300/sharp_fit_q85/b43b86c9d34ff86d596975e33bb2640823b28e2c/priwrig.jpg"
    },
    {
      raza: "Bulldog Francés",
      tamaño: "mediano",
      imagen: "https://pawfectpuppies.mx/app/uploads/2023/09/SHOP-08-300x300.webp"
    },
    {
      raza: "San Bernardo",
      tamaño: "grande",
      imagen: "https://p.turbosquid.com/ts-thumb/d1/8fbPlG/7Gp0U4LQ/3/jpg/1307023670/300x300/sharp_fit_q85/1e1f922ab1e0fe522fe41f298ead12978ea7b1c1/3.jpg"
    }
  ];

  return (
    <>
      <div className='flex justify-end'>
        <Navbar></Navbar>
      </div>


      <div className="text-sm text-left font-bold text-red-600">Dogs</div>
      <div className="text-xl text-left font-bold">DISCOVER</div>
      <div className="text-xl text-left font-bold">ALL DOGS BREEDS!</div>
      <div>
        <h1>FIND YOUR NEW FRIEND!</h1>
        <div className="cards-container flex ">
          {razasPerros.map((raza) => ( <CardPerro key={raza.raza} {...raza} />
          ))} 
        </div>
      </div>



      <nav className='flex gap-3 sm:justify-center bg-cyan-100'>
        {routes.map(([title, url]) => (
          <a className='rounded-lg px-3 py-2 hover:bg-red-600' href={url}>{title}</a>
        ))}
      </nav>
      <Card></Card>


    </>
  )
}

function Card(params) {
  let srcImg = "https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg?w=996&t=st=1727141517~exp=1727142117~hmac=e146777ce86eda94611e960304175e8356fd8e43572edeabeda8a527ecb333f7"
  return (
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

function CardPerro({ raza, tamaño, imagen }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md  hover:scale-105 transition-transform hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-500 hover:text-white">
      <img className="rounded-t-lg" src={imagen} alt={raza} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{raza}</h5>
        <p className="mb-3 font-normal text-gray-900 ">Tamaño: {tamaño}</p>
      </div>
    </div>
  );
}

function Navbar(params) {

  return (
    <div className='flex justify-end border-solid border-2 bg-white shadow-xl'>
      <input type="text" className="block  w-full pl-10 pr-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" />
      <input type="button" value="" />
      <button class="bg-white hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md">
      🔍︎
</button>

    </div>
  )


}


export default App
