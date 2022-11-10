import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const { title, children, className, onClick } = props;

  return (
    <button type="button" onClick={onClick} className={`card ${className}`}>
      <header className="card__header header__title">{title}</header>
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
