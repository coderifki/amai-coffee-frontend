import CurtainLoader from '@components/loader/CurtainLoader'
import Layouts from '@core/Layouts'
import ScreeningDashboard from '@core/layouts/dashboard/ScreeningDashboard'

export default function DashboardPage() {
  return (
    <Layouts title="Welcome To Melina Coffee">
      <CurtainLoader />
      <ScreeningDashboard />
    </Layouts>
  )
}
