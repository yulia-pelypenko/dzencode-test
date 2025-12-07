import type { IModulePage } from "@/modules/common/types/IModulePage";


export const loadPages = (): IModulePage[] => {
  const modules = import.meta.glob("/src/modules/*/page.ts", { eager: true });

  return Object.values(modules).flatMap(
    (module) => (module as { default?: IModulePage[] }).default ?? []
  );
};