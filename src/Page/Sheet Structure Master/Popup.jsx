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
import { PopupT } from "../function/function_SheetPopup";


function Popup({ isOpen, onClose, item, searchFunction }) {

  const baseURL = "http://localhost:3080";

  if (!isOpen) {
    return null;
  }

  const { STATUS_P, ipaddress, isPlantChecked, setIsPlantChecked, isLotChecked, setIsLotChecked,
    isModelChecked, setIsModelChecked, isSeqChecked, setIsSeqChecked,
    ERROR_SHT_Code, ERROR_SHT_Name, ERROR_Plant_Code, ERROR_Plant_St,
    ERROR_Plant_End, ERROR_Lot_St, ERROR_Lot_End, ERROR_Model_St, ERROR_Model_End,
    ERROR_Seq_For, ERROR_Seq_St, ERROR_Seq_End,
    TXT_SHT_Code, TXT_SHT_Name, Check_Plant_Flag, TXT_Plant_Code, TXT_Plant_Start, TXT_Plant_End,
    Check_Lot_Flag, TXT_Lot_Start, TXT_Lot_End,
    Check_Model_Flag, TXT_Model_Start, TXT_Model_End,
    Check_Seq_Flag, TXT_Seq_Format, TXT_Seq_Start, TXT_Seq_End,
    handleKEY_SHT_Code, handleKEY_SHT_Name, handleKEY_Plant_Code, handleKEY_Plant_St,
    handleKEY_Plant_End, handleKEY_Lot_St, handleKEY_Lot_End, handleKEY_Model_St,
    handleKEY_Model_End, handleKEY_Seq_For, handleKEY_Seq_St, handleKEY_Seq_End,
    handleSaveClick, Clear, } = PopupT(onClose, item, searchFunction);

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
                    backgroundColor: isPlantChecked ? "inherit" : "#F5F7F8",
                    display: (
                      isPlantChecked)
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
                    backgroundColor: isPlantChecked ? "inherit" : "#F5F7F8",
                    display: (isPlantChecked)
                  }}
                  value={isPlantChecked ? TXT_Plant_Start : ''}
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
                    backgroundColor: isPlantChecked ? "inherit" : "#F5F7F8",
                    display: (isPlantChecked)
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
                    backgroundColor: isLotChecked ? "inherit" : "#F5F7F8",
                    display: (isLotChecked)
                  }}
                  value={isLotChecked ? TXT_Lot_Start : ''}
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
                    backgroundColor: isLotChecked ? "inherit" : "#F5F7F8",
                    display: (isLotChecked)
                  }}
                  value={isLotChecked ? TXT_Lot_End : ''}
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
                    backgroundColor: isModelChecked ? "inherit" : "#F5F7F8",
                    display: (isModelChecked)
                  }}
                  value={isModelChecked ? TXT_Model_Start : ''}
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
                    backgroundColor: isModelChecked ? "inherit" : "#F5F7F8",
                    display: (isModelChecked)
                  }}
                  value={isModelChecked ? TXT_Model_End : ''}
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
                    backgroundColor: isSeqChecked ? "inherit" : "#F5F7F8",
                    display: (isSeqChecked)
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