import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect } from 'react'
import { SettingsToolTip } from '../components'
import ECommerce from './ecommerce';

const Home: NextPage = () => {

  const activeMenu: Boolean = false;

  return (
    <ECommerce page="ecommerce" />
  )
}

export default Home
