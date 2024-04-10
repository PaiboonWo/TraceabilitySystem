import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePopupFunctions, getBaseURL } from "../Common/function_Common";

function SerialMasterPage() {

    const{ baseURL } = getBaseURL();

    const [ShowData, setShowData] = useState([]);
    const [checkHead, setCheckHead] = useState("hidden"); //ตัวแปรเช็คค่าของ ตาราง
    const [checkEmpty, setCheckEmpty] = useState("hidden"); // ตัวแปรเช็คค่าว่าง
    const [checkData, setCheckData] = useState("visible"); // ตัวแปร datashow warning
  
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
  
    const [TEXT_Code, setTEXT_Code] = useState("");
  
    const Search = async () => {
      console.log(code, name, "......")
      try {
        const response = await axios.post(baseURL + "/Search/Serial", {
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
  
    const { OpenPopup, PopupOpen, PopupClose, New } = usePopupFunctions();
    
  
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
      setTEXT_Code(item.tssm_sn_struc_code);
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
          const snCodeToDelete = item.tssm_sn_struc_code;
          console.log("//////////",item.tssm_sn_struc_code)
          try {
            const response = await axios.post(baseURL + "/delSerial_Master", {
               sn_code: snCodeToDelete
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
    return{
        ShowData, checkHead, checkEmpty, checkData, code, name,
        TEXT_Code, Search, handleCode, handleName, OpenPopup,
        PopupOpen, PopupClose, New, Clear, selectedRowData, OpenEdit,
        handleOpenDelete,
    }
}

export{SerialMasterPage};