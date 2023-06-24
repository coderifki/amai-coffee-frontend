import AddTableButton from '@/core/components/button/AddTableButton'
import { Flex } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  // type: BaseTableType
  title: string
  addUrl: string
}

export default function AddButtonBaseTable({ title, addUrl }: Props) {
  const router = useRouter()
  return (
    <React.Fragment>
      {title && addUrl && (
        <Flex justify={'flex-start'}>
          <AddTableButton title={title} onClick={() => router.push(addUrl)} />
        </Flex>
      )}
    </React.Fragment>
  )
}
