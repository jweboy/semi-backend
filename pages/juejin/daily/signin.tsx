import { Button, Banner, Form, Space, Toast } from '@douyinfe/semi-ui'
import React from 'react'
import useSWR, { useSWRConfig } from 'swr';
import Signin from '../../../src/entity/Signin';
import { fetcher, post } from '../../../utils/fetch';

const SigninFormPage = React.memo(
  () => {
    const formRef = React.useRef(null);
    const { data } = useSWR<Signin & { cookie: string }>('/api/juejin/signin/status', fetcher)
    const getFormApi = (formApi) => (formRef.current = formApi);

    const handleSubmit = async (values) => {
      await post('/api/juejin/signin', values);
      Toast.success('签到成功');
    };

    React.useEffect(() => {
      if (data?.cookie != null) {
        formRef.current?.setValue('cookie', data?.cookie);
      }
    }, [data?.cookie]);

    return (
      <div>
        <Form onSubmit={handleSubmit} getFormApi={getFormApi}>
          <Form.TextArea
            label="cookie"
            field="cookie"
            placeholder="请输入cookie"
            rows={8}
          />
          <Button htmlType="submit" type="primary" size="large" theme="solid">
            签到
          </Button>
        </Form>
      </div>
    )
  }
)

SigninFormPage.displayName = 'SigninFormPage'

export default SigninFormPage