import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const PHP = () => {
  const phpData = languagesData.find(lang => lang.path === "/php")!;
  return <LanguageLayout language={phpData} />;
};

export default PHP;
