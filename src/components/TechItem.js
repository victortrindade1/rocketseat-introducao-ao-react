import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  // TechItem(props)
  return (
    <li>
      {tech} {/* props.tech */}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

// Valores default
TechItem.defaultProps = {
  tech: "Foobar"
};

TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
