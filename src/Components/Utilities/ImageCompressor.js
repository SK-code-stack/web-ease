import React, { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import imageCompression from 'browser-image-compression';

export default function ImageCompressor() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDragOver = (e) => e.preventDefault();
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragActive(true);
  };
  const handleDragLeave = () => setDragActive(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
  };
  const handleFileChange = (e) => handleFile(e.target.files[0]);

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setCompressedFile(null);
    } else {
      alert("Please select a valid image file or try again.");
    }
  };

  const handleCompress = async () => {
    if (!selectedFile) return;
    setLoading(true);
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };
      const compressed = await imageCompression(selectedFile, options);
      setCompressedFile(compressed);
    } catch (error) {
      console.error("Compression failed:", error);
      alert("Compression failed.");
    }
    setLoading(false);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setCompressedFile(null);
  };

  const formatSize = (bytes) =>
    (bytes / 1024 / 1024).toFixed(2) + " MB";

  return (
    <div className='min-h-dvh bg-mylight dark:bg-mydark transition-colors duration-300'>
      <div className="pt-20 pb-10 w-full flex flex-col items-center justify-start px-4">
        <h1 className="text-mydark dark:text-mylight text-3xl font-bold font-myfont">Image Compressor</h1>
        <p className="font-myfont text-mydark dark:text-mylight text-lg mt-2">Shrink your image, not the quality.</p>

        {/* Dropzone */}
        <div
          className={`w-4/5 max-w-xl h-48 sm:h-64 md:h-72 lg:h-80 mt-6 p-6 flex justify-center items-center rounded-md cursor-pointer shadow-upper dark:shadow-dupper font-myfont
          ${dragActive ? "shadow-hov dark:shadow-dHov" : "shadow-hov dark:shadow-dHov"}`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label htmlFor="fileInput" className="flex flex-col items-center gap-2 text-mydark dark:text-mylight cursor-pointer">
            <HiOutlinePlus className="text-5xl" /> 
            <p className='font-myfont font-bold'>
            Upload Image
            </p>
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          {selectedFile && (
            <>
              <button
                onClick={handleReset}
                className='font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3  border-transparent rounded-xl transition-all duration-300 cursor-pointer mr-2'
                >
                Reset
              </button>
              <button
                onClick={handleCompress}
                className='font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3  border-transparent rounded-xl transition-all duration-300 cursor-pointer mr-2'
                >
                {loading ? "Compressing..." : "Compress"}
              </button>
            </>
          )}
          {compressedFile && (
            <a
              href={URL.createObjectURL(compressedFile)}
              download="compressed_image.jpg"
              className='font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3  border-transparent rounded-xl transition-all duration-300 cursor-pointer mr-2'
              >
              Download
            </a>
          )}
        </div>

        {/* Image Preview */}
        <div className="mt-8 w-full max-w-3xl flex flex-col md:flex-row justify-between gap-6">
          {selectedFile && (
            <div className="text-center">
              <h2 className="font-semibold text-mydark dark:text-mylight mb-2">Original Image</h2>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="original"
                className="w-64 h-auto mx-auto rounded"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Size: {formatSize(selectedFile.size)}
              </p>
            </div>
          )}
          {compressedFile && (
            <div className="text-center">
              <h2 className="font-semibold text-mydark dark:text-mylight mb-2">Compressed Image</h2>
              <img
                src={URL.createObjectURL(compressedFile)}
                alt="compressed"
                className="w-64 h-auto mx-auto rounded"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Size: {formatSize(compressedFile.size)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
