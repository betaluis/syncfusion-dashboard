
import type { NextPage } from 'next'
import { useEffect } from 'react'

// Components
import { Layout } from '../layout';
import { Navbar, SettingsToolTip } from '../components'


const ECommerce: NextPage<{ page: string }> = ({ page }) => {

  const activeMenu: Boolean = false;

  return (
    <>
      <Layout pageName="ECommerce" />
    </>
  )
};

export default ECommerce;
