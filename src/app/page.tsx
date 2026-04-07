import CategoriesPage from "./(pages)/categories/page";
import Products from "./(pages)/products/page";

import HeroSection from "./_components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection/>
        <CategoriesPage />
        <Products />
      </main>
    </>
  );
}
