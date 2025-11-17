import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import topAnime from '../data/animedata';


function AnimeDetails() {
  const [myAnime, setMyAnime] = useState(null);
  const navigate = useNavigate();
  const {slug} = useParams();

  useEffect(() => {
    const fetchMyAnime = () => {
      const animeCollection = topAnime.find((q) => q.slug === slug);
      setMyAnime(animeCollection || null);
    };
  
    fetchMyAnime();
  }, [slug]);

  if(!myAnime) {
    return(
      <div className="container">
        <button className="btn" onClick={() => navigate(-1)}>Go back</button>
        <p>No anime Collection</p>
      </div>
    )
  }
  

  return (
    <div className='container'>
      <button className="btn" onClick={() => navigate(-1)}>Go back</button>

      <div>
          <div className='title'></div>
          <h1>Top anime name</h1>
      </div>
      <div className="flex-container">
        {
          myAnime.img && (
            <img src={myAnime.img} alt="" className='anime-img'/>
          )}
          <div className="anime-infos">
            <div className="row">
              <h3 className="label">Anime Name</h3>
              <p className="text">{myAnime.name}</p>
            </div>
            <div className="row">
              <h3 className="label">Anime Details</h3>
              <p className="text">{myAnime.desc}</p>
            </div>
            <div className="row">
              <h3 className="label">Year released</h3>
              <p className="text">{myAnime.year}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AnimeDetails