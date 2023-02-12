import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import filesize from "rollup-plugin-filesize"

import { version } from "./package.json"
const banner = `/*\n * TurboPower ${version}\n */`

export default [
  {
    input: "src/index.ts",
    external: ["@hotwired/turbo", "turbo-morph"],
    output: [
      {
        name: "TurboPower",
        file: "dist/turbo_power.umd.js",
        format: "umd",
        banner,
        globals: {
          "@hotwired/turbo": "Turbo",
          "turbo-morph": "TurboMorph",
        },
      },
      {
        file: "dist/turbo_power.js",
        format: "es",
        banner,
      },
    ],
    plugins: [resolve(), typescript(), filesize()],
    watch: {
      include: "src/**",
    },
  },
]
