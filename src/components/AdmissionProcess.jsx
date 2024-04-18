export default function AdmissionProcess() {
    return (
        <div>
            <div className="bg-black pt-5 sm:pb-14">
                <div className="container mx-auto">
                    <p className="text-white sm:pl-4 font-JosefinSemibold lg:text-[48px] lge:text-[48px] md:text-2xl mdsm:text-2xl sm:text-xl">
                        Admission Process
                    </p>
                    <div className="grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 px-5 sm:px-14">
                        <div className="">
                            <p className="text-white leading-none font-Prociono pb-5 lg:text-[150px] lge:text-[150px] md:text-[120px] mdsm:text-[120px] sm:text-[90px]">
                                1
                                <sup>
                                    <span className="lg:text-[48px] lge:text-[48px] md:text-5xl mdsm:text-5xl sm:text-2xl">st</span>
                                </sup>
                            </p>
                            <p className="font-PoppinsRegular text-white lg:text-h3 lge:text-h3 md:text-h3 mdsm:text-h3 sm:text-h3">
                                Check Your Eligibility
                            </p>
                        </div>
                        <div className="">
                            <p className="text-white leading-none font-Prociono pb-5 lg:text-[150px] lge:text-[150px] md:text-[120px] mdsm:text-[120px] sm:text-[90px]">
                                2
                                <sup>
                                    <span className="lg:text-[48px] lge:text-[48px] md:text-5xl mdsm:text-5xl sm:text-2xl">nd</span>
                                </sup>
                            </p>
                            <p className="lg:block lge:block md:hidden mdsm:hidden sm:hidden font-PoppinsRegular text-white lg:text-h3 lge:text-h3 md:text-h3 mdsm:text-h3 sm:text-h3">
                                Fill out the <br />
                                Application Form
                            </p>
                            <p className="lg:hidden lge:hidden md:block mdsm:block sm:block font-PoppinsRegular text-white lg:text-h3 lge:text-h3 md:text-h3 mdsm:text-h3 sm:text-h3">
                                Fill out the Application Form
                            </p>
                        </div>
                        <div className="">
                            <p className="text-white leading-none font-Prociono pb-5 lg:text-[150px] lge:text-[150px] md:text-[120px] mdsm:text-[120px] sm:text-[90px]">
                                3
                                <sup>
                                    <span className="lg:text-[48px] lge:text-[48px] md:text-5xl mdsm:text-5xl sm:text-2xl">rd</span>
                                </sup>
                            </p>
                            <p className="lg:block lge:block md:hidden mdsm:hidden sm:hidden font-PoppinsRegular text-white lg:text-h3 lge:text-h3 md:text-h3 mdsm:text-h3 sm:text-h3">
                                Get Counselling
                            </p>
                            <p className="lg:hidden lge:hidden md:block mdsm:block sm:block font-PoppinsRegular text-white lg:text-h3 lge:text-h3 md:text-h3 mdsm:text-h3 sm:text-h3">
                                Get Counselling
                            </p>
                        </div>
                        <div className="">
                            <p className="text-white leading-none font-Prociono pb-5 lg:text-[150px] lge:text-[150px] md:text-[120px] mdsm:text-[120px] sm:text-[90px]">
                                4
                                <sup>
                                    <span className="lg:text-[48px] lge:text-[48px] md:text-5xl mdsm:text-5xl sm:text-2xl">th</span>
                                </sup>
                            </p>
                            <p className="font-PoppinsRegular text-white lg:text-h3 lge:text-h3 md:text-h3 mdsm:text-h3 sm:text-h3">
                                Pay & Reserve Your Seat
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative p-12 overflow-hidden sm:hidden">
                            {/* <div className="absolute -top-20 h-40 w-40 rounded-full -left-20 border-white border-2"></div>
                <div className="absolute -top-5 h-40 w-40 rounded-full -left-28 border-white border-2"></div> */}
                            <div className="grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 pb-7">
                                <div className="col-span-3 flex justify-center items-center md:pb-5 mdsm:pb-5 sm:pb-5">
                                    <p className="lg:text-xl lge:text-xl md:text-h1 mdsm:text-h1 sm:text-h2 md:text-center mdsm:text-center sm:text-center text-white font-PoppinsMedium ">
                                        For more information about fees
                                    </p>
                                </div>
                                <div className="col-span-2 flex justify-center">
                                    <a href="#form">
                                        <button className="py-3 px-14 font-JosefinBold border border-backgroundbox hover:border-white hover:text-white hover:bg-black transition duration-300 lg:text-h2 lge:text-h2 md:text-h3 mdsm:text-h3 sm:text-h4 text-primary bg-backgroundbox">
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-white font-PoppinsMedium lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h5 sm:text-h6">
                                    Begin your career with a program designed for the contemporary world.
                                </p>
                            </div>
                            {/* <div className="absolute -bottom-20 h-40 w-40 rounded-full -right-20 border-white border-2"></div>
                <div className="absolute -bottom-5 h-40 w-40 rounded-full -right-28 border-white border-2"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
