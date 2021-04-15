import React, {useState, useEffect} from 'react';
import './index.css';

function Featured({item}){
const [featuredTitle, setFeaturedTitle] = useState();


useEffect(()=>{
   if(!item.title){
        let title = item.original_name;
        setFeaturedTitle(title);
   } else{
        setFeaturedTitle(item.title);
   }  
},[])

    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{featuredTitle}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year"> 2000 </div>
                        <div className="featured--seasons">{item.number_of_seasons}</div>

                        <div className="featured--overview">{item.overview}</div>
                    </div>
                    
                </div>
            </div>
            
            
        </section>
    );
}
export default Featured;