import React, { useState } from 'react';
import axios from "axios";

export default function UrlShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  // Handle input change
const handleOnChange=(event)=>{
  setLongUrl(event.target.value)
}

  // Function to shorten URL
  const shortenURL = async () => {
    if (longUrl.trim() === "") {
      alert("Please enter a URL!");
      return;
    }

    try {
      const response = await axios.get(`https://cutt.ly/api/api.php`, {
        params: {
          key: "455668bfc3434529f1981382fd99c541", // Replace with your actual API key
          short: longUrl
        }
      });

      console.log("Full API Response:", response.data); // Debugging log

      if (response.data?.url?.status === 7) {
        setShortUrl(response.data.url.shortLink);
      } else {
        alert(`Failed to shorten URL. Status Code: ${response.data?.url?.status}`);
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("An error occurred. Check console for details.");
    }
  };

  // Function to copy the short URL
  const copyToClipboard = () => {
    if (!shortUrl) {
      alert("⚠️ No short URL to copy!");
      return;
    }
    navigator.clipboard.writeText(shortUrl);
    alert("✅ Short URL copied to clipboard!");
  };

  return (
    <div className='w-full h-dvh font-myfont bg-mylight dark:bg-mydark transition-all duration-300'>
      <div className="pt-20">
        <p className="font-bold text-3xl bg-mylight dark:text-mylight dark:bg-mydark flex justify-center transition-all duration-300">
          URL Shortener
        </p>
        <p className="text-mydark bg-mylight dark:text-mylight dark:bg-mydark flex justify-center mt-2 transition-all duration-300">
          Shrink. Share. Simplify.
        </p>
      </div>

      {/* Input Fields */}
      <div className="mt-16 flex flex-col items-center transition-all duration-300">
        <input
          type="text"
          id='url'
          placeholder='Enter URL...'
          value={longUrl}
          onChange={handleOnChange} 
          className='p-2 w-2/4 focus:outline-none bg-mylight text-mydark shadow-upper dark:bg-mydark dark:shadow-dupper dark:text-mylight transition-all duration-300'
        />
        <input
          type="text"
          id='shortUrl'
          placeholder='Short URL'
          value={shortUrl}
          readOnly
          className='p-2 mt-4 w-2/4 focus:outline-none bg-mylight text-mydark shadow-upper dark:bg-mydark dark:shadow-dupper dark:text-mylight transition-all duration-300'
        />
      </div>

      {/* Buttons */}
      <div className="mt-16 flex items-center justify-center transition-all duration-300">
        <button
          id='urlBtn'
          onClick={shortenURL}
          className='font-myfont mr-4 bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3 border-transparent rounded-xl transition-all duration-300 cursor-pointer'
        >
          Shorten URL
        </button>
        <button
          id='copyBtn'
          onClick={copyToClipboard}
          className='font-myfont ml-4 bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3 border-transparent rounded-xl transition-all duration-300 cursor-pointer'
        >
          Copy
        </button>
      </div>
    </div>
  );
}
