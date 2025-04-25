import React from "react";

export default function Card() {
  return (
    <>
      <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border p-4 hover:shadow-xl transition duration-300">
        <img
          class="size-16 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div class="px-2 py-4">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">Card Title</h2>
          <p class="text-gray-600 text-sm">
            This is a simple card built using Tailwind CSS. You can customize it
            to suit your needs.
          </p>
        </div>
        <div class="px-2 pt-2">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}
