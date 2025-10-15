import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const Cpp = () => {
  const cppData = languagesData.find(lang => lang.path === "/cpp")!;
  return <LanguageLayout language={cppData} />;
};

export default Cpp;
