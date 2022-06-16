import React from 'react'
import "./NewOrder.css"

const NewOrder = () => {
  return (
    <div className='new__order'>
      <h1 className='new__order-heading'> Новый заказ</h1>

      <div className='tables'>
        <table>
          <thead>
            <tr>
              <th>SAP код</th>
              <th>Продукт</th>
              <th>Цена</th>
              <th>Лимит</th>
              <th>Факт</th>
              <th>План</th>
              <th>Кол-во</th>
              <th>Рек. кол-во</th>
              <th>ИТОГО</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>123435345645</td>
              <td>Телевизор Samsung <br/>32nbvn94 Black</td>
              <td>2 400 000</td>
              <td>4</td>
              <td>23</td>
              <td>43</td>
              <td><input type='number' placeholder='2'/></td>
              <td>7</td>
              <td>4 800 000</td>              
            </tr>

            <tr>
              <td>123435345645</td>
              <td>Телевизор Samsung <br/>32nbvn94 Black</td>
              <td>2 400 000</td>
              <td>4</td>
              <td>23</td>
              <td>43</td>
              <td><input type='number' placeholder='2'/></td>
              <td>7</td>
              <td>4 800 000</td>              
            </tr>
            
            <tr>
              <td>123435345645</td>
              <td>Телевизор Samsung <br/>32nbvn94 Black</td>
              <td>2 400 000</td>
              <td>4</td>
              <td>23</td>
              <td>43</td>
              <td><input type='number' placeholder='2'/></td>
              <td>7</td>
              <td>4 800 000</td>              
            </tr>
          </tbody>
        </table>
      </div>

      <div className='action__buttons'>
        <button className='action__buttons-confirm'>Подтвердить</button>
        <button className='action__buttons-cancel'>Отменить</button>
      </div>
    </div>
  )
}

export default NewOrder