import Higlights from '../assets/images/program higlights.webp';
export default function ProgramHiglights() {
    return (
        <div>
            <div className="pt-32 pb-20 2xl:container 2xl:mx-auto">
                <div className="flex w-full relative">
                    <div className="lg:w-[55%] lge:w-[55%] md:w-full mdsm:w-full absolute left-0 lg:-top-5 lge:-top-5 md:top-32 mdsm:top-32 md:pt-40 mdsm:pt-40 sm:top-40 lg:pt-5 lge:pt-5 sm:pt-52 lg:bg-backgroundcolor lge:bg-backgroundcolor lg:pl-3 lge:pl-3 md:px-10 mdsm:px-10 sm:pl-8 figmsShadow">
                        <p className="font-JosefinBold text-primary lg:text-[46px] lge:text-[46px] md:text-4xl mdsm:text-3xl sm:text-h1 pb-2 lg:px-24 lge:px-24 md:px-0 mdsm:px-0">
                            Program Higlights
                        </p>
                        <p className="font-PoppinsRegular text-secondary text-h6 sm:text-base lg:px-24 lge:px-24 md:px-0 mdsm:px-0 sm:px-0 sm:w-[90%] pb-5">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                            layout.{' '}
                        </p>
                        <ul className="lg:px-28 lge:px-28 md:px-20 mdsm:px-20 pb-3">
                            <li className="flex font-PoppinsMedium text-base text-secondary pb-5">
                                <div className="w-3 h-3 rounded-full mt-1 bg-primary mx-5" /> Research Master Phase
                            </li>
                            <li className="flex font-PoppinsMedium text-base text-secondary pb-5">
                                <div className="w-3 h-3 rounded-full mt-1 bg-primary mx-5" /> Doctoral Studies Phase.
                            </li>
                            <li className="flex font-PoppinsMedium text-base text-secondary pb-5">
                                <div className="w-3 h-3 rounded-full mt-1 bg-primary mx-5" /> Professional Development
                            </li>
                            <li className="flex font-PoppinsMedium text-base text-secondary pb-5">
                                <div className="w-3 h-3 rounded-full mt-1 bg-primary mx-5" /> Foundations in Management
                            </li>
                            <li className="flex font-PoppinsMedium text-base text-secondary pb-5">
                                <div className="w-3 h-3 rounded-full mt-1 bg-primary mx-5" /> Research Methods
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-[50%] absolute right-0 lge:w-[50%] lg:flex lge:flex justify-end sm:hidden md:hidden mdsm:hidden items-center z-50">
                        <img src={Higlights} className="w-full" alt="Program Details" />
                    </div>
                </div>
            </div>
        </div>
    );
}
