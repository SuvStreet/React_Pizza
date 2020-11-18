import React, { useState, memo } from "react";

const Categories = memo(function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectedItem = (index) => {
        setActiveItem(index);
        onClickItem(index);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? "active" : ""}
                    onClick={() => onSelectedItem(null)}
                >
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeItem === index ? "active" : ""}
                            onClick={() => onSelectedItem(index)}
                            key={`${name}_${index}`}
                        >
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
});

export default Categories;
