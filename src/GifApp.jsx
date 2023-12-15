import { useState } from "react";

export const GifApp = () => {
    const [categories, setCategories] = useState([ 'Kanye', 'West'] );
  return (
    <>
    <h1>GifApp</h1>

    <ol>
        { categories.map( category => {
            return <li key={ category } > {category} </li>
        }) }
        {/* <li>
            ABC
        </li> */}
    </ol>
    </>
  )
}
