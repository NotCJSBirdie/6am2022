import WidePicture from "./assets/widepic.jpg";

const WidePic = () => {
  return (
    <div className="p-0 m-0">
      <div>
        <img alt="widepic" src={WidePicture} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default WidePic;
