import React from 'react';
import './Burger.css';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = (props) => {
    const objetKeyArray = Object.keys(props.ingredients); // ["salad", "bacon", "cheese", "meat"]
    let transformedIngredients = objetKeyArray
        .map(igKey => {
            // Create array Array(LENGTH)
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>
                })
        }).reduce((arr, el) => {
            // this reduce methods allow us to transform array to another format.
            return arr.concat(el);
        },[])

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients</p>
    }


    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}
export default burger;