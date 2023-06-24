import { Container } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { hasCookie } from 'cookies-next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
// import { useAuth } from './contex/AuthUserProvider';

interface Props {
  title: string
  keyword: string
  description: string
  children: React.ReactNode
}
export default function Layouts(params: Props) {
  // const { loading } = useAuth();
  const checkUser = hasCookie('user')
  console.log('checkUser', checkUser?.toString())
  const router = useRouter()
  const largeScreen = useMediaQuery('(min-width: 74em)')

  useEffect(() => {
    // const check = checkUser ? false : true;
    const urlSearchParam = new URLSearchParams()
    urlSearchParam.append('back', router.pathname)
    if (checkUser) {
      router
        .replace(`/dashboard`, {
          pathname: `/dashboard`,
        })
        .then((r) => console.log(r))
    }
  }, [router, checkUser])

  return (
    <>
      <Head>
        <title>{params.title}</title>
        <meta name="keywords" content={params.keyword} />
        <meta name="description" content={params.description} />
      </Head>
      <Container size={largeScreen ? 'xl' : 'md'}>{params.children}</Container>
    </>
  )
}

Layouts.defaultProps = {
  title: 'Big Contag',
  keyword: 'Contag Indonesia',
  description: 'Contag Indonesia',
}
