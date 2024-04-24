import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Sheet_Master from './Page/Sheet Structure Master/SheetMaster';
import Serial_Master from './Page/Serial Structure Master/SerialMaster';
import Login from './Login/Login'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {

  const sessionData = localStorage.getItem("isLoggedIn");

  const [authenticated, setAuthenticated] = useState(sessionData);

  useEffect(() => {
  
    // ตรวจสอบว่า Session มีหรือไม่
    if (sessionData) {
      setAuthenticated(true);

      // ตั้งเวลา Session Timeout เป็น 1 นาที (หน่วยเป็นมิลลิวินาที)
      const sessionTimeout = setTimeout(() => {
        setAuthenticated(false);
        localStorage.removeItem("isLoggedIn");
      }, 30 * 60 * 1000);

      // คืนค่าฟังก์ชั่น cleanup เพื่อลบ Timeout เมื่อ Component ถูกถอด
      return () => clearTimeout(sessionTimeout);
    }
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/TraceabilitySystem" element={<Login />} />
        {authenticated ? (
          <>
        <Route path="/SheetMaster" element={<Sheet_Master />} />
        <Route path="/SerialMaster" element={<Serial_Master />} />
        </>
        ) : (
          // ให้เปลี่ยนทางไปยังหน้าล็อกอิน ถ้ายังไม่ได้เข้าสู่ระบบ
          <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          )}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

root.render(<App />);

export default App
