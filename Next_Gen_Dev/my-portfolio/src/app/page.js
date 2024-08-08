import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <header className="px-28 pt-5 sticky top-0">
        <Navbar  />
      </header>
      <main className="min-h-screen">
        <h1>Muhammad Sayem Ijaz</h1>
      </main>
    </>
  );
}
