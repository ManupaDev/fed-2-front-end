import CasualInspirations from "./components/CasualInspirations";
import HeroGrid from "./components/HeroGrid";
import Navigation from "./components/Navigation";
import TrendingSection from "./components/TrendingSection";
import TestComponent from "./components/TestComponent";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="flex flex-col gap-8 md:gap-12 pb-8">
        <HeroGrid />
        <CasualInspirations />
        <TrendingSection />
        <TestComponent />
      </main>
    </>
  );
};

export default App;
