import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const Ruby = () => {
  const rubyData = languagesData.find(lang => lang.path === "/ruby")!;
  return <LanguageLayout language={rubyData} />;
};

export default Ruby;
