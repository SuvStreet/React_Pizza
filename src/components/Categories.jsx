import React, { useState } from "react";

function Categories({ items }) {
    const [activeItems, setActiveItems] = useState(null);

    const onSelectedItem = (index) => {
        setActiveItems(index);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItems === null ? "active" : ""}
                    onClick={() => onSelectedItem(null)}
                >
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeItems === index ? "active" : ""}
                            onClick={() => onSelectedItem(index)}
                            key={`${name}_${index}`}
                        >
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Categories;
