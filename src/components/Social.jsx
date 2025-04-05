import React, { useState } from 'react';

const Social = () => {
    // State to manage bookmarks
    const [bookmarked, setBookmarked] = useState(false);
    const [bookmarkCount, setBookmarkCount] = useState(0);
  
    // Event handler for bookmark click
    const handleBookmarkClick = () => {
      setBookmarked(!bookmarked);
      setBookmarkCount(bookmarked ? bookmarkCount - 1 : bookmarkCount + 1);
    };
  return (
    <div className="max-w-8xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Hidden on mobile, shown on lg screens */}
        <div className="hidden lg:block w-full lg:w-72 flex-shrink-0">
          <div className="bg-white rounded-lg p-6 mb-6" style={{boxShadow:"rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
            <div className="text-center">
              <img
                src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=80&height=80&orientation=squarish&flag=3032fcfb-87df-4be1-96a4-c0a7a27f5187"
                className="w-20 h-20 rounded-full mx-auto mb-3"
                alt="Profile"
              />
              <h2 className="font-semibold text-lg">James Wilson</h2>
              <p className="text-gray-500 text-sm mb-4">@jameswilson</p>
              <div className="flex justify-center gap-8 mb-4">
                <div className="text-center">
                  <div className="font-semibold">89K</div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">45</div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">45</div>
                  <div className="text-sm text-gray-500">Posts</div>
                </div>
              </div>
              <button className="w-full bg-custom text-white !rounded-button py-2 px-4 font-medium">
                Create Post
              </button>
            </div>
          </div>
          <nav className="bg-white rounded-lg p-2 mb-6" style={{boxShadow:"rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-custom rounded-lg bg-orange-50"
            >
              <i className="fas fa-stream w-5" />
              <span className="ml-3">All Feeds</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-compass w-5" />
              <span className="ml-3">Explore</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-envelope w-5" />
              <span className="ml-3">Messages</span>
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                3
              </span>
            </a>
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-list w-5" />
              <span className="ml-3">Lists</span>
            </a> */}
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-bookmark w-5" />
              <span className="ml-3">Bookmark</span>
              <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {bookmarkCount}
              </span>
            </a>
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-store w-5" />
              <span className="ml-3">Marketplace</span>
            </a> */}
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-folder w-5" />
              <span className="ml-3">Files</span>
              <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                14
              </span>
            </a> */}
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-photo-video w-5" />
              <span className="ml-3">Media</span>
            </a> */}
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-user w-5" />
              <span className="ml-3">Profile</span>
            </a>
          </nav>
          <div className="bg-white rounded-lg p-4" style={{boxShadow:"rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
            <h3 className="font-semibold mb-4">Pages You Liked</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white">
                  <i className="fab fa-dribbble" />
                </div>
                <span className="ml-3 text-gray-700">Dribbble</span>
              </a>
              <a href="#" className="flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white">
                  <i className="fas fa-paint-brush" />
                </div>
                <span className="ml-3 text-gray-700">UI/UX Designs</span>
              </a>
              <a href="#" className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                  <i className="fab fa-figma" />
                </div>
                <span className="ml-3 text-gray-700">Figma Update</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content - Full width on mobile, flex-1 on larger screens */}
        <div className="flex-1 w-full">
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="flex items-start gap-4">
              <img
                src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=40&height=40&orientation=squarish&flag=48858035-c22c-4978-b5f4-8ff0f4f72dba"
                className="w-10 h-10 rounded-full"
                alt="User"
              />
              <div className="flex-1">
                <textarea
                  className="w-full border-0 focus:ring-0 resize-none"
                  rows={3}
                  placeholder="What's on your mind?"
                  defaultValue={""}
                />
                <div className="flex items-center justify-between mt-4 border-t pt-4">
                  <div className="flex gap-4">
                    <button className="text-gray-500 hover:text-gray-700">
                      <i className="far fa-image" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <i className="far fa-video" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <i className="far fa-file" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <i className="far fa-smile" />
                    </button>
                  </div>
                  <button className="bg-custom text-white !rounded-button px-6 py-2">
                    Share Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Popular Channels</h3>
              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="fas fa-chevron-left" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              <a href="#" className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <i className="fab fa-facebook-f" />
                </div>
              </a>
              <a href="#" className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  <i className="fab fa-discord" />
                </div>
              </a>
              <a href="#" className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <i className="fab fa-spotify" />
                </div>
              </a>
              <a href="#" className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  <i className="fab fa-twitch" />
                </div>
              </a>
              <a href="#" className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                  <i className="fab fa-youtube" />
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-6">

            <div className="bg-white rounded-lg p-6" style={{boxShadow:"rgba(17, 17, 26, 0.1) 0px 0px 16px"}}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=40&height=40&orientation=squarish&flag=2c7180fa-11bb-42d2-9443-a299ae434b58"
                    className="w-10 h-10 rounded-full"
                    alt="User"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">Richard Smith</h4>
                    <p className="text-sm text-gray-500">
                      United Kingdom • 1h ago
                    </p>
                  </div>
                </div>
                <button className="text-gray-400">
                  <i className="fas fa-ellipsis-h" />
                </button>
              </div>
              <p className="mb-4">
                Believe in yourself and all that you are. Know that there is
                something inside you that is greater than any obstacle.
                #MotivationMonday #Inspiration ✨
              </p>
              <img
                src="https://creatie.ai/ai/api/search-image?query=A red target with arrows hitting bullseye on orange background, representing success and achievement&width=600&height=400&orientation=landscape&flag=b42b550a-70ab-45db-8e46-3f4825cc5c59"
                className="w-full rounded-lg mb-4"
                alt="Post"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <i className="far fa-heart" />
                    <span>2.5K</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <i className="far fa-comment" />
                    <span>48</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <i className="far fa-share-square" />
                    <span>Share</span>
                  </button>
                </div>
                <button 
                className={`text-gray-500 hover:text-gray-700 ${bookmarked ? 'text-black' : ''}`} 
                onClick={handleBookmarkClick}
              >
                <i className={`far ${bookmarked ? 'fa-solid fa-bookmark' : 'fa-bookmark'}`} />
              </button>
              </div>
            </div>
            

            <div className="bg-white rounded-lg p-6" style={{boxShadow:"rgba(17, 17, 26, 0.1) 0px 0px 16px"}}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=40&height=40&orientation=squarish&flag=2c7180fa-11bb-42d2-9443-a299ae434b58"
                    className="w-10 h-10 rounded-full"
                    alt="User"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-gray-500">
                      United Kingdom • 1h ago
                    </p>
                  </div>
                </div>
                <button className="text-gray-400">
                  <i className="fas fa-ellipsis-h" />
                </button>
              </div>
              <p className="mb-4">
                Believe in yourself and all that you are. Know that there is
                something inside you that is greater than any obstacle.
                #MotivationMonday #Inspiration ✨
              </p>
              <img
                src="https://creatie.ai/ai/api/search-image?query=A red target with arrows hitting bullseye on orange background, representing success and achievement&width=600&height=400&orientation=landscape&flag=b42b550a-70ab-45db-8e46-3f4825cc5c59"
                className="w-full rounded-lg mb-4"
                alt="Post"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <i className="far fa-heart" />
                    <span>2.5K</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <i className="far fa-comment" />
                    <span>48</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <i className="far fa-share-square" />
                    <span>Share</span>
                  </button>
                </div>
                <button 
                className={`text-gray-500 hover:text-gray-700 ${bookmarked ? 'text-black' : ''}`} 
                onClick={handleBookmarkClick}
              >
                <i className={`far ${bookmarked ? 'fa-solid fa-bookmark' : 'fa-bookmark'}`} />
              </button>
              </div>
            </div>

          </div>
        </div>

        {/* Right Sidebar - Hidden on mobile, shown on lg screens */}
        <div className="hidden lg:block w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-4">
                <button className="bg-custom text-white !rounded-button px-4 py-2">
                  General
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  Primary
                </button>
              </div>
              <button className="text-gray-400">
                <i className="fas fa-cog" />
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=40&height=40&orientation=squarish&flag=0ad761f2-8e8b-4c6c-aaee-d7561230d64e"
                    className="w-10 h-10 rounded-full"
                    alt="User"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">Anthony Lewis</h4>
                    <p className="text-sm text-gray-500">United States</p>
                  </div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=40&height=40&orientation=squarish&flag=57052aba-58dc-403a-8aa4-a040f98f6a2a"
                    className="w-10 h-10 rounded-full"
                    alt="User"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">Harvey Smith</h4>
                    <p className="text-sm text-gray-500">Brazil</p>
                  </div>
                </div>
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </div>
            </div>
            <button className="w-full text-custom font-medium mt-6">
              View All
            </button>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold mb-6">Saved Feeds</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
                  <i className="fas fa-heartbeat" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">World Health</h4>
                  <p className="text-sm text-gray-500">
                    Retail investor party continues even as...
                  </p>
                </div>
                <button className="text-yellow-500">
                  <i className="fas fa-star" />
                </button>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white">
                  <i className="fas fa-microchip" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">T3 Tech</h4>
                  <p className="text-sm text-gray-500">
                    iPad Air (2020) vs Samsung Galaxy Tab...
                  </p>
                </div>
                <button className="text-yellow-500">
                  <i className="fas fa-star" />
                </button>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                  <i className="fas fa-camera" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Fstoppers</h4>
                  <p className="text-sm text-gray-500">
                    Beyond capital gains tax! Top 50 stock...
                  </p>
                </div>
                <button className="text-yellow-500">
                  <i className="fas fa-star" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social

// import React, { useState } from 'react';

// const Social = () => {
//   // State to manage bookmarks
//   const [bookmarked, setBookmarked] = useState(false);
//   const [bookmarkCount, setBookmarkCount] = useState(0);

//   // Event handler for bookmark click
//   const handleBookmarkClick = () => {
//     setBookmarked(!bookmarked);
//     setBookmarkCount(bookmarked ? bookmarkCount - 1 : bookmarkCount + 1);
//   };

//   return (
//     <div className="max-w-8xl mx-auto px-4 py-6">
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left Sidebar */}
//         <div className="hidden lg:block w-full lg:w-72 flex-shrink-0">
//           <nav className="bg-white rounded-lg p-2 mb-6">
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
//             >
//               <i className="fas fa-bookmark w-5" />
//               <span className="ml-3">Bookmark</span>
//               <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
//                 {bookmarkCount}
//               </span>
//             </a>
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 w-full">
//           <div className="bg-white rounded-lg p-6">
//             <div className="flex items-center justify-between">
//               <h4 className="font-semibold">Richard Smith</h4>
//               <button 
//                 className={`text-gray-500 hover:text-gray-700 ${bookmarked ? 'text-black' : ''}`} 
//                 onClick={handleBookmarkClick}
//               >
//                 <i className={`far ${bookmarked ? 'fa-bookmark' : 'fa-bookmark'}`} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Social;