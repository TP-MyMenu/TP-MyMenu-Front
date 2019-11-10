import React from 'react';

import Beverage from '../Beverage';

const defaultProps = {
    title: "Coca-cola",
    image: "images/coca-cola.png",
};

const Beverages= ({ beverage }) => (
  <div>
    {beverage && beverage.map((beverage) => {

      return(
        <Beverage 
          key={beverage.id}
          name={beverage.name}
          image={defaultProps.image}
          description={beverage.description}
          price={beverage.price}
        />
      );
    })}
  </div>
);

export default Beverages;
