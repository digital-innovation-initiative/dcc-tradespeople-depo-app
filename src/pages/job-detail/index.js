import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import separator from '../../components/css/separator';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import H4 from '../../components/H4';
import P from '../../components/P';
import StatusBadge from '../../components/status-badge';
import InfoPill from '../../components/info-pill';
import IconContainer from '../../components/icon-container';
import { ReactComponent as CareIcon } from '../../icons/care.svg';
import { ReactComponent as LocationIcon } from '../../icons/location.svg';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import { ReactComponent as ArrowRightIcon } from '../../icons/arrow-right.svg';
import Button from '../../components/button';

import A from '../../components/A';

const RowWithSeparator = styled(Row)`
  ${separator}
  padding-bottom: 30px;
  margin-top: 30px;
`;

const spaceContent = css`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const TitleRow = styled(RowWithSeparator)`
  &&& {
    ${spaceContent}
  }
`;

const SpacedRow = styled(Row)`
  &&& {
    ${spaceContent}
  }
`;

const LeftAlignCol = styled(Col)`
  ${H4} {
    text-align: left;
  }
  flex-basis: auto;
  width: auto;
  flex-grow: 0;
  ${Col}:first-child {
    padding-left: 0;
  }
  ${Col}:last-child {
    padding-right: 0;
  }
`;

const JobDescriptionRow = styled(Row)`
  margin-bottom: 36px;
`;

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

const DetailPage = (props) => {
  return (
    <Container>
      
      <TitleRow>
        <H2>Burst Kitchen Pipe</H2>
        <StatusBadge priority='emergency' />
      </TitleRow>

      <SpacedRow>
        <H3>Description</H3>
        <H3 alt>#9597926</H3>
      </SpacedRow>

      <JobDetail title='Issue'>
        <P className='pr-1'>
          Pipe under the kitchen sink has burst with
          water flooding the interior of the property.
        </P>
      </JobDetail>
      
      <JobDescriptionRow>
        <LeftAlignCol>
          <H4>Affected Utility</H4>
          <InfoPill>Boiler</InfoPill>
        </LeftAlignCol>

        <LeftAlignCol>
          <H4>Make</H4>
          <InfoPill>Vokèra</InfoPill>
        </LeftAlignCol>

        <LeftAlignCol>
          <H4>Model</H4>
          <InfoPill>32C</InfoPill>
        </LeftAlignCol>
      </JobDescriptionRow>

      <JobDescriptionRow>
        <LeftAlignCol>
          <H4>Location of Issue</H4>
          <InfoPill>Bathroom</InfoPill>
        </LeftAlignCol>

        <LeftAlignCol>
          <H4>Category</H4>
          <InfoPill>Plumbing</InfoPill>
        </LeftAlignCol>
      </JobDescriptionRow>

      <JobDetail title='Considerations' separator>
        <P className='pr-1'>
          Tenant is an OAP living alone.
          <IconContainer>
            <CareIcon />
          </IconContainer>
        </P>
      </JobDetail>

      <RowWithSeparator>
        <Col>
        <P className='mb-3'>
          Address
        </P>
        <P className='mb-4'>
          Mr D.Ward <br />
          32 Strand Road <br />
          Cork Place <br />
          DUBLIN 8 <br />
        </P>
        <A>
          <LocationIcon />
          Get Directions
        </A>
        <A>
          <PhoneIcon />
            +353 869 34545
        </A>
        </Col>
      </RowWithSeparator>
      <RowWithSeparator>
        <P>Repair History</P>
        <ArrowRightIcon />
      </RowWithSeparator>
      <Row>
        <Button>Report Complete</Button>
      </Row>
    </Container>
  );
}

export default DetailPage;
