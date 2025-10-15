import { LanguageLayout } from "@/components/LanguageLayout";
import { languagesData } from "@/data/languagesData";

const Java = () => {
  const javaData = languagesData.find(lang => lang.path === "/java")!;
  return <LanguageLayout language={javaData} />;
};

export default Java;
