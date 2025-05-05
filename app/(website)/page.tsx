import { Hero } from "./components/hero";
import { Header } from "@/components/global/header";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
