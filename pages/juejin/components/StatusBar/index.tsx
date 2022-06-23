import { Banner, Space } from '@douyinfe/semi-ui';
import React from 'react'

const StatusBar = React.memo(() => {
  // const { data } = useFetch('/juejin/checkin/status', getCheckinStatus);
  // const isSignin = data.status === SigninStatus.Ok;
  // const current = SIGNIN_STATUS[data.status] || {};

  console.log('render status');

  return (
    <Banner
      className="mb-4"
      // type={isSignin ? 'success' : 'warning'}
      closeIcon={null}
      description={
        <Space>
          {/* {`今日${current.label}，${isSignin ? `新增 ${data.incr_point}积分，` : ''
            } 总计 ${data.sum_point}积分`} */}
        </Space>
      }
    />
  );
});

StatusBar.displayName = 'StatusBar'

export default StatusBar