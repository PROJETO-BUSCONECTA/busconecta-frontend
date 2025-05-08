import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
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

export default AuthLayout;
