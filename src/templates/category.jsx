import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import { Layout, Listing, Wrapper, Title, SEO, Header } from 'components';
import website from '../../config/website';

const Hero = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding-top: 1rem;
  padding-bottom: 4rem;
  h1 {
    color: ${(props) => props.theme.colors.bg};
  }
`;

const Headline = styled.p`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont',
    'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  color: ${(props) => props.theme.colors.greyBlue};
  font-size: 1.25rem;
  a {
    font-style: normal;
    font-weight: normal;
  }
`;

const Category = ({
  pageContext: { category },
  data: {
    posts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO
      title={`${category} | ${website._title}`}
      pathname={location.pathname}
    />
    <Hero>
      <Wrapper>
        <Header invert />
        <Headline>Category</Headline>
        <h1>{category}</h1>
      </Wrapper>
    </Hero>
    <Wrapper>
      <Title style={{ marginTop: '4rem' }}>
        {totalCount} {totalCount === 1 ? 'Job' : 'Jobs'}{' '}
        {totalCount === 1 ? 'is' : 'are'} open at "{category}"
      </Title>
      <Listing posts={edges} />
    </Wrapper>
  </Layout>
);

export default Category;

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          categories: {
            elemMatch: {
              category: {
                document: { elemMatch: { data: { name: { eq: $category } } } }
              }
            }
          }
        }
      }
    ) {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
            location {
              text
            }
            time {
              text
            }
            description {
              text
            }

            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
