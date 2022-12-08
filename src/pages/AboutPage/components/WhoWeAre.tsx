import React from "react";
import Rectangle23 from "../../../assets/images/Rectangle 23.png";
import pastorimage from "../../../assets/images/Frame 11.png";
import Newsletter from "../../../components/Newsletter";
import Footer from "../../../components/Footer";

const WhoWeAre = () => {
  return (
    <section className="items-center text-center justify-center">
      <p className="font-Poppins-Medium text-[#B83A3A] text-[24px]">
        ABOUT GOSPEL WEALTH EMBASSY
      </p>
      <p className="pb-8 text-[45px] font-Lora-Medium">Who We Are</p>
      <p className="font-Poppins-Regular text-[18px] max-w-[1000px] mx-auto pb-20 text-center">
        We believe in the dual nature of the church, that is the body of christ
        invinsible and visible. The both are one and it is the body of christ.
        We are the church as a person and also the genenral gathering of
        beleivers in jesus christ as our lord and saviour. Washed in the blood
        of Jesus, with the Holy Spirit in dwelling in us as saints redeemed by
        the sovereign sacrifice of our Lord Jesus Christ.
      </p>

      <div className="relative">
        <div>
          <img src={Rectangle23} alt="" />
        </div>
        <div className="absolute flex items-center w-[250px] h-[72px] left-[520px] bottom-[370px] text-white">
          <p className="text-[45px] font-Poppins-SemiBold">Our Vision</p>
        </div>
        <div className="absolute flex items-center justify-center flex-col inset-0">
          <p className="text-white text-[30px] max-w-[1000px] py-6 font-Lora-Medium text-center">
            To wipe humanity’s tears by reaching their physical, social, and
            spiritual needs via the gospel and poer of God.
          </p>
          <p className="  font-Poppins-SemiBold text-[25px] text-center text-white leading-10">
            Gospel Wealth Embassy International
          </p>
        </div>
        {/* <div className=" absolute bottom-[120px] w-full " >
          <p className="  font-Poppins-Semibold text-[20px] text-center text-white leading-10">
            Gospel Wealth Embassy International
          </p>
        </div> */}
      </div>
      <div className="text-left items-center justify-center max-w-[1000px] p-20">
        <div>
          <p className="font-Lora-Medium text-[30px]">Our Believes</p>
          <p className="font-Poppins-Regular text-[18px] pb-10">
            There is only one God and creator of the world. Who created the
            universe in the person of the trinity (Father, Son, and the Holy
            Spirit).
          </p>
        </div>
        <div>
          <p className="font-Lora-Medium text-[30px]">The Son of God</p>
          <p className="font-Poppins-Regular text-[18px] pb-10">
            We believe that Jesus Christ is the son of God and that he came as a
            manto save humanity. Though he was born by a virgin Mary as a man
            yet, he is hundred percent.
          </p>
        </div>
        <div>
          <p className="font-Lora-Medium text-[30px]">God, the Holy Ghost</p>
          <p className="font-Poppins-Regular text-[18px] pb-10">
            we believe the Holy Spirit is the third person in the Godhead who is
            also address as the Holy Ghost. And that he is in charge of God’s
            Kingdom affaires now on earth, and resides in the believers.
          </p>
        </div>
        <div>
          <p className="font-Lora-Medium text-[30px]">The Bible</p>
          <p className="font-Poppins-Regular text-[18px] pb-10">
            We believe the bible is the absolute word of God, written by holy
            men inspired by the Holy Ghost. And that it is a devine too lfor all
            round guidance, instructions, reproofs, corrections, and inspiration
            of all godliness to funish men.
          </p>
        </div>
        <div>
          <p className="font-Lora-Medium text-[30px]">Salvation</p>
          <p className="font-Poppins-Regular text-[18px] pb-10">
            We believe salvation is given to all person’s that believes and
            confess Jesus Christ as thier lord and savior by accepting him into
            thier hearts. Which is engendered by faith i nthe atonement that
            comes frm the blood of jesus at the finished work on the cross of
            calvary.
          </p>

          <p className="font-Poppins-Regular text-[18px] pb-10">
            We believe in grace that helps us beyond human’s efforts to save and
            stand before God faithfully.
          </p>
        </div>
        <div>
          <p className="font-Lora-Medium text-[30px]">Righteousness</p>
          <p className="font-Poppins-Regular text-[18px] pb-10">
            We believe in the righteousness imputed in to us that we did nothing
            to earn, that has declared us righteous in chirst before God.
          </p>
        </div>
        <div>
          <p className="font-Lora-Medium text-[30px]">Ordinance</p>
          <p className="font-Poppins-Regular text-[18px] pb-10">
            We believe in the holy communion, the annointing oil, tithing, water
            baptism and Holy Ghost baptism. 1st Corinthians 11:24 - 24, Mark
            6:13, Leviticus 27:30, 1st Corinthians 12:13.
          </p>
        </div>
        <div>
          <p className="font-Lora-Medium text-[30px] pb-5">Our Values</p>
          <ul className="pl-10">
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Prompt response to our beckoning of people
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Kingdom oriented
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Sound word teachings of biblical doctrines
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Stable spiritual growth of acceptability
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Spreading global as a family
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Sending trained missonaries to tend for souls for God's kingdom
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Be accountable and all
            </li>
          </ul>
        </div>

        <div>
          <p className="font-Lora-Medium text-[30px] pb-5">Our Missions</p>
          <ul className="pl-10">
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Reaching the needs of humanity via conferences, crusades, seminars
              or symposiums.
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Building free educations facilities in rural areas for the less
              priviledged to access education.
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Respond to flood and natural disaster victimes with basic needs
              and aids programs.
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Urban and rural areas crusades to preach the gospel of christ to
              the lost and unreached souls
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Having a satellite cable network to reach humanity in their homes
              and offices for God
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Visiting all level of humanity via radio broadcast and internet or
              social media
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Providing medical care for the medically challenged
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              Building and grooming men and woman as positive revolutionist to
              return the man and woman to a godly moral through heartfelt sound
              teachings
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              To publish faith based books for the global community to access
              and develop their minds in God, His Kingdom and Christ Jesus
            </li>
            <li className="list-disc font-Poppins-Regular text-[18px] leading-10 pb-10">
              To build a link between ministers of intercity and international
              pulpit ministrations
            </li>
          </ul>
        </div>
        <div>
          <p className="font-Lora-Medium text-[30px]">Our Motto</p>
          <p className="font-Poppins-Regular text-[18px] pb-10">
            Putting smiles on your faces.
          </p>
        </div>
      </div>
      <div>
        <img src={pastorimage} alt="" />
      </div>
      <Newsletter />
      <Footer />
    </section>
  );
};

export default WhoWeAre;
