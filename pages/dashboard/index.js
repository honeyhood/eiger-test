import AdminPage from '../../components/AdminPage';
import Sidebar from '../../components/Sidebar';
import User from '../../components/User';

export const Dashboard = () => {
  return (
    <div className="relative">
      <Sidebar />
      <main className="ml-64">
        <AdminPage />
        <User />
      </main>
    </div>
  );
};

export default Dashboard;
