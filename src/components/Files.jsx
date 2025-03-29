import React from 'react'

const Files = () => {
  return (
    <div className="min-h-screen flex">
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-semibold">File Manager</h1>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://creatie.ai/ai/api/search-image?query=professional headshot portrait with neutral background&width=40&height=40&orientation=squarish&flag=0775adc1-1f0d-4173-b8f2-beb4e94bf093"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium">James Hong</h3>
              <p className="text-sm text-gray-500">jin343@example.com</p>
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <i className="fas fa-cloud-upload-alt text-gray-400 text-xl mb-2" />
            <p className="text-sm text-gray-600">Drop files here</p>
            <p className="text-xs text-gray-500">or browse from computer</p>
          </div>
        </div>
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-custom bg-gray-100 rounded-lg"
          >
            <i className="fas fa-folder" />
            <span>All Folders/Files</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fab fa-google-drive" />
            <span>Drive</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fab fa-dropbox" />
            <span>Dropbox</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-share-alt" />
            <span>Shared with Me</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-file-alt" />
            <span>Documents</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-clock" />
            <span>Recent Files</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-star" />
            <span>Important</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <i className="fas fa-photo-video" />
            <span>Media</span>
          </a>
        </nav>
        <div className="mt-8">
          <h3 className="text-sm font-medium mb-3">Storage Details</h3>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div id="storage-chart" className="h-32" />
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Used Space</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-custom h-1 rounded-full"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <main className="flex-1 overflow-auto">
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-2xl">
              <input
                type="text"
                placeholder="Search files and folders..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
              />
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <i className="fas fa-expand" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <i className="fas fa-bell" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <i className="fas fa-cog" />
            </button>
            <button className="bg-custom text-white px-4 py-2 rounded-lg !rounded-button flex items-center gap-2">
              <i className="fas fa-plus" />
              Create Folder
            </button>
          </div>
        </div>
      </header>
      <div className="p-8">
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fab fa-dropbox text-blue-600 text-2xl" />
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-ellipsis-h" />
              </button>
            </div>
            <h3 className="font-medium mb-1">Dropbox</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">200 Files</span>
              <span className="font-medium">28GB</span>
            </div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-blue-600 h-1 rounded-full"
                style={{ width: "65%" }}
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fab fa-google-drive text-green-600 text-2xl" />
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-ellipsis-h" />
              </button>
            </div>
            <h3 className="font-medium mb-1">Google Drive</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">144 Files</span>
              <span className="font-medium">54GB</span>
            </div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-green-600 h-1 rounded-full"
                style={{ width: "45%" }}
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-cloud text-purple-600 text-2xl" />
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-ellipsis-h" />
              </button>
            </div>
            <h3 className="font-medium mb-1">Cloud Storage</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">144 Files</span>
              <span className="font-medium">54GB</span>
            </div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-purple-600 h-1 rounded-full"
                style={{ width: "55%" }}
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-hdd text-gray-600 text-2xl" />
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-ellipsis-h" />
              </button>
            </div>
            <h3 className="font-medium mb-1">Internal Storage</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">144 Files</span>
              <span className="font-medium">54GB</span>
            </div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gray-600 h-1 rounded-full"
                style={{ width: "35%" }}
              />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Quick Access</h2>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-700">
                Close
              </button>
              <button className="text-custom hover:text-custom-dark">
                View All
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-6">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-file-word text-blue-600" />
                </div>
                <button className="text-yellow-400">
                  <i className="fas fa-star" />
                </button>
              </div>
              <h4 className="font-medium text-sm mb-1">Final Change.doc</h4>
              <span className="text-xs text-gray-500">2.4 GB</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-file-pdf text-red-600" />
                </div>
                <button className="text-gray-400 hover:text-yellow-400">
                  <i className="far fa-star" />
                </button>
              </div>
              <h4 className="font-medium text-sm mb-1">Marklist.pdf</h4>
              <span className="text-xs text-gray-500">2.4 GB</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-file-excel text-green-600" />
                </div>
                <button className="text-gray-400 hover:text-yellow-400">
                  <i className="far fa-star" />
                </button>
              </div>
              <h4 className="font-medium text-sm mb-1">List.xlsx</h4>
              <span className="text-xs text-gray-500">2.4 GB</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-folder text-yellow-600" />
                </div>
                <button className="text-gray-400 hover:text-yellow-400">
                  <i className="far fa-star" />
                </button>
              </div>
              <h4 className="font-medium text-sm mb-1">Group Photos</h4>
              <span className="text-xs text-gray-500">2.4 GB</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-image text-purple-600" />
                </div>
                <button className="text-yellow-400">
                  <i className="fas fa-star" />
                </button>
              </div>
              <h4 className="font-medium text-sm mb-1">Nature.png</h4>
              <span className="text-xs text-gray-500">2.4 GB</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Recent Videos</h2>
            <select className="border-0 text-sm text-gray-500 focus:ring-0">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=futuristic sci-fi movie scene with glowing neon circles&width=400&height=225&orientation=landscape&flag=ad6f4e4b-374c-4803-a194-485d808704ed"
                  alt="Video thumbnail"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
                  <i className="fas fa-play text-2xl" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Inertia Movie</h4>
                  <button className="text-yellow-400">
                    <i className="fas fa-star" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">2.4 GB</span>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=modern smartphone devices with glowing screens on clean background&width=400&height=225&orientation=landscape&flag=bcfeef7e-e39a-4a66-93d6-cf1a67cd4805"
                  alt="Video thumbnail"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
                  <i className="fas fa-play text-2xl" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">2028 Nov 10.mp4</h4>
                  <button className="text-yellow-400">
                    <i className="fas fa-star" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">2.4 GB</span>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=colorful liquid art abstract motion with vibrant colors&width=400&height=225&orientation=landscape&flag=ac9c3284-1ad8-4c98-ba6b-f1c9f18267bd"
                  alt="Video thumbnail"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
                  <i className="fas fa-play text-2xl" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">AI Liquid Color</h4>
                  <button className="text-yellow-400">
                    <i className="fas fa-star" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">2.4 GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Files;