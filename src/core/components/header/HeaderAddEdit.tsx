import {
  ActionIcon,
  Breadcrumbs,
  createStyles,
  Divider,
  Grid,
  Space,
  Text,
} from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  activeBreadcrumb: {
    color: '#BCA37F',
  },
  inactiveBreadcrumb: {
    color: '#112D3C',
    opacity: 0.5,
  },
  headerTitle: {
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '15px',
    color: '#112D3C',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  devider: {
    margin: '0 0 10px 0',
  },
}))

interface Props {
  title: string
  breadcrumbs: { title: string; value: string; href: string }[]
  backUrl: string
  activePage: 'add' | 'table_mahasiswa' | 'profile' | 'edit'
}

export default function HeaderAddEdit({
  title,
  breadcrumbs,
  backUrl,
  activePage,
}: Props) {
  const router = useRouter()
  const { classes } = useStyles()
  const items = breadcrumbs.map((item, index) => (
    <Link
      className={
        item.value === activePage
          ? classes.activeBreadcrumb
          : classes.inactiveBreadcrumb
      }
      href={item.href}
      key={index}
    >
      {item.title}
    </Link>
  ))
  return (
    <div>
      <Grid>
        <Grid.Col className={classes.headerContainer} span={1}>
          <ActionIcon
            variant="transparent"
            color="dark"
            // onClick={() => router.push(backUrl)}
            onClick={() => router.push(backUrl)}
          >
            <FaLongArrowAltLeft size={'30'} />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col className={classes.headerContainer} span={11}>
          <Text className={classes.headerTitle}>{title}</Text>
          <Space h="xl" />
        </Grid.Col>
        <Grid.Col span={12}>
          <Breadcrumbs
            sx={{
              '@media (max-width: 40em)': {
                fontSize: '13px',
              },
              '@media (max-width: 20em)': {
                fontSize: '11px',
              },
            }}
          >
            {items}
          </Breadcrumbs>
          <Space h="xl" />
        </Grid.Col>

        <Grid.Col className={classes.devider} span={12}>
          <Divider color={'#112D3C'} size="sm" />
        </Grid.Col>
      </Grid>
    </div>
  )
}
