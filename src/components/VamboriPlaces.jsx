import React from 'react';
import mandir3 from './../images/mandir3.jpg';
import mandir from './../images/mandir.jpeg';
import mandir2 from './../images/mandir2.jpeg';
import temple from './../images/temple.jpeg';
import farm from './../images/farm.jpg';
import ksb from './../images/ksb.jpeg';
const placesOfInterest = [
    {
        name: "Shree Khole Shwar Mahadev Mandir",
        marathiName: "श्री खोलेश्वर महादेव मंदिर",
        description: "A revered temple dedicated to Lord Shiva.",
        image:mandir
    },
    {
        name: "Sri Pillay Swara Mahadev Temple",
        marathiName: "श्री पिलेश्वर (पंचमुखी) महादेव मंदिर",
        description: "Under the dense forest of Vambori Town above the hill, this Five-Faced Lord Shiva temple is placed.",
        image:mandir3
    },
   
    {
        name: "Gorakhnath Temple",
        marathiName: "श्री चैतन्य गोरक्षनाथ मंदिर",
        description: "In Garbha Giri Hill, here is the Samadhi place of the main and second Guru of the Navnath sect, Shri Guru Gorakhnath.",
        image: mandir2
    },
    {
        name: "Shri Krishna Mahanubhava Panth Temple and Ashram",
        marathiName: "श्रीकृष्ण महानुभव पंथ मंदिर आणि आश्रम",
        description: "Shri Chakradhar Swami, the founder of the Mahanubhava sect had visited this village.",
        image: temple
    },
    {
        name: "sanket Farm",
        marathiName: "",
        description: "Sanket Farm is your go-to destination for special occasions. Whether it's a family picnic, a corporate retreat, a birthday bash, or a serene naming ceremony,. Nagar Vambori Road, Vambori Tal: Rahuri Dist: Ahilyanagar",
        image: farm
    },
    {
        name: "KSB Company",
        marathiName: "",
        description: "Ksb in vambori ahilyanagar information KSB's Vambori facility is located in Ahilyanagar, Ahmednagar, Maharashtra, India. It is one of KSB's six manufacturing plants in India2. This facility specializes in the production of cast components for pumps and valves. KSB's foundries, including the one in Vambori, are known for their high standards and quality",
        image: ksb
    }
];

export  function Placesinfo1() {
    return (
        <>
            <div className="container mx-auto p-5">
                <h1 className="text-4xl font-bold mb-5">Places of Interest</h1>
                {placesOfInterest.map((place, index) => (
                    <div key={index} className="flex flex-row mb-8">
                        <img src={place.image} alt={place.name} className="w-1/2  rounded-lg shadow-md h-100" />
                        <div className="ml-8 mt-8">
                            <h2 className="text-3xl font-semibold mb-2">{place.name}</h2>
                            <h3 className="text-xl font-medium text-gray-600 mb-4">{place.marathiName}</h3>
                            <p>{place.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}


