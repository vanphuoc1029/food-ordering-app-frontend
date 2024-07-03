import hero from "../assets/hero.svg";
const Hero = () => {
  return (
    <div>
      <img src={hero} className="w-full max-h-[600px] object-cover" />
      {/* max with of the div, max height of the image is 600px, keep aspect ratio */}
    </div>
  );
};

export default Hero;
