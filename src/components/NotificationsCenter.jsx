import React from "react";
import PropTypes from "prop-types";
import Notification from "./Notification";

function NotificationsCenter(props) {
  const { notificationsData } = props;

  const notificationsCards = notificationsData.map((notification) => (
    <Notification data={notification} key={notificationsData.id} />
  ));

  return (
    <>
      <div className="notifications-center">
        {notificationsData.length}
        {notificationsData.length > 1 ? " notifications" : " notification"}
      </div>
      <div className="notifications">
        <div className="cards">{notificationsCards}</div>
      </div>
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
};
NotificationsCenter.defaultProps = {
  notificationsData: [],
};

export default NotificationsCenter;
