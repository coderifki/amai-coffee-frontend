import { createStyles } from '@mantine/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const DEFAULT_PRIMARY_HEX_COLOR = '#fff'
const DEFAULT_IMAGE_URL_PROFILE = '/dev/contag_logo_navy.png'

const useStyles = createStyles(() => ({
  layer: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#000',
    transitionDuration: '1000ms',
    zIndex: 50,
  },
}))

export default function CurtainLoader() {
  // const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isUnmounted, setIsUnmounted] = useState<boolean>(false)
  const router = useRouter()
  // const preDataSkeleton = router.isFallback;
  const { classes } = useStyles()

  useEffect(() => {
    if (!router.isFallback) {
      // setTimeout(() => {
      //   setIsOpen(false);
      // }, 500);

      setTimeout(() => {
        setIsUnmounted(true)
      }, 500)
    }
  }, [router.isFallback])

  if (isUnmounted) {
    return <></>
  }
  return (
    <div
      className={classes.layer}
      style={{
        backgroundColor: DEFAULT_PRIMARY_HEX_COLOR,
      }}
    >
      <div>
        <img
          alt="company-logo"
          height={120}
          src={DEFAULT_IMAGE_URL_PROFILE}
          width={120}
        />
        {/* <Image
          alt="company-logo"
          height={120}
          src={DEFAULT_IMAGE_URL_PROFILE}
          width={120}
        /> */}
      </div>
    </div>
  )
}
