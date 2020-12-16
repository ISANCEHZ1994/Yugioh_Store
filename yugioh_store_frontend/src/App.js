import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
// const CardCollection = lazy( () => import('./Components/AllCardCollection/AllCardCollection'))
import CardCollection from './Components/CardCollection/CardCollection'
// import LazyLoad from 'react-lazyload';

function App() {
    
    const [ cards, setCards ] = useState({ cards: [] });
    // const [ filteredCards, setFilteredCards ] = useState({ searchedCards: [] });
    
    // const [  ] = useState();

    useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
            `https://db.ygoprodeck.com/api/v7/cardinfo.php`
          );
          setCards(result.data)
      };
      fetchData();
     
     
    }, []); // provide an empty array as second argument to the effect hook to avoid 
    //activating it on component updates but only for the mounting of the component
    
    console.log(cards)
  return (
    
    <BrowserRouter>
    {/* {console.log(cards)} */}
        <Switch>
            <Route path='/main-page' component={Shop}/>
            <Route path='/all-cards' render={() => 
              // <LazyLoad height={200} offset={100}>
              // <Suspense fallback={<h1>Still Loading…</h1>}> 
                <CardCollection cards={cards}/>
              // </Suspense>
                
              // </LazyLoad>
            }
            />
        </Switch>
    </BrowserRouter>

  );
};

export default App;

 