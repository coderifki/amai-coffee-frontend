import { createStyles, getStylesRef } from '@mantine/core';

interface Props {
  image: string;
}
const useStyles = createStyles((theme) => ({
  image: {
    position: 'absolute',
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    // backgroundSize: 'fit',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // width: '100%',
    backgroundPosition: 'bottom',
    [theme.fn.smallerThan('sm')]: {
      height: '100%',
    },
    // transition: 'transform 500ms ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(0, 0, 0, 0.2)',
    // opacity: 0.3,
    // borderRadius: '0px 0px 14px 14px',

    // backgroundImage:
    //   'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },
}));
export default function BackgroudnImage({ image }: Props) {
  const { classes } = useStyles();
  return (
    <>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={classes.overlay} />
    </>
  );
}
