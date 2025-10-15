import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const TypeScript = () => {
  const tsData = languagesData.find(lang => lang.path === "/typescript")!;
  return <LanguageLayout language={tsData} />;
};

export default TypeScript;
