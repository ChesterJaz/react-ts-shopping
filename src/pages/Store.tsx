import { Col, Row } from 'react-bootstrap';
import items from '../data/items.json';
import { StoreItems } from '../components/StoreItems';


export const Store = () => {
  return (
    <>
    <div>
      <Row lg={3} md={2} sm={1} className='g-3'>
        {items.map(item => (
          <Col key={item.id}>
            <StoreItems {...item} />
            </Col>
        ))}
      </Row>
    </div>
    </>
  )
}
