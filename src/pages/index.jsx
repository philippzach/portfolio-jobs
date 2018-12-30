import React, { Component } from 'react';
import Tachyons from 'tachyons/css/tachyons.min.css';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { graphql } from 'gatsby';
import { Layout, Listing, Wrapper, Title } from 'components';
import ListingStartup from '../components/Listing/ListingStartup';

const Hero = styled.header`
  background-color: ${props => props.theme.colors.greyLight};
  display: flex;
  align-items: center;
`;

const HeroInner = styled(Wrapper)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

const HeroText = styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
  }
`;


class Index extends Component {
  render() {
    const {
      data: { homepage, posts, startup },
    } = this.props;
    return (
      <Layout>
        <Hero>
          <HeroInner>
            <h1>{homepage.data.title.text}</h1>
            <HeroText dangerouslySetInnerHTML={{ __html: homepage.data.content.html }} />
          </HeroInner>
        </Hero>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title style={{ marginTop: '4rem' }}>Swiss Startup Factory Jobs</Title>
          
          <Listing posts={posts.edges} />
          <Title style={{ marginTop: '4rem' }}>Startup Jobs</Title>
         
          <ListingStartup posts={startup.edges} />
        </Wrapper>
      </Layout>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
    startup: PropTypes.object.isRequired
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
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
    startup: allPrismicStartup(sort: { fields: [data___date], order: DESC }) {
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
