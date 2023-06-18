import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { NavLink } from 'react-router-dom';
import '../../index.css';

interface MenuItemsProps {
    showMenu: () => void;
    active: boolean;
}

const MenuItems = ({ showMenu, active }: MenuItemsProps) => {
    return (
        <ul className={active ? 'text-right flex-col z-50 flex items-end fixed inset-0 left-1/4 uppercase bg-[#EAE6E3]/40 backdrop-blur-lg gap-8 justify-center p-8 lg:hidden' : 'hidden'}>
            <CloseOutlinedIcon onClick={showMenu} className='cursor-pointer' />
            <li><NavLink to='/' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>Início</NavLink></li>
            <li><NavLink to='/sobre' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>Sobre</NavLink></li>
            <li><NavLink to='/skills' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>Skills</NavLink></li>
            <li><NavLink to='/projetos' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>Projetos</NavLink></li>
            <li><NavLink to='/contato' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>Contato</NavLink></li>
        </ul>
    );
};

export default MenuItems;