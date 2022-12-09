import './App.scss';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/home/home';
import {Detail} from './pages/detail/detail';
import {useEffect, useState} from 'react';
import {fetchData} from "./services/http";

function App() {

    const [list, setList] = useState([])

    useEffect(() => {
        fetchData().then(pokemon => setList(pokemon))
    }, [])

    return (
        <Routes>
            <Route path="" element={<Home list={list}/>}/>
            <Route path="/:number" element={<Detail list={list}/>}/>
        </Routes>
    );
}

export default App;
