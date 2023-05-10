import DeleteIcon from "../../assets/images/icon-delete.svg";



const CartItem = ({ icon, title, price, quantity }) => {
    const total = (Number(price) * quantity).toFixed(2)
    return (
        <div className="grid grid-cols-6 w-full gap-x-3 ">
            <img src={icon} alt="thumbnail-img" className="w-20 h-16 rounded-lg"/>
            <article className="col-span-4 grid grid-rows-2 grid-cols-2 font-normal text-xl text-smoke/75">
                <h4 className="col-span-2">{title}</h4>
                <h4 className="row-start-2 w-full">{`$${price} x ${quantity}`}</h4>
                <h4 className="row-start-2 text-black/75 font-bold">{`$${total}`}</h4>
            </article>
            <button className="centered">
                <img src={DeleteIcon} alt="" className="w-5 h-5" />
            </button>
        </div>        
     );
}
 
export default CartItem;