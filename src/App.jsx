import React from "react";
import FoldableCard from "./components/FoldableCard";
import cardsData from "./constants/cardsData";
import Cards from "./Cards";
import useNotificationsData from "./hooks/useNotificationsData";

function App() {
  const { addNotification, notificationsData } = useNotificationsData();
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <button type="button" onClick={addNotification} className="btn">
          Add a notification
        </button>
        {/* <div className="cards">
          <FoldableCard title="Titre 1">Contenu 1</FoldableCard>
          <FoldableCard opened title="Titre 2">
            Contenue 2
          </FoldableCard>
          <FoldableCard opened title="Titre 3">
            Contenue 3
          </FoldableCard>
          <FoldableCard opened={false} title="Titre 4">
            Contenue 4
          </FoldableCard>
        </div> */}
        <Cards cardsData={cardsData} />
      </main>
      <footer className="app__footer footer">
        {notificationsData.length}
        {notificationsData.length > 1 ? " notifications" : " notification"}
      </footer>
    </div>
  );
}

export default App;
