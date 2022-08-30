import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Bandoneon']);
    const onAddCategory = (newCategory) => {
        // categories.push('Hola mundo');
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            {/*   Titulo    */}
            <h1>GifExpertApp</h1>

            {/*   Input    */}
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {/*   Listado de Gif    */}
                {categories.map(category => (
                    <GifGrid key={ category } category={ category } aria-label='categoria'/>
                ))}


            {/*   Gif item    */}


        </>
    )
}
