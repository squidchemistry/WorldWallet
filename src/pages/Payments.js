const Payments = () => {
    return (
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-8">Make a Payment</h2>
        <form className="max-w-lg mx-auto bg-white shadow-md p-8 rounded">
          <div className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input type="text" className="w-full px-4 py-2 border rounded" placeholder="1234 5678 9012 3456"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Amount</label>
            <input type="number" className="w-full px-4 py-2 border rounded" placeholder="$100"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Recipient</label>
            <input type="text" className="w-full px-4 py-2 border rounded" placeholder="John Doe"/>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Pay Now</button>
        </form>
      </div>
    );
  }
  
  export default Payments;
  