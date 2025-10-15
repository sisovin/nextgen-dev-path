import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const Go = () => {
  const goData = languagesData.find(lang => lang.path === "/go")!;
  return <LanguageLayout language={goData} />;
};

export default Go;
