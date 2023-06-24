import RemoveRowTableButton from '@/core/components/button/RemoveRowTableButton'
import SearchingFieldTable from '@/core/components/fields/SearchingFieldTable'
import { ViewResult } from '@/core/components/modal/mahasiswa/view-result/view-result'
import OverlayLoading from '@/core/components/overlay/loading-overlay'
import AddButtonBaseTable from '@/core/components/table/base-table/add-button'
import { DeleteConfirmationTable } from '@/core/components/table/base-table/delete-confimration-modal'
import {
  BaseTableActionType,
  IBaseTable,
} from '@/core/components/table/table-type'
import { selectDataPerPage } from '@/mock-data/table'
import { calculateRange } from '@/utils/calculateRange'
import { formatCapitalizeText } from '@/utils/formatCapitalizeText'
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
import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'
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
    padding: `${rem(8)} ${rem(8)}`,
    borderRadius: theme.radius.md,
    backgroundColor: '#018B14',
    border: 'none',
  },
  overlay: {},
}))

const styleForHeaderTitle = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '115%',
  color: '#112D3C',
}

export function BaseTable({
  data,
  type,
  headerTable,
  isLoading = false,
  BaseTableActionType = [],
  page = 1,
  limit = 6,
  total = 10,
  onPageChange,
  onLimitChange,
  onSearchingChange,
  refech,
}: IBaseTable) {
  const router = useRouter()
  const { classes, cx } = useStyles()
  const [selection, setSelection] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [loadingTable, setLoadingTable] = useState(false)
  const [selectedId, setSelectedId] = useState<string>('')
  const [setName, setSetName] = useState('')
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false)
  const [startIndex, endIndex] = calculateRange(
    page,
    Number((limit && limit) ?? 0),
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

  const toggleAll = () => {
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    )
  }

  const addTitle = useMemo(() => {
    let title = ''
    switch (type) {
      case 'student':
        title = 'Mahasiswa'
        break
      case 'faculty':
        title = 'Fakultas'
        break
      case 'teacher':
        title = 'Dosen'
        break
      default:
        title = 'Data (not yet implemented)'
    }
    return title
  }, [type])

  const addUrl = useMemo(() => {
    let url = ''
    switch (type) {
      case 'student':
        url = '/academic/student/add'
        break
      case 'teacher':
        url = '/academic/teacher/add'
        break
      case 'faculty':
        url = '/academic/master-data/faculty/add'
        break
      default:
        url = '#'
    }
    return url
  }, [type])

  const handleMenuItemClick = (
    id: string,
    name?: string,
    actionType: BaseTableActionType | null = null
  ) => {
    if (actionType) {
      if (type === 'student') {
        if (actionType === 'detail') {
          router.push(`/academic/student/profile/${id}`)
        }
        if (actionType === 'edit') {
          router.push(`/academic/student/edit/${id}`)
        }
        if (actionType === 'view_result') {
          setOpen(true)
          setSelectedId(id)
          setSetName(name || 'none')
        }
      }
      if (type === 'teacher') {
        if (actionType === 'detail') {
          router.push(`/academic/teacher/profile/${id}`)
        }
        if (actionType === 'edit') {
          router.push(`/academic/teacher/edit/${id}`)
        }
      }
      if (type === 'faculty') {
        if (actionType === 'edit') {
          router.push(`/academic/master-data/${type}/edit/${id}`)
        }
        if (actionType === 'delete') {
          setSelectedId(id)
          setSetName(name || 'none')
          setOpenDeleteConfirmation(true)
        }
      }
    }
  }

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
        {(type === 'student' || type === 'teacher') && (
          <React.Fragment>
            <td>
              <Group spacing="sm">
                <Avatar size={26} src={item.avatar || ''} radius={26} />
                <Flex
                  justify={'center'}
                  align={'flex-start'}
                  direction={'column'}
                >
                  <Text size="sm" weight={700}>
                    {item.name || 'noName'}
                  </Text>
                  <Text size="xs" weight={400}>
                    {item.email || 'noMail'}
                  </Text>
                </Flex>
              </Group>
            </td>
            {item &&
              Object.entries(item)
                .filter(
                  ([key]) =>
                    key !== 'avatar' &&
                    key !== 'name' &&
                    key !== 'email' &&
                    key !== 'id'
                )
                .map(([key, value]) => (
                  <td key={key}>{`${value || 'no Data'}`}</td>
                ))}
          </React.Fragment>
        )}
        {(type === 'default' || type === 'faculty') && (
          <React.Fragment>
            {item &&
              Object.entries(item)
                // .filter(([key, value]) => key !== 'id')
                .map(([key, value]) => (
                  <td key={key}>{`${value || 'no Data'}`}</td>
                ))}
          </React.Fragment>
        )}
        {type !== 'none' && (
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
                  {BaseTableActionType.map((actionType, index) => (
                    <Menu.Item
                      key={index}
                      className={classes.linksText}
                      onClick={() =>
                        handleMenuItemClick(
                          item.id,
                          item.name || item.faculty_name,
                          actionType
                        )
                      }
                    >
                      {formatCapitalizeText(actionType)}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            </Group>
          </td>
        )}
      </tr>
    )
  })

  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <OverlayLoading isLoading={isLoading || loadingTable} />
          <DeleteConfirmationTable
            open={openDeleteConfirmation}
            deleteId={selectedId}
            type={type}
            size="md"
            name={setName}
            handleClose={() => {
              setSelectedId('')
              setOpenDeleteConfirmation(false)
            }}
            handleLoading={setLoadingTable}
            handleRefetch={refech}
          />
          {/* ...other content */}
          {type === 'student' && (
            <React.Fragment>
              <ViewResult
                open={open}
                name={setName}
                id={selectedId}
                handleClose={setOpen}
              />
            </React.Fragment>
          )}
          <AddButtonBaseTable title={`Tambah ${addTitle}`} addUrl={addUrl} />
        </Grid.Col>
        <Grid.Col span={3} offset={3}>
          <Flex justify={'flex-end'}>
            {selection.length > 0 && (
              <RemoveRowTableButton
                title="Delete"
                onClick={() => alert('under development')}
              />
            )}
          </Flex>
        </Grid.Col>
        <Grid.Col span={3}>
          <Flex justify={'flex-end'}>
            {/* <SearchingField size="sm" /> */}
            <SearchingFieldTable size="sm" onReturnValue={onSearchingChange} />
          </Flex>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: rem(40) }}>
              <Checkbox
                onChange={() => {
                  toggleAll()
                }}
                checked={selection.length === data.length}
                indeterminate={
                  selection.length > 0 && selection.length !== data.length
                }
                transitionDuration={0}
                color="pink"
              />
            </th>
            {headerTable.length > 0 &&
              headerTable.map((item) => (
                <th style={styleForHeaderTitle} key={item}>
                  {item}
                </th>
              ))}
            {type !== 'none' && (
              <th style={styleForHeaderTitle}>
                <Box>
                  <Center>Tindakan</Center>
                </Box>
              </th>
            )}
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
              value={String(limit)}
              onChange={(value: string) => onLimitChange(Number(value))}
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
              total={Math.ceil(total / Number(limit))}
              position="center"
              value={Number(page)}
              onChange={onPageChange}
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
