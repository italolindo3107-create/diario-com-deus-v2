"use client";

import Link from "next/link";
import {
  Home,
  BookOpen,
  PenLine,
  Star,
  Settings
} from "lucide-react";


export default function Menu() {

  return (

    <nav
      className="
      fixed
      bottom-6
      left-1/2
      -translate-x-1/2
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      rounded-full
      px-6
      py-3
      shadow-xl
      "
    >

      <div className="flex gap-6 text-yellow-200">

        <Link href="/">
          <Home size={24}/>
        </Link>

        <Link href="/diario">
          <PenLine size={24}/>
        </Link>

        <Link href="/biblia">
          <BookOpen size={24}/>
        </Link>

        <Link href="/favoritos">
          <Star size={24}/>
        </Link>

        <Link href="/configuracoes">
          <Settings size={24}/>
        </Link>

      </div>

    </nav>

  );
}
