import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import AuthenticateLayout from '@/Layouts/AuthenticateLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <AuthenticateLayout>
            <Head title="Log in" />


            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh'
            }}>
                {status && <div className="text-success">{status}</div>}
                <form onSubmit={submit} style={{
                    minWidth: '400px',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }}>
                    <div className='mb-4'>
                        <h2 className='text-center'>Log in</h2>
                    </div>
                    <div className='mb-3'>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className={errors.email ? `is-invalid` : ``}
                            autoComplete="username"
                            isFocused={true}
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

                    <div className="block mt-4">
                        <Checkbox id="remember" name="remember" value={data.remember} label="Ingat saya" onChange={handleOnChange} />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {/* {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className='d-block mb-2'
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                Forgot your password?
                            </Link>
                        )} */}

                        <Button type='submit' className="btn-primary ml-4 w-100 d-block" disabled={processing}>
                            Log in
                        </Button>

                        <Link href={route('register')} className='d-block mt-2 text-center' style={{ textDecoration: 'none', fontSize: '14px' }}>
                            Belum punya akun? Register
                        </Link>
                    </div>
                </form>
            </div>
        </AuthenticateLayout>
    );
}
