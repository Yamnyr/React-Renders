import React, { useEffect, useState } from "react";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Card from "./Card";
import { useShowable } from "../hooks/useShowable";

function FoldableCard(props) {
  const { title, children, opened, onToggleOpened } = props;
  const { isShown, setIsShown, className } = useShowable(opened, "foldable");

  useEffect(() => {
    setIsShown(opened);
  }, [opened]);

  const titleWithIcon = (
    <>
      {title}
      <FontAwesomeIcon
        className="foldable-icon"
        icon={isShown ? faCircleMinus : faCirclePlus}
      />
    </>
  );

  return (
    <Card onClick={onToggleOpened} className={className} title={titleWithIcon}>
      {isShown && children}
    </Card>
  );
}

FoldableCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  opened: PropTypes.bool,
};
FoldableCard.defaultProps = {
  title: "no Title",
  children: "content",
  opened: false,
};

export default FoldableCard;
