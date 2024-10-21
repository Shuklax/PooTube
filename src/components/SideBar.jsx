
const SideBar = () => {
  return (
    <div className="shadow-lg flex flex-col w-48 pl-10 font-serif font-normal cursor-pointer">
      <ul className="pt-7 space-y-2">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Youtube Music</li>
      </ul>
      <ul className="pt-7 space-y-2">
        <h1 className="font-bold">You {'>'}</h1>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Your courses</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li>Downloads</li>
      </ul>
      <ul className="py-7 space-y-2">
        <h1 className="font-bold">Subscriptions</h1>
        <li>Firstpost</li>
        <li>Foodpharmer</li>
        <li>Hyperplexed</li>
        <li>NDTV</li>
      </ul>
    </div>
  )
}

export default SideBar