import React from 'react';

function App() {
  const [oldPrice, setOldPrice] = React.useState(0);
  const [oldAmount, setOldAmount] = React.useState(0);
  const [newPrice, setNewPrice] = React.useState(0);
  const [newAmount, setNewAmount] = React.useState(0);

  const currentYear = new Date();

  const getAveragePrice = () => {
    const _oldPrice = parseFloat(oldPrice || 0);
    const _oldAmount = parseFloat(oldAmount || 0);
    const _newPrice = parseFloat(newPrice || 0);
    const _newAmount = parseFloat(newAmount || 0);
    const averagePrice =
      (_oldPrice * _oldAmount + _newPrice * _newAmount) / (_oldAmount + _newAmount);

    return (averagePrice || 0).toFixed(4);
  };

  const getAverageAmount = () => {
    return parseFloat(oldAmount || 0) + parseFloat(newAmount || 0);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-teal-50">
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-teal-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <h1 className="text-4xl font-bold text-teal-700">Average Stock</h1>
      </div>

      <div className="my-4  bg-emerald-300 w-11/12 md:w-9/12 rounded-lg p-8">
        <div className="grid grid-cols-2">
          <div className="flex flex-col p-2">
            <p className="mb-2">ราคาหุ้นเดิม</p>
            <input
              type="number"
              value={oldPrice}
              onChange={(e) => setOldPrice(e.target.value)}
              className="p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col p-2">
            <p className="mb-2">จำนวนหุ้นเดิม</p>
            <input
              type="number"
              value={oldAmount}
              onChange={(e) => setOldAmount(e.target.value)}
              className="p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col p-2">
            <p className="mb-2">ราคาหุ้นปัจจุบัน</p>
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              className="p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col p-2">
            <p className="mb-2">จำนวนหุ้นที่จะซื้อ</p>
            <input
              type="number"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              className="p-2 rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col p-2">
            <p className="mb-2">ราคาหุ้นเฉลี่ย</p>
            <input type="number" value={getAveragePrice()} className="p-2 rounded-lg" disabled />
          </div>
          <div className="flex flex-col p-2">
            <p className="mb-2">จำนวนหุ้นทั้งหมด</p>
            <input type="number" value={getAverageAmount()} className="p-2 rounded-lg" disabled />
          </div>
        </div>
      </div>

      <div className=" text-teal-700">{`© ${currentYear.getFullYear()} Keerati`}</div>
    </div>
  );
}

export default App;
