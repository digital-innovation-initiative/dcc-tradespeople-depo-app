import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import _ from 'lodash';

const StatusBadge = styled(Badge)`
  font-size: 16px;
  font-weight: 600;
  border: 1px solid;
  height: 24px;
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

const PRIORITIES = {
  urgent: 'warning',
  emergency: 'danger',
  routine: 'primary',
};

const JobStatus = ({ priority = 'routine', ...props }) => {
  const variant = PRIORITIES[priority];
  const name = _.capitalize(variant);
  return (
    <StatusBadge variant={variant} {...props}>
      {name}
    </StatusBadge>
  );
}

export default JobStatus;
