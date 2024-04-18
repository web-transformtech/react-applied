import Start from '../assets/images/startcarrer.webp';
export default function StartYourCarrer() {
    return (
        <div className="2xl:container 2xl:mx-auto">
            {/* <div>
        <div className="relative">
          <img
            src={Top}
            draggable="false"
            alt="top"
            className="ml-8 lg:w-[380px] lge:w-[380px] md:w-[300px] mdsm:w-[300px] sm:w-[250px]"
          />
          <p className="absolute bottom-16 lg:left-20 lge:left-20 md:left-[62px] mdsm:left-[62px] md:top-8 mdsm:top-8 sm:left-[52px] text-white leading-loose lg:text-2xl lge:text-2xl md:text-h2 mdsm:text-h2 sm:text-h4 font-JosefinSemibold text-center lg:w-72 lge:w-72 md:w-[250px] mdsm:w-[250px] sm:w-[220px]">
            Start your Career with RVSCAS M.Com International Business
          </p>
        </div>
        <div className="lg:-mt-0 lge:-mt-0 md:mt-[81px] mdsm:mt-[81px] sm:mt-[131px] -z-50 carrerback">
          <p className="text-white lg:-mt-[381px] lge:-mt-[381px] md:-mt-[382px] mdsm:-mt-[382px] sm:-mt-[381px] font-PoppinsRegular text-justify pt-32 sm:pt-72 lg:pb-72 lge:pb-72 md:pb-10 mdsm:pb-10 sm:pb-20 lg:text-h4 lge:text-h4 md:text-h6 mdsm:text-h6 sm:text-h6 lg:pl-[480px] lge:pl-[480px] md:pl-[360px] mdsm:pl-[360px] sm:pl-[30px] w-[95%] ">
            M.Com International Business is a two-year full-time postgraduate
            program that aims to equip students with the skills necessary for a
            career in the global market. It focuses on various aspects of
            international business operations, such as international trade
            procedures, international marketing management and India's foreign
            trade policies. The program offers dual specializations in
            International Trade and Shipping & Freight Forwarding, enabling
            students to excel in both fields and enhance their knowledge of
            export and import procedures, documentation, logistics,
            merchandising and freight forwarding.
          </p>
        </div>
      </div> */}
            <div className="lg:py-5 lge:py-5">
                <div className="lg:bg-gradient-to-b lge:bg-gradient-to-b from-backgroundcolor sm:bg-gradient-to-t md:bg-gradient-to-t mdsm:bg-gradient-to-t">
                    <div className="grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-1 mdsm:grid-cols-2 sm:grid-cols-1 2xl:container 2xl:mx-auto">
                        <div className="col-span-3">
                            <div className="pt-10 pb-10">
                                <div className="h-full pt-2 lg:w-[90%] lge:w-[90%] md:w-[90%] mdsm:w-[90%] sm:w-full">
                                    <p className="lg:text-[42px] sm:flex sm:justify-center lge:text-[42px] sm:text-center md:text-h2 mdsm:text-h2 sm:text-h3 text-wrap break-words leading-tight font-JosefinBold text-primary lg:px-14 lge:px-14 md:px-14 mdsm:px-14 sm:px-5">
                                        Become a Techno Manager with RVS CAS&#39;s MBA in Applied Finance
                                    </p>
                                </div>
                            </div>
                            <p className="text-secondary pb-4 font-PoppinsMedium lg:text-h5 lge:text-h5 md:text-h6 mdsm:text-h6 sm:text-base text-justify lg:pl-14 lge:pl-14 md:px-10 mdsm:px-10 sm:px-5">
                                The MBA in Applied Finance mixes advanced finance knowledge with practical skills to prepare students for good jobs in
                                finance. It helps students understand a company's financial situation and teaches them how to solve financial problems
                                that help the company grow. This program was made with help from Finshiksha, a top finance education company, and
                                focuses on skills that are needed in today's job market. Students learn by doing real finance projects, which gives
                                them practical experience for their future careers.
                            </p>
                            <p className="text-secondary font-PoppinsMedium lg:text-h5 lge:text-h5 md:text-h6 mdsm:text-h6 sm:text-base text-justify lg:pl-14 lge:pl-14 md:px-10 mdsm:px-10 sm:px-5">
                                You can expand your knowledge in additional domains with our <b>Dual Specialization</b> opportunity.
                            </p>
                        </div>
                        <div className="col-span-2">
                            <div className="lg:pt-0 lge:pt-0 md:pt-0 mdsm:pt-0 sm:pt-0 lg:-ml-28 lge:-ml-28 md:flex md:justify-center mdsm:flex mdsm:justify-center sm:flex sm:justify-center">
                                <img
                                    src={Start}
                                    draggable="false"
                                    alt="student"
                                    className="lg:w-full lg:h-full md:w-[50%] md:h-[50%] mdsm:w-[50%] mdsm:h-[50%] sm:w-full sm:h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
