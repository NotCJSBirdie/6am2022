import duala1 from "./assets/duala1.jpg";
import duala2 from "./assets/duala2.jpg";

const DualA = () => {
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
                  src={duala1}
                />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="h-auto overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-auto w-full p-8"
                  src={duala2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DualA;
