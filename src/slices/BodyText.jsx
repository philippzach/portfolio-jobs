import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const Content = styled.div`
  max-width: ${props => props.theme.maxWidthText};
`;

const BodyText = ({ input }) => <Content className="center" dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />;

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
};
