import Card from '@/Components/Card'
import { Link, useForm } from '@inertiajs/react';
import React from 'react'

const Index = ({ recipes, auth }) => {

    const { post } = useForm({})

    const onLike = (id) => {
        post(route("recipe.like", id))
    }

    return (
        <>
            <h3 className='my-4'>Resep Terbaru</h3>
            <div className='row'>
                {!recipes.length ? (
                    <h4 className='text-center'>Belum Ada Postingan Apapun</h4>
                ) : recipes.map((recipe, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <Card
                            image={recipe.image}
                            title={recipe.title}
                            likes={recipe.likes}
                            auth={auth}
                            description={recipe.description}
                            href={route('recipe.show', recipe.id)}
                            onClickBtn={() => onLike(recipe.id)}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Index
