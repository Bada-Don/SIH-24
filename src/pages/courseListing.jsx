import courses from "./courseListing";
function RecommendedCourses() {
 
    return (
      <div className="bg-[#0d0d0d] text-white min-h-screen flex">
        {/* Sidebar Filters */}
        <div className="w-1/4 p-6 sticky top-0 h-screen overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <label>Category</label>
            <select className="bg-gray-900 border border-gray-500 p-2 w-full mt-2">
              <option>All Categories</option>
              <option>Web Development</option>
              <option>Design</option>
              <option>Backend Development</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Level</label>
            <select className="bg-gray-900 border border-gray-500 p-2 w-full mt-2">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Price Range</label>
            <input
              type="range"
              className="w-full mt-2"
              min="0"
              max="200"
            />
          </div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white p-2 rounded w-full">
            Apply Filters
          </button>
        </div>
  
        {/* Main Content - Course Cards */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6">Recommended Courses</h1>
          <div className="grid grid-cols-1 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-600 flex justify-between items-center"
              >
                {/* Text Section */}
                <div className="w-2/3">
                  <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                  <p className="text-purple-500 mb-2">{course.provider}</p>
                  <p className="mb-2">
                    Category: <span className="font-bold">{course.category}</span>
                  </p>
                  <p className="mb-2">
                    Level: <span className="font-bold">{course.level}</span>
                  </p>
                  <p className="mb-4">
                    Skills:{" "}
                    <span className="font-bold">{course.skills.join(", ")}</span>
                  </p>
                  <p className="mb-4">
                    Price: <span className="text-red-500">{course.price}</span>
                  </p>
                  <button className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded">
                    Enroll Now
                  </button>
                </div>
  
                {/* Course Image */}
                <div className="w-1/3">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-80 h-40 object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default RecommendedCourses;
  