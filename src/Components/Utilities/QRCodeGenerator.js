import React, { useState } from 'react';
import api from "../Api";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const reset = () =>{
    setText("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

  if (!text.trim()) {
    alert("Enter URL");
    return;
  }
    setLoading(true);
    

    try {
      const res = await api.post("/qr-code/", { url: text }); 
      setQrImage(res.data.image); 
    } catch (err) {
      console.error("Error generating QR code:", err);
      alert("Failed to generate QR code.");
    }
    setLoading(false);
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = qrImage;
    a.download = "qr-code.png";
    a.click();
  };

  return (
    <div className='w-full h-dvh font-myfont bg-mylight dark:bg-mydark transition-all duration-300'>
      <div className="pt-20">
        <p className="font-bold text-3xl  dark:text-mylight  flex justify-center">
          QR Code Generator
        </p>
        <p className="text-mydark  dark:text-mylight  flex justify-center mt-2">
          Paste your link and get the QR.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-16 flex flex-col items-center">
        <input
          type="text"
          id="link"
          placeholder="Enter URL..."
          value={text}
          onChange={handleOnChange}
          className="p-2 w-3/4 focus:outline-none bg-mylight text-mydark shadow-upper dark:bg-mydark dark:shadow-dupper dark:text-mylight transition-all duration-300"
        />
        <div className="flex ">
        <button
          type="submit"
          className="mt-8 mr-4 font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3 border-transparent rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50"
          >
          {loading ? "Generating..." : "Generate"}
        </button>
        {/* resset btn */}
        <button
          type="reset"
          onClick={reset}
          className="mt-8 font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3 border-transparent rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50"
        >
          Reset
        </button>
        </div>
      </form>

      {qrImage && (
        <div className="flex flex-col items-center mt-8">
          <img src={qrImage} alt="QR Code" className="w-40 h-40" />
          <button
            onClick={handleDownload}
            className="mt-4 font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3 border-transparent rounded-xl transition-all duration-300 cursor-pointer"
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
}
