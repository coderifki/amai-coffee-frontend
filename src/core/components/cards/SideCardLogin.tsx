import { Box, Grid, Image, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

export default function SideCardLogin() {
  const largeScreen = useMediaQuery('(min-width: 73.75em)')

  return (
    <Grid.Col
      md={5}
      xs={12}
      sx={{ height: '43em', padding: 0, position: 'relative' }}
    >
      <Image
        radius={'30px 0 0 30px'}
        height={'43em'}
        src="/assets/images/login/coffee_logo.png"
        alt="Random unsplash image"
        sx={{ position: 'absolute', zIndex: -1, filter: 'blur(2px)' }}
      />
      <Box
        sx={{
          backgroundColor: '#2E3261',
          width: '100px',
          height: '340px',
          position: 'absolute',
          marginLeft: 50,
          zIndex: 1,
        }}
      />
      {/* <Image
        src="/assets/images/login/indonesia_map.png"
        alt="Random unsplash image"
        sx={{ position: 'absolute', marginTop: 30, zIndex: 1 }}
      /> */}
      <Image
        width={'125px'}
        src="/assets/images/login/melina_coffee_logo1_removebg.png"
        alt="Random unsplash image"
        sx={{
          position: 'absolute',
          left: '6%',
          bottom: '4%',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          // left: '18%',
          left: largeScreen ? '18%' : '5%',
          top: '10%',
          width: '400px',
          padding: 0,
          zIndex: 1,
        }}
      >
        <Text
          c={'#fff'}
          sx={{
            fontFamily: 'Poppins, sans-serif',
            lineHeight: '57.2px',
          }}
          // ta="center"
          // fz="44px"
          fz={largeScreen ? '44px' : '34px'}
          fw={700}
        >
          Melina Coffee
        </Text>
        <Text
          c={'#018B14'}
          sx={{
            fontFamily: 'Poppins, sans-serif',
            lineHeight: '57.2px',
          }}
          // ta="center"
          // fz="34px"
          fz={largeScreen ? '34px' : '28px'}
          fw={700}
        >
          Unlimited Connections
        </Text>
      </Box>
    </Grid.Col>
  )
}
