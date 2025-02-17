import React, { useState, useEffect } from "react";
import "/src/Page/Style.css";
import {
  Typography,
  FormControl,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Select,
  MenuItem,
  Grid,
  TextField,
  Button,
  InputLabel,
  Card,
  CardContent,
  Box,
  Checkbox,
} from "@mui/material";
import swal from "sweetalert";
import axios from "axios";



function Popup({ isOpen, onClose, item, searchFunction }) {

  const baseURL = "http://localhost:3080";

  if (!isOpen) {
    return null;
  }

  // console.log("มาายัง", item)
  const STATUS_P = localStorage.getItem("STATUS");
  //console.log("สถานะ", STATUS_P);

  const UserLogin = localStorage.getItem("IDCode");
  const [user_id, setuser_id] = useState("");
  const ip = localStorage.getItem("ipAddress");
  const [ipaddress, setipaddress] = useState("");

  const [isPlantChecked, setIsPlantChecked] = useState(false);
  const [isLotChecked, setIsLotChecked] = useState(false);
  const [isModelChecked, setIsModelChecked] = useState(false);
  const [isSeqChecked, setIsSeqChecked] = useState(false);

  //Seterror
  const [ERROR_SHT_Code, setERROR_SHT_Code] = useState(false);
  const [ERROR_SHT_Name, setERROR_SHT_Name] = useState(false);
  const [ERROR_Plant_Code, setERROR_Plant_Code] = useState(false);
  const [ERROR_Plant_St, setERROR_Plant_St] = useState(false);
  const [ERROR_Plant_End, setERROR_Plant_End] = useState(false);
  const [ERROR_Lot_St, setERROR_Lot_St] = useState(false);
  const [ERROR_Lot_End, setERROR_Lot_End] = useState(false);
  const [ERROR_Model_St, setERROR_Model_St] = useState(false);
  const [ERROR_Model_End, setERROR_Model_End] = useState(false);
  const [ERROR_Seq_For, setERROR_Seq_For] = useState(false);
  const [ERROR_Seq_St, setERROR_Seq_St] = useState(false);
  const [ERROR_Seq_End, setERROR_Seq_End] = useState(false);

  const [TXT_SHT_Code, setTXT_SHT_Code] = useState("");
  const [TXT_SHT_Name, setTXT_SHT_Name] = useState("");
  //Plant
  const [Check_Plant_Flag, setCheck_Plant_Flag] = useState("");
  const [TXT_Plant_Code, setTXT_Plant_Code] = useState("");
  const [TXT_Plant_Start, setTXT_Plant_Start] = useState("");
  const [TXT_Plant_End, setTXT_Plant_End] = useState("");
  //Lot
  const [Check_Lot_Flag, setCheck_Lot_Flag] = useState("");
  const [TXT_Lot_Start, setTXT_Lot_Start] = useState("");
  const [TXT_Lot_End, setTXT_Lot_End] = useState("");
  //Model
  const [Check_Model_Flag, setCheck_Model_Flag] = useState("");
  const [TXT_Model_Start, setTXT_Model_Start] = useState("");
  const [TXT_Model_End, setTXT_Model_End] = useState("");
  //Seq
  const [Check_Seq_Flag, setCheck_Seq_Flag] = useState("");
  const [TXT_Seq_Format, setTXT_Seq_Format] = useState("");
  const [TXT_Seq_Start, setTXT_Seq_Start] = useState("");
  const [TXT_Seq_End, setTXT_Seq_End] = useState("");
  //Formatdate
  const [currentDate, setCurrentDate] = useState(new Date());
  const [Date_show, setDate_show] = useState("");


  useEffect(() => {
    if (STATUS_P === "NEW") {
      const fetchData = async () => {
        try {
          const response = await axios.post(baseURL + "/CheckSHTCode", {});
          const data = response.data;
          const new_run_seq = data[0].f_runniung; // Adjust the key according to your response
          setTXT_SHT_Code(new_run_seq);
        } catch (error) {
          console.error('Error fetching or updating running number:', error);
          setTXT_SHT_Code('00000');
        }
      };
  
      fetchData();
    }
  }, [STATUS_P]);


  useEffect(() => {

    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${currentDate.getFullYear()}`;
    setDate_show(formattedDate);

    if (STATUS_P === "NEW") {
      setTXT_SHT_Code("");
      setTXT_SHT_Name("");
      setCheck_Plant_Flag("");
      setTXT_Plant_Code("");
      setTXT_Plant_Start("");
      setTXT_Plant_End("");
      setCheck_Lot_Flag("");
      setTXT_Lot_Start("");
      setTXT_Lot_End("");
      setCheck_Model_Flag("");
      setTXT_Model_Start("");
      setTXT_Model_End("");
      setCheck_Seq_Flag("");
      setTXT_Seq_Format("");
      setTXT_Seq_Start("");
      setTXT_Seq_End("");
      setuser_id(UserLogin);
      setipaddress(ip);
    } else {
      console.log("CASE EDIT", item);
      setTXT_SHT_Code(item.tstm_sht_struc_code);
      setTXT_SHT_Name(item.tstm_sht_struc_name);
      setCheck_Plant_Flag(item.tstm_plant_flag);
      setTXT_Plant_Code(item.tstm_plant_code);
      setTXT_Plant_Start(item.tstm_plant_start_digit)
      setTXT_Plant_End(item.tstm_plant_end_digit);
      setCheck_Lot_Flag(item.tstm_lot_flag);
      setTXT_Lot_Start(item.tstm_lot_start_digit);
      setTXT_Lot_End(item.tstm_lot_end_digit);
      setCheck_Model_Flag(item.tstm_model_flag);
      setTXT_Model_Start(item.tstm_model_start_digit);
      setTXT_Model_End(item.tstm_model_end_digit);
      setCheck_Seq_Flag(item.tstm_seq_flag);
      setTXT_Seq_Format(item.tstm_seq_format);
      setTXT_Seq_Start(item.tstm_seq_start_digit);
      setTXT_Seq_End(item.tstm_seq_end_digit);
      setuser_id(item.tstm_modified_by);
      setipaddress(item.tstm_modified_ip);
    }

  }, []);

  const handleKEY_SHT_Code = (event) => {
    const TXT_SHT_Code = event.target.value;
    // console.log(TXT_SHT_Code, "ดูค่า");
    setTXT_SHT_Code(TXT_SHT_Code);
    setERROR_SHT_Code(false);
  };

  const handleKEY_SHT_Name = (event) => {
    const TXT_SHT_Name = event.target.value;
    setTXT_SHT_Name(TXT_SHT_Name);
    setERROR_SHT_Name(false);
  };

  const handleKEY_Plant_Code = (event) => {
    const TXT_Plant_Code = event.target.value;
    setTXT_Plant_Code(TXT_Plant_Code);
    setERROR_Plant_Code(false);
  };

  const handleKEY_Plant_St = (event) => {
    const TXT_Plant_Start = event.target.value;
    setTXT_Plant_Start(TXT_Plant_Start);
    setERROR_Plant_St(false);
  };

  const handleKEY_Plant_End = (event) => {
    const TXT_Plant_End = event.target.value;
    setTXT_Plant_End(TXT_Plant_End);
    setERROR_Plant_End(false);
  };

  const handleKEY_Lot_St = (event) => {
    const TXT_Lot_Start = event.target.value;
    setTXT_Lot_Start(TXT_Lot_Start);
    setERROR_Lot_St(false);
  };

  const handleKEY_Lot_End = (event) => {
    const TXT_Lot_End = event.target.value;
    setTXT_Lot_End(TXT_Lot_End);
    setERROR_Lot_End(false);
  };

  const handleKEY_Model_St = (event) => {
    const TXT_Model_Start = event.target.value;
    setTXT_Model_Start(TXT_Model_Start);
    setERROR_Model_St(false);
  };

  const handleKEY_Model_End = (event) => {
    const TXT_Model_End = event.target.value;
    setTXT_Model_End(TXT_Model_End);
    setERROR_Model_End(false);
  };

  const handleKEY_Seq_For = (event) => {
    const TXT_Seq_Format = event.target.value;
    setTXT_Seq_Format(TXT_Seq_Format);
    setERROR_Seq_For(false);
  };

  const handleKEY_Seq_St = (event) => {
    const TXT_Seq_Start = event.target.value;
    setTXT_Seq_Start(TXT_Seq_Start);
    setERROR_Seq_St(false);
  };

  const handleKEY_Seq_End = (event) => {
    const TXT_Seq_End = event.target.value;
    setTXT_Seq_End(TXT_Seq_End);
    setERROR_Seq_End(false);
  };

  useEffect(() => {
    if (STATUS_P === "EDIT") {

      if (Check_Plant_Flag === "Y") {
        setIsPlantChecked(true);
      }
      if (Check_Lot_Flag === "Y") {
        setIsLotChecked(true);
      }
      if (Check_Model_Flag === "Y") {
        setIsModelChecked(true);
      }
      if (Check_Seq_Flag === "Y") {
        setIsSeqChecked(true);
      }
    }
  }, [STATUS_P, Check_Plant_Flag]);


  const handleSaveClick = async () => {
    if (TXT_SHT_Code === "") {
      setERROR_SHT_Code(true);
    }
    if (TXT_SHT_Name === "") {
      setERROR_SHT_Name(true);
    }
    if (TXT_Plant_Code === "") {
      setERROR_Plant_Code(true);
    }
    if (isNaN(TXT_Plant_Start) || TXT_Plant_Start === "") {
      setERROR_Plant_St(true);
    }
    if (isNaN(TXT_Plant_End) || TXT_Plant_End === "") {
      setERROR_Plant_End(true);
    }
    if (isNaN(TXT_Lot_Start) || TXT_Lot_Start === "") {
      setERROR_Lot_St(true);
    }
    if (isNaN(TXT_Lot_End) || TXT_Lot_End === "") {
      setERROR_Lot_End(true);
    }
    if (isNaN(TXT_Model_Start) || TXT_Model_Start === "") {
      setERROR_Model_St(true);
    }
    if (isNaN(TXT_Model_End) || TXT_Model_End === "") {
      setERROR_Model_End(true);
    }
    if (TXT_Seq_Format === "") {
      setERROR_Seq_For(true);
    }
    if (isNaN(TXT_Seq_Start) || TXT_Seq_Start === "") {
      setERROR_Seq_St(true);
    }
    if (isNaN(TXT_Seq_End) || TXT_Seq_End === "") {
      setERROR_Seq_End(true);
    }

    let Check_Plant_Flag = isPlantChecked ? 'Y' : 'N';
    let Check_Lot_Flag = isLotChecked ? 'Y' : 'N';
    let Check_Model_Flag = isModelChecked ? 'Y' : 'N';
    let Check_Seq_Flag = isSeqChecked ? 'Y' : 'N';

    if (STATUS_P === "NEW") {
      console.log("NEW")
    
      if (
        TXT_SHT_Code &&
        TXT_SHT_Name &&
        Check_Plant_Flag &&
        (Check_Plant_Flag === 'N' || TXT_Plant_Code) &&
        (Check_Plant_Flag === 'N' || TXT_Plant_Start) &&
        (Check_Plant_Flag === 'N' || TXT_Plant_End) &&
        Check_Lot_Flag &&
        (Check_Lot_Flag === 'N' || TXT_Lot_Start) &&
        (Check_Lot_Flag === 'N' || TXT_Lot_End) &&
        Check_Model_Flag &&
        (Check_Model_Flag === 'N' || TXT_Model_Start) &&
        (Check_Model_Flag === 'N' || TXT_Model_End) &&
        Check_Seq_Flag &&
        (Check_Seq_Flag === 'N' || TXT_Seq_Format) &&
        (Check_Seq_Flag === 'N' || TXT_Seq_Start) &&
        (Check_Seq_Flag === 'N' || TXT_Seq_End) &&
        UserLogin
      ) {
        try {
          const response = await axios.post(baseURL + "/insSheet_Master", {
            sht_code: TXT_SHT_Code,
            sht_name: TXT_SHT_Name,
            plant_flag: Check_Plant_Flag,
            plant_code: Check_Plant_Flag === 'N' ? null : TXT_Plant_Code,
            plant_start_digit: Check_Plant_Flag === 'N' ? null : TXT_Plant_Start,
            plant_end_digit: Check_Plant_Flag === 'N' ? null : TXT_Plant_End,
            lot_flag: Check_Lot_Flag,
            lot_start_digit: Check_Lot_Flag === 'N' ? null : TXT_Lot_Start,
            lot_end_digit: Check_Lot_Flag === 'N' ? null : TXT_Lot_End,
            model_flag: Check_Model_Flag,
            model_start_digit: Check_Model_Flag === 'N' ? null : TXT_Model_Start,
            model_end_digit: Check_Model_Flag === 'N' ? null : TXT_Model_End,
            seq_flag: Check_Seq_Flag,
            seq_format: Check_Seq_Flag === 'N' ? null : TXT_Seq_Format,
            seq_start_digit: Check_Seq_Flag === 'N' ? null : TXT_Seq_Start,
            seq_end_digit: Check_Seq_Flag === 'N' ? null : TXT_Seq_End,
            emp_id: UserLogin,
            ip_address: ipaddress

          });
          console.log("บันทึกข้อมูลสำเร็จ =", response);
          swal("success", "You save data success", "success");
          searchFunction();
          onClose();
        } catch (error) {
          console.error("ไม่สามารถบันนทึกข้อมูลได้:", error);
        }
      } else {
        console.error("ไม่สามารถบันทึกข้อมูลได้: ค่าว่างถูกส่งเข้ามา");
        swal(
          "Unable to save information",
          "Please check the information entered.",
          "error"
        );
      }
    } else {
      console.log("EDIT")
      if (
        TXT_SHT_Code &&
        TXT_SHT_Name &&
        Check_Plant_Flag &&
        (Check_Plant_Flag === 'N' || TXT_Plant_Code) &&
        (Check_Plant_Flag === 'N' || TXT_Plant_Start) &&
        (Check_Plant_Flag === 'N' || TXT_Plant_End) &&
        Check_Lot_Flag &&
        (Check_Lot_Flag === 'N' || TXT_Lot_Start) &&
        (Check_Lot_Flag === 'N' || TXT_Lot_End) &&
        Check_Model_Flag &&
        (Check_Model_Flag === 'N' || TXT_Model_Start) &&
        (Check_Model_Flag === 'N' || TXT_Model_End) &&
        Check_Seq_Flag &&
        (Check_Seq_Flag === 'N' || TXT_Seq_Format) &&
        (Check_Seq_Flag === 'N' || TXT_Seq_Start) &&
        (Check_Seq_Flag === 'N' || TXT_Seq_End)
      ) {

        try {
          const response = await axios.post(baseURL + "/updateSheet_Master", {
            sht_code: TXT_SHT_Code,
            sht_name: TXT_SHT_Name,
            plant_flag: Check_Plant_Flag,
            plant_code: Check_Plant_Flag === 'N' ? null : TXT_Plant_Code,
            plant_start_digit: Check_Plant_Flag === 'N' ? null : TXT_Plant_Start,
            plant_end_digit: Check_Plant_Flag === 'N' ? null : TXT_Plant_End,
            lot_flag: Check_Lot_Flag,
            lot_start_digit: Check_Lot_Flag === 'N' ? null : TXT_Lot_Start,
            lot_end_digit: Check_Lot_Flag === 'N' ? null : TXT_Lot_End,
            model_flag: Check_Model_Flag,
            model_start_digit: Check_Model_Flag === 'N' ? null : TXT_Model_Start,
            model_end_digit: Check_Model_Flag === 'N' ? null : TXT_Model_End,
            seq_flag: Check_Seq_Flag,
            seq_format: Check_Seq_Flag === 'N' ? null : TXT_Seq_Format,
            seq_start_digit: Check_Seq_Flag === 'N' ? null : TXT_Seq_Start,
            seq_end_digit: Check_Seq_Flag === 'N' ? null : TXT_Seq_End,
            emp_id: UserLogin,
            ip_address: ipaddress

          });
          console.log("/////", Check_Plant_Flag)
          console.log("แก้ไขข้อมูลสำเร็จ =", response);
          swal("success", "You edit data success", "success");
          searchFunction();
          onClose();
        } catch (error) {
          console.error("ไม่สามารถบันนทึกข้อมูลได้:", error);
        }
      } else {
        console.error("ไม่สามารถบันทึกข้อมูลได้: ค่าว่างถูกส่งเข้ามา");
        swal(
          "Unable to save information",
          "Please check the information entered.",
          "error"
        );
      }
    }
  };


  const Clear = () => {
    if (STATUS_P === "NEW") {
      setTXT_SHT_Code("");
      setTXT_SHT_Name("");
      setCheck_Plant_Flag("");
      setTXT_Plant_Code("");
      setTXT_Plant_Start("");
      setTXT_Plant_End("")
      setCheck_Lot_Flag("");
      setTXT_Lot_Start("");
      setTXT_Lot_End("");
      setCheck_Model_Flag("");
      setTXT_Model_Start("");
      setTXT_Model_End("");
      setCheck_Seq_Flag("");
      setTXT_Seq_Format("");
      setTXT_Seq_Start("");
      setTXT_Seq_End("")

    }
  };

  return (
    <div className="popup">
      <div className="popupcontect"
        style={{ overflowY: 'auto', maxHeight: '80vh' }}>
        <Card className="StructurePopup">
          <CardContent>
            <Typography className="HeadPopup"
              sx={{ fontSize: 20 }}>
              Sheet Structure Master
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1, marginBottom: "10px" }}>
            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  SHT Code :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtSHTCode"
                  variant="outlined"
                  size="small"
                  value={TXT_SHT_Code}
                  onChange={handleKEY_SHT_Code}
                  style={{ width: "71%" }}
                  error={ERROR_SHT_Code}
                  disabled={STATUS_P === 'EDIT' || STATUS_P === 'NEW'}
                />
              </Grid>
            </Grid>
            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {ERROR_SHT_Code ? "Please input SHT Code" : null}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  SHT Name :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtSHTName"
                  variant="outlined"
                  size="small"
                  style={{ width: "238%" }}
                  value={TXT_SHT_Name}
                  onChange={handleKEY_SHT_Name}
                  error={ERROR_SHT_Name}
                />
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "238%" }}>
                  {ERROR_SHT_Name ? "Please input SHT Name" : null}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  Plant Flag :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <Checkbox
                  style={{ padding: "0" }}
                  checked={isPlantChecked}
                  onChange={(e) => {
                    setIsPlantChecked(e.target.checked);
                    console.log(e.target.checked);
                  }}
                />
              </Grid>
              <Grid item xs={2.4}>
                <Typography
                  style={{
                    display: (
                      isPlantChecked)
                  }}
                >
                  Plant Code :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtPlantCode"
                  variant="outlined"
                  size="small"
                  style={{
                    width: "71%",
                    display: (
                      isPlantChecked)
                  }}
                  value={TXT_Plant_Code}
                  onChange={handleKEY_Plant_Code}
                  error={isPlantChecked && ERROR_Plant_Code}
                  disabled={!isPlantChecked}
                />
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}></Grid>
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isPlantChecked && ERROR_Plant_Code ?
                    "Please input Plant Code" : null}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  Plant Start Digit :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtPStartDigit"
                  variant="outlined"
                  size="small"
                  style={{
                    width: "71%",
                    display: (isPlantChecked)
                  }}
                  value={TXT_Plant_Start}
                  onChange={handleKEY_Plant_St}
                  error={isPlantChecked && ERROR_Plant_St}
                  disabled={!isPlantChecked}
                />
              </Grid>
              <Grid item xs={2.4}>
                <Typography>
                  Plant End Digit :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtPEndDigit"
                  variant="outlined"
                  size="small"
                  style={{
                    width: "71%",
                    display: (isPlantChecked)
                  }}
                  value={TXT_Plant_End}
                  onChange={handleKEY_Plant_End}
                  error={isPlantChecked && ERROR_Plant_End}
                  disabled={!isPlantChecked}
                />
              </Grid>
            </Grid>


            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isPlantChecked && ERROR_Plant_St ?
                    "Please input Plant Start Digit and Number Only." : null}
                </Typography>
              </Grid>
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isPlantChecked && ERROR_Plant_End ?
                    "Please input Plant End Digit and Number Only." : null}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  Lot Flag :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <Checkbox
                  style={{ padding: "0" }}
                  checked={isLotChecked}
                  onChange={(e) => setIsLotChecked(e.target.checked)}
                />
              </Grid>
            </Grid>


            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  Lot Start Digit :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtLStartDigit"
                  variant="outlined"
                  size="small"
                  style={{
                    width: "71%",
                    display: (isLotChecked)
                  }}
                  value={TXT_Lot_Start}
                  onChange={handleKEY_Lot_St}
                  error={isLotChecked && ERROR_Lot_St}
                  disabled={!isLotChecked}
                />
              </Grid>
              <Grid item xs={2.4}>
                <Typography>
                  Lot End Digit :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtLEndDigit"
                  variant="outlined"
                  size="small"
                  style={{
                    width: "71%",
                    display: (isLotChecked)
                  }}
                  value={TXT_Lot_End}
                  onChange={handleKEY_Lot_End}
                  error={isLotChecked && ERROR_Lot_End}
                  disabled={!isLotChecked}
                />
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isLotChecked && ERROR_Lot_St ?
                    "Please input Lot Start Digit and Number Only." : null}
                </Typography>
              </Grid>
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isLotChecked && ERROR_Lot_End ?
                    "Please input Lot End Digit and Number Only." : null}
                </Typography>
              </Grid>
            </Grid>


            <Grid container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  Model Flag :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <Checkbox
                  style={{ padding: "0" }}
                  checked={isModelChecked}
                  onChange={(e) => setIsModelChecked(e.target.checked)}
                />
              </Grid>
            </Grid>


            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  Model Start Digit :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtMStartDigit"
                  variant="outlined"
                  size="small"
                  style={{
                    width: "71%",
                    display: (isModelChecked)
                  }}
                  value={TXT_Model_Start}
                  onChange={handleKEY_Model_St}
                  error={isModelChecked && ERROR_Model_St}
                  disabled={!isModelChecked}
                />
              </Grid>
              <Grid item xs={2.4}>
                <Typography>
                  Model End Digit :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtMEndDigit"
                  variant="outlined"
                  size="small"
                  style={{
                    width: "71%",
                    display: (isModelChecked)
                  }}
                  value={TXT_Model_End}
                  onChange={handleKEY_Model_End}
                  error={isModelChecked && ERROR_Model_End}
                  disabled={!isModelChecked}
                />
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isModelChecked && ERROR_Model_St ?
                    "Please input Model Start Digit and Number Only." : null}
                </Typography>
              </Grid>
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isModelChecked && ERROR_Model_End ?
                    "Please input Model End Digit and Number Only." : null}
                </Typography>
              </Grid>
            </Grid>


            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  Seq Flag :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <Checkbox
                  style={{ padding: "0" }}
                  checked={isSeqChecked}
                  onChange={(e) => setIsSeqChecked(e.target.checked)}
                />
              </Grid>
              <Grid item xs={2.4}>
                <Typography
                  style={{
                    display: (isSeqChecked)
                  }}>
                  Seq Format :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtSeqFormat"
                  variant="outlined"
                  size="small"
                  style={{
                    width: "71%",
                    display: (isSeqChecked)
                  }}
                  value={TXT_Seq_Format}
                  onChange={handleKEY_Seq_For}
                  error={isSeqChecked && ERROR_Seq_For}
                  disabled={!isSeqChecked}
                />
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}></Grid>
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isSeqChecked && ERROR_Seq_For ?
                    "Please input Seq Format." : null}
                </Typography>
              </Grid>
            </Grid>


            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}>
                <Typography>
                  Seq Start Digit :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtSeqStartDigit"
                  variant="outlined"
                  size="small"
                  style={{ width: "71%" }}
                  value={TXT_Seq_Start}
                  onChange={handleKEY_Seq_St}
                  error={isSeqChecked && ERROR_Seq_St}
                  disabled={!isSeqChecked}
                />
              </Grid>
              <Grid item xs={2.4}>
                <Typography>
                  Seq End Digit :
                </Typography>
              </Grid>
              <Grid item xs={3.6}>
                <TextField
                  id="txtSeqEndDigit"
                  variant="outlined"
                  size="small"
                  style={{ width: "71%" }}
                  value={TXT_Seq_End}
                  onChange={handleKEY_Seq_End}
                  error={isSeqChecked && ERROR_Seq_End}
                  disabled={!isSeqChecked}
                />
              </Grid>
            </Grid>

            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isSeqChecked && ERROR_Seq_St ?
                    "Please input Seq Start Digit and Number Only." : null}
                </Typography>
              </Grid>
              <Grid item xs={2.4}></Grid>
              <Grid item xs={3.6}>
                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                  {isSeqChecked && ERROR_Seq_End ?
                    "Please input Seq End Digit and Number Only." : null}
                </Typography>
              </Grid>
            </Grid>


            <Grid
              container
              className="gridContainer"
              spacing={0}
            >
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{
                    width: "80%",
                    marginTop: "7%",
                  }}
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{
                    width: "80%",
                    marginTop: "7%",
                  }}
                  color="error"
                  onClick={() => {
                    Clear();
                    onClose();
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </div>
    </div>
  )
}

export default Popup;