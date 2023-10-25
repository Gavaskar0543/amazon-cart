import { getAuth } from 'firebase/auth';
import app from '../Config/firebase';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function ReturnOrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user.uid;

    async function retrieveOrders(userId) {
      const db = getFirestore(app);
      const orderCollectionRef = collection(db, 'users', userId, 'orders');

      try {
        // Create a query to get all documents in the 'orders' collection under the user's document
        const q = query(orderCollectionRef);

        // Get the documents in the collection
        const querySnapshot = await getDocs(q);

        // Process the documents and set the state with the retrieved orders
        const retrievedOrders = [];
        querySnapshot.forEach((doc) => {
          // Retrieve data from each document
          const orderData = doc.data();
          retrievedOrders.push(orderData);
        });
        // Update the component state with the retrieved orders
        setOrders(retrievedOrders);
      } catch (error) {
        console.error('Error retrieving orders:', error);
      }
    }

    // Call the retrieveOrders function when the component mounts
    retrieveOrders(userId);
  }, []);

  return (
    <>
      <table className='w-full border border-3 border-collapse'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Number of Items</th>
            <th>Date of Order</th>
            <th>Total Bill</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {orders.map((data,index) => (
            <tr style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#e0e0e0' }}>
              <td>{data.orderid}</td>
              <td>{data.noOfQuantity}</td>
              {data.dateOfOrder.seconds}
              <td>{data.Bil}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>);
}
  