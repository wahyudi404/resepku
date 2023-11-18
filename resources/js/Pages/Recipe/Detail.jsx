import ButtonBack from '@/Components/ButtonBack'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

const Detail = (props) => {
    const { auth, recipe } = props
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])

    useEffect(() => {
        setTitle(recipe.title)
        setDescription(recipe.description)
        setImage(recipe.image)
        setIngredients(JSON.parse(recipe.ingredients))
        setInstructions(JSON.parse(recipe.instructions))
    }, [])

    return (
        <GuestLayout auth={auth}>
            <Head title='Detail' />

            <div style={{
                padding: '0 4%',
            }}>
                <ButtonBack/>
                <img src={image} alt={title} className='d-block w-100 mx-auto mb-4' style={{ maxHeight: '380px', objectFit: 'cover', borderRadius: '5px' }} />
                <h1 style={{ fontSize: '28px' }}>{title}</h1>
                <p>
                    {description}
                </p>

                <h5>Bahan-bahan</h5>
                <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                    {ingredients.map((ingredient, index) => (
                        <li className='mb-2' key={index}>{ingredient}</li>
                    ))}
                </ul>

                <h5>Langkah Pembuatan</h5>
                <ul style={{ listStyle: 'alpha' }}>
                    {instructions.map((instruction, index) => (
                        <li className='mb-2' key={index}>{instruction}</li>
                    ))}
                </ul>
            </div>
        </GuestLayout>
    )
}

export default Detail
