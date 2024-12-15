const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col lg:flex-row justify-center items-center pr-12">
      {/* Logo Image on Top Left */}
      <div className="absolute top-4 left-4 z-20">
        <img
          src="/images/logo.png" // Replace with your logo image path
          alt="Logo"
          className="w-20 h-auto" // Adjust the size of the logo as needed
        />
      </div>

      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/governor-house.jpg')",
          opacity: 0.1, // Adjust this value for desired opacity
        }}
      ></div>

      {/* Content and Image Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-navy-800">Governor Sindh</h1>
          <p className="text-navy-800 mt-2">Kamran Khan Tessori</p>
          <h2 className="text-4xl font-bold text-sky-600 mt-4">
            Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
          </h2>
          <p className="text-sm font-bold text-navy-800 mt-6">
            Earn up to $5,000 / month <br /> Now admissions are open in Hyderabad
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0"> {/* Increased width to 1/2 */}
          <img
            src="/images/governor.png" // Replace with your image path
            alt="Image Description"
            className="w-full h-auto rounded-lg"
            style={{ maxWidth: "100%" }} // Adjust max width for more control
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
