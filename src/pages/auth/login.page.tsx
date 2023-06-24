import Layouts from '@core/Layouts';
import Login from '@core/layouts/auth/login';

export default function Home() {
  return (
    <Layouts title="Welcome To Contag Indonesia">
      <Login />
    </Layouts>
  );
}
