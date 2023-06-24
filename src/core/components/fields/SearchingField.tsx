import { createStyles, TextInput } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  input: {
    width: '100%',
    height: '40px',
  },
}))

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export default function SearchingField({ size = 'md' }: Props) {
  const { classes } = useStyles()
  const [value, setValue] = useDebouncedState('', 300)

  const onSearching = () => {
    console.log('searching :', value)
  }
  return (
    <TextInput
      placeholder="Searching"
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          onSearching()
        }
      }}
      radius="md"
      onChange={(e) => setValue(e.currentTarget.value)}
      className={classes.input}
      rightSection={<FaSearch onClick={onSearching} size="0.8rem" />}
      sx={{ width: '100%' }}
      size={size}
      styles={{
        root: {
          // mantine-Input-input mantine-TextInput-input mantine-y7odgk
          '& .mantine-TextInput-input:focus-within ': {
            borderColor: '#018B14',
            // boxShadow: '0 0 0 1px red',
          },
        },
      }}
    />
  )
}
