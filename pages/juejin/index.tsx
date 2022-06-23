import { Button, Table } from '@douyinfe/semi-ui'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import { Signin } from '../../lib/database/entity'
import { columns } from './columns'
import StatusBar from './components/StatusBar'
import { useRouter } from 'next/router'

const fetcher = (...args) => fetch(...args).then((res) => res.json()).then(({ data }) => data)

const Juejin = React.memo(
  () => {
    // const { data } = useSWR<PageList<Signin>>('/api/juejin/signin/list', fetcher)
    const router = useRouter();

    const handleNavigate = () => {
      router.push('/juejin/signin')
    }

    return (
      <div>
        {/* <Button onClick={handleNavigate}>签到</Button>
        <Table
          columns={columns}
          dataSource={data?.items}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        /> */}
      </div>
    )
  }
)

Juejin.displayName = 'Juejin'

export default Juejin