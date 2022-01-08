import "./Studio.css";

const Studio = () => {
  return (
    <div>
      <section className="text-black bg-white body-font px-12">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-start">
          <div className="lg:max-w-lg lg:w-1/4 md:w-1/4 w-1/4 mb-10 md:mb-0 text-left">
            <h1 id="text3">Studio6:AM</h1>
          </div>
          <div className="lg:flex-grow md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-left">
            <p id="text3" className="mb-8 leading-relaxed">
              We're not just consultants, we're designers. Studio6:AM is our
              space for experimentation where we develop a personal collection
              of works while innovating new techniques and honing the skills
              that make us the go-to creative producers for our partners
            </p>
            <div className="flex justify-center">
              <button className="flex flex-row items-center text-black bg-transparent border-2 border-black px-12 focus:outline-none hover:bg-gray-300 rounded-full">
                <p className="p-2 text-xl">Read More</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;
