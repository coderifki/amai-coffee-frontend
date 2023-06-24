import { createStyles, Flex, Table } from '@mantine/core'

const useStyles = createStyles(() => ({
  tableRoot: {
    border: '2px solid #018B14',
  },
  tableHeader: {
    backgroundColor: '#018B1433',
    borderBottom: '2px solid #018B14 !important',
  },
  tableData: {
    borderBottom: '2px solid #018B14',
  },
}))

const dataArr = [
  {
    courseCode: 1,
    course: 'Nama',
    indexValue: 1,
    result: 90,
    grade: 'Grade',
  },
  {
    courseCode: 1,
    course: 'Nama',
    indexValue: 1,
    result: 90,
    grade: 'Grade',
  },
]

export default function ViewResultTable() {
  const { classes } = useStyles()
  const rows = dataArr.map((element, index) => (
    <tr key={index}>
      <td className={classes.tableData}>{element.courseCode}</td>
      <td className={classes.tableData}>{element.course}</td>
      <td className={classes.tableData}>{element.indexValue}</td>
      <td className={classes.tableData}>{element.result}</td>
      <td className={classes.tableData}>{element.grade}</td>
    </tr>
  ))
  return (
    <div>
      <Table className={classes.tableRoot} highlightOnHover withBorder>
        {/* {...rows} */}
        <thead>
          <tr>
            <th
              className={classes.tableHeader}
              style={{
                backgroundColor: '#018B1433',
              }}
            >
              Kode Matakuliah
            </th>
            <th className={classes.tableHeader}>
              <Flex sx={{ width: '200px' }}>Mata Kuliah</Flex>
            </th>
            <th className={classes.tableHeader}>Nilai Indeks</th>
            <th className={classes.tableHeader}>Nilai Ujian</th>
            <th className={classes.tableHeader}>Grade</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  )
}
