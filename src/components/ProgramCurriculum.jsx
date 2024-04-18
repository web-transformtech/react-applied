// import { FaBookOpenReader } from "react-icons/fa6";
import { FcReading, FcCheckmark } from 'react-icons/fc';
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import Curriculum from "../assets/images/curriculum.png";
export default function ProgramCurriculum() {
    // const major = [
    //   {
    //     id: 0,
    //     title: "Introduction to Digital Marketing",
    //   },
    //   {
    //     id: 1,
    //     title: "Search Engine Optimization",
    //   },
    //   {
    //     id: 2,
    //     title: "Search Engine Marketing",
    //   },
    //   {
    //     id: 3,
    //     title: "Social Media Marketing",
    //   },
    //   {
    //     id: 4,
    //     title: <p>Stukent Practical Simulation - SEO, SEM & SMM</p>,
    //   },
    //   {
    //     id: 5,
    //     title: "Capstone Project",
    //   },
    // ];
    // const minor = [
    //   {
    //     id: 0,
    //     title: "MBA Applied Finance",
    //     points: ["Wealth Management", "Organization Development"],
    //   },
    //   {
    //     id: 1,
    //     title: "MBA Human Resources",
    //     points: ["Employee Relationship Manager", "Organization Development"],
    //   },
    // ];
    const curricular = [
        {
            id: 0,
            title: 'Major Subjects',
            para: (
                <p>
                    We cover ranging from fundamentals to advanced subjects in <b>Applied Finance Specialization.</b>
                </p>
            ),
            icon: <FcReading className="text-primary text-[24px]" />,
            points: [
                { name: 'Accounting and Finance' },
                { name: 'Applied Financial Statement Analysis' },
                { name: 'Wealth Management' },
                { name: 'Capital Markets' },
                { name: 'Financial Technology' },
                { name: 'Advanced Financial Modeling' },
                { name: 'Capstone Project' },
            ],
        },
        {
            id: 1,
            title: 'Minor Specialization',
            para: 'Choose one of the minor specializations.',
            icon: <FcReading className="text-primary text-[24px]" />,
            points: [
                {
                    name: 'MBA Human Resources',
                    check: <FcCheckmark />,
                    subname: ['Employees Relationship Manager', 'Organization Development'],
                },
                {
                    name: 'MBA Digital Marketing',
                    check: <FcCheckmark />,
                    subname: ['Introduction to Digital Marketing', 'Search Engine Optimization'],
                },
            ],
            supoints: [],
        },
    ];
    return (
        <div>
            <div className="py-14 bg-backgroundcolor">
                <div className="relative sm:hidden mdsm:hidden md:block lg:block lge:block">
                    <div className="absolute border top-6 w-full border-b-[1px] border-orange"></div>
                </div>
                <div className="container mx-auto">
                    <h2 className="flex justify-center relative lg:bg-backgroundcolor lge:bg-backgroundcolor md:bg-backgroundcolor md:mx-44 lg:mx-60 lge:mx-60 lg:text-[48px] lge:text-[48px] md:text-[40px] mdsm:text-[40px] sm:text-[28px] text-primary font-JosefinSemibold leading-none pb-5">
                        {' '}
                        Program Curriculum
                    </h2>
                    <p className="text-center font-PoppinsRegular text-secondary text-h6 sm:text-base lg:px-24 lge:px-24 md:px-0 mdsm:px-0 sm:px-7  pb-5">
                        Our Curriculum is designed to enhance your skills and knowledge, enabling you to succeed in dynamic industries.
                    </p>
                    <div>
                        <div className="grid lg:grid-cols-2 lge:grid-cols-2 lg:px-14 lge:px-14 md:px-0 mdsm:px-0 sm:px-10 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1">
                            {curricular?.map((v, i) => (
                                <div key={v.id + (i + 10)} className="lg:pb-28 lge:pb-28 md:pb-20 mdsm:pb-20 sm:pb-10">
                                    <div
                                        className={`${
                                            v.title.length > 8 ? 'lg:mx-28 lge:mx-28 md:mx-14 mdsm:mx-14 sm:mx-10' : 'mx-20'
                                        } border border-bordercolor bg-white relative top-6 rounded-lg font-JosefinBold lg:text-h1 lge:text-h1 sm:text-h4 md:text-h2 mdsm:text-h2 break-words text-center p-1`}
                                    >
                                        <span className="backbar">{v.title}</span>
                                    </div>
                                    <div className="lg:mx-3 lge:mx-3 sm:mx6 md:mx-6 mdsm:mx-6 lg:h-full lge:h-full bg-white border border-bordercolor rounded-lg lg:px-8 lge:px-8 sm:px-6 md:px-10 mdsm:px-10 pt-12 lg:-mb-10 lge:-mb-10 figmsShadow">
                                        <div className="">
                                            <p className="text-center text-secondary font-PoppinsRegular lg:text-h6 lge:text-h6 md:text-h6 mdsm:text-h6 sm:text-base leading-relaxed pb-5">
                                                {v.para}{' '}
                                            </p>
                                            <div className="pl-2">
                                                {v?.points?.map((p, i) => (
                                                    <div key={v.id + (p.name + i)}>
                                                        <div className="w-[100%] flex gap-3 sm:gap-5 pb-7">
                                                            <div className="w-[5%]">{v?.icon}</div>
                                                            <p className="w-[95%] text-black font-PoppinsMedium lg:text-h6">{p.name}</p>
                                                        </div>
                                                        {p?.subname?.map((s, i) => (
                                                            <div
                                                                key={i + i}
                                                                className="w-[100%] flex gap-3 sm:gap-5 pb-7 lg:pl-10 lge:pl-10 md:pl-8 mdsm:pl-8"
                                                            >
                                                                <div className="w-[5%] mx-3 text-h5">{p.check}</div>
                                                                <div className="w-[95%] text-black font-JosefinRegular text-h6">{s}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="">
            <div className="grid lg:grid-cols-3 lge:grid-cols-3 gap-x-16 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:mx-32 lge:mx-32 md:mx-5">
              <div className="">
                <div className="sm:px-12 sm:pb-3">
                  <p className="font-JosefinSemibold underline text-primary lg:text-h3 lge:text-h3 md:text-h4 mdsm:text-h4 sm:text-h5 pb-2">
                    Major Specialization
                  </p>
                  <p className="font-PoppinsRegular text-secondary text-h6 pl-0 pb-2">
                    Topics that you will learn.
                  </p>
                  <ul className="lg:pl-4 lge:pl-4 md:pl-3 mdsm:pl-3 sm:pl-2">
                    {major.map((v, i) => (
                      <li key={v.title + (i + 10)} className="flex w-[100%]">
                        <FcReading className="mt-0 text-primary mx-3 text-h5 w-[10%]" />
                        <div className="w-[95%] font-PoppinsMedium pb-3 lg:text-base lge:text-base md:text-base mdsm:text-base sm:text-sm text-secondary">
                          {v.title}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="sm:px-12">
                  <p className="font-JosefinSemibold underline text-primary lg:text-h3 lge:text-h3 md:text-h4 mdsm:text-h4 sm:text-h5 pb-2">
                    Minor Specialization
                  </p>
                  <p className="font-PoppinsRegular text-secondary lg:text-h6 lge:text-h6 md:text-base mdsm:text-base sm:text-base pl-0 pb-2">
                    Choose one of the minor specializations.
                  </p>
                  <ul className="lg:pl-4 lge:pl-4 md:pl-3 mdsm:pl-3 sm:pl-2">
                    {minor.map((v, i) => (
                      <li>
                        <div className="flex w-[100%]">
                          <FcReading className="mt-0 text-primary mx-3 text-h5 w-[10%]" />
                          <div className="w-[95%] font-PoppinsMedium pb-3 lg:text-base lge:text-base md:text-base mdsm:text-base sm:text-sm text-secondary">
                            {v.title}
                          </div>
                        </div>
                        {v?.points?.map((p) => (
                          <div className="flex w-[100%] pl-10">
                            <FcCheckmark className="mt-0 mx-3 text-base w-[10%]" />
                            <div className="w-[95%] font-PoppinsRegular pb-3 lg:text-base lge:text-base md:text-base mdsm:text-base sm:text-sm text-secondary">
                              {p}
                            </div>
                          </div>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden">
                <LazyLoadImage
                  src={Curriculum}
                  draggable="false"
                  className="select-none"
                />
              </div>
            </div>
          </div> */}
                </div>
            </div>
        </div>
    );
}
