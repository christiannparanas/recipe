
function RecipeCard({ recipe }) {
   return (
      <div className="recipecard">
         <img src={recipe.image} alt=""/>
         <div className="infos">
            <div className="label">{recipe.label}</div>
            <div className="healthLabels">
               {recipe.healthLabels.map(hl => {
                  return (
                     <div className="hlabel">{hl}</div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default RecipeCard
