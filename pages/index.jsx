import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("adobo");
  const [searchTemp, setSearchTemp] = useState("adobo");
  const [load, setLoad] = useState(true);
  const [found, setFound] = useState("Recipes");
  
  const fetchData = async () => {
    const result = await axios.get("https://api.edamam.com/search", {
      params: {
        q: `${search}`,
        app_id: "2381de63",
        app_key: "4a9cc5a4fe8d6ae0a61a2b3857997b96",
        form: 0,
        to: 20,
      },
    });
    setRecipes(result.data.hits);
  };

  useEffect(() => {
    fetchData();

    setTimeout(() => {
      setLoad(false);
    }, 4000);
  }, []);

  const searchBar = (e) => {
    e.preventDefault();
    if (!search) return;

    setLoad(true);
    fetchData();
    setSearchTemp(search);
    setTimeout(() => {
      setLoad(false);
    }, 4000);
    if(recipes.length === 0) {
      setFound('No Recipes Found!')
    }
  };

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
        <form onSubmit={searchBar}>
          <input
            type="text"
            placeholder="Find a Recipe"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="disc">
        <div className="dis">{found}</div>
      </div>
      {load && <Loader />}
      <div className="items">
        {recipes.map((recipe) => {
          let index = 1;
          return <RecipeCard recipe={recipe.recipe} />;
        })}
      </div>
    </div>
  );
}
