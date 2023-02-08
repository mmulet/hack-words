import { code_dir, client_src, docs_dir, templates_dir } from "./directories";
import {
  markdown_transform,
  plain_markdown_transform,
} from "./markdown_transform";
import pug from "pug";
import { writeFileSync } from "fs";
import { resolve } from "path";
/**
 * Required by dev/build.js and server.ts
 */
export const client_build_parameters = {
  entryPoints: [`${client_src}/index.ts`],
  bundle: true,
  outdir: code_dir,
  sourcemap: true,
};

export const client_pages = [
  {
    path: "./index.pug",
    out: "index.html",
    args: {},
  },
];

export const compile_and_save_templates = () => {
  client_pages.forEach(({ path, out, args }) => {
    const compiledFunction = pug.compileFile(resolve(templates_dir, path), {
      basedir: templates_dir,
      filters: {
        markdown: markdown_transform,
        "plain-markdown": plain_markdown_transform,
      },
    });
    writeFileSync(resolve(docs_dir, out), compiledFunction(args));
  });
};
