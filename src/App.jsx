import React from "react";
import cardsData from "./constants/cardsData";
// import FoldableCard from "./components/FoldableCard";
import Cards from "./Cards";
import useNotificationsData from "./hooks/useNotificationsData";
import useRendersNumber from "./hooks/useRendersNumber";
import NotificationsCenter from "./components/NotificationsCenter";

function App() {
  const { addNotification, notificationsData, deleteNotification } =
    useNotificationsData();
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
        <Cards cardsData={cardsData} />
      </main>
      <footer className="app__footer footer">
        <NotificationsCenter notificationsData={notificationsData} onDelete={deleteNotification}/>
      </footer>
    </div>
  );
}

export default App;
