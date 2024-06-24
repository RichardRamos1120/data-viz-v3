"use client";

import styles from '@/app/login/page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would usually send a request to your API to authenticate the user
        // For this example, we'll just redirect to the home page
        // Since we only need the admin user to login, we'll use the following credentials without using any database
        if (email === 'admin' && password === '123456') {
            router.push('/questions');
            localStorage.setItem("user", `${email}`);
        } else {
            alert('Invalid credentials');
        }
    };

    useEffect(() => {
        if (localStorage.getItem("user") === "admin") {
            router.push('/questions')
        }

    }
    , [])

    return (
        <div className={styles.container}>
            {localStorage.getItem("user") === "admin" ? <h1>You are already logged in</h1> :

                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1 className={styles.title}>Login</h1>
                    <input
                        type="text"
                        placeholder="Usename"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Login</button>
                </form>

            }
        </div>
    );
}
