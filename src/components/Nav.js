import React from "react";

import profile from "../images/avatar.png";
import linkedin from "../images/linkedin-circle.svg";
import github from "../images/github-circle.svg";

import {
  Avatar,
  NavMenu,
  NavOptions,
  NavItem,
  NavLink,
  NavSocials,
  NavIcon
} from './styles/NavComponents';
 
import { Link } from './styles/SharedComponents';

const Nav = () => {
  return (
    <NavMenu id="nav">
      <Avatar alt="profile pic" src={profile} />
      <NavOptions>
        {/* <NavLink href="work">
          <NavItem>Work</NavItem>
        </NavLink>
        <NavLink href="about">
          <NavItem>About</NavItem>
        </NavLink>
        <NavLink href="resume">
          <NavItem>Resume</NavItem>
        </NavLink> */}
      </NavOptions>
      <NavSocials>
        <Link href="https://www.linkedin.com/in/mwangachuchu/" target="_blank">
          <NavIcon src={linkedin} alt="Linked in icon" />
        </Link>
        <Link href="https://github.com/xxengineer-practicum" target="_blank">
          <NavIcon src={github} alt="Git hub icon" />
        </Link>
      </NavSocials>
    </NavMenu>
  )
}

export default Nav;