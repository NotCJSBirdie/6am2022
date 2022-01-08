import "./Expertise.css";

const Expertise = () => {
  return (
    <div>
      <section className="text-white bg-black body-font px-12">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-start">
          <div className="lg:max-w-lg lg:w-1/4 md:w-1/4 w-1/4 mb-10 md:mb-0 text-left">
            <h1 id="text1">Expertise</h1>
          </div>
          <div className="lg:flex-grow md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-left">
            <p id="text1" className="mb-8 leading-relaxed">
              Whether your project is still a notion, ready for production or at
              any point in between, we employ a holistic knowledge of glass to
              realize works of all scales and complexities. We are
              collaborative, creative and detail-oriented and our services range
              from sourcing, supervision and logistics to creative consulting ,
              design and engineering. Whatever you need, 6:AM gets it done.
            </p>
            <div className="flex justify-center">
              <button className="flex flex-row items-center text-white bg-transparent border-2 border-white px-12 focus:outline-none hover:bg-gray-300 rounded-full">
                <p className="p-2 text-xl">Read More</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
