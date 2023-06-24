// import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import { Card, createStyles, getStylesRef, rem, Text } from '@mantine/core'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    // height: rem(320),
    // height: '47vh',
    height: '300px',
    width: '75%',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
      opacity: 0.9,
    },
    [`&:hover .${getStylesRef('overlay')}`]: {
      // transform: 'scale(1.03)',
      // opacity: 0.9,
      top: 0,
      backgroundColor: 'rgb(0, 0, 0, 0.2)',
      color: '#fff',
    },
    [theme.fn.smallerThan('sm')]: {
      // backgroundColor: theme.colors.yellow[6],
      // height: rem(100),
      height: '10vh',
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '66.67%',
    left: 0,
    right: 0,
    bottom: 0,
    ref: getStylesRef('overlay'),
    backgroundColor: 'rgb(255, 255, 255, 0.3)',
    // opacity: 0.3,
    borderRadius: '0px 0px 14px 14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform ease-in',
    color: '#2E3261',
    // [`&:hover`]: {
    //   // transform: 'scale(1.03)',
    //   backgroundColor: 'rgb(0, 0, 0, 0.2)',
    //   top: 0,
    // },

    // backgroundImage:
    //   'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // padding: 40,
    zIndex: 1,
  },

  title: {
    // color: theme.white,
    // marginBottom: rem(5),
    // position: 'absolute',
    // left: '22.67%',
    // right: '22.67%',
    // top: '78%',
    // bottom: '11.67%',
    color: '#2E3261',
    fontSize: '20px',
    fontWeight: 700,
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}))

interface ImageCardProps {
  link: string
  image: string
  title: string
  value: string
  // author: string;
  // views: number;
  // comments: number;
}

export default function ImageCard({
  image,
  title,
  // value,
  // author,
  // views,
  // comments,
  link,
}: ImageCardProps) {
  const { classes } = useStyles()
  // const navigate = useNavigate()
  const router = useRouter()

  const handleClick = () => {
    // console.log('clicked');
    router.push(link)
  }

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      sx={{
        cursor: 'pointer',
      }}
      onClick={handleClick}
      // form="a"
      // href={link}
      // target="_blank"
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={classes.overlay}>
        <Text size="lg" weight={700}>
          {title}
        </Text>
      </div>
    </Card>
  )
}
