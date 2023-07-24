import { createContext, useContext, useState } from "react";

const Generalcreate = createContext();

export const Generalacess = () => {
  return useContext(Generalcreate);
};

const General = (props) => {
  const [contactz, setContactz] = useState({});
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [subtitle1, setSubtitle1] = useState("");
  const [subtitle2, setSubtitle2] = useState("");
  const [title, setTitle] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [des, setDes] = useState("");
  return (
    <Generalcreate.Provider
      value={{
        id,
        title,
        setContactz,
        contactz,
        setTitle,
        setId,
        des,
        setDes,
        subtitle1,
        setSubtitle1,
        subtitle2,
        setSubtitle2,
        img1,
        setImg1,
        img2,
        setImg2,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </Generalcreate.Provider>
  );
};

export default General;
