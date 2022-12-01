import React from "react";
import PropTypes from "prop-types";
import useRendersNumber from "../hooks/useRendersNumber.js";

function Card(props) {
  const { title, children, className, onClick } = props;
  const renderNumber = useRendersNumber();

  return (
    <button type="button" onClick={onClick} className={`card ${className}`}>
      <header className="card__header header__title">
        [{renderNumber}] {title}
      </header>
      <section className="card__main">{children}</section>
    </button>
  );
}

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Card.defaultProps = {
  title: "Title",
  children: "content",
  className: "",
  onClick: null,
};

export default Card;
