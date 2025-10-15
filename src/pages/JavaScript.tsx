import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const JavaScript = () => {
  const jsData = languagesData.find(lang => lang.path === "/javascript")!;
  return <LanguageLayout language={jsData} />;
};

export default JavaScript;
