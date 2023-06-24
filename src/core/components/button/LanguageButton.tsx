import { Box, createStyles, Divider, Group, Text } from '@mantine/core'
import { useState } from 'react'
import { FaGlobeAsia } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  box: {
    position: 'relative',
    // height: rem(280),
    width: '150px',
    height: '50px',
    backgroundColor: 'rgb(46, 50, 97, 0.8)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    fontSize: '16px',
  },
  text: {
    // '&:hover': {
    //   color: '#00',
    // },
    ['&:hover']: {
      color: '#FCD705',
    },
    cursor: 'pointer',
  },
}))
export default function LanguageButton() {
  const { classes } = useStyles()
  const [selectedLanguage, setSelectedLanguage] = useState('EN')

  return (
    <>
      <Box className={classes.box}>
        <Group spacing={7} sx={{ marginLeft: 15 }}>
          <Text
            className={classes.text}
            weight={900}
            onClick={() => setSelectedLanguage('IN')}
            sx={{ color: selectedLanguage === 'IN' ? '#FCD705' : '#fff' }}
          >
            IN
          </Text>
          <Divider size="3px" orientation="vertical" />
          <Text
            className={classes.text}
            weight={900}
            onClick={() => setSelectedLanguage('EN')}
            sx={{ color: selectedLanguage === 'EN' ? '#FCD705' : '#fff' }}
          >
            EN
          </Text>
        </Group>
        <FaGlobeAsia size={22} style={{ marginRight: 15 }} />
      </Box>
    </>
  )
}
