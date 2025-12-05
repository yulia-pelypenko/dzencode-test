import type { RouteType } from "@/modules/common/types/RouteType";
import type { ComponentType } from "react";

export interface IModulePage {
  component: ComponentType,
  route: RouteType,
}