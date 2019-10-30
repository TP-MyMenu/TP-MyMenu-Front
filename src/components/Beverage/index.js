import React from 'react';

import styles from './styles.module.scss';

const DESCRIPTION = 'Descripción';

const Beverage = ({ name, image, description, price }) => (
  <div className={styles.box}>
      <h2 className={styles.title}>{name}</h2>
      <img className={styles.img} src={image} alt="beverage_display" />
      <h3 className={styles.descriptionTitle}>{DESCRIPTION}</h3>
      <hr className={styles.ruler} />
      <p className={styles.description}>{description}</p>
      <hr className={styles.ruler} />
      <h3 className={styles.descriptionTitle}>{`Precio: ${price}$`}</h3>
  </div>
);

export default Beverage;
