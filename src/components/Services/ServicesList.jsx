import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ServicesList() {
  return (
    <Tabs
      defaultActiveKey="cold"
      id="service-tab"
      className="mb-3"
      fill>
      <Tab eventKey="cold" title="Холодная реконструкция">
        <Card.Body>
          <Card.Img variant="top" src="cold-reco-desc.jpg" />
        </Card.Body>
        <br />
        <Card.Body>
          <Card.Img variant="top" src="cold-reco-price.jpg" />
        </Card.Body>
      </Tab>
      <Tab eventKey="total" title="Тотальная реконструкция">
        <Card.Body>
          <Card.Img variant="top" src="total-reco-desc.jpg" />
        </Card.Body>
        <br />
        <Card.Body>
          <Card.Img variant="top" src="total-reco-price.jpg" />
        </Card.Body>
      </Tab>
      <Tab eventKey="nano" title="Нанопластика">
        <Card.Body>
          <Card.Img variant="top" src="nano-desc.jpg" />
        </Card.Body>
        <br />
        <Card.Body>
          <Card.Img variant="top" src="nano-price.jpg" />
        </Card.Body>
      </Tab>
      <Tab eventKey="piling" title="Пилинг кожи головы">
        <Card.Body>
          <Card.Img variant="top" src="piling-desc.jpg" />
        </Card.Body>
        <br />
        <Card.Body>
          <Card.Img variant="top" src="piling-price.jpg" />
        </Card.Body>
      </Tab>
      <Tab eventKey="add" title="Доплаты">
        <Card.Body>
          <Card.Img variant="top" src="add-price.jpg" />
        </Card.Body>
      </Tab>
    </Tabs>
  );
}

export default ServicesList;