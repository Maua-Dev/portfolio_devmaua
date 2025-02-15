import { IoEarth } from 'react-icons/io5'
import { MdComputer } from 'react-icons/md'
import { MdOutlineGroups } from 'react-icons/md'
import { MdOutlineLocalPhone } from 'react-icons/md'
import { LuClock3 } from 'react-icons/lu'

export const MenuData = [
  {
    title: 'Sobre nós',
    path: 'headerMobile',
    icon: <IoEarth />
  },
  {
    title: 'Projetos',
    path: 'projects',
    icon: <MdComputer />
  },
  {
    title: 'Portal Interno',
    path: 'portalInterno',
    icon: <LuClock3 />
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
