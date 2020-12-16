import React from 'react';
import { Card, Button, CardDeck, Col } from 'react-bootstrap';

const allCards = (props) => {

    return(
        
        <div style={{marginTop: 20, marginBottom: 20, width: 400}}>
            <CardDeck>
                
                    <Card>
                        <Card.Img variant="top" src={props.image} style={{height:'243px', width:'171px'}}/>
                        <Card.Body>
                                <Card.Title>{props.name} </Card.Title>
                                <Card.Text> {props.desc} </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer>
                                <small className="text-muted">{props.race}</small>
                                <small className="text-muted">{props.attribute}</small>
                        </Card.Footer>
                   </Card>
                 
            </CardDeck>
        </div>
    )
};

export default allCards;