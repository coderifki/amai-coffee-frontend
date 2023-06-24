import AddTableButton from '@/core/components/button/AddTableButton'
import RemoveRowTableButton from '@/core/components/button/RemoveRowTableButton'
import SearchingField from '@/core/components/fields/SearchingField'
import { ViewResult } from '@/core/components/modal/mahasiswa/view-result/view-result'
import { selectDataPerPage } from '@/mock-data/table'
import { calculateRange } from '@/utils/calculateRange'
import {
  Avatar,
  Box,
  Button,
  Center,
  Checkbox,
  createStyles,
  Flex,
  Grid,
  Group,
  Menu,
  Pagination,
  rem,
  Select,
  Space,
  Table,
  Text,
} from '@mantine/core'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
  linksText: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: 400,
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: '#112D3C',
      transition: '0.3s ease-in-out',
    },
  },
  linksContainer: {
    display: 'inline-block',
    // position: 'absolute',
    // width: '200px  !important',
    padding: `${rem(8)} ${rem(8)}`,
    borderRadius: theme.radius.md,
    backgroundColor: '#018B14',
    border: 'none',
  },
}))

const styleForHeaderTitle = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '115%',
  color: '#112D3C',
}

interface TableSelectionProps {
  data: {
    avatar: string
    name: string
    email: string
    job: string
    id: string
    nim: string
    nik: string
    start_date: Date | string
  }[]
}

export function MahasiswaTable({ data }: TableSelectionProps) {
  const router = useRouter()

  const { classes, cx } = useStyles()
  const [selection, setSelection] = useState<string[]>([])
  const [rowPerPage, setRowPerPage] = useState<string | null>('5')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(100)
  const [open, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<string>('')
  const [setName, setSetName] = useState('')

  const [startIndex, endIndex] = calculateRange(
    page,
    Number((rowPerPage && rowPerPage) ?? 0),
    total
  )

  const toggleRow = (id: string) => {
    if (selection.length > 0) {
      setSelection((current) =>
        current.includes(id)
          ? current.filter((item) => item !== id)
          : [...current, id]
      )
    } else {
      setSelection([id])
    }
  }

  const toggleAll = () =>
    setSelection(data.length > 0 ? [] : data.map((item) => item.id))

  const rows = data.map((item) => {
    const selected = selection.includes(item.id)
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
            color="pink"
          />
        </td>
        <td>
          <Group spacing="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Flex justify={'center'} align={'flex-start'} direction={'column'}>
              <Text size="sm" weight={700}>
                {item.name}
              </Text>
              <Text size="xs" weight={400}>
                {item.email}
              </Text>
            </Flex>
          </Group>
        </td>
        <td>{item.nik}</td>
        <td>{item.nim}</td>
        <td>{moment(new Date(item.start_date)).format('LL')}</td>
        <td style={{ width: '200px' }}>
          <Group position="center">
            <Menu position="right">
              <Menu.Target>
                <Button sx={{ backgroundColor: '#018B14 !important' }}>
                  <Flex
                    justify={'center'}
                    align={'center'}
                    direction={'row'}
                    gap={10}
                  >
                    <FaEye size={15} />
                    Actions
                  </Flex>
                </Button>
              </Menu.Target>
              <Menu.Dropdown className={classes.linksContainer}>
                <Menu.Item
                  className={classes.linksText}
                  onClick={() =>
                    router.push(`/user/mahasiswa/profile/${item.id}`)
                  }
                >
                  Detail Profile
                </Menu.Item>
                <Menu.Item className={classes.linksText}>
                  Edit Profile
                </Menu.Item>
                <Menu.Item
                  className={classes.linksText}
                  onClick={() => {
                    setOpen(true)
                    setSelectedId(item.id)
                    setSetName(item.name)
                  }}
                >
                  Hasil Belajar
                </Menu.Item>
                <Menu.Item className={classes.linksText}>Hapus</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </td>
      </tr>
    )
  })

  React.useEffect(() => {
    setTotal(100)
  }, [])
  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <ViewResult
            open={open}
            name={setName}
            id={selectedId}
            handleClose={setOpen}
          />
          <Flex justify={'flex-start'}>
            <AddTableButton
              title="Tambah Mahasiswa"
              onClick={() => router.push('mahasiswa/add')}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={3} offset={3}>
          <Flex justify={'flex-end'}>
            {selection.length > 0 && (
              <RemoveRowTableButton
                title="Tambah Mahasiswa"
                onClick={() => console.log('test')}
              />
            )}
          </Flex>
        </Grid.Col>
        <Grid.Col span={3}>
          <Flex justify={'flex-end'}>
            <SearchingField size="sm" />
          </Flex>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={
                  selection.length > 0 && selection.length !== data.length
                }
                transitionDuration={0}
                color="pink"
              />
            </th>
            <th style={styleForHeaderTitle}>Nama Mahasiswa</th>
            <th style={styleForHeaderTitle}>NIM</th>
            <th style={styleForHeaderTitle}>NIK</th>
            <th style={styleForHeaderTitle}>Mulai Semester</th>
            <th style={styleForHeaderTitle}>
              <Box>
                <Center>Tindakan</Center>
              </Box>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Space h="xl" />
      <Grid>
        <Grid.Col span={2}>
          <Flex justify={'flex-start'}>
            {/* <AddTableButton
              title="Tambah Mahasiswa"
              onClick={() => console.log('test')}
            /> */}
            <Select
              placeholder="Total Per Page"
              value={rowPerPage}
              onChange={setRowPerPage}
              data={selectDataPerPage}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Text
            truncate
          >{`Menampilkan ${startIndex} sampai ${endIndex} row dari ${total}`}</Text>
        </Grid.Col>
        <Grid.Col span={5} offset={1}>
          <Flex justify={'flex-end'}>
            {/* <SearchingField size="sm" /> */}
            <Pagination
              // total={total / Number(rowPerPage)}
              total={Math.ceil(total / Number(rowPerPage))}
              position="center"
              onChange={setPage}
              styles={() => ({
                control: {
                  '&[data-active]': {
                    backgroundColor: '#018B14',
                  },
                  '&[data-active]:not([data-disabled]):hover': {
                    backgroundColor: '#018B14',
                  },
                },
              })}
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </>
  )
}
