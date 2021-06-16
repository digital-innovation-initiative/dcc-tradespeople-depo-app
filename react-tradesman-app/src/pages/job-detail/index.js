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
import A, { LinkA } from '../../components/A';
import MinimalModal from '../../components/modal';

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

const IconA = ({ icon, children }) => {
  return (
    <A>
      <Row className='py-3'>
        <Col xs={1}>
          {icon}
        </Col>
        <Col className='text-left'>
          {children}
        </Col>
      </Row>
    </A>
  );
}

const ConfirmModal = (props) => (
  <MinimalModal.Dialog>
    <MinimalModal.Header>
      Confirm Completion
    </MinimalModal.Header>
    <MinimalModal.Body>
      Once you report a job as finished the job will be closed.
      Please finish any relevant checks before you mark the job as complete.
    </MinimalModal.Body>
      <MinimalModal.Footer>
        <div className='col-auto'>
          <A>Cancel</A>
        </div>
        <div className='col-auto'>
          <LinkA to='/dashboard?toast=true'>
            Confirm
          </LinkA>
        </div>
      </MinimalModal.Footer>
  </MinimalModal.Dialog>
)

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
          <IconA icon={<PhoneIcon />}>
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
      {showModal && <ConfirmModal />}
    </Container>
  );
}


export default DetailPage;