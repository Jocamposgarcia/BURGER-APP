import React from 'react';
import Component from 'react';

import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredients/BurgerIngredient'

const burger = (props) => {
    //receiving ingredients
    let ingredients = props.ingredients;
    //converting object literal into a list
    let list1 = Object.entries(ingredients);


    let list2 = [];
    list1.map(el => {
        for (let x =0; x < el[1]; x++){
            list2.push(el[0])
        }


    });

    console.log(list2);






    return (



        <div className={classes.Burger}>


            <BurgerIngredient type="bread-top" />
            {
                list2.map(el => {
                    return <BurgerIngredient type={el}/>

                })

            }











            <BurgerIngredient type="bread-bottom" />

           </div>
            
            )


    
};


export default burger;