import React from "react";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 p-4">
      <div className="text-white rounded-md flex justify-between text-xl mb-6 font-semibold p-4 py-2 bg-indigo-700">
        Admin Panel
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white hover:ring-2 transition-all duration-300 cursor-pointer hover:ring-indigo-700 border rounded-lg p-6">
          <h3 className="text-lg font-bold">Total Users</h3>
          <p className="text-2xl font-semibold text-indigo-600">150</p>
          <p className="text-gray-500">Number of registered users</p>
        </div>

        <div className="bg-white hover:ring-2 transition-all duration-300 cursor-pointer hover:ring-indigo-700 border rounded-lg p-6">
          <h3 className="text-lg font-bold">Total Sales</h3>
          <p className="text-2xl font-semibold text-indigo-600">$12,300</p>
          <p className="text-gray-500">Total sales this month</p>
        </div>

        <div className="bg-white hover:ring-2 transition-all duration-300 cursor-pointer hover:ring-indigo-700 border rounded-lg p-6">
          <h3 className="text-lg font-bold">New Orders</h3>
          <p className="text-2xl font-semibold text-indigo-600">45</p>
          <p className="text-gray-500">New orders placed today</p>
        </div>

        <div className="bg-white hover:ring-2 transition-all duration-300 cursor-pointer hover:ring-indigo-700 border rounded-lg p-6">
          <h3 className="text-lg font-bold">Pending Reviews</h3>
          <p className="text-2xl font-semibold text-indigo-600">12</p>
          <p className="text-gray-500">Reviews awaiting approval</p>
        </div>
      </div>

      <div className="bg-white hover:ring-2 transition-all duration-300 cursor-pointer hover:ring-indigo-700 border rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="text-gray-700">User1 registered</span>
            <span className="text-gray-500 text-sm">10 mins ago</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-700">Order #1234 created</span>
            <span className="text-gray-500 text-sm">30 mins ago</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-700">User2 left a review</span>
            <span className="text-gray-500 text-sm">1 hour ago</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-700">User3 updated their profile</span>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
