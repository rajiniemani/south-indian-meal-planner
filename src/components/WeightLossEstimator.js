import React, { useState } from 'react';

function WeightLossEstimator() {
  const [caloriesPerDay, setCaloriesPerDay] = useState('');
  const [estimatedLoss, setEstimatedLoss] = useState(null);
  const [dietType, setDietType] = useState(''); // State to hold the selected diet type
  const [calorieDeficit, setCalorieDeficit] = useState(null);

  const handleEstimate = () => {
    const calories = parseFloat(caloriesPerDay);
    if (!isNaN(calories)) {
      // 7700 calories = 1 kg fat
      const loss = (calories * 30) / 7700;
      setEstimatedLoss(loss.toFixed(1)); // Estimated weight loss in kg

      // Calculate estimated calorie deficit for the 30-day period
      setCalorieDeficit((calories * 30).toFixed(0));
    }
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <h3>🎯 Estimate Your Weight Loss</h3>
      <p>Enter your daily calorie deficit and select your South Indian diet type to see how much weight you can lose in 30 days:</p>

      {/* Diet Type Selector */}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="diet-type" style={{ fontWeight: 'bold', marginRight: '10px' }}>
          Choose Your South Indian Diet Type:
        </label>
        <select
          id="diet-type"
          value={dietType}
          onChange={(e) => setDietType(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '220px' }}
        >
          <option value="">Select Diet Type</option>
          <option value="Traditional South Indian">Traditional South Indian</option>
          <option value="Vegetarian South Indian">Vegetarian South Indian</option>
          <option value="Non-Vegetarian South Indian">Non-Vegetarian South Indian</option>
          <option value="Low-Calorie South Indian">Low-Calorie South Indian</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          type="number"
          value={caloriesPerDay}
          onChange={(e) => setCaloriesPerDay(e.target.value)}
          placeholder="Daily Calorie Deficit"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
        />
        <button
          onClick={handleEstimate}
          style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
        >
          Estimate
        </button>
      </div>
      
      {estimatedLoss && (
        <div style={{ marginTop: '15px' }}>
          <p>
            Based on your South Indian diet type "<strong>{dietType || 'None'}</strong>", you could lose approximately <strong>{estimatedLoss} kg</strong> in 30 days.
          </p>
          <p>
            Your estimated total calorie deficit for 30 days is: <strong>{calorieDeficit} calories</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default WeightLossEstimator;
