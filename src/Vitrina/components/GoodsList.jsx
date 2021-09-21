import React from "react";
import GoodsItem from "./GoodsItem";
import { useContext } from 'react';
import { ShopContext } from '../context';


function GoodsList() {
    const { goods = [] } = useContext(ShopContext);

    if(!goods.length){
        return <h1>404 Not Found</h1>
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item}/>
            ))}
        </div>
    );
}
export default GoodsList;
