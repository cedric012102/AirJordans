import React from 'react';
import Card from './Card';

const CardList = ({ jordans }) => {
    
    return (
    <div>
        {
        jordans.map((user, i) => {
        return  (
        <Card 
        key={i} 
        id={jordans[i].id} 
        name={jordans[i].name} 
        description={jordans[i].description} 
        year={jordans[i].year} 
        photo={jordans[i].photo}
        />
        );
    })
}
    </div>
    );
}

export default CardList;

//imported in App.js
//renders everything in list.
//CardList accepts jordans now as props. in App.js they are state. App.jss owns it now so it is allowed to change it.