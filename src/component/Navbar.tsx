import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className=" mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-xl font-bold">Countdown Timer</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
