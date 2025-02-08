import React from 'react';
import ImageGallery from './../components/ImageGallery';
import { Navbar } from '../components/Navbar';
import mandir3 from './../images/mandir3.jpg';
import mandir from './../images/mandir.jpeg';
import mandir2 from './../images/mandir2.jpeg';
import mandir1 from './../images/mandir1.jpeg';
import temple from './../images/temple.jpeg';
import farm from './../images/farm.jpg';
import ksb from './../images/ksb.jpeg';
import camp from './../images/camp.jpeg';
import temple1 from './../images/temple1.jpeg';
import ganpati from './../images/ganpati.jpg';
const images = [
    { src: camp, alt: 'Image 1', caption: 'Caption 1' },
  { src: mandir, alt: 'Image 1', caption: 'Caption 1' },
  { src: farm, alt: 'Image 2', caption: 'Caption 2' },
  { src: ganpati, alt: 'Image 2', caption: 'Caption 2' },
  { src: mandir1, alt: 'Image 2', caption: 'Caption 2' },
  { src: mandir2, alt: 'Image 1', caption: 'Caption 1' },
  { src: mandir3, alt: 'Image 2', caption: 'Caption 2' },
  { src: temple1, alt: 'Image 2', caption: 'Caption 2' },
  { src: temple, alt: 'Image 1', caption: 'Caption 1' },
  { src: ksb, alt: 'Image 2', caption: 'Caption 2' },
];

const Images = () => {
  return (
    <div>
        <Navbar/>
      <ImageGallery images={images} />
    </div>
  );
};

export default Images ;
