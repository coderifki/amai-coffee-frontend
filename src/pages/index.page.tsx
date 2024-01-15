import CurtainLoader from '@components/loader/CurtainLoader'
import Layouts from '@core/Layouts'
import Home from './auth/login.page'

export default function DashboardPage() {
  return (
    <Layouts title="Welcome To Melina Coffee">
      <CurtainLoader />
      <Home />
    </Layouts>
  )
}
