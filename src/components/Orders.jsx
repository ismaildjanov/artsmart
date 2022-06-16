import React from 'react';
import "../components/Orders.css";

const Orders = () => {
  return (
    <div className='orders'>

      <div className='header'>
        <h1 className='order__header'>Мои заказы</h1>
        <button className='order__button'>Заказать</button>
      </div>

      <div className='tables'>
        <table>

          <thead>
            <tr>
              <th>№</th>
              <th>ID заказа</th>
              <th>Дата</th>
              <th>Сумма</th>
              <th>Статус</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>53456465</td>
              <td>12.02.2022</td>
              <td>300 000  сўм</td>
              <td><button className='status__button pending'>Pending</button></td>
            </tr>

            <tr>
              <td>2</td>
              <td>53456465</td>
              <td>12.02.2022</td>
              <td>300 000  сўм</td>
              <td><button className='status__button confirmed'>Confirmed</button></td>
            </tr>
      
          
            <tr>
              <td>3</td>
              <td>53456465</td>
              <td>12.02.2022</td>
              <td>300 000  сўм</td>
              <td><button className='status__button cancelled'>Cancelled</button></td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
    
    
  )
}

export default Orders;