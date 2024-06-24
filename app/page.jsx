"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";

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
    <main>Loading...</main>
  );
}
