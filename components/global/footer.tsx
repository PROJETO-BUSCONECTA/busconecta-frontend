import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full bg-[url(/images/footer-mobile.png)] bg-[length:100%_100%] mt-16 sm:bg-[url(/images/footer-tablet.png)] lg:bg-[url(/images/footer-desktop.png)]">
      <div className="w-full px-6 pt-12 pb-9 flex flex-col items-center gap-9 sm:px-16 sm:pt-28 lg:container lg:mx-auto">
        <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <Link href="/" className="w-fit">
            <Image
              src="/images/logo-footer.png"
              alt="Busconecta"
              width={283}
              height={70}
              className="object-cover object-left"
            />
          </Link>

          <Button variant="secondary" size="lg">
            Entre em contato
            <Image src="/icons/whatsapp.svg" alt="Whatsapp" width={24} height={24} />
          </Button>
        </div>

        <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:justify-between sm:items-end">
          <ul className="flex items-center gap-6">
            <li className="size-9">
              <a href="*" target="_blank" rel="noreferrer noopener">
                <Image src="/icons/facebook.svg" alt="Facebook" width={36} height={36} />
              </a>
            </li>

            <li className="size-9">
              <a href="*" target="_blank" rel="noreferrer noopener">
                <Image src="/icons/instagram.svg" alt="Instagram" width={36} height={36} />
              </a>
            </li>

            <li className="size-9">
              <a href="*" target="_blank" rel="noreferrer noopener">
                <Image src="/icons/gmail.svg" alt="Gmail" width={36} height={36} />
              </a>
            </li>
          </ul>

          <div className="w-full flex flex-col items-center gap-7 sm:items-end lg:flex-row lg:w-fit">
            <Link href="/termos-de-uso" className="text-base font-medium text-white">
              Termos de Uso
            </Link>

            <Link href="/politica-de-privacidade" className="text-base font-medium text-white">
              Política de Privacidade
            </Link>

            <span className="text-sm font-medium text-white leading-relaxed">
              © Todos os direitos reservados por BusConecta 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
