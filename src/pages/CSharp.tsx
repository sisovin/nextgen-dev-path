import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const CSharp = () => {
  const csharpData = languagesData.find(lang => lang.path === "/csharp")!;
  return <LanguageLayout language={csharpData} />;
};

export default CSharp;
