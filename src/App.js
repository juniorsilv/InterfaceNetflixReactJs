import React, {useEffect, useState} from 'react';
import './App.css';
import TheMovieDB from './api/TheMovieDB';
import MovieRow from './components/listMovies/MovieRow';
import Featured from './components/Featured';


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  
  useEffect(()=>{
    const loadAll = async()=>{
      let list = await TheMovieDB();
      
      setMovieList(list);

      let randomNumber = Math.floor(Math.random()*(list.length));

      let chosenFeatured = list[randomNumber].items.results[list[randomNumber].items.results.length -1];

      setFeaturedData(chosenFeatured);

      console.log();

console.log(list[randomNumber]);

console.log(list[randomNumber].items.results.length -1);
      

      console.log(chosenFeatured);
    }
    loadAll();
  }, [])

  return (
    <div className="page">
     { featuredData && 
        <Featured item={featuredData}/>
      }
        <section className="lists">
          { 
             movieList.map((item, key)=>(
               <MovieRow key={key} title={item.title} items={item.items}/>
             ))
          }
        </section>
    </div>
  );
}

export default App;
