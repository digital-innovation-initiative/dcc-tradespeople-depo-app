import { RowWithSeparator } from './layout';
import { Col, Row } from 'react-bootstrap';
import H4 from '../../components/H4';

const JobDetail = ({ title, children, separator }) => {
  const RowComponent = separator
    ? RowWithSeparator
    : Row;

  return (
    <RowComponent>
      <Col className='px-0'>
        <H4 className='text-left'>{title}</H4>
        {children}
      </Col>
    </RowComponent>
  );
}
export default JobDetail;