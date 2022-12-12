import React from "react";
import { useNavigate } from "react-router-dom";
import sermonBg from "../../assets/images/Rectangle 16.png";
import Footer from "../../components/Footer";
const EventDetail = () => {

  const navigate = useNavigate()

  return (
    <section>
      <div className=" relative h-[80vh] lg:h-auto ">
        <img src={sermonBg} className="  h-[80vh] object-cover "  alt="sermon" />
        <button onClick={()=> navigate(-1)} className=" absolute top-8 left-6 lg:left-12 bg-black bg-opacity-25 rounded-full w-10 flex justify-center items-center h-10 pr-1 " >
          <svg width="15"  viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8873 2.8375L12.6623 0.625L0.299805 13L12.6748 25.375L14.8873 23.1625L4.7248 13L14.8873 2.8375V2.8375Z" fill="white"/>
          </svg>
        </button>
        <button onClick={()=> navigate("/event")} className="font-Poppins-SemiBold text-[40px] h-[65px] w-[198px] text-center lg:block absolute bg-[#B83A3A] text-white bottom-12 left-6 lg:left-[100px]">
          Event
        </button>
      </div> 
      <div className=" w-full flex flex-col lg:px-0 px-6 " > 
        <div className=" max-w-[1000px] mx-auto  " > 
          <div className="  flex flex-col  ">
            <p className="lg:text-[35px] lg:text-left text-center text-3xl font-Poppins-Bold  mt-20">
              The secrets of Growth
            </p>
            <p className="font-Poppins-SemiBold text-[20px] leading-9  mt-6">
              Jeremiah T.T. Williams / Ag 11, 2021 / Gospel Wealth Embassy Int.
            </p>
          </div>
          <p className=" max-w-[1000px] font-Poppins-Regular text-[16px] leading-9 mt-4 text-left">
            I've been on vacation these weeks. I haven't preached in so long, I told
            one of my boys that I may preach like Paul. And sometime he just
            preached all night. My son said, ''Yeah, but one fellow went to sleep in
            the window and fell out of the window and was killed.'' I said, ''Yeah,
            but Paul went out and raised him from the dead and put him back in the
            window and kept on preaching.'' My son said, ''When you can do that, you
            can preach all night, too, Daddy.''
            <p className="py-10">
              {" "}
              If you'd open your Bibles - not to the scripture mentioned, though
              that's one of the scriptures that's very important - to II Corinthians
              instead, Chapter 3, Verse 18. Mr. Hamlet's announcement about our
              television ministry is an extremely important thing. I remember our
              first Television Committee in this church dreamed of being on national
              television every week. Somebody would say, ''Why? We have enough out
              there.'' I think for two reasons. First of all, like others, we will
              preach the gospel clear and clean as best we can. The second thing:
              we'll never ask for one penny from anybody. In fact, after we've been
              on for awhile, I'll make the statement, ''Please join a local
              Bible-believing church where you live, and send your tithes and
              offerings there.'' That will make our broadcast different, and I think
              have an appeal to the lost, secular man who is so turned off by a lot
              of the hustling we see in the name of God and Christ and church on our
              television screen. That, we intend to do every Sunday, God willing, to
              the homes of America. I think that's important. Don't you?
            </p>{" "}
            II Corinthians 3:18: 18{" "}
            <p className="py-10">
              But we all, with unveiled face beholding as in a mirror, the glory of
              the Lord, are being transformed into the same image from glory to
              glory, just as from the Lord, the Spirit. (NAS){" "}
            </p>{" "}
            <p className="pb-20">
              Let's pray together. ''Father, we're here in this time to do business
              with Thee. Cut through our mind, our heart, our prejudices, our
              attitudes or anything that would keep us fro
            </p>
          </p>
        </div>
      </div>
      <hr className="bg-[#000]" />
      <Footer />
    </section>
  );
};

export default EventDetail;
