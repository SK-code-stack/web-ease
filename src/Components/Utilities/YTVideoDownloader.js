  import React, { useState } from 'react';
  import api from '../Api';

  export default function YTVideoDownloader() {
    const [text, setText] = useState('');
    const [videoInfo, setVideoInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedItag, setSelectedItag] = useState('');
    const [downloading, setDownloading] = useState(false);


    const handleOnChange = (e) => {
      setText(e.target.value);
    };

    const reset = () => {
      setText('');
      setVideoInfo(null);
      setSelectedItag('');
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!text.trim()) {
        alert('Enter URL');
        return;
      }

      setLoading(true);
      try {
        const res = await api.post("/video-info/", { url: text },{
          headers: {
            'Content-Type': 'application/json', // ✅ Required
          },}
        );

        setVideoInfo(res.data);
      } catch (err) {
        console.error('Error while fetching video info:', err);
        alert('Failed to fetch video info.');
      }
      setLoading(false);
    };

    const handleDownload = async () => {
      if (!selectedItag) {
        alert('Please select a video/audio format.');
        return;
      }
      setDownloading(true);

      try {
        const res = await api.post(
          '/download-video/',
          {
            url: text,
            itag: selectedItag,
          },
          {
            responseType: 'blob', // ✅ axios will return the Blob in res.data
          }
        );
    
        const blob = res.data; // ✅ Use res.data directly
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `${videoInfo.title || 'video'}.mp4`;
        a.click();
        a.remove();
        window.URL.revokeObjectURL(downloadUrl); // ✅ clean up
      } catch (err) {
        console.error('Download failed:', err);
        alert('Failed to download video.');
      }
      setDownloading(false);

    };
    

    return (
      <div className='w-full h-dvh font-myfont bg-mylight dark:bg-mydark transition-all duration-300'>
        {/* top heading */}
        <div className="pt-20 text-center">
          <p className="font-bold text-3xl  dark:text-mylight  flex justify-center">
            YouTube Video Downloader
          </p>
          <p className="text-mydark  dark:text-mylight  flex justify-center mt-2">
            Paste your link and get video.
          </p>
          </div>

          {/* form to send url to backend */}
          <form onSubmit={handleSubmit} className="mt-16 flex flex-col items-center">
            <input
              type="text"
              id="link"
              placeholder="Enter URL..."
              value={text}
              onChange={handleOnChange}
              className="p-2 w-3/4 focus:outline-none bg-mylight text-mydark shadow-upper dark:bg-mydark dark:shadow-dupper dark:text-mylight transition-all duration-300"
            />
            <div className="flex">
              <button
                type="submit"
                className="mt-8 mr-4 font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3 border-transparent rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Load'}
              </button>
              <button
                type="reset"
                onClick={reset}
                className="mt-8 font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3 border-transparent rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                Reset
              </button>
            </div>
          </form>

          {/* Show video info and formats */}
          {videoInfo && (
            <div className="flex flex-col items-center mt-8 dark:text-mylight text-mydark">
              <img
                src={videoInfo.thumbnail_url}
                alt="Video thumbnail"
                className="w-60 h-auto rounded-lg mb-4"
              />
              <p className="mb-2 font-bold text-xl">{videoInfo.title}</p>
              <select
                className="p-2 rounded-md bg-mylight dark:bg-mydark border  mb-4 shadow-upper dark:shadow-dupper"
                onChange={(e) => setSelectedItag(e.target.value)}
                value={selectedItag}
              >
                <option value="">Select Format</option>
                {videoInfo.formats.map((format, idx) => (
                  <option key={idx} value={format.itag}>
                    {format.resolution} ({format.filesize_mb || '?'} MB)
                  </option>
                ))}
              </select>
              <button
                onClick={handleDownload}
                className="font-myfont bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3 border-transparent rounded-xl transition-all duration-300 cursor-pointer"
              >
                {downloading ? 'Downloading...' : 'Download'}
                </button>
            </div>
          )}
        </div>
    );
  }
