// pages/index.tsx
"use client"

import React, { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import Basic_result from './basic_result';
import Other_results from './other_results';
import axios from 'axios';

const SEOWidget = () => {
  const [url, setUrl] = useState('');
  const [seoData, setSeoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRes, setIsRes] = useState(false);
  const [isBtn, setBtnLoading] = useState(true);
  const apiUrl = 'https://api.dataforseo.com/v3/on_page/instant_pages';
  function scrollToDiv() {
    const element = document.getElementById('scrollTarget');
  
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Add smooth scrolling animation
        block: 'start',     // Scroll to the top of the element
      });
    }
  }
  const analyzeURL = async () => {
    try {
      setBtnLoading(false);
      setIsLoading(true);
      const post_array = [];
      const post_array1 = [];
      post_array.push({
        "url": url,
        "enable_javascript": true,
        "custom_js": "meta = {}; meta.url = document.URL; meta;",
        "enable_browser_rendering": true,
      });
      const axios = require('axios');
      axios({
        method: 'post',
        url: 'https://api.dataforseo.com/v3/on_page/instant_pages',
        auth: {
          username: 'r.kairavee@gmail.com',
          password: 'f6f7964d2aabecab'
        },
        data: post_array,
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(function (response: any) {
          var result = response['data']['tasks'];
          //console.log("resss:"+JSON.stringify(simple_res, null, 2));
          console.log(result);
          setIsLoading(false);
          setBtnLoading(true);
          setIsRes(true);
          setSeoData(result);
        });
    }
    catch (error) {
      console.error('Error analyzing URL:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-tl from-blue-500 to-blue-300 overflow-x-hidden overflow-hidden'>
      <div className='min-h-screen w-screen flex items-center justify-center p-0'>
        <div className=" h-5/6 w-11/12 bg-blue-dark jusify-center align-center flex flex-row m-5">
          <div className='jusify-center align-center flex flex-col w-11/12 h-5/6'>
            <div className='text-white font-mono font-bold justify-center align-center flex text-4xl w-full m-20 max-sm:text-xl max-sm:m-5'><h1>Analyze Your Website Here.. </h1></div>
            <div className='p-10 sm:hidden'>
              <Image
                src="images/background.png" // Path to the image in the public directory
                alt="My Image Alt Text"
                width={500} // Set the width of the image
                height={300} // Set the height of the image
              />
            </div>
            <div className='flex flex-row justify-center align-center w-full'>
              <div className='p-10 w-auto max-sm:hidden'>
                <Image
                  src="images/background.png" // Path to the image in the public directory
                  alt="My Image Alt Text"
                  width={500} // Set the width of the image
                  height={300} // Set the height of the image
                />
              </div>
              <div className='p-5 flex flex-col m-5'>
                <div className="w-full m-5">
                  <input
                    className=" text-blue-800 w-full p-2 border border-black-900 rounded focus:border-white-500 hover:border-white-500 hover:bg-sky-200 focus:text-white-500 hover:placeholder-blue-400"
                    type="text"
                    placeholder="Enter URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <div className={`${isBtn ? 'block' : 'hidden'} w-full m-5 flex justify-center align-center`}><button id="btn" className="w-5/6 bg-sky-200 border border-blue-700 rounded-full p-2 flex justify-center align-center items-center text-blue-800 text-xl" onClick={analyzeURL}>Analyze</button></div>
                <div className={`${isLoading ? 'block' : 'hidden'} w-full flex m-5 justify-center align-center`}>
                  <div className='w-5/6 border rounded-full bg-sky-200 flex flex-row'>
                    <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin flex justify-center align-center m-2"></div>
                    <div className='flex align-middle justify-self-center p-5 text-xl text-blue-800'>Processing</div>
                  </div>
                </div>
                <div className={`${isRes ? 'block' : 'hidden'} w-full m-5 flex justify-center align-center`}><button id="btn" className="w-5/6 bg-sky-200 border border-blue-700 rounded-full p-2 flex justify-center align-center items-center text-blue-800 text-xl" onClick={scrollToDiv}>Results</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="scrollTarget" className={`${isRes ? 'block' : 'hidden'}`}>
        <Basic_result result_data={seoData} />
        <Other_results result_data={seoData} />
      </div>
    </div>
  );
};

export default SEOWidget;
