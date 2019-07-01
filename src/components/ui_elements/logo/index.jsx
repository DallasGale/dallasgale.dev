import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { ThemeContext } from '../../get-in-touch'

import { black, red, white } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'
import { transitionPt1, transitionPt2 } from '../../utils/transitions'

const name = 'DallasGale'
const dev = 'dev'

const StyledLogo = styled(Link)`
  border-bottom: 4px solid transparent;
  border-width: 0;
  display: inline-block;
  font-weight: 600;
  font-size: ${pxToRem(20)};
  font-weight: 600;
  letter-spacing: ${pxToRem(-1)};
  text-decoration: none;
  width: auto;
  ${transitionPt1};
  &:hover {
    border-color: ${black};
    border-width: 4px;
    ${transitionPt2};
  }
`

const Name = styled.span`

  color: ${props => (props.theme === 'dark' ? white : black)};
`

const Ext = styled.span`

  color: ${red}
`

const Logo = () => {
  const context = useContext(ThemeContext)
  return (
    <StyledLogo to="/">
      <Name theme={context}>
        {name}
        .
      </Name>
      <Ext>{dev}</Ext>
    </StyledLogo>
  )
}

export default Logo