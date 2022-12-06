import React from "react";
import sermonBg from "../../assets/images/Rectangle 16.png";
import Footer from "../../components/Footer";
const SermonSingle = () => {
  return (
    <section>
      <div className="relative">
        <img src={sermonBg} alt="sermon" />
        <button className="font-Poppins-Medium text-[60px] h-[96px] w-[268px] text-center absolute bg-[#B83A3A] text-white top-[374px] left-[100px]">
          Sermon
        </button>
      </div>
      <div className="text-left">
        <p className="text-[40px] font-Poppins-Medium ml-24 mt-20">
          The secrets of Growth
        </p>
        <p className="font-Poppins-Regular text-[24px] leading-9 ml-24 mt-6">
          Jeremiah T.T. Williams / Ag 11, 2021 / Gospel Wealth Embassy Int.
        </p>
      </div>
      <p className="ml-24 font-Poppins-Regular text-[20px] leading-9 mt-4 text-left">
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
      <hr className="bg-[#000]" />
      <Footer />
    </section>
  );
};

export default SermonSingle;
