import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}
