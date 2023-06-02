import './App.css';
import './components/system.css';
import List from './components/list.js';
import axios from 'axios';
import Header from "./components/header.js"
import Page from "./components/page.js"
import Next from "./components/next.js"

import { BrowserRouter, Routes, Route  } from "react-router-dom"
import { useState, useEffect, React } from 'react';
function App() {
  const [count, setCount] = useState([]);
  const [pageconst, setPage] = useState(0);
  const getallmove = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9242a6fa52f2ec831514b40f42fe8bd4&language=en-ar")
    setCount(res.data.results)
    setPage(res.data.total_pages)
  }
const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9242a6fa52f2ec831514b40f42fe8bd4&language=en-ar&page=${page}`)
    setCount(res.data.results)
  }
  useEffect(() => {
    getallmove();

  }, []);
  const search = async (word) => {
    if(word === "") {
      getallmove();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9242a6fa52f2ec831514b40f42fe8bd4&query=${word}&language=en-ar`)
      setCount(res.data.results)
      
    }
  }
  
  return (
    <>
      <Header search={search} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List count={count} getPage={getPage} pageconst={pageconst}/>} />
          <Route path="/movie/:id" element={<Page />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
