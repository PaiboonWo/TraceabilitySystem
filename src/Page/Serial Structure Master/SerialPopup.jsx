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
import { PopupSerialMaster } from "../function/function_SerialPopup";

function SerialPopup({ isOpen, onClose, item, searchFunction }) {
    if (!isOpen) {
        return null;
    }

    const { STATUS_P, ipaddress, isPlantChecked, setIsPlantChecked, isWeekChecked, setIsWeekChecked,
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
        Check_Week_Flag, TXT_Week_Start, TXT_Week_Code, TXT_Week_End, Check_Week_Con, Cb_Week_Con,
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
        handleKEY_Config_End, handleSaveClick, Clear, } = PopupSerialMaster(onClose, item, searchFunction);

    return (
        <div className="popup">
            <div className="popupcontect"
                style={{ overflowY: 'auto', maxHeight: '80vh' }}>
                <Card className="StructurePopup">
                    <CardContent>
                        <Typography className="HeadPopup"
                            sx={{ fontSize: 20 }}>
                            Serial Structure Master
                        </Typography>
                    </CardContent>
                    <Box sx={{ flexGrow: 1, marginBottom: "10px" }}>
                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Code :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtSHTCode"
                                    variant="outlined"
                                    size="small"
                                    value={TXT_SN_Code}
                                    onChange={handleKEY_SN_Code}
                                    style={{ width: "71%" }}
                                    error={ERROR_SN_Code}
                                    disabled={STATUS_P === 'EDIT' || STATUS_P === 'NEW'}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {ERROR_SN_Code ? "Please input Code" : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Name :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtSHTName"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: "253%" }}
                                    value={TXT_SN_Name}
                                    onChange={handleKEY_SN_Name}
                                    error={ERROR_SN_Name}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "253%" }}>
                                    {ERROR_SN_Name ? "Please input Name." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Up Count :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtPStartDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: "71%", }}
                                    value={TXT_SN_UpCount}
                                    onChange={handleKEY_SN_UpCount}
                                    error={ERROR_SN_UpCount}
                                />
                            </Grid>
                            <Grid item xs={2.7}>
                                <Typography>
                                    Length :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtPEndDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: "71%", }}
                                    value={TXT_SN_Length}
                                    onChange={handleKEY_SN_Length}
                                    error={ERROR_SN_Length}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {ERROR_SN_UpCount ? "Please input Up Count and Number only." : null}
                                </Typography>
                            </Grid>
                            <Grid item xs={2.7}>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {ERROR_SN_Length ? "Please input Length and Number only." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Plant Flag :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Checkbox
                                    style={{ padding: "0" }}
                                    checked={isPlantChecked}
                                    onChange={(e) => setIsPlantChecked(e.target.checked)}
                                />
                            </Grid>
                            <Grid item xs={2.7}>
                                <Typography>
                                    Plant Code :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtPlantCode"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isPlantChecked ? "inherit" : "#F5F7F8",
                                        display: isPlantChecked
                                    }}
                                    value={isPlantChecked ? TXT_Plant_Code : ''}
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
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}></Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isPlantChecked && ERROR_Plant_Code ?
                                        "Please input Plant Code." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Plant Start Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtPStartDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isPlantChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isPlantChecked ? TXT_Plant_Start : ''}
                                    onChange={handleKEY_Plant_St}
                                    error={isPlantChecked && ERROR_Plant_St}
                                    disabled={!isPlantChecked}
                                />
                            </Grid>
                            <Grid item xs={2.7}>
                                <Typography>
                                    Plant End Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtPEndDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isPlantChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isPlantChecked ? TXT_Plant_End : ''}
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
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isPlantChecked && ERROR_Plant_St ?
                                        "Please input Plant Start Digit and Number only." : null}
                                </Typography>
                            </Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isPlantChecked && ERROR_Plant_End ?
                                        "Please input Plant End Digit and Number only." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Week Flag :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Checkbox
                                    style={{ padding: "0" }}
                                    checked={isWeekChecked}
                                    onChange={(e) => setIsWeekChecked(e.target.checked)}
                                />
                            </Grid>

                            <Grid item xs={2.7}>
                                <Typography>
                                    Week Code :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtWeekCode"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isWeekChecked ? "inherit" : "#F5F7F8",
                                        display: isWeekChecked,
                                    }}
                                    value={isWeekChecked ? TXT_Week_Code : ''}
                                    onChange={handleKEY_Week_Code}
                                    error={isWeekChecked && ERROR_Week_Code}
                                    disabled={!isWeekChecked}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}></Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isWeekChecked && ERROR_Week_Code ?
                                        "Please input Week Code." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Week Start Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtLStartDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isWeekChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isWeekChecked ? TXT_Week_Start : ''}
                                    onChange={handleKEY_Week_St}
                                    error={isWeekChecked && ERROR_Week_St}
                                    disabled={!isWeekChecked}
                                />
                            </Grid>
                            <Grid item xs={2.7}>
                                <Typography>
                                    Week End Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtLEndDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isWeekChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isWeekChecked ? TXT_Week_End : ''}
                                    onChange={handleKEY_Week_End}
                                    error={isWeekChecked && ERROR_Week_End}
                                    disabled={!isWeekChecked}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isWeekChecked && ERROR_Week_St ?
                                        "Please input Week Start Digit and Number only." : null}
                                </Typography>
                            </Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isWeekChecked && ERROR_Week_End ?
                                        "Please input Week End Digit and Number only." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Week Convert :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Checkbox
                                    style={{ padding: "0" }}
                                    checked={isWeekConChecked}
                                    onChange={(e) => setIsWeekConChecked(e.target.checked)}
                                />
                            </Grid>

                            <Grid item xs={2.7}>
                                <Typography>
                                    Week Convert Base :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Select
                                    id="cbWeekCon"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isWeekConChecked ? "inherit" : "#F5F7F8",
                                        display: isWeekConChecked
                                    }}
                                    value={isWeekConChecked ? Cb_Week_Con || 34 : ''}
                                    onChange={handleKEY_Week_Con}
                                    error={isWeekConChecked && ERROR_Week_Con}
                                    disabled={!isWeekConChecked}
                                >
                                    <MenuItem value={16}>16</MenuItem>
                                    <MenuItem value={32}>32</MenuItem>
                                    <MenuItem value={34}>34</MenuItem>
                                    <MenuItem value={36}>36</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}></Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isWeekConChecked && ERROR_Week_Con ?
                                        "Please select Week Convert Base." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Seq Flag :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Checkbox
                                    style={{ padding: "0" }}
                                    checked={isSeqChecked}
                                    onChange={(e) => setIsSeqChecked(e.target.checked)}
                                />
                            </Grid>

                            <Grid item xs={2.7}>
                                <Typography>
                                    Seq Format :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtSeqFormat"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isSeqChecked ? "inherit" : "#F5F7F8",
                                        display: isSeqChecked
                                    }}
                                    value={isSeqChecked ? TXT_Seq_Format : ''}
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
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}></Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
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
                            <Grid item xs={2.7}>
                                <Typography>
                                    Seq Start Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtSeqStartDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isSeqChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isSeqChecked ? TXT_Seq_Start : ''}
                                    onChange={handleKEY_Seq_St}
                                    error={isSeqChecked && ERROR_Seq_St}
                                    disabled={!isSeqChecked}
                                />
                            </Grid>
                            <Grid item xs={2.7}>
                                <Typography>
                                    Seq End Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtSeqEndDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isSeqChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isSeqChecked ? TXT_Seq_End : ''}
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
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isSeqChecked && ERROR_Seq_St ?
                                        "Please input Seq Start Digit and Number only." : null}
                                </Typography>
                            </Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isSeqChecked && ERROR_Seq_End ?
                                        "Please input Seq End Digit and Number only." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Seq Convert :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Checkbox
                                    style={{ padding: "0" }}
                                    checked={isSeqConChecked}
                                    onChange={(e) => setIsSeqConChecked(e.target.checked)}
                                />
                            </Grid>

                            <Grid item xs={2.7}>
                                <Typography>
                                    Seq Convert Base :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Select
                                    id="cbSeqCon"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isSeqConChecked ? "inherit" : "#F5F7F8",
                                        display: isSeqConChecked,
                                    }}
                                    value={isSeqConChecked ? Cb_Seq_Con || 34 : ''}
                                    onChange={handleKEY_Seq_Con}
                                    error={ERROR_Seq_Con}
                                    disabled={!isSeqConChecked}
                                >
                                    <MenuItem value={16}>16</MenuItem>
                                    <MenuItem value={32}>32</MenuItem>
                                    <MenuItem value={34}>34</MenuItem>
                                    <MenuItem value={36}>36</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}></Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isSeqConChecked && ERROR_Seq_Con ?
                                        "Please select Seq Convert Base." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Eng Flag :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Checkbox
                                    style={{ padding: "0" }}
                                    checked={isEngChecked}
                                    onChange={(e) => setIsEngChecked(e.target.checked)}
                                />
                            </Grid>
                        </Grid>


                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Eng Start Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtEngStartDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isEngChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isEngChecked ? TXT_Eng_Start : ''}
                                    onChange={handleKEY_Eng_St}
                                    error={ERROR_Eng_St}
                                    disabled={!isEngChecked}
                                />
                            </Grid>
                            <Grid item xs={2.7}>
                                <Typography>
                                    Eng End Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtEngEndDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isEngChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isEngChecked ? TXT_Eng_End : ''}
                                    onChange={handleKEY_Eng_End}
                                    error={ERROR_Eng_End}
                                    disabled={!isEngChecked}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isEngChecked && ERROR_Eng_St ?
                                        "Please input Eng Start Digit and Number only." : null}
                                </Typography>
                            </Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isEngChecked && ERROR_Eng_End ?
                                        "Please input Eng End Digit and Number only." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Rev Flag :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Checkbox
                                    style={{ padding: "0" }}
                                    checked={isRevChecked}
                                    onChange={(e) => setIsRevChecked(e.target.checked)}
                                />
                            </Grid>
                        </Grid>


                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Rev Start Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtRevStartDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isRevChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isRevChecked ? TXT_Rev_Start : ''}
                                    onChange={handleKEY_Rev_St}
                                    error={isRevChecked && ERROR_Rev_St}
                                    disabled={!isRevChecked}
                                />
                            </Grid>
                            <Grid item xs={2.7}>
                                <Typography>
                                    Rev End Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtRevEndDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isRevChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isRevChecked ? TXT_Rev_End : ''}
                                    onChange={handleKEY_Rev_End}
                                    error={isRevChecked && ERROR_Rev_End}
                                    disabled={!isRevChecked}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isRevChecked && ERROR_Rev_St ?
                                        "Please input Rev Start Digit and Number only." : null}
                                </Typography>
                            </Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isRevChecked && ERROR_Rev_End ?
                                        "Please input Rev End Digit and Number only." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Check Sum Flag :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Checkbox
                                    style={{ padding: "0" }}
                                    checked={isCheckSumChecked}
                                    onChange={(e) => setIsCheckSum(e.target.checked)}
                                />
                            </Grid>
                        </Grid>


                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Check Sum Start Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtCheckSumDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isCheckSumChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isCheckSumChecked ? TXT_CheckSum_Start : ''}
                                    onChange={handleKEY_CheckSum_St}
                                    error={isCheckSumChecked && ERROR_CheckSum_St}
                                    disabled={!isCheckSumChecked}
                                />
                            </Grid>
                            <Grid item xs={2.7}>
                                <Typography>
                                    Check Sum End Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtCheckSumDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isCheckSumChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isCheckSumChecked ? TXT_CheckSum_End : ''}
                                    onChange={handleKEY_CheckSum_End}
                                    error={isCheckSumChecked && ERROR_CheckSum_End}
                                    disabled={!isCheckSumChecked}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isCheckSumChecked && ERROR_CheckSum_St ?
                                        "Please input Check Sum Start Digit and Number only." : null}
                                </Typography>
                            </Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isCheckSumChecked && ERROR_CheckSum_End ?
                                        "Please input Check Sum End Digit and Number only." : null}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Config Flag :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <Checkbox
                                    style={{ padding: "0" }}
                                    checked={isConfigChecked}
                                    onChange={(e) => setIsConfig(e.target.checked)}
                                />
                            </Grid>
                        </Grid>


                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}>
                                <Typography>
                                    Config Start Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtConfigStDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isConfigChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isConfigChecked ? TXT_Config_Start : ''}
                                    onChange={handleKEY_Config_St}
                                    error={isConfigChecked && ERROR_Config_St}
                                    disabled={!isConfigChecked}
                                />
                            </Grid>
                            <Grid item xs={2.7}>
                                <Typography>
                                    Config End Digit :
                                </Typography>
                            </Grid>
                            <Grid item xs={3.3}>
                                <TextField
                                    id="txtConfigEndDigit"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        width: "71%",
                                        backgroundColor: isConfigChecked ? "inherit" : "#F5F7F8",
                                    }}
                                    value={isConfigChecked ? TXT_Config_End : ''}
                                    onChange={handleKEY_Config_End}
                                    error={isConfigChecked && ERROR_Config_End}
                                    disabled={!isConfigChecked}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            className="gridContainer"
                            spacing={0}
                        >
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isConfigChecked && ERROR_Config_St ?
                                        "Please input Config Start Digit and Number only." : null}
                                </Typography>
                            </Grid>
                            <Grid item xs={2.7}></Grid>
                            <Grid item xs={3.3}>
                                <Typography style={{ fontSize: "small", color: "red", width: "71%" }}>
                                    {isConfigChecked && ERROR_Config_End ?
                                        "Please input Config End Digit and Number only." : null}
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
                                    onClick={onClose}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>

            </div>
        </div >
    )
};

export default SerialPopup;