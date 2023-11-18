import { useEffect } from 'react';
import AuthenticateLayout from '@/Layouts/AuthenticateLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <AuthenticateLayout>
            <Head title="Register" />

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
                <form onSubmit={submit} style={{
                    minWidth: '400px',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }}>
                    <div className='mb-4'>
                        <h2 className='text-center'>Register</h2>
                    </div>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className={errors.name ? `is-invalid` : ``}
                            autoComplete="username"
                            isFocused={true}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className='mt-4'>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className={errors.email ? `is-invalid` : ``}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className={errors.password ? `is-invalid` : ``}
                            autoComplete="current-password"
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className={errors.password_confirmation ? `is-invalid` : ``}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button type='submit' className="btn-primary ml-4 w-100 d-block" disabled={processing}>
                            Register
                        </Button>

                        <Link href={route('login')} className='d-block mt-2 text-center' style={{ textDecoration: 'none', fontSize: '14px' }}>
                            Sudah punya akun? Login
                        </Link>
                    </div>
                </form>
            </div>
        </AuthenticateLayout>
    )
}
