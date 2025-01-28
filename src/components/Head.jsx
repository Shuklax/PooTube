const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="/hamburger-menu-filled-icon-in-transparent-background.jpg"
          alt="menu_icon"
        />
        <img
          className="h-8 w-auto ps-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
          alt="youtube_icon"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="border bg-black border-gray-400 rounded-l-full px-4 w-1/2 overflow-hidden h-9"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-gray-700 text-gray-300 px-2 rounded-r-full h-9">
          Search
        </button>
      </div>
      <div className="col-span-1 h-8 flex flex-row-reverse">
        <img src="/user-profile-icon.jpg" alt="user_profile" />
      </div>
    </div>
  );
};

export default Head;
