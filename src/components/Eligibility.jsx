import EligibilityImage from '../assets/images/Eli/Eligibility.webp';
// import checkbox from "../assets/images/Eli/checkbox.webp";
import Eligibility_text from '../assets/images/Eli/Eligibility_tex.webp';
import Find_Your from '../assets/images/Eli/check_your.webp';
import { HiCheck } from 'react-icons/hi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Eligibility() {
    return (
        <div className="bg-backgroundcolor">
            <div className="container mx-auto py-20">
                <div className="grid lg:grid-cols-8 md:grid-cols-12 mdsm:grid-cols-12 sm:grid-cols-12 sm:gap-0 gap-10">
                    <div className="lg:col-span-3 md:col-span-12 mdsm:col-span-12 sm:col-span-12 relative">
                        <img src={EligibilityImage} width="551" height="519" draggable="false" alt="Eligibility" className="w-full h-full" />
                        <div className=" absolute bottom-3 text-white lg:text-[48px] lge:text-[48px] md:text-[50px] mdsm:text-[50px] sm:text-[30px] font-JosefinSemibold pl-4 lg:leading-[65px] lge:leading-[65px] ">
                            Eligibility
                        </div>
                    </div>
                    <div className=" lg:col-span-5 md:col-span-12 mdsm:col-span-12 sm:col-span-12">
                        <div className="mt-1 grid lg:grid-cols-10 sm:grid-cols-12">
                            {/* <div className="lg:col-span-2 sm:col-span-4 lg:block lge:block sm:hidden md:hidden mdsm:hidden">
                <LazyLoadImage
                  src={checkbox}
                  width="189"
                  height="197"
                  draggable="false"
                  alt="checkbox"
                  className="object-cover"
                />
              </div> */}
                            <div className=" lg:col-span-6 sm:col-span-8">
                                <div className="px-4 mt-[8px]">
                                    <LazyLoadImage src={Find_Your} width="535" height="79" draggable="false" alt="Find_Your" />
                                    <LazyLoadImage
                                        src={Eligibility_text}
                                        width="374"
                                        height="106"
                                        className="object-cover"
                                        draggable="false"
                                        alt="Eligibility_text"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full mt-6">
                            <div className=" w-2%">
                                <HiCheck className=" text-backgroundbox text-h1 mr-4" />
                            </div>
                            <div>
                                <p className="font-PoppinsRegular font-medium lg:text-h5 lge:text-h5 md:text-h6 mdsm:text-h6 sm:text-tiny">
                                    Any Bachelor’s degree or an equivalent with a minimum of 50% marks.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full mt-6">
                            <div className=" w-2%">
                                <HiCheck className=" text-backgroundbox text-h1 mr-4" />
                            </div>
                            <div>
                                <p className=" font-PoppinsRegular font-medium lg:text-h5 lge:text-h5 md:text-h6 mdsm:text-h6 sm:text-tiny">
                                    Minimum of 50% valid test score from TANCET/CAT/XAT/MAT/CMAT/GMAT/GRE
                                    <br />
                                    <p className="text-center text-primary font-PoppinsMedium">(or)</p>
                                    <p className="text-center"> Consortium Colleges Entrance Exam(CET)</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
