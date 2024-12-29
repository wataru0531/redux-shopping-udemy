/**************************************************************



***************************************************************/
import { useDispatch }  from "react-redux";

import { removeItem, increase, decrease } from '../features/cart/CartSlice';
import { PlusIcon, MinusIcon } from '../HeroIcons';


const CartItem = ({ id, title, price, img, amount }) => {

  const dispatch = useDispatch();

  // 削除ボタン 
  // dispatchでStoreに通知
  // Action名がremoveItem。Reducerと名前が同じになるので注意。
  // Action ... typeとpayloadを持つ
  const onClickRemoveItem = () =>  dispatch(removeItem(id));

  // アイテム1つ追加
  const onClickIncrease = () => dispatch(increase(id))
  
  // アイテム削除
  const onClickDecrease = () => {
    // アイテムが1つの場合はアイテム自体を削除
    if(amount === 1){
      dispatch(removeItem(id));

      return; // ここで終わらす
    }
    // 2つ上だったら一つ削除
    dispatch(decrease(id))
  };

  return (
    <article className="cart-item">
      <img src={ img } alt={ title } />
      <div>
        <h4>{ title }</h4>
        <h4>¥{ price }</h4>
        <button className="remove-btn" onClick={ onClickRemoveItem }>削除</button>
      </div>
      
      <div>
        <button className="amount-btn" onClick={ onClickIncrease }>
          <PlusIcon />
        </button>

        <p className="amount">{ amount }</p>

        <button className="amount-btn" onClick={ onClickDecrease }>
          <MinusIcon />
        </button>
      </div>

    </article>
  )
}

export default CartItem