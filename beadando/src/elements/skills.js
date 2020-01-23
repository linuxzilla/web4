import React from "react";

function Skills(props) {
    return (
        <div>
            <ol>
                {props.data.skills.map((item, index) => (
                    <li key={item}>
                        {item}
                        <button
                            class="remove"
                            type="button"
                            onClick={() => props.onRemoveItem(index)}
                        >
                            Eltávolítás
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Skills