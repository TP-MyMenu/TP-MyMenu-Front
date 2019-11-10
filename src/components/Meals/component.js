
import React, { useState } from 'react';

import Dish from '../Dish';

import Filters from './Filters';
import styles from './styles.module.scss';

const Meals = ({ dishes }) => {
  const [filters, setFilters] = useState([]);

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />

      <div className={styles.dishDisplay}>
        {dishes && dishes.filter((dish) => 
        !filters.length || filters.includes(dish.category.name))
        .map((dish) => {
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
  </div>
  );
};

export default Meals;
