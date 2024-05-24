import { IoEarth } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

export const MenuData = [
    {
        title: 'O que fazemos?',
        path: 'headerMobile',
        icon: <IoEarth />
    },
    {
        title: 'Projetos',
        path: 'projects',
        icon: <MdComputer />
    },
    {
        title: 'Membros',
        path: 'members',
        icon: <MdOutlineGroups />
    },
    {
        title: 'Contato',
        path: 'footer',
        icon: <MdOutlineLocalPhone />
    }
]