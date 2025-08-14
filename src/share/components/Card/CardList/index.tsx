import { Col, Row } from "antd";
import * as React from "react";
import './style.scss'


interface Item {

  title: string;
  value: string;
}

interface CardListProps {
  list: Item[]
}

const CardList: React.FC<CardListProps> = ({ list }) => {
  return (
    <div className="list-card">
      <Row gutter={[16, 16]}>
        {list.map((item) => (
          <Col className="gutter-row" span={4} key={item.title}>
            <span className="title-list-card">{item.title}</span>
            <span className="item-value">{item.value}</span>
          </Col>
        ))}
      </Row>

    </div>

  );
};

export default CardList;