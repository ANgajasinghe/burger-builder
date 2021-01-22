import React from 'react';
import './Burger.css';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = (props) => {

    // Object to array =  Object.keys()
    console.log(props.ingredients);
    const objetKeyArray = Object.keys(props.ingredients); // ["salad", "bacon", "cheese", "meat"]
    const transformedIngredients = objetKeyArray
        .map(igKey =>{
            // Create array Array(LENGTH)
            console.log(igKey);
            return [...Array(props.ingredients[igKey])]
                .map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        })


    return(
      <div className='Burger'>
          <BurgerIngredient type='bread-top'/>
          {transformedIngredients}
          <BurgerIngredient type='bread-bottom'/>
      </div>
    );
}
export default burger;