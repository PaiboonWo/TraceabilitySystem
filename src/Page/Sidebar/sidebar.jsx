import React, { useEffect, useState, StrictMode } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./sidebar.css"
import { DownOutlined, UpOutlined, MenuOutlined } from "@ant-design/icons";
import Circle from '@mui/icons-material/CircleOutlined';

//Icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import SourceIcon from "@mui/icons-material/Source";
import LogoutIcon from '@mui/icons-material/Logout';
// import moment from "moment";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
function sidebar({ isOpen, onClose }) {
  const baseURL = "http://10.17.66.119:3001";
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
  //date
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    axios
      .get(baseURL + "/current-date")
      .then((response) => {
        setCurrentDate(response.data.date);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Drawer anchor="left"
      open={isOpen} onClose={onClose}
      sx={{ border: "10" }}>
      <List sx={{ width: "300px" }}>
        <ListItem className="Headslide"
          onClick={onClose}
        >
          <ListItemText style={{ marginLeft: "10px" }} primary="Welcome" />
          <ArrowBackIcon onClick={onClose} />
        </ListItem>
        {/*Menu1 */}
        <ListItem
          className="ListItem"
          onClick={toggleSubMenu1}

        >
          <ListItemIcon>
            <AssignmentOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={<span style={{ marginRight: "5px" }}>{menu[0]}</span>}
          />
          {menuID.map(
            (item, index) =>
              menuID[index] === menuMain[0] && (
                Icondrop1 ? <UpOutlined /> : <DownOutlined />
              ))}
        </ListItem>
        {subMenuOpen1 && (
          <>
            {menuID.map(
              (item, index) =>
                menuID[index] === menuMain[0] && (
                  <ListItem
                    className="SubMenuItem"

                    onClick={() => {
                      onClose();
                      handleButtonClick(item[0]);
                    }}

                    key={index}
                  ><Circle style={{ fontSize: '8px', marginRight: "10px" }} />
                    <ListItemText primary={menu[index]} />
                  </ListItem>
                )
            )}
          </>
        )}

        {/*Menu2 */}
        <ListItem className="ListItem" onClick={toggleSubMenu2}>
          <ListItemIcon>
            <SensorsOutlinedIcon color="success" />
          </ListItemIcon>
          <ListItemText primary={menu[1]} />
          {menuID.map(
            (item, index) =>
              menuID[index] === menuMain[1] && (
                Icondrop2 ? <UpOutlined /> : <DownOutlined />
              ))}
        </ListItem>
        {subMenuOpen2 && (
          <>
            {menuID.map(
              (item, index) =>
                menuID[index] === menuMain[1] && (
                  <ListItem
                    className="SubMenuItem"

                    onClick={() => {
                      onClose();
                      handleButtonClick(item.menu_name);
                    }}

                    key={index}
                  ><Circle style={{ fontSize: '8px', marginRight: "10px" }} />
                    <ListItemText primary={menu[index]} />
                  </ListItem>
                )
            )}
          </>
        )}
        {/*Menu3 */}
        <ListItem className="ListItem" onClick={toggleSubMenu3}>
          <ListItemIcon>
            <BuildIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={menu[2]} />
          {menuID.map(
            (item, index) =>
              menuID[index] === menuMain[2] && (
                Icondrop3 ? <UpOutlined /> : <DownOutlined />
              ))}
        </ListItem>
        {subMenuOpen3 && (
          <>
            {menuID.map(
              (item, index) =>
                menuID[index] === menuMain[2] && (
                  <ListItem
                    className="SubMenuItem"
                    onClick={() => {
                      onClose();
                      handleButtonClick(item[5]);
                    }}
                    key={index}
                  ><Circle style={{ fontSize: '8px', marginRight: "10px" }} />
                    <ListItemText primary={menu[index]} />
                  </ListItem>
                )
            )}
          </>
        )}
        {/*Menu4 */}
        <ListItem className="ListItem" onClick={toggleSubMenu4}>
          <ListItemIcon>
            <SourceIcon style={{ color: 'orange' }} />
          </ListItemIcon>
          <ListItemText primary={menu[3]} />
          {menuID.map(
            (item, index) =>
              menuID[index] === menuMain[3] && (
                Icondrop4 ? <UpOutlined /> : <DownOutlined />
              ))}
        </ListItem>
        {subMenuOpen4 && (
          <>
            {menuID.map(
              (item, index) =>
                menuID[index] === menuMain[3] && (
                  <ListItem
                    className="SubMenuItem"
                    onClick={() => {
                      onClose();
                      handleButtonClick(item.menu_name);
                    }}
                    key={index}
                  ><Circle style={{ fontSize: '8px', marginRight: "10px" }} />
                    <ListItemText primary={menu[index]} />
                  </ListItem>
                )
            )}
          </>
        )}
        {/*Menu5 */}
        <ListItem className="ListItem" onClick={toggleSubMenu5}
        >
          <ListItemIcon>
            <LogoutIcon style={{ color: 'gray' }} />
          </ListItemIcon>
          <ListItemText primary={menu[4]} onClick={Logout} />
        </ListItem>
        {subMenuOpen5 && (
          <>
            {menuID.map(
              (item, index) =>
                menuID[index] === menuMain[4] && (
                  <ListItem
                    className="SubMenuItem"
                    onClick={() => {
                      onClose();
                      // handleButtonClick(item.menu_name);
                    }}
                    key={index}
                  ><Circle style={{ fontSize: '8px', marginRight: "10px" }} />
                    <ListItemText primary={menu[index]} />
                  </ListItem>
                )
            )}
          </>
        )}
        <ListItem className="ListItem" style={{ marginTop: "170%" }}>
          <ListItemText
            primary={
              <span
                style={{
                  fontSize: "12px",
                }}
              >
                {/* Login Date: {moment(currentDate).format(`DD/MM/YYYY HH:mm:ss`)}{" "} */}
              </span>
            }
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default sidebar;