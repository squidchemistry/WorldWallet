import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-5xl font-bold mb-8">Welcome to PaySite</h1>
      <p className="text-lg mb-6">Secure and fast payments, anytime, anywhere.</p>
      <div>
        <Link to="/payments" className="bg-blue-500 text-white px-6 py-2 rounded">Make a Payment</Link>
        <Link to="/signup" className="bg-green-500 text-white px-6 py-2 rounded ml-4">Sign Up</Link>
      </div>
    </div>
  );
}

export default Home;
