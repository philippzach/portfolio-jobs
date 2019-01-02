import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from 'components';
import Categories from '../components/Listing/Categories';
import website from '../../config/website';
import Background from '../../static/jobs.jpg'

const Hero = styled.section`
  background-color: ${props => props.theme.colors.greyLight};
  background-image: url("${Background}");
  background-repeat:no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size:cover;
  background-position:center;
  height: 350px;
  padding-top: 1rem;
  padding-bottom: 4rem;
`;

const Headline = styled.p`
  color: ${props => props.theme.colors.grey};
  font-size: 1em;
  font-weight: 500;
  a {
    font-style: normal;
    font-weight: normal;
    color: #595C62;
  }
`;

const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost;
  let categories = false;
  if (data.categories[0].category) {
    categories = data.categories.map(c => c.category.document[0].data.name);
  }
  return (
    <Layout>
      <SEO title={`${data.title.text} | ${website._title}`} pathname={location.pathname} article />
      <Hero />
        <Wrapper style={{ marginTop: '3em' }}>
          <Headline>
            {data.date} — {categories && <Categories categories={categories} />}
          </Headline>
          <h2>{data.title.text}</h2>
        </Wrapper>
      <Wrapper>
        <SliceZone allSlices={data.body} />
        <Header />
        <Title style={{ marginTop: '4rem' }}>Recent Startup Factory Jobs</Title>
        <Listing posts={posts.edges} />
      </Wrapper>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
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
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }

          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
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
            coloforpicture
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
