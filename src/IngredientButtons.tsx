import React, { useState } from 'react';
import Ingredient from './Ingredient';
import './IngredientButtons.css';
import saladImage from './assets/salad.png';
import cheeseImage from './assets/cheese.png';
import meatImage from './assets/meats.png';
import baconImage from './assets/bacon.png';

type IngredientType = {
    id: number;
    name: string;
    price: number;
    image: string;
};

const INGREDIENTS: IngredientType[] = [
    { id: 1, name: 'Salad', price: 10, image: 'saladImage' },
    { id: 2, name: 'Cheese', price: 50, image: 'cheeseImage' },
    { id: 3, name: 'Meat', price: 80, image: 'meatImage' },
    { id: 4, name: 'Bacon', price: 60, image: 'baconImage' },
];

const BASE_BURGER_PRICE = 30;

const BurgerBuilder: React.FC = () => {
    const [ingredients, setIngredients] = useState<IngredientType[]>([]);
    const [totalPrice, setTotalPrice] = useState(BASE_BURGER_PRICE);

    const addIngredient = (ingredient: IngredientType) => {
        setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + ingredient.price);
    };

    const removeIngredient = (id: number) => {
        const removedIngredient = ingredients.find((ingredient) => ingredient.id === id);

        if (removedIngredient) {
            setIngredients((prevIngredients) => prevIngredients.filter((ingredient) => ingredient.id !== id));
            setTotalPrice((prevTotalPrice) => prevTotalPrice - removedIngredient.price);
        }
    };

    return (
        <div className="burger-builder">
            <h1>Burger Builder</h1>
            <div className="ingredients-container">
                {INGREDIENTS.map((ingredient) => (
                    <Ingredient
                        key={ingredient.id}
                        id={ingredient.id}
                        name={ingredient.name}
                        price={ingredient.price}
                        image={ingredient.image}
                        onAdd={() => addIngredient(ingredient)}
                        onRemove={() => removeIngredient(ingredient.id)}
                    />
                ))}
            </div>
            <div className="current-burger">
                <h2>Current Burger</h2>
                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                    {ingredients.map((ingredient) => (
                        <div key={ingredient.id} className={ingredient.name}></div>
                    ))}
                    <div className="BreadBottom"></div>
                </div>
                <p>Total Price: {totalPrice} сом</p>
            </div>
        </div>
    );
};

export default BurgerBuilder;
