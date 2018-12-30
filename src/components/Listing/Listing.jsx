import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { ListItem } from 'components/Listing';
import { theme } from 'styles';

const List = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media (max-width: ${theme.breakpoints.m}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.s}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default class Listing extends Component {
  render() {
    const { posts } = this.props;
    return (
      <List>
        {posts.map(post => {
          let categories = false;
          if (post.node.data.categories[0].category) {
            categories = post.node.data.categories.map(c => c.category.document[0].data.name);
          }
          return <ListItem key={post.node.uid} node={post.node} categories={categories} />;
        })}
      </List>
    );
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
};
