export default function CallAction({ curriculum }) {
    return (
        <div className="2xl:container 2xl:mx-auto lg:block lge:block md:block mdsm:block sm:hidden">
            <div className={`${curriculum.tag === 'higlights' ? 'bg-secondary' : 'bg-primary'}  relative p-12 overflow-hidden`}>
                <div className="absolute -top-20 h-40 w-40 rounded-full -left-20 border-white border-2"></div>
                <div className="absolute -top-5 h-40 w-40 rounded-full -left-28 border-white border-2"></div>
                <div className="grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 pb-7">
                    <div className="col-span-3 flex justify-center items-center md:pb-5 mdsm:pb-5 sm:pb-5">
                        <p className="lg:text-xl lge:text-xl md:text-h1 mdsm:text-h1 sm:text-h2 md:text-center mdsm:text-center sm:text-center sm:px-4 text-white font-PoppinsMedium ">
                            {curriculum.title}
                        </p>
                    </div>
                    <div className="col-span-2 flex justify-center">
                        <a href="#form">
                            <button
                                className={`${
                                    curriculum.tag === 'higlights'
                                        ? 'bg-primary text-white hover:border-white hover:bg-secondary hover:text-white border-primary'
                                        : 'border-backgroundbox hover:bg-primary hover:border-white hover:text-white text-primary bg-backgroundbox'
                                } py-3 border transition duration-300 px-14 sm:py-4 sm:px-8 font-JosefinBold lg:text-h2 lge:text-h2 md:text-h3 mdsm:text-h3 sm:text-h4 `}
                            >
                                {curriculum.btnname}
                            </button>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-white font-PoppinsMedium lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h5 sm:text-h6">{curriculum.para}</p>
                </div>
                <div className="absolute -bottom-20 h-40 w-40 rounded-full -right-20 border-white border-2"></div>
                <div className="absolute -bottom-5 h-40 w-40 rounded-full -right-28 border-white border-2"></div>
            </div>
        </div>
    );
}
