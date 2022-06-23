import { Button, Table } from '@douyinfe/semi-ui'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import Signin from '../../../../src/entity/Signin'
import { columns } from '../../../../lib/pages/juejin/columns'
import { fetcher } from '../../../../utils/fetch'

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