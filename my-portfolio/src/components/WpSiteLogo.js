import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const SiteLogoWrapper = styled.div`
    flex-grow: 1;
    margin: auto 0;
`

const SiteLogoStyles = styled.img`
    max-width: 25%;
`

const SiteLogo = () => (
    <StaticQuery
        query={graphql`
            {
            allWordpressWpLogo {
                edges {
                node {
                    url{
                    source_url
                    }
                }
                }
                
            }
            }
    `}
        render={props => (
            <SiteLogoWrapper>
                <SiteLogoStyles src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Thumbnail" /> 
            </SiteLogoWrapper>
        )}
    />
)

export default SiteLogo





