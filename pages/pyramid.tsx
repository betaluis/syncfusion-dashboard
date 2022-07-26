
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// Layout
import { Layout } from '../layout'

// Components
import { Navbar, SettingsToolTip } from '../components'

const Pyramid: NextPage = () => {

  const pageName = useRouter().pathname.substring(1);

  return (
    <>
      <Layout pageName={pageName} />
    </>
  )
};

export default Pyramid;
