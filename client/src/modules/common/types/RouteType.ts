import type { ROUTES } from "@/modules/common/constants/routes";

export type RouteType = (typeof ROUTES)[keyof typeof ROUTES];