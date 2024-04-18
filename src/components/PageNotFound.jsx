// import LogoBlack from "../assets/images/CAS_BLACK1.png";
import Not from '../assets/images/404.png';

export default function PageNotFound() {
    return (
        <div>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-5 mdsm:grid-cols-5 sm:grid-cols-1">
                    <div className="col-span-2">
                        <img src={Not} alt="404" draggable="false" />
                    </div>
                    <div className="col-span-3">
                        {/* <div className="flex justify-center">
              <img src={LogoBlack} className="" />
            </div> */}
                        <div className="pt-16">
                            <div>
                                <p className="font-JosefinSemibold text-primary text-xl">404</p>
                                <p className="lg:text-5xl lge:text-5xl md:text-5xl mdsm:text-5xl sm:text-xl font-PoppinsSemiBold ">Page not found</p>
                                <p className="lg:text-h5 lge:text-h5 md:text-h6 mdsm:text-h6 sm:text-base pb-3">
                                    Sorry, we couldn’t find the page you’re looking for.
                                </p>
                                <div className="flex gap-5">
                                    <a
                                        href="/react-applied"
                                        className="border text-base py-2 px-6 bg-primary text-white hover:bg-white hover:text-black transition duration-200"
                                    >
                                        Go Back Home
                                    </a>
                                    <a
                                        href="https://mba.rvscas.ac.in/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border text-base py-2 px-6 hover:bg-primary hover:text-white transition duration-200"
                                    >
                                        Visit our website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
