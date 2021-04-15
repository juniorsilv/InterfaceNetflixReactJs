
async function ThmeMovieDB(){

    const API_KEY = 'c3c5f2d65869065698ef1414482b0907' ;
    const API_BASE = 'https://api.themoviedb.org/3';
    const API_LANGUAGE ='pt-BR';

    const basicFetch = async (endpoint) =>{
        const req = await fetch(`${API_BASE}${endpoint}`);
        const json = await req.json();
        return json;
    }
    
         return[
             {
                 slug: 'Originals',
                 title: 'Originais do Netflix',
                 items: await basicFetch(`/discover/tv?with_network=123?language=${API_LANGUAGE}&api_key=${API_KEY}`)
             },
             {
                 slug: 'trending',
                 title: 'Recomendados pra você',
                 items: await basicFetch(`/trending/all/week?language=${API_LANGUAGE}&api_key=${API_KEY}`)
             },
             {
                 slug: 'toprated',
                 title: 'Em Alta',
                 items: await basicFetch(`/movie/top_rated?language=${API_LANGUAGE}&api_key=${API_KEY}`)
             },
             {
                 slug: 'action',
                 title: 'Ação',
                 items: await basicFetch(`/discover/movie?with_genres=28&language=${API_LANGUAGE}&api_key=${API_KEY}`)
             },
             {
                 slug: 'comedy',
                 title: 'Comédia',
                 items: await basicFetch(`/discover/movie?with_genres=35&language=${API_LANGUAGE}&api_key=${API_KEY}`)
             },
             {
                 slug: 'horror',
                 title: 'Terror',
                 items: await basicFetch(`/discover/movie?with_genres=27&language=${API_LANGUAGE}&api_key=${API_KEY}`)
             },
             {
                 slug:'romance',
                 title: 'Romance',
                 items: await basicFetch(`/discover/movie?with_genres=10749&language=${API_LANGUAGE}&api_key=${API_KEY}`)
             },
             {
                 slug: 'documentary',
                 title: 'Documentários',
                 items: await basicFetch(`/discover/movie?with_genres=99&language=${API_LANGUAGE}&api_key=${API_KEY}`)
             }
         ];
    
}

export default ThmeMovieDB;