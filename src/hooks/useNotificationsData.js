import { useState } from "react";

export function useNotificationsData() {
  const [lastNotificationId, setLastNotificationId] = useState(0);
  const [notificationsData, setNotificationsData] = useState([]);

  const addNotification = () => {
    setLastNotificationId(lastNotificationId + 1);
    setNotificationsData([
      {
        id: lastNotificationId,
        title: "test",
        content: "test",
      },
      ...notificationsData,
    ]);
  };
  return {
    notificationsData,
    addNotification,
  };
}

export default useNotificationsData;
