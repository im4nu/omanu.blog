"use client";
import { BackgroundGradient } from "@/components/ui/Background-gradient";
import Image from "next/image";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

interface GradientCardProps {
  title: string;
  description: string;
  image: string;
  category: "projects" | "prototypes";
  link: string;
}

export function GradientCard({
  description,
  image,
  category,
  title,
  link,
}: GradientCardProps) {
  return (
    <Link href={link}>
      <BackgroundGradient className="rounded-[22px] w-[250px] lg:w-[300px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={image}
          alt="Ilustração"
          height={200}
          width={200}
          className="object-contain w-[200px] h-[200px]"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>
            Ver {category === "projects" ? "Projetos online" : "Protótipos"}{" "}
          </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            <ArrowRight />
          </span>
        </button>
      </BackgroundGradient>
    </Link>
  );
}
