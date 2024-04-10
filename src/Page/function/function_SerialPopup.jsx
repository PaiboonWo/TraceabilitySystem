import React, { useState, useEffect } from "react";
import axios from "axios";
import { getBaseURL, useIPAddress } from "../Common/function_Common";
import swal from "sweetalert";

function PopupSerialMaster(onClose, item, searchFunction) {
    const { baseURL } = getBaseURL();
    const STATUS_P = localStorage.getItem("STATUS");
    //console.log("สถานะ", STATUS_P);v

    const UserLogin = localStorage.getItem("IDCode");
    const [user_id, setuser_id] = useState("");
    const { ipaddress, setipaddress } = useIPAddress();

    const [isPlantChecked, setIsPlantChecked] = useState(false);
    const [isWeekChecked, setIsWeekChecked] = useState(false);
    const [isWeekConChecked, setIsWeekConChecked] = useState(false);
    const [isSeqChecked, setIsSeqChecked] = useState(false);
    const [isSeqConChecked, setIsSeqConChecked] = useState(false);
    const [isEngChecked, setIsEngChecked] = useState(false);
    const [isRevChecked, setIsRevChecked] = useState(false);
    const [isCheckSumChecked, setIsCheckSum] = useState(false);
    const [isConfigChecked, setIsConfig] = useState(false);


    //Seterror
    const [ERROR_SN_Code, setERROR_SN_Code] = useState(false);
    const [ERROR_SN_Name, setERROR_SN_Name] = useState(false);
    const [ERROR_SN_UpCount, setERROR_SN_UpCount] = useState(false);
    const [ERROR_SN_Length, setERROR_SN_Length] = useState(false);
    const [ERROR_Plant_Code, setERROR_Plant_Code] = useState(false);
    const [ERROR_Plant_St, setERROR_Plant_St] = useState(false);
    const [ERROR_Plant_End, setERROR_Plant_End] = useState(false);
    const [ERROR_Week_Code, setERROR_Week_Code] = useState(false);
    const [ERROR_Week_St, setERROR_Week_St] = useState(false);
    const [ERROR_Week_End, setERROR_Week_End] = useState(false);
    const [ERROR_Week_Con, setERROR_Week_Con] = useState(false);
    const [ERROR_Seq_For, setERROR_Seq_For] = useState(false);
    const [ERROR_Seq_St, setERROR_Seq_St] = useState(false);
    const [ERROR_Seq_End, setERROR_Seq_End] = useState(false);
    const [ERROR_Seq_Con, setERROR_Seq_Con] = useState(false);
    const [ERROR_Eng_St, setERROR_Eng_St] = useState(false);
    const [ERROR_Eng_End, setERROR_Eng_End] = useState(false);
    const [ERROR_Rev_St, setERROR_Rev_St] = useState(false);
    const [ERROR_Rev_End, setERROR_Rev_End] = useState(false);
    const [ERROR_CheckSum_St, setERROR_CheckSum_St] = useState(false);
    const [ERROR_CheckSum_End, setERROR_CheckSum_End] = useState(false);
    const [ERROR_Config_St, setERROR_Config_St] = useState(false);
    const [ERROR_Config_End, setERROR_Config_End] = useState(false);

    const [TXT_SN_Code, setTXT_SN_Code] = useState("");
    const [TXT_SN_Name, setTXT_SN_Name] = useState("");
    const [TXT_SN_UpCount, setTXT_SN_UpCount] = useState("");
    const [TXT_SN_Length, setTXT_SN_Length] = useState("");

    //Plant
    const [Check_Plant_Flag, setCheck_Plant_Flag] = useState("");
    const [TXT_Plant_Code, setTXT_Plant_Code] = useState("");
    const [TXT_Plant_Start, setTXT_Plant_Start] = useState("");
    const [TXT_Plant_End, setTXT_Plant_End] = useState("");
    //Week
    const [Check_Week_Flag, setCheck_Week_Flag] = useState("");
    const [TXT_Week_Code, setTXT_Week_Code] = useState("");
    const [TXT_Week_Start, setTXT_Week_Start] = useState("");
    const [TXT_Week_End, setTXT_Week_End] = useState("");
    //weekConvert
    const [Check_Week_Con, setCheck_Week_Con] = useState("");
    const [Cb_Week_Con, setCb_Week_Con] = useState('');
    //Seq
    const [Check_Seq_Flag, setCheck_Seq_Flag] = useState("");
    const [TXT_Seq_Format, setTXT_Seq_Format] = useState("");
    const [TXT_Seq_Start, setTXT_Seq_Start] = useState("");
    const [TXT_Seq_End, setTXT_Seq_End] = useState("");
    //SeqConvert
    const [Check_Seq_Con, setCheck_Seq_Con] = useState("");
    const [Cb_Seq_Con, setCb_Seq_Con] = useState('');
    //Eng
    const [Check_Eng_Flag, setCheck_Eng_Flag] = useState("");
    const [TXT_Eng_Start, setTXT_Eng_Start] = useState("");
    const [TXT_Eng_End, setTXT_Eng_End] = useState("");
    //Rev
    const [Check_Rev_Flag, setCheck_Rev_Flag] = useState("");
    const [TXT_Rev_Start, setTXT_Rev_Start] = useState("");
    const [TXT_Rev_End, setTXT_Rev_End] = useState("");
    //CheckSum
    const [Check_CheckSum_Flag, setCheck_CheckSum_Flag] = useState("");
    const [TXT_CheckSum_Start, setTXT_CheckSum_Start] = useState("");
    const [TXT_CheckSum_End, setTXT_CheckSum_End] = useState("");
    //Config
    const [Check_Config_Flag, setCheck_Config_Flag] = useState("");
    const [TXT_Config_Start, setTXT_Config_Start] = useState("");
    const [TXT_Config_End, setTXT_Config_End] = useState("");

    //Formatdate
    const [currentDate, setCurrentDate] = useState(new Date());
    const [Date_show, setDate_show] = useState("");


    useEffect(() => {
        if (STATUS_P === "NEW") {
            const fetchData = async () => {
                try {
                    const response = await axios.post(baseURL + "/CheckrunCode", {});
                    const data = response.data;
                    const new_run_seq = data[0].f_runniung; // Adjust the key according to your response
                    setTXT_SN_Code(new_run_seq);
                } catch (error) {
                    console.error('Error fetching or updating running number:', error);
                    setTXT_SN_Code('00000');
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
            setTXT_SN_Code("");
            setTXT_SN_Name("");
            setTXT_SN_UpCount("");
            setTXT_SN_Length("");
            setCheck_Plant_Flag("");
            setTXT_Plant_Code("");
            setTXT_Plant_Start("");
            setTXT_Plant_End("");
            setCheck_Week_Flag("");
            setTXT_Week_Code("");
            setTXT_Week_Start("");
            setTXT_Week_End("");
            setCheck_Week_Con("");
            setCb_Week_Con('');
            setCheck_Seq_Flag("");
            setTXT_Seq_Format("");
            setTXT_Seq_Start("");
            setTXT_Seq_End("");
            setCheck_Seq_Con("");
            setCb_Seq_Con('');
            setCheck_Eng_Flag("");
            setTXT_Eng_Start("");
            setTXT_Eng_End("");
            setCheck_Rev_Flag("");
            setTXT_Rev_Start("");
            setTXT_Rev_End("");
            setCheck_CheckSum_Flag("");
            setTXT_CheckSum_Start("");
            setTXT_CheckSum_End("");
            setCheck_CheckSum_Flag("");
            setTXT_CheckSum_Start("");
            setTXT_CheckSum_End("");
            setCheck_Config_Flag("");
            setTXT_Config_Start("");
            setTXT_Config_End("");
            setuser_id(UserLogin);
            setipaddress(ipaddress);
        } else {
            console.log("CASE EDIT", item);
            setTXT_SN_Code(item.tssm_sn_struc_code);
            setTXT_SN_Name(item.tssm_sn_struc_name);
            setTXT_SN_UpCount(item.tssm_sn_struc_upcount);
            setTXT_SN_Length(item.tssm_sn_length);
            setCheck_Plant_Flag(item.tssm_plant_flag);
            setTXT_Plant_Code(item.tssm_plant_code);
            setTXT_Plant_Start(item.tssm_plant_start_digit);
            setTXT_Plant_End(item.tssm_plant_end_digit);
            setCheck_Week_Flag(item.tssm_week_flag);
            setTXT_Week_Code(item.tssm_week_code);
            setTXT_Week_Start(item.tssm_week_start_digit);
            setTXT_Week_End(item.tssm_week_end_digit);
            setCheck_Week_Con(item.tssm_week_convert);
            setCb_Week_Con(item.tssm_week_convert_base);
            setCheck_Seq_Flag(item.tssm_seq_flag);
            setTXT_Seq_Format(item.tssm_seq_format);
            setTXT_Seq_Start(item.tssm_seq_start_digit);
            setTXT_Seq_End(item.tssm_seq_end_digit);
            setCheck_Seq_Con(item.tssm_seq_convert);
            setCb_Seq_Con(item.tssm_seq_convert_base);
            setCheck_Eng_Flag(item.tssm_eng_flag);
            setTXT_Eng_Start(item.tssm_eng_start_digit);
            setTXT_Eng_End(item.tssm_eng_end_digit);
            setCheck_Rev_Flag(item.tssm_rev_flag);
            setTXT_Rev_Start(item.tssm_rev_start_digit);
            setTXT_Rev_End(item.tssm_rev_end_digit);
            setCheck_CheckSum_Flag(item.tssm_checksum_flag);
            setTXT_CheckSum_Start(item.tssm_checksum_start_digit);
            setTXT_CheckSum_End(item.tssm_checksum_end_digit);
            setCheck_Config_Flag(item.tssm_config_flag);
            setTXT_Config_Start(item.tssm_config_start_digit);
            setTXT_Config_End(item.tssm_config_end_digit);
            setuser_id(item.tssm_modified_by);
            setipaddress(item.tssm_modified_ip);
        }

    }, []);

    const handleKEY_SN_Code = (event) => {
        const TXT_SN_Code = event.target.value;
        // console.log(TXT_SN_Code, "ดูค่า");
        setTXT_SN_Code(TXT_SN_Code);
        setERROR_SN_Code(false);
    };

    const handleKEY_SN_Name = (event) => {
        const TXT_SN_Name = event.target.value;
        setTXT_SN_Name(TXT_SN_Name);
        setERROR_SN_Name(false);
    };

    const handleKEY_SN_UpCount = (event) => {
        const TXT_SN_UpCount = event.target.value;
        setTXT_SN_UpCount(TXT_SN_UpCount);
        setERROR_SN_UpCount(false);
    };

    const handleKEY_SN_Length = (event) => {
        const TXT_SN_Length = event.target.value;
        setTXT_SN_Length(TXT_SN_Length);
        setERROR_SN_Length(false);
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

    const handleKEY_Week_Code = (event) => {
        const TXT_Week_Code = event.target.value;
        setTXT_Week_Code(TXT_Week_Code);
        setERROR_Week_Code(false);
    };

    const handleKEY_Week_St = (event) => {
        const TXT_Week_Start = event.target.value;
        setTXT_Week_Start(TXT_Week_Start);
        setERROR_Week_St(false);
    };

    const handleKEY_Week_End = (event) => {
        const TXT_Week_End = event.target.value;
        setTXT_Week_End(TXT_Week_End);
        setERROR_Week_End(false);
    };

    const handleKEY_Week_Con = (event) => {
        const Cb_Week_Con = event.target.value;
        setCb_Week_Con(Cb_Week_Con);
        setERROR_Week_Con(false);
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

    const handleKEY_Seq_Con = (event) => {
        const Cb_Seq_Con = event.target.value;
        setCb_Seq_Con(Cb_Seq_Con);
        setERROR_Seq_Con(false);
    };


    const handleKEY_Eng_St = (event) => {
        const TXT_Eng_Start = event.target.value;
        setTXT_Eng_Start(TXT_Eng_Start);
        setERROR_Eng_St(false);
    };

    const handleKEY_Eng_End = (event) => {
        const TXT_Eng_End = event.target.value;
        setTXT_Eng_End(TXT_Eng_End);
        setERROR_Eng_End(false);
    };

    const handleKEY_Rev_St = (event) => {
        const TXT_Rev_Start = event.target.value;
        setTXT_Rev_Start(TXT_Rev_Start);
        setERROR_Rev_St(false);
    };

    const handleKEY_Rev_End = (event) => {
        const TXT_Rev_End = event.target.value;
        setTXT_Rev_End(TXT_Rev_End);
        setERROR_Rev_End(false);
    };

    const handleKEY_CheckSum_St = (event) => {
        const TXT_CheckSum_Start = event.target.value;
        setTXT_CheckSum_Start(TXT_CheckSum_Start);
        setERROR_CheckSum_St(false);
    };

    const handleKEY_CheckSum_End = (event) => {
        const TXT_CheckSum_End = event.target.value;
        setTXT_CheckSum_End(TXT_CheckSum_End);
        setERROR_CheckSum_End(false);
    };

    const handleKEY_Config_St = (event) => {
        const TXT_Config_Start = event.target.value;
        setTXT_Config_Start(TXT_Config_Start);
        setERROR_Config_St(false);
    };

    const handleKEY_Config_End = (event) => {
        const TXT_Config_End = event.target.value;
        setTXT_Config_End(TXT_Config_End);
        setERROR_Config_End(false);
    };



    useEffect(() => {
        if (STATUS_P === "EDIT") {

            if (Check_Plant_Flag === "Y") {
                setIsPlantChecked(true);
            }
            if (Check_Week_Flag === "Y") {
                setIsWeekChecked(true);
            }
            if (Check_Week_Con === "Y") {
                setIsWeekConChecked(true);
            }
            if (Check_Seq_Flag === "Y") {
                setIsSeqChecked(true);
            }
            if (Check_Seq_Con === "Y") {
                setIsSeqConChecked(true);
            }
            if (Check_Eng_Flag === "Y") {
                setIsEngChecked(true);
            }
            if (Check_Rev_Flag === "Y") {
                setIsRevChecked(true);
            }
            if (Check_CheckSum_Flag === "Y") {
                setIsCheckSum(true);
            }
            if (Check_Config_Flag === "Y") {
                setIsConfig(true);
            }

        }
    }, [STATUS_P, Check_Plant_Flag]);


    const handleSaveClick = async () => {
        if (TXT_SN_Code === "") {
            setERROR_SN_Code(true);
        }
        if (TXT_SN_Name === "") {
            setERROR_SN_Name(true);
        }
        if (isNaN(TXT_SN_UpCount) || TXT_SN_UpCount === "") {
            setERROR_SN_UpCount(true);
        }
        if (isNaN(TXT_SN_Length) || TXT_SN_Length === "") {
            setERROR_SN_Length(true);
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
        if (TXT_Week_Code === "") {
            setERROR_Week_Code(true);
        }
        if (isNaN(TXT_Week_Start) || TXT_Week_Start === "") {
            setERROR_Week_St(true);
        }
        if (isNaN(TXT_Week_End) || TXT_Week_End === "") {
            setERROR_Week_End(true);
        }
        if (!Cb_Week_Con) {
            setERROR_Week_Con(true);
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
        if (!Cb_Seq_Con) {
            setERROR_Seq_Con(true);
        }
        if (isNaN(TXT_Eng_Start) || TXT_Eng_Start === "") {
            setERROR_Eng_St(true);
        }
        if (isNaN(TXT_Eng_End) || TXT_Eng_End === "") {
            setERROR_Eng_End(true);
        }
        if (isNaN(TXT_Rev_Start) || TXT_Rev_Start === "") {
            setERROR_Rev_St(true);
        }
        if (isNaN(TXT_Rev_End) || TXT_Rev_End === "") {
            setERROR_Rev_End(true);
        }
        if (isNaN(TXT_CheckSum_Start) || TXT_CheckSum_Start === "") {
            setERROR_CheckSum_St(true);
        }
        if (isNaN(TXT_CheckSum_End) || TXT_CheckSum_End === "") {
            setERROR_CheckSum_End(true);
        }
        if (isNaN(TXT_Config_Start) || TXT_Config_Start === "") {
            setERROR_Config_St(true);
        }
        if (isNaN(TXT_Config_End) || TXT_Config_End === "") {
            setERROR_Config_End(true);
        }


        let Check_Plant_Flag = isPlantChecked ? 'Y' : 'N';
        let Check_Week_Flag = isWeekChecked ? 'Y' : 'N';
        let Check_Week_Con = isWeekConChecked ? 'Y' : 'N';
        let Check_Seq_Flag = isSeqChecked ? 'Y' : 'N';
        let Check_Seq_Con = isSeqConChecked ? 'Y' : 'N';
        let Check_Eng_Flag = isEngChecked ? 'Y' : 'N';
        let Check_Rev_Flag = isRevChecked ? 'Y' : 'N';
        let Check_CheckSum_Flag = isCheckSumChecked ? 'Y' : 'N';
        let Check_Config_Flag = isConfigChecked ? 'Y' : 'N';


        if (STATUS_P === "NEW") {
            console.log("NEW")

            if (
                TXT_SN_Code &&
                TXT_SN_Name &&
                TXT_SN_UpCount &&
                TXT_SN_Length &&
                Check_Plant_Flag &&
                (Check_Plant_Flag === 'N' || TXT_Plant_Code) &&
                (Check_Plant_Flag === 'N' || TXT_Plant_Start) &&
                (Check_Plant_Flag === 'N' || TXT_Plant_End) &&
                Check_Week_Flag &&
                (Check_Week_Flag === 'N' || TXT_Week_Start) &&
                (Check_Week_Flag === 'N' || TXT_Week_End) &&
                Check_Week_Con &&
                (Check_Week_Con === 'N' || Cb_Week_Con) &&
                Check_Seq_Flag &&
                (Check_Seq_Flag === 'N' || TXT_Seq_Format) &&
                (Check_Seq_Flag === 'N' || TXT_Seq_Start) &&
                (Check_Seq_Flag === 'N' || TXT_Seq_End) &&
                Check_Seq_Con &&
                (Check_Seq_Con === 'N' || Cb_Seq_Con) &&
                Check_Eng_Flag &&
                (Check_Eng_Flag === 'N' || TXT_Eng_Start) &&
                (Check_Eng_Flag === 'N' || TXT_Eng_End) &&
                Check_Rev_Flag &&
                (Check_Rev_Flag === 'N' || TXT_Rev_Start) &&
                (Check_Rev_Flag === 'N' || TXT_Rev_End) &&
                Check_CheckSum_Flag &&
                (Check_CheckSum_Flag === 'N' || TXT_CheckSum_Start) &&
                (Check_CheckSum_Flag === 'N' || TXT_CheckSum_End) &&
                Check_Config_Flag &&
                (Check_Config_Flag === 'N' || TXT_Config_Start) &&
                (Check_Config_Flag === 'N' || TXT_Config_End) &&

                UserLogin
            ) {
                try {
                    const response = await axios.post(baseURL + "/insSerial_Master", {
                        sn_code: TXT_SN_Code,
                        sn_name: TXT_SN_Name,
                        sn_upcount: TXT_SN_UpCount,
                        sn_length: TXT_SN_Length,
                        plant_flag: Check_Plant_Flag,
                        plant_code: Check_Plant_Flag === 'N' ? null : TXT_Plant_Code,
                        plant_start_digit: Check_Plant_Flag === 'N' ? null : TXT_Plant_Start,
                        plant_end_digit: Check_Plant_Flag === 'N' ? null : TXT_Plant_End,
                        week_flag: Check_Week_Flag,
                        week_code: Check_Week_Flag === 'N' ? null : TXT_Week_Code,
                        week_start_digit: Check_Week_Flag === 'N' ? null : TXT_Week_Start,
                        week_end_digit: Check_Week_Flag === 'N' ? null : TXT_Week_End,
                        week_convert: Check_Week_Con,
                        week_convert_base: Check_Week_Con === 'N' ? null : Cb_Week_Con,
                        seq_flag: Check_Seq_Flag,
                        seq_format: Check_Seq_Flag === 'N' ? null : TXT_Seq_Format,
                        seq_start_digit: Check_Seq_Flag === 'N' ? null : TXT_Seq_Start,
                        seq_end_digit: Check_Seq_Flag === 'N' ? null : TXT_Seq_End,
                        seq_convert: Check_Seq_Con,
                        seq_convert_base: Check_Seq_Con === 'N' ? null : Cb_Seq_Con,
                        eng_flag: Check_Eng_Flag,
                        eng_start_digit: Check_Eng_Flag === 'N' ? null : TXT_Eng_Start,
                        eng_end_digit: Check_Eng_Flag === 'N' ? null : TXT_Eng_End,
                        rev_flag: Check_Rev_Flag,
                        rev_start_digit: Check_Rev_Flag === 'N' ? null : TXT_Rev_Start,
                        rev_end_digit: Check_Rev_Flag === 'N' ? null : TXT_Rev_End,
                        checksum_flag: Check_CheckSum_Flag,
                        checksum_start_digit: Check_CheckSum_Flag === 'N' ? null : TXT_CheckSum_Start,
                        checksum_end_digit: Check_CheckSum_Flag === 'N' ? null : TXT_CheckSum_End,
                        config_flag: Check_Config_Flag,
                        config_start_digit: Check_Config_Flag === 'N' ? null : TXT_Config_Start,
                        config_end_digit: Check_Config_Flag === 'N' ? null : TXT_Config_End,
                        emp_id: UserLogin,
                        ip_address: ipaddress

                    });
                    console.log("บันทึกข้อมูลสำเร็จ =", response);
                    swal("success", "You save data success", "success");
                    searchFunction();
                    onClose();
                } catch (error) {
                    console.error("ไม่สามารถบันทึกข้อมูลได้:", error);
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
                TXT_SN_Code &&
                TXT_SN_Name &&
                TXT_SN_UpCount &&
                TXT_SN_Length &&
                Check_Plant_Flag &&
                (Check_Plant_Flag === 'N' || TXT_Plant_Code) &&
                (Check_Plant_Flag === 'N' || TXT_Plant_Start) &&
                (Check_Plant_Flag === 'N' || TXT_Plant_End) &&
                Check_Week_Flag &&
                (Check_Week_Flag === 'N' || TXT_Week_Start) &&
                (Check_Week_Flag === 'N' || TXT_Week_End) &&
                Check_Week_Con &&
                (Check_Week_Con === 'N' || Cb_Week_Con) &&
                Check_Seq_Flag &&
                (Check_Seq_Flag === 'N' || TXT_Seq_Format) &&
                (Check_Seq_Flag === 'N' || TXT_Seq_Start) &&
                (Check_Seq_Flag === 'N' || TXT_Seq_End) &&
                Check_Seq_Con &&
                (Check_Seq_Con === 'N' || Cb_Seq_Con) &&
                Check_Eng_Flag &&
                (Check_Eng_Flag === 'N' || TXT_Eng_Start) &&
                (Check_Eng_Flag === 'N' || TXT_Eng_End) &&
                Check_Rev_Flag &&
                (Check_Rev_Flag === 'N' || TXT_Rev_Start) &&
                (Check_Rev_Flag === 'N' || TXT_Rev_End) &&
                Check_CheckSum_Flag &&
                (Check_CheckSum_Flag === 'N' || TXT_CheckSum_Start) &&
                (Check_CheckSum_Flag === 'N' || TXT_CheckSum_End) &&
                Check_Config_Flag &&
                (Check_Config_Flag === 'N' || TXT_Config_Start) &&
                (Check_Config_Flag === 'N' || TXT_Config_End) &&
                UserLogin &&
                ipaddress
            ) {

                try {
                    const response = await axios.post(baseURL + "/updateSerial_Master", {
                        sn_code: TXT_SN_Code,
                        sn_name: TXT_SN_Name,
                        sn_upcount: TXT_SN_UpCount,
                        sn_length: TXT_SN_Length,
                        plant_flag: Check_Plant_Flag,
                        plant_code: Check_Plant_Flag === 'N' ? null : TXT_Plant_Code,
                        plant_start_digit: Check_Plant_Flag === 'N' ? null : TXT_Plant_Start,
                        plant_end_digit: Check_Plant_Flag === 'N' ? null : TXT_Plant_End,
                        week_flag: Check_Week_Flag,
                        week_code: Check_Week_Flag === 'N' ? null : TXT_Week_Code,
                        week_start_digit: Check_Week_Flag === 'N' ? null : TXT_Week_Start,
                        week_end_digit: Check_Week_Flag === 'N' ? null : TXT_Week_End,
                        week_convert: Check_Week_Con,
                        week_convert_base: Check_Week_Con === 'N' ? null : Cb_Week_Con,
                        seq_flag: Check_Seq_Flag,
                        seq_format: Check_Seq_Flag === 'N' ? null : TXT_Seq_Format,
                        seq_start_digit: Check_Seq_Flag === 'N' ? null : TXT_Seq_Start,
                        seq_end_digit: Check_Seq_Flag === 'N' ? null : TXT_Seq_End,
                        seq_convert: Check_Seq_Con,
                        seq_convert_base: Check_Seq_Con === 'N' ? null : Cb_Seq_Con,
                        eng_flag: Check_Eng_Flag,
                        eng_start_digit: Check_Eng_Flag === 'N' ? null : TXT_Eng_Start,
                        eng_end_digit: Check_Eng_Flag === 'N' ? null : TXT_Eng_End,
                        rev_flag: Check_Rev_Flag,
                        rev_start_digit: Check_Rev_Flag === 'N' ? null : TXT_Rev_Start,
                        rev_end_digit: Check_Rev_Flag === 'N' ? null : TXT_Rev_End,
                        checksum_flag: Check_CheckSum_Flag,
                        checksum_start_digit: Check_CheckSum_Flag === 'N' ? null : TXT_CheckSum_Start,
                        checksum_end_digit: Check_CheckSum_Flag === 'N' ? null : TXT_CheckSum_End,
                        config_flag: Check_Config_Flag,
                        config_start_digit: Check_Config_Flag === 'N' ? null : TXT_Config_Start,
                        config_end_digit: Check_Config_Flag === 'N' ? null : TXT_Config_End,
                        emp_id: UserLogin,
                        ip_address: ipaddress

                    });
                    console.log("/////", Check_Plant_Flag)
                    console.log("แก้ไขข้อมูลสำเร็จ =", response);
                    swal("success", "You edit data success", "success");
                    searchFunction();
                    onClose();
                } catch (error) {
                    console.error("ไม่สามารถแก้ไขข้อมูลได้:", error);
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
            setTXT_SN_Code("");
            setTXT_SN_Name("");
            setTXT_SN_UpCount("");
            setTXT_SN_Length("");
            setCheck_Plant_Flag("");
            setTXT_Plant_Code("");
            setTXT_Plant_Start("");
            setTXT_Plant_End("");
            setCheck_Week_Flag("");
            setTXT_Week_Code("");
            setTXT_Week_Start("");
            setTXT_Week_End("");
            setCheck_Week_Con("");
            setCb_Week_Con('');
            setCheck_Seq_Flag("");
            setTXT_Seq_Format("");
            setTXT_Seq_Start("");
            setTXT_Seq_End("");
            setCheck_Seq_Con("");
            setCb_Seq_Con('');
            setCheck_Eng_Flag("");
            setTXT_Eng_Start("");
            setTXT_Eng_End("");
            setCheck_Rev_Flag("");
            setTXT_Rev_Start("");
            setTXT_Rev_End("");
            setCheck_CheckSum_Flag("");
            setTXT_CheckSum_Start("");
            setTXT_CheckSum_End("");
            setCheck_CheckSum_Flag("");
            setTXT_CheckSum_Start("");
            setTXT_CheckSum_End("");
            setCheck_Config_Flag("");
            setTXT_Config_Start("");
            setTXT_Config_End("");
        }
    };

    return {
        STATUS_P, ipaddress, isPlantChecked, setIsPlantChecked, isWeekChecked, setIsWeekChecked,
        isWeekConChecked, setIsWeekConChecked, isSeqChecked, setIsSeqChecked,
        isSeqConChecked, setIsSeqConChecked, isEngChecked, setIsEngChecked,
        isRevChecked, setIsRevChecked, isCheckSumChecked, setIsCheckSum, isConfigChecked, setIsConfig,
        ERROR_SN_Code, ERROR_SN_Name, ERROR_SN_UpCount, ERROR_SN_Length,
        ERROR_Plant_Code, ERROR_Plant_St, ERROR_Plant_End, ERROR_Week_Code, ERROR_Week_St, ERROR_Week_End,
        ERROR_Week_Con, ERROR_Seq_For, ERROR_Seq_St, ERROR_Seq_End, ERROR_Seq_Con,
        ERROR_Eng_St, ERROR_Eng_End, ERROR_Rev_St, ERROR_Rev_End,
        ERROR_CheckSum_St, ERROR_CheckSum_End, ERROR_Config_St, ERROR_Config_End,
        TXT_SN_Code, TXT_SN_Name, TXT_SN_UpCount, TXT_SN_Length,
        Check_Plant_Flag, TXT_Plant_Code, TXT_Plant_Start, TXT_Plant_End,
        Check_Week_Flag, TXT_Week_Code, TXT_Week_Start, TXT_Week_End, Check_Week_Con, Cb_Week_Con,
        Check_Seq_Flag, TXT_Seq_Format, TXT_Seq_Start, TXT_Seq_End, Check_Seq_Con, Cb_Seq_Con,
        Check_Eng_Flag, TXT_Eng_Start, TXT_Eng_End, Check_Rev_Flag, TXT_Rev_Start, TXT_Rev_End,
        Check_CheckSum_Flag, TXT_CheckSum_Start, TXT_CheckSum_End,
        Check_Config_Flag, TXT_Config_Start, TXT_Config_End,
        handleKEY_SN_Code, handleKEY_SN_Name, handleKEY_SN_UpCount, handleKEY_SN_Length,
        handleKEY_Plant_Code, handleKEY_Plant_St, handleKEY_Plant_End,
        handleKEY_Week_Code, handleKEY_Week_St, handleKEY_Week_End, handleKEY_Week_Con,
        handleKEY_Seq_For, handleKEY_Seq_St, handleKEY_Seq_End, handleKEY_Seq_Con,
        handleKEY_Eng_St, handleKEY_Eng_End, handleKEY_Rev_St, handleKEY_Rev_End,
        handleKEY_CheckSum_St, handleKEY_CheckSum_End, handleKEY_Config_St,
        handleKEY_Config_End, handleSaveClick, Clear
    }
}
export { PopupSerialMaster };