/** @jsx jsx */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Layout as AntLayout } from 'antd'
import Header from './header'
const { Content, Footer } = AntLayout

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <AntLayout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content css={ContentStyle}>
        <LayoutContent className="site-layout-content">
          {children}
        </LayoutContent>
      </Content>
      <Footer css={FooterStyle}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </AntLayout>
  )
}

const LayoutContent = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`

const ContentStyle = css`
  padding: 50px;
`

const FooterStyle = css`
  text-align: center;
`

export default Layout
