import styled, { css } from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import separator from '../../components/css/separator';
import H4 from '../../components/H4';


const spaceContent = css`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const RowWithSeparator = styled(Row)`
  ${separator}
  padding-bottom: 30px;
  margin-top: 30px;
`;


export const TitleRow = styled(RowWithSeparator)`
  &&& {
    ${spaceContent}
  }
`;

export const SpacedRow = styled(Row)`
  &&& {
    ${spaceContent}
  }
`;

export const LeftAlignCol = styled(Col)`
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

export const JobDescriptionRow = styled(Row)`
  margin-bottom: 36px;
`;