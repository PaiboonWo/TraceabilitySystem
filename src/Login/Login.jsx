import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";
// import Header from "../Page/Header/Hearder";
import "../Login/Login.css";
// import axios from "axios";
import {LoginTest} from "../function";

function Login() {
  
  const {loginId, password, showPassword, isLoading, setLoginId,
    handlePasswordChange, togglePasswordVisibility, handleLogin} = LoginTest();

  return (
    <div className="login-container">
      {/* <Header/> */}
      <Grid container spacing={2} style={{ paddingTop: "10%", minHeight: "100vh", maxWidth: "100%" }}>
        <Grid item xs={12} sm={6}>
          <div className="divTrace"
          >
            <h1 style={{
              fontweight: "bold",
              fontSize: "55px",
              whiteSpace: "nowrap",
              background: "linear-gradient(45deg, #190482, #11009E, #387ADF)",
              backgroundSize: "40%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Traceability System
            </h1>
            <p style={{
              fontSize: "24px",
              marginLeft: "15px",
              marginTop: "2px"
            }}
            >
              SMT Serial Trace System
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              width: 400,
              height: 350,
              marginLeft: 10,
              boxShadow: "0 16px 20px rgba(0, 0, 0, 0.2)",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              position: "relative",
            }}
          >
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <Avatar
                sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Login
              </Typography>
            </Grid>

            <TextField
              style={{
                marginLeft: "5%",
                marginTop: "5%",
                width: "360px",
              }}
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              id="outlined-multiline-flexible"
              label="Username"
              maxRows={10}
            />
            <TextField
              style={{
                marginLeft: "5%",
                marginTop: "2%",
                width: "360px",
                marginBottom: "10px",
              }}
              label="Password"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
              }}
            />
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  width: "360px",
                  background: 'linear-gradient(to right, #764ba2, #667eea , #00d2ff)',
                }}

                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </Grid>

            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: "13px", color: "#D3D3D3" }}>
                _____________________________________
              </p>
            </Grid>
            {/* <Grid item style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="success"
                style={{ width: "200px" }}
              >
                Create Account
              </Button>
            </Grid> */}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;