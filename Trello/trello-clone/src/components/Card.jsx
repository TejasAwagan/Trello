import React from "react";
import "../CSS/Card.css";
import Task from "./Task";
import { Container, Draggable } from "react-smooth-dnd";

const Card = (props) => {
  const { column , onCardDrop} = props;
  const cards = column.cards;
  

  return (
    <div className="card">
      <header className="column-drag-handle">
        {column.title}
      </header>

      <Container
        groupName="col"
        onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
        getChildPayload={(index) => cards[index]}
        dragClass="card-ghost"
        dropClass="card-ghost-drop"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "drop-preview",
        }}
        dropPlaceholderAnimationDuration={200}
      >
        {cards &&
          cards.length > 0 &&
          cards.map((card) => {
            return (
              <Draggable key={card.id}>
                <Task card={card}  />
              </Draggable>
            );
          })}
      </Container>

    </div>
  );
};

export default Card;