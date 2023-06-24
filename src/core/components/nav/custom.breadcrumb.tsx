import { Anchor, Breadcrumbs } from '@mantine/core'
import React from 'react'

interface CustomBreadcrumbProps {
  items: Array<{ title: string; href: string }>
  children?: React.ReactNode
}

const CustomBreadcrumbs = ({ items, children }: CustomBreadcrumbProps) => {
  const breadcrumbItems = items.map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))
  return <Breadcrumbs>{children ?? breadcrumbItems}</Breadcrumbs>
}

export default CustomBreadcrumbs
