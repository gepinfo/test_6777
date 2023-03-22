import React, { useState ,useEffect} from 'react';
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        NavbarText
    } from 'reactstrap';
    import "./header.scss";
    import DropdownButton from 'react-bootstrap/DropdownButton';
    import Dropdown from 'react-bootstrap/Dropdown';
    import { Logout } from "../login/login.services";
    import { details, deleteUser, UpdateUserImg, uploadImgFile } from '../user/user.service';
    import { Web, Upload } from "../../shared/shared.service";
    import {useJwt} from "react-jwt"
    
    const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [check, setCheck] = useState<any | null>();
        const toggle = () => setIsOpen(!isOpen);
        const decodedToken: any = useJwt(sessionStorage.getItem("JwtToken") || "");

        useEffect(() => {
          setCheck(decodedToken.decodedToken?.role);
        }, [decodedToken]);
        
        const logout = () => {
          const temp = { id: sessionStorage.getItem("Id") };
          Logout(temp).then(

            (data: any) => {
              sessionStorage.clear();
              let userId = sessionStorage.getItem("Id") || null; // this.router.navigate(['']);
            },
            (error: any) => {
              console.error("error:", error);
            }
          );
          window.location.reload();
        };
        
        return (
    <nav data-gjs="navbar" id="template-igjrk" className="navbar ">
<div id="template-intck" className="navbar-container ">
<div id="template-icpy" className="">
</div>
<img id="ii0r8m" src="https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/dad97ef59d704ea0b66e4e5416c67f0a_new_logo_gep.png" className=""/>
<div id="template-iak8e" className="navbar-burger ">
<div id="template-iygi4" className="navbar-burger-line ">

         </div>
<div id="template-ikntj" className="navbar-burger-line ">

         </div>
<div id="template-i0h9u" className="navbar-burger-line ">

         </div>
</div>
<div data-gjs="navbar-items" id="template-ior1x" className="navbar-item-c ">
<nav data-gjs="navbar-menus" id="template-iyv8e" className="navbar-menus ">
<label id="template-i1jwl" className="">
Home</label>
<label id="template-i1rhd" className="">
About</label>
<label id="template-ic1kh" className="btn btn-primary ">
Contact us</label>
</nav>
<div id="MainMenu" className="">
<div classNameName="d-flex">
                                            {check?<NavItem>
                                                            <NavLink id="izdchj" className="menu-link nav-item" href="/home" >
                                                            home</NavLink>
                                                        </NavItem>:<></>}{check ==="Admin"?<NavItem>
                                                            <NavLink id="izdchj" className="menu-link nav-item" href="/admin" >
                                                            admin</NavLink>
                                                        </NavItem>:<></>}
{check?<NavItem>
                                                            <NavLink id="izdchj" className="menu-link nav-item" href="/sefscreen" >
                                                            sefscreen</NavLink>
                                                        </NavItem>:<></>}



<NavItem>
                                                            <NavLink id="ipek5x" className="btn btn-primary" href="/logout" >
                                                            logout</NavLink>
                                                        </NavItem>
<NavItem>
                                                            <NavLink id="ipek5x" className="btn btn-primary" href="/login" >
                                                            login</NavLink>
                                                        </NavItem>
                                                        </div>

            </div>
</div>
</div>
</nav>

        );
      };
      
      export default Header;
    