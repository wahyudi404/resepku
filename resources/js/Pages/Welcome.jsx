import GuestLayout from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';
import Recipe from '@/Pages/Recipe/Index';
import { useEffect, useState } from 'react';

export default function Welcome(props) {
    const [recipes, setRecipes] = useState([])
    const { errors, auth } = props

    useEffect(() => {
        setRecipes(props.recipes)
    })

    // check object is empty
    if (Object.keys(errors).length > 0) {
        console.log("error", errors);
    }

    return (
        <>
            <Head title="Welcome" />
            <GuestLayout auth={auth}>
                <Recipe recipes={recipes} auth={auth} />
            </GuestLayout>
        </>
    );
}
