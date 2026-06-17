import AdminSidebar from "../../components/AdminSidebar";

export default function AdminDashboard() {
  return (
    <main className="flex min-h-screen bg-black text-white">

      <AdminSidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold text-yellow-400">
          CSMUN 4.0 Dashboard
        </h1>

        <p className="mt-3 text-gray-400">
          Welcome Administrator
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="glass-card p-6">
            <h2 className="text-xl text-yellow-400 font-semibold">
              Committees
            </h2>

            <p className="text-gray-400 mt-2">
              Manage all committees
            </p>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl text-yellow-400 font-semibold">
              Secretariat
            </h2>

            <p className="text-gray-400 mt-2">
              Manage secretariat members
            </p>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl text-yellow-400 font-semibold">
              Hero Section
            </h2>

            <p className="text-gray-400 mt-2">
              Update homepage content
            </p>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl text-yellow-400 font-semibold">
              Website Settings
            </h2>

            <p className="text-gray-400 mt-2">
              Configure website settings
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}