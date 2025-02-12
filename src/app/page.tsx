import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import Footer from "@/components/Footer";
import { GradientCard } from "@/components/GradientCard";
import Navbar from "@/components/Navbar";
import HeroUserActions from "@/components/pdfDownload";
import { WavyBackground } from "@/components/ui/Wave-background";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center font-raleway text-white font-medium">
      <Navbar />

      <WavyBackground id="hero" className="max-w-4xl lg:mx-auto pb-40">
        <div className="flex flex-col items-center gap-3 px-12">
          <Image
            src={"/images/me.png"}
            width={520}
            height={520}
            alt="Perfil do manu"
            className="w-[150px] h-[150px] rounded-full object-cover object-top"
          />

          <p className="text-2xl lg:text-4xl xl:text-6xl text-white font-bold inter-var text-center">
            Transformando Ideias em Experiências Inesquecíveis
          </p>

          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Design estratégico que une estética e funcionalidade para entregar
            produtos que realmente fazem a diferença. Eu me chamo Emmanuel
            Rodrigues e seja bem vindo ao meu portfólio.
          </p>

          <HeroUserActions />
        </div>
      </WavyBackground>

      <a href="#about" className="flex justify-center -mt-28">
        <ArrowDown2 size="32" color="#FFF" className="animate-bounce" />
      </a>

      <BackgroundBoxesDemo />

      <section
        id="about"
        className="flex flex-col lg:flex-row min-h-[800px] bg-opacity-70 bg-main lg:min-h-[1024px] h-full py-12 items-center justify-around w-full"
      >
        <div className="flex flex-col items-center h-full gap-12 mt-24 w-full lg:w-1/2">
          <h2 className="text-center font-bold text-lg">Sobre mim</h2>

          <div className="flex flex-col items-center justify-center w-4/5 sm:w-[350px] lg:w-[400px] text-center gap-4">
            <Image
              alt="Imagem de perfil do manu"
              src={"/images/me.png"}
              className="rounded-full w-[150px] h-[150px] object-cover object-top"
              width={520}
              height={520}
            />

            <p>
              Me chamo Emmanuel victor rodrigues, trabalho na área de
              <span className="text-main-100 font-bold">
                {" "}
                desenvolvimento de protótipos de interfaces digitais
              </span>{" "}
              a mais de 3 anos e busco evoluir e aumentar meus conhecimentos e
              experiência nesse ramo da tecnologia tão incrível onde me
              encontrei.
            </p>

            <div className="flex w-full bg-white h-[1px]"></div>
            <p>
              Sou formando em sistemas da informação pela UNIFAP, universidade
              paraíso de juazeiro do norte e estou
              <span className="text-main-100 font-bold">
                {" "}
                publicando um artigo científico na área, além de pesquisas
                acadêmicas voltadas para a experiência do usuário.
              </span>
            </p>
          </div>

          {/* <div className="flex flex-row items-center justify-center gap-4 lg:gap-8">
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
          </div> */}
        </div>

        <div
          id="projects"
          className="mt-24 w-full lg:w-1/2 flex flex-col items-center justify-center gap-6"
        >
          <h2 className="text-center font-bold text-lg">
            Quais projetos você deseja ver?
          </h2>

          <div className="flex flex-col mt-12 gap-24 lg:gap-6 sm:flex-row items-center justify-center sm:justify-around w-4/5 sm:my-6">
            <GradientCard
              category="prototypes"
              description="Alguns protótipos legais que desenvolvi."
              image="/images/figma.png"
              title="Protótipos"
              link="/prorotype"
            />

            <GradientCard
              category="projects"
              description="Projetos reais utilizados por clientes e empresas."
              image="/images/projects.png"
              title="Projetos online"
              link="/projects"
            />
          </div>
        </div>
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
