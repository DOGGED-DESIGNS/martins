import { useState } from "react";
import { constant } from "@/constant";
import axios from "axios";
import { Generalacess } from "./context/General";

const Makepost = () => {
  const [addcontact, setAddcontact] = useState({});
  const [addquestion, setAddquestion] = useState({});
  const [addcategory, setAddcategory] = useState({});
  const [updatepost, setUpdatepost] = useState({});
  const [updatecat, setUpdatecat] = useState({});
  const [updateques, setUpdateques] = useState({});
  const [deletecategory, setDeletecategory] = useState({});
  const [singlecategory, setSinglecategory] = useState({});

  const {
    id,
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

  const singleContacts = async (id) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api3/process.php",
      {
        message: "singlecontact",
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setContactz(data.data);
    setLoading(false);
  };
  const addContacts = async (form) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api3/process.php",
      form,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setAddcontact(data.data);
  };

  return {
    singleContacts,
    addContacts,
    addcontact,
    setAddcontact,
  };
};

export default Makepost;
