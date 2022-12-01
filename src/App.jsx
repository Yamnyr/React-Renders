import React from "react";
import cardsData from "./constants/cardsData";
// import FoldableCard from "./components/FoldableCard";
import Cards from "./Cards";
import useNotificationsData from "./hooks/useNotificationsData";
import useRendersNumber from "./hooks/useRendersNumber";
import NotificationsCenter from "./components/NotificationsCenter";

function App() {
  const { addNotification, notificationsData } = useNotificationsData();
  const renderNumber = useRendersNumber();
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">
          [{renderNumber}] Introduction to React
        </h1>
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
        <NotificationsCenter notificationsData={notificationsData} />
      </footer>
    </div>
  );
}

export default App;
