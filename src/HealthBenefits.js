import React from "react";
import healthyFoodImage from './assets/healthy-food.jpg';
import unhealthyFoodImage from './assets/unhealthy-food.jpg';

function HealthBenefits() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Unlock the Secret to a Healthy Life: Lose Weight and Prevent Heart Diseases</h2>
      <p>
        Weight loss is more than just about looking good – it's about feeling good and living a longer, healthier life. Maintaining a healthy weight helps reduce the risk of heart disease, stroke, diabetes, and other serious conditions. Let’s explore how losing weight can be the key to a better, disease-free future!
      </p>

      <h3>The Power of Losing Weight</h3>
      <ul>
        <li>🍎 <strong>Lower Risk of Heart Disease</strong>: Excess weight strains your heart. Losing it improves blood pressure and cholesterol.</li>
        <li>💪 <strong>Stronger Bones & Joints</strong>: Reducing weight eases pressure on joints and lowers arthritis risk.</li>
        <li>🧠 <strong>Better Mental Health</strong>: Weight loss improves mood, energy, and confidence.</li>
        <li>🏃 <strong>Increased Fitness</strong>: Boosts stamina, mobility, and exercise ability.</li>
        <li>🌿 <strong>Healthier Eating Habits</strong>: Encourages a more balanced and nutritious diet.</li>
      </ul>

      <h3>Healthy vs Unhealthy Foods</h3>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ textAlign: 'center' }}>Healthy Foods</h4>
          <img
            src={healthyFoodImage}
            alt="Healthy Food"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p style={{ textAlign: 'center' }}>
            Fresh fruits, vegetables, grains, and lean proteins support your body’s needs and aid weight loss.
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <h4 style={{ textAlign: 'center' }}>Unhealthy Foods</h4>
          <img
            src={unhealthyFoodImage}
            alt="Unhealthy Food"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p style={{ textAlign: 'center' }}>
            Processed, fried, and sugary foods lead to weight gain, fatigue, and chronic disease.
          </p>
        </div>
      </div>

      <h3 style={{ marginTop: '30px' }}>Take Action Today</h3>
      <p>
        Small changes to your lifestyle can lead to big improvements in your health. Start with balanced meals, regular movement, and a positive mindset!
      </p>

      <h3>📤 Share This Article</h3>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <a
          href="https://twitter.com/intent/tweet?url=https://https://south-indian-weightloss-meal-planner.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ backgroundColor: '#1DA1F2', color: 'white', padding: '10px', borderRadius: '5px' }}>
            Share on Twitter
          </button>
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://https://south-indian-weightloss-meal-planner.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ backgroundColor: '#4267B2', color: 'white', padding: '10px', borderRadius: '5px' }}>
            Share on Facebook
          </button>
        </a>
      </div>
    </div>
  );
}

export default HealthBenefits;
