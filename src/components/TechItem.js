import React from "react";

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

export default TechItem;
