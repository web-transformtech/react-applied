import { useEffect, useRef, useState } from 'react';
// import "animate.css";
import Graduated from '../assets/images/graduated-student.webp';
import Brouchure from '../assets/images/brouchureLogo.webp';
// import Brouch from '../../public/Digital Marketing.pdf';
import { HiMiniUser } from 'react-icons/hi2';
import { FaMobileScreen } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
// import Marketing from "../../public/Digital Marketing.pdf";
// import Marketing from "../assets/Digital Marketing.pdf";
import UserAlreadyExists from '../assets/images/gif/User research.gif';
import axios from 'axios';

export default function Brochure(props) {
    const [open, setOpen] = useState(false);
    // const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [errors, setErrors] = useState({});
    const [userExists, setUserExists] = useState(false);
    const [isSaveClick, setIsSaveClick] = useState(false);
    const [values, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        course: 'MBA in Applied Finance',
        parameter: '',
    });
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    const reference = useRef();
    open || userExists ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (!reference?.current?.contains(event?.target)) {
                setOpen(false);
                setUserExists(false);
            }
        });
    });
    // useEffect(() => {
    //   if (Object.keys(errors).length === 0 && dataIsCorrect) {
    //     Brochure(true);
    //   }
    // }, [errors]);
    const [urlAds, seturlAds] = useState('Lead');
    useEffect(() => {
        const utm = new URL(document.location).searchParams;
        const getutm = utm.get('utm_source');
        if (getutm === null || getutm === undefined) {
            seturlAds('Lead');
        } else {
            seturlAds(getutm);
        }
    }, []);
    const handelChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => {
            return { ...prev, [name]: value };
        });
        // console.log(isSaveClick);
        if (isSaveClick === true) {
            setErrors(validation(values));
        }
    };
    const validation = () => {
        var error = {};
        let regex = /^[A-Za-z\s]+$/;
        let Number = /^[0-9]/;
        let email = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/;
        if (values.name === '') {
            error.name = 'Enter the Name';
        } else if (!regex.test(values.name)) {
            error.name = 'Name must be alphabets only';
        }
        if (values.email === '') {
            error.email = 'Enter the Email';
        } else if (!email.test(values.email)) {
            error.email = 'Invalid email type';
        }
        if (values.phone === '') {
            error.phone = 'Enter the phone';
        } else if (!Number.test(values.phone)) {
            error.phone = 'must be number ';
        } else if (values.phone.length !== 10) {
            error.phone = 'must be number 10 number';
        }
        return error;
    };

    const handleSubmit = () => {
        let temp_state = isSaveClick;
        temp_state = true;
        setIsSaveClick(temp_state);
        var errorVal;
        errorVal = validation(values);
        setErrors(errorVal);
        if (Object.keys(errorVal).length === 0) {
            var data = {};
            const params = new URLSearchParams({
                name: values.name,
                email: values.email,
                phone: values.phone,
                course: values.course,
                parameter: urlAds,
            }).toString();
            var btm = document.getElementById('submit');
            btm.disabled = true;
            const url = 'https://rvscas.com/api/createadmission?' + params;
            // const url = "http://172.16.22.6:7000/api/createadmission?" + params;
            // console.log(values.parameter)
            axios
                .post(url, data)
                .then((res) => {
                    if (res.status === 200) {
                        // const brochureLink = 'https://testlanding.rvscas.ac.in/Digital%20Marketing.pdf';
                        const brochureLink = '/Digital Marketing.pdf';
                        const downloadLink = document.createElement('a');
                        downloadLink.href = brochureLink;
                        downloadLink.download = 'MBA in Applied Finance.pdf';
                        // Appending the link to the document
                        document.body.appendChild(downloadLink);
                        // Triggering a click event on the link
                        downloadLink.click();
                        // Removing the link from the document
                        document.body.removeChild(downloadLink);
                        localStorage.setItem('Mbadm', 'mmmbbbaaadddmmmm');
                        window.location = 'thankyou';
                        setValue({
                            name: '',
                            email: '',
                            phone: '',
                        });
                    } else {
                        alert('Error in Submitting Please try again later');
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setValue({
                        name: '',
                        email: '',
                        phone: '',
                    });
                    setOpen(false);
                    if (error.response.status === 409) {
                        setUserExists(true);
                        setTimeout(() => {
                            setUserExists(false);
                        }, 8000);
                    } else {
                        alert('Form Not submitted');
                    }
                    btm.disabled = false;
                });
        }
    };
    return (
        <div className="">
            {/* <div className="sm:flex sm:justify-center sm:items-center"> */}
            <button
                className={`${
                    props.bg_yellow
                        ? 'border-backgroundbox hover:bg-primary hover:border-white hover:text-white text-primary bg-backgroundbox'
                        : 'bg-gradient-to-t from-[#D03B0B] to-[#7C0201] hover:bg-gradient-to-t hover:from-primary hover:to-[#D03B0B] text-white'
                } text-h5  py-3 px-14 font-JosefinBold`}
                onClick={() => setOpen(true)}
            >
                {props.brochureBtn}
            </button>
            {/* </div> */}

            {open ? (
                <>
                    <div>
                        <div className="bg-modal backdrop-blur-sm  flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className={`${open ? 'animate__animated animate__bounceInDown' : ''} lg:w-[45%] lge:w-[45%]`}>
                                <div className="grid grid-cols-6 sm:grid-cols-1  container mx-auto" ref={reference}>
                                    <div className="col-span-2 py-7 bg-primary sm:hidden ">
                                        <p className="font-JosefinBold px-5 text-h3 leading-7 text-white pb-5">
                                            Admissions
                                            <br /> opens for the
                                            <br /> Year 2024-25
                                        </p>
                                        <div className="flex justify-center p-5">
                                            <img src={Graduated} draggable="false" loading="lazy" alt="Graduated Student" className="" />
                                        </div>
                                    </div>
                                    <div className="col-span-4 bg-white  relative">
                                        <header className="pb-4">
                                            <span
                                                className="text-white text-h5 cursor-pointer font-extrabold absolute right-0 top-0 bg-primary px-3 py-2 rounded-bl-[20px]"
                                                onClick={() => setOpen(false)}
                                            >
                                                X
                                            </span>
                                            <p className="text-primary text-center pt-8 font-JosefinBold text-h4 pb-3">Get Your Brochure</p>

                                            <div className="flex justify-center">
                                                <img src={Brouchure} alt="Brouchure" draggable="false" loading="lazy" className="Brouchure" />
                                            </div>
                                        </header>

                                        <main>
                                            <div className="pb-5">
                                                <div className="flex justify-center relative pb-1">
                                                    <HiMiniUser className="text-h3 text-secondary absolute left-[72px] mt-2" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        value={values.name}
                                                        // onChange={(e) => {
                                                        //   setName(e.target.value);
                                                        //   values.name = e.target.value;
                                                        //   if (isSaveClick === true) {
                                                        //     setErrors(validation(values));
                                                        //   }
                                                        // }}
                                                        onChange={(e) => {
                                                            handelChange(e);
                                                        }}
                                                        autoComplete="off"
                                                        placeholder="Name"
                                                        className="border border-bordercolor rounded-lg px-10 w-[100%] focus:outline-0 focus:ring-0 mx-16 py-2"
                                                    />
                                                </div>
                                                <div className="pl-20 ">
                                                    {errors.name && <span className="text-red text-sm sm:text-[10px]">{errors.name}</span>}
                                                </div>
                                            </div>

                                            <div className="pb-5">
                                                <div className="flex justify-center relative pb-1">
                                                    <HiMail className="text-h3 text-secondary absolute left-[72px] mt-2" />
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        value={values.email}
                                                        // onChange={(e) => {
                                                        //   setEmail(e.target.value);
                                                        //   values.email = e.target.value;
                                                        //   if (isSaveClick === true) {
                                                        //     setErrors(validation(values));
                                                        //   }
                                                        // }}
                                                        onChange={(e) => {
                                                            handelChange(e);
                                                        }}
                                                        autoComplete="off"
                                                        placeholder="Email"
                                                        className="border border-bordercolor rounded-lg px-10 w-[100%] focus:outline-0 focus:ring-0 mx-16 py-2"
                                                    />
                                                </div>
                                                <div className="pl-20 ">
                                                    {errors.email && <span className="text-red text-sm sm:text-[10px]">{errors.email}</span>}
                                                </div>
                                            </div>

                                            <div className="pb-5">
                                                <div className="flex justify-center relative pb-1">
                                                    <FaMobileScreen className="text-h5 text-secondary absolute left-[72px] mt-2.5" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        id="phone"
                                                        placeholder="Mobile"
                                                        className="border border-bordercolor rounded-lg px-10 w-[100%] focus:outline-0 focus:ring-0 mx-16 py-2"
                                                        value={values.phone}
                                                        autoComplete="off"
                                                        // onChange={(e) => {
                                                        //   setPhone(e.target.value);
                                                        //   values.phone = e.target.value;
                                                        //   console.log();
                                                        //   if (isSaveClick === true) {
                                                        //     setErrors(validation(values));
                                                        //   }
                                                        // }}
                                                        onChange={(e) => {
                                                            handelChange(e);
                                                        }}
                                                        onKeyPress={(e) => {
                                                            if (!/^[0-9]/.test(e.key)) {
                                                                e.preventDefault();
                                                            }
                                                        }}
                                                        maxLength={10}
                                                        minLength={10}
                                                    />
                                                </div>
                                                <div className="pl-20 ">
                                                    {errors.phone && <span className="text-red text-sm sm:text-[10px]">{errors.phone}</span>}
                                                </div>
                                            </div>

                                            <div className="flex justify-center relative pb-10">
                                                <button
                                                    disabled={values.name !== '' && values.email !== '' && values.phone !== '' ? false : true}
                                                    className={`${
                                                        values.name !== '' && values.email !== '' && values.phone !== ''
                                                            ? 'bg-gradient-to-t from-[#D03B0B] to-primary hover:from-primary hover:to-[#D03B0B]'
                                                            : 'bg-gradient-to-t from-[#D03B0B] to-primary opacity-50 cursor-not-allowed'
                                                    } border border-bordercolor  text-white font-PoppinsMedium rounded-lg px-10 w-[100%] focus:outline-0 focus:ring-0 mx-16 py-2`}
                                                    type="submit"
                                                    id="submit"
                                                    onClick={(e) => handleSubmit(e)}
                                                >
                                                    Download
                                                </button>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {userExists === true ? (
                <div className="justify-center bg-modal backdrop-blur-sm items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none sm:w-[100%] sm:px-3 ">
                    <div className="scale-up-center" ref={reference}>
                        <div className="relative">
                            <img src={UserAlreadyExists} draggable="false" loading="lazy" alt="fail" className="w-[450px] rounded-lg" />
                            <p className="text-white bg-primary font-JosefinMedium absolute lg:bottom-7 lge:bottom-7 sm:bottom-3 md:bottom-5 mdsm:bottom-5 mdLtext-h5 mdsm:text-h5 lg:text-h5 lge:text-h5 border w-[100%] text-center">
                                You Aleadry Enrolled this Course
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
