import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';

const StatusBadgeRoot = styled(Badge)`
  font-size: 12px;
  font-weight: 600;
  border: 1px solid;
  ${props => {
    switch (props.variant) {
      case 'primary': //routine
      default:
       return `
        color: #1693C3;
        border-color: #1693C3;
        background-color: #E7F4F9;
       `;
      case 'warning':
        return `
          color: #FF7A00;
          border-color: #FF7A00;
          background-color: #FFFBF6;
        `;
      case 'danger':
        return `
          color: #DE0000;
          border-color: #DE0000;
          background-color: #FFF6F6;
        `;
    }
  }}
`;

export default StatusBadgeRoot;