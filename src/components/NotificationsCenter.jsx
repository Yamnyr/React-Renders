import React from "react";
import PropTypes from "prop-types";
import Notification from "./Notification";
import useRendersNumber from "../hooks/useRendersNumber";
import { useShowable } from "../hooks/useShowable";

function NotificationsCenter(props) {
  const { notificationsData, onDelete } = props;
  const renderNumber = useRendersNumber();
  const { toggleShown, isShown } = useShowable();

  const notificationsCards = notificationsData.map((notification) => (
    <Notification
      data={notification}
      onDelete={() => onDelete(notification.id)}
      key={notification.id}
    />
  ));

  return (
    <>
      <button  type="button" onClick={toggleShown} className=" notifiactions-center">
        [{renderNumber}] {notificationsData.length}
        {notificationsData.length > 1 ? " notifications" : " notification"}
        {isShown === true ? " (hide)" : " (show)"}
      </button>{!isShown &&
      <div className="notifications">{notificationsCards}</div>}
    </>
  );
}

NotificationsCenter.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
NotificationsCenter.defaultProps = {
  notificationsData: [],
};
export default NotificationsCenter;
