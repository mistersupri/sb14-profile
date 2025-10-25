import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import aliases from "./tsconfig.paths.json";
import ViteSitemap from "vite-sitemap";
import { createHtmlPlugin } from "vite-plugin-html";

function getAliasesFromPaths(
  baseUrl: string,
  configPaths: Record<string, string[]>
) {
  const alias = Object.entries(configPaths).reduce(
    (aliases, [configAlias, configPathList]) => {
      const [aliasKey] = configAlias.split("/");
      const [relativePathToDir] = configPathList[0].split("/*");
      return {
        ...aliases,
        [aliasKey]: path.resolve(__dirname, `${baseUrl}/${relativePathToDir}`),
      };
    },
    {}
  );
  return alias;
}

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}) as Record<string, string>,
  };

  return defineConfig({
    plugins: [
      react(),
      tailwindcss(),
      ViteSitemap({
        base: processEnvValues["process.env"].REACT_APP_BASE_URL,
        urls: ["tentang-sekolah", "pengumuman", "faq"],
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: "Default Title",
            description: "Default Description",
          },
        },
      }),
    ],
    resolve: {
      alias: getAliasesFromPaths(
        aliases.compilerOptions.baseUrl,
        aliases.compilerOptions.paths
      ),
    },
    server: {
      allowedHosts: ["code-5173.sup.web.id"],
    },
    define: { ...processEnvValues, global: {} },
  });
};
