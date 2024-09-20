function HeroSection() {
  return (
    <div id="header" className="">
      <h1 className="mb-[30px] text-[17px] uppercase leading-[1] tracking-[0.05em] sm:mb-[5rem] sm:text-[2.5rem]">
        news
      </h1>
      <h2 className="relative inline-block text-[43px] font-[400] uppercase leading-[1] sm:text-[11.5rem]">
        all news
      </h2>
      <div className="flex pb-[20px] pt-[10px] sm:py-[0]">
        <div className="mt-[7rem]">
          <button>
            <span className="text-[14px] uppercase tracking-[0.075em] sm:text-[1.8rem]">
              all news
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
