import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// Layout
import { Layout } from '../layout'

// Components
import { Navbar, SettingsToolTip } from '../components'

const Orders: NextPage = () => {

  const pageName = useRouter().pathname.substring(1);

  return (
    <>
      <Layout pageName={pageName} />
    </>
  )
};

export default Orders;
