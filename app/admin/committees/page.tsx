import AdminSidebar from "../../../components/AdminSidebar";

export default function CommitteesPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminSidebar />

      <div className="flex-1 p-10">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-400">
            Committee Management
          </h1>

          <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
            + Add Committee
          </button>
        </div>

        {/* Form Card */}
        <div className="glass-card p-8 rounded-2xl border border-yellow-500/20">

          <h2 className="text-2xl text-yellow-400 mb-6">
            Create New Committee
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-yellow-400">
                Committee Name
              </label>

              <input
                type="text"
                placeholder="DISEC"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400">
                Committee Code
              </label>

              <input
                type="text"
                placeholder="DISEC"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400">
                Chairperson
              </label>

              <input
                type="text"
                placeholder="Enter Chairperson Name"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400">
                Vice Chairperson
              </label>

              <input
                type="text"
                placeholder="Enter Vice Chairperson"
                className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="block mb-2 text-yellow-400">
              Agenda
            </label>

            <textarea
              rows={4}
              placeholder="Enter committee agenda..."
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

          </div>

          <div className="mt-6">

            <label className="block mb-2 text-yellow-400">
              Committee Description
            </label>

            <textarea
              rows={5}
              placeholder="Enter committee description..."
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

          </div>

          <div className="mt-6">

            <label className="block mb-2 text-yellow-400">
              Committee Image
            </label>

            <input
              type="file"
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />

          </div>

          <button className="mt-8 bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl hover:scale-105 transition">
            Save Committee
          </button>

        </div>

        {/* Existing Committees */}

        <div className="mt-12">

          <h2 className="text-3xl text-yellow-400 mb-6">
            Existing Committees
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="glass-card p-6 border border-yellow-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-400">
                DISEC
              </h3>

              <p className="text-gray-400 mt-2">
                Disarmament and International Security Committee
              </p>
            </div>

            <div className="glass-card p-6 border border-yellow-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-400">
                UNSC
              </h3>

              <p className="text-gray-400 mt-2">
                United Nations Security Council
              </p>
            </div>

            <div className="glass-card p-6 border border-yellow-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-400">
                UNHRC
              </h3>

              <p className="text-gray-400 mt-2">
                United Nations Human Rights Council
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}