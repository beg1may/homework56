import React from 'react';
import './Ingredients.css';

type IngredientProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    onAdd: React.MouseEventHandler<HTMLButtonElement>;
    onRemove: React.MouseEventHandler<HTMLButtonElement>;
};

const Ingredient: React.FC<IngredientProps> = ({ id, name, price, image, onAdd, onRemove }) => {
    return (
        <div className="ingredient">
            <img src={image} alt={name} className="ingredient-image" />
            <p className="ingredient-name">{name}</p>
            <p className="ingredient-price">{price} сом</p>
            <div className="ingredient-buttons">
                <button className="add-button" onClick={onAdd}>
                    Добавить
                </button>
                <button className="remove-button" onClick={onRemove}>
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default Ingredient;
