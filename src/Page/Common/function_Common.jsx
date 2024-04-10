import React, { useState, useEffect } from "react";
import {internalIpV6, internalIpV4} from 'internal-ip';

console.log(await internalIpV4());

const usePopupFunctions = () => {
  const [OpenPopup, setOpenPopup] = useState(false);

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

  return { OpenPopup, PopupOpen, PopupClose, New };
};

const getBaseURL = () => {
  const baseURL = "http://10.17.66.119:5353";
  return { baseURL };
};

const useIPAddress = () => {
  const [ipaddress, setipaddress] = useState("");

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const ipv4 = await internalIpV4();
        setipaddress(ipv4)
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };

    fetchIPAddress();
  }, []);

  return { ipaddress, setipaddress };
};

export { usePopupFunctions, getBaseURL, useIPAddress };