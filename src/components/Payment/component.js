import React from 'react';

import styles from './styles.module.scss';

const Payment = ({
  methods
}) => (
  <div className={styles.box}>
      <h2 className={styles.title}>Métodos de pago</h2>
      { methods && methods.map(({
        id,
        method,
        promotion,
      }) =>
        <div key={id}>
          <hr className={styles.ruler} />
          <h3 className={styles.descriptionTitle}>{method}</h3>
          {promotion && <p className={styles.description}>{promotion}</p>}
        </div>
      )}
  </div>
);

export default Payment;