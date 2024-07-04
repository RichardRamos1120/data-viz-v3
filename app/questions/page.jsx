"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";

import React from 'react'

import QuestionNav from '@/app/components/QuestionNav'
import Image from "next/image";
import questionTitles from "@/app/components/QuestionTitles";
import Link from "next/link";

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
      <div>
       {
        Object.keys(questionTitles).map(key => (
            <div key={key} className="main-home-card">
                <Link href={`/questions/${key}`}>
                  <h1>Question: {key}</h1>
                  <p>Description: {questionTitles[key]}</p>
                </Link>
            </div>
        ))
       }
      </div>
    </section>
  )
}
