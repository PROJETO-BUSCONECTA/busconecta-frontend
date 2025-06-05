"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { TravelersForm } from "./travelers-form";

const travelerSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(100, "Só é permitido no máximo 100 caracteres"),
  birthDate: z.coerce.date({ message: "Data inválida" }),
  documentType: z.enum(["Passaporte", "CPF"], { message: "Opção inválida" }),
  documentNumber: z
    .string()
    .min(1, "Número do documento é obrigatório")
    .max(14, "Só é permitido no máximo 14 caracteres"),
});

const formSchema = z
  .object({
    travelers: z
      .array(travelerSchema)
      .min(1, "É preciso ter pelo menos 1 viajante"),
    email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
    tel: z
      .string()
      .min(1, "Telefone é obrigatório")
      .max(15, "Telefone inválido"),
    notification: z.boolean({ message: "Valor inválido" }),
    paymentMethod: z.enum(["credit", "pix", "transfer"]),
    cardNumber: z.string().optional(),
    validDate: z.string().optional(),
    cvv: z.string().optional(),
    holderName: z.string().optional(),
    documentLinkedCard: z.string().optional(),
    postalCode: z.string().optional(),
    installments: z.number().optional(),
    bank: z.string().optional(),
    documentLinkedBank: z.string().optional(),
    bankAgency: z.string().optional(),
    bankAccount: z.string().optional(),
  })
  .superRefine(
    (
      {
        paymentMethod,
        cardNumber,
        validDate,
        cvv,
        holderName,
        documentLinkedCard,
        postalCode,
        installments,
        bank,
        documentLinkedBank,
        bankAgency,
        bankAccount,
      },
      ctx,
    ) => {
      if (paymentMethod === "credit" && !cardNumber) {
        ctx.addIssue({
          code: "custom",
          message: "Número do cartão obrigatório",
          path: ["cardNumber"],
        });
      }

      if (paymentMethod === "credit" && cardNumber && cardNumber.length > 16) {
        ctx.addIssue({
          code: "custom",
          message: "Número do cartão inválido",
          path: ["cardNumber"],
        });
      }

      if (
        paymentMethod === "credit" &&
        cardNumber &&
        /[a-zA-Z]/.test(cardNumber)
      ) {
        ctx.addIssue({
          code: "custom",
          message: "Número do cartão inválido",
          path: ["cardNumber"],
        });
      }

      if (paymentMethod === "credit" && !validDate) {
        ctx.addIssue({
          code: "custom",
          message: "Validade do cartão é obrigatória",
          path: ["validDate"],
        });
      }

      if (paymentMethod === "credit" && validDate && validDate.length > 5) {
        ctx.addIssue({
          code: "custom",
          message: "Validade do cartão inválida",
          path: ["validDate"],
        });
      }

      if (
        paymentMethod === "credit" &&
        validDate &&
        !/^(0[1-9]|1[0-2])\/\d{2}$/.test(validDate)
      ) {
        ctx.addIssue({
          code: "custom",
          message: "Validade do cartão inválida",
          path: ["validDate"],
        });
      }

      if (paymentMethod === "credit" && !cvv) {
        ctx.addIssue({
          code: "custom",
          message: "CVV é obrigatório",
          path: ["cvv"],
        });
      }

      if (paymentMethod === "credit" && cvv && cvv.length > 4) {
        ctx.addIssue({
          code: "custom",
          message: "CVV inválido",
          path: ["cvv"],
        });
      }

      if (paymentMethod === "credit" && cvv && /[a-zA-Z]/.test(cvv)) {
        ctx.addIssue({
          code: "custom",
          message: "CVV inválido",
          path: ["cvv"],
        });
      }

      if (paymentMethod === "credit" && !holderName) {
        ctx.addIssue({
          code: "custom",
          message: "Nome do títular é obrigatório",
          path: ["holderName"],
        });
      }

      if (paymentMethod === "credit" && !documentLinkedCard) {
        ctx.addIssue({
          code: "custom",
          message: "Documento vinculado ao cartão é obrigatório",
          path: ["documentLinkedCard"],
        });
      }

      if (paymentMethod === "credit" && !postalCode) {
        ctx.addIssue({
          code: "custom",
          message: "CEP é obrigatório",
          path: ["postalCode"],
        });
      }

      if (paymentMethod === "credit" && postalCode && postalCode.length > 9) {
        ctx.addIssue({
          code: "custom",
          message: "CEP inválido",
          path: ["postalCode"],
        });
      }

      if (paymentMethod === "credit" && !installments) {
        ctx.addIssue({
          code: "custom",
          message: "Parcelas é obrigatório",
          path: ["installments"],
        });
      }

      if (paymentMethod === "transfer" && !bank) {
        ctx.addIssue({
          code: "custom",
          message: "Banco é obrigatório",
          path: ["bank"],
        });
      }

      if (paymentMethod === "transfer" && !bank) {
        ctx.addIssue({
          code: "custom",
          message: "Banco é obrigatório",
          path: ["bank"],
        });
      }

      if (paymentMethod === "transfer" && !documentLinkedBank) {
        ctx.addIssue({
          code: "custom",
          message: "Documento vinculado ao banco é obrigatório",
          path: ["documentLinkedBank"],
        });
      }

      if (paymentMethod === "transfer" && !bankAgency) {
        ctx.addIssue({
          code: "custom",
          message: "Agencia é obrigatório",
          path: ["bankAgency"],
        });
      }

      if (paymentMethod === "transfer" && !bankAccount) {
        ctx.addIssue({
          code: "custom",
          message: "Conta é obrigatório",
          path: ["bankAccount"],
        });
      }
    },
  );

export const PaymentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      travelers: [],
      email: "",
      tel: "",
      notification: false,
      paymentMethod: "credit",
      cardNumber: "",
      validDate: "",
      cvv: "",
      holderName: "",
      documentLinkedCard: "",
      postalCode: "",
      installments: 1,
      bank: "",
      documentLinkedBank: "",
      bankAgency: "",
      bankAccount: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <TravelersForm />
      </form>
    </Form>
  );
};
