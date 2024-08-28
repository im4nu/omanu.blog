"use client";
import React from "react";
import { Boxes } from "@/components/ui/Background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen hidden relative w-full overflow-hidden bg-slate-900 lg:flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Experiência do usuário vai além das telas bonitas
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Mova o mouse sobre as caixas e veja a mágica acontecer!
      </p>
    </div>
  );
}
