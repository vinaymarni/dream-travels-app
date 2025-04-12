import React from 'react';
import { MenuIcon } from '../data/icon';
import { Link } from 'react-router-dom';
import { allSections } from '../data/commonData';
function Menu() {
  const sections = [...allSections.keys()];

  return (
    <>
      <div className='navLinks'>
        {sections.map(eachSection=>{
            const section = allSections.get(eachSection);
            return(
                <Link 
                    className='navLinksBtns' 
                    to={section.path}
                >{section.title}</Link>
            )
        })}
      </div>

      <div className='menuDropDownMainContainer'>
        <MenuIcon className="menuIcon" />
        <div className='menuDropDownItemsContainer'>
          <div className='menuDropDownItemsInnerContainer'>
              <div className='navLinksForMobile'>
                {sections.map(eachSection=>{
                  const section = allSections.get(eachSection);
                  return(
                      <Link 
                          className='menuDropDownItem' 
                          to={section.path}
                      >{section.title}</Link>
                  )
                })}
              </div>

              <Link className='menuDropDownItem' to="/login">Login</Link>
              <Link className='menuDropDownItem' to="/register">Sing Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu;
