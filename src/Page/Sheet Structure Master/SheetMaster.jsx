import React, { useState, useEffect } from "react";
import "/src/Page/Style.css";
// import "./master.css";
import Popup from "./Popup";
import { Empty } from "antd";
import Hearder from "../Header/Hearder";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TableHead,
  TableContainer,
  Paper,
  Box,
  Tooltip,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  SearchOutlined,
  RedoOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  CloseOutlined,
  EditFilled,
  FlagFilled,
  InfoCircleOutlined,
} from "@ant-design/icons";
import axios from 'axios';
import { SheetMasterT } from "../function/function_SheetMaster";

function SheetMaster() {

  const [ShowData, setShowData] = useState([]);
  const [checkHead, setCheckHead] = useState("hidden"); //ตัวแปรเช็คค่าของ ตาราง
  const [checkEmpty, setCheckEmpty] = useState("hidden"); // ตัวแปรเช็คค่าว่าง
  const [checkData, setCheckData] = useState("visible"); // ตัวแปร datashow warning

  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const [TEXT_SHT_Code, setTEXT_SHT_Code] = useState("");
  
  const baseURL = "http://localhost:3080";

  const Search = async () => {
    console.log(code, name, "......")
    try {
      const response = await axios.post(baseURL + "/search/CodeName", {
        Code: code,
        Name: name
      });
      const data = response.data;
      console.log("/////", data)
      setShowData(data);
      if (data.length > 0) {
        setCheckEmpty("hidden");
        setCheckData("hidden");
        setCheckHead("visible");
      } else {
        setCheckEmpty("visible");
        setCheckData("visible");
      }

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Check Code
  const handleCode = (event) => {
    const code = event.target.value;
    setCode(code);
  };

  //Check Name
  const handleName = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const [OpenPopup, setOpenPopup] = useState(false)

  const PopupOpen = () => {
    setOpenPopup(true);
  };

  const PopupClose = () => {
    setOpenPopup(false);
  };

  const New = () => {
    const STATUS = "NEW";
    localStorage.setItem("STATUS", STATUS);
    PopupOpen();
  };

  const Clear = () => {
    setCode("");
    setName("");
    setCheckHead("hidden");
    setCheckEmpty("hidden");
    setCheckData("visible");
  }

  const [selectedRowData, setSelectedRowData] = useState(null);

  const OpenEdit = async (item) => {
    const STATUS = "EDIT";
    localStorage.setItem("STATUS", STATUS);
    setSelectedRowData(item);
    setTEXT_SHT_Code(item.tstm_sht_struc_code);
    PopupOpen();
  }

  const handleOpenDelete = async (item) => {
    swal({
      title: "Are you sure you want to delete this information?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const shtCodeToDelete = item.tstm_sht_struc_code;
        try {
          const response = await axios.post(baseURL + "/delSheet_Master", {
             sht_code: shtCodeToDelete
          });
          console.log("ลบข้อมูลสำเร็จ:", response.data);
          swal("Your data has been deleted successfully", {
            icon: "success",
          });
          Search(); 
        } catch (error) {
          console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
        }
      }
    });
  };
  


  return (
    <>
      <Hearder />
      <Popup
        isOpen={OpenPopup}
        onClose={PopupClose}
        item={selectedRowData}
        searchFunction={Search} />
      <div
        style={{
          marginTop: "60px",
          marginLeft: "90px",
          justifyContent: "left",
          display: "flex",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "Verdana, sans-serif",
              color: "#7286D3",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            Sheet Structure Master
          </h1>
        </div>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <div style={{ marginBottom: "30px" }}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="txtCode"
              label="Code."
              variant="outlined"
              size="small"
              style={{ width: "300px" }}
              value={code}
              onChange={handleCode}
            />
            <TextField
              id="txtName"
              label="Name."
              variant="outlined"
              size="small"
              style={{ width: "300px" }}
              value={name}
              onChange={handleName}
            />
            <Button
              variant="contained"
              style={{ width: "130px" }}
              onClick={Search}
            >
              <SearchOutlined style={{ fontSize: "20px" }} /> &nbsp;
              Search
            </Button>
            <Button
              variant="contained"
              style={{ width: "130px" }}
              color="success"
              onClick={New}
            >
              <PlusOutlined style={{ fontSize: "20px" }} /> &nbsp;
              New
            </Button>
            <Button
              variant="contained"
              style={{ width: "130px" }}
              color="error"
              onClick={Clear}
            >
              <CloseOutlined
                style={{ fontSize: "20px" }}
              /> &nbsp;
              Cancel
            </Button>
          </Box>
        </div>
      </div>

      <div className="divTbSheet">
        <TableContainer
          component={Paper}
          style={{
            width: "96%",
            marginBottom: "10px",
            maxHeight: "400px",
            visibility: checkHead,
          }}
        >
          <Table
            sx={{ 
              minWidth: 650,
              '& .MuiTableHead-root': {
                position: 'sticky',
                top: 0,
                zIndex: 1,
                background: 'white',
              },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell rowSpan={"2"}></TableCell>
                <TableCell rowSpan={"2"}></TableCell>
                <TableCell rowSpan={"2"}>No.</TableCell>
                <TableCell rowSpan={"2"}>Code</TableCell>
                <TableCell rowSpan={"2"}>Name</TableCell>
                <TableCell colSpan={"4"}>Plant</TableCell>
                <TableCell colSpan={"3"}>Lot</TableCell>
                <TableCell colSpan={"3"}>Model</TableCell>
                <TableCell colSpan={"4"}>Seq</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Flag</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Start Digit</TableCell>
                <TableCell>End Digit</TableCell>
                <TableCell>Flag</TableCell>
                <TableCell>Start Digit</TableCell>
                <TableCell>End Digit</TableCell>
                <TableCell>Flag</TableCell>
                <TableCell>Start Digit</TableCell>
                <TableCell>End Digit</TableCell>
                <TableCell>Flag</TableCell>
                <TableCell>Format</TableCell>
                <TableCell>Start Digit</TableCell>
                <TableCell>End Digit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ overflowY: "auto" }}>
              {ShowData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Tooltip title="Edit">
                      <EditNoteIcon
                        style={{ color: "#F3B664", fontSize: "30px" }}
                        onClick={() => OpenEdit(item)}
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Delete">
                      <DeleteForeverIcon
                        style={{
                          color: "#EF4040",
                          fontSize: "30",
                        }}
                        onClick={() => handleOpenDelete(item)}
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.tstm_sht_struc_code}</TableCell>
                  <TableCell>{item.tstm_sht_struc_name}</TableCell>
                  <TableCell>
                    {item.tstm_plant_flag === 'Y' && (
                      <FlagFilled style={{ color: "#83A2FF", fontSize: "20px" }} />
                    )}
                  </TableCell>
                  <TableCell>{item.tstm_plant_code}</TableCell>
                  <TableCell>{item.tstm_plant_start_digit}</TableCell>
                  <TableCell>{item.tstm_plant_end_digit}</TableCell>
                  <TableCell>
                    {item.tstm_lot_flag === 'Y' && (
                      <FlagFilled style={{ color: "#83A2FF", fontSize: "20px" }} />
                    )}
                  </TableCell>
                  <TableCell>{item.tstm_lot_start_digit}</TableCell>
                  <TableCell>{item.tstm_lot_end_digit}</TableCell>
                  <TableCell>
                    {item.tstm_model_flag === 'Y' && (
                      <FlagFilled style={{ color: "#83A2FF", fontSize: "20px" }} />
                    )}
                  </TableCell>
                  <TableCell>{item.tstm_model_start_digit}</TableCell>
                  <TableCell>{item.tstm_model_end_digit}</TableCell>
                  <TableCell>
                    {item.tstm_seq_flag === 'Y' && (
                      <FlagFilled style={{ color: "#83A2FF", fontSize: "20px" }} />
                    )}
                  </TableCell>
                  <TableCell>{item.tstm_seq_format}</TableCell>
                  <TableCell>{item.tstm_seq_start_digit}</TableCell>
                  <TableCell>{item.tstm_seq_end_digit}</TableCell>
                </TableRow>
              ))}
              <TableRow style={{ visibility: checkEmpty }}>
                <TableCell colSpan={18} >
                  <InfoCircleOutlined
                    style={{
                      visibility: checkData,
                      fontSize: "30px",
                      color: "#ffd580",
                      marginLeft: "500px",
                    }}
                  />
                  <span
                    style={{
                      visibility: checkData,
                      fontSize: "25px",
                      marginLeft: "10px",
                    }}
                  >
                    {" "}
                    Please fill in information{" "}
                  </span>
                  <Empty style={{ visibility: checkEmpty }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default SheetMaster;