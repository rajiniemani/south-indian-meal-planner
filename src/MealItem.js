import { useState } from "react";

function MealItem({ mealName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [mealText, setMealText] = useState(mealName);

  return (
    <li>
      {isEditing ? (
        <>
          <input 
            value={mealText}
            onChange={(e) => setMealText(e.target.value)}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <span>{mealText}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
}

export default MealItem;
