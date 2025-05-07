import { Footer } from "@/components/global/footer";
import { Header } from "@/components/global/header";
import { RegisterBox } from "./components/register-box";

const RegisterPage = () => {
  return (
    <>
      <Header
        wrapperClassName="bg-primary h-60"
        containerClassName="absolute"
        boxClassName="bg-transparent shadow-none rounded-none"
      />

      <RegisterBox />

      <Footer />
    </>
  );
};

export default RegisterPage;
