import React from 'react';

import styles from './styles.module.scss';

const DESCRIPTION = 'Descripción del menu';

const DailyMenu = ({menu}) => (
  <div>
    {menu && menu.map(({
      main_dish,
      garnish,
      drink,
      dessert,
      price
    }) => (
      <div className={styles.box} key={`${main_dish.id}-${drink.id}-${dessert.id}`}>
        <h2 className={styles.title}>Menu del dia</h2>
        <div className={styles.imagesContainer}>
          <img className={styles.imgMain} src={main_dish.image} alt="dish_display" />
          <img className={styles.imgDrink} src={drink.image} alt="dish_display" />
          <img className={styles.imgDessert} src={dessert.image} alt="dish_display" />
        </div>
        <h3 className={styles.descriptionTitle}>{DESCRIPTION}</h3>
        <hr className={styles.ruler} />
        <h5 className={styles.descriptionTitle}>Plato principal:</h5>
        <p className={styles.description}>{main_dish.description}</p>
        <h5 className={styles.descriptionTitle}>Bebida:</h5>
        <p className={styles.description}>{drink.description}</p>
        <h5 className={styles.descriptionTitle}>Postre:</h5>
        <p className={styles.description}>{dessert.description}</p>
        <hr className={styles.ruler} />
        <h3 className={styles.descriptionTitle}>{`Precio: ${price}$`}</h3>
      </div>
      )
    )}
  </div>
)


export default DailyMenu;