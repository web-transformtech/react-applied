import { useEffect } from 'react';
import Thank from '../assets/images/thank.png';
// import Broch from '../../public/Digital Marketing.pdf';
function ThankYou() {
    useEffect(() => {
        setTimeout(() => {
            localStorage.clear();
            window.location = '/react-applied';
        }, 15000);
    }, []);
    return (
        <div>
            <div>
                <div className="flex justify-center items-center bg-backgroundcolor lg:h-[100vh] lge:h-[100vh] md:h-[100vh] sm:h-[100%] pb-6">
                    <div>
                        <div className="flex justify-center">
                            <img src={Thank} alt="Thank you" draggable="false" className="w-48" />
                        </div>
                        <p className="lg:text-[46px] text-primary lge:text-[46px] md:text-3xl mdsm:text-3xl sm:text-xl text-center font-PoppinsSemiBold">
                            Thank you for showing your interest!
                        </p>
                        <p className="font-PoppinsRegular lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h5 sm:text-base lg:text-left lge:text-left md:text-left mdsm:text-center sm:text-center pb-2">
                            “Commence your career with our advanced programs.”
                        </p>
                        <div className="text-center">
                            <p className="pb-2 font-PoppinsMedium">
                                <span className="text-primary font-PoppinsBold">Note : </span>If Brouchure not download Automtically. Click here to
                                download Brouchure
                            </p>

                            <a
                                href='/Digital Marketing.pdf'
                                download="MBA in Applied Finance.pdf"
                                className="bg-gradient-to-t from-[#D03B0B] to-primary hover:from-primary hover:to-[#D03B0B] border border-bordercolor  text-white font-PoppinsMedium rounded-lg px-10 focus:outline-0 focus:ring-0 py-2"
                            >
                                Download Brouchure
                            </a>
                        </div>
                        <div className="grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 pt-5 sm:gap-y-10 sm:mx-14 gap-x-20">
                            <div className="bg-white py-5 figmsShadow">
                                <p className="font-PoppinsSemiBold flex justify-center lg:text-h1 lge:text-h1 md:text-h3 mdsm:text-h3 sm:text-h4 pb-3">
                                    Connect With Us
                                </p>
                                <div className="flex justify-center gap-3">
                                    {/* Facebook start */}
                                    <div>
                                        <a href="https://www.facebook.com/rvssulur.mba/" target="_blank" rel="noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                                <linearGradient
                                                    id="Ld6sqrtcxMyckEl6xeDdMa"
                                                    x1="9.993"
                                                    x2="40.615"
                                                    y1="9.993"
                                                    y2="40.615"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop offset="0" stopColor="#2aa4f4" />
                                                    <stop offset="1" stopColor="#007ad9" />
                                                </linearGradient>
                                                <path
                                                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                                                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    {/* Facebook End */}
                                    {/* Instagram Start */}
                                    <div>
                                        <a href="https://www.instagram.com/rvssulur.mba/" target="_blank" rel="noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                                <radialGradient
                                                    id="yOrnnhliCrdS2gy~4tD8ma"
                                                    cx="19.38"
                                                    cy="42.035"
                                                    r="44.899"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop offset="0" stopColor="#fd5" />
                                                    <stop offset=".328" stopColor="#ff543f" />
                                                    <stop offset=".348" stopColor="#fc5245" />
                                                    <stop offset=".504" stopColor="#e64771" />
                                                    <stop offset=".643" stopColor="#d53e91" />
                                                    <stop offset=".761" stopColor="#cc39a4" />
                                                    <stop offset=".841" stopColor="#c837ab" />
                                                </radialGradient>
                                                <path
                                                    fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                                                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                                />
                                                <radialGradient
                                                    id="yOrnnhliCrdS2gy~4tD8mb"
                                                    cx="11.786"
                                                    cy="5.54"
                                                    r="29.813"
                                                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop offset="0" stopColor="#4168c9" />
                                                    <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
                                                </radialGradient>
                                                <path
                                                    fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                                                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                                                />
                                                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                                                <path
                                                    fill="#fff"
                                                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    {/* Insatgram end */}
                                    {/* youtube start */}
                                    <div>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                                <linearGradient
                                                    id="PgB_UHa29h0TpFV_moJI9a"
                                                    x1="9.816"
                                                    x2="41.246"
                                                    y1="9.871"
                                                    y2="41.301"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop offset="0" stopColor="#f44f5a" />
                                                    <stop offset=".443" stopColor="#ee3d4a" />
                                                    <stop offset="1" stopColor="#e52030" />
                                                </linearGradient>
                                                <path
                                                    fill="url(#PgB_UHa29h0TpFV_moJI9a)"
                                                    d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"
                                                />
                                                <path
                                                    d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z"
                                                    opacity=".05"
                                                />
                                                <path
                                                    d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z"
                                                    opacity=".07"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    {/* youtube end */}
                                </div>
                            </div>
                            <div className="bg-white py-5 figmsShadow">
                                <p className="font-PoppinsSemiBold flex justify-center lg:text-h1 lge:text-h1 md:text-h3 mdsm:text-h3 sm:text-h4 pb-3">
                                    Visit Our Website
                                </p>
                                <div className="flex justify-center">
                                    <a
                                        href="https://mba.rvscas.ac.in/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border bg-primary text-white text-base py-2 px-6 hover:bg-white hover:text-primary hover:font-semibold transition duration-200"
                                    >
                                        Visit our website
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ThankYou;
