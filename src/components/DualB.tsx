import dualb1 from "./assets/dualb1.jpg";
import dualb2 from "./assets/dualb2.jpg";

const DualB = () => {
  return (
    <div>
      <section className="text-white bg-black body-font">
        <div className="container p-12 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="h-auto overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-auto w-full p-8"
                  src={dualb1}
                />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="h-auto overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-auto w-full p-8"
                  src={dualb2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DualB;
