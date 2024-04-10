import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getBaseURL } from "../Common/function_Common";

function sidebarT() {
 
    const { baseURL } = getBaseURL();
    const [subMenuOpen1, setSubMenuOpen1] = useState(false);
    const [subMenuOpen2, setSubMenuOpen2] = useState(false);
    const [subMenuOpen3, setSubMenuOpen3] = useState(false);
    const [subMenuOpen4, setSubMenuOpen4] = useState(false);
    const [subMenuOpen5, setSubMenuOpen5] = useState(false);
    const [menu, setmenu] = useState([]);
    const [menuID, setmenuID] = useState([]);
    const [menuMain, setmenuMain] = useState([]);
  
    const [Icondrop1, setIcondrop1] = useState(false);
    const [Icondrop2, setIcondrop2] = useState(false);
    const [Icondrop3, setIcondrop3] = useState(false);
    const [Icondrop4, setIcondrop4] = useState(false);
    const Login_ID = localStorage.getItem("UserLogin");
  
    const Menu = async () => {
      axios.post(baseURL + "/MenuName", {
        login_id: Login_ID,
      }).then((res) => {
        console.log(res.data.length, "hereeeeee")
        // setmenuTest(res.data)
        let datamenu = [];
        let datamenuid = [];
        let main = [];
        for (let i = 0; i < res.data.length; i++) {
  
          datamenu.push(res.data[i][1]);
  
          datamenuid.push(res.data[i][6]);
  
          main.push(res.data[i][0]);
  
        }
  
        setmenu(datamenu);
        setmenuID(datamenuid);
        setmenuMain(main);
  
      })
    };
    useEffect(() => {
      Menu()
    }, []);
  
    const navigate = useNavigate();
    const Page1 = () => {
      navigate("/Page1");
    };
    const toggleSubMenu1 = () => {
      setIcondrop1(!Icondrop1);
      setSubMenuOpen1(!subMenuOpen1);
    };
    const toggleSubMenu2 = () => {
      setIcondrop2(!Icondrop2);
      setSubMenuOpen2(!subMenuOpen2);
    };
    const toggleSubMenu3 = () => {
      setIcondrop3(!Icondrop3);
      setSubMenuOpen3(!subMenuOpen3);
    };
  
    const toggleSubMenu4 = () => {
      setIcondrop4(!Icondrop4);
      setSubMenuOpen4(!subMenuOpen4);
    };
  
    const toggleSubMenu5 = () => {
      setSubMenuOpen5(!subMenuOpen5);
    };
  
    const handleButtonClick = () => {
      // console.log(menuName);
  
      if (Login_ID != "") {
        console.error("hereM", Login_ID);
        axios
          .post(baseURL + "/MenuName", {
  
            login_id: Login_ID,
          })
          .then((res) => {
            const urll = res.data.map((item) => item[2]);
            console.log("testt", urll);
            gopath(urll);
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      }
    };
  
    const gopath = (path) => {
      console.warn(path);
      const go = "/" + path;
      navigate(go);
    };
  
    const Logout = () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("Username");
      localStorage.removeItem("Lastname");
      navigate("/");
    }

    return {
        subMenuOpen1, subMenuOpen2, subMenuOpen3, subMenuOpen4, subMenuOpen5,
        menu, menuID, menuMain, Icondrop1, Icondrop2, Icondrop3, Icondrop4,
        Menu, toggleSubMenu1, toggleSubMenu2, toggleSubMenu3, toggleSubMenu4,
        toggleSubMenu5, handleButtonClick, Logout
    }

}

    export {sidebarT};