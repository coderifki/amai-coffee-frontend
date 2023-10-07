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
        loaderProps={{ size: 'xl', color: '#BCA37F', variant: 'dots' }}
        overlayOpacity={0.3}
        overlayColor="#c5c5c5"
      />
    </div>
  )
}
