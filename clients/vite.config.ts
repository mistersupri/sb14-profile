import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import aliases from "./tsconfig.paths.json";

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
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: getAliasesFromPaths(
      aliases.compilerOptions.baseUrl,
      aliases.compilerOptions.paths
    ),
  },
});
