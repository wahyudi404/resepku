import Button from '@/Components/Button'
import ButtonBack from '@/Components/ButtonBack'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextAreaInput from '@/Components/TextAreaInput'
import TextInput from '@/Components/TextInput'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useState } from 'react'

const Create = (props) => {
    const { auth } = props
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState(['', ''])
    const [instructions, setInstructions] = useState(['', ''])
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        ingredients: [],
        instructions: [],
        image: null
    })

    const handleOnChange = (e, index = null) => {
        // console.log(e.target.files[0]);
        const targetName = e.target.name
        let targetValue = e.target.value
        switch (targetName) {
            case 'title':
                setTitle(targetValue)
                break;
            case 'description':
                setDescription(targetValue)
                break;
            case 'ingredients':
                const newIngredients = [...ingredients]
                newIngredients[index] = targetValue
                setIngredients(newIngredients)
                targetValue = newIngredients
                break;
            case 'instructions':
                const newInstructions = [...instructions]
                newInstructions[index] = targetValue
                setInstructions(newInstructions)
                targetValue = newInstructions
                break;
            case 'image':
                targetValue = e.target.files[0]
                setData('image', targetValue)
                setImage(targetValue)
                setPreview(URL.createObjectURL(targetValue))
                break;

            default:
                console.log(targetName, targetValue);
                break;
        }

        setData(targetName, targetValue);
    }

    const onSubmit = (e) => {
        e.preventDefault()

        post(route('recipe.store'), {
            onSuccess: () => {
                document.getElementById('description').value = null
                document.getElementById('image').value = null
                setTitle('')
                setDescription('')
                setIngredients(['', ''])
                setInstructions(['', ''])
                setImage(null)
                setPreview(null)
                reset()
                // buat alert success
                alert('Resepmu berhasil ditambahkan!')
            }
        })
    }

    // tambah item bahan
    const handleAddIngredient = (e) => {
        e.preventDefault()
        setIngredients([...ingredients, ''])
    }

    // tambah item langkah pembuatan
    const handleAddInstruction = (e) => {
        e.preventDefault()
        setInstructions([...instructions, ''])
    }

    return (
        <GuestLayout auth={auth}>
            <Head title='Tulis Resepmu' />
            <div style={{
                padding: '0 4%',
            }}>
                <ButtonBack/>
                <h3 className='text-primary'>Tulis resepmu...</h3>
                <form onSubmit={onSubmit}>

                    {/* Input Title */}
                    <div>
                        <InputLabel htmlFor="title" value="Judul" />

                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={title}
                            className={errors.title ? `is-invalid` : ``}
                            onChange={(e) => handleOnChange(e)}
                        />

                        <InputError id="title" message={errors.title} />
                    </div>

                    {/* Input Description */}
                    <div className='mt-4'>
                        <InputLabel htmlFor="description" value="Deskripsi" />

                        <TextAreaInput
                            id="description"
                            defaultValue={description}
                            className={errors.description ? `is-invalid` : ``}
                            onChange={(e) => handleOnChange(e)}
                        />

                        <InputError id="description" message={errors.description} />
                    </div>

                    {/* Input Ingredients */}
                    <div className='mt-4'>
                        <InputLabel htmlFor="ingredients" value="Bahan-bahan" className={'text-primary fw-bold'} />

                        {ingredients.map((ingredient, i) => (
                            <TextInput
                                key={i}
                                id="ingredients"
                                type="text"
                                name="ingredients"
                                value={ingredient}
                                className={errors.ingredients ? `is-invalid mb-3` : `mb-3`}
                                onChange={(e) => handleOnChange(e, i)}
                            />
                        ))}

                        <InputError id="ingredients" message={errors.ingredients} />

                        <a href='#' onClick={(e) => { handleAddIngredient(e) }} style={{ color: 'black', textDecoration: 'none' }} className='d-block mt-4'>
                            + Item Bahan
                        </a>
                    </div>

                    {/* Input Instructions */}
                    <div className='mt-4'>
                        <InputLabel htmlFor="instructions" value="Langkah Pembuatan" className={'text-primary fw-bold'} />

                        {instructions.map((instruction, i) => (
                            <TextInput
                                key={i}
                                id="instructions"
                                type="text"
                                name="instructions"
                                value={instruction}
                                className={errors.instructions ? `is-invalid mb-3` : `mb-3`}
                                onChange={(e) => handleOnChange(e, i)}
                            />
                        ))}

                        <InputError id='instructions' message={errors.instructions} />

                        <a href='#' onClick={(e) => handleAddInstruction(e)} style={{ color: 'black', textDecoration: 'none' }} className='d-block mt-4'>
                            + Item Langkah
                        </a>
                    </div>

                    {/* Input image */}
                    <div className='mt-4'>
                        <InputLabel htmlFor="image" value="Upload Foto Masakan" />
                        {preview && (
                            <img src={preview} alt="preview" className='d-block mb-2' style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        )}

                        <TextInput
                            id="image"
                            type="file"
                            name="image"
                            className={errors.image ? `is-invalid` : ``}
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={(e) => handleOnChange(e)}
                        />

                        <InputError id="image" message={errors.image} />
                    </div>

                    <Button type='submit' className='btn-primary mt-5 w-100'>
                        Terbitkan Resep
                    </Button>
                    <Link href='/' className='btn btn-outline-info d-block w-100 mt-3'>
                        Kembali
                    </Link>
                </form>
            </div>
        </GuestLayout>
    )
}

export default Create
