import React from "react";
import "./App.css";

const mealPlan = [
  {
    day: 1,
    morningDrink: "1 glass warm jeera water 🍋",
    breakfast: "2 idlis or 1 boiled egg + sambar 🍽️",
    midSnack: "1 small orange or handful roasted makhana 🍊",
    lunch: "1 cup veggies + 1 bowl brown rice or 1 fish fillet + cucumber salad 🥗",
    eveningSnack: "6 soaked almonds or 1 fruit 🍏",
    dinner: "1 bowl moong dal soup or lean chicken with veggies 🍲",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 2,
    morningDrink: "1 glass warm water with lemon 🍋",
    breakfast: "1 dosa or 2 egg whites with chutney 🍽️",
    midSnack: "10 peanuts or 1 kiwi 🥝",
    lunch: "1 cup mixed veg curry + 2 small phulkas or 1 chicken breast + salad 🥗",
    eveningSnack: "Roasted chana or 1 apple 🍎",
    dinner: "Vegetable soup or grilled fish with spinach 🥘",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 3,
    morningDrink: "Fenugreek seeds soaked water 💧",
    breakfast: "Upma (1 small bowl) or 1 boiled egg with vegetables 🍳",
    midSnack: "1 banana 🍌 or 10 pistachios 🥜",
    lunch: "1 cup lauki curry + 1 bowl millet rice or 1 egg curry + cucumber 🥒",
    eveningSnack: "Coconut water with 1 rice cracker 🥥",
    dinner: "Clear dal soup or chicken stew with greens 🍲",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 4,
    morningDrink: "1 glass warm water with lemon 🍋",
    breakfast: "1 rava dosa or 2 egg whites with chutney 🍽️",
    midSnack: "1 handful almonds or 1 small pear 🍐",
    lunch: "1 cup cabbage curry + 2 small phulkas or grilled chicken with salad 🥗",
    eveningSnack: "1 apple 🍎 or roasted sunflower seeds 🧑‍🌾",
    dinner: "Vegetable stew or grilled fish 🐟",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 5,
    morningDrink: "1 glass of buttermilk 🍶",
    breakfast: "1 bowl poha or 1 boiled egg 🍳",
    midSnack: "1 orange 🍊 or 10 soaked almonds 🥜",
    lunch: "1 cup dal fry + 1 bowl brown rice or grilled chicken with salad 🥗",
    eveningSnack: "Cucumber slices with a pinch of salt 🥒",
    dinner: "Vegetable soup or baked fish 🐟",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 6,
    morningDrink: "1 glass ginger-lemon tea 🍋",
    breakfast: "1 bowl oats or 2 boiled eggs 🍳",
    midSnack: "1 handful mixed nuts 🥜",
    lunch: "1 cup palak curry + 1 bowl millet rice or 1 fish fillet with vegetables 🐟",
    eveningSnack: "1 apple 🍎",
    dinner: "1 bowl moong dal soup or chicken stew 🍲",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 7,
    morningDrink: "1 glass warm jeera water 🍋",
    breakfast: "2 idlis with coconut chutney 🍽️",
    midSnack: "1 small orange 🍊 or 1 handful roasted makhana 🥜",
    lunch: "1 bowl vegetable curry + 1 bowl brown rice or grilled chicken with cucumber 🥗",
    eveningSnack: "1 fruit 🍏 or a handful of nuts 🥜",
    dinner: "1 bowl moong dal soup or lean chicken with veggies 🍲",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 8,
    morningDrink: "1 glass warm water with lemon 🍋",
    breakfast: "1 dosa or 2 egg whites with chutney 🍽️",
    midSnack: "10 peanuts or 1 kiwi 🥝",
    lunch: "1 cup mixed veg curry + 2 small phulkas or grilled chicken 🥗",
    eveningSnack: "Roasted chana or 1 apple 🍎",
    dinner: "Vegetable soup or grilled fish 🐟",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 9,
    morningDrink: "Fenugreek seeds soaked water 💧",
    breakfast: "Upma or 1 boiled egg with vegetables 🍳",
    midSnack: "1 banana 🍌 or 10 pistachios 🥜",
    lunch: "1 cup lauki curry + 1 bowl millet rice or 1 egg curry 🍳",
    eveningSnack: "Coconut water with 1 rice cracker 🥥",
    dinner: "Clear dal soup or chicken stew 🍲",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 10,
    morningDrink: "Warm water with turmeric 🍯",
    breakfast: "1 rava dosa or 2 egg whites 🍳",
    midSnack: "1 handful almonds or 1 small pear 🍐",
    lunch: "1 cup cabbage curry + 2 small phulkas or grilled chicken 🥗",
    eveningSnack: "1 apple 🍎 or roasted sunflower seeds 🧑‍🌾",
    dinner: "Vegetable stew or grilled fish 🐟",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  // Day 11 to Day 30
  {
    day: 11,
    morningDrink: "1 glass warm jeera water 🍋",
    breakfast: "1 bowl vegetable poha or 2 boiled eggs 🍳",
    midSnack: "1 orange 🍊 or handful roasted peanuts 🥜",
    lunch: "1 cup mixed veg curry + 1 bowl quinoa or grilled chicken 🥗",
    eveningSnack: "Roasted almonds or 1 pear 🍐",
    dinner: "1 bowl mixed vegetable soup or baked fish 🐟",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 12,
    morningDrink: "1 glass lemon water 🍋",
    breakfast: "2 idlis with sambhar 🍽️",
    midSnack: "1 handful roasted almonds 🥜",
    lunch: "1 bowl vegetable stir fry + 1 small portion brown rice 🍚",
    eveningSnack: "Cucumber slices 🥒",
    dinner: "1 bowl moong dal soup 🍲",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 13,
    morningDrink: "1 glass warm ginger tea 🍋",
    breakfast: "1 rava dosa 🍽️",
    midSnack: "1 small apple 🍏",
    lunch: "1 cup mixed veg curry + 2 phulkas 🫛",
    eveningSnack: "Roasted sunflower seeds 🌻",
    dinner: "Grilled fish 🐟 with steamed veggies 🥦",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 14,
    morningDrink: "1 glass warm water with turmeric 🍯",
    breakfast: "Upma with vegetables 🍳",
    midSnack: "Handful pistachios 🥜",
    lunch: "1 cup lauki curry + 1 bowl millet rice 🍚",
    eveningSnack: "Coconut water 🥥",
    dinner: "Vegetable stew 🥘",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 15,
    morningDrink: "1 glass lemon water 🍋",
    breakfast: "1 dosa or 2 boiled eggs 🍳",
    midSnack: "1 small banana 🍌",
    lunch: "1 cup cabbage curry + 2 small phulkas 🍽️",
    eveningSnack: "Handful almonds 🥜",
    dinner: "Vegetable soup 🥣",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 16,
    morningDrink: "Fenugreek seeds soaked water 💧",
    breakfast: "1 bowl poha or 2 egg whites 🍳",
    midSnack: "1 kiwi 🥝",
    lunch: "1 cup palak curry + 1 bowl brown rice 🍚",
    eveningSnack: "1 small apple 🍏",
    dinner: "Grilled chicken 🐓 with veggies 🥦",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 17,
    morningDrink: "Warm ginger tea 🍋",
    breakfast: "Upma or 2 boiled eggs 🍳",
    midSnack: "1 handful peanuts 🥜",
    lunch: "1 cup mixed veg curry + 2 phulkas 🫛",
    eveningSnack: "Coconut water 🥥",
    dinner: "Vegetable stew 🥘",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 18,
    morningDrink: "1 glass warm water with lemon 🍋",
    breakfast: "1 dosa or 1 boiled egg 🍳",
    midSnack: "10 almonds 🥜",
    lunch: "1 cup lauki curry + 1 bowl quinoa 🍚",
    eveningSnack: "Cucumber slices 🥒",
    dinner: "1 bowl dal soup 🍲",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 19,
    morningDrink: "1 glass lemon water 🍋",
    breakfast: "2 idlis or 1 boiled egg 🍳",
    midSnack: "1 orange 🍊 or handful roasted almonds 🥜",
    lunch: "1 cup mixed veg curry + 1 bowl brown rice 🍚",
    eveningSnack: "Roasted sunflower seeds 🌻",
    dinner: "Vegetable soup 🥣",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 20,
    morningDrink: "1 glass warm jeera water 🍋",
    breakfast: "1 bowl oats or 1 boiled egg 🍳",
    midSnack: "Handful pistachios 🥜",
    lunch: "1 cup lauki curry + 1 bowl quinoa 🍚",
    eveningSnack: "1 apple 🍏",
    dinner: "Grilled fish 🐟 with vegetables 🥦",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 21,
    morningDrink: "1 glass warm water with lemon 🍋",
    breakfast: "Upma or 2 boiled eggs 🍳",
    midSnack: "1 orange 🍊",
    lunch: "1 cup palak curry + 2 phulkas 🫛",
    eveningSnack: "Coconut water 🥥",
    dinner: "1 bowl vegetable soup 🥣",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 22,
    morningDrink: "1 glass warm ginger tea 🍋",
    breakfast: "1 rava dosa 🍽️",
    midSnack: "Handful almonds 🥜",
    lunch: "1 cup mixed veg curry + 2 phulkas 🫛",
    eveningSnack: "1 small apple 🍏",
    dinner: "Grilled chicken 🐓 with vegetables 🥦",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 23,
    morningDrink: "Fenugreek seeds soaked water 💧",
    breakfast: "Poha 🍽️ or 1 boiled egg 🍳",
    midSnack: "1 kiwi 🥝",
    lunch: "1 cup cabbage curry + 1 bowl brown rice 🍚",
    eveningSnack: "Cucumber slices 🥒",
    dinner: "Vegetable soup 🥣",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 24,
    morningDrink: "1 glass lemon water 🍋",
    breakfast: "2 idlis with chutney 🍽️",
    midSnack: "Handful almonds 🥜",
    lunch: "1 cup mixed veg curry + 1 bowl quinoa 🍚",
    eveningSnack: "Coconut water 🥥",
    dinner: "Grilled fish 🐟 with steamed vegetables 🥦",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 25,
    morningDrink: "1 glass warm ginger tea 🍋",
    breakfast: "1 dosa 🍽️",
    midSnack: "Handful roasted almonds 🥜",
    lunch: "1 cup palak curry + 1 bowl brown rice 🍚",
    eveningSnack: "1 small apple 🍏",
    dinner: "Vegetable stew 🥘",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 26,
    morningDrink: "Fenugreek seeds soaked water 💧",
    breakfast: "1 bowl poha 🍽️",
    midSnack: "1 small orange 🍊",
    lunch: "1 cup cabbage curry + 2 small phulkas 🍽️",
    eveningSnack: "1 apple 🍎",
    dinner: "Vegetable soup 🥣",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 27,
    morningDrink: "Warm ginger tea 🍋",
    breakfast: "Upma 🍳",
    midSnack: "1 small pear 🍐",
    lunch: "1 cup mixed veg curry + 2 phulkas 🫛",
    eveningSnack: "Coconut water 🥥",
    dinner: "Grilled chicken 🐓 with veggies 🥦",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 28,
    morningDrink: "1 glass lemon water 🍋",
    breakfast: "2 idlis with sambhar 🍽️",
    midSnack: "Handful roasted peanuts 🥜",
    lunch: "1 cup palak curry + 1 bowl brown rice 🍚",
    eveningSnack: "1 apple 🍎",
    dinner: "Vegetable stew 🥘",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 29,
    morningDrink: "1 glass warm jeera water 🍋",
    breakfast: "1 rava dosa 🍽️",
    midSnack: "1 handful roasted almonds 🥜",
    lunch: "1 cup mixed veg curry + 1 bowl quinoa 🍚",
    eveningSnack: "1 small apple 🍏",
    dinner: "Grilled fish 🐟 with steamed vegetables 🥦",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  },
  {
    day: 30,
    morningDrink: "1 glass warm water with lemon 🍋",
    breakfast: "1 dosa or 1 boiled egg 🍳",
    midSnack: "1 kiwi 🥝",
    lunch: "1 cup lauki curry + 2 phulkas 🫛",
    eveningSnack: "Cucumber slices 🥒",
    dinner: "1 bowl moong dal soup 🍲",
    nightDrink: "Warm jeera or fennel water 🍵",
    exercise: "30-minute brisk walk 🚶‍♀️"
  }
];
function App() {
  return (
    <div className="App">
      <h1>30-Day South Indian Weight Loss Plan</h1>
      <p className="subtext">Estimated weight loss: 4–6 kg in 30 days with moderate activity</p>

      <div className="meal-plan-grid">
        {mealPlan.map((day) => (
          <div className="day-box" key={day.day}>
            <h2>Day {day.day}</h2>
            <div className="meal-box">
              <h3 className="morning-drink-icon">Morning Drink</h3>
              <p>{day.morningDrink}</p>
            </div>
            <div className="meal-box">
              <h3 className="breakfast-icon">Breakfast</h3>
              <p>{day.breakfast}</p>
            </div>
            <div className="meal-box">
              <h3 className="mid-snack-icon">Mid-Snack</h3>
              <p>{day.midSnack}</p>
            </div>
            <div className="meal-box">
              <h3 className="lunch-icon">Lunch</h3>
              <p>{day.lunch}</p>
            </div>
            <div className="meal-box">
              <h3 className="evening-snack-icon">Evening Snack</h3>
              <p>{day.eveningSnack}</p>
            </div>
            <div className="meal-box">
              <h3 className="dinner-icon">Dinner</h3>
              <p>{day.dinner}</p>
            </div>
            <div className="meal-box">
              <h3 className="night-drink-icon">Night Drink</h3>
              <p>{day.nightDrink}</p>
            </div>
            <div className="meal-box">
              <h3 className="exercise-icon">Exercise</h3>
              <p>{day.exercise}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
