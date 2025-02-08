
import React from 'react';
import { Navbar } from './../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiamondTurnRight} from '@fortawesome/free-solid-svg-icons'
import mapimg from './../images/mapimg.png';
export default function Places() {
    return (
        <div className='bg-green-50'>
        <Navbar />
        <p className="m-10 text-2xl ">
                    It is situated 19 km away from its sub-district Rahuri, 14 km Away From (M.P.K.V) Mahatma Phule Krishi Vidyapeeth and 25 km away from district Ahmednagar.
                    <a href="https://www.google.com/maps/place/Vambori,+Maharashtra+413704/@19.2896118,74.7303662,14.61z/data=!4m6!3m5!1s0x3bdcbd84f867eac7:0xb1060cbe2cd29c5e!8m2!3d19.2896623!4d74.7307807!16s%2Fg%2F1tdcp_4y?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className='text-3xl m-10'>Directions <FontAwesomeIcon icon={faDiamondTurnRight} /></a>
                    </p>
         <img src={mapimg} className='m-1 w-min'/>
        </div>
    )
}