import { LoadingOverlay } from '@mantine/core'

interface Props {
  isLoading: boolean
}

export default function OverlayLoading({ isLoading = false }: Props) {
  return (
    <div>
      <LoadingOverlay
        visible={isLoading}
        overlayBlur={2}
        loaderProps={{ size: 'xl', color: '#018B14', variant: 'dots' }}
        overlayOpacity={0.3}
        overlayColor="#c5c5c5"
      />
    </div>
  )
}
