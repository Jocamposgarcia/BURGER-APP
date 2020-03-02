import React, { Component } from 'react';

import Aux from '../../hoc/Aux1';
import Burger from '../../Components/Burger/Burger';


class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state ={

            ingredients: {
                salad: 1,
                bacon:1,
                cheese: 2,
                meat:2

hello my name is {props.name}

            }




        }

    }

    render() {

        return (

            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls </div>
                <p>rgrhrhr</p>
                </Aux>
            
            
            
            );
    }

}

export default BurgerBuilder;

