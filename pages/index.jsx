import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Makepost from "@/hooks/makepost";

import Animatez from "@/Animate";
import { Scale } from "@mui/icons-material";

const index = () => {
  const { menu, menuchild, supplychild, supplycont, genchild, gencont } =
    Animatez();

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
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#"> Home </a>
            </div>

            <div className="nav__social">
              <a href="#">
                {" "}
                <i className="fab fa-facebook"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fab fa-telegram"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fab fa-instagram"></i>{" "}
              </a>
              <a href="#">
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
                    <a href="">Home</a>
                    <a href="">Contact</a>
                    <a href="">About</a>
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
              Financial Market Expert, Broker, Investment Adviser
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
        <h1 className="trust__h1">How it works</h1>
        <p className="trust__p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eaque eligendi ipsum magni quae asperiores deserunt sint sunt, maxime
          enim eos alias officia earum aut ullam quisquam? Reiciendis, voluptas
          optio!
        </p>

        <div className="trust__grid">
          <div>
            <div className="shadow-sm trust__grid--cont">
              <h3 className="trust__grid--h3">Reliable</h3>
              <p className="trust__grid--p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                esse eum reprehenderit provident accusamus. Placeat facere fuga
                ullam at ratione!
              </p>
            </div>
          </div>
          <div>
            <div className="shadow-sm trust__grid--cont">
              <h3 className="trust__grid--h3">Trusted</h3>
              <p className="trust__grid--p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                esse eum reprehenderit provident accusamus. Placeat facere fuga
                ullam at ratione!
              </p>
            </div>
          </div>
          <div>
            <div className="shadow-sm trust__grid--cont">
              <h3 className="trust__grid--h3">On Time</h3>
              <p className="trust__grid--p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                esse eum reprehenderit provident accusamus. Placeat facere fuga
                ullam at ratione!
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, magnam.
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, magnam.
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, magnam.
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, magnam.
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
        <div className="tab__contz">
          <div className="tab__button">
            <button
              onClick={() => {
                setIndexz(1);
              }}
              className={indexz == 1 && "buttonactive"}
            >
              My_story_and_services
            </button>
            <button
              onClick={() => {
                setIndexz(3);
              }}
              className={indexz == 3 && "buttonactive"}
            >
              License_And_Resgistration
            </button>
            <button
              onClick={() => {
                setIndexz(2);
              }}
              className={indexz == 2 && "buttonactive"}
            >
              Experience
            </button>
            <button
              onClick={() => {
                setIndexz(4);
              }}
              className={indexz == 4 && "buttonactive"}
            >
              Examinations
            </button>
          </div>
        </div>

        <AnimatePresence>
          {indexz == 1 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={genchild}
              exit="exit"
              className="tab__tab"
            >
              <div className="row">
                <div className="  col-sm-12 col-md-6 col-lg-6">
                  <h3 className="font-weight-bold roboto text-capitalize">
                    my story
                  </h3>
                  <p className="mt-3 rale">
                    I am a professional Investment Adviser with over 10 years of
                    experience in leading clients in making highly profitable
                    investment decisions in financial market such as <br />
                    <br />
                    <span className="text-capitalize font-weight-bold">
                      crypto <br />
                    </span>
                    <span className="text-capitalize font-weight-bold">
                      stock <br />
                    </span>
                    <span className="text-capitalize font-weight-bold">
                      hedge funds <br />
                    </span>
                    <span className="text-capitalize font-weight-bold">
                      forex <br />
                    </span>
                    <span className=" text-capitalize font-weight-bold">
                      Real Estate
                      <br /> <br />
                    </span>
                    and other financial markets. At TRUIST ADVISORY SERVICES,
                    INC, I lead clients through tough investment decisions and
                    help bridge the gap between financial challenges and
                    aspirations. I provide wealth management insight, problem
                    solving, and implementation of financial plans & investment
                    solutions to help clients obtain the lifestyle they aspire
                    to. <br /> <br /> I have a personalized approach in bringing
                    all the pieces of your financial life together. I have met
                    extensive training with experience requirements and i am
                    committed to an ethical standards that require me to put my
                    clients' interests first.
                  </p>
                </div>

                <div className="  col-sm-12 col-md-6 col-lg-6">
                  <h3 className="font-weight-bold roboto text-capitalize">
                    services
                  </h3>

                  <ul className=" pl-5">
                    <li className=" text-capitalize">
                      stock market trading/ investment
                    </li>
                    <li className=" text-capitalize"> forex </li>
                    <li className=" text-capitalize"> crypto </li>
                    <li className=" text-capitalize"> Hedge Funds </li>
                    <li className=" text-capitalize"> Real Estate </li>
                    <li className=" text-capitalize">
                      professional portfolio management
                    </li>
                    <li className=" text-capitalize"> mentorship program </li>
                    <li className=" text-capitalize"> retirement planning</li>
                    <li className=" text-capitalize">
                      Executive financial services
                    </li>
                  </ul>
                </div>

                <div className="row">
                  <div className="  col-sm-12 p-2 my-2 col-md-3 col-lg-3 ">
                    <h3 className="  font-weight-bold text-center">$8M</h3>
                    <p className="  text-black-50 font-weight-bold  text-capitalize text-center">
                      estimated profit accumulated
                    </p>
                  </div>
                  <div className="  col-sm-12 p-2 my-2 col-md-3 col-lg-3 ">
                    <h3 className="  font-weight-bold text-center">4k</h3>
                    <p className="  text-black-50 font-weight-bold  text-capitalize text-center">
                      active clients portfolios
                    </p>
                  </div>
                  <div className="  col-sm-12 p-2 my-2 col-md-3 col-lg-3 ">
                    <h3 className="  font-weight-bold text-center">85%</h3>
                    <p className="  text-black-50 font-weight-bold  text-capitalize text-center">
                      visitor-client converstion
                    </p>
                  </div>
                  <div className="  col-sm-12 p-2 my-2 col-md-3 col-lg-3 ">
                    <h3 className="  font-weight-bold text-center">100%</h3>
                    <p className="  text-black-50 font-weight-bold pr-3  text-capitalize text-center">
                      quality and satisfaction gurantee
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {indexz == 2 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={genchild}
              exit="exit"
              className="tab__tab"
            >
              <h3 class="font-weight-bold roboto text-capitalize">
                Experience
              </h3>
              <p class="mt-3 ">
                <p class=" my-3 pl-5 robot ">
                  <small class=" text-uppercase font-weight-bold">
                    {" "}
                    2019 - current <br />
                  </small>
                  BROKER | TRUIST INVESTMENT SERVICES, INC.(CRD*:17499) <br />
                  <small>
                    <i>
                      1605 lakewood ranch blvd, <br /> bradenton, FL 34209{" "}
                    </i>{" "}
                    <br />
                  </small>
                </p>
                <p class=" my-3 pl-5">
                  <small class=" text-uppercase font-weight-bold">
                    {" "}
                    2020 - current <br />
                  </small>
                  INVESTMENT ADVISER | TRUIST ADVISORY SERVICES,
                  INC.(CRD#:283390) <br />
                  <small>
                    <i>
                      7419 manatee aenue west suite pb , <br /> bradenton, FL
                      34211{" "}
                    </i>{" "}
                    <br />
                  </small>
                </p>
                <p class=" my-3 pl-5">
                  <small class=" text-uppercase font-weight-bold">
                    {" "}
                    2017 - 2019 <br />
                  </small>
                  BMO HARRIS FINANCIAL ADVISORS, INC(CRD#:137115) <br />
                  <small>
                    <i> BARTLETT, IL </i> <br />
                  </small>
                </p>
                <p class=" my-3 pl-5">
                  <small class=" text-uppercase font-weight-bold">
                    {" "}
                    2011 - 2012 <br />
                  </small>
                  PNC INVESTMENTS (CRD#:129052) <br />
                  <small> DOWNERS GROVE, IL</small>
                </p>
                <p class=" my-3 pl-5">
                  <small class=" text-uppercase font-weight-bold">
                    {" "}
                    2008 - 2011 <br />
                  </small>
                  CHASE INVESTMENT SERVICES CORP.(CRD#:25574) <br />
                  <small>DOWNERS GROVE, IL</small>
                </p>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {indexz == 3 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={genchild}
              exit="exit"
              className="tab__tab"
            >
              <div>
                <a className="mb-0" href="" target="_blank">
                  <div className=" finra ">
                    <img
                      className="border shadow"
                      src="/asset/img/finra.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href=""
                  className=" mb-4 d-block  roboto font-weight-bold text-uppercase"
                  target="_blank"
                >
                  JEFFREY MATTHEW PATTEN IS A LICENSED BROKER AND INVESTMENT
                  ADVISER CERTIFIED BY FINRA <i>CRD#:5481482</i>{" "}
                </a>
                <p>
                  The Financial Industry Regulatory Authority(finra) is a
                  private American coporation that acts as a self -regulatory
                  organization that regulates member brokerage firms and
                  exchange markets.
                </p>
                <br />
                <p>
                  It's stated mission is "to safeguard the investing public
                  against fraud and bad practices."
                </p>
                <br />
                <p>
                  FINRA was created as the result of consolidation of the
                  National Association of Securities Dealers (NASD) and the
                  member regulation, enforcement, and arbitration operations of
                  the New York Stock Exchange (NYSE) in 2007. The consolidation
                  was meant to do away with overlapping or redundant regulation
                  and reduce the cost and complexity of compliance. <br />
                  <br />
                  <i className=" font-weight-bolder ">KEY TAKEAWAYS</i>
                </p>
                <ul className="pl-5">
                  <li>
                    The Financial Industry Regulatory Authority (FINRA) writes
                    and enforces rules that govern registered brokers and
                    broker-dealer firms in the united states.
                  </li>
                  <li>
                    FINRA also administers te qualifying exams for securities
                    professionals
                  </li>
                  <li>
                    FINRA provides resources, such as BrokerCheck, that help to
                    protect investors
                  </li>
                  <li>
                    The general criticism of all self-reglulatory agencies,
                    including FINRA, is that they do just enough to maintain the
                    public's trust
                  </li>
                  <li>
                    FINRA'S monthly report of diciplinary activity refers only
                    to formal actions and leaves out informal ones such as
                    cautionaey letters to firms or individuals. <br />
                  </li>
                </ul>
                <p>
                  <i className=" font-weight-bolder text-uppercase ">
                    Understanding FINRA
                  </i>{" "}
                  <br />
                  <i className=" font-weight-bolder text-uppercase">
                    Oversight Role
                  </i>{" "}
                </p>
                <br />
                <p>
                  The Financial Industry Regulatory Authority (FINRA) is the
                  single largest independent regulaory body for securities firms
                  operating in the united state. It overseas more than 3,400
                  brokerage firms, 15,200 branch offices, and nearly 617,550
                  registered securities representatives, as of 2020,4 FINRA has
                  19 offices across the United States and approximately 3,600
                  employees.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {indexz == 4 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={genchild}
              exit="exit"
              className="tab__tab"
            >
              <h3 className="font-weight-bold roboto text-capitalize">
                Education
              </h3>
              <p className="mt-3"></p>
              <ul className=" pl-5">
                <li className=" text-capitalize py-2">
                  series 65 - uniform investment Adviser law examination
                  <small class="d-block">
                    {" "}
                    <i>feb 24, 2020</i>
                  </small>
                </li>
                <li className=" text-capitalize py-2">
                  series 63 - uniform investment Agent law examinaation
                  <small class="d-block">
                    {" "}
                    <i>jun 28 2017</i>
                  </small>
                </li>
                <li className=" text-capitalize py-2">
                  SIE - securities industry essentials examination
                  <small class="d-block">
                    {" "}
                    <i>oct 1, 2018</i>
                  </small>
                </li>
                <li className=" text-capitalize py-2">
                  series 6 - investment company products/variable contracts
                  representative examination
                  <small className="d-block">
                    {" "}
                    <i>may 1, 2017</i>
                  </small>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* <!-- test --> */}

      <section className="test mt-5">
        <div className="container-fluid">
          <h2 className="test__h2">What Our Client Says !</h2>
          {/* <!-- this is where the fade swiper starts --> */}

          <div className="pt-5 swiper testSwiper">
            <div className="swiper-wrapper mb-5">
              <div className="swiper-slide">
                <div className="test__mover">
                  <p className="test__p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam quidem libero provident, iusto dicta laboriosam quaerat
                    sit quia alias. Perferendis.
                  </p>

                  <div className="test__people">
                    <div className="test__img">
                      <img
                        src="https://images.pexels.com/photos/6766248/pexels-photo-6766248.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                    <div className="test__name">
                      <h6>Miller Robert</h6>
                      <p>manager</p>
                    </div>
                  </div>

                  <img
                    className="test__quote"
                    src="./asset/icons/quote.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="test__mover">
                  <p className="test__p">
                    aspernatur fugiat voluptatum quisquam enim porro atque
                    voluptates consectetur. Ab earum est nulla provident! Atque
                    culpa ab perferendis officiis quo officia magni molestiae
                    ipsum cumque!
                  </p>

                  <div className="test__people">
                    <div className="test__img">
                      <img
                        src="https://images.pexels.com/photos/6766248/pexels-photo-6766248.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                    <div className="test__name">
                      <h6>Miller Robert</h6>
                      <p>manager</p>
                    </div>
                  </div>

                  <img
                    className="test__quote"
                    src="./asset/icons/quote.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="test__mover">
                  <p className="test__p">
                    reiciendis error! Repellat quisquam quis maxime magnam,
                    doloribus commodi ullam nostrum suscipit inventore animi
                    dolorum numquam exercitationem modi dolore. Adipisci rem ut
                    eum? Sapiente, deleniti id. Dolorum distinctio voluptas unde
                    maxime
                  </p>

                  <div className="test__people">
                    <div className="test__img">
                      <img
                        src="https://images.pexels.com/photos/6766248/pexels-photo-6766248.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                    <div className="test__name">
                      <h6>Miller jeremiah</h6>
                      <p>manager</p>
                    </div>
                  </div>

                  <img
                    className="test__quote"
                    src="./asset/icons/quote.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <!-- <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> --> */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/* <!-- end of test --> */}

      <section className="main contact">
        <div className="contact__grid">
          <div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <h2 className="contact__h2">contact</h2>

              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-instagram"></i>
                <p>@matinsinstagram</p>
              </motion.div>
              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-facebook"></i>
                <p>@matinsinstagram</p>
              </motion.div>
              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-telegram"></i>
                <p>@matinsinstagram</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="contact__form">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                if (
                  e.target.elements.name.value == "" ||
                  e.target.elements.email.value == "" ||
                  e.target.elements.des.value == ""
                ) {
                  setError(true);
                } else {
                  const formz = new FormData();

                  formz.append("message", "addcontact");
                  formz.append("des", e.target.elements.des.value);
                  formz.append("email", e.target.elements.email.value);
                  formz.append("name", e.target.elements.name.value);

                  await addContacts(formz);
                  setError(false);
                }
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
                submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <!-- this is the footer --> */}

      <footer className="main pb-5">
        <p className="text-center font-weight-bolder">copyright &copy; 2023</p>
      </footer>
    </>
  );
};

export default index;
