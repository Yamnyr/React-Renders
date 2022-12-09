import { useState } from "react";

export function useNotificationsData() {
  const [lastNotificationId, setLastNotificationId] = useState(0);
  const [notificationsData, setNotificationsData] = useState([]);

  const addNotification = () => {
    setLastNotificationId(lastNotificationId + 1);
    setNotificationsData([
      {
        id: lastNotificationId + 1,
        title: `Notification ${lastNotificationId}`,
        content: "content",
      },
      ...notificationsData,
    ]);
  };
  const deleteNotification = (id) => {
    setNotificationsData(
      notificationsData.filter((notification) => notification.id !== id)
    );
  };
  return {
    notificationsData,
    addNotification,
    deleteNotification,
  };
}

export default useNotificationsData;
