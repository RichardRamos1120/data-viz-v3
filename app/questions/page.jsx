"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";

import React from 'react'

import QuestionNav from '@/app/components/QuestionNav'


export default function Page() {

    const router = useRouter()
    useEffect(() => {
        if (localStorage.getItem("user") !== "admin") {
            router.push('/login')
        }else {
            router.push('/questions/')
        }

        return () => 0
    }, [])

  return (
    <section className='main-home'>
      <h1>Home</h1>
    </section>
  )
}
