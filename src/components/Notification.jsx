import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card.jsx";

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
    <Card class="notification" className="notification" title={titleWithIcon}>
      {content}
    </Card>
  );
}
export default Notification;
