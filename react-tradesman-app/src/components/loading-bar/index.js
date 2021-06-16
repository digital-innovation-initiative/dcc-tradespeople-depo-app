import React from 'react';
import styled from 'styled-components';

const Track = styled.div`
  background-color: #C9F0FF;
  min-width: 100px;
  height: 4px;
`;

const Bar = styled.div`
  background-color: #1DC0FF;
  width: ${props => props.width};
  height: inherit;
`;

const LoadingBar = ({ percentage = 0 }) => (
  <Track>
    <Bar width={`${percentage}%`} />
  </Track>
);

export default LoadingBar;