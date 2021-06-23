import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import H2 from '../../components/H2';
import H3 from '../../components/H3';
import P from '../../components/P';
import StatusBadge from '../../components/status-badge';
import IconContainer from '../../components/icon-container';
import { ReactComponent as CareIcon } from '../../icons/care.svg';
import { ReactComponent as LocationIcon } from '../../icons/location.svg';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import Button from '../../components/button';
import A from '../../components/A';
import ConfirmModal from './confirm-modal';

import { RowWithSeparator, SpacedRow, TitleRow, JobDescriptionRow } from './layout';
import Detail from './detail';
import JobAttribute from './attribute';
import RepairHistoryButton from './repair-history-btn';

const Description = ({ jobId }) => (
  <SpacedRow>
    <H3>Description</H3>
    <H3 alt>#{jobId}</H3>
  </SpacedRow>
);


const IconA = ({ icon, children, ...props }) => {
  return (
    <A {...props}>
      <Row className='pt-3'>
        <Col xs={1} className='pr-0'>
          {icon}
        </Col>
        <Col className='text-left'>
          {children}
        </Col>
      </Row>
    </A>
  );
}

const DetailPage = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      
      <TitleRow>
        <H2>Burst Kitchen Pipe</H2>
        <StatusBadge priority='emergency' />
      </TitleRow>

      <Description jobId='9597926' />

      <Detail title='Issue'>
        <P className='pr-1'>
          Pipe under the kitchen sink has burst with
          water flooding the interior of the property.
        </P>
      </Detail>
      
      <JobDescriptionRow>
        <JobAttribute
          name='Affected Utility'
          value='Boiler'/>

        <JobAttribute
          name='Make'
          value='Vokèra'/>

        <JobAttribute
          name='Model'
          value='32C' />
      </JobDescriptionRow>

      <JobDescriptionRow>
        <JobAttribute
          name='Location of Issue'
          value='Bathroom' />

        <JobAttribute
          name='Category'
          value='Plumbing' />
      </JobDescriptionRow>

      <Detail title='Considerations' separator>
        <P className='pr-1'>
          Tenant is an OAP living alone.
          <IconContainer>
            <CareIcon />
          </IconContainer>
        </P>
      </Detail>

      <RowWithSeparator>
        <Col className='px-0'>
          <P className='mb-3'>
            Address
          </P>
          <P className='mb-4'>
            Mr D.Ward <br />
            32 Strand Road <br />
            Cork Place <br />
            DUBLIN 8 <br />
          </P>
          <IconA icon={<LocationIcon />}>
            Get Directions
          </IconA>
          <IconA icon={<PhoneIcon />} href="tel:+35386934545">
            +353 869 34545
          </IconA>
        </Col>
      </RowWithSeparator>

      <RowWithSeparator>
        <RepairHistoryButton to='/history' />
      </RowWithSeparator>
      <Row>
        <Button
          onClick={() => setShowModal(true)}>
            Report Complete
        </Button>
      </Row>
      {showModal && <ConfirmModal onHide={() => setShowModal(false)} />}
    </Container>
  );
}


export default DetailPage;
