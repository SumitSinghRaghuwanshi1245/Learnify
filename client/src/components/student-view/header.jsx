import { GraduationCap, TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 text-white border-b bg-gradient-to-r from-violet-950 to-black">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center hover:text-white">
          {/* <GraduationCap className="w-8 h-8 mr-4" /> */}
          <span className="font-extrabold md:text-xl text-[14px]">
            <img src="../logo.png" alt="." className="w-12 h-12 rounded-full" />
          </span>
        </Link>
        <div className="flex items-center space-x-1">
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate('/student-courses')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-[14px] md:text-[16px] font-medium text-violet-400">
              <button >My Courses </button>
            </span>
            {/* <TvMinimalPlay className="w-8 h-8 cursor-pointer" /> */}
          </div>
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes('/courses')
                ? null
                : navigate('/courses');
            }}
            className="text-[14px] md:text-[16px] font-medium"
          >
            Explore Courses
          </Button>
          <Button onClick={handleLogout}>Sign Out</Button>
        </div>
      </div>
    </header>
  );
};

export default StudentViewCommonHeader;
