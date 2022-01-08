import dualc1 from "./assets/dualc1.jpg";
import dualc2 from "./assets/dualc2.jpg";

const DualC = () => {
  return (
    <div>
      <section className="text-black bg-white body-font">
        <div className="container p-12 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="h-auto overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-auto w-full p-8"
                  src={dualc1}
                />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="h-auto overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-auto w-full p-8"
                  src={dualc2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DualC;
