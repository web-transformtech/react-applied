import Monks from '../assets/images/Placement/3 Monks.webp';
import Amazon from '../assets/images/Placement/Amazon.webp';
import tcs from '../assets/images/Placement/tcs.webp';
import Flipkart from '../assets/images/Placement/Flipkart.webp';
import infosys from '../assets/images/Placement/infosys.webp';
import Joytech from '../assets/images/Placement/Joy tech.webp';
import byjus from '../assets/images/Placement/byjus.webp';
import Reliance from '../assets/images/Placement/Reliance.webp';
import Placement from '../assets/images/Placement.jpg';
import Servercake from '../assets/images/Placement/Server cake.webp';
import waggle from '../assets/images/Placement/waggle.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { RiPresentationFill } from "react-icons/ri";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
// import { FaGraduationCap } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FcGraduationCap } from 'react-icons/fc';
export default function Placements() {
    const PlacementImages = [
        {
            id: 0,
            img: Monks,
            alt: 'Monks',
            width: '223',
            height: '123',
        },
        {
            id: 1,
            img: Amazon,
            alt: 'Amazon',
            width: '223',
            height: '123',
        },
        {
            id: 2,
            img: tcs,
            alt: 'TCS',
            width: '223',
            height: '123',
        },
        {
            id: 3,
            img: Flipkart,
            alt: 'Flipkart',
            width: '223',
            height: '123',
        },
        {
            id: 4,
            img: infosys,
            alt: 'infosys',
            width: '223',
            height: '123',
        },
        {
            id: 5,
            img: Joytech,
            alt: 'Joytech',
            width: '223',
            height: '123',
        },
        {
            id: 6,
            img: byjus,
            alt: 'byjus',
            width: '223',
            height: '123',
        },
        {
            id: 7,
            img: Reliance,
            alt: 'Reliance',
            width: '223',
            height: '123',
        },
        {
            id: 8,
            img: Servercake,
            alt: 'Servercake',
            width: '223',
            height: '123',
        },
        {
            id: 9,
            img: waggle,
            alt: 'waggle',
            width: '223',
            height: '123',
        },
    ];
    const place = [
        {
            id: 0,
            icon: '',
            name: 'Presentation Skills',
        },
        {
            id: 1,
            icon: '',
            name: 'Technical Training',
        },
        {
            id: 2,
            icon: '',
            name: 'Resume Building',
        },
        {
            id: 3,
            icon: '',
            name: 'Aptitude Training',
        },
        {
            id: 4,
            icon: '',
            name: 'Effective Training',
        },
        {
            id: 5,
            icon: '',
            name: 'Mock Interviews',
        },
    ];
    return (
        <div id="place" className="pt-40 pb-10">
            <div className="relative">
                <div className="absolute -top-[5.5rem] border w-full border-b-[1px] border-orange"></div>
                <div className="absolute -top-16 border w-full border-b-[1px] border-orange"></div>
                <div className="absolute -top-10 border w-full border-b-[1px] border-orange"></div>
            </div>
            <div className="container relative 2xl:container 2xl:mx-auto">
                <div className="absolute -top-32 bg-primary px-10 lg:left-20 lge:left-20 md:left-20 mdsm:left-20 sm:left-0 py-8">
                    <h2 className="text-center lg:text-[48px] lge:text-[48px] md:text-[40px] mdsm:text-[40px] sm:text-[28px] text-white font-JosefinSemibold leading-none pb-4 ">
                        Kickstart your career
                    </h2>
                    {/* <h2 className="lge:text-[24px] md:text-[20px] mdsm:text-[20px] sm:text-[18px] md:text-left mdsm:text-left sm:text-left text-white font-PoppinsMedium pb-4">
            At our institution, we engage you with top-tier organizations.
          </h2> */}
                </div>
            </div>
            <div className="container mx-auto pt-14">
                <div className="pb-6 mx-5">
                    <div className="lg:block lge:block md:block mdsm:hidden sm:hidden mb-6 border-l-8 border-primary bg-backgroundcolor pb-2 figmsShadow">
                        <div className="flex items-start justify-center  sm:px-1 sm:gap-3 p-3 ">
                            <FcGraduationCap className="mt-2.5 text-primary text-xl w-[7%]" />
                            <p className="w-[95%] text-secondary lg:text-h3 font-PoppinsRegular lge:text-h3 md:text-h2 mdsm:text-h2 sm:text-base pb-4">
                                <span className="text-black font-JosefinSemibold lg:text-3xl lge:text-3xl md:text-xl mdsm:text-h2 sm:text-h4">
                                    100% Placement Assistance:
                                </span>{' '}
                                Benefit from dedicated placement support and corporate training to land your dream job.
                            </p>
                        </div>
                        {/* <div className="container mx-auto"> */}
                        <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 relative pb-6 gap-6 mx-16">
                            <div className="absolute border-2 border-orange w-full top-7"></div>
                            <div className="absolute border-2 border-orange w-full top-28 "></div>
                            <div className="absolute border-2 border-orange w-full top-[12.5rem] lg:hidden lge:hidden md:block "></div>
                            {place.map((v, i) => (
                                <div key={i}>
                                    <div className="border-2 border-orange relative">
                                        <div className="absolute -top-4 left-6 lg:bg-backgroundcolor lge:bg-backgroundcolor md:bg-white mdsm:bg-white sm:bg-white">
                                            {v.icon}
                                        </div>
                                        <p className="border-orange bg-backgroundcolor text-center font-JosefinSemibold text-primary py-3 text-h4">
                                            {v.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="relative">
                <div className="border-2 border-orange  bg-backgroundcolor text-center font-JosefinSemibold text-primary py-3 text-h4">
                  Presentation Skills
                </div>
              </div>
              <div className="relative">
                <div className="border-2 border-orange bg-backgroundcolor text-center font-JosefinSemibold text-primary py-3 text-h4">
                  Technical Training
                </div>
              </div>
              <div className="relative">
                <div className="border-2 border-orange bg-backgroundcolor text-center font-JosefinSemibold text-primary py-3 text-h4">
                  Resume Building
                </div>
              </div>
              <div className="">
                <div className="border-2 border-orange bg-backgroundcolor text-center font-JosefinSemibold text-primary py-3 text-h4">
                  Aptitude Training
                </div>
              </div>
              <div className="">
                <div className="border-2 border-orange bg-backgroundcolor text-center font-JosefinSemibold text-primary py-3 text-h4">
                  Effective Training
                </div>
              </div>
              <div className="">
                <div className="border-2 border-orange bg-backgroundcolor text-center font-JosefinSemibold text-primary py-3 text-h4">
                  Mock Interviews
                </div>
              </div> */}
                        </div>
                        {/* </div> */}
                        {/* <div className="grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 pb-6 gap-x-4">
              <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden"></div>
              <div className="flex justify-center">
                <div className="bg-[#6B0807] figmsShadow font-JosefinSemibold figmsShadow text-white py-3 px-8 rounded-lg text-h4">
                  Effective Training
                </div>
              </div>
              <div className="flex justify-center relative">
                <div className="bg-[#6B0807] figmsShadow font-JosefinSemibold figmsShadow text-white py-3 px-8 rounded-lg text-h4">
                  Mock Interviews
                </div>
              </div>
              <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden"></div>
            </div> */}
                    </div>
                    {/* <div className="pb-5 lg:flex lge:flex md:flex justify-center mdsm:hidden sm:hidden">
            <img
              src={PlacementDesk}
              width="1440"
              height="300"
              className="bgshadow1"
            />
          </div> */}
                    <div className="pb-5 lg:hidden lge:hidden md:hidden mdsm:flex sm:flex justify-center">
                        <img src={Placement} className="figmsShadow" />
                    </div>
                    <div className="flex items-start mb-6 sm:px-1 sm:gap-3 figmsShadow bg-backgroundcolor border-l-8 p-3 border-primary">
                        <FcGraduationCap className="mt-2.5 text-primary text-xl w-[7%]" />
                        <p className="w-[95%] text-secondary lg:text-h3 font-PoppinsRegular lge:text-h3 md:text-h2 mdsm:text-h2 sm:text-base">
                            <span className="text-black font-JosefinSemibold lg:text-3xl lge:text-3xl md:text-xl mdsm:text-h2 sm:text-h4">
                                Internship Opportunities:
                            </span>{' '}
                            Gain practical experience through 6 - 8 weeks of internships.
                        </p>
                    </div>
                </div>
                <div className="">
                    <Swiper
                        slidesPerView={3}
                        autoplay={{
                            delay: 800,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper py-20"
                        breakpoints={{
                            300: {
                                slidesPerView: 2.6,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3.6,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 40,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        {PlacementImages?.map((v) => (
                            <SwiperSlide key={v.img}>
                                <div key={v.id}>
                                    <LazyLoadImage
                                        src={v.img}
                                        alt={v.alt}
                                        width={v.width}
                                        height={v.height}
                                        className="mx-auto w-40 h-40 object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* <p className="lg:text-xl lge:text-xl md:text-h2 mdsm:text-h2 sm:text-h4 sm:px-5">
          <b>Internship Opportunities:</b> Gain practical experience through 6 -
          8 weeks of internships.
        </p> */}
            </div>
        </div>
    );
}
