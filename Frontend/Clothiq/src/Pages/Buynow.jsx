
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Buynow = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    pincode: '',
    city: '',
    paymentMethod: 'Cash on Delivery',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, mobile, pincode, city } = formData;
    if (!name || !address || !mobile || !pincode || !city) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Order placed successfully!");
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow mt-10">
      <h2 className="text-2xl font-semibold mb-4">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Address"
          className="w-full border p-2 rounded"
          value={formData.address}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="w-full border p-2 rounded"
          value={formData.mobile}
          onChange={handleChange}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          className="w-full border p-2 rounded"
          value={formData.pincode}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full border p-2 rounded"
          value={formData.city}
          onChange={handleChange}
        />

        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="paymentMethod"
            value="Cash on Delivery"
            checked={formData.paymentMethod === 'Cash on Delivery'}
            onChange={handleChange}
          />
          <label>Cash on Delivery</label>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Place Order
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Buynow;

