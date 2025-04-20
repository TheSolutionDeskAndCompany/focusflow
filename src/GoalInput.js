import React, { useState } from 'react';

const GoalInput = () => {
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>What's one challenge you're trying to improve?</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e.g. Reduce support response time"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Submit
          </button>
        </form>
      ) : (
        <p><strong>Awesome.</strong> We'll help you break down: <em>{goal}</em></p>
      )}
    </div>
  );
};

export default GoalInput;
