import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import { FcLike } from "react-icons/fc";

import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [ search, setSearch ] = useState("adobo")
  

  useEffect(() => {
    if(!search) {
      setSearch('adobo')
    }

    const fetchData = async () => {
      const result = await axios.get("https://api.edamam.com/search", {
        params: {
          q: `${search}`,
          app_id: "2381de63",
          app_key: "4a9cc5a4fe8d6ae0a61a2b3857997b96",
          form: 0,
          to: 10,
        },
      });
      setRecipes(result.data.hits);
    };

    fetchData();
  }, [search]);

  console.log(recipes);

  return (
    <div className="main">
      <Head>
        <title>Recipe</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <div className="nav">
        <div className="logo">Recipe</div>
        <div className="search">
          <input
            type="text"
            placeholder="Find a Recipe"
            onInput={(e) => setSearch(e.target.value)}
          />
          <div className="fav">
            <FcLike />
          </div>
        </div>
      </div>
      <Loader />
      <div className="items">
        {recipes.map((recipe) => {
          return (
            <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
          );
        })}
      </div>
    </div>
  );
}
