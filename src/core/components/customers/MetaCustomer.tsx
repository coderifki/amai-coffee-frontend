import Head from 'next/head'

interface Props {
  title: string
  keyword: string
  description: string
}

export default function MetaCustomer(params: Props) {
  return (
    <Head>
      <title>{params.title}</title>
      <meta name="keywords" content={params.keyword} />
      <meta name="description" content={params.description} />
    </Head>
  )
}

MetaCustomer.defaultProps = {
  title: 'Melina Coffee',
  keyword: 'Melina Coffee',
  description: 'Melina Coffee',
}
