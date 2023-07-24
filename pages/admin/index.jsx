import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Animatez from "@/Animate";
import Statichook from "@/hooks/statichook";
import { withSessionSsr, getSessionData } from "../api/withsession";
import { useRouter } from "next/router";
import axios from "axios";
import Contactbody from "../../comps/Contactbody/Contactbody";
import { Generalacess } from "@/hooks/context/General";

//
export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const data = getSessionData(req);

  if (data) {
    if (data?.error == true || data?.status == false) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    } else {
      const { getContacts } = Statichook();

      const contact = await getContacts();
      // const postcount = await postCount();
      // const commentcount = await commentCount();
      // const hitcount = await hitCount();
      // const quescount = await quesCount();

      return {
        props: { contact },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
});
const contact = ({ contact }) => {
  const router = useRouter();

  const { deleteContacts } = Statichook();

  const [toggle, setToggle] = useState(false);

  const {
    setId,
    loading,
    setLoading,
    des,
    contactz,
    setContactz,
    title,
    setTitle,
    setDes,
    subtitle1,
    setSubtitle1,
    subtitle2,
    setSubtitle2,
    img1,
    setImg1,
    img2,
    setImg2,
  } = Generalacess();

  return (
    <>
      <main className="admin">
        <nav className="admin__nav">
          <a className="nav__logo" href="#">
            <img src="/asset/icons/martins.svg" alt="" />
          </a>

          <div className="admin__nav--link">
            <a
              href=""
              className="ml-auto my-2 text-decoration-none admin__nav--quote"
            >
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    await axios.post(
                      "/api/withsession",
                      {
                        message: "logout",
                      },
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );
                    router.reload();
                  } catch (error) {}
                }}
              >
                <button type="submit" className="btn btn-outline-dark btn-sm">
                  <i className="text-black  text-capitalize mr-1 fa-1x fas fa-sign-out-alt"></i>
                  LogOut
                </button>
              </form>
              {/* <!-- <img
              className="admin__nav--quoteimg"
              src="./asset/icons/adminicon/quotedark.svg"
              alt=""
            /> --> */}
            </a>
          </div>

          {/* <!-- this is just what i want to do --> */}
        </nav>
        {/* <!-- second nav --> */}
        <section className="table">
          <div className="table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--name">
                  <h6>Name</h6>
                </div>
              </div>

              <div>
                <div className="table__head--phone">
                  <h6>Email</h6>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <h6>Description</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>Time</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6>Action</h6>
                </div>
              </div>
            </div>

            {contact.length < 1 ? (
              <h2 className=" text-center">No Contact Available </h2>
            ) : (
              contact.map((con) => {
                return <Contactbody con={con} />;
              })
            )}
          </div>
        </section>

        {/* <!-- modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-lg modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5> */}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              {loading ? (
                <h2>Loading..</h2>
              ) : (
                <div
                  className="modal-body"
                  style={{
                    background: "#2a8091",
                  }}
                >
                  {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
                  <div className="postdisplay p-4">
                    <div className=" mb-3 text-white font-weight-bolder   postdisplay__cat">
                      Description: <br />
                      <span className=" font-weight-lighter text-white-50">
                        {contactz.message}
                      </span>
                    </div>
                    <div className=" mb-3 text-white font-weight-bolder   postdisplay__cat">
                      Email: <br />
                      <span className=" font-weight-lighter text-white-50">
                        {contactz.email}
                      </span>
                    </div>
                    <div className=" mb-3 text-white font-weight-bolder   postdisplay__cat">
                      Time: <br />
                      <span className=" font-weight-lighter text-white-50">
                        {contactz.time}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="modal-footer">
                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
                {/* <button type="button" className="btn btn-primary">
                  Save changes
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default contact;
