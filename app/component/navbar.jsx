import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">Tuition Free Education Program on Latest Technologies</div>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/" className="hover:underline">Apply</Link>
        <Link href="/" className="hover:underline">Jobs</Link>
        <Link href="/" className="hover:underline">Result</Link>
        <Link href="/" className="hover:underline">Courses</Link>
      </div>
    </nav>
  );
};

export default Navbar;
