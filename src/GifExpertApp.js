import React, { useState } from 'react'
import { AddCatgory } from './components/AddCatgory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    
    const [categorias, setCategorias] = useState(['One Piece']);

    
    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCatgory setCategorias = {setCategorias} />
            <hr/>
            <ol>
                {
                    categorias.map(categoria => (
                         <GifGrid key={categoria} categoria={categoria} />
                    ) )
                }
            </ol>
            
        </div>
    )
}

export default GifExpertApp

