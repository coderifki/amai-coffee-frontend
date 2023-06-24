import { Button, createStyles, Flex, Grid, Paper } from '@mantine/core'

const useStyles = createStyles(() => ({
  gridContainer: {
    margin: '10px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#018B14 !important',
    border: 'none',
    color: '#fff',
  },
  backButton: {
    border: '2px solid #018B14',
    color: '#018B14',
  },
}))

export default function FormButtonTeacher() {
  const { classes } = useStyles()
  return (
    <div>
      <Grid className={classes.gridContainer}>
        <Grid.Col md={8} xs={12}>
          <Paper shadow="sm" radius="md" p="md">
            <Flex direction={'row'} gap={'md'} justify={'center'}>
              <Button className={classes.nextButton} fullWidth type={'submit'}>
                {'Submit'}
              </Button>
            </Flex>
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  )
}
