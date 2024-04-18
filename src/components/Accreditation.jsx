import NAAC from '../assets/images/Accreditation/NAAC.webp';
import Bharathiyar from '../assets/images/Accreditation/Bharathiyar.webp';
import AICTE from '../assets/images/Accreditation/AICTE.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Accreditation() {
    return (
        <div className="pb-24">
            <div className="container mx-auto grid lg:grid-cols-2 lge:grid-cols-2 lg:pt-[6rem] lge:pt-[6rem] md:pt-[5rem] mdsm:pt-[5rem] sm:pt-[4rem] pb-12">
                <div className="lg:border-r-2 lg:border-dashed lg:border-backgroundbox lge:border-r-2 lge:border-dashed lge:border-backgroundbox">
                    <p className="lg:block lge:block md:block mdsm:block sm:hidden text-primary lg:px-10 lge:px-10 md:px-8 mdsm:px-8 sm:pb-3 mdsm:pb-3 flex justify-center sm:px-5 lg:text-[42px] lge:text-[42px] md:text-[50px] mdsm:text-[46px] sm:text-[26px] font-JosefinSemibold lg:leading-[65px] lge:leading-[65px]">
                        Recognition & Accreditations
                    </p>
                    <p className="lg:hidden lge:hidden md:hidden mdsm:hidden sm:block pb-2 text-primary sm:text-center sm:pl-0 sm:px-5 lg:text-[42px] lge:text-[42px] md:text-[50px] mdsm:text-[50px] sm:text-[30px] font-JosefinSemibold pl-4 lg:leading-[65px] lge:leading-[65px]">
                        Recognition <br />&<br /> Accreditations
                    </p>
                </div>
                <div className="flex items-center sm:text-center sm:px-9 pl-10">
                    <p className="font-PoppinsRegular lg:text-h3 lge:text-h3 md:text-h4 mdsm:text-h4 sm:text-h6 ">
                        RVS CAS is the first Institution in Coimbatore to make an impact with its advanced courses for this <b>Digital Era.</b>
                    </p>
                </div>
            </div>
            <div className="container mx-auto lg:gap-x-10 lge:gap-x-10 md:gap-x-10 mdsm:gap-x-5 sm:gap-x-5 flex justify-center lg:px-24 lge:px-24 md:px-10 mdsm:px-10 sm:px-10 select-none">
                <div className="">
                    <LazyLoadImage src={NAAC} width="373" height="228" draggable="false" className="object-cover" alt="Naac" />
                </div>
                <div className="">
                    <LazyLoadImage src={Bharathiyar} width="373" height="228" draggable="false" className="object-cover" alt="Bharathiyar" />
                </div>
                <div className="">
                    <LazyLoadImage src={AICTE} width="373" height="228" draggable="false" className="object-cover" alt="Aicte" />
                </div>
                {/* <Swiper
          slidesPerView={3}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <div className="overflow-hidden">
            <SwiperSlide>
              <div className="">
                <img src={NAAC} className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src={Bharathiyar} className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src={AICTE} className="" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper> */}
            </div>
        </div>
    );
}
