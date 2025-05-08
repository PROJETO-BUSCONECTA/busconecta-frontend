import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";

interface TravelLayoutProps {
  children: React.ReactNode;
}

const TravelLayout = ({ children }: TravelLayoutProps) => {
  return (
    <>
      <Header
        wrapperClassName="bg-primary h-60"
        containerClassName="absolute"
        boxClassName="bg-transparent shadow-none rounded-none"
      />

      {children}

      <Footer />
    </>
  );
};

export default TravelLayout;
