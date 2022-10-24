import React from "react";
import Navbar from "../../components/Navbar";
import backgroundImage from "../../assets/images/Background Image.png";
import dove from "../../assets/images/dove 1.png";
export default function Index() {
  return (
    <header>
      <div>
        <img
          src={backgroundImage}
          alt="backgroundImage"
          className=" w-full flex flex-col h-full justify-center items-center"
        />
        <Navbar />
        <div className="relative">
          <div className="absolute bottom-80 flex items-center justify-center flex-col left-80">
            <div>
              <img src={dove} alt="dove" className="my-4" />
            </div>
            <div>
              <h3 className="text-white font-Poppins-Medium">
                WE HELP YOU GET THINGS DONE
              </h3>
            </div>
            <div>
              <h1 className="text-white font-Poppins-Bold text-7xl">
                GOD GIVES US POWER
              </h1>
            </div>
            <div>
              <p className="text-white font-Poppins-Regular leading-6">
                Jesus is holy, loving, and worthy of all our worship and
                devotion.
                <br />
                You will feel heaven with us. Join us and praise the Lord Jesus.
              </p>
            </div>
            <div>
              <button
                className="text-white py-6 px-3 rounded font-Poppins-Regular font-thin "
                style={{ backgroundColor: "#B83A3A" }}
              >
                View Sermons
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
