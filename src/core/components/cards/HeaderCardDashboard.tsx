import UserButton from '@/core/components/button/IconButtonHeaderDashboard'
import { CardHeaderIcon } from '@/mock-data/dashboard'
import formatNumber from '@/utils/formatNumber'
import {
  BackgroundImage,
  Box,
  Center,
  createStyles,
  Grid,
  Image,
  MediaQuery,
  SimpleGrid,
  Text,
} from '@mantine/core'
import React from 'react'

const useStyles = createStyles(() => ({
  container: {
    position: 'relative',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '0 0 0 20px',
  },
  islandImage: {
    position: 'absolute',
    right: 0,
  },
  cards: {
    marginTop: '20px',
    marginBottom: '4.7px',
  },
}))

export default function HeaderCardDashboard() {
  const { classes } = useStyles()
  const [name, setName] = React.useState('Jhon Fughorio')
  const [role, setRole] = React.useState('Admin')
  const [orgsType, setOrgsType] = React.useState('kampus')
  const [organization, setOrganization] = React.useState(
    ' UMT(Universitas Muhammadiyah Tangerang)'
  )

  React.useEffect(() => {
    setName('Jhon Fughorio')
    setRole('Admin')
    setOrgsType('kampus')
    setOrganization(' UMT(Universitas Muhammadiyah Tangerang)')
  }, [])
  return (
    <Box className={classes.container}>
      <BackgroundImage src="/dev/bg_header_dashboard.png" radius="lg">
        <Grid grow gutter="sm">
          <Grid.Col span={8}>
            <Center p="md" className={classes.center}>
              <Text fz="16px" fw={700} color="#fff">
                {`Selamat datang, ${name}`}
              </Text>
              <Text fz="12px" color="#fff">
                {/* Admin manejemen Mahasiswa, Dosen dan lainnya, kampus UMT
                (Universitas Muhammadiyah Tangerang) */}
                {`${role} manejemen Mahasiswa, Dosen dan lainnya, ${orgsType} ${organization}`}
              </Text>
              <SimpleGrid
                className={classes.cards}
                cols={4}
                spacing="lg"
                breakpoints={[
                  { maxWidth: '96rem', cols: 3, spacing: 'sm' },
                  { maxWidth: '72rem', cols: 2, spacing: 'sm' },
                  { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                  { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                ]}
              >
                {CardHeaderIcon.map((item, index) => (
                  <UserButton
                    key={index}
                    image={item.imageUrl}
                    title={item.title}
                    total={formatNumber(item.count)}
                  />
                ))}
              </SimpleGrid>
            </Center>
          </Grid.Col>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Grid.Col span={4}>
              <Image
                maw={314}
                // height={}
                className={classes.islandImage}
                radius="md"
                src="/dev/island_dashboard.png"
                alt="Random image"
              />
            </Grid.Col>
          </MediaQuery>
        </Grid>
      </BackgroundImage>
    </Box>
  )
}
