import React from 'react'
import { HeaderMobile } from './HeaderMobile'
import { HeaderDesktop } from './HeaderDesktop'

export const Header: React.FC = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  )
}
