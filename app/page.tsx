"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Menu from "@/components/Menu";
import { BookHeart, PenLine } from "lucide-react";


export default function Home() {

  return (

    <main className="
    min-h-screen
    text-white
    flex
    items-center
    justify-center
    p-6
    ">


      <motion.div

      initial={{
        opacity:0,
        y:40
      }}

      animate={{
        opacity:1,
        y:0
      }}

      className="
      max-w-xl
      text-center
      "
      >


        <BookHeart
        size={70}
        className="
        mx-auto
        text-yellow-300
        mb-6
        "
        />


        <h1 className="
        text-5xl
        font-serif
        text-yellow-200
        ">

        Diário com Deus

        </h1>


        <p className="
        mt-6
        text-lg
        text-green-100
        ">

        Um lugar reservado para suas orações,
        reflexões e momentos especiais com Deus.

        </p>


        <Link

        href="/diario"

        className="
        inline-flex
        items-center
        gap-3
        mt-10
        bg-yellow-400
        text-green-950
        px-8
        py-4
        rounded-full
        font-bold
        "

        >

        <PenLine/>

        Entrar no meu diário

        </Link>


      </motion.div>


      <Menu/>


    </main>

  );

}
