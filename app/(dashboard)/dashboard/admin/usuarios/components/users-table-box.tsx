import { columns } from "./users-table/column";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "./users-table/data-table";

export const users = [
    {
        id: "1",
        name: "Lucas Almeida",
        email: "lucas.almeida@gmail.com",
        accountType: "Administrador",
        company: "Viação Brasil",
        channel: "Website",
    },
    {
        id: "2",
        name: "Mariana Souza",
        email: "mariana.souza@empresa.com",
        accountType: "Operacional",
        company: "Viação Sul",
        channel: "Aplicativo",
    },
    {
        id: "3",
        name: "Carlos Pereira",
        email: "carlos.pereira@empresa.com",
        accountType: "Financeiro",
        company: "Viação Norte",
        channel: "API",
    },
    {
        id: "4",
        name: "Ana Oliveira",
        email: "ana.oliveira@gmail.com",
        accountType: "Administrador",
        company: "Viação Leste",
        channel: "Website",
    },
    {
        id: "5",
        name: "Fernando Lima",
        email: "fernando.lima@empresa.com",
        accountType: "Operacional",
        company: "Viação Oeste",
        channel: "PDV",
    },
    {
        id: "6",
        name: "Juliana Mendes",
        email: "juliana.mendes@gmail.com",
        accountType: "Financeiro",
        company: "Viação Brasil",
        channel: "Aplicativo",
    },
    {
        id: "7",
        name: "Bruno Carvalho",
        email: "bruno.carvalho@empresa.com",
        accountType: "Operacional",
        company: "Viação Sul",
        channel: "Website",
    },
    {
        id: "8",
        name: "Patrícia Gomes",
        email: "patricia.gomes@gmail.com",
        accountType: "Administrador",
        company: "Viação Norte",
        channel: "API",
    },
    {
        id: "9",
        name: "Ricardo Santos",
        email: "ricardo.santos@empresa.com",
        accountType: "Financeiro",
        company: "Viação Leste",
        channel: "PDV",
    },
    {
        id: "10",
        name: "Camila Ferreira",
        email: "camila.ferreira@gmail.com",
        accountType: "Operacional",
        company: "Viação Oeste",
        channel: "Aplicativo",
    },
];

export const UsersTableBox = () => {
    return (
        <>
            <DataTable columns={columns} data={users} />
        </>
    );
};

export const UsersTableBoxLoading = () => {
    return <Skeleton className="w-full h-[358px]" />;
};
