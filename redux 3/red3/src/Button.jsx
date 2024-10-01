import { useDispatch } from "react-redux";
import { incrementNum, resetNum, decrementNum, addfiveNum,minusfiveNum} from "./redux/reducers/car";

const Button = () => {
    const dispatch = useDispatch();
    return (
        <div>
           <button onClick={()=>{
            dispatch(incrementNum())
           }}>+</button>
           <button onClick={()=>{
            dispatch(decrementNum())
           }}>-</button>
           <button onClick={()=>{
            dispatch(resetNum())
           }}>reset</button>

           <button onClick={()=>{
            dispatch(addfiveNum())
           }}>+5</button>
           <button onClick={()=>{
            dispatch(minusfiveNum())
           }}>-5</button>

        </div>
    );
}

export default Button;