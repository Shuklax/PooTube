const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 shadow-xl">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="/hamburger-menu-filled-icon-in-transparent-background.jpg"
          alt="menu_icon"
        />
        <img
          className="h-8 w-auto ps-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
          alt="youtube_icon"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="border bg-black text-gray-200 outline-none border-gray-800 rounded-l-full px-4 w-1/2 overflow-hidden h-9"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-gray-800 px-2 rounded-r-full h-9 w-11 cursor-pointer">
          🔍
        </button>
      </div>
      <div className="col-span-1 h-8 flex flex-row-reverse cursor-pointer bg-white">
        <img src="/user-profile-icon.jpg" alt="user_profile" />
      </div>
    </div>
  );
};

export default Head;
