import { IAccordion } from '@/core/components/accordion/accordion-type'
import {
  Accordion,
  AccordionControlProps,
  ActionIcon,
  Box,
  createStyles,
} from '@mantine/core'
import { FaFilePdf, FaPrint } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  accordion: {
    '& .mantine-Accordion-item': {
      border: 'none',
    },
    '& .mantine-Accordion-control': {
      '&:hover': {
        border: 'none',
        backgroundColor: 'transparent',
      },
    },
  },
  chevronActive: {
    transform: 'rotate(180deg)',
    transition: 'all 0.3s ease-in-out',
  },
  chevronInactive: {
    transform: 'rotate(0deg)',
    transition: 'all 0.3s ease-in-out',
  },
  iconBox: {
    color: '#fff',
    margin: '0 12px 0 0',
  },
  AccordionControlBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #018B14',
    borderRadius: '8px',
    backgroundColor: '#018B14',
  },
  accirdingText: {
    color: '#fff',
    fontWeight: 600,
  },
}))

function AccordionControl(props: AccordionControlProps) {
  const { classes } = useStyles()
  // console.log({ props })
  return (
    <Box className={classes.AccordionControlBox}>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" className={classes.iconBox}>
        <FaPrint size="1rem" />
      </ActionIcon>
      <ActionIcon size="lg" className={classes.iconBox}>
        <FaFilePdf size="1rem" />
      </ActionIcon>
      {/* <Box className={classes.chevronBox}>
        <FaAngleDown
          className={active ? classes.chevronActive : classes.chevronInactive}
          color={'#112D3C'}
        />
      </Box> */}
    </Box>
  )
}

export default function BaseChildAccordion({ children, title }: IAccordion) {
  const { classes } = useStyles()
  // const [active, setActive] = React.useState(false)
  return (
    <div>
      <Accordion
        className={classes.accordion}
        // chevron={<></>}
        variant="contained"
      >
        <Accordion.Item value="customization">
          <AccordionControl className={classes.accirdingText}>
            {title}
          </AccordionControl>
          <Accordion.Panel>{children}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
