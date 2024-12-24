import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ReusableBanner = ({title,route_name}) => {
  
    
    return (
        <div>
            <div className="w-full bg-[#050C16] text-[#ffffff] py-6 flex items-center justify-center gap-4 flex-col h-[250px]">
                <p className="text-4xl text-[#FFA633] font-bold">{title}</p>
                <p className="text-base"><Link to={'/'}> Home</Link>/<button>{route_name}</button></p>
            </div>
        </div>
    );
};

export default ReusableBanner;