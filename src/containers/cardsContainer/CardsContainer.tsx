import React, { useEffect, useState } from 'react';
import Add from '../../components/add/Add';
import Aed from '../../components/aed/Aed';
import CardDetails from '../../components/cardDetails/CardDetails';
import Circles from '../../components/circles/Circles';
import ShowYourCart from '../../components/showYourCart/showYourCart';
import IconsContainer from '../iconsContainer/IconsContainer';
import './cardContainer.scss';

function CardsContainer() {
  const [shoppingData, setShoppingData] = useState([]);
  // const URL = 'https://wawinner.its.ae/dev/public/api/v1/front-end/campaign'; No useful data found
  const URL = 'https://fakestoreapi.com/products?limit=2';

  useEffect(() => {
    requestShoppingData();
  }, []);

  async function requestShoppingData() {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    setShoppingData(data);
  }
  return (
    <div className={`cardsContainer ${!shoppingData.length ? 'bg' : ''}`}>
      {!shoppingData.length ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <Aed />
          <Circles />
          <>
            {shoppingData.map(({ title, description, category, id, image }) => {
              return (
                <CardDetails
                  key={id}
                  title={title}
                  description={description}
                  category={category}
                  image={image}
                />
              );
            })}
          </>
          <IconsContainer />
          <Add />
          <ShowYourCart />
        </>
      )}
    </div>
  );
}

export default CardsContainer;
