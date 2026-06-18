import { items } from "./data.js";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
        title="Eco-Chic Soles."
        tagline="Where Luxury meets the natural path!"
      />
      <CardGrid items={items} />
    </main>
  );
}