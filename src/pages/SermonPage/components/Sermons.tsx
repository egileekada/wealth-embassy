import React from "react";
import sermonBg from "../../../assets/images/Rectangle 16.png";

const Sermons = () => {
  return (
    <div>
      <div className="items-center justify-center flex text-center font-Poppins-SemiBold text-[48px]">
        Sermons
      </div>
      <div>
        <p>The secret of Growth</p>
        <img src={sermonBg} alt="background image" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          facilisis sem faucibus aenean arcu fames. Posuere diam maecenas dis
          sed amet eu augue cum. Elit sit.
        </p>
      </div>
    </div>
  );
};

export default Sermons;
