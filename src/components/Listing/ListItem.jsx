import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { Link } from 'gatsby';
import { Categories } from 'components/Listing';

const Item = styled.div`
  margin-bottom: 1.45rem;
`;

const Headline = styled.p`
  color: ${props => props.theme.colors.grey};
  margin-bottom: 0;
  font-size: 0.8em;
  a {
    color: ${props => props.theme.colors.grey};
    font-style: normal;
    font-weight: normal;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  font-family: Poppins;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  font-weight: 600;
  line-height: 1.4em;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.3srem;
  }
`;

export default class ListItem extends Component {
  render() {
    const { node, categories } = this.props;
    return (
      <Item className="pa1">
        <Headline >
          {node.data.date} — {categories && <Categories categories={categories} />}
        </Headline>
        <div className="mt2" style={{ height: "4em"}}>
        <StyledLink to={node.uid}>{node.data.title.text}</StyledLink>
        </div>
        <p className="mt3 i">{node.data.location.text}<span className="ml4">{node.data.time.text}</span></p>
        <p>{node.data.description.text}</p>
      </Item>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};
