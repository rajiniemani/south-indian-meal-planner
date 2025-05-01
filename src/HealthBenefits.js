import React from 'react';
import healthyFoodImage from '../public/images/healthy-food.jpg'; // Add the correct path to the healthy food image
import unhealthyFoodImage from '../public/images/unhealthy-food.jpg'; // Add the correct path to the unhealthy food image

const HealthBenefits = () => {
  return (
    <div>
      <h2>Unlock the Secret to a Healthy Life: Lose Weight and Prevent Heart Diseases</h2>
      <p>
        Weight loss is more than just about looking good – it's about feeling good and living a longer, healthier life. Maintaining a healthy weight helps reduce the risk of heart disease, stroke, diabetes, and other serious conditions. Let’s explore how losing weight can be the key to a better, disease-free future!
      </p>

      <h3>The Power of Losing Weight</h3>
      <p>
        The right weight not only gives you more energy and confidence but also offers numerous health benefits. Here are just a few:
      </p>
      <ul>
        <li><i className="fas fa-heart"></i> <strong>Lower Risk of Heart Disease</strong>: Excess weight puts extra strain on your heart. Losing it can improve your blood pressure and cholesterol levels.</li>
        <li><i className="fas fa-bone"></i> <strong>Stronger Bones & Joints</strong>: Reducing weight helps reduce the risk of joint problems like arthritis and improves overall bone health.</li>
        <li><i className="fas fa-brain"></i> <strong>Enhanced Mental Health</strong>: Achieving your ideal weight can improve your mood, reduce stress, and even enhance cognitive function.</li>
        <li><i className="fas fa-running"></i> <strong>Increased Physical Fitness</strong>: Losing weight can improve your energy levels, making you more active and capable of exercising.</li>
        <li><i className="fas fa-apple-alt"></i> <strong>Healthier Eating Habits</strong>: As you lose weight, you’ll adopt healthier eating patterns that further support your well-being.</li>
      </ul>

      <h3>Healthy Foods vs Unhealthy Foods</h3>
      <p>
        What you eat plays a massive role in your ability to lose weight and stay healthy. Let’s look at how healthy and unhealthy foods stack up in terms of their effects on your body.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        <div style={{ width: '45%' }}>
          <h4>Healthy Foods</h4>
          <img src={healthyFoodImage} alt="Healthy Food" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
          <p>Eating a variety of whole foods like fruits, vegetables, whole grains, and lean proteins will fuel your body with the necessary nutrients for weight loss, better digestion, and overall health.</p>
        </div>

        <div style={{ width: '45%' }}>
          <h4>Unhealthy Foods</h4>
          <img src={unhealthyFoodImage} alt="Unhealthy Food" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
          <p>On the other hand, processed foods, sugary snacks, and fried meals can lead to weight gain, bloating, high blood pressure, and increased risk of chronic diseases.</p>
        </div>
      </div>

      <h3>It's Time to Take Action</h3>
      <p>
        Remember, the path to better health starts with small, consistent changes in your daily habits. Start today and make the choice to live a healthier life. Your body will thank you!
      </p>

      <h3>Share This Article</h3>
      <p>Help others learn the importance of maintaining a healthy weight and lifestyle. Share this article with your friends and family!</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <a href="https://twitter.com/intent/tweet?url=https://your-app-link.com" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#1DA1F2', color: 'white', padding: '10px', borderRadius: '5px' }}>
            <i className="fab fa-twitter"></i> Share on Twitter
          </button>
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://your-app-link.com" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#4267B2', color: 'white', padding: '10px', borderRadius: '5px' }}>
            <i className="fab fa-facebook"></i> Share on Facebook
          </button>
        </a>
      </div>
    </div>
  );
};

export default HealthBenefits;
