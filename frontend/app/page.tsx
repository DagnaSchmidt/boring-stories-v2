import Intro from "@/components/intro/Intro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boring Stories",
  description: "A blog with photos taken by average girl living in Sweden, where days are short and nights are dark and cold. Let’s get bored together!",
};

export default function IndexPage() {
  return <Intro />
};
