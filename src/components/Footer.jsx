import '../assets/css/style.css';
import FootLogo from '../assets/images/logo.webp';
export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="bg-whotext">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-9 lge:grid-cols-9 md:grid-cols-4 mdsm:grid-cols-4 sm:grid-cols-1  pt-10 pb-5">
                    {/* grid 1 start */}
                    <div className="lg:col-span-2 lge:col-span-2 md:col-span-2 mdsm:col-span-2 flex items-center justify-center">
                        <img src={FootLogo} width="230" height="230" alt="logo" className="object-cover" />
                    </div>
                    {/* grid 1 end */}
                    {/* grid 2 start */}
                    <div className="lg:col-span-2 lge:col-span-2 md:col-span-2 mdsm:col-span-2 flex justify-center items-center">
                        <div className="">
                            <p className="text-white font-JosefinBold lg:text-xl lge:text-xl md:text-h2 mdsm:text-h2 sm:text-h3 sm:px-5 pb-3">
                                Address
                            </p>
                            <p className="text-white lg:w-[80%] lge:w-[80%] sm:pb-10 font-PoppinsRegular lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h5 sm:text-h6 sm:px-5 leading-loose">
                                242, Trichy Road, Sulur, Coimbatore, Tamil Nadu, India - 641 402
                            </p>
                        </div>
                    </div>
                    {/* grid 2 end */}
                    {/* grid 3 start */}
                    <div className="lg:col-span-5 lge:col-span-5 md:col-span-4 lg:h-full lge:h-full md:h-40 mdsm:col-span-4 mdsm:h-40 sm:h-28">
                        <div className="image flex justify-center items-center">
                            <p className="text-white font-JosefinRegular sm:text-sm text-center">© {date} RVS CAS Coimbatore. All rights reserved</p>
                        </div>
                    </div>
                    {/* grid 3 end */}
                </div>
                <div className="border-b-2 border-white mb-5"></div>
                <div className="pb-4 px-5">
                    <p className="text-white font-JosefinRegular sm:text-sm flex justify-center text-center pb-2">
                        Designed and Developed By Transform Tech
                    </p>
                    <p className="text-white font-JosefinRegular sm:text-sm flex justify-center">A Unit of RVS Educational Trust</p>
                </div>
            </div>
        </div>
    );
}
