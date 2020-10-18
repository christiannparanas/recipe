import { BsDot } from "react-icons/bs";

function RecipeCard({ recipe }) {
  return (
    <div className="recipecard">
      <img src={recipe.image} alt="" />
      <div className="infos">
        <div className="label">{recipe.label}</div>
        <div className="healthLabels">
          {recipe.healthLabels.map((hl) => {
            return <div className="hlabel">{hl}</div>;
          })}
        </div>
      </div>
      <div className="ingredients">
        <div className="head">Ingredients: </div>
        {recipe.ingredients.map((ing) => {
          return (
            <div className="each">
              <BsDot /><p>{ing.text}</p>
            </div>
          );
        })}
      </div>
      <div className="show">
        <div className="ing">Hide ingredients</div>
      </div>
    </div>
  );
}

export default RecipeCard;
