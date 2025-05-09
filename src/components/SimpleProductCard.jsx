function SimpleProductCard(props) {

  return (
    <div key={props.product._id}>
      <div className="h-64 sm:h-72 md:h-80 lg:h-96">
        <img
          src={props.product.image}
          alt={props.product.name}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
      <div className="mt-2">
        <span className="text-lg sm:text-xl md:text-2xl block">
          {props.product.name}
        </span>
        <span className="text-base sm:text-lg md:text-xl block">
          ${props.product.price}
        </span>
      </div>
    </div>
  );
}

export default SimpleProductCard;
