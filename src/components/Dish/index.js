import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const DESCRIPTION = 'Descripción';
const VEGETARIANA = 'images/vegetariana.png';
const CELIACOS = 'images/celiacos.png';

const Dish = ({
  title,
  image,
  description,
  price,
  dailyMenu,
  suitable_for_celiacs,
  suitable_for_vegetarians,
  logos,
  category,
}) => (
  <div className={classNames({ [styles.boxBig]: logos }, { [styles.box]: !logos  })}>
      <h2 className={styles.title}>{title}</h2>
      {dailyMenu && <span className={styles.dailyMenu}>Menu del dia</span>}
      <img className={styles.img} src={image} alt="dish_display" />
      <h3 className={styles.descriptionTitle}>{DESCRIPTION}</h3>
      <hr className={styles.ruler} />
      <p className={styles.description}>{description}</p>
      <h4 className={styles.category}>{category}</h4>
      <hr className={styles.ruler} />
      <h3 className={styles.descriptionTitle}>{`Precio: ${price}$`}</h3>
      {logos && 
        <div>
          <hr className={styles.ruler} />
          <div className={styles.logosBlock}>
            {suitable_for_celiacs && <img className={styles.logos} src={CELIACOS} alt="celiacos" />}
            {suitable_for_vegetarians && <img className={styles.logos} src={VEGETARIANA} alt="vegetariana" />}
          </div>
        </div>
      }
  </div>
);

export default Dish;