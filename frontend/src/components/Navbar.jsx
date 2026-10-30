import {
  Search,
  MessageCircle,
  Bell,
  PlusCircle,
} from "lucide-react";

function Navbar({ search, setSearch }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-wrap items-center justify-between gap-4">

          {/* Logo */}

          <a href="/" className="text-2xl font-bold text-green-700">
            Bazar.com
          </a>

          {/* Search */}

          <div className="flex flex-1 max-w-xl">

            <input
              type="text"
              placeholder="Find your product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-l-lg outline-none focus:border-green-600"
            />

            <button className="bg-green-700 text-white px-5 rounded-r-lg">
              <Search size={22} />
            </button>

          </div>

          {/* Navigation buttons */}

          <div className="flex items-center gap-4">

            <button aria-label="Messages">
              <MessageCircle size={23} />
            </button>

            <button aria-label="Notifications">
              <Bell size={23} />
            </button>

            <button className="hidden sm:flex items-center gap-2 bg-green-700 text-white px-4 py-3 rounded-lg hover:bg-green-800">
              <PlusCircle size={18} />
              Post Product
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;