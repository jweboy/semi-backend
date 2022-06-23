import { IconBell, IconHelpCircle } from '@douyinfe/semi-icons'
import { Avatar, Button, Layout, Nav } from '@douyinfe/semi-ui'
import React from 'react'

const Header = React.memo(
  () => {
    return (
      <Layout.Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <Nav
          mode="horizontal"
          footer={
            <>
              <Button
                theme="borderless"
                icon={<IconBell size="large" />}
                style={{
                  color: 'var(--semi-color-text-2)',
                  marginRight: '12px',
                }}
              />
              <Avatar color="orange" size="small">
                YJ
              </Avatar>
            </>
          }
        ></Nav>
      </Layout.Header>
    )
  }
)

Header.displayName = 'Header'

export default Header