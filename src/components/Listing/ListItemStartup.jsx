import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { Link } from 'gatsby';
import Categories from './CategoriesStartup.jsx';
import '../../styles/listitem.css';

const Item = styled.div`
 
`;

const Headline = styled.p`
  color: ${props => props.theme.colors.grey};
  margin-bottom: 0;
  font-size: 0.8em;
  font-weight: 500;
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
  :hover {
    text-decoration: none;
  }
`;

const Description = styled.p`
    color: dimgrey;
    font-weight: 400;
`;

const Time = styled.p`
    font-weight: 600;
    text-transform: uppercase;
    font-size: .8em;
    color: grey;
`;

export default class ListItemStartup extends Component {
  render() {
    const { node, categories } = this.props;
    return (
        <Item className="hoverbox">
        <Link className="linktopost" to={node.uid}>
        <Headline >
          {node.data.date} — {categories && <Categories categories={categories} />}
        </Headline>
        <div className="mt2">
        <StyledLink to={node.uid}>{node.data.title.text}</StyledLink>
        </div>
        <Time className="mt2 i">{node.data.location.text}<span className="ml4">{node.data.time.text}</span></Time>
        <Description>{node.data.description.text}</Description>
        </Link>
      </Item>
    );
  }
}

ListItemStartup.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};
