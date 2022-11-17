import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Card from "./Card";

function Notification(props) {
  const { data } = props;
  const { title, content } = data;
  const titleWithIcon = (
    <>
      {title}
      <FontAwesomeIcon className="foldable-icon" icon={faCircleXmark} />
    </>
  );
  return (
    <Card className="notification" title={titleWithIcon}>
      {content}
    </Card>
  );
}
Notification.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
Notification.defaultProps = {
  data: [],
};

export default Notification;
