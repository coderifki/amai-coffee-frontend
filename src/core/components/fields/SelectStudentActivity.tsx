// import { createStyles, Select } from '@mantine/core';
// import { FaRegCalendarAlt } from 'react-icons/fa';

// // color: '#018B14',

// const useStyles = createStyles((theme) => ({
//   activeText: {
//     width: '100%',
//     height: '40px',
//     '& .mantine-1wqyxin': {
//       color: '#018B14',
//     },
//     '& .mantine-1wqyxin:focus': {
//       borderColor: '#018B14',
//     },
//   },
// }));

// export default function SelectStudentActivity() {
//   const { classes } = useStyles();
//   return (
//     <Select
//       placeholder="Custom active styles"
//       defaultValue="Vue"
//       data={['React', 'Angular', 'Vue', 'Svelte']}
//       className={classes.activeText}
//       icon={<FaRegCalendarAlt size="1rem" />}
//       // radius="md"
//       // size="md"
//       styles={(theme) => ({
//         item: {
//           // applies styles to selected item
//           '&[data-selected]': {
//             '&, &:hover': {
//               backgroundColor:
//                 theme.colorScheme === 'dark'
//                   ? theme.colors.teal[9]
//                   : theme.colors.teal[1],
//               color:
//                 theme.colorScheme === 'dark'
//                   ? theme.white
//                   : theme.colors.teal[9],
//             },
//           },

//           // applies styles to hovered item (with mouse or keyboard)
//           '&[data-hovered]': {},
//         },
//       })}
//     />
//   );
// }

import { forwardRef } from 'react'
import { Group, Avatar, Text, Select } from '@mantine/core'
import { FaRegCalendarAlt } from 'react-icons/fa'
// import { FaAngleDown } from 'react-icons/fa';
import { DataSelectedActivity } from '@/mock-data/dashboard'

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string
  label: string
  description: string
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
)

export default function SelectStudentActivity() {
  return (
    <Select
      placeholder="Pick one"
      defaultValue={DataSelectedActivity[0].value}
      itemComponent={SelectItem}
      data={DataSelectedActivity}
      searchable
      maxDropdownHeight={400}
      icon={<FaRegCalendarAlt size="1rem" />}
      size={'md'}
      radius="md"
      nothingFound="Nobody here"
      styles={{ rightSection: { pointerEvents: 'none' } }}
      filter={(value, item) =>
        (item &&
          item.label &&
          item.label.toLowerCase().includes(value.toLowerCase().trim())) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  )
}
