import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Meals from '../Meals';
import DailyMenu from '../DailyMenu';
import Beverages from '../Beverages';
import Suggestions from '../Suggestions';
import Payment from '../Payment';

import styles from './styles.module.scss';

const Menu = () => (
  <Router>
    <div className={styles.menuBackground}>
        <div className={styles.box}>
          <ul className={styles.menu}>
            <li className={styles.menuOption}>
              <Link to="/meals" className={styles.link}>
                <h4>Menu</h4>
              </Link>
            </li>
            <li className={styles.menuOption}>
              <Link to="/daily-menu" className={styles.link}>
                <h4>Menu del dia</h4>
              </Link>
            </li>
            <li className={styles.menuOption}>
              <Link to="/beverages" className={styles.link}>
                <h4>Bebidas</h4>
              </Link>
            </li>
            <li className={styles.menuOption}>
              <Link to="/suggestions" className={styles.link}>
                <h4>Sugerencias</h4>
              </Link>
            </li>
            <li className={styles.menuOption}>
              <Link to="/payment" className={styles.link}>
                <h4>Métodos de pago</h4>
              </Link>
            </li>
          </ul>
        </div>
    </div>
    <Switch>
      <Route exact path="/meals" component={Meals} />
      <Route exact path="/daily-menu" component={DailyMenu} />
      <Route exact path="/beverages" component={Beverages} />
      <Route exact path="/suggestions" component={Suggestions} />
      <Route exact path="/payment" component={Payment} />
    </Switch>
  </Router>
);

export default Menu;
