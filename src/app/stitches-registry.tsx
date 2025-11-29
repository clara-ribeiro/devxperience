"use client";

import { ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { getCssText } from "@/styles/stitches.config";

type Props = {
  children: ReactNode;
};

export default function StitchesRegistry({ children }: Props) {
  useServerInsertedHTML(() => (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  ));

  return <>{children}</>;
}


