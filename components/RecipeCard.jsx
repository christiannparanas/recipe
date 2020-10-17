
function RecipeCard({ recipe }) {
   return (
      <div className="recipecard">
         <img src={recipe.image} alt=""/>
         <div className="infos">
            <div className="label">{recipe.label}</div>
            <div className="healthLabels"></div>
         </div>
      </div>
   )
}

export default RecipeCard
