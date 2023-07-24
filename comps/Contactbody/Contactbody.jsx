import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Animatez from "@/Animate";
import Statichook from "@/hooks/statichook";
import Makepost from "@/hooks/makepost";
// import { withSessionSsr, getSessionData } from "../api/withsession";

import { useRouter } from "next/router";
import axios from "axios";
const Contactbody = ({ con }) => {
  const router = useRouter();

  const { deleteContacts } = Statichook();
  const { singleContacts } = Makepost();

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <di className="shadow-sm table__body">
        <div>
          <div className="table__head--name">
            <p> {con.name} </p>
          </div>
        </div>

        <div>
          <div className="table__head--phone">
            <p> {con.email} </p>
          </div>
        </div>
        <div>
          <div className="table__head--des">
            <p> {con.message} </p>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p> {con.time} </p>
          </div>
        </div>
        <div className="">
          <div className="table__head--act">
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{
                    // opacity: 0,
                    translateY: 0,
                    left: "0%",
                    translateX: "-50%",
                  }}
                  animate={{
                    // opacity: 1,
                    left: "0%",
                    translateX: "-50%",
                    translateY: "-5px",
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 0,
                  }}
                  className="table__perform"
                >
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={async () => {
                      await deleteContacts(con.id);
                      router.reload();
                    }}
                  >
                    <img src="/asset/icons/adminicon/waste.svg" alt="" />
                  </a>
                  <a
                    onClick={async () => {
                      await singleContacts(con.id);
                    }}
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <img src="/asset/icons/adminicon/view.svg" alt="" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
            {/* <!-- end of the thing --> */}
            <a
              style={{
                cursor: "pointer",
              }}
              className="p-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <img
                className="table__menu"
                src="/asset/icons/adminicon/menu_1.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </di>
    </>
  );
};

export default Contactbody;
