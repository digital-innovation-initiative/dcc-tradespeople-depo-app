import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
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
import A from '../../components/A';

const RowWithSeparator = styled(Row)`
  ${separator}
  padding-bottom: 30px;
`;

const DetailPage = (props) => {
  return (
    <Container>
      <RowWithSeparator>
        <H2>Burst Kitchen Pipe</H2>
        <StatusBadge priority='emergency' />
      </RowWithSeparator>
      <Row>
        <H3>Description</H3>
        <H3 alt>#9597926</H3>
      </Row>
      <Row>
        <H4>Issue</H4>
        <P>
          Pipe under the kitchen sink has burst with
          water flooding the interior of the property.
        </P>
      </Row>
      <Row>
        <H4>Affected Utility</H4>
        <InfoPill>Boiler</InfoPill>
      </Row>
      <Row>
        <H4>
          Considerations
        </H4>
        <P>Tenant is an OAP living alone.</P>
        <IconContainer><CareIcon /></IconContainer>
      </Row>
      <Row>
        <P>Address</P>
        <P>
          Mr D.Ward <br />
          32 Strand Road <br />
          Cork Place <br />
          DUBLIN 8 <br />
        </P>
        <A><LocationIcon /> Get Directions</A>
      </Row>
    </Container>
  );
}

export default DetailPage;
