import { IAccordion } from '@/core/components/accordion/accordion-type'
import {
  Accordion,
  AccordionControlProps,
  Box,
  createStyles,
} from '@mantine/core'
import React from 'react'

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
    '& .mantine-Accordion-content': {
      padding: '8px 0',
    },
  },
  activeAccordionControlBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #112D3C',
    borderRadius: '8px',
    fontWeight: 700,
    // opacity: '0.5',
  },
  inactiveAccordionControlBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #112D3C',
    borderRadius: '8px',
    opacity: '0.5',
  },
}))

function AccordionControl(props: AccordionControlProps) {
  const { classes } = useStyles()
  const [active, setActive] = React.useState(false)
  // console.log({ props })
  return (
    <Box
      className={
        active
          ? classes.activeAccordionControlBox
          : classes.inactiveAccordionControlBox
      }
    >
      <Accordion.Control {...props} onClick={() => setActive(!active)} />
    </Box>
  )
}

export default function BaseAccordion({ children, title }: IAccordion) {
  const { classes } = useStyles()
  return (
    <div>
      <Accordion
        className={classes.accordion}
        // chevron={<></>}
        variant="contained"
      >
        <Accordion.Item value="customization">
          <AccordionControl>{title}</AccordionControl>
          <Accordion.Panel>{children}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
