import Ingredient from './Ingredient.jsx'

const IngredientsList = ({ list }) =>
    <ul className="ingredients">
        {list.map((ingredient, i) =>
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>

export default IngredientsList
