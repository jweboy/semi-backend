import Image from 'next/image'
import React from 'react'

const Logo = React.memo(
  () => {
    return (
      <Image src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" alt="logo" width={64} height={64} />
    )
  }
)

Logo.displayName = 'Logo'

export default Logo