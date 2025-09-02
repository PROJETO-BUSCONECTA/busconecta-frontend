import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header
                wrapperClassName="bg-primary h-60"
                containerClassName="absolute"
                boxClassName="bg-transparent shadow-none rounded-none"
            />

            {children}

            <Footer />
        </div>
    );
};

export default AuthLayout;
