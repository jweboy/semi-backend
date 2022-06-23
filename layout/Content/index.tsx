import { Layout } from '@douyinfe/semi-ui'
import { NextPage } from 'next'
import * as React from 'react'

const Content = (props) => {
  return (
    <Layout.Content
      style={{
        padding: '24px',
        backgroundColor: 'var(--semi-color-bg-0)',
      }}
    >
      {props.children}
    </Layout.Content>
  )
}

Content.displayName = 'Content'

export default Content