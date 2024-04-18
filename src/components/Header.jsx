import { useEffect, useState } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { FaMobileScreen } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
// import Brouch from '../../public/Digital Marketing.pdf';
import Logo from "../assets/images/logo.webp";
import UserAlreadyExists from "../assets/images/gif/User research.gif";
import Success from "../assets/images/success.webp";
import axios from "axios";
import Brochure from "./Brochure";
export default function Header() {
  const [values, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    course: "MBA in Applied Finance",
    parameter: "",
  });
  const [errors, setErrors] = useState({});
  const [isSaveClick, setIsSaveClick] = useState(false);
  // const [dataIsCorrect] = useState(false);
  const [alreadyexist, setAlreadyexist] = useState(false);
  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && dataIsCorrect) {
  //     Header(true);
  //   }
  // }, [errors]);
  const [urlAds, seturlAds] = useState("Lead");
  useEffect(() => {
    const utm = new URL(document.location).searchParams;
    const getutm = utm.get("utm_source");
    if (getutm === null || getutm === undefined) {
      seturlAds("Lead");
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
    if (values.name === "") {
      error.name = "Enter the Name";
    } else if (!regex.test(values.name)) {
      error.name = "Name must be alphabets only";
    }
    if (values.email === "") {
      error.email = "Enter the Email";
    } else if (!email.test(values.email)) {
      error.email = "Invalid email type";
    }
    if (values.phone === "") {
      error.phone = "Enter the phone";
    } else if (!Number.test(values.phone)) {
      error.phone = "must be number ";
    } else if (values.phone.length !== 10) {
      error.phone = "must be number 10 number";
      // values.phone = "";
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
      var btm = document.getElementById("submit");
      btm.disabled = true;
      // const url = 'http://172.16.22.6:7000/api/createadmission?' + params;
      // const url = "http://192.168.0.101:7000/api/createadmission?" + params;
      const url = "https://rvscas.com/api/createadmission?" + params;
      axios
        .post(url, data)
        .then((res) => {
          // handleDownloadClick();
          if (res.status === 200) {
            setValue({
              name: "",
              email: "",
              phone: "",
            });
            const brochureLink = "/Digital Marketing.pdf";
            const downloadLink = document.createElement("a");
            downloadLink.href = brochureLink;
            downloadLink.download = "MBA in Applied Finance.pdf";
            // Appending the link to the document
            document.body.appendChild(downloadLink);
            // Triggering a click event on the link
            downloadLink.click();
            // Removing the link from the document
            document.body.removeChild(downloadLink);
            localStorage.setItem("Mbadm", "mmmbbbaaadddmmmm");
            window.location = "/thankyou";
          } else {
            alert("Error in Submitting Please try again later");
          }
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setAlreadyexist(true);
            setTimeout(() => {
              setAlreadyexist(false);
            }, 3000);
          } else {
            console.log("form not submitted");
          }
          btm.disabled = false;
        });
    }
  };

  return (
    <div>
      {alreadyexist ? (
        <div>
          <div className="bg-modal backdrop-blur-sm  flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative animate__animated animate__fadeInDown">
              <img src={UserAlreadyExists} className="w-[450px] rounded-lg" />
              <p className="text-white bg-primary font-JosefinMedium absolute lg:bottom-7 lge:bottom-7 sm:bottom-3 md:bottom-5 mdsm:bottom-5 mdLtext-h5 mdsm:text-h5 lg:text-h5 lge:text-h5 border w-[100%] text-center">
                You Aleadry Enrolled this Course
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <div className="background-image">
        <div className="lg:flex lge:flex md:flex mdsm:flex justify-center pt-5 pb-14">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={Logo}
              width="115"
              height="115"
              draggable="false"
              className="lg:block lge:block md:block mdsm:block sm:hidden object-cover"
              alt="logo"
            />
            {/* <img src={Moblogo} draggable="false" className="lg:hidden lge:hidden md:hidden mdsm:hidden sm:block" alt="logo" /> */}
            <div className="lge:block md:block mdsm:block sm:hidden">
              <p className="uppercase font-ClearlyRomanHeavyKursiv lg:block lge:block md:block mdsm:block sm:hidden text-white lg:text-[40px] lge:text-[40px] md:text-[44px] mdsm:text-[40px] leading-tight">
                RVS{" "}
                <span className="lg:text-[28px] lge:text-[28px] md:text-[24px] mdsm:text-[22px]">
                  College of Arts and Science
                </span>
              </p>
              {/* <p className="text-white text-6xl lg:hidden lge:hidden md:hidden mdsm:hidden sm:block font-ClearlyRomanHeavyKursiv">
                RVS CAS
              </p> */}
              <p className="text-white lg:text-base lge:text-base md:text-tiny mdsm:text-tiny sm:text-[10px] font-PoppinsLight">
                {/* Autonomous & Affiliated to Bharathiar University | Re-accredited
                with 'A+' Grade by NAAC(4<sup>th</sup> Cycle)
                <br /> Recognized under Star College Scheme of DBT-MST, GOI, New
                Delhi */}
                Autonomous and Affiliated to Bharathiar University, Approved by
                AICTE <br />
                Re-Accredited with &#39;A+&#39; Grade by NAAC
              </p>
            </div>
          </div>
          <div className="items-center justify-center lg:hidden lge:hidden sm:flex md:hidden mdsm:hidden">
            {/* logo Mobile view start */}
            <img
              src={Logo}
              alt="logo"
              width="100"
              height="100"
              draggable="false"
              className="object-cover"
            />
            {/* logo Mobile view end */}
            <div className="">
              <p className="sm:text-2xl text-white uppercase font-ClearlyRomanHeavyKursiv">
                Rvs cas
              </p>
              {/* <p className="text-white lg:text-base lge:text-base md:text-tiny mdsm:text-tiny sm:text-[10px] font-PoppinsLight">
                Autonomous & Affiliated to Bharathiar Unversity | Reaccredited
                with “A+” Grade by NAAC(4th Cycle)
                <br /> Recognized under Star College Scheme of DBT-MST, GOI, New
                Delhi
              </p> */}
              <p className="text-white text-sm font-PoppinsRegular">
                Education for Digital Era
              </p>
            </div>
          </div>
          {/* <img
            src={MobRVS}
            draggable="false"
            className="lg:hidden lge:hidden sm:blcok md:hidden mdsm:hidden"
            alt="logo"
          /> */}
        </div>
        <div className="grid lg:grid-cols-7 lge:grid-cols-7 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 pb-40 container mx-auto">
          <div className="col-span-4">
            <div className="pb-5">
              <p className="lg:text-4xl lge:text-4xl md:text-2xl mdsm:text-2xl sm:text-h5 font-JosefinSemibold text-white ml-16">
                Admission Open for
              </p>
              <div className="bg-primary lg:w-[500px] lge:w-[500px] md:w-[450px] mdsm:w-[450px] sm:w-[300px] mx-5">
                <p className="lg:text-4xl lge:text-4xl md:text-2xl mdsm:text-2xl sm:text-h5 font-JosefinSemibold ml-11 text-white ">
                  Academic Year 2024-2025
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="text-white font-JosefinBold lg:text-[48px] lge:text-[48px] md:text-[30px] mdsm:text-[38px] sm:text-[28px] mx-5">
                MBA in Applied Finance
              </h1>
              {/* Desktop View start */}
              <p className="lg:block lge:block md:block mdsm:block sm:hidden lg:text-h6 lge:text-h6 md:text-h6 mdsm:text-h6 sm:text-base font-PoppinsLight text-white mx-5 pb-8">
                Accelerate your finance career with our cutting-edge MBA in
                Applied Finance program. Developed in collaboration with
                Finshiksha, a leading financial education company, this
                comprehensive curriculum integrates advanced financial tools and
                technical expertise, preparing you for impactful roles in the
                dynamic finance sector.
              </p>
              {/* Desktop View End */}
              {/* Mobile View start */}
              <p className="lg:hidden lge:hidden sm:block md:hidden mdsm:hidden lg:text-h5 lge:text-h5 md:text-h6 mdsm:text-h6 sm:text-base font-PoppinsLight text-white pl-6 px-9 pb-8">
                Enhance your finance career with an MBA in Applied Finance and
                learn the current trends in Fintech.
              </p>
              {/* Mobile View End */}
              <div className="">
                <img
                  src={Success}
                  width="440"
                  height="143"
                  alt="Your Gateway to Success"
                  className="mx-16 sm:hidden md:hidden mdsm:hidden lg:block lge:block object-cover"
                  draggable="false"
                />
                {/* <link rel="preload" as="image" href="" type="jpg/webp" /> */}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 lge:col-span-1" id="form">
            <div className="lg:block lge:block md:block mdsm:block sm:hidden">
              <div className="bg-white lg:p-16 lge:p-16 md:p-16 mdsm:p-16 sm:p-10 lg:mx-7 lge:mx-7 md:mx-24 mdsm:mx-24 sm:mx-6">
                <div className="pb-6">
                  <h2 className="font-JosefinBold h-9 text-primary lg:w-[250px] lge:w-[250px] md:w-[250px] mdsm:w-[250px] sm:w-[216px] lg:text-h2 lge:text-h2 md:text-h2 mdsm:text-h2 sm:text-h4 bg-backgroundbox">
                    Get Your Brochure
                  </h2>
                </div>
                <div className="pb-6">
                  <div className="flex justify-center relative pb-1">
                    <HiMiniUser className="text-h3 text-secondary absolute left-[14px] mt-3" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={(e) => {
                        handelChange(e);
                      }}
                      className={`${
                        errors.name ? "border-red" : "border-bordercolor"
                      } border focus:outline-0 focus:ring-0 py-2.5 px-12 w-[100%] placeholder:font-PoppinsRegular text-base`}
                    />
                  </div>
                  <div>
                    {errors.name && (
                      <span className="text-red text-base sm:text-[10px]">
                        {errors.name}
                      </span>
                    )}
                  </div>
                </div>
                <div className="pb-6">
                  <div className="flex justify-center relative pb-1">
                    <HiMail className="text-h3 text-secondary absolute left-[14px] mt-3" />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={(e) => {
                        handelChange(e);
                      }}
                      placeholder="Email"
                      className={`${
                        errors.email ? "border-red" : "border-bordercolor"
                      } border focus:outline-0 focus:ring-0 py-2.5 px-12 w-[100%] placeholder:font-PoppinsRegular text-base`}
                    />
                  </div>
                  <div className="">
                    {errors.email && (
                      <span className="text-red text-base sm:text-[10px]">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className="pb-6">
                  <div className="flex justify-center relative pb-1">
                    <FaMobileScreen className="text-h5 text-secondary absolute left-[14px] mt-3" />
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={(e) => {
                        handelChange(e);
                      }}
                      placeholder="Mobile"
                      className={`${
                        errors.phone ? "border-red" : "border-bordercolor"
                      } border  focus:outline-0 focus:ring-0 py-2.5 px-12 w-[100%] placeholder:font-PoppinsRegular text-base`}
                      onKeyPress={(e) => {
                        if (!/^[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      maxLength={10}
                      minLength={10}
                    />
                  </div>
                  <div className="">
                    {errors.phone && (
                      <span className="text-red text-base sm:text-[10px]">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className="">
                  <button
                    id="submit"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    disabled={
                      values.name !== "" &&
                      values.email !== "" &&
                      values.phone !== ""
                        ? false
                        : true
                    }
                    className={`${
                      values.name !== "" &&
                      values.email !== "" &&
                      values.phone !== ""
                        ? "bg-gradient-to-t from-[#D03B0B] to-primary hover:from-primary hover:to-[#D03B0B]"
                        : "bg-gradient-to-t from-[#D03B0B] to-primary opacity-50 cursor-not-allowed"
                    }  text-white border py-2 px-5 w-[100%] font-JosefinBold text-h6`}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:hidden lge:hidden md:hidden mdsm:hidden sm:block">
              <div className="text-center">
                <Brochure brochureBtn="Get Your Brochure" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="w-full -mt-28">
        <div className="grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-2 container sm:px-6 pb-10 lg:px-8 md:px-16 mdsm:px-16 gap-x-10 gap-y-10 lg:gap-x-8 mx-auto">
          <div className=" bg-white rounded-lg pt-7 lg:px-7 lge:px-8 md:px-14 mdsm:px-14 sm:px-4 pb-4 figmsShadow">
            {/* <img
              src={Calender}
              draggable="false"
              alt="Calender"
              className="pb-3 lg:w-[80px] md:w-[80px] mdsm:w-[80px] sm:w-[50px]"
            /> */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="pb-3 lg:w-[80px] md:w-[80px] mdsm:w-[80px] sm:w-[50px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 354">
                <circle
                  id="Ellipse 54"
                  cx="40"
                  cy="40"
                  r="39.5"
                  stroke="#7C0201"
                />
                <g id="react-icons/hi/HiOutlineCalendar">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.334 23.3333C34.2545 23.3333 35.0007 24.0795 35.0007 25V26.6666H45.0007V25C45.0007 24.0795 45.7468 23.3333 46.6673 23.3333C47.5878 23.3333 48.334 24.0795 48.334 25V26.6666H51.6673C52.9934 26.6666 54.2652 27.1934 55.2029 28.1311C56.1405 29.0688 56.6673 30.3406 56.6673 31.6666V51.6666C56.6673 52.9927 56.1405 54.2645 55.2029 55.2022C54.2652 56.1399 52.9934 56.6666 51.6673 56.6666H28.334C27.0079 56.6666 25.7361 56.1399 24.7985 55.2022C23.8608 54.2645 23.334 52.9927 23.334 51.6666V31.6666C23.334 30.3406 23.8608 29.0688 24.7985 28.1311C25.7361 27.1934 27.0079 26.6666 28.334 26.6666H31.6673V25C31.6673 24.0795 32.4135 23.3333 33.334 23.3333ZM31.6673 30H28.334C27.892 30 27.468 30.1756 27.1555 30.4881C26.8429 30.8007 26.6673 31.2246 26.6673 31.6666V51.6666C26.6673 52.1087 26.8429 52.5326 27.1555 52.8452C27.468 53.1577 27.892 53.3333 28.334 53.3333H51.6673C52.1093 53.3333 52.5333 53.1577 52.8458 52.8452C53.1584 52.5326 53.334 52.1087 53.334 51.6666V31.6666C53.334 31.2246 53.1584 30.8007 52.8458 30.4881C52.5333 30.1756 52.1093 30 51.6673 30H48.334V31.6666C48.334 32.5871 47.5878 33.3333 46.6673 33.3333C45.7468 33.3333 45.0007 32.5871 45.0007 31.6666V30H35.0007V31.6666C35.0007 32.5871 34.2545 33.3333 33.334 33.3333C32.4135 33.3333 31.6673 32.5871 31.6673 31.6666V30ZM30.0007 38.3333C30.0007 37.4128 30.7468 36.6666 31.6673 36.6666H48.334C49.2545 36.6666 50.0007 37.4128 50.0007 38.3333C50.0007 39.2538 49.2545 40 48.334 40H31.6673C30.7468 40 30.0007 39.2538 30.0007 38.3333Z"
                    fill="black"
                  />
                </g>
              </g>
            </svg>
            <p className="lg:text-h6 lge:text-h6 md:text-base mdsm:text-base sm:text-sm text-wrap break-words font-PoppinsBold text-primary underline underline-offset-4 decoration-2">
              Course Starts
            </p>
            <p className="text-secondary font-PoppinsMedium lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h5 sm:text-h6">
              July 2024
            </p>
          </div>
          <div className=" bg-white rounded-lg pt-7 lg:px-8 lge:px-8 md:px-14 mdsm:px-14 sm:px-5 pb-4 figmsShadow">
            {/* <img
              src={Clock}
              draggable="false"
              alt="Clock"
              className="pb-3 lg:w-[80px] md:w-[80px] mdsm:w-[80px] sm:w-[50px]"
            /> */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="pb-3 lg:w-[80px] md:w-[80px] mdsm:w-[80px] sm:w-[50px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 355">
                <circle
                  id="Ellipse 55"
                  cx="40"
                  cy="40"
                  r="39.5"
                  stroke="#7C0201"
                />
                <g id="react-icons/hi/HiOutlineClock">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.0007 26.6666C36.4644 26.6666 33.073 28.0714 30.5726 30.5719C28.0721 33.0724 26.6673 36.4638 26.6673 40C26.6673 41.7509 27.0122 43.4848 27.6823 45.1024C28.3523 46.7201 29.3344 48.19 30.5726 49.4281C31.8107 50.6662 33.2805 51.6483 34.8982 52.3184C36.5159 52.9884 38.2497 53.3333 40.0007 53.3333C41.7516 53.3333 43.4854 52.9884 45.1031 52.3184C46.7208 51.6483 48.1906 50.6662 49.4287 49.4281C50.6669 48.19 51.649 46.7201 52.319 45.1024C52.9891 43.4848 53.334 41.7509 53.334 40C53.334 36.4638 51.9292 33.0724 49.4287 30.5719C46.9283 28.0714 43.5369 26.6666 40.0007 26.6666ZM28.2155 28.2149C31.3411 25.0893 35.5804 23.3333 40.0007 23.3333C44.4209 23.3333 48.6602 25.0893 51.7858 28.2149C54.9114 31.3405 56.6673 35.5797 56.6673 40C56.6673 42.1887 56.2362 44.3559 55.3986 46.378C54.5611 48.4001 53.3334 50.2375 51.7858 51.7851C50.2381 53.3327 48.4008 54.5604 46.3787 55.398C44.3566 56.2356 42.1893 56.6666 40.0007 56.6666C37.812 56.6666 35.6447 56.2356 33.6226 55.398C31.6005 54.5604 29.7632 53.3327 28.2155 51.7851C26.6679 50.2375 25.4402 48.4001 24.6027 46.378C23.7651 44.3559 23.334 42.1887 23.334 40C23.334 35.5797 25.0899 31.3405 28.2155 28.2149ZM40.0007 31.6666C40.9211 31.6666 41.6673 32.4128 41.6673 33.3333V39.3096L46.1792 43.8215C46.83 44.4723 46.83 45.5276 46.1792 46.1785C45.5283 46.8294 44.473 46.8294 43.8221 46.1785L38.8221 41.1785C38.5096 40.8659 38.334 40.442 38.334 40V33.3333C38.334 32.4128 39.0802 31.6666 40.0007 31.6666Z"
                    fill="black"
                  />
                </g>
              </g>
            </svg>
            <p className="lg:text-h6 lge:text-h6 md:text-base mdsm:text-base sm:text-sm text-wrap break-words font-PoppinsBold text-primary underline underline-offset-4 decoration-2">
              Duration
            </p>
            <p className="text-secondary text-wrap break-words font-PoppinsMedium lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h5 sm:text-h6">
              2 Years
            </p>
          </div>
          <div className=" bg-white rounded-lg pt-7 lg:px-8 lge:px-8 md:px-14 mdsm:px-14 sm:px-5 pb-4 figmsShadow">
            {/* <img
              src={Person}
              draggable="false"
              alt="Person"
              className="pb-3 lg:w-[80px] md:w-[80px] mdsm:w-[80px] sm:w-[50px]"
            /> */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="pb-3 lg:w-[80px] md:w-[80px] mdsm:w-[80px] sm:w-[50px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 356">
                <circle
                  id="Ellipse 56"
                  cx="40"
                  cy="40"
                  r="39.5"
                  stroke="#7C0201"
                />
                <g id="react-icons/hi/HiOutlineUserRemove">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35.0007 26.6666C33.6746 26.6666 32.4028 27.1934 31.4651 28.1311C30.5274 29.0688 30.0007 30.3406 30.0007 31.6666C30.0007 32.9927 30.5274 34.2645 31.4651 35.2022C32.4028 36.1399 33.6746 36.6666 35.0007 36.6666C36.3267 36.6666 37.5985 36.1399 38.5362 35.2022C39.4739 34.2645 40.0007 32.9927 40.0007 31.6666C40.0007 30.3406 39.4739 29.0688 38.5362 28.1311C37.5985 27.1934 36.3267 26.6666 35.0007 26.6666ZM29.1081 25.7741C30.6709 24.2113 32.7905 23.3333 35.0007 23.3333C37.2108 23.3333 39.3304 24.2113 40.8932 25.7741C42.456 27.3369 43.334 29.4565 43.334 31.6666C43.334 33.8768 42.456 35.9964 40.8932 37.5592C39.3304 39.122 37.2108 40 35.0007 40C32.7905 40 30.6709 39.122 29.1081 37.5592C27.5453 35.9964 26.6673 33.8768 26.6673 31.6666C26.6673 29.4565 27.5453 27.3369 29.1081 25.7741ZM43.334 40C43.334 39.0795 44.0802 38.3333 45.0007 38.3333H55.0007C55.9211 38.3333 56.6673 39.0795 56.6673 40C56.6673 40.9205 55.9211 41.6666 55.0007 41.6666H45.0007C44.0802 41.6666 43.334 40.9205 43.334 40ZM26.7511 45.0837C28.939 42.8958 31.9065 41.6666 35.0007 41.6666C38.0948 41.6666 41.0623 42.8958 43.2502 45.0837C45.4382 47.2717 46.6673 50.2391 46.6673 53.3333V55C46.6673 55.9205 45.9211 56.6666 45.0007 56.6666H25.0007C24.0802 56.6666 23.334 55.9205 23.334 55V53.3333C23.334 50.2391 24.5631 47.2717 26.7511 45.0837ZM35.0007 45C32.7905 45 30.6709 45.878 29.1081 47.4408C27.5453 49.0036 26.6673 51.1232 26.6673 53.3333H43.334C43.334 51.1232 42.456 49.0036 40.8932 47.4408C39.3304 45.878 37.2108 45 35.0007 45Z"
                    fill="black"
                  />
                </g>
              </g>
            </svg>
            <p className="lg:text-h6 lge:text-h6 md:text-base mdsm:text-base sm:text-sm text-wrap break-words font-PoppinsBold text-primary underline underline-offset-4 decoration-2">
              Specialization
            </p>
            {/* <p className="text-secondary font-PoppinsMedium w-[90%] lg:text-h6 lge:text-base md:text-sm mdsm:text-sm sm:text-sm">
              International Trade and Shipping & Freight Forwardings
            </p> */}
            <p className="text-secondary text-wrap break-words font-PoppinsMedium lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h5 sm:text-h6">
              Dual
            </p>
          </div>
          <div className=" bg-white rounded-lg pt-7 lg:px-8 lge:px-8 md:px-14 mdsm:px-14 sm:px-5 pb-4 figmsShadow">
            {/* <img
              src={Location}
              draggable="false"
              alt="Location"
              className="pb-3 lg:w-[80px] md:w-[80px] mdsm:w-[80px] sm:w-[50px]"
            /> */}
            {/* <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="pb-3 lg:w-[80px] md:w-[80px] mdsm:w-[80px] sm:w-[50px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 357">
                <circle
                  id="Ellipse 57"
                  cx="40"
                  cy="40"
                  r="39.5"
                  stroke="#7C0201"
                />
                <g id="react-icons/hi/HiOutlineLocationMarker">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 26.6671C37.6926 26.6671 35.437 27.3514 33.5184 28.6333C31.5999 29.9152 30.1045 31.7373 29.2215 33.869C28.3384 36.0008 28.1074 38.3465 28.5575 40.6096C29.0076 42.8727 30.1186 44.9514 31.75 46.583C31.75 46.5829 31.7501 46.5831 31.75 46.583L38.8234 53.6547C38.9779 53.8093 39.162 53.9327 39.3639 54.0164C39.5658 54.1001 39.7823 54.1431 40.0008 54.1431C40.2194 54.1431 40.4358 54.1001 40.6378 54.0164C40.8397 53.9327 41.0231 53.81 41.1776 53.6554L48.2498 46.5832C48.2498 46.5832 48.2498 46.5832 48.2498 46.5832C49.8813 44.9515 50.9924 42.8727 51.4425 40.6096C51.8927 38.3465 51.6616 36.0008 50.7785 33.869C49.8955 31.7373 48.4002 29.9152 46.4816 28.6333C44.563 27.3514 42.3074 26.6671 40 26.6671ZM31.6665 25.8617C34.1333 24.2135 37.0333 23.3338 40 23.3338C42.9667 23.3338 45.8668 24.2135 48.3335 25.8617C50.8002 27.5099 52.7228 29.8525 53.8581 32.5934C54.9935 35.3342 55.2906 38.3502 54.7118 41.2599C54.1331 44.1696 52.7046 46.8423 50.6069 48.9401L43.5358 56.0112C43.5356 56.0114 43.536 56.011 43.5358 56.0112C43.0718 56.4755 42.5204 56.8443 41.9141 57.0957C41.3076 57.3471 40.6574 57.4765 40.0008 57.4765C39.3443 57.4765 38.6941 57.3471 38.0876 57.0957C37.481 56.8442 36.93 56.4757 36.4659 56.0112L29.3933 48.9403C27.2956 46.8425 25.8669 44.1696 25.2882 41.2599C24.7095 38.3502 25.0066 35.3342 26.1419 32.5934C27.2772 29.8525 29.1998 27.5099 31.6665 25.8617Z"
                    fill="black"
                  />
                  <path
                    id="Vector (Stroke)_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.0007 35C39.1166 35 38.2687 35.3512 37.6436 35.9763C37.0185 36.6015 36.6673 37.4493 36.6673 38.3334C36.6673 39.2174 37.0185 40.0653 37.6436 40.6904C38.2687 41.3155 39.1166 41.6667 40.0007 41.6667C40.8847 41.6667 41.7326 41.3155 42.3577 40.6904C42.9828 40.0653 43.334 39.2174 43.334 38.3334C43.334 37.4493 42.9828 36.6015 42.3577 35.9763C41.7326 35.3512 40.8847 35 40.0007 35ZM35.2866 33.6193C36.5368 32.3691 38.2325 31.6667 40.0007 31.6667C41.7688 31.6667 43.4645 32.3691 44.7147 33.6193C45.9649 34.8696 46.6673 36.5652 46.6673 38.3334C46.6673 40.1015 45.9649 41.7972 44.7147 43.0474C43.4645 44.2976 41.7688 45 40.0007 45C38.2325 45 36.5368 44.2976 35.2866 43.0474C34.0364 41.7972 33.334 40.1015 33.334 38.3334C33.334 36.5652 34.0364 34.8696 35.2866 33.6193Z"
                    fill="black"
                  />
                </g>
              </g>
            </svg> */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="pb-3 lg:w-[80px] md:w-[80px] mdsm:w-[80px] sm:w-[50px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="39.5" stroke="#7C0201" />
              <path
                d="M55 29.9971C55 30.3948 54.8244 30.7762 54.5118 31.0574C54.1993 31.3386 53.7754 31.4966 53.3333 31.4966H46.6354C46.6542 31.744 46.6667 31.9933 46.6667 32.2464C46.6628 35.228 45.3446 38.0866 43.0012 40.1949C40.6579 42.3033 37.4807 43.4893 34.1667 43.4927H30.9771L46.1208 55.8787C46.2858 56.0104 46.4201 56.1703 46.5159 56.349C46.6118 56.5277 46.6672 56.7218 46.679 56.9199C46.6909 57.1181 46.6589 57.3164 46.585 57.5033C46.511 57.6903 46.3965 57.8621 46.2482 58.009C46.0999 58.1558 45.9206 58.2747 45.7208 58.3588C45.5211 58.4429 45.3047 58.4904 45.0844 58.4987C44.864 58.507 44.644 58.4758 44.4371 58.407C44.2302 58.3383 44.0406 58.2332 43.8792 58.098L25.5458 43.1029C25.2969 42.8993 25.1223 42.6327 25.0449 42.3382C24.9675 42.0437 24.991 41.7349 25.1122 41.4526C25.2335 41.1703 25.4469 40.9277 25.7243 40.7565C26.0018 40.5854 26.3303 40.4937 26.6667 40.4937H34.1667C36.597 40.4912 38.9269 39.6215 40.6454 38.0754C42.3639 36.5292 43.3306 34.4329 43.3333 32.2464C43.3333 31.9933 43.3187 31.744 43.2937 31.4966H26.6667C26.2246 31.4966 25.8007 31.3386 25.4882 31.0574C25.1756 30.7762 25 30.3948 25 29.9971C25 29.5994 25.1756 29.218 25.4882 28.9368C25.8007 28.6556 26.2246 28.4976 26.6667 28.4976H42.3271C41.5594 27.1442 40.3912 26.0079 38.9512 25.2141C37.5112 24.4203 35.8555 23.9998 34.1667 23.999H26.6667C26.2246 23.999 25.8007 23.841 25.4882 23.5598C25.1756 23.2786 25 22.8972 25 22.4995C25 22.1018 25.1756 21.7204 25.4882 21.4392C25.8007 21.158 26.2246 21 26.6667 21H53.3333C53.7754 21 54.1993 21.158 54.5118 21.4392C54.8244 21.7204 55 22.1018 55 22.4995C55 22.8972 54.8244 23.2786 54.5118 23.5598C54.1993 23.841 53.7754 23.999 53.3333 23.999H42.6542C44.1409 25.2368 45.2718 26.7804 45.95 28.4976H53.3333C53.7754 28.4976 54.1993 28.6556 54.5118 28.9368C54.8244 29.218 55 29.5994 55 29.9971Z"
                fill="black"
              />
            </svg>
            <p className="lg:text-h6 lge:text-h6 md:text-base mdsm:text-base sm:text-sm text-wrap break-words font-PoppinsBold text-primary underline underline-offset-4 decoration-2">
              Avg Salary
            </p>
            <p className="text-secondary font-PoppinsMedium lg:text-h4 lge:text-h4 md:text-h5 mdsm:text-h5 sm:text-h6">
              INR 3 to 10 LPA
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="border-b-2 border-[#D03B0B] w-full"></div>
        <p className="text-center text-[#D03B0B] font-JosefinMedium lg:text-xl lge:text-xl md:text-h3 mdsm:text-h3 lg:-mt-6 lge:-mt-6 md:-mt-5 mdsm:-mt-5 sm:-mt-3 bg-white lg:mx-[370px] lge:mx-[370px] md:mx-[220px] mdsm:mx-[220px] sm:mx-[80px]">
          Academic Year 2024-25
        </p>
      </div>
    </div>
  );
}
