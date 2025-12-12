import Typewriter from "typewriter-effect";

const TypewriterComponent = ({ typeWords }) => {
  return (
    <div className="notranslate mt-5 text-3xl font-bold">
      <Typewriter
        options={{
          strings: typeWords.split(","),
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
