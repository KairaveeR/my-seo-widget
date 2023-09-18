import React from 'react';
import json from 'next';
import CircleAnimation from './on_page_score';
interface BasicResultProps {
  result_data: any; // Replace 'any' with the actual type of your data
}
const onpage=56;
const Basic_result: React.FC<BasicResultProps> = ({ result_data }) => {
  console.log("result_data:" + JSON.stringify(result_data, null, 2));
  var onpage_score;
  var tti;
  var lcp;
  var fid;  
  if(result_data){
    onpage_score = result_data[0]?.result[0]?.items[0]?.onpage_score;
  }
  else {
    console.log("On-Page Score not available.");
  }
  return (
    <div className='flex items-center justify-center p-0 w-screen'>
      <div className='w-11/12 bg-blue-dark flex flex-col jusify-center align-center m-5'>
        <div className='flex flex-row m-5 mt-10 pt-5 w-11/12 item-center justify-between gap-10 h-full min-h-content max-sm:hidden'>
          <div className='flex flex-col gap-10'>
            <CircleAnimation score={onpage_score} />
          </div>
          <div className='m-5 flex justify-center items-center align-center text-yellow-500 text-lg'>
          An "on-page score" in the context of SEO (Search Engine Optimization) typically refers to a numerical or qualitative assessment of how well a specific web page is optimized for search engines. This score is a measure of how effectively a webpage's on-page elements and content are aligned with best practices for SEO. The purpose of calculating an on-page score is to evaluate and improve a webpage's ability to rank well in search engine results pages (SERPs).
          </div>
        </div>
        <div className='flex flex-col m-5 mt-10 pt-5 w-11/12 item-center justify-between gap-10 h-full min-h-content sm:hidden'>
          <div className='flex flex-col gap-10'>
            <CircleAnimation score={onpage_score} />
          </div>
          <div className='m-5 flex justify-center items-center align-center text-yellow-500 text-lg'>
          An "on-page score" in the context of SEO (Search Engine Optimization) typically refers to a numerical or qualitative assessment of how well a specific web page is optimized for search engines. This score is a measure of how effectively a webpage's on-page elements and content are aligned with best practices for SEO. The purpose of calculating an on-page score is to evaluate and improve a webpage's ability to rank well in search engine results pages (SERPs).
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic_result;






