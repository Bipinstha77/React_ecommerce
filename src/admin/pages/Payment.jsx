function Payment(){
    return(
        <div className="p-4 dark:bg-gray-900 font-mono">
            <h1 className="text-2xl font-bold dark:text-white">Payments</h1>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            <th className="p-4 text-left font-semibold">ID</th>
                            <th className="p-4 text-left font-semibold">Username</th>
                            <th className="p-4 text-left font-semibold">Date</th>
                            <th className="p-4 text-left font-semibold">Amount</th>
                            <th className="p-4 text-left font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="p-4">1</td>
                            <td className="p-4">John Doe</td>
                            <td className="p-4">2024-01-01</td>
                            <td className="p-4">$100</td>
                            <td className="p-4">Paid</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="p-4">2</td>
                            <td className="p-4">Jane Doe</td>
                            <td className="p-4">2024-01-02</td>
                            <td className="p-4">$200</td>
                            <td className="p-4">Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Payment;