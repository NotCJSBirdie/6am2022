import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="text5" className="text-white bg-black body-font">
        <div
          id="text5"
          className="container px-12 py-12 pb-24 mx-auto flex md:items-center lg:items-end md:flex-row md:flex-nowrap flex-wrap flex-col"
        >
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto  md:text-right md:mt-0 mt-10 text-right">
            <p className="mt-2  ">Privacy policy</p>
            <p className="mt-2  ">Legal notice</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <a className="">Via Felice Romani 2,</a>
                </li>
                <li>
                  <a className="">20125 Milano MI</a>
                </li>
                <div className="py-8"></div>
                <li>
                  <a className="">Via dei Forti 77</a>
                </li>
                <li>
                  <a className="">30141 Venezia VE</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <a className="">Email</a>
                </li>
                <li>
                  <a className="">info@6am.glass</a>
                </li>
                <div className="py-8"></div>
                <li>
                  <a className="">Mobile.</a>
                </li>
                <li>
                  <a className="">+39 3394707340</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
