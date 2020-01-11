import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const SiteFaviconStyles = styled.img`
    max-width: 19%;
`

const SiteFavicon = () => (
    <StaticQuery
        query={graphql`
        {
        allWordpressWpFavicon {
            edges {
            node {
                url {
                source_url
                }
            }
            }
        }
        }
    `}
        render={props => (
                <SiteFaviconStyles src={props.allWordpressWpFavicon.edges[0].node.url.source_url} alt="Thumbnail" />
        )}
    />
)

export default SiteFavicon