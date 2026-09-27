import Link from "next/link";

export default function Menu() {
  return (
    <nav className="
      fixed
      bottom-5
      left-1/2
      -translate-x-1/2
      bg-white/10
      backdrop-blur
      rounded-full
      px-8
      py-4
    ">

      <div className="flex gap-6 text-yellow-200">

        <Link href="/">🏠</Link>

        <Link href="/diario">
          ✍️
        </Link>

        <Link href="/biblia">
          📖
        </Link>

        <Link href="/favoritos">
          ⭐
        </Link>

        <Link href="/configuracoes">
          ⚙️
        </Link>

      </div>

    </nav>
  );
}
