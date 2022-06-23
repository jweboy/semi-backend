import { Layout, Nav, Spin } from '@douyinfe/semi-ui'
import { useRouter } from 'next/router';
import React, { lazy, Suspense } from 'react'
import useSWR from 'swr';
import Menu from '../../src/entity/Menu';
import { fetcher } from '../../utils/fetch';
import Logo from './Logo';

const SemiIcon = require('@douyinfe/semi-icons');

// type NavProps = React.ComponentProps<typeof Nav>;

const Sidebar = React.memo(
  () => {
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
    const { data } = useSWR<PageList<Menu>>('/api/menu', fetcher)
    const router = useRouter();
    const header = { logo: Logo, text: 'Semi后台' }
    const footer = { collapseButton: true }
    const siderStyle: React.CSSProperties = { backgroundColor: 'var(--semi-color-bg-1)' }
    const { pathname } = router;

    const handleNavSelect = ({ itemKey }) => {
      // console.log(itemKey)
      router.replace(itemKey);
    }

    const renderIcon = (iconKey) => React.createElement(SemiIcon[iconKey], {
      size: 'large'
    })

    const list = React.useMemo(() => {
      if (Array.isArray(data?.items)) {
        return data?.items.map(({ icon, ...restProps }) => ({
          ...restProps,
          icon: renderIcon(icon),
        }))
      }
      return []
    }, [data?.items])

    const openKeys = React.useMemo(() => {
      return list.map(item => item.itemKey)
    }, [list])

    React.useEffect(() => {
      const key = pathname.length > 1 ? pathname.slice(1, pathname.length) : pathname;
      setSelectedKeys([key])
    }, [pathname])

    return (
      <Layout.Sider style={siderStyle}>
        <Nav
          openKeys={openKeys}
          onSelect={handleNavSelect}
          selectedKeys={selectedKeys}
          style={{ maxWidth: 220, height: '100%' }}
          items={list}
          // @ts-ignore
          header={header}
          footer={footer}
        />
      </Layout.Sider >
    )
  }
)

Sidebar.displayName = 'Sidebar'

export default Sidebar