// src/pages/TransactionHistory.jsx
import React from 'react';

const transactions = [
  { id: '1', date: '2024-09-01', amount: '₹200.00', status: 'Completed' },
  { id: '2', date: '2024-09-02', amount: '₹150.00', status: 'Pending' },
  { id: '3', date: '2024-09-03', amount: '₹300.00', status: 'Completed' },
  { id: '4', date: '2024-09-04', amount: '₹450.00', status: 'Failed' },
  { id: '1', date: '2024-09-01', amount: '₹200.00', status: 'Completed' },
  { id: '2', date: '2024-09-02', amount: '₹150.00', status: 'Pending' },
  { id: '3', date: '2024-09-03', amount: '₹300.00', status: 'Completed' },
  { id: '4', date: '2024-09-04', amount: '₹450.00', status: 'Failed' },
  { id: '5', date: '2024-09-05', amount: '₹230.00', status: 'Completed' },
  { id: '6', date: '2024-09-06', amount: '₹110.00', status: 'Pending' },
  { id: '7', date: '2024-09-07', amount: '₹540.00', status: 'Failed' },
  { id: '8', date: '2024-09-08', amount: '₹640.00', status: 'Completed' },
  { id: '9', date: '2024-09-09', amount: '₹740.00', status: 'Completed' },
  { id: '10', date: '2024-09-10', amount: '₹210.00', status: 'Failed' },
  { id: '11', date: '2024-09-11', amount: '₹400.00', status: 'Pending' },
  { id: '12', date: '2024-09-12', amount: '₹600.00', status: 'Completed' },
  { id: '13', date: '2024-09-13', amount: '₹320.00', status: 'Failed' },
  { id: '14', date: '2024-09-14', amount: '₹120.00', status: 'Completed' },
  { id: '15', date: '2024-09-15', amount: '₹520.00', status: 'Completed' },
  { id: '16', date: '2024-09-16', amount: '₹240.00', status: 'Pending' },
  { id: '17', date: '2024-09-17', amount: '₹100.00', status: 'Completed' },
  { id: '18', date: '2024-09-18', amount: '₹80.00', status: 'Failed' },
  { id: '19', date: '2024-09-19', amount: '₹300.00', status: 'Pending' },
  { id: '20', date: '2024-09-20', amount: '₹320.00', status: 'Completed' },
  { id: '21', date: '2024-09-21', amount: '₹520.00', status: 'Completed' },
  { id: '22', date: '2024-09-22', amount: '₹450.00', status: 'Pending' },
  { id: '23', date: '2024-09-23', amount: '₹400.00', status: 'Failed' },
  { id: '24', date: '2024-09-24', amount: '₹200.00', status: 'Completed' },
  { id: '25', date: '2024-09-25', amount: '₹100.00', status: 'Pending' },
  { id: '26', date: '2024-09-26', amount: '₹500.00', status: 'Completed' },
  { id: '27', date: '2024-09-27', amount: '₹300.00', status: 'Completed' },
  { id: '28', date: '2024-09-28', amount: '₹250.00', status: 'Failed' },
  { id: '29', date: '2024-09-29', amount: '₹150.00', status: 'Pending' },
  { id: '30', date: '2024-09-30', amount: '₹340.00', status: 'Completed' },
  { id: '31', date: '2024-10-01', amount: '₹440.00', status: 'Completed' },
  // Add more transactions as needed
];

const TransactionHistory = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Transaction History</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="py-3 px-6 text-left text-gray-700">ID</th>
            <th className="py-3 px-6 text-left text-gray-700">Date</th>
            <th className="py-3 px-6 text-left text-gray-700">Amount</th>
            <th className="py-3 px-6 text-left text-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6 text-gray-800">{transaction.id}</td>
              <td className="py-3 px-6 text-gray-800">{transaction.date}</td>
              <td className="py-3 px-6 text-gray-800">{transaction.amount}</td>
              <td className={`py-3 px-6 ${transaction.status === 'Completed' ? 'text-green-600' : transaction.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
