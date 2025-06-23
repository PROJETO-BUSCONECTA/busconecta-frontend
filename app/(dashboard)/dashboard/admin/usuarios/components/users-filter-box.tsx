"use client";

import { useRouter } from "next/navigation";
import { FilterIcon, PlusIcon, UserRoundCogIcon, UserRoundSearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const UsersFilterBox = () => {
  const router = useRouter();

  const sendUserToRegister = () => {
    router.push("/dashboard/admin/usuarios/cadastro");
  };

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <div className="w-full flex items-center sm:justify-between gap-6 mb-5">
        <h4 className="text-foreground text-lg font-semibold lg:text-xl">Gerenciamento de usuários</h4>

        <Button onClick={sendUserToRegister} size="lg" variant="outline" className="w-full hidden sm:flex sm:w-52">
          Adicionar usuário <PlusIcon strokeWidth={1.5} className="size-5" />
        </Button>
      </div>

      <div className="w-full flex flex-col gap-5 sm:items-end xl:flex-row">
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-[200px_1fr]">
          <div className="w-full flex flex-col gap-1">
            <Label className="text-sm font-medium text-foreground leading-normal">Tipo da conta</Label>

            <Select>
              <SelectTrigger className="w-full input-container focus-visible:ring-0 !h-11">
                <div className="w-[calc(100%-8px)] flex items-center gap-2 overflow-hidden">
                  <UserRoundCogIcon size={20} strokeWidth={1.5} className="text-primary size-5" />

                  <SelectValue placeholder="Selecione" className="line-clamp-1" />
                </div>
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="tipo 1">tipo 1</SelectItem>
                <SelectItem value="tipo 2">tipo 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full flex flex-col gap-1">
            <Label className="text-sm font-medium text-foreground leading-normal">Nome do usuário</Label>

            <div className="relative">
              <UserRoundSearchIcon
                size={20}
                strokeWidth={1.5}
                className="text-primary absolute left-4 top-1/2 -translate-y-1/2"
              />

              <Input
                className="input-container focus-visible:ring-0 !pl-11 h-11"
                placeholder="Pesquise o nome do usuário"
              />
            </div>
          </div>
        </div>

        <Button size="lg" className="w-full sm:w-44">
          Aplicar filtro <FilterIcon strokeWidth={1.5} className="size-5 !text-white" />
        </Button>

        <Button onClick={sendUserToRegister} size="lg" variant="outline" className="w-full sm:w-44 sm:hidden">
          Adicionar usuário <PlusIcon strokeWidth={1.5} className="size-5" />
        </Button>
      </div>
    </div>
  );
};
