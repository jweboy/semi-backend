import { Button, Table } from '@douyinfe/semi-ui'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import { columns } from './columns'
// import StatusBar from './components/StatusBar'
import { useRouter } from 'next/router'
import Signin from '../../../../src/entity/Signin'

const fetcher = (...args) => fetch(...args).then((res) => res.json()).then(({ data }) => data)

const SigninStatistics = React.memo(
  () => {
    const { data } = useSWR<PageList<Signin>>('/api/juejin/signin/list', fetcher)
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data?.items}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>
    )
  }
)

SigninStatistics.displayName = 'SigninStatistics'

export default SigninStatistics