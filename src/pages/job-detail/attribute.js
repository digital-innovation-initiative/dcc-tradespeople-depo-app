import React from 'react';
import H4 from '../../components/H4';
import InfoPill from '../../components/info-pill';
import { LeftAlignCol } from './layout';

const Attribute = ({ name, value }) => (
  <LeftAlignCol>
    <H4>{name}</H4>
    <InfoPill>{value}</InfoPill>
  </LeftAlignCol>
);

export default Attribute;
