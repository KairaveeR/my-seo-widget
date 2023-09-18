import React from 'react';
import json from 'next';
import CircleAnimation from './on_page_score';
interface BasicResultProps {
  result_data: any; // Replace 'any' with the actual type of your data
}
type OnPageScoreType = {
    [key: string]: boolean;
  };
  
const onpage=56;
const Other_results: React.FC<BasicResultProps> = ({ result_data }) => {
  console.log("result_data:" + JSON.stringify(result_data, null, 2));
  var onpage_score: OnPageScoreType = {};
  var tti;
  var lcp;
  var fid;  
  if(result_data){
    onpage_score = result_data[0]?.result[0]?.items[0]?.checks;
    console.log("onpage_score:"+JSON.stringify(onpage_score, null, 2));
  }
  else {
    console.log("On-Page Score not available.");
  }
  return (
    <div className='flex items-center justify-center p-0 w-screen'>
      <div className='w-11/12 bg-blue-dark flex flex-col jusify-center align-center m-5'>
        <div className='text-xl text-yellow-400 font-mono p-5 flex'>Basic Websites checks</div>
        <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 text-blue-800 text-xl max-sm:text-base max-sm:grid-cols-1 max-md:grid-cols-2'>
        {Object.keys(onpage_score).map((key) => (
            <div className=" flex justify-center align-center p-5 m-5 h-5/6 text-xl font-mono border rounded-full hover:bg-sky-800 hover:scale-110" key={key}>
              {onpage_score[key] ? <div className='text-green-400'>{key}:True</div> : <div className='text-red-400'>{key}:False</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Other_results;






