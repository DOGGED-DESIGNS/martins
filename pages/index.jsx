import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Makepost from "@/hooks/makepost";

import Animatez from "@/Animate";
import { Scale } from "@mui/icons-material";

const index = () => {
  const { menu, menuchild, supplychild, supplycont, genchild, gencont } =
    Animatez();
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const { addContacts, addcontact, setAddcontact } = Makepost();

  const [toggle, setToggle] = useState(false);
  const [indexz, setIndexz] = useState(1);

  const [name, setName] = useState(false);
  const [text, setText] = useState(false);
  const [email, setEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const passwordRegex = /^.{6,}$/;
  // const passwordRegexconfirm = /^.{6,}$/;
  const textarea = /^[a-zA-Z0-9_-\s]{2,225}$/;
  const username = /^[a-zA-Z0-9_-]{2,20}$/;

  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      autoplay: {
        delay: 5000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });

    // this is the second fade

    // second script swiper for scroll

    var swiperz = new Swiper(".iconSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 3,
        },
        950: {
          slidesPerView: 4,
        },
      },
      autoplay: {
        delay: 2000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // third swiper for scroll
    var swiperz = new Swiper(".swiperService", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 2,
        },
      },
      autoplay: {
        delay: 2000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swipertest = new Swiper(".testSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 1,
        },
        950: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <>
      <header className="header">
        <img className="header__img" src="./asset/img/city.png" alt="" />
        <div className="main header__mover">
          <motion.nav
            variants={supplycont}
            initial="initial"
            animate="animate"
            className="nav"
          >
            <div className="nav__logo">
              <img src="./asset/icons/martins.svg" alt="" />
            </div>

            <div className="nav__link">
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#"> Home </a>
            </div>

            <div className="nav__social">
              <a href="#contact">
                {" "}
                <i className="fab fa-facebook"></i>{" "}
              </a>
              <a href="#contact">
                {" "}
                <i className="fab fa-telegram"></i>{" "}
              </a>
              <a href="#contact">
                {" "}
                <i className="fab fa-instagram"></i>{" "}
              </a>
              <a href="#contact">
                {" "}
                <i className="fab fa-whatsapp"></i>{" "}
              </a>
            </div>
          </motion.nav>
          <motion.nav
            variants={genchild}
            initial="initial"
            whileInView="animate"
            animate="animate"
            className="nav2"
          >
            <div className="nav__logo">
              <img src="./asset/icons/martins.svg" alt="" />
            </div>

            <motion.div
              variants={menu}
              initial="initial"
              onClick={() => {
                setToggle(!toggle);
              }}
              whileTap={"animate"}
              whileInView="animate"
              className="nav2__ham"
            >
              <motion.span variants={menuchild}></motion.span>
              <motion.span variants={menuchild}></motion.span>
              <motion.span variants={menuchild}></motion.span>
            </motion.div>
          </motion.nav>

          {
            <AnimatePresence>
              {toggle && (
                <motion.div
                  variants={genchild}
                  initial="initial"
                  animate="animate"
                  className="navsmallzz"
                  exit="exit"
                >
                  <div className="d-flex i">
                    <i
                      onClick={() => {
                        setToggle(false);
                      }}
                      className="fa p-3 fa-times ml-auto"
                    >
                      {" "}
                    </i>
                  </div>
                  <div className="navsmallzz__a">
                    <a
                      onClick={() => {
                        setToggle(false);
                      }}
                      href="#"
                    >
                      Home
                    </a>
                    <a
                      onClick={() => {
                        setToggle(false);
                      }}
                      href="#contact"
                    >
                      Contact
                    </a>
                    <a
                      href="#about"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      About
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          }

          <motion.div
            variants={gencont}
            initial="initial"
            animate="animate"
            className="header__mover2"
          >
            <motion.p variants={genchild} className="header__p">
              Broker, Investment Adviser
            </motion.p>

            <motion.h1 variants={genchild} className="header__h1">
              Martin Greg James
            </motion.h1>

            <motion.button
              whileTap={{
                originx: 0,
                scale: 0.9,
              }}
              variants={genchild}
              className="header__button"
            >
              contact
            </motion.button>
          </motion.div>
        </div>
      </header>

      <section className="trust main">
        <div className="trust__grid">
          <div>
            <div className="shadow-sm trust__grid--cont">
              <h3 className="trust__grid--h3">Reliable</h3>
              <p className="trust__grid--p">
                When it comes to managing clients financial future, trust and
                reliability are paramount.
                <span className="font-weight-bold">Martin Greg James </span> is
                committed to providing you with the highest level of service and
                expertise, to assist you in achieving your financial goals.
              </p>
            </div>
          </div>
          <div>
            <div className="shadow-sm trust__grid--cont">
              <h3 className="trust__grid--h3">Trusted</h3>
              <p className="trust__grid--p">
                with my experience of more than 11 years, i am ready to help you
                grow your wealth and head towards financial freedom.
              </p>
            </div>
          </div>
          <div>
            <div className="shadow-sm trust__grid--cont">
              <h3 className="trust__grid--h3">On Time</h3>
              <p className="trust__grid--p">
                I have consistently demonstrated a strong commitment to
                timeliness and responsiveness. Whenever my clients have a
                question or need assistance, i am always just a phone call or
                email away, my promptness in addressing their concerns is my
                work ethics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="core main">
        <div className="core__grid">
          <motion.div
            variants={gencont}
            initial="initial"
            whileInView={"animate"}
          >
            <div className="core__img">
              <img src="./asset/img/miartins-8.png" alt="" />
            </div>
          </motion.div>
          <div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <h2 className="core__h3">Core Services</h2>
              <motion.div variants={genchild} className="core__flex">
                <div>
                  <div className="core__flex--img">
                    <img src="./asset/icons/hedge.svg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h2 className="core__flex--h2">Hedge Funds</h2>
                    <p className="core__flex--p">
                      Hedge funds are investment funds managed by professional
                      portfolio managers seeking higher returns using various
                      strategies.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="core__flex">
                <div>
                  <div className="core__flex--img">
                    <img src="./asset/icons/forex.svg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h2 className="core__flex--h2">Forex</h2>
                    <p className="core__flex--p">
                      Forex, short for foreign exchange, is the global
                      marketplace where currencies are bought and sold, making
                      it the largest and most liquid financial market in the
                      world.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="core__flex">
                <div>
                  <div className="core__flex--img">
                    <img src="./asset/icons/stock.svg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h2 className="core__flex--h2">Stocks</h2>
                    <p className="core__flex--p">
                      Stocks represent ownership in a company and are traded on
                      stock exchanges.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="core__flex">
                <div>
                  <div className="core__flex--img">
                    <img src="./asset/icons/realestate.svg" alt="" />
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <h2 className="core__flex--h2">Real Estate</h2>
                    <p className="core__flex--p">
                      Real estate refers to the property consisting of land,
                      buildings, and natural resources, including residential,
                      commercial, and industrial spaces.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- end of trust --> */}

      <section className="tab main">
        <div className="tab__button">
          <button className=" ">My_story_and_services</button>
        </div>

        <div
          initial="initial"
          animate="animate"
          variants={genchild}
          exit="exit"
          className="tab__tab  "
        >
          <div className="row">
            <div className="  col-sm-12 col-md-6 col-lg-6" id="about">
              <h3 className="font-weight-bold roboto text-capitalize">
                my story
              </h3>
              <p className="mt-3 rale">
                I am currently working with the firm CETERA INVESTMENT SERVICES
                LLC (CRD#:15340) and have previously worked with five (5) other
                brokerage & investment firms. I have obtained fifteen (15) State
                Registration Licenses and passed four (4) Brokerage
                Qualification Examinations. <br />
              </p>
            </div>

            <div className="  col-sm-12 col-md-6 col-lg-6">
              <h3 className="font-weight-bold roboto text-capitalize">
                services
              </h3>

              <ul className=" pl-5">
                Hedge funds
                <li className=" text-capitalize">Portfolio management</li>
                <li className=" text-capitalize">
                  Stock Market Trading/ Investment
                </li>
                <li className=" text-capitalize">Forex trading</li>
                <li className=" text-capitalize">Crypto trading</li>
                <li className=" text-capitalize"> Hedge funds</li>
                <li className=" text-capitalize"> Real estate </li>
                <li className=" text-capitalize"> Investment Advisory </li>
                <li className=" text-capitalize"> Financial Consulting.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab__button">
          <button>License_And_Resgistration</button>
        </div>
        <div
          initial="initial"
          animate="animate"
          variants={genchild}
          exit="exit"
          className="tab__tab mb-4"
        >
          <h3 className="font-weight-bold roboto text-capitalize">
            Current Registration
          </h3>
          <div className="mt-3 ">
            <p className=" my-3 pl-5 robot ">
              <small className=" text-uppercase font-weight-bold ">
                (B) <br />{" "}
              </small>
              <small className=" text-uppercase font-weight-bold">
                CETERA INVESTMENT SERVICES LLC (CRD#:15340) 895 ODUM ROAD,
                GARDENDALE, AL 35071 321 N SEMINARY ST, FLORENCE, AL 35630{" "}
                <br />
              </small>
              <small>
                <i>
                  Registered with this firm since <br /> 6/17/2013
                </i>{" "}
                <br />
              </small>
            </p>
            <p class=" my-3 pl-5">
              <small className=" text-uppercase font-weight-bold ">
                (IA)
                <br />{" "}
              </small>
              <small className=" text-uppercase font-weight-bold">
                CETERA INVESTMENT ADVISERS LLC (CRD#:105644) 895 ODUM RD,
                GARDENDALE, AL 35071
                <br />
              </small>
              <small>
                <i>
                  Registered with this firm since <br /> 1/21/2014.
                </i>{" "}
                <br />
              </small>
            </p>
          </div>
        </div>

        <div className="tab__button">
          <button>Experience</button>
        </div>

        <div
          initial="initial"
          animate="animate"
          variants={genchild}
          exit="exit"
          className="tab__tab mb-4"
        >
          <div>
            {/* <a className="mb-0" href="" target="_blank">
              <div className=" finra ">
                <img
                  className="border shadow"
                  src="/asset/img/finra.jpg"
                  alt=""
                />
              </div>
            </a> */}
            {/* <a
              href=""
              className=" mb-4 d-block  roboto font-weight-bold text-uppercase"
              target="_blank"
            >
              JEFFREY MATTHEW PATTEN IS A LICENSED BROKER AND INVESTMENT ADVISER
              CERTIFIED BY FINRA <i>CRD#:5481482</i>{" "}
            </a> */}
            <p>
              I have solid 11years of experience working with the prestigious
              firms on previous Registration(s)
            </p>
            <br />

            <ul className=" pl-5">
              <li className="font-weight-bold text-capitalize py-2">
                CETERA INVESTMENT SERVICES LLC (CRD#:15340) BIRMINGHAM, AL{" "}
                <small class="d-block">
                  {" "}
                  <i>06/17/2013 - 01/21/2014</i>
                </small>
              </li>
              <li className="font-weight-bold text-capitalize py-2">
                BBVA SECURITIES INC. (CRD#:27060) BIRMINGHAM, AL
                <small class="d-block">
                  {" "}
                  <i>05/16/2013 - 06/12/2013</i>
                </small>
              </li>
              <li className="font-weight-bold text-capitalize py-2">
                BBVA COMPASS INVESTMENT SOLUTIONS, INC (CRD#:17086) BIRMINGHAM,
                AL{" "}
                <small class="d-block">
                  {" "}
                  <i>09/13/2012 - 05/16/2013</i>
                </small>
              </li>
              <li className="font-weight-bold text-capitalize py-2">
                MORGAN KEEGAN & COMPANY, INC. (CRD#:4161) BIRMINGHAM, AL{" "}
                <small class="d-block">
                  {" "}
                  <i>11/15/2011 - 09/06/2012</i>
                </small>
              </li>
              <li className=" text-capitalize font-weight-bold py-2">
                MORGAN KEEGAN & COMPANY, INC. (CRD#:4161) BIRMINGHAM, AL{" "}
                <small class="d-block">
                  {" "}
                  <i>07/29/2011 - 09/06/2012.</i>
                </small>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab__button">
          <button className={indexz == 4 && "buttonactive"}>
            Examinations
          </button>
        </div>

        <div
          initial="initial"
          animate="animate"
          variants={genchild}
          exit="exit"
          className="tab__tab mb-4"
        >
          <h3 className="font-weight-bold roboto text-capitalize">Education</h3>
          <p className="mt-3"></p>
          <ul className=" pl-5">
            <li className="font-weight-bold text-capitalize py-2">
              Series 66 - Uniform Combined State Law Examination (Nov 14, 2011)
              <small class="d-block">
                {" "}
                <i>State Securities Law Exam</i>
              </small>
            </li>
            <li className="font-weight-bold text-capitalize py-2">
              Series 63 - Uniform Securities Agent State Law Examination (Sep 8,
              2011)
              <small class="d-block">
                {" "}
                <i>State Securities Law Exam</i>
              </small>
            </li>
            <li className="font-weight-bold text-capitalize py-2">
              SIE - Securities Industry Essentials ExaminationOct 1, 2018
              <small class="d-block">
                {" "}
                <i>General Industry/Products Exam</i>
              </small>
            </li>
            <li className="font-weight-bold text-capitalize py-2">
              Series 7 - General Securities Representative ExaminationJul 28,
              2011.
              <small class="d-block">
                {" "}
                <i>General Industry/Products Exam</i>
              </small>
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- test --> */}

      {/* <!-- end of test --> */}

      <section className="main contact" id="contact">
        <div className="contact__grid">
          <div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <h2 className="contact__h2">contact</h2>

              <motion.div variants={genchild} className="contact__flex">
                <i className="fa fa-envelope "></i>
                <p>martingregj38@gmail.com</p>
              </motion.div>
              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-instagram"></i>
                <p>Gregjamestrades</p>
              </motion.div>

              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-telegram"></i>
                <p>Martingregtrade</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="contact__form">
            <form
              onSubmit={async (e) => {
                setLoading(true);
                e.preventDefault();

                if (
                  e.target.elements.name.value == "" ||
                  e.target.elements.email.value == "" ||
                  e.target.elements.des.value == ""
                ) {
                  setError(true);
                  setLoading(false);
                } else {
                  const formz = new FormData();

                  formz.append("message", "addcontact");
                  formz.append("des", e.target.elements.des.value);
                  formz.append("email", e.target.elements.email.value);
                  formz.append("name", e.target.elements.name.value);

                  await addContacts(formz);
                  setError(false);
                  setLoading(false);
                }
                setLoading(false);
              }}
              action=""
            >
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{
                      y: "-20%",
                      // position: "fixed",
                      // opacity: 0,
                    }}
                    animate={{
                      // opacity: 1,
                      // position: "fixed",
                      y: 0,
                    }}
                    exit={{
                      y: "-20%",
                      opacity: 0,
                      transition: {
                        //   type: "spring",
                        //   stiffness: 200,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={` my-3 alert alert-danger fade show`}
                  >
                    <strong>Please fill all form field</strong>

                    <div
                      className=" mx-2 close alert-dismissable mx-3 "
                      onClick={() => {
                        setError(false);
                      }}
                    >
                      {" "}
                      &times;{" "}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {addcontact?.message && (
                  <motion.div
                    initial={{
                      y: "-20%",
                      // position: "fixed",
                      // opacity: 0,
                    }}
                    animate={{
                      // opacity: 1,
                      // position: "fixed",
                      y: 0,
                    }}
                    exit={{
                      y: "-20%",
                      opacity: 0,
                      transition: {
                        //   type: "spring",
                        //   stiffness: 200,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={` my-3 alert alert-${addcontact?.type} fade show`}
                  >
                    <strong>{addcontact?.message}</strong>

                    <div
                      className=" ml-5 close alert-dismissable mx-3 "
                      onClick={() => {
                        setAddcontact({});
                      }}
                    >
                      {" "}
                      &times;{" "}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <input
                onChange={(e) => {
                  if (username.test(e.target.value)) {
                    setName(false);
                  } else {
                    setName(true);
                  }
                }}
                placeholder="name"
                className="   contact__input"
                type="text"
                name="name"
              />
              <AnimatePresence>
                {name && (
                  <motion.p
                    variants={genchild}
                    initial="initial"
                    animate="animate"
                    className=" my-1 text-danger"
                    exit="exit"
                  >
                    invalid input
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                onChange={(e) => {
                  if (emailRegex.test(e.target.value)) {
                    setEmail(false);
                  } else {
                    setEmail(true);
                  }
                }}
                placeholder="email"
                className="   contact__input"
                type="text"
                name="email"
              />
              <AnimatePresence>
                {email && (
                  <motion.p
                    variants={genchild}
                    initial="initial"
                    animate="animate"
                    className=" my-1 text-danger"
                    exit="exit"
                  >
                    invalid email address
                  </motion.p>
                )}
              </AnimatePresence>

              <textarea
                onChange={(e) => {
                  if (textarea.test(e.target.value)) {
                    setText(false);
                  } else {
                    setText(true);
                  }
                }}
                className="  contact__text"
                name="des"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <AnimatePresence>
                {text && (
                  <motion.p
                    variants={genchild}
                    initial="initial"
                    animate="animate"
                    className=" my-1 text-danger"
                    exit="exit"
                  >
                    Text should not be longer than 225 characters{" "}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                disabled={text || name || email ? true : false}
                className="contact__button"
              >
                {loading ? "please wait..." : "submit"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <!-- this is the footer --> */}

      <footer className="main pb-5">
        <p className="text-center font-weight-bold">copyright &copy; 2023</p>
      </footer>
    </>
  );
};

export default index;
