import React from 'react';
<script defer src="https://unpkg.com/alpinejs@3.2.4/dist/cdn.min.js"></script>
interface CircleAnimationProps {
    score: any; // Replace 'any' with the actual type of your data
}
const CircleAnimation: React.FC<CircleAnimationProps> = ({ score }) => {
    // Calculate the percentage for the score
    const radius = 25;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (score / 100) * circumference;

    return (
        <div className="relative h-full w-full">
            <div className='flex flex-col gap-5 justify-center items-center h-full'>
                <div className='flex flex-col justify-center items-center m-5 h-full'>
                    <svg className="absolute inset-0 m-auto" viewBox="0 0 100 100" width="150" height="150">
                        <circle stroke-width="7" stroke-dasharray={`${score / 100}px 1px`} stroke-linecap="round" transform="rotate(-90 50 50)" cx="50" cy="50" r="45" fill="#FEF3C7" stroke="#FBBF24" pathLength="1" stroke-dashoffset="0px">
                        </circle>
                    </svg>
                    <svg className="absolute inset-0 m-auto" viewBox="0 0 100 100" width="150" height="150">
                        <circle stroke-width="7" stroke-dasharray={`${score / 100}px 1px`} stroke-linecap="round" transform="rotate(-90 50 50)" cx="50" cy="50" r="45" fill="#FEF3C7" stroke="#FBBF24" pathLength="1" stroke-dashoffset="0px">
                        </circle>
                    </svg>
                    <div className="font-display relative inset-0 mx-auto flex items-center justify-center text-yellow-500 text-4xl max-sm:text-xl max-md:text-3xl max-lg:text-3xl">
                        {score}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircleAnimation;
