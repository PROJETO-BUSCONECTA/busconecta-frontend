import { LoginBox } from "./components/login-box";
import { Footer } from "@/components/global/footer";
import { Header } from "@/components/global/header";

const LoginPage = () => {
  return (
    <>
      <Header
        wrapperClassName="bg-primary h-60"
        containerClassName="absolute"
        boxClassName="bg-transparent shadow-none rounded-none"
      />

      <LoginBox />

      <Footer />
    </>
  );
};

export default LoginPage;
