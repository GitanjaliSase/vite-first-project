import React from 'react';
import { Navbar } from './../components/Navbar';

export default function Mainpage() {
    return (
        <>
        <Navbar />
        <div className='bg-green-50'>
        <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold mb-5">Vambori</h1>
        <p className="mb-4">
          Vambori or Wambori (Marathi: वांबोरी) is a Panchyat town located in Rahuri Tehsil and falls under Ahilya Nagar district, Maharashtra State, India.
          Vambori village falls under Rahuri assembly constituency, and Ahmednagar Lok Sabha constituency. </p> 
            <h2 className="text-3xl font-semibold mt-8 mb-4">Location and Transportation</h2>
                <p className="mb-4">
                    It is situated 19 km away from its sub-district Rahuri, 14 km Away From (M.P.K.V) Mahatma Phule Krishi Vidyapeeth and 25 km away from district Ahmednagar.
                    MSRTC buses are primary mode of transportation. </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">Geographical Area</h2>
        <p className="mb-4">The total geographical area of Vambori village is 5345.99 hectares. </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">Demographics</h2>
        <p className="mb-4">
                    According to the 2011 Indian census, Vambori has a total population of 19,213 peoples, out of which male population is 9,977 while female population is 9,236. Literacy rate of Vambori village is 72.46% out of which 77.41% males and 67.12% females are literate. There are about 3,871 houses in Vambori village.
         </p>
          <h2 className="text-3xl font-semibold mt-8 mb-4">Administration</h2>
                <p className="mb-4">
                    When it comes to administration, Vambori village is administrated by a sarpanch who is elected representative of the village by the local elections. As per 2019 stats, Vambori village comes under Rahuri Vidhan Sabha constituency & Ahmednagar Lok Sabha constituency. Rahuri is nearest town to Vambori village for all major economic activities, which is approximately 18km away.
                </p>
            <table className="table-auto w-full mt-8">
                        <tr className="bg-gray-200">
                            <th className=" border px-4 py-2">Attribute</th>
                            <th className=" border px-4 py-2">Details</th>
                        </tr>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Country</td>
                            <td className="border px-4 py-2">India</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">State</td>
                            <td className="border px-4 py-2">Maharashtra</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">District</td>
                            <td className="border px-4 py-2">Ahilya Nagar</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Tehsil</td>
                            <td className="border px-4 py-2">Rahuri</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Founded by</td>
                            <td className="border px-4 py-2">Government Of Maharashtra</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Government</td>
                            <td className="border px-4 py-2">Gram panchayat</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Body</td>
                            <td className="border px-4 py-2">(Vambori) Gram Panchayat</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Population (2011)</td>
                            <td className="border px-4 py-2">19,213</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Languages</td>
                            <td className="border px-4 py-2">Marathi (Official)</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Time zone</td>
                            <td className="border px-4 py-2">UTC+5:30 (IST)</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">PIN</td>
                            <td className="border px-4 py-2">413704</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Telephone code</td>
                            <td className="border px-4 py-2">02426</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Vehicle registration</td>
                            <td className="border px-4 py-2">MH-17</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </>
    );
}
