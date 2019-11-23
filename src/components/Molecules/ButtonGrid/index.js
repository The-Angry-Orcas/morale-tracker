import React, { memo } from "react";
import { StyledButtonGrid } from "./index.style";
import Button from "../../Atoms/Button";

const ButtonGrid = props => (
  <StyledButtonGrid>
    <Button data='1' {...props} />
    <Button data='2' {...props} />
    <Button data='3' {...props} />
    <Button data='4' {...props} />
    <Button data='5' {...props} />
    <Button data='6' {...props} />
  </StyledButtonGrid>
);

export default memo(ButtonGrid);
