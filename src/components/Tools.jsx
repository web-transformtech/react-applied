import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import GoogleAnalytics from '../assets/images/Program Curriculum/analytics.webp';
import WordPress from '../assets/images/Program Curriculum/word.webp';
import MailChimp from '../assets/images/Program Curriculum/mailchimp.webp';
import ChatGPT from '../assets/images/Program Curriculum/Chatgpt.webp';
import GoogleAds from '../assets/images/Program Curriculum/googleads.webp';
import Stukent from '../assets/images/Program Curriculum/stukent.webp';
import SEMRush from '../assets/images/Program Curriculum/semrush.webp';
import GSC from '../assets/images/Program Curriculum/gsc.webp';
import Meta from '../assets/images/Program Curriculum/meta.webp';
import AdvancedExcel from '../assets/images/Program Curriculum/excel.webp';
import PPT from '../assets/images/Program Curriculum/ppt.webp';
import GTM from '../assets/images/Program Curriculum/gtm.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Tools() {
    const tools = [
        {
            id: 0,
            img: GoogleAnalytics,
            alt: 'Google Analytics',
            width: '173',
            height: '141',
        },
        {
            id: 1,
            img: WordPress,
            alt: 'Word Press',
            width: '173',
            height: '141',
        },
        {
            id: 2,
            img: MailChimp,
            alt: 'Mail Chimp',
            width: '173',
            height: '141',
        },
        {
            id: 3,
            img: ChatGPT,
            alt: 'ChatGPT',
            width: '173',
            height: '141',
        },
        {
            id: 4,
            img: GoogleAds,
            alt: 'GoogleAds',
            width: '173',
            height: '141',
        },
        {
            id: 5,
            img: Stukent,
            alt: 'Stukent',
            width: '173',
            height: '141',
        },
        {
            id: 6,
            img: SEMRush,
            alt: 'Semrush',
            width: '173',
            height: '141',
        },
        {
            id: 7,
            img: GSC,
            alt: 'Google Search Console',
            width: '173',
            height: '141',
        },
        {
            id: 8,
            img: Meta,
            alt: 'Meta Ads',
            width: '173',
            height: '141',
        },
        {
            id: 9,
            img: AdvancedExcel,
            alt: 'Advanced Excel',
            width: '173',
            height: '141',
        },
        {
            id: 10,
            img: PPT,
            alt: 'Power Point',
            width: '173',
            height: '141',
        },
        {
            id: 11,
            img: GTM,
            alt: 'Google Tag Manager',
            width: '173',
            height: '141',
        },
    ];
    return (
        <div>
            <div className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-center lg:text-[48px] lge:text-[48px] md:text-[40px] mdsm:text-[40px] sm:text-[28px] text-primary font-JosefinSemibold leading-none pb-10">
                        These are the tools we use to educate you
                    </h2>
                    <div>
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
                                    spaceBetween: 40,
                                },
                                768: {
                                    slidesPerView: 3.6,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 100,
                                },
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                        >
                            <div className="overflow-hidden">
                                {tools?.map((t) => (
                                    <div key={t.img + t.alt}>
                                        <SwiperSlide key={t.alt}>
                                            <div className="mx-auto icons">
                                                <LazyLoadImage
                                                    src={t.img}
                                                    alt={t.alt}
                                                    width={t.width}
                                                    height={t.height}
                                                    className="object-cover mb-3"
                                                />
                                                {/* <p className="font-JosefinBold text-primary">{t.alt}</p> */}
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                ))}
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tools;
