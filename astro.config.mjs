// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://steinerlab.github.io/home/",
    base: "/home/",
    outDir: "./docs",
    integrations: [], // add your integrations here
});
