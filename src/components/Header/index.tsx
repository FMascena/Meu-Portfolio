import LogoHeader from "../../assets/logo-redonda-minimizada.png";
import MenuItems from '../MenuItems';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Header() {

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    };

    return (
        <header className='w-full font-montserrat text-[18px] bg-[#F9F7F4] py-4'>
            <div className='container mx-auto flex items-center justify-between my-0'>
                <div className='flex items-center gap-20'>
                    <Link to={'/'}>
                        <LogoHeader />
                    </Link>
                    <nav className='flex justify-between'>
                        <div className='absolute right-6 lg:hidden top-6 scale-150'>
                            <MenuOutlinedIcon className='scale-150 cursor-pointer text-rosa-200' onClick={showMenu} />
                        </div>
                        <ul className='hidden lg:flex gap-14 text-[18px] text-preto-100 tracking-wider leading-3'>
                            <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>Início</NavLink></li>
                            <li><NavLink to='/sobre' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>Sobre</NavLink></li>
                            <li><NavLink to='/skills' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>Skills</NavLink></li>
                            <li><NavLink to='/projetos' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>Projetos</NavLink></li>
                            <li><NavLink to='/contato' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>Contato</NavLink></li>
                        </ul>
                        <MenuItems showMenu={showMenu} active={active} />
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header
