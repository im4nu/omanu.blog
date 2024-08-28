import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import Footer from "@/components/Footer";
import { GradientCard } from "@/components/GradientCard";
import Navbar from "@/components/Navbar";
import { WavyBackground } from "@/components/ui/Wave-background";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center font-raleway text-white font-medium">
      <Navbar />

      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="flex flex-col items-center gap-3 px-12">
          <Image
            src={"/images/manu-profile.png"}
            width={150}
            height={150}
            alt="Perfil do manu"
            className="w-[150px] h-[150px] rounded-full flex lg:hidden"
          />
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Sou o manu tech!
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Me chamo Emanuel, estou na área tech a mais de 10 anos e esse é o
            meu site.
          </p>
        </div>
      </WavyBackground>

      <a href="#about" className="flex justify-center -mt-28">
        <ArrowDown2 size="32" color="#FFF" className="animate-bounce" />
      </a>

      <BackgroundBoxesDemo />

      <section
        id="about"
        className="flex flex-row min-h-[800px] bg-opacity-70 bg-main lg:min-h-[1024px] h-full py-12 items-center justify-around w-full"
      >
        <div className="flex flex-col items-center gap-12 w-1/2">
          <h2 className="mt-8">Sobre mim</h2>

          <div className="flex flex-col items-center justify-center w-4/5 sm:w-[350px] lg:w-[400px] text-center gap-4">
            <Image
              alt="Imagem de perfil do manu"
              src={"/images/manu-profile-2.png"}
              width={100}
              height={100}
            />

            <p>
              Me chamo Emmanuel victor rodrigues, trabalho na área de
              <span className="text-main-100">
                {" "}
                desenvolvimento de protótipos de interfaces digitais
              </span>
              a mais de 3 anos e busco evoluir e aumentar meus conhecimentos e
              experiência nesse remo da tecnologia tão incrível onde me
              encontrei.
            </p>
            <div className="flex w-full bg-white h-[1px]"></div>
            <p>
              Sou fascinado pela mente humana e na área de product design eu
              consigo unir meus conhecimentos em desenvolvimento com a
              experiência do usuário e assim
              <span className="text-main-100">
                trazer maior acertividade na solução do problema.
              </span>{" "}
            </p>
            <div className="flex w-full bg-white h-[1px]"></div>
            <p>
              Sou formando em sistemas da informação pela UNIFAP, universidade
              paraíso de juazeiro do norte e estou
              <span className="text-main-100">
                publicando um artigo científico na área além de pesquisas
                acadêmicas voltadas para a experiência do usuário.
              </span>{" "}
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

        <div className="w-1/2 flex flex-col items-center justify-center gap-6">
          <h2 className="w-2/5 text-center">Quais projetos você deseja ver?</h2>

          <div className="flex flex-col gap-24 lg:gap-0 sm:flex-row items-center justify-center sm:justify-around w-4/5 sm:my-6">
            <GradientCard
              category="prototypes"
              description="teste"
              image="/images/figma.png"
              title="Protótipos"
              link="/prorotype"
            />

            <GradientCard
              category="prototypes"
              description="teste"
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
