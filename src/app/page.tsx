import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowDown2, ArrowRight, ArrowUp2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center font-raleway text-white font-medium">
      <Navbar />

      <section
        id="hero"
        className="flex flex-col min-h-[680px] lg:flex-row bg-hero-mobile bg-no-repeat bg-cover bg-right px-[10%] sm:bg-hero-tablet w-full lg:items-center lg:justify-center h-full"
      >
        <aside className="lg:flex hidden w-1/2 h-full min-h-screen items-center justify-center bg-hero-desktop bg-cover bg-center">
          <div className="flex flex-col h-fit items-center justify-center bg-main-300 rounded-sm">
            <Image
              alt="Foto do Manu o dev"
              src={"/images/manu-profile.png"}
              width={388}
              height={403}
            />

            <p className="my-6">Emmanuel Rodrigues #manu</p>
          </div>
        </aside>

        <div className="flex flex-col items-start justify-center pt-[144px] lg:pt-0 gap-8 lg:w-1/2 h-full lg:h-fit w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:justify-between w-full sm:w-4/5">
            <div className="flex flex-row items-center gap-2 font-semibold">
              <span className="flex rounded-lg bg-main-100 p-3 items-center text-main">
                +4
              </span>
              <p className="text-main-100">Anos no mercado tech</p>
            </div>

            <p>Front | Design</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl lg:w-4/5 capitalize">
            Engenheiro <span className="text-main-100">Front-end</span> e{" "}
            <span className="text-main-100">web designer</span>
          </h1>

          <Link
            href="/projects"
            className="underline group text-main-100 sm:text-lg flex flex-row items-center justify-center gap-3"
          >
            Ver projetos online
            <ArrowRight
              size="32"
              variant="TwoTone"
              className="group-hover:ml-2 ease-in duration-300"
            />
          </Link>

          <a
            href="#about"
            className="rounded-xl items-center flex w-[180px] py-3 bg-main-300 justify-center font-medium hover:opacity-75 ease-in duration-300"
          >
            Saber mais
          </a>
        </div>
      </section>

      <a href="#about" className="flex justify-center -mt-28">
        <ArrowDown2 size="32" color="#FFF" className="animate-bounce" />
      </a>

      <section
        id="about"
        className="flex flex-col min-h-[800px] lg:min-h-[1024px] h-full py-12 items-center justify-around bg-about bg-cover bg-center bg-no-repeat w-full"
      >
        <h2 className="mt-8">Sobre mim</h2>

        <div className="flex flex-col items-center justify-center w-4/5 sm:w-[350px] lg:w-[400px] text-center gap-4">
          <Image
            alt="Imagem de perfil do manu"
            src={"/images/manu-profile-2.png"}
            width={100}
            height={100}
          />

          <p>
            Olá! Sou um jovem de 21 anos apaixonado por tecnologia, atualmente
            cursando o
            <span className="text-main-100">
              {" "}
              8º semestre de Sistemas na UNIFAP.
            </span>
          </p>
          <div className="flex w-full bg-white h-[1px]"></div>
          <p>
            Codo em{" "}
            <span className="text-main-100">
              React, Next.js, TypeScript e Tailwind CSS.
            </span>{" "}
            Essas são as ferramentas que utilizo para criar experiências
            digitais incríveis e responsivas. Além disso,{" "}
            <span className="text-main-100">
              tenho trabalhado em diversos projetos em React Native,
            </span>{" "}
            trazendo ideias para a palma da sua mão.
          </p>
          <div className="flex w-full bg-white h-[1px]"></div>
          <p>
            No mais é isso...{" "}
            <span className="text-main-100">
              Abaixo você confere algumas das tecnologias que uso no meu
              dia-dia.
            </span>
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 lg:gap-8">
          <Image
            alt="Ícone Css"
            src={"/icons/css.svg"}
            width={32}
            height={32}
            className="hover:scale-125 ease-linear duration-300"
          />
          <Image
            alt="Ícone Html"
            src={"/icons/html.svg"}
            width={32}
            height={32}
            className="hover:scale-125 ease-linear duration-300"
          />
          <Image
            alt="Ícone Nextjs"
            src={"/icons/nextjs.svg"}
            width={32}
            height={32}
            className="hover:scale-125 ease-linear duration-300"
          />
          <Image
            alt="Ícone React"
            src={"/icons/react.svg"}
            width={32}
            height={32}
            className="hover:scale-125 ease-linear duration-300"
          />
          <Image
            alt="Ícone Tailwind"
            src={"/icons/tailwind.svg"}
            width={32}
            height={32}
            className="hover:scale-125 ease-linear duration-300"
          />
          <Image
            alt="Ícone Typescript"
            src={"/icons/typescript.svg"}
            width={32}
            height={32}
            className="hover:scale-125 ease-linear duration-300"
          />
        </div>
      </section>

      <section
        id="projects"
        className="w-full flex flex-col items-center justify-center gap-6 mt-20"
      >
        <h2 className="w-2/5 text-center">Quais projetos você deseja ver?</h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:justify-around w-4/5 sm:my-6">
          <Link
            href={"/prorotype"}
            className="flex flex-col items-center gap-1 justify-center"
          >
            <Image
              src={"/images/figma.png"}
              alt="Ilustração do ícone figma"
              width={126}
              height={103}
            />
            <p className="underline">Protótipos</p>
          </Link>

          <Link
            href={"/projects"}
            className="flex flex-col items-center gap-1 justify-center"
          >
            <Image
              src={"/images/projects.png"}
              alt="Ilustração do ícone da apple, play store e vercel"
              width={126}
              height={103}
            />
            <p className="underline">Projetos online</p>
          </Link>
        </div>
        <Link
          href="/projects"
          className="rounded-xl items-center flex w-[180px] py-3 bg-main-300 justify-center font-medium hover:opacity-75 ease-in duration-300"
        >
          Ver todos
        </Link>
      </section>

      <Footer />

      <a
        href="#hero"
        className="rounded-full fixed bottom-4 right-4 bg-main-100/40 p-3 items-center justify-center flex ease-in duration-300"
      >
        <ArrowUp2 size="24" color="#FFF" />
      </a>
    </main>
  );
}
