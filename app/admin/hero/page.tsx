import AdminSidebar from "../../../components/AdminSidebar";

export default function HeroPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminSidebar />

      <div className="flex-1 p-10">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-400">
            Hero Section Management
          </h1>

          <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
            Save Changes
          </button>
        </div>

        <div className="glass-card p-8 rounded-2xl border border-yellow-500/20">

          <h2 className="text-2xl text-yellow-400 mb-6">
            Homepage Hero Settings
          </h2>

          {/* Main Title */}
          <div className="mb-6">
            <label className="block mb-2 text-yellow-400">
              Main Title
            </label>

            <input
              type="text"
              placeholder="CSMUN 4.0"
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />
          </div>

          {/* Small Logo Text */}
          <div className="mb-6">
            <label className="block mb-2 text-yellow-400">
              Logo Subtitle
            </label>

            <input
              type="text"
              placeholder="CSMUN 4.0"
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />
          </div>

          {/* Tagline */}
          <div className="mb-6">
            <label className="block mb-2 text-yellow-400">
              Tagline
            </label>

            <textarea
              rows={3}
              placeholder="Negotiating Today's Challenges, Designing Tomorrow's Solutions"
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />
          </div>

          {/* School Name */}
          <div className="mb-6">
            <label className="block mb-2 text-yellow-400">
              School Name
            </label>

            <input
              type="text"
              placeholder="Cornerstone School Model United Nations"
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />
          </div>

          {/* Register Button */}
          <div className="mb-6">
            <label className="block mb-2 text-yellow-400">
              Register Button Link
            </label>

            <input
              type="text"
              placeholder="https://forms.google.com/..."
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />
          </div>

          {/* Hero Background */}
          <div className="mb-6">
            <label className="block mb-2 text-yellow-400">
              Upload Hero Background
            </label>

            <input
              type="file"
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />
          </div>

          {/* Logo Upload */}
          <div className="mb-6">
            <label className="block mb-2 text-yellow-400">
              Upload CSMUN Logo
            </label>

            <input
              type="file"
              className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white"
            />
          </div>

          {/* Theme Color */}
          <div className="mb-6">
            <label className="block mb-2 text-yellow-400">
              Theme Color
            </label>

            <select className="w-full bg-black border border-yellow-500/20 rounded-lg p-3 text-white">
              <option>Gold</option>
              <option>Blue</option>
              <option>White</option>
              <option>Custom</option>
            </select>
          </div>

          <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl hover:scale-105 transition">
            Save Hero Settings
          </button>

        </div>

        {/* Preview Section */}

        <div className="mt-12 glass-card p-8 rounded-2xl border border-yellow-500/20">

          <h2 className="text-2xl text-yellow-400 mb-6">
            Current Hero Preview
          </h2>

          <div className="bg-black border border-yellow-500/20 rounded-xl p-10 text-center">

            <h3 className="text-yellow-400 text-lg tracking-widest">
              CSMUN 4.0
            </h3>

            <h1 className="text-5xl font-bold text-white mt-4">
              CSMUN 4.0
            </h1>

            <p className="mt-4 text-gray-300">
              Negotiating Today's Challenges,
              Designing Tomorrow's Solutions
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}