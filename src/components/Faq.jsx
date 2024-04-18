import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import $ from 'jquery';
function Faq() {
    const [forceRender, setForceRender] = useState(false);
    const faqContents = [
        {
            id: 0,
            title: 'What is the admission procedure?',
            para: 'Fill out the details in the admission form, and we will contact you shortly to guide you through the admission process.',
            status: false,
        },
        {
            id: 1,
            title: 'What other specializations can I choose for dual specialization if I am studying Applied Finance?',
            para: 'You can opt for dual specializations in Digital Marketing (or) Human Resources if you study Applied Finance.',
            status: false,
        },
        {
            id: 2,
            title: 'Are hostel facilities available for students?',
            para: ' AC and non-AC hostels are available on campus to provide comfortable accommodations for students.',
            status: false,
        },
        {
            id: 3,
            title: ' Are college bus facilities available for students?',
            para: 'Bus transportation is available to nearby cities for students at an affordable cost.',
            status: false,
        },
        {
            id: 4,
            title: 'How is placement assistance provided?',
            para: 'We will equip you with aptitude skills and corporate training for campus placement drives during the course period.',
            status: false,
        },
    ];
    const [faq, setFaq] = useState(faqContents);
    const handleClick = (v, i) => {
        faq.forEach((el) => {
            if (el.id === v?.id) {
                el.status = !el.status;
                $(`#faqSlide${i}`).toggle('slow');
            } else {
                el.status = false;
            }
        });
        setForceRender(!forceRender);
        setFaq(faq);
    };
    return (
        <div>
            <div className="container mx-auto pt-3">
                <div className="w-[100%] flex py-16 md:pt-0 sm:px-4 sm:pt-0 pt-16 px-10 mdsm:px-0">
                    <div className="w-[100%] pb-8 px-8 sm:px-0">
                        <h2 className="text-center text-[32px] sm:mx-0 sm:text-[20px] font-semibold pb-4 text-[#770101]">FAQ</h2>
                        <div className="w-[100%] flex flex-wrap pb-6">
                            {faq.map((v, i) => (
                                <div key={v.id} className="lg:w-[100%] sm:w-[100%] md:w-[100%] mdsm:w-[100%]">
                                    <div className=" flex">
                                        <div className=" w-[95%]">
                                            <h3
                                                onClick={() => handleClick(v, i)}
                                                className="text-[#222] cursor-pointer text-left lge:w-[90%] pt-4 sm:text-[16px] font-semibold text-[20px]"
                                            >
                                                {v.title}
                                            </h3>
                                        </div>
                                        <div className=" w-[5%]">
                                            {v?.status ? (
                                                <HiChevronUp
                                                    onClick={() => handleClick(v, i)}
                                                    className={` mt-2 duration-100 mdsm:mt-4 cursor-pointer sm:mt-4 text-[24px]`}
                                                />
                                            ) : (
                                                <HiChevronDown
                                                    onClick={() => handleClick(v, i)}
                                                    className={` mt-2 duration-100 mdsm:mt-4 cursor-pointer sm:mt-4 text-[24px]`}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div></div>
                                    <p
                                        id={`faqSlide${i}`}
                                        className=" hidden text-text-color text-left lge:w-[90%] pt-2 sm:pt-0 leading-[26px] sm:text-sm pr-10"
                                    >
                                        {v?.para}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Faq;
