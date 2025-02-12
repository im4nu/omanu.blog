"use client";

import Image from "next/image";
import LinkDemo from "./ui/Link";
import { DocumentDownload, Whatsapp } from "iconsax-react";

const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = "/curriculo_emmanuel_r.pdf"; // Substitua pelo caminho correto do seu PDF
  link.download = "curriculo.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function HeroUserActions() {
  return (
    <div>
      {/* ...existing code... */}
      <div className="flex flex-col lg:flex-row w-full justify-around mt-4 lg:mt-8 gap-4 lg:gap-6">
        <LinkDemo variant="outlined" link={"https://github.com/im4nu"}>
          Visitar github{" "}
          <Image
            src={"/icons/github-mark-white.svg"}
            alt="Ícone github"
            width={24}
            height={24}
            className="ml-4"
          />
        </LinkDemo>

        <button
          className="flex items-center bg-white/10 border border-main justify-center rounded-xl text-white px-8 py-4 hover:opacity-80 hover:cursor-pointer ease-linear duration-300"
          onClick={downloadPDF}
        >
          Baixar currículo <DocumentDownload className="ml-4" />
        </button>

        <LinkDemo
          variant="outlined"
          link={
            "https://wa.me/5588988770502?text=Olá%2C%20vim%20do%20seu%20site,%20podemos%20conversar?"
          }
        >
          Conversar <Whatsapp className="ml-4" />
        </LinkDemo>
      </div>
    </div>
  );
}
