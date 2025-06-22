"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "contact@lynxpounce.com",
    },
    // {
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    //       />
    //     </svg>
    //   ),
    //   contact: "+1 (555) 000-000",
    // },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Vilnius, Lithuania.",
    },
  ];

  return (
    <footer className="w-full pb-10 md:mb-5" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold text-2xl md:text-4xl leading-10">
          🚀 Ready to Elevate <span className="text-purple">Your</span>{" "}
          Veterinary Clinic’s Online Presence?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-base md:text-2xl text-center">
          Let’s build a website that attracts more pet owners and grows your
          practice.
        </p>
        {/* <a href="mailto:contact@lynxpounce.com">
          <MagicButton
            title="Let's Get Started"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
        <main className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
              <div className="max-w-lg space-y-3">
                <h2 className="text-left font-bold text-xl md:text-3xl leading-10 text-white">
                  Contacts
                </h2>
                <p className="text-white-200 text-left md:mt-10 my-5 text-base md:text-xl">
                  Get in touch with me by filling out the form or reaching out
                  directly.
                </p>
                {/* <a href="mailto:contact@lynxpounce.com">
          <MagicButton
            title="Let's Get Started"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
                <div>
                  <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                    {contactMethods.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-x-3">
                        <div className="flex-none text-purple">{item.icon}</div>
                        <p className="text-white">{item.contact}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 mt-10 lg:mt-0  sm:max-w-lg lg:max-w-md">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div>
                    <label className="font-medium text-purple">Full name</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-purple shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-purple">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-purple shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-purple">Company</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-purple shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-purple">Message</label>
                    <textarea
                      required
                      className="w-full mt-2 h-36 px-3 py-2 resize-none text-white appearance-none bg-transparent outline-none border focus:border-purple shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                  <MagicButton
                    title={"Submit"}
                    icon={undefined}
                    otherClasses="lg:w-full"
                    position={""}
                  />
                  {/* <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                    Submit
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 LynxPounce
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 mt-5 md:mt-0 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
