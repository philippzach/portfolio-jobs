import React, { Component } from 'react';
import Tachyons from 'tachyons/css/tachyons.min.css';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { graphql } from 'gatsby';
import { Layout, Listing, Wrapper, Title } from 'components';
import ListingStartup from '../components/Listing/ListingStartup';
import Background from '../../static/jobs.jpg';
import Group from '../../static/group.svg';
import Factory from '../../static/factory.svg';
import Tech from '../../static/tech.svg';

const Hero = styled.header`
  background-image: url("${Background}");
  background-color: ${props => props.theme.colors.greyLight};
  display: flex;
  align-items: center;
  background-repeat:no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size:cover;
  background-position:center;
  height: 350px;
`;

const HeroInner = styled(Wrapper)`
  padding-top: 3rem;
  max-width: 900px;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 2rem;
    padding-bottom: 2rem;
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

const ContainerSub = styled.div`
display:flex;
@media (max-width: 650px) {
  flex-direction: column;
}
`
const ContainerGroup = styled.div`
display:flex;

@media (max-width: 650px) {
  flex-direction: column;
}
@media (min-width: 650px) {
  max-width: 36%
}
`


class Index extends Component {
  render() {
    const {
      data: { homepage, posts, startup },
    } = this.props;
    return (
      <Layout>
        <Hero>
        </Hero>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <HeroInner>
            <h1 className="lh-copy tc">{homepage.data.title.text}</h1>
            <HeroText className="lh-copy tc" dangerouslySetInnerHTML={{ __html: homepage.data.content.html }} />
            <ContainerGroup className=" mt5">
            <a style={{display: 'contents'}} href="https://swissstartupgroup.ch">
                <img className="mb5 pr5-ns dim pointer" style={{     height: '5rem' }}   src={Group} />
             </a>
             <a style={{display: 'contents'}} href="https://swissstartupfactory.com"> 
              <img className="mb5 pr5-ns dim pointer" style={{     height: '5rem' }} src={Factory} />
              </a>
              <a style={{display: 'contents'}} href="https://swissstartuptech.ch">
              <img className="pr5-ns dim pointer" style={{     height: '5rem' }} src={Tech} />
              </a>
              </ContainerGroup>
          </HeroInner>
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
