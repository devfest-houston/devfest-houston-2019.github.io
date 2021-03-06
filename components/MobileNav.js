import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import styled from 'styled-components'
import theme from './theme'
import Link from 'next/link'
import AnchorButton from './elements/AnchorButton'

const MobileNavLink = styled.a`
  border-top: 1px solid ${theme.colors.blueExtraLight};
  color: ${theme.colors.blue};
  font-size: 0.8em;
  font-weight: 700;
  padding: 1.5em 1.5em 1.5em 1em;
  text-decoration: none;
  &:hover {
    background-color: ${theme.colors.blueExtraLight};
    color: ${theme.colors.blueLight};
  }
  &:last-of-type {
    border-bottom: 1px solid ${theme.colors.blueExtraLight};
  }
`

const MenuLink = styled.div`
  color: ${theme.colors.blue};
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 700;
  padding: 1.5em 1.5em 1.5em 1em;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background-color: ${theme.colors.blueExtraLight};
    color: ${theme.colors.blueLight};
  }
`

const NavMobileContainer = styled.div`
  position: relative;
  @media (min-width: 885px) {
    display: none;
  }
`

const MobileTopNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const MobileLinks = styled.div`
  &.is-visible {
    display: flex;
    flex-direction: column;
    overflow: visible;
    transition: transform .2s ease-in-out .1s, opacity .2s ease-in-out .2s;
  }
  &.is-hidden {
    display: none;
    overflow: hidden;
    transform: translateY(-100%);
    opacity: 0;
    transition: transform .2s ease-in-out .1s, opacity .2s ease-in-out .2s;
  }
`

class MobileMenu extends Component {
  constructor() {
    super()
    this.state = { isOpen: false }
  }

  openMenu = () => {
    this.setState({ isOpen: true })
  }

  closeMenu = () => {
    this.setState({ isOpen: false })
  }

  handleClickOutside = () => {
    this.closeMenu()
  }

  render() {
    return (
      <NavMobileContainer>
        <MobileTopNav>
          <MenuLink
            onClick={this.state.isOpen ? this.closeMenu : this.openMenu} >
            Menu
          </MenuLink>
          <AnchorButton style={{ alignSelf: 'center', marginRight: '1em' }} href="https://ti.to/gdg-houston/gdg-devfest-houston-2019" small="true" target="_blank" rel="noopener noreferrer">Register now</AnchorButton>
        </MobileTopNav>
        <MobileLinks className={this.state.isOpen ? 'is-visible' : 'is-hidden'}>
          {/* <Link passHref href="/"><MobileNavLink onClick={this.closeMenu} >Home</MobileNavLink></Link> */}
          {/* <Link passHref href="https://www.papercall.io/devfest-houston"><MobileNavLink onClick={this.closeMenu} >Call For Papers</MobileNavLink></Link> */}
          <Link passHref href="/#speakers"><MobileNavLink onClick={this.closeMenu} >Speakers</MobileNavLink></Link>
          <Link passHref href="/#schedule"><MobileNavLink onClick={this.closeMenu} >Schedule</MobileNavLink></Link>
          {/* <Link passHref href="https://forms.gle/C6ueQfWL47uTHxUs9"><MobileNavLink onClick={this.closeMenu} >Sponsors</MobileNavLink></Link> */}
          <Link passHref href="/location"><MobileNavLink onClick={this.closeMenu} >Location</MobileNavLink></Link>
          <Link passHref href="/conduct"><MobileNavLink onClick={this.closeMenu} >Code of Conduct</MobileNavLink></Link>
          {/* <Link passHref href="https://forms.gle/pdJkmWLtVZc9qA889"><MobileNavLink onClick={this.closeMenu} >Inclusivity</MobileNavLink></Link> */}
          {/* <Link passHref href="https://forms.gle/VDqt8hHJJwQYA9Wt7"><MobileNavLink onClick={this.closeMenu} >Volunteers</MobileNavLink></Link> */}
        </MobileLinks>
      </NavMobileContainer>
    )
  }
}

export default onClickOutside(MobileMenu)
