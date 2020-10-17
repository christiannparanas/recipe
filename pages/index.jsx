import Head from "next/head";
// import { Button } from '@material-ui/core';
import Nav from "../components/Nav";
import { useState, useEffect } from 'react'
import axios from 'axios'

import RecipeCard from '../components/RecipeCard'

export default function Home() {
  const [ recipes, setRecipes ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.edamam.com/search",{
        params:{
            q: "adobo",
            app_id:"2381de63",
            app_key:"4a9cc5a4fe8d6ae0a61a2b3857997b96",
            form:0,
            to:10,
        }
      })
      setRecipes(result.data.hits)
    }

    fetchData();
  }, [])

  console.log(recipes)


  return (
    <div className="main">
      <Head>
        <title>Recipe</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Nav />
      <div className="items">
        {recipes.map((recipe) => {
          return (
            <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
          )
        })}
      </div>
    </div>
  );
}

{
  /* <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div> */
}
