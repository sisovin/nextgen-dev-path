import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const Python = () => {
  const pythonData = languagesData.find(lang => lang.path === "/python")!;
  return <LanguageLayout language={pythonData} />;
};

export default Python;
