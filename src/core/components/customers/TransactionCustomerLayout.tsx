import { useAuth } from '@/core/contex/AuthUserProvider'
import { menuItem } from '@/mock-data/dashboard'
import { AppShell, Container, Space } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { hasCookie } from 'cookies-next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ContagHeader } from '@layouts/header/ContagHeader'
import Sidebar from '@components/nav/sidebar'

interface Props {
  title: string
  keyword: string
  description: string
  children: React.ReactNode
}

export default function TransactionCustomerLayout(params: Props) {
  const { loading } = useAuth()
  const checkUser = hasCookie('user')
  const router = useRouter()
  const [opened, setOpened] = useState<boolean>(false)

  const largeScreen = useMediaQuery('(min-width: 74em)')

  useEffect(() => {
    const check = checkUser ? false : true
    const urlSearchParam = new URLSearchParams()
    urlSearchParam.append('back', router.pathname)
    if (check && !loading) {
      router
        .replace(`/`, {
          pathname: `/`,
        })
        .then((r) => console.log(r))
    }
  }, [router, checkUser, loading])

  return (
    <>
      <Head>
        <title>{params.title}</title>
        <meta name="keywords" content={params.keyword} />
        <meta name="description" content={params.description} />
      </Head>
      <AppShell
        padding="md"
        // navbar={<Sidebar opened={opened} />}
        // header={
        //   <ContagHeader
        //     links={menuItem.links}
        //     opened={opened}
        //     setOpened={setOpened}
        //   />
        //   // <HeaderResponsive links={menus} />
        // }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Space h="md" />
        <Container size={largeScreen ? 'xl' : 'md'}>
          {params.children}
        </Container>
      </AppShell>
    </>
  )
}

TransactionCustomerLayout.defaultProps = {
  title: 'Menu Melina Coffee',
  keyword: 'Menu Melina Coffee',
  description: 'Melina Coffee',
}
