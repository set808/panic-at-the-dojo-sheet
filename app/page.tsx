import dynamic from "next/dynamic";

const CharacterSheet = dynamic(() => import("@/components/CharacterSheet"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100">
      <CharacterSheet />
    </main>
  )
}
