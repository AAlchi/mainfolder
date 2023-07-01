import HomePage from "./pages/HomePage";
import Sidebar from "./pages/Sidebar";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div style={{ width: "100%" }} className="p-5 flex justify-evenly">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
}
