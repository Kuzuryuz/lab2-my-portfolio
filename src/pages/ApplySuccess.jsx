import { useNavigate } from "react-router-dom";

const ApplySuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Application Submitted</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        ✅ Thank you — your application has been received. We will review it and
        get back to you via email.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </button>

        <button
          onClick={() => navigate("/apply/step-1")}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
        >
          Start New Application
        </button>
      </div>
    </div>
  );
};

export default ApplySuccess;
