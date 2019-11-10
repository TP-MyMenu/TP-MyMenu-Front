
import React from 'react';

import Dish from '../Dish';

import styles from './styles.module.scss';

const Meals = ({ dishes }) => {
  return (
    <div className={styles.display}>
      {dishes && dishes.map((dish) => {
        return (
          <Dish 
            key={dish.id}
            title={dish.name}
            image={dish.image}
            description={dish.description}
            price={dish.price}
            suitable_for_celiacs={dish.suitable_for_celiacs}
            suitable_for_vegetarians={dish.suitable_for_vegetarians}
            logos = {dish.suitable_for_celiacs || dish.suitable_for_vegetarians}
            category={dish.category.name}
          />
        );
      })}
  </div>
  );
};

export default Meals;