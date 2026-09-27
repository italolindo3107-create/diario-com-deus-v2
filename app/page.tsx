import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-yellow-200">
          Diário com Deus 🌿
        </h1>

        <p className="mt-6 text-xl text-white">
          Seu espaço de oração, reflexão e fé.
        </p>

        <button className="
          mt-10
          bg-yellow-400
          text-green-950
          px-8
          py-4
          rounded-full
          font-bold
        ">
          ✍️ Nova conversa com Deus
        </button>

      </div>

      <Menu />

    </main>
  );
}
