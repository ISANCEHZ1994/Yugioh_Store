import React from 'react';
import { Card, Button } from 'react-bootstrap';

const allCards = (props) => {

    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </>

// {/* <div>
//     <div class="row">
//         <div class="column">
//             <div class="card">
//                 <h3>{props.name}</h3>
//                 <p>{props.race}</p>
//                 <p> {props.type}</p>
//                 <p>{props.desc}</p>
//                 <p>{props.atk}</p>
//                 <p>{props.def}</p>
//                 <p>{props.level}</p>
//             </div>
//         </div>
//     </div>
// </div> */}
    )
};

export default allCards;