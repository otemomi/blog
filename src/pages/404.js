import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>ページがありません</h1>
    <p>申し訳ありません。このページはアドレスが間違っているか、削除されたため存在しません。</p>
  </Layout>
)

export default NotFoundPage
