import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">PaySite</div>
        <div>
          <Link className="text-white mx-2" to="/">Home</Link>
          <Link className="text-white mx-2" to="/payments">Payments</Link>
          <Link className="text-white mx-2" to="/account">Account</Link>
          <Link className="text-white mx-2" to="/support">Support</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
