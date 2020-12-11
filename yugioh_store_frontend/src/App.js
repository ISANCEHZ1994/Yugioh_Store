import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import AllCardCollection from './Components/AllCardCollection/AllCardCollection';
import LazyLoad from 'react-lazyload';

function App() {
    
    const [ cards, setCards ] = useState({ cards: [] });
    const [ filteredCards, setFilteredCards ] = useState({ searchedCards: [] });


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
    
    // console.log(cards)
  return (
    
    <BrowserRouter>
        <Switch>
            <Route path='/main-page' component={Shop}/>
            <Route path='/all-cards' render={() => 
              <LazyLoad>
                <AllCardCollection cards={cards}/>
              </LazyLoad>
            }
            />
        </Switch>
    </BrowserRouter>

  );
};

export default App;

 