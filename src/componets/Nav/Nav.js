import React from "react";
import { MdMail } from "react-icons/md";
import {MdPhone} from 'react-icons/md'
import {FaFacebookF} from 'react-icons/fa'

import dove from '../../assets/dove.jpg'

export default function Nav() {
  return (
    <>
      <nav className="flex justify-between bg-sky-600 px-4 ">
        <section className="flex h-[45px]  text-white px-4 pt-2">
          <div className="flex justify-center mr-5">
            <MdMail className="mt-1 mr-3 text-2xl"/>
            <span className="text-lg font-medium">Genesistrc@gmail.com</span>
          </div>
          <div className="flex justify-center">
			<MdPhone  className="mt-1 mr-1 text-2xl" />
            <span className="font-medium">1 (714) 4041273</span>
          </div>
        </section>

        <section>
			<FaFacebookF className="mt-4 text-white" />
		</section>
      </nav>
	  <nav className="hidden md:flex justify-between h-[100px] items-center px-5">
		<div className="flex-none flex items-center border-r-2 pr-4 ">
			<img src={dove} className="flex-none w-[70px] pr-4"/>
			<span className="font-bold text-2xl text-sky-600 uppercase">Genesis TRC</span>
		</div>
		
		<ul className="flex grow justify-between px-5 roboto">
			<li className="hover:text-sky-600">Home</li>
			<li className="hover:text-sky-600">About</li>
			<li className="hover:text-sky-600">Recovery Services</li>
			<li className="hover:text-sky-600">Information</li>
			<li className="hover:text-sky-600">Payments</li>
			<li className="hover:text-sky-600">Contact</li>
		</ul>
		<div className="border-l-2  flex flex-none items-center px-3">
			<div className="bg-sky-600 rounded-lg p-5 text-white font-semibold text-lg">
			(714) 404 - 1273
			</div>
		</div>
	  </nav>
    </>
  );
}
