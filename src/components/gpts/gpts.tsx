import React, { useState } from "react";
import data from "./data.json";

const Gpts = () => {
    const [selectedType, setSelectedType] = useState('Languages'); // 设置默认值为 'Languages'
    const types = Array.from(new Set(data?.map(item => item.type)));
    const groupedData = {};

    types.forEach(type => {
        groupedData[type] = data.filter(item => item.type === type);
    });

    const handleSelectType = (type) => {
        console.log(type);
        setSelectedType(type);
    };

    return (
        <div className='py-20 text-white flex items-center justify-center z-40'>
            <div className='w-full flex flex-col gap-10 max-w-4xl items-center justify-between font-mono text-sm lg:flex'>
                <div className='pt-20 flex flex-col gap-2' onClick={() => console.log('1111111111111')}>
                    <svg className="h-16" viewBox="0 0 430 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M214.902 184.495C199.018 199.845 183.07 215.28 167.052 230.796C166.416 231.411 165.881 231.75 164.939 231.75C150.907 231.737 137.193 231.731 123.791 231.731C115.843 231.737 108.378 231.227 101.397 230.205C101.301 230.193 101.263 230.076 101.333 230.009C124.071 208.089 146.675 186.236 169.159 164.452C184.553 149.533 192.336 129.224 189.701 108.123C185.895 77.6635 162.038 53.6702 130.689 48.9207C121.615 47.5427 111.331 47.9918 102.224 50.3665C89.3247 53.7255 78.3153 60.0069 69.1896 69.2166C58.1229 80.3827 50.7155 95.6154 49.9518 111.229C49.1054 128.535 54.311 145.626 65.6322 158.785C76.998 171.994 91.552 180.078 109.288 183.043C109.415 183.062 109.473 183.216 109.377 183.308L70.4496 220.848C70.2715 221.02 70.0105 221.063 69.7878 220.959C38.1215 206.655 14.4099 179.949 4.84514 147.41C1.56142 136.238 0.0850082 124.174 0.415926 111.223C1.10958 84.3139 13.1626 56.8201 32.2604 37.2871C50.0855 19.0522 71.5506 7.45539 96.6622 2.50293C105.54 0.74957 115.104 0.220494 124.561 0.251254C138.122 0.294319 151.626 0.300464 165.079 0.263552C165.709 0.263552 166.308 0.503492 166.753 0.934141L214.825 47.475C214.946 47.5919 215.15 47.5919 215.277 47.475L263.623 0.675743C263.878 0.423506 264.228 0.282007 264.597 0.282007C278.623 0.269703 293.896 0.275858 310.416 0.294314C316.678 0.300466 322.724 0.768025 328.547 1.68469C328.744 1.71545 328.827 1.94924 328.68 2.09073C307.966 22.1159 287.137 42.2334 266.2 62.4308C261.3 67.1618 258.335 70.0902 257.304 71.216C230.461 100.715 235.151 145.312 266.843 169.41C281.213 180.336 301.195 185.886 319.465 183.099C339.83 179.998 355.866 170.481 367.569 154.54C383.905 132.301 384.141 102.223 368.912 79.3122C358.005 62.8984 341.064 52.3844 321.088 48.9453C320.738 48.89 320.694 48.7362 320.942 48.4962L359.627 11.1405C359.774 10.999 360.003 10.956 360.194 11.0421C374.251 17.2311 386.763 26.0225 397.728 37.4162C416.984 57.4291 427.822 82.782 429.438 110.073C431.481 144.549 417.042 177.611 391.357 200.577C373.068 216.923 351.685 226.853 327.204 230.353C319.491 231.46 311.453 231.762 302.875 231.75C290.281 231.737 277.623 231.737 264.902 231.743C264.349 231.743 263.878 231.553 263.489 231.177L215.239 184.495C215.144 184.403 214.991 184.403 214.902 184.495Z"
                            fill="white"/>
                    </svg>
                    <span className='text-3xl font-bold text-center'>GPTsMotion</span>
                </div>
                <div className='py-10 text-center'>
                    {types.map((type, index) => (
                        <button
                            className={`${type === selectedType ? 'bg-white text-black' : 'bg-gray-700 text-white hover:bg-gray-500'} rounded-lg text-nowrap duration-300 hover:scale-[102%] px-3 mr-3 mb-3 py-2`}
                            key={index} onClick={() => handleSelectType(type)}>{type}</button>
                    ))}
                </div>
                <div className=''>
                    {selectedType &&
                        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                            {groupedData[selectedType]?.map((item, index) => (
                                <a href={item.link} target='_blank' key={index}>
                                    <div
                                        className='w-48 hover:scale-[102%] cursor-pointer duration-300 flex flex-col items-center gap-4'>
                                        <img src={item.avatar} alt={item.name} className='rounded-full w-24'/>
                                        <h1 className='text-2xl font-bold text-center'>{item.name}</h1>
                                    </div>
                                </a>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default Gpts;
