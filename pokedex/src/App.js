import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Detail } from './pages/detail/detail';
import { useEffect, useState } from 'react';
import { adaptToDomain } from './services/auxiliar';

function App() {
  const url = "https://pokeapi.co/api/v2";

  const [list,setList] = useState([])

  useEffect(()=>{
    let aux = []
    async function fetchData(){
        for (let number = 1; number < 151; number++) {
            await fetch(`${url}/pokemon/${number}`)
                .then(response=>response.json())
                .then(pokemon=>{
                    aux.push(adaptToDomain(pokemon))
                })
        }
        setList(aux)
    }
    fetchData()
},[])

  return (
    <Routes>
      <Route path="" element={<Home list={list} />}/>
      <Route path="/:number" element={<Detail list={list}/>}/>
    </Routes>
  );
}

export default App;
