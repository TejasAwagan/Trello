import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { InitialData } from "./components/InitialData";
import { Container, Draggable } from "react-smooth-dnd";
import _ from "lodash";
import { applyDrag } from "./components/Dnd";

function App() {
  const [board, setBoard] = useState({});
  const [card, setCard] = useState([]);

  const [showAddStage , setShowAddStage] = useState(false);

  useEffect(() => {
    const initialData = InitialData.boards.find((item) => item.id === "board1");
    if (initialData) {
      setBoard(initialData);
      setCard(initialData.columns);
    }
  }, []);

  const onColumnDrop = (dropResult) => {
    // console.log(">>> inside onColumnDrop", dropResult);
    let newCard = [...card];
    newCard = applyDrag(newCard, dropResult);
    // console.log("newcolumn", newColumns);
    let newBoard = { ...board };
    newBoard.columnOrder = newCard.map((column) => column.id);
    newBoard.columns = newCard;

    setCard(newCard);
    setBoard(newBoard);
  };

  const onCardDrop = (dropResult, columnId) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      console.log(">>> inside onCardDrop:", dropResult);

      let newCard = [...card];
      let currentColumn = newCard.find((column) => column.id === columnId);
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map((card) => card.id);

      setCard(newCard);
    }
  };

  if (_.isEmpty(board)) {
    return (
      <>
        <div className="not-found">Board not found</div>
      </>
    );
  }

  const handleAddStage =()=>{

  }

  return (
    <div className="app">
      <Navbar />
      <div className="cards">
        <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          getChildPayload={(index) => card[index]}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "cards-drop-preview",
          }}
        >
          {card &&
            card.length > 0 &&
            card.map((column, index) => {
              return (
                <Draggable key={column.id}>
                  <Card column={column} onCardDrop={onCardDrop} />
                </Draggable>
              );
            })}
        </Container>


      </div>
    </div>
  );
}

export default App;