import React from 'react';
import AllCards from './AllCards/AllCards';

const allCardCollection = (props) => {
    // console.log(props.cards.data)
    // console.log(props.cards.data.map( c => c.card_images[0].image_url))
    return(
       
        <div>
          {props.cards.data.map( card => 
          <AllCards
          id={card.id}
        //   key={card.key}
          name={card.name}
          type={card.type}
          desc={card.desc}
          atk={card.atk}
          def={card.def}
          level={card.level}
          race={card.race}
          attribute={card.attribute}
          image={card.card_images[0].image_url}
          />
            )}
        </div>
    )
};

export default allCardCollection;