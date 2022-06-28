import React, { useState } from 'react'
import { Container , LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from "./Navbar.elements";

import { GiFruitBowl} from "react-icons/gi";
import { IconContext} from 'react-icons';
import { FaBars} from "react-icons/fa";
import { AiOutlineHome, AiOutlineHdd, AiOutlineFlag, AiOutlineCode } from "react-icons/ai";


const Navbar = () => {
    const [showMobileMenu, setShowMobilemenu] = useState(false);
  return (
    
    <Container>
        <Wrapper>
            <IconContext.Provider value={{style: {fontSize:"2em"}}}>
                <LogoContainer>
                    <GiFruitBowl/>
                        <p>SINOCU </p>
                </LogoContainer>
                <MobileIcon onClick={()=>  setShowMobilemenu(!showMobileMenu) }>
                    <FaBars/>
                </MobileIcon>

                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink  onClick={()=>  setShowMobilemenu(!showMobileMenu) }>
                            <div>
                                <AiOutlineHome/>
                                    HOME
                            </div>
                        </MenuItemLink>
                    </MenuItem>                
                    <MenuItem>
                        <MenuItemLink to="/SubirArchivo" onClick={()=>  setShowMobilemenu(!showMobileMenu) }>
                            <div>
                                <AiOutlineHdd/>
                                 Cargar Archivos
                            </div>
                        </MenuItemLink>
                    </MenuItem>
               
                    <MenuItem>
                        <MenuItemLink to="/Mapa" onClick={()=>  setShowMobilemenu(!showMobileMenu) }>
                            <div>
                                <AiOutlineFlag/>
                                Api Google 
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                
                    <MenuItem>
                        <MenuItemLink onClick={()=>  setShowMobilemenu(!showMobileMenu) }>
                            <div>
                                <AiOutlineCode/>
                                Desarrolladores 
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}

export default Navbar