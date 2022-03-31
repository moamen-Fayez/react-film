import React from 'react'

const Movie = ({ mov }) => {
    return (
        
        <div className='movie'>
            <div><p>{mov.Year}</p></div>
            <div>
                <img src={mov.Poster !== "N/A" ? mov.Poster : "https://via.placeholder.com/400" } 
                alt={mov.Title}/>

            </div>

            <div>
                <span>{mov.Type}</span>
                <h3>{mov.Title}</h3>
            </div>

            {console.log(mov)}
        </div>
    )
}
export default Movie;
