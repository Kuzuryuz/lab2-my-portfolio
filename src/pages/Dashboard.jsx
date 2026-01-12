import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import projectsData from "../data/projects";
import { useAuthStore } from "../store/useAuthStore";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("status") || "all";
  const [status, setStatus] = useState(initial);
  const [projects, setProjects] = useState(projectsData);
  const { role } = useAuthStore();

  useEffect(() => {
    setSearchParams(status === "all" ? {} : { status });
  }, [status, setSearchParams]);

  useEffect(() => {
    const param = searchParams.get("status") || "all";
    setStatus(param);
  }, []); // on mount sync from URL

  const filtered = projects.filter((p) =>
    status === "all" ? true : p.status === status
  );

  const handleDelete = (id) => {
    if (role !== "admin") return;
    setProjects((s) => s.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-500">Filter:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border rounded-md bg-white dark:bg-gray-700"
          >
            <option value="all">All</option>
            <option value="todo">Todo</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-1">Status: {p.status}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {role === "admin" && (
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-sm text-red-500 border border-red-500 px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
