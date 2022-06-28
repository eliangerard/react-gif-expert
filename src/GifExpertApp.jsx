import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Halo', 'One Piece' ]);

    const onNewCategory = (category) => {
        
        if(categories.find(item => item.toLocaleLowerCase() == category.toLocaleLowerCase() )) return;

        setCategories([category, ...categories]);
    }

    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { onNewCategory } 
            />

            { 
                categories.map( (category) => (
                    <GifGrid 
                        key = {category} 
                        category={category}/>
                ))
            }
        </>

    )
}