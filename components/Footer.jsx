import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="border-2 border-black bg-black">
      <div className="w-full bg-white shadow-md border-t border-b border-[#b5b0d9] p-5 box-border">
        <div className="text-center text-[#4b2a80] text-4xl font-bold h-11 leading-normal">
          Our Sponsors
        </div>
        <div className="flex flex-wrap justify-evenly items-start gap-9 mt-5">
          <div className="flex w-[150px] h-[100px] justify-center items-center">
            <Image
              src="/KIIT-TBI_Logo_ 2.png"
              alt="KIIT-TBI Logo"
              width={150}
              height={100}
            />
          </div>
          <div className="flex w-[150px] h-[100px] justify-center items-center">
            <Image
              src="/DST-NIDHI_Original-Logo-H-1024x374 2.png"
              alt="DST-NIDHI Logo"
              width={150}
              height={100}
            />
          </div>
          <div className="flex w-[150px] h-[100px] justify-center items-center">
            <Image
              src="/logo 2.png"
              alt="Startup Odisha Logo"
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1236px] mx-auto my-20 p-5 rounded-lg flex flex-col md:flex-row items-center justify-between box-border">
        <div className="text-white text-center md:text-left text-2xl font-normal mb-5 md:mb-0">
          Love our Work and Interested to See the next revolution in AI and ML? Join Our Community! It’s Open to all!
        </div>
        <button className="w-full md:w-auto max-w-[206px] h-[52px] mx-auto md:mx-0 rounded-md bg-[#4b2a80] text-white text-lg font-medium flex items-center justify-center">
          Subscribe
        </button>
      </div>

      <div className="w-full bg-[#3e236a] text-white p-5 box-border flex flex-col items-center mt-20">
        <div className="w-full max-w-[1236px] flex flex-col md:flex-row items-center my-5">
          <div className="w-[150px] mb-5 md:mb-0">
            <Image
              src="/image 12.png"
              alt="ML4E Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="w-full max-w-[1086px] flex flex-wrap justify-between items-center text-center md:text-left text-base">
            <p>ML4E Machine Learning 4 Everyone</p>
            <p>Useful Link</p>
            <p>Contact us</p>
            <p className="text-center md:text-left">
              For Research Partnerships and Collaborations.
              <br />
              Please Email us -
            </p>
          </div>
        </div>
        <div className="w-full max-w-[1236px] flex flex-col md:flex-row items-center justify-between border-t border-white text-center md:text-left pt-2">
          <p className="my-1">All rights Reserved. ML4E, NIT Rourkela, 2024</p>
          <div className="flex items-center justify-center">
            <Image
              src="/image 11.png"
              alt="Footer Decoration"
              width={50}
              height={50}
            />
            Made with Love By - Team ML4E
          </div>
        </div>
      </div>
    </div>
  );
}
