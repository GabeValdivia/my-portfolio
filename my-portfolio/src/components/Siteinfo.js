import React from 'react'
import  { graphql, StaticQuery} from 'gatsby'
import styled from 'styled-components'
import SiteLogo from './WpSiteLogo'

const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color: #fff;
    margin: auto 0;
`

const SiteTitle = styled.div`
    font-weight: bold;
`

const Siteinfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <SiteTitle>
          <SiteLogo/>
        </SiteTitle>
        <div dangerouslySetInnerHTML={{ __html: props.allWordpressSiteMetadata.edges[0].node.description}} />
      </SiteInfoWrapper>
    )}
  />
)

export default Siteinfo