import { CreditMethodInfo } from "./payment-info/credit-method-info";
// import { PixMethodInfo } from "./payment-info/pix-method-info";

export const PaymentInfoBox = () => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md sm:max-w-sm">
      <h4 className="text-foreground text-lg font-semibold mb-5">
        Dados do pagamento
      </h4>

      <CreditMethodInfo />
      {/* <PixMethodInfo status="success" /> */}
    </div>
  );
};
