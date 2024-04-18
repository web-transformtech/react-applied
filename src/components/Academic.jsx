import academicImg from '../assets/images/Academic/academic.webp';
import non from '../assets/images/Academic/non2.webp';
import peer from '../assets/images/Academic/Network - peer.webp';
import { BsDot } from 'react-icons/bs';
export default function Academic() {
    return (
        <div>
            {/* Desktop View Start */}
            <div className="2xl:container 2xl:mx-auto lg:block lge:block md:hidden mdsm:hidden sm:hidden">
                <div className="">
                    <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-3 mdsm:grid-cols-1 sm:grid-cols-1 sm:block">
                        <div className="group overflow-none">
                            <div className="relative group overflow-hidden ">
                                <img src={academicImg} alt="academicImg" className="w-[100%] object-cover h-[550px] " />
                                <div className="">
                                    <div className="deselement p-10 h-[100%] absolute w-[100%] top-0 mdsm:p-4 lg:p-10">
                                        <div className="descardHeader ">
                                            <p className="text-backgroundbox group-hover:text-backgroundbox sub-heading px-4 text-center absolute top-[15%] tracking-wider py-2 font-JosefinBold lg:text-[48px] lge:text-[48px] md:text-[34px] mdsm:text-[34px] sm:text-[28px]">
                                                Academics
                                            </p>
                                        </div>
                                        <div className="descardElemts px-4">
                                            <div className="absolute top-[60%] w-[100%]">
                                                <div className="w-[100%] mt-6 pb-4 flex">
                                                    <div className="w-[5%] ">
                                                        <BsDot className="mx-3 mt-2 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6  text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6 ">
                                                            Research Programs
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6  text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Guest Lectures
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3  text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6  text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Internships
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3  text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6  text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Co-Curricular Activities
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-none">
                            <div className="relative group overflow-hidden ">
                                <img src={non} alt="nonacademicImg" className="w-[100%] object-cover h-[550px] " />
                                <div className="">
                                    <div className="deselement p-10 h-[100%] absolute w-[100%] top-0 mdsm:p-4 lg:p-10">
                                        <div className="descardHeader ">
                                            <p className="text-backgroundbox group-hover:text-backgroundbox sub-heading px-4 text-center absolute top-[15%] tracking-wider py-2 font-JosefinBold lg:text-[38px] lge:text-[38px] md:text-[28px] mdsm:text-[34px] sm:text-[28px]">
                                                Non-Academics
                                            </p>
                                        </div>
                                        <div className="descardElemts px-4">
                                            <div className="absolute top-[60%] w-[100%]">
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Sports
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Clubs
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Extra-Curricular Activities
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Outbound Training
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-none">
                            <div className="relative group overflow-hidden ">
                                <img src={peer} alt="peer" className="w-[100%] object-cover h-[550px] " />
                                <div className="">
                                    <div className="deselement p-10 h-[100%]  absolute w-[100%] top-0 mdsm:p-4 lg:p-10">
                                        <div className="descardHeader ">
                                            <p className="text-backgroundbox group-hover:text-backgroundbox sub-heading px-0 text-center absolute top-[15%] tracking-wider py-2 font-JosefinBold lg:text-[36px] lge:text-[36px] md:text-[28px] mdsm:text-[34px] sm:text-[28px]">
                                                Engagements
                                            </p>
                                        </div>
                                        <div className="descardElemts px-4">
                                            <div className="absolute  top-[60%] w-[100%]">
                                                <div className="w-[100%] mt-6 pb-4 flex">
                                                    <div className="w-[5%] ">
                                                        <BsDot className="mx-3 mt-2 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6 ">
                                                            Alumni Meet
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Mentorship Programs
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Conferences
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Networking Events
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Desktop View End */}
            {/* Mobile View Start */}
            <div className="2xl:container 2xl:mx-auto lg:hidden lge:hidden md:block mdsm:block sm:block">
                <div className="">
                    <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-3 mdsm:grid-cols-1 sm:grid-cols-1 sm:block">
                        <div id="academic" className="group overflow-none">
                            <div className="relative group overflow-hidden ">
                                <img src={academicImg} alt="academicImg" className="w-[100%] object-cover h-[550px] " />
                                <div className="">
                                    <div className="hoverColor element p-10 h-[100%] absolute w-[100%] top-0 mdsm:p-4 lg:p-10">
                                        <div className="cardHeader ">
                                            <p className="text-backgroundbox group-hover:text-backgroundbox sub-heading px-4 text-center absolute top-[15%] tracking-wider py-2 font-JosefinBold lg:text-[48px] lge:text-[48px] md:text-[34px] mdsm:text-[34px] sm:text-[28px]">
                                                Academic
                                            </p>
                                        </div>
                                        <div className="cardElemts px-4">
                                            <div className="absolute top-[60%] w-[100%]">
                                                <div className="w-[100%] mt-6 pb-4 flex">
                                                    <div className="w-[5%] ">
                                                        <BsDot className="mx-3 mt-2 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6  text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6 ">
                                                            Research Programs
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6  text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Guest Lectures
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3  text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6  text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Internships
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3  text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6  text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Co-Curricular Activities
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="nonacademic" className="group overflow-none">
                            <div className="relative group overflow-hidden ">
                                <img src={non} alt="nonacademicImg" className="w-[100%] object-cover h-[550px] " />
                                <div className="">
                                    <div className="hoverColor element p-10 h-[100%] absolute w-[100%] top-0 mdsm:p-4 lg:p-10">
                                        <div className="cardHeader ">
                                            <p className="text-backgroundbox group-hover:text-backgroundbox sub-heading px-4 text-center absolute top-[15%] tracking-wider py-2 font-JosefinBold lg:text-[38px] lge:text-[38px] md:text-[28px] mdsm:text-[34px] sm:text-[28px]">
                                                Non-Academic
                                            </p>
                                        </div>
                                        <div className="cardElemts px-4">
                                            <div className="absolute top-[60%] w-[100%]">
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Sports
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Clubs
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Extra-Curricular Activities
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Outbound Training
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sports" className="group overflow-none">
                            <div className="relative group overflow-hidden ">
                                <img src={peer} alt="peer" className="w-[100%] object-cover h-[550px] " />
                                <div className="">
                                    <div className="hoverColor element p-10 h-[100%]  absolute w-[100%] top-0 mdsm:p-4 lg:p-10">
                                        <div className="cardHeader ">
                                            <p className="text-backgroundbox group-hover:text-backgroundbox sub-heading px-0 text-center absolute top-[15%] tracking-wider py-2 font-JosefinBold lg:text-[36px] lge:text-[36px] md:text-[28px] mdsm:text-[34px] sm:text-[28px]">
                                                Engagements
                                            </p>
                                        </div>
                                        <div className="cardElemts px-4">
                                            <div className="absolute  top-[60%] w-[100%]">
                                                <div className="w-[100%] mt-6 pb-4 flex">
                                                    <div className="w-[5%] ">
                                                        <BsDot className="mx-3 mt-2 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6 ">
                                                            Alumni Meet
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Mentorship Programs
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Conferences
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[100%] mt-4 pb-4 flex">
                                                    <div className="w-[5%] mt-2">
                                                        <BsDot className="mx-3 text-backgroundbox text-h4" />
                                                    </div>
                                                    <div className="w-[95%]">
                                                        <p className="px-6 text-white font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h5 mdsm:text-h5 sm:text-h6">
                                                            Networking Events
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile View End */}
        </div>
    );
}
