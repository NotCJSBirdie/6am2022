import "./Works.css";

const Works = () => {
  return (
    <div>
      <section className="text-white bg-black body-font px-12">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-start">
          <div className="lg:max-w-lg lg:w-1/4 md:w-1/4 w-1/4 mb-10 md:mb-0 text-left">
            <h1 id="text2">Works</h1>
          </div>
          <div className="lg:flex-grow md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-left">
            <p id="text2" className="mb-8 leading-relaxed">
              From immersive architectural installations to precious objects, we
              have realized complex and ambitious glass projects to satisfy the
              expectations of the most demanding creatives in the design
              industry. Through experimentation, structural problem-solving, and
              the deployment of rare techniques, we guide our partners to
              achieve the seemingly impossible with glass
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

export default Works;
