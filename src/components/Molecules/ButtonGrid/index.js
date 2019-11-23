import React, { memo } from 'react';
import { StyledButtonGrid } from './index.style';
import Button from '../../Atoms/Button'

const ButtonGrid = () =>
  <StyledButtonGrid>
    <Button data="1"/>
    <Button data="2"/>
    <Button data="3"/>
    <Button data="4"/>
    <Button data="5"/>
    <Button data="6"/>
  </StyledButtonGrid>

export default memo(ButtonGrid);