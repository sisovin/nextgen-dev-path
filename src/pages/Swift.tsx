import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const Swift = () => {
  const swiftData = languagesData.find(lang => lang.path === "/swift")!;
  return <LanguageLayout language={swiftData} />;
};

export default Swift;
