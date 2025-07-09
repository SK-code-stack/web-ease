import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main(props) {
  const navigate = useNavigate();

  const tools = [
    // { name: "URL Shortener", path: "/url-shortener" },
    // { name: "WiFi Speed Checker", path: "/wifi-speed-checker" },
    { name: "QR Code Generator", path: "/qr-code-generator" },
    { name: "Typing Speed Tester", path: "/typing-speed-tester" },
    { name: "Image Compressor", path: "/image-compressor" },
    // { name: "PDF Generator", path: "/pdf-generator" },
    // { name: "Plagiarism Checker", path: "/plagiarism-checker" },
    { name: "YT Video Downloader", path: "/yt-video-downloader" },
    // { name: "Barcode Generator", path: "/barcode-generator" },
    { name: "TextUtils", path: "/textutils" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 pb-20 w-full h-full">
        <div className="text-center">
          <h1 className="text-2xl text-mydark dark:text-mylight font-bold">WebEase</h1>
          <p className="text-xl text-mydark dark:text-mylight mt-2">One Stop Shop</p>
        </div>

        {/* Grid layout for the tool cards */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="w-32 h-32 cursor-pointer rounded-lg bg-myblue dark:bg-mydark shadow-upper hover:shadow-hov dark:shadow-dupper dark:hover:shadow-dHov flex items-center justify-center text-center text-mydark dark:text-mylight font-bold transition-all duration-300"
              onClick={() => navigate(tool.path)}
            >
              {tool.name}
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
