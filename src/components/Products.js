import React from "react";
import ProImage from "./ProImage";
import ProDetails from "./ProDetails";
import StockCount from "./StockCount";
import BuyButton from "./BuyButton";

const Products = (props) =>{
    let stockClass = 'stock ';
    stockClass += props.proStock ? 'stock_in' : 'stock_out';
    let buyBtn = 'buy_btn';
    buyBtn += props.proStock ? '' : ' disabled';
    return(
        <>
        <div className="pro_item">
            <ProImage proImg={props.proImage} />
            <ProDetails proTitle={props.proName} proText={props.proDesc} />
            <div className="d-flex mb-2">
                <div className="pro_price">₹{props.proPrice}.00</div>
                <div className={stockClass}>{props.proStock ? 'Available': 'Not Available'}</div>
            </div>
            <div className="d-flex mb-2 mt-2">                
                <BuyButton buyButton={buyBtn} />  
                <StockCount />
            </div>
        </div>
        </>
    );
}
export default Products;