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
import {sidebarT} from "../function/function_sidebar"

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
<<<<<<< HEAD
  const baseURL = "http://10.17.66.119:3001";
  const [subMenuOpen1, setSubMenuOpen1] = useState(false);
  const [subMenuOpen2, setSubMenuOpen2] = useState(false);
  const [subMenuOpen3, setSubMenuOpen3] = useState(false);
  const [subMenuOpen4, setSubMenuOpen4] = useState(false);
  const [subMenuOpen5, setSubMenuOpen5] = useState(false);
  const [menu, setmenu] = useState([]);
  const [menuID, setmenuID] = useState([]);
  const [menuMain, setmenuMain] = useState([]);
=======
  
  const {subMenuOpen1, subMenuOpen2, subMenuOpen3, subMenuOpen4, subMenuOpen5,
    menu, menuID, menuMain, Icondrop1, Icondrop2, Icondrop3, Icondrop4,
    toggleSubMenu1, toggleSubMenu2, toggleSubMenu3, toggleSubMenu4,
    toggleSubMenu5, handleButtonClick, Logout } = sidebarT();
>>>>>>> 42c3bbb824908ddb96406a1cea8764d1de322358

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