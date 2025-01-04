import TextRotator from "./ui/TextRotator";

const HeroTexts = () => {
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">My name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl">
        Taiwo Olapade
      </h1>
      <TextRotator />
    </>
  );
};

export default HeroTexts;
