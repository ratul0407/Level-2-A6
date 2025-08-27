import { Truck } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Truck className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white rounded-xl shadow-md hover:bg-green-400  transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
