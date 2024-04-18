import { useEffect } from 'react';
import $ from 'jquery';
import Brochure from './Brochure';
function ScrollCTA() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            var y = window.scrollY;
            if (y >= 600) {
                $('#scrolling').fadeIn('slow');
            } else if (y <= 600) {
                $('#scrolling').fadeOut(2000);
            }
        });
    }, []);
    return (
        <div className="lg:pt-0 lge:pt-0 md:pt-0 mdsm:pt-0 sm:pt-28">
            <div className="lg:hidden lge:hidden md:hidden mdsm:hidden sm:block">
                <section id="scrolling" className="fixed shadow hidden z-50 bg-[#fff] bottom-0 w-[100%]">
                    {/* mobile view */}
                    <div className="container mx-auto py-6">
                        <div className="grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1">
                            <div className="flex justify-center items-center lg:flex lge:flex md:flex mdsm:hidden sm:hidden">
                                <h1 className="lg:text-xl lge:text-xl text-primary font-semibold tracking-wide leading-[56px] transformtech">
                                    To know more about our program
                                </h1>
                            </div>
                            <div className="flex justify-center items-center">
                                {/* <a href="#form">
                <button className="bg-primary text-white Transition text-[18px] borderradius px-14 py-4 tracking-wider">
                  Download Brochure
                </button>
              </a> */}
                                <Brochure brochureBtn="Get Your Brochure" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default ScrollCTA;
