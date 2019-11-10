import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Filters = ({categories, filters, setFilters}) => (
  <div className={styles.filtersDisplay}>
    <div className={styles.box}>
      { categories && categories.map(({ id, name }) => 
        <span key={id} 
          className={classNames({ 
            [styles.filters]: !filters.includes(name)
          }, {
             [styles.filtersSelected]: filters.includes(name)
            })} 
          onClick={() => {
            let newFilters;
            if (filters.includes(name)) {
              newFilters = filters.filter((exclude) => exclude !== name);
            } else {
              newFilters = [...filters ,name];
            }

            setFilters(newFilters);
          }}>
          {name}
        </span>
      )}
    </div>
  </div>
);

export default Filters;
