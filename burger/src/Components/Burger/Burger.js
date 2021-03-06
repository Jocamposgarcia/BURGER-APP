import React from 'react';
import Component from 'react';

import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredients/BurgerIngredient'

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />

           </div>
            
            )


    
}


export default burger;