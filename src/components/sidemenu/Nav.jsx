import React from 'react'
import Nasa from '../../assets/svg/nasa.png'
import SecondaryLink, {NasaMenu} from '../../assets/data'
import { NavLink } from 'react-router-dom'
function Nav(){
    const activeLink = "p-2 flex justify-between items-center text-red-500 my-1 rounded-sm"
    const nonactiveLink = "p-2 flex items-center my-1 rounded-sm hover:bg-[#dddcdc]"
    return(
        <div className='w-[250px] shadow-md px-2'>
            <div className='w-full flex justify-center p-6 relative'>
                <img src={Nasa} className='h-[70px] w-[90px]'/>
            </div>

            <div className='w-[100%] h-[1px] bg-[#b2b2b2] my-2'/>
            <div className='text-[14px]'>
                {NasaMenu.map((item) => (
                    <div key={item.id}>
                        <NavLink className={({isActive}) => isActive ? activeLink : nonactiveLink} to={item.link}>
                            <i className={item.icon} />
                            <span className='flex-1'>{item.name}</span>
                            {!!item.notification && <span className='px-1 rounded-sm bg-[#ec3338] text-[10px] text-white'>{item.notification}</span>}
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className='w-[100%] h-[1px] bg-[#b2b2b2] my-2'/>
            <div className='text-[14px]'>
                {SecondaryLink.map((item) => (
                    <div key={item.id}>
                        <NavLink className={({isActive}) => isActive ? activeLink : nonactiveLink} to={item.link}>
                            <i className={item.icon} />
                            <span className='flex-1'>{item.name}</span>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Nav;