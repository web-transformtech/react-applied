// import Details from "../assets/images/program details.webp";
// import { HiAcademicCap } from "react-icons/hi2";
import { TbWorldCheck } from 'react-icons/tb';
import { FaUsersCog } from 'react-icons/fa';
import { FaBuildingUser, FaUserGroup, FaChalkboardUser } from 'react-icons/fa6';
import { GiSkills } from 'react-icons/gi';
export default function ProgramDetails() {
    const programHighlights = [
        {
            id: 0,
            icon: <TbWorldCheck className="text-primary mx-4 text-xl" />,
            title: ' World Class Curriculum',
        },
        {
            id: 1,
            icon: <FaUserGroup className="text-primary mx-4 text-xl" />,
            title: 'Dual Specialization',
        },
        {
            id: 2,
            icon: <GiSkills className="text-primary mx-4 text-xl" />,
            title: 'Specialized Tools',
        },
        {
            id: 3,
            icon: <FaChalkboardUser className="text-primary mx-4 text-xl" />,
            title: 'Project-Based Learning',
        },
        {
            id: 4,
            icon: <FaBuildingUser className="text-primary mx-4 text-xl" />,
            title: 'Industry-Based Faculty',
        },
        {
            id: 5,
            icon: <FaUsersCog className="text-primary mx-4 text-xl" />,
            title: 'Internship Opportunities',
        },
    ];
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="relative sm:hidden mdsm:hidden md:block lg:block lge:block ">
                <div className="absolute border top-[5.5rem] w-full border-b-[1px] border-orange"></div>
            </div>
            <div className="lg:bg-backgroundcolor lge:bg-backgroundcolor md:bg-white mdsm:bg-white sm:bg-white p-10 sm:p-5 figmsShadow pb-20 sm:pb-14">
                {/* <div className="grid lg:grid-cols-6 lge:grid-cols-6 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
          <div className="col-span-3">
            <div className="lg:flex lge:flex sm:hidden md:hidden mdsm:hidden items-center z-50">
              <img
                src={Details}
                width="635"
                height="347"
                className="object-cover"
                alt="Program Highlights"
              />
            </div>
          </div>
          <div className="col-span-3 ">
            <p className="">
              Program Highlights
              <svg className="text-ani font-JosefinBold pt-4 text-primary lg:text-[42px] lge:text-[42px] md:text-4xl mdsm:text-3xl sm:text-h1 pb-2 lg:px-14 lge:px-14 md:px-16 mdsm:px-16">
                <text x="0%" y="0%" dy="1em">
                  Program Highlights
                </text>
              </svg>
            </p>
            <p className="font-PoppinsRegular text-secondary text-h6 sm:text-base lg:px-14 lge:px-14 md:px-16 mdsm:px-16 sm:px-0 sm:w-[90%] pb-5">
              Advantages of our Tech MBA.
            </p>
            <div className="grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:px-14 lge:px-14 md:px-16 mdsm:px-16 sm:px-7 pb-3">
              <div className="">
                <div className="flex">
                  <TbWorldCheck className="text-primary mx-4 text-h5" />
                  <p className="font-PoppinsMedium animate-pulse text-base text-secondary pb-5">
                    World Class Curriculum
                  </p>
                </div>
                <div className="flex">
                  <FaUserGroup className="text-primary mx-4 text-h5" />
                  <p className="font-PoppinsMedium animate-pulse text-base text-secondary pb-5">
                    Dual Specialization
                  </p>
                </div>
                <div className="flex">
                  <GiSkills className="text-primary mx-4 text-h5" />
                  <p className="font-PoppinsMedium animate-pulse text-base text-secondary pb-5">
                    Stukent Practical Simulation
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex">
                  <FaBuildingUser className="text-primary mx-4 text-h5" />
                  <p className="font-PoppinsMedium animate-pulse text-base text-secondary pb-5">
                    Industry-Based Faculty
                  </p>
                </div>
                <div className="flex">
                  <FaUsersCog className="text-primary mx-4 text-h5" />
                  <p className="font-PoppinsMedium animate-pulse text-base text-secondary pb-5">
                    Internship Opportunities
                  </p>
                </div>
                <div className="flex">
                  <FaChalkboardUser className="text-primary mx-4 text-h5" />
                  <p className="font-PoppinsMedium animate-pulse text-base text-secondary pb-5">
                    Project-Based Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
                <p className="font-JosefinBold relative lg:w-[40%] lge:w-[40%] lg:text-center lge:text-center md:w-[68%] mdsm:w-[100%] sm:w-[100%] lg:bg-backgroundcolor lge:bg-backgroundcolor md:bg-white text-center pt-4 text-primary lg:text-[42px] lge:text-[42px] md:text-4xl mdsm:text-3xl sm:text-h1 pb-2 lg:px-0 lge:px-0 md:px-16 mdsm:px-16">
                    Program Highlights
                </p>
                <p className="font-PoppinsSemiBold text-[#4b4b4b] lg:text-left lge:text-left md:text-left mdsm:text-center sm:text-center text-h6 sm:text-base lg:px-28 lge:px-28 md:px-32 mdsm:px-32 sm:px-0 sm:w-[90%] pb-5">
                    Advantages of our Tech MBA.
                </p>
                <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1 lg:mx-20 lge:mx-20 md:mx-10 mdsm:mx-10 sm:mx-0 gap-10 pt-8">
                    {programHighlights.map((v, i) => (
                        <div key={i} className="border-2 border-orange relative">
                            <div className="absolute -top-4 left-6 lg:bg-backgroundcolor lge:bg-backgroundcolor md:bg-white mdsm:bg-white sm:bg-white">
                                {v.icon}
                            </div>
                            <p className="font-PoppinsMedium flex justify-center items-center h-20 lg:text-h5 lge:text-h5 md:text-h6 mdsm:text-h6 sm:text-base text-secondary">
                                {v.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
