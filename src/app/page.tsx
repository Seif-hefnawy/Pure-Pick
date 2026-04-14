import CategoriesPage from "./(pages)/categories/page";
import Products from "./(pages)/products/page";
import CategorySlider from "./_components/CategorieSlider/CategorieSlider";



import HeroSection from "./_components/HeroSection/HeroSection";
import SectionWrapper from "./_components/scroll/SectionWrapper";


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
      <SectionWrapper>
        <CategorySlider/>
      </SectionWrapper>
         <Products /> 
    </main>
    </>
  );
}
