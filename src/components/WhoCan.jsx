import Svg from '../assets/images/Who/whocan.webp';
import { FcBusinessman, FcReadingEbook, FcCollaboration, FcVoicePresentation, FcGraduationCap } from 'react-icons/fc';
// import { FcDebt, FcPositiveDynamic, FcPortraitMode } from "react-icons/fc";
export default function WhoCan() {
    const who = [
        {
            id: 0,
            icon: <FcGraduationCap className="w-[60px] h-[60px]" />,
            title: 'Graduates',
            para: 'Graduates seeking a career in finance with Fintech knowledge.',
        },
        {
            id: 1,
            icon: <FcReadingEbook className="w-[60px] h-[60px]" />,
            title: 'Individuals',
            para: 'Individuals are considering a career transition into finance from other fields.',
        },
        {
            id: 2,
            icon: <FcBusinessman className="w-[60px] h-[60px]" />,
            title: 'Professionals',
            para: 'Professionals looking to upgrade their finance skills and knowledge.',
        },
        {
            id: 3,
            icon: <FcVoicePresentation className="w-[60px] h-[60px]" />,
            title: 'Students',
            para: 'Students want to strengthen their skills in finance.',
        },
    ];
    return (
        <div>
            <div className="py-20 lg:px-10 lge:px-10 md:px-5 mdsm:px-5 sm:px-5">
                <div className="container mx-auto">
                    <p className="lg:text-[48px] lge:text-[48px] md:text-[40px] mdsm:text-[40px] sm:text-[28px] text-primary font-JosefinSemibold leading-none pb-5">
                        Ready to Launch Your Career in Finance?
                    </p>
                    <div className="border-b-[0.4rem] border-primary mb-3"></div>
                    <p className="text-secondary lg:text-xl lge:text-xl md:text-h1 mdsm:text-h1 sm:text-h2 sm:text-center">
                        This program is ideal for:
                    </p>
                    <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
                        <div className="col-span-1 flex justify-center lg:flex lge:flex md:hidden mdsm:hidden sm:hidden">
                            <div className="flex">
                                <img src={Svg} width="358" height="577" draggable="false" className="object-cover" alt="Who can join" />
                            </div>
                            {/* connecter line start */}
                            <div className="flex-none pt-28">
                                <svg width="140" height="114" viewBox="0 0 140 114" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-5">
                                    <g id="Connector line">
                                        <path
                                            id="Shape"
                                            d="M2 110.5C1.17157 110.5 0.5 111.172 0.5 112C0.5 112.828 1.17157 113.5 2 113.5V110.5ZM139.061 13.0607C139.646 12.4749 139.646 11.5251 139.061 10.9393L129.515 1.3934C128.929 0.807612 127.979 0.807612 127.393 1.3934C126.808 1.97918 126.808 2.92893 127.393 3.51472L135.879 12L127.393 20.4853C126.808 21.0711 126.808 22.0208 127.393 22.6066C127.979 23.1924 128.929 23.1924 129.515 22.6066L139.061 13.0607ZM2 113.5H46V110.5H2V113.5ZM71.5 88V36H68.5V88H71.5ZM94 13.5H138V10.5H94V13.5ZM71.5 36C71.5 23.5736 81.5736 13.5 94 13.5V10.5C79.9167 10.5 68.5 21.9167 68.5 36H71.5ZM46 113.5C60.0833 113.5 71.5 102.083 71.5 88H68.5C68.5 100.426 58.4264 110.5 46 110.5V113.5Z"
                                            fill="#7C0201"
                                        />
                                    </g>
                                </svg>
                                <svg width="143" height="114" viewBox="0 0 143 114" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-1">
                                    <g id="Connector line">
                                        <path
                                            id="Shape"
                                            d="M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5V0.5ZM142.061 103.061C142.646 102.475 142.646 101.525 142.061 100.939L132.515 91.3934C131.929 90.8076 130.979 90.8076 130.393 91.3934C129.808 91.9792 129.808 92.9289 130.393 93.5147L138.879 102L130.393 110.485C129.808 111.071 129.808 112.021 130.393 112.607C130.979 113.192 131.929 113.192 132.515 112.607L142.061 103.061ZM2 3.5H43.5V0.5H2V3.5ZM66 26V78H69V26H66ZM91.5 103.5H141V100.5H91.5V103.5ZM66 78C66 92.0833 77.4167 103.5 91.5 103.5V100.5C79.0736 100.5 69 90.4264 69 78H66ZM43.5 3.5C55.9264 3.5 66 13.5736 66 26H69C69 11.9167 57.5833 0.5 43.5 0.5V3.5Z"
                                            fill="#7C0201"
                                        />
                                    </g>
                                </svg>
                            </div>
                            {/* connecter line end */}
                        </div>
                        {/* who can course start*/}
                        <div className="col-span-2">
                            <div className="grid lg:grid-cols-2 lge:grid-cols-2 gap-y-32  pb-16 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1">
                                {who.map((w) => (
                                    <div key={w.id} className="">
                                        <div className="flex justify-center pb-2">{w.icon}</div>
                                        <p className="text-center font-JosefinSemibold lg:text-h2 lge:text-h2 md:text-h3 mdsm:text-h3 sm:text-h5 text-primary">
                                            {w.title}
                                        </p>
                                        <div className="h-full -mb-28 mx-5 bg-backgroundcolor rounded-lg flex items-center">
                                            <div className="mx-5 py-3">
                                                <p className="text-whotext font-PoppinsRegular font-medium lg:text-h6 lge:text-h6 md:text-h6 mdsm:text-h6 sm:text-base text-center">
                                                    {w.para}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* who can course end*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
