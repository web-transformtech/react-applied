export default function CallSection() {
    return (
        <div>
            <div className="2xl:container 2xl:mx-auto lg:block lge:block md:block mdsm:block sm:hidden">
                <div className="bg-white relative p-12 overflow-hidden">
                    <div className="absolute -top-20 h-40 w-40 rounded-full -left-20 border-primary border-2"></div>
                    <div className="absolute -top-5 h-40 w-40 rounded-full -left-28 border-primary border-2"></div>
                    <div className="grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 pb-7">
                        <div className="col-span-3 flex justify-center items-center md:pb-5 mdsm:pb-5 sm:pb-5">
                            <p className="lg:text-h1 lge:text-h1 md:text-h1 mdsm:text-h1 sm:text-h3 md:text-center mdsm:text-center sm:px-3 sm:text-center text-primary font-PoppinsMedium ">
                                Wants to continue your educational journey with us
                            </p>
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <a href="#form">
                                <button className="py-3 border border-backgroundbox hover:bg-white hover:border-primary transition duration-300 px-14 sm:py-4 sm:px-8 font-JosefinBold lg:text-h2 lge:text-h2 md:text-h3 mdsm:text-h3 sm:text-h4 text-primary bg-backgroundbox">
                                    Get Brochure
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-primary font-PoppinsMedium lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h5 sm:text-h6">
                            The Institution with experienced faculty and skilled industry professionals
                        </p>
                    </div>
                    <div className="absolute -bottom-20 h-40 w-40 rounded-full -right-20 border-primary border-2"></div>
                    <div className="absolute -bottom-5 h-40 w-40 rounded-full -right-28 border-primary border-2"></div>
                </div>
            </div>
        </div>
    );
}
