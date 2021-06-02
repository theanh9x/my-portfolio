import React from "react";
import { NavLink } from "react-router-dom";
import  { SocialIcon }  from 'react-social-icons';
import Rotation from 'react-rotation'

export default function NavBar() {
  return(
    <header className="bg-red-400">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/"
          exact
          activeClassName="text-white"
          className="inflex-flex items-center py-6 px-3 mr-4 text-rd-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
          <Rotation><img src="./logo192.png" alt="anhict" width="12px"/></Rotation>AnhICT</NavLink>
          <NavLink to="/post"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
              activeClassName="text-red-100 bg-red-700">
                Post</NavLink>

          <NavLink to="/project"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
              activeClassName="text-red-100 bg-red-700" >
                Project</NavLink>
                
          <NavLink to="/about"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
              activeClassName="text-red-100 bg-red-700" >
                About me!</NavLink>
        </nav>

        <div className="inflex-flex py-6 px-6 my-8">
            <SocialIcon
              url="https://twitter.com/Anh25652960"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{height:35, width:35}}/>
            <SocialIcon
              url="https://www.youtube.com/channel/UCnX_kNe3_kKUSzMdFCA8-zg"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{height:35, width:35}}/>
            <SocialIcon
              url="https://www.linkedin.com/in/anh-kevin-a27596163/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{height:35, width:35}}/>
        </div>

      </div>
    </header>
  )
}