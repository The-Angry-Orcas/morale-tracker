import styled from 'styled-components';

export const StyledButtonGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 100%;
`;