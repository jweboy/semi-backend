import { Layout } from '@douyinfe/semi-ui'
import React from 'react'
import { IconBytedanceLogo } from '@douyinfe/semi-icons'

const Footer = React.memo(
  () => {
    return (
      <Layout.Footer
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          color: 'var(--semi-color-text-2)',
          backgroundColor: 'rgba(var(--semi-grey-0), 1)',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
          <span>Copyright © 2022 jweboy website. All Rights Reserved. </span>
        </span>
      </Layout.Footer>
    )
  }
)

Footer.displayName = 'Footer'

export default Footer