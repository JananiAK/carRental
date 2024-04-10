
import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Content from "../Components/Content/Content";
import data from "../Assets/vehicleData/vehicleData";
import VehicleItem from '../Components/Ui/VehicleItem';

const VehicleListing = () => {
  return (
    <Content title="Vehicles">
    

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className=" d-flex align-items-center gap-3 mb-5">
              <span className=" d-flex align-items-center gap-2">
                <i class="ri-sort-asc"></i> Sort By
              </span>

              <select>
                <option>Select</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </Col>

         {data.map((item) => (
              <VehicleItem item={item} key={item.id} />
            ))}
          
        </Row>
      </Container>
    </section>
  </Content>
);
};

export default VehicleListing;
