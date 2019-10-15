import React, { Component } from 'react';
import Tachyons from 'tachyons/css/tachyons.min.css';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout, Listing, Wrapper, Title } from 'components';
import ListingStartup from '../components/Listing/ListingStartup';
import Background from '../../static/jobs.jpg';
import Group from '../../static/group.svg';
import Factory from '../../static/factory.svg';
import Tech from '../../static/tech.svg';
import Comp from '../../static/comp.svg';
import Dude from '../../static/dude.svg';

const Test = styled.div`
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  max-height: 350px;
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
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const ContainerGroup = styled.div`
  display: flex;

  @media (max-width: 650px) {
    flex-direction: column;
  }
  @media (min-width: 650px) {
    max-width: 36%;
  }
`;

const ListItem = styled.p`
  text-indent: -23px;
  ::before {
    content: '✔';
  }
`;
const Icon = styled.img`
  height: 4em;
  margin-bottom: 2em;
`;
const ContainerIcons = styled.div`
  padding: 0 2em;
`;

class Index extends Component {
  render() {
    const {
      data: { homepage, posts, startup, join }
    } = this.props;
    return (
      <Layout>
        <Test>
          <Img fluid={join.childImageSharp.fluid} className='w-100' />
        </Test>
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <HeroInner>
            <h1 className='lh-copy tc'>{homepage.data.title.text}</h1>
            <HeroText
              className='lh-copy tc'
              dangerouslySetInnerHTML={{ __html: homepage.data.content.html }}
            />
            <ContainerGroup className=' mt5'>
              <a
                style={{ display: 'contents' }}
                href='https://www.swissstartupgroup.com'
              >
                <img
                  className='mb5 pr5-ns dim pointer'
                  style={{ height: '5rem' }}
                  src={Group}
                />
              </a>
              <a
                style={{ display: 'contents' }}
                href='https://www.swissstartupfactory.com'
              >
                <img
                  className='mb5 pr5-ns dim pointer'
                  style={{ height: '5rem' }}
                  src={Factory}
                />
              </a>
              <a
                style={{ display: 'contents' }}
                href='https://www.swissstartuptech.com'
              >
                <img
                  className='pr5-ns dim pointer'
                  style={{ height: '5rem' }}
                  src={Tech}
                />
              </a>
            </ContainerGroup>
          </HeroInner>
          <HeroInner>
            <ContainerSub>
              <ContainerIcons>
                <div className='tc'>
                  <Icon src={Comp} />
                  <h4>Unique Work Environment</h4>
                </div>
                <ListItem>Engage with inspiring people.</ListItem>
                <ListItem>
                  Constant opportunities to learn and grow and to provide value.
                </ListItem>
                <ListItem>
                  Autonomous and result-driven: we will give you all the freedom
                  you need to perform at your best.
                </ListItem>
              </ContainerIcons>
              <ContainerIcons>
                <div className='tc'>
                  <Icon src={Dude} />
                  <h4>Purpose</h4>
                </div>
                <ListItem>
                  Create true impact in the world and change the way how
                  corporates and startups do business.
                </ListItem>
                <ListItem>
                  We want you to work on what you love and in the way you love
                  it .
                </ListItem>
                <ListItem>
                  Awesome team members, team events and a lot of fun.
                </ListItem>
              </ContainerIcons>
            </ContainerSub>
          </HeroInner>
          <Title style={{ marginTop: '4rem' }}>
            Swiss Startup Factory Jobs
          </Title>

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
  }).isRequired
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
<<<<<<< HEAD

=======
>>>>>>> ee9e2aa2894f19d9b94c796efbc62b8824a234e4
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
<<<<<<< HEAD

=======
>>>>>>> ee9e2aa2894f19d9b94c796efbc62b8824a234e4
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
    join: file(relativePath: { eq: "jobs.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
