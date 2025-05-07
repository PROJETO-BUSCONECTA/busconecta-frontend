import { FAQ } from "./components/faq";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Travels } from "./components/travels";
import { Header } from "@/components/global/header";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Travels />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
