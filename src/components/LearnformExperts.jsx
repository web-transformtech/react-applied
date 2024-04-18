import Learn from '../assets/images/learn heading.webp';
import Trustee from '../assets/images/Teacher/Senthil Ganesh.webp';
import Kanakaraj from '../assets/images/Teacher/Kanakaraj.webp';
import Rajamani from '../assets/images/Teacher/Rajamani.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BsDot } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
export default function LearnformExperts() {
    const faculty = [
        {
            id: 0,
            img: Trustee,
            alt: 'Dr. K. Senthil Ganesh - Managing Trustee',
            name: 'Dr. K. Senthil Ganesh - Managing Trustee',
            desigination: 'Specialization - Digital Transformation',
            heading: 'Qualifications: BBA, MBA, MSc in Software Engineering, Ph.D. in Management.',
            points: [
                'He has around 25 years of rich experience in senior management roles.',
                'He has completed a program on Developing Digital Transformation Strategies Program.',
                'Board member of Transform Tech & Active Investor.',
            ],
            width: '323',
            height: '440',
        },
        {
            id: 1,
            img: Kanakaraj,
            alt: 'Dr. Kanakaraj N - Academic Coordinator',
            name: 'Dr. Kanakaraj N - Academic Coordinator',
            desigination: '',
            heading: <p>Qualifications: BBM., MBA., M.Phil., Ph.D (Mgt)., NET(Mgt)., M.Com., Ph.D (Com)., NET(Com)., PGDCA</p>,
            points: [
                'He has over 19 years of experience in academics.',
                'Financial Modeling & Valuation from EY and AFSA from Finshiksha.',
                'Published 22 research articles in reputed National and International journals.',
            ],
            width: '323',
            height: '440',
        },
        {
            id: 2,
            img: Rajamani,
            alt: 'Dr. A. Rajamani - Associate Professor',
            name: 'Dr. A. Rajamani - Associate Professor',
            desigination: '',
            heading: <p>Qualifications: B.Com., MBA., M.Phil., M.Com., PGDCA.,NET(UGC).,Ph.d</p>,
            points: [
                'She has 15 years of experience in teaching.',
                'Published papers in national and international journals and actively participated in conferences and faculty development programs.',
                'She was a board member and resource person for various programs and organized guest lectures, workshops, and conferences.',
            ],
            width: '323',
            height: '440',
        },
    ];

    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="relative ">
                <img
                    src={Learn}
                    width="500"
                    height="160"
                    alt="heading"
                    className="ml-14 lg:w-[500px] lge:w-[500px] md:w-[300px] mdsm:w-[300px] sm:w-[250px]"
                />
                <p className="absolute lg:bottom-20 lge:bottom-20 md:bottom-10 mdsm:bottom-10 sm:bottom-9 lg:left-24 lge:left-24 md:left-[94px] mdsm:left-[94px] sm:left-[84px] underline underline-offset-8 text-white lg:text-[48px] lge:text-[48px] md:text-h2 mdsm:text-h2 sm:text-h4 font-JosefinSemibold text-center">
                    Learn from Experts
                </p>
            </div>
            <div className="learnback lg:-mt-[9rem] lge:-mt-[9rem] md:-mt-[5.4rem] mdsm:-mt-[5.4rem] sm:-mt-[4.5rem] lg:pt-40 lge:pt-40 md:pt-28 mdsm:pt-28 sm:pt-20 lg:pb-10 lge:pb-10 md:pb-10 mdsm:pb-10 sm:pb-10">
                <div className="grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 container mx-auto">
                    <div className="col-span-2 flex items-center">
                        <p className="lg:block lge:block md:block mdsm:block sm:hidden lg:text-h5 lge:text-h5 text-white md:pb-5 mdsm:pb-5 sm:pb-5 font-PoppinsMedium text-center px-20">
                            At our Institution, we believe in learning from the best. Our expert faculty strive to help shape student&apos;s academic
                            pursuits and prepare them for success.
                        </p>
                        <p className="lg:hidden lge:hidden md:hidden mdsm:hidden sm:block lg:text-h5 lge:text-h5 text-white md:pb-5 mdsm:pb-5 sm:pb-5 font-PoppinsMedium text-center px-20 sm:px-6">
                            Shaping your career with industry professionals
                        </p>
                    </div>
                    <div className="col-span-3">
                        <div className="sm:px-7">
                            <Swiper id="learn" navigation={true} modules={[Navigation]}>
                                {faculty?.map((v) => (
                                    <SwiperSlide key={v.name}>
                                        <div className="">
                                            <div className="sm:px-0 md:px-0 mdsm:px-0 lg:px-0 lge:px-0">
                                                <div className="w-[100%] flex sm:block bg-white">
                                                    <div className="w-[5%] sm:w-[3%]">
                                                        <div className="h-[100%] bg-primary w-[25%] mx-auto"></div>
                                                    </div>
                                                    <div className="w-[35%] sm:w-[100%] lg:mb-14 lge:mb-14 md:mb-5 mdsm:mb-5 sm:mb-5 relative">
                                                        <LazyLoadImage
                                                            src={v.img}
                                                            alt={v.alt}
                                                            draggable="false"
                                                            width={v.width}
                                                            height={v.height}
                                                            className={`object-cover`}
                                                        />
                                                        <div className="bg-[#000] sm:py-2 lg:hidden lge:hidden md:hidden mdsm:hidden sm:block">
                                                            <div className="pt-2 sm:pb-2 text-center sm:text-base text-white">{v.name}</div>
                                                            <div className="pb-2 sm:text-base text-center text-white">{v.desigination}</div>
                                                        </div>
                                                    </div>
                                                    <div className="w-[60%] sm:w-[100%] lg:py-10 md:py-7 mdsm:py-7 px-10 sm:px-4">
                                                        <div className="lg:block lge:block md:block mdsm:block sm:hidden">
                                                            <div className="pb-2 text-left font-semibold text-h5 text-primary">{v.name}</div>
                                                            <div className="pb-2 text-left font-semibold text-h6">{v.desigination}</div>
                                                        </div>
                                                        <p className="text-text-color text-wrap break-words text-left sm:text-[16px] sm:text-left font-semibold text-h6">
                                                            {v.heading}
                                                        </p>
                                                        <div className="py-8">
                                                            {v.points.map((p, ind) => (
                                                                <div className="w-[100%] pb-2 sm:pb-4 flex px-4" key={p + (ind + 10)}>
                                                                    <div className="w-[8%]">
                                                                        <BsDot className="my-1" />
                                                                        {/* <div className="w-1.5 h-1.5 rounded-full mt-1 bg-primary mx-0" /> */}
                                                                    </div>
                                                                    <div className="w-[95%] sm:text-[14px] text-left text-text-color  leading-[26px]">
                                                                        {p}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
