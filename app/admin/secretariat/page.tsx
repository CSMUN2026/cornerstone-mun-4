import AdminSidebar from "../../../components/AdminSidebar";

export default function SecretariatPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminSidebar />

      <div className="flex-1 p-10">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-400">
            Secretariat Management
          </h1>

          <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
            + Add Member
          </button>
        </div>

        {/* Add Member Form */}
        <div className="glass-card p-8 rounded-2xl border border-yellow-500/20">

          <h2 className="text-2xl text-yellow-400 mb-6">
            Add Secretariat Member
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-yellow-400">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400">
                Designation
              </label>

              <input
                type="text"
                placeholder="Secretary-General"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400">
                Email
              </label>

              <input
                type="email"
                placeholder="member@email.com"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400">
                Contact Number
              </label>

              <input
                type="text"
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="block mb-2 text-yellow-400">
              Biography
            </label>

            <textarea
              rows={5}
              placeholder="Enter member biography..."
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">

            <div>
              <label className="block mb-2 text-yellow-400">
                Instagram URL
              </label>

              <input
                type="text"
                placeholder="https://instagram.com/username"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400">
                LinkedIn URL
              </label>

              <input
                type="text"
                placeholder="https://linkedin.com/in/profile"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="block mb-2 text-yellow-400">
              Upload Photo
            </label>

            <input
              type="file"
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

          </div>

          <button className="mt-8 bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl hover:scale-105 transition">
            Save Member
          </button>

        </div>

        {/* Existing Members */}

        <div className="mt-12">

          <h2 className="text-3xl text-yellow-400 mb-6">
            Existing Secretariat Members
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="glass-card p-6 border border-yellow-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-400">
                Secretary-General
              </h3>

              <p className="mt-2 text-white">
                Aarav Malhotra
              </p>
            </div>

            <div className="glass-card p-6 border border-yellow-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-400">
                Deputy Secretary-General
              </h3>

              <p className="mt-2 text-white">
                Ananya Sharma
              </p>
            </div>

            <div className="glass-card p-6 border border-yellow-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-400">
                USG Academics
              </h3>

              <p className="mt-2 text-white">
                Rohan Verma
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}