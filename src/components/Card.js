import React from 'react';

const Card = ({ name, description, photo, year, id }) => {
   
    return (
        <div className='bg-light-green dib br3 pa3 mh3 mv3 grow bw2 shadow-5 tc w-25'>
            <img alt='' src={photo} />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;

//imported in CardList