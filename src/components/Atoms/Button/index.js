import React, { memo } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./index.style";

const Button = ({ data }) => <StyledButton>{data}</StyledButton>;

Button.propTypes = {
  data: PropTypes.string.isRequired
};

export default memo(Button);
