import React, {useRef, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {MdMenu, MdClose} from 'react-icons/md';
import styled from 'styled-components';
import {useOutsideClickFunction} from '../../helper-functions/useOutsideClickForHide';


const MainMenuStyles = styled.nav`
  display: flex;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  
  ul {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    
    li {
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular',serif;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
      width: 100%;
    }
    
    .active {
      color: var(--white);
    }
  }
  
  .mobileMenuIcon {
    position: absolute;
    right: 2rem;
    top: 2rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  
  .navItems .closeMenuIcon {
    display: none;
  }
  
  @media only screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    
    .hide-item {
      transform: translateY(-100%);
    }
    
    .mobileMenuIcon {
      display: block;
    }
    
    .navItems {
      flex-direction: column;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 100%;
      border-radius: 12px;
      position: absolute;
      
      .closeMenuIcon {
        display: block;
        width: 4rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        
        * {
          pointer-events: none;
        }
      }
      
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`

export const MainMenu = () => {
    const [showNav, setShowNav] = useState(false);
    const menuRef = useRef();
    useOutsideClickFunction(menuRef, () => {
        setShowNav(false)
    });

    return (
        <MainMenuStyles>
            <div
                className={'mobileMenuIcon'}
                onClick={() => {
                    setShowNav(!showNav)
                }}
                role={'button'}
                onKeyDown={() => {
                    setShowNav(!showNav)
                }}
                tabIndex={'0'}
            >
                <MdMenu/>
            </div>
            <ul
                className={showNav ? 'navItems' : 'hide-item'}
                onClick={() => {
                    setShowNav(!showNav)
                }}
                role={'button'}
                onKeyDown={() => {
                    setShowNav(!showNav)
                }}
                tabIndex={'0'}
                ref={menuRef}
            >
                <div
                    className='closeMenuIcon'
                    onClick={() => {
                        setShowNav(!showNav)
                    }}
                    role={'button'}
                    onKeyDown={() => {
                        setShowNav(!showNav)
                    }}
                    tabIndex={'0'}
                >
                    <MdClose/>
                </div>
                <li><NavLink exact to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/projects'}>Projects</NavLink></li>
                <li><NavLink to={'/contacts'}>Contacts</NavLink></li>
            </ul>
        </MainMenuStyles>
    );
}
