"use client";

import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 dark:bg-gray-900">
      {/* Error Image */}
      <div className="mb-6">
        <Image
          src="https://st5.depositphotos.com/12659858/70658/i/450/depositphotos_706582956-stock-photo-rendering-error-text-screen-effects.jpg"
          alt="Error"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
          width={100}
          height={100}
        />
      </div>

      {/* Error Text */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-6">
        Please try again later or contact support if the problem persists.
      </p>

      {/* Call to Action */}
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
