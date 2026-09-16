"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="light"
      toastStyle={{
        borderRadius: "14px",
        border: "1px solid rgba(0,0,0,0.08)",
        background: "#ffffff",
        color: "#171717",
        fontWeight: "600",
      }}
    />
  );
}