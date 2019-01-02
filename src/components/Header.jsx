import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled/macro';
import Arrow from '../../static/double-right.svg';

const StyledHeader = styled.header`
  padding-bottom: 2rem;
  a {
    color: ${props => (props.invert ? props.theme.colors.greyLight : props.theme.colors.greyDark)};
    font-weight: 400;
    font-style: normal;
    font-family: poppins;
    text-transform: uppercase;
    padding-right: 10px;
  }
`;

class Header extends Component {
  render() {
    const { invert } = this.props;
    return (
      <StyledHeader invert={invert}>
        <div style={{ float: 'right' }}>
        <Link to="/">See All Job Openings</Link>
        <img style={{ marginTop: '-5px' }} src={Arrow} />
        </div>
      </StyledHeader>
    );
  }
}

export default Header;

Header.propTypes = {
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false,
};
