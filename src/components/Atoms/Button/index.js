import React, { memo } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./index.style";

// add onclick that

const Button = ({ data, setMoraleSelection }) => (
  <StyledButton onClick={() => setMoraleSelection(data)}>{data}</StyledButton>
);

Button.propTypes = {
  data: PropTypes.string.isRequired
};

export default memo(Button);
