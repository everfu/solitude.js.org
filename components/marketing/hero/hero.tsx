"use client";

import NextLink from "next/link";
import { Button, Link, Chip, Snippet } from "@nextui-org/react";
import { ArrowRightIcon } from "@nextui-org/shared-icons";
import dynamic from "next/dynamic";
import { usePostHog } from "posthog-js/react";

import { GithubIcon } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import {Image} from "@nextui-org/image";

const BgLooper = dynamic(() => import("./bg-looper").then((mod) => mod.BgLooper), {
  ssr: false,
});

export const Hero = () => {
  const posthog = usePostHog();

  return (
    <section className="relative flex h-[calc(70vh_-_64px)] w-full flex-nowrap mt-[10vh] justify-between overflow-hidden lg:overflow-visible]">
      <div className="relative z-20 flex w-full flex-col gap-6 lg:w-1/2 xl:mt-10">
        <div className="text-center leading-8 md:text-left md:leading-10">
          <div className="block">
            <h1 className={title({ color: "violet" })}>Solitude&nbsp;</h1>
          </div>
          <h1 className={title()}>一款简洁、易用、响应式的 Hexo 主题</h1>
        </div>
        <h2 className={subtitle({ fullWidth: true, class: "text-center md:text-left" })}>
          一款简洁、易用、响应式的 Hexo 主题，适合个人博客。
        </h2>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Button
            as={NextLink}
            className="w-full md:h-11 md:w-auto"
            color="primary"
            endContent={
              <ArrowRightIcon
                className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
                strokeWidth={2}
              />
            }
            href="/docs/guide/introduction"
            radius="full"
            size="lg"
            onPress={() => {
              posthog.capture("Hero - Get Started", {
                name: "Get Started",
                action: "click",
                category: "landing-page",
                data: "/docs/guide/introduction",
              });
            }}
          >
            快速开始
          </Button>
          <Snippet
            className="hidden w-full rounded-full sm:w-auto md:flex"
            copyButtonProps={{
              radius: "full",
            }}
            onCopy={() => {
              posthog.capture("Hero - Copy Install Command", {
                name: "Copy",
                action: "click",
                category: "landing-page",
                data: "npm i hexo-theme-solitude",
              });
            }}
          >
            npm i hexo-theme-solitude
          </Snippet>
          <Button
            fullWidth
            isExternal
            as={Link}
            className="w-full md:hidden"
            href="https://github.com/everfu/hexo-theme-solitude"
            radius="full"
            size="lg"
            startContent={<GithubIcon />}
            variant="bordered"
            onPress={() => {
              posthog.capture("Hero - Github", {
                name: "Github",
                action: "click",
                category: "landing-page",
                data: "https://github.com/everfu/hexo-theme-solitude",
              });
            }}
          >
            GitHub
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:justify-center lg:items-top lg:mt-10">
        <Image
          isBlurred
          src="/persona.avif"
          alt="Hero image"
          width={320}
          height={320}
        />
      </div>

      <BgLooper />
    </section>
  );
};
