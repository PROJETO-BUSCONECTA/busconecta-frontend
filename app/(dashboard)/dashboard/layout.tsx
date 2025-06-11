import { Header } from "@/components/global/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header
        wrapperClassName="bg-primary h-44"
        containerClassName="absolute"
        boxClassName="bg-transparent shadow-none rounded-none"
      />

      {children}
    </>
  );
};

export default DashboardLayout;
