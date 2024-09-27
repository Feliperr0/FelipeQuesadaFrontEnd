import './App.css';
import { useState } from "react";

function App() {

  const [searchText, setSearchText] = useState("");
  const [selectedSizes, setSelectedSizes] = useState({
    Small: false,
    Medium: false,
    Large: false
  });

  const razasPerros = [
    {
      raza: "Chihuahua",
      tamaño: "Small",
      imagen: "https://todaslasrazasdeperros.co/wp-content/uploads/2024/07/chihuahua-300x300.jpg",
      id: 1
    },
    {
      raza: "Labrador Retriever",
      tamaño: "Large",
      imagen: "https://p.turbosquid.com/ts-thumb/79/8jMfpy/Dk/priwrig/jpg/1721423181/300x300/sharp_fit_q85/b43b86c9d34ff86d596975e33bb2640823b28e2c/priwrig.jpg",
      id: 2
    },
    {
      raza: "French Bulldog",
      tamaño: "Medium",
      imagen: "https://pawfectpuppies.mx/app/uploads/2023/09/SHOP-08-300x300.webp",
      id: 3
    },
    {
      raza: "Saint Bernard",
      tamaño: "Large",
      imagen: "https://p.turbosquid.com/ts-thumb/d1/8fbPlG/7Gp0U4LQ/3/jpg/1307023670/300x300/sharp_fit_q85/1e1f922ab1e0fe522fe41f298ead12978ea7b1c1/3.jpg",
      id: 4
    },
    {
      raza: "Beagle",
      tamaño: "Medium",
      imagen: "https://bowwowinsurance.com.au/wp-content/uploads/2022/06/shutterstock_46661515_ed-Beagle-1-year-old-sitting-in-front-of-white-background.jpg",
      id: 5
    },
    {
      raza: "Poodle",
      tamaño: "Medium",
      imagen: "https://p.turbosquid.com/ts-thumb/Jy/95jaSi/Yv/pod_/jpg/1659536334/300x300/sharp_fit_q85/08b8d1fbe221ad61ae5a69d1798047184c607e1c/pod_.jpg",
      id: 6
    },
    {
      raza: "Golden Retriever",
      tamaño: "Large",
      imagen: "https://i.pinimg.com/474x/93/1f/d0/931fd0cad6c9c0afa6206ee71cd7e011.jpg",
      id: 7
    },
    {
      raza: "Dachshund",
      tamaño: "Small",
      imagen: "https://cdn.onemars.net/sites/cesar_my_rRNUA_qluO/image/copy-of-04-dachshund_1706872591499.jpeg",
      id: 8
    },
    {
      raza: "Boxer",
      tamaño: "Large",
      imagen: "https://p.turbosquid.com/ts-thumb/hY/3zLOEy/1S/boxerdogmb3dmodel000/jpg/1720005759/300x300/sharp_fit_q85/aa75941803a55ebba90a4b8b36e3548e80e63e0d/boxerdogmb3dmodel000.jpg",
      id: 9
    },
    {
      raza: "Shih Tzu",
      tamaño: "Small",
      imagen: "https://puppygram.com/wp-content/uploads/2023/06/Shih-Tzu-300x300.png",
      id: 10
    },
    {
      raza: "Rottweiler",
      tamaño: "Large",
      imagen: "https://www.petcitypetshops.net/wp-content/uploads/2021/09/rottweiler-1-300x300.jpg",
      id: 11
    },
    {
      raza: "Pug",
      tamaño: "Small",
      imagen: "https://www.petlandfrisco.com/wp-content/uploads/2022/06/pug-300x300.png",
      id: 12
    }
  ];

  const handleCheckboxChange = (size) => {
    setSelectedSizes(estado => ({
      ...estado,
      [size]: !estado[size]
    }));
  };

  const filteredDogs = razasPerros.filter(dog => {const matchesSearchText = dog.raza.toLowerCase().includes(searchText.toLowerCase());
    const matchesSize = selectedSizes[dog.tamaño] || (!selectedSizes.Small && !selectedSizes.Medium && !selectedSizes.Large);
    return matchesSearchText && matchesSize;
  });

  
  return (
    <>
      <div className='flex justify-end'>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="text-xl text-left font-bold text-red-600">Dogs</div>
      <div className="text-xl text-left font-bold">DISCOVER</div>
      <div className="text-xl text-left font-bold">ALL DOGS BREEDS!</div>
      <div>
        <h1>FIND YOUR NEW FRIEND!</h1>
      </div>
      <CheckboxFilter selectedSizes={selectedSizes} handleCheckboxChange={handleCheckboxChange} />
      <div className="cards-container flex flex-wrap justify-center">
        {filteredDogs.length > 0 ? (
          filteredDogs.map(dog => (
            <CardPerro key={dog.id} raza={dog.raza} imagen={dog.imagen} tamaño={dog.tamaño} /> 
          ))) 
          : (<div className="text-center text-gray-500 text-xl mt-4">No dogs found</div>
        )}
      </div>
    </>
  );
}

function CardPerro({ raza, tamaño, imagen }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:scale-105 transition-transform hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-500 hover:text-white m-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <img className="rounded-t-lg w-full" src={imagen} alt={raza} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{raza}</h5>
        <p className="mb-3 font-normal text-gray-900">Size: {tamaño}</p>
      </div>
    </div>
  );
}

function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="bg-white hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md"
        onClick={() => setSearchText(searchText)}
      >
        🔍︎
      </button>
    </div>
  );
}

function Navbar({ searchText, setSearchText }) {
  return (
    <div className='flex justify-end border-solid border-2 bg-white shadow-xl p-4'>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
    </div>
  );
}


function CheckboxFilter({ selectedSizes, handleCheckboxChange }) {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <label>
        <input
          type="checkbox"
          checked={selectedSizes.chico}
          onChange={() => handleCheckboxChange('Small')}
        />
        Small
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedSizes.mediano}
          onChange={() => handleCheckboxChange('Medium')}
        />
        Medium
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedSizes.grande}
          onChange={() => handleCheckboxChange('Large')}
        />
        Large
      </label>
    </div>
  );
}



export default App;

























/*
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

    <nav className='flex gap-3 sm:justify-center bg-cyan-100'>
        {routes.map(([title, url]) => (
          <a className='rounded-lg px-3 py-2 hover:bg-red-600' href={url}>{title}</a> 
        ))}
      </nav>



*/