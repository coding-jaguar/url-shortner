const Navbar = () => {
  return (
    <div className="flex justify-between px-40 pt-12 mb-10">
      <div className="flex gap-6 items-center">
        <div className=" text-veryDarkBlue font-bold text-3xl ">Shortly</div>
        <div className="flex gap-4 font-bold">
          <div className="cursor-pointer text-grayishViolet hover:text-veryDarkViolet">
            Features
          </div>
          <div className="cursor-pointer text-grayishViolet hover:text-veryDarkViolet">
            Pricing
          </div>
          <div className="cursor-pointer text-grayishViolet hover:text-veryDarkViolet">
            Resources
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <button className="text-grayishViolet hover:text-veryDarkViolet px-6 py-4 rounded">
          Login
        </button>
        <button className="text-white bg-cyan px-6 py-4 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
