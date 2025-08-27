import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router";

const UnAuthorized = () => {
  return (
    <div className="flex flex-col">
      <Navbar />

      <main className="min-h-[70vh] grid justify-center items-center ">
        <div className="text-center space-y-6">
          <h1 className="text-gray-800 font-bold text-xl lg:text-4xl">
            You are not authorized to view this route{" "}
          </h1>
          <Button>
            <Link to="/">
              <span className="flex items-center gap-2 ">
                <MoveLeft /> Go back
              </span>
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnAuthorized;
