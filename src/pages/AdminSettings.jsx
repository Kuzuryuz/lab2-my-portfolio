import React, { useState } from "react";

const AdminSettings = () => {
  const [maintenance, setMaintenance] = useState(false);
  const [allowSignup, setAllowSignup] = useState(true);
  const [siteTitle, setSiteTitle] = useState("MyPortfolio Admin");

  const stats = {
    users: 1248,
    projects: 42,
    activeThisWeek: 57,
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Settings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage application-level settings and view quick statistics.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
            Admin
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Application Settings</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
              <label className="text-sm text-gray-600">Site Title</label>
              <input
                value={siteTitle}
                onChange={(e) => setSiteTitle(e.target.value)}
                className="md:col-span-2 p-2 border rounded-md bg-gray-50 dark:bg-gray-700"
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
              <div>
                <div className="font-medium">Maintenance Mode</div>
                <div className="text-sm text-gray-500">
                  Prevent new users and show maintenance banner.
                </div>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={maintenance}
                  onChange={() => setMaintenance((s) => !s)}
                  className="sr-only"
                />
                <span
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition ${
                    maintenance ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                      maintenance ? "translate-x-5" : ""
                    }`}
                  />
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
              <div>
                <div className="font-medium">Allow New Signups</div>
                <div className="text-sm text-gray-500">
                  Enable or disable public registration.
                </div>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowSignup}
                  onChange={() => setAllowSignup((s) => !s)}
                  className="sr-only"
                />
                <span
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition ${
                    allowSignup ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                      allowSignup ? "translate-x-5" : ""
                    }`}
                  />
                </span>
              </label>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">
                Save Changes
              </button>
              <button
                className="px-4 py-2 border rounded-md text-sm"
                onClick={() => {
                  setSiteTitle("MyPortfolio Admin");
                  setMaintenance(false);
                  setAllowSignup(true);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500">Quick Stats</h3>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-lg font-bold">{stats.users}</div>
                <div className="text-xs text-gray-500">Users</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">{stats.projects}</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">{stats.activeThisWeek}</div>
                <div className="text-xs text-gray-500">Active</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500">Quick Actions</h3>
            <div className="mt-3 flex flex-col gap-2">
              <button className="w-full text-left px-3 py-2 border rounded-md">
                Manage Users
              </button>
              <button className="w-full text-left px-3 py-2 border rounded-md">
                View Logs
              </button>
              <button className="w-full text-left px-3 py-2 border rounded-md">
                System Backup
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AdminSettings;
