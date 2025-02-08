
import React from 'react';
import { Navbar } from './../components/Navbar';

const Video = () => {
  return (
    <div> 
        <Navbar/>
        <div className='flex flex-wrap justify-around gap-4 m-7 bg-green-50  '>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b6q0WQtu5gE?si=6nsSWgPdsvdiIeX5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vjdi6Mj1YzQ?si=mifpMf_VUG7EJ_xP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_RZJ-UfzmCY?si=MPTK9jtBjr3uLPKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fwWgriTonPI?si=G8upvCcTKL1wTuLW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Xc2HI8wrPuc?si=tuPeamjQJONdt43f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4hXjx0G6Dxs?si=KCyNq0peHLZjUuHZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/tqBzVo5rR7I?si=f2JQft2fwdPd_ACn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <a href="https://www.instagram.com/reel/C-BCWblsYmk/?utm_source=ig_web_button_share_sheet" className='text-3xl m-17'> View More Videos</a>
    </div>
    </div>
  );
};

export default Video;
