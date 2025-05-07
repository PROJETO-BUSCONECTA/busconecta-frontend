import { FAQ } from "./components/faq";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Travels } from "./components/travels";
import { Header } from "@/components/global/header";
import { Footer } from "../../components/global/footer";

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
