import React, { memo } from 'react';
import { Card } from 'react-bootstrap';
import profile1 from '../assets/profile-img-1.png';
import retail from '../assets/retail-icon.svg';
import cardMenu from '../assets/card-menu.svg';
import cardPluse from '../assets/cardPlus-icon.svg';
import { Handle, Position } from 'reactflow';

const CustomCardDesign = ({ id, data }) => {
  console.log(id, data, 'CustomCardDesign');
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
      />
      <Handle
        type="source"
        position={Position.Bottom}
      />
      {!data.Location && (
        <Card className="card">
          <div className="profile">
            <img
              src={data.img || profile1}
              alt="##"
            />
          </div>
          <div className="card-menu">
            <a href="##">
              <img
                src={cardMenu}
                alt="##"
              />
            </a>
          </div>
          <Card.Body className="card-body">
            <h5>{data.label}</h5>
            <h6>Managing director</h6>
            {data.retail && (
              <div className="retail">
                <img
                  src={retail}
                  alt="##"
                />
                <span>Retail</span>
              </div>
            )}
            <div className="card-bottom-pluse">
              <img
                src={cardPluse}
                alt=""
              />
            </div>
          </Card.Body>
        </Card>
      )}
      {data.Location && (
        <div className="sub-card">
          <img
            src={data.img}
            alt=""
          />
          {data.label}
        </div>
      )}
    </>
  );
};

export default memo(CustomCardDesign);
