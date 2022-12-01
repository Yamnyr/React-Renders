import React, { useState } from "react";
import FoldableCard from "./components/FoldableCard";

function Cards(props) {
  const { cardsData } = props;
  const [openedIndex, setOpenedIndex] = useState();
  // première methode avec une boucle
  /*  const FoldableCards = [];
    for (let i = 0; i < cardsData.length; i++) {
      FoldableCards.push(
        <FoldableCard
          key={cardsData[i].id}
          opened={false}
          title={cardsData[i].title}
        >
          {cardsData[i].content}
        </FoldableCard>
      );
    } */
  function handleToggleOpened(i) {
    // console.log("handleToggleOpened", i);
    setOpenedIndex(i);
  }

  // seconde methode avec map
  // console.log(openedIndex);
  const FoldableCards = cardsData.map((card, i) => (
    <FoldableCard
      onToggleOpened={() => handleToggleOpened(i)}
      key={card.id}
      title={card.title}
      opened={openedIndex === i}
    >
      {card.content}
    </FoldableCard>
  ));

  return <div className="cards">{FoldableCards}</div>;
}

export default Cards;
