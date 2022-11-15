import React from "react";
import Notification from "./Notification.jsx";
import useNotificationsData from "../hooks/useNotificationsData";
import Card from "./FoldableCard.jsx";

function NotificationsCenter(props) {
    const {notificationsData} = props;
    const {notificationsData} = useNotificationsData();

    const notificationsCards = notificationsData.map((notification, i) => (
        <Card
            key={notificationsData.id}
            title={notificationsData.title}
        >
            {notificationsData.content}
        </Card>
    ));

    return (
        <>
            <div className="notifications-center">
                {notificationsData.length}
            </div>
            <div className={notifications}>
                <div className="cards">{notificationsCards}</div>;
            </div>
        </>
    )
}

export default NotificationsCenter;