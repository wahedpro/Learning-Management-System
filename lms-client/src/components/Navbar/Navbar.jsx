
function Navbar() {
  return (
    <div className="w-[90%] mx-auto flex justify-between py-3 border-b-2 border-[#eeeeee]">
        {/* logo here */}
        <h3>LearnHub</h3>

        {/* menu here */}
        <div className="flex gap-5">
           <p>Home</p>
           <p>all courses</p>
        </div>

        <div>
            <p className="bg-[#0076df] text-white px-3">Login</p>
        </div>
    </div>
  )
}

export default Navbar