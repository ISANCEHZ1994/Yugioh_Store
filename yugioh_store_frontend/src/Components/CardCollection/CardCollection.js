import React from 'react';
import AllCards from './Cards/Cards';
import { Col, Row, Container } from 'react-bootstrap';



const allCardCollection = (props) => {
    console.log( props.cards.data)
    // console.log(props.cards.data.map( c => c.card_images[0].image_url))
    return(
            <Container>
                    {props.cards.data.map( card => 
                // <Col>
                    <AllCards
                    key={card.id}
                    id={card.id}
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
                // </Col>
                        )} 
            </Container>
            // <div>
            //      <p> something here!</p>
            // </div>
           
            
    )
};

export default allCardCollection;