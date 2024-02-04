import { Button, Card } from "react-bootstrap";
import { CurrencyFormat } from "../utils/CurrencyFormat";
import { ShoppingCart } from "../context/ShoppingCart";

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItems = ({ id, name, price, imgUrl }: StoreItemsProps) => {
    const {getItemQty, increasetItemQty, decreaseItemQty, remove} = ShoppingCart()
    const qty = getItemQty(id);
  return (
    <Card className="h-100">
      <Card.Img src={imgUrl} height={200} style={{ objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{name}</span>
          <span className="ms-2 text-muted">{CurrencyFormat(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {qty === 0 ? (
            <Button className="btn btn-dark w-100" onClick={() => increasetItemQty(id)}>+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button className="btn btn-dark" onClick={() => increasetItemQty(id)}>+</Button>
                <div>
                  <span>{qty} in cart</span>
                </div>
                <Button className="btn btn-dark" onClick={() => decreaseItemQty(id)}>-</Button>
              </div>
              <Button className="btn btn-danger mt-2" onClick={() => remove(id)}>Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
