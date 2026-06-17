import AdminSidebar from "../../../components/AdminSidebar";

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminSidebar />

      <div className="flex-1 p-10">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-400">
            Website Settings
          </h1>

          <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
            Save Settings
          </button>
        </div>

        {/* General Settings */}
        <div className="glass-card p-8 rounded-2xl border border-yellow-500/20 mb-8">

          <h2 className="text-2xl text-yellow-400 mb-6">
            General Settings
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-yellow-400">
                Website Name
              </label>

              <input
                type="text"
                placeholder="CSMUN 4.0"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400">
                School Name
              </label>

              <input
                type="text"
                placeholder="Cornerstone School"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

          </div>

        </div>

        {/* Contact Settings */}
        <div className="glass-card p-8 rounded-2xl border border-yellow-500/20 mb-8">

          <h2 className="text-2xl text-yellow-400 mb-6">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="email"
              placeholder="Official Email"
              className="bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

            <input
              type="text"
              placeholder="Instagram Link"
              className="bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

            <input
              type="text"
              placeholder="LinkedIn Link"
              className="bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

          </div>

        </div>

        {/* Registration Settings */}
        <div className="glass-card p-8 rounded-2xl border border-yellow-500/20 mb-8">

          <h2 className="text-2xl text-yellow-400 mb-6">
            Registration Settings
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Registration Form URL"
              className="bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

            <input
              type="date"
              className="bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

          </div>

          <div className="mt-6">

            <label className="flex items-center gap-3 text-yellow-400">
              <input type="checkbox" />
              Registration Open
            </label>

          </div>

        </div>

        {/* Countdown Settings */}
        <div className="glass-card p-8 rounded-2xl border border-yellow-500/20 mb-8">

          <h2 className="text-2xl text-yellow-400 mb-6">
            Countdown Settings
          </h2>

          <input
            type="datetime-local"
            className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
          />

        </div>

        {/* Admin Credentials */}
        <div className="glass-card p-8 rounded-2xl border border-yellow-500/20 mb-8">

          <h2 className="text-2xl text-yellow-400 mb-6">
            Admin Credentials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Admin Username"
              className="bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

            <input
              type="password"
              placeholder="Admin Password"
              className="bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

          </div>

        </div>

        {/* Maintenance Mode */}
        <div className="glass-card p-8 rounded-2xl border border-yellow-500/20">

          <h2 className="text-2xl text-yellow-400 mb-6">
            Maintenance Mode
          </h2>

          <label className="flex items-center gap-3 text-yellow-400">
            <input type="checkbox" />
            Enable Maintenance Mode
          </label>

          <p className="text-gray-400 mt-3">
            When enabled, visitors will see a maintenance page.
          </p>

        </div>

      </div>
    </main>
  );
}