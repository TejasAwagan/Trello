import React from "react";
import '../CSS/Card.css';


const Task = (props) => {
  const { card } = props;
  return (
    <div className="task-list">
      <div className="task-item">
        {card.image && <img className="img" src={card.image} alt="title img"/>
        }
        {card.title}
      </div>
    </div>
  );
};

export default Task;