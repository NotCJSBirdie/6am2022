import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <footer
        id="text4"
        className="flex justify-center px-16 py-12 white  bg-black"
      >
        <div className="container py-6">
          <h1 id="header" className="text-md font-bold text-left text-white">
            Subscribe to our Newsletter
          </h1>

          <div className="py-8"></div>

          <div className="flex justify-left text-left mt-6">
            <div>
              <div className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  className="py-4 bg-transparent text-left pr-40 text-md text-white appearance-none focus:outline-none focus:placeholder-transparent border-b-2 border-white mb-4"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="mb-4 w-full px-12 py-2  text-md font-semibold text-white uppercase transition-colors duration-200 transform bg-transparent border-2 border-white rounded-full lg:w-auto hover:bg-gray-700">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          <div className="py-8"></div>

          <div className="text-left">
            <p id="paragraph" className="text-white">
              Join our mailing list and we'll keep you in the loop.
            </p>
            <p id="paragraph" className="text-white">
              We value your privacy, for more information consult our
              <span className="px-1 underline">Notice</span>
            </p>
          </div>

          <div className="py-8"></div>

          <div className="flex flex-row bg-black">
            <button className="bg-transparent border-2 border-white text-white rounded-full py-1 px-4 mr-4 hover:bg-gray-400 text-lg">
              FB
            </button>
            <button className="bg-transparent border-2 border-white text-white rounded-full py-1 px-4 hover:bg-gray-400 text-lg">
              IG
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;
