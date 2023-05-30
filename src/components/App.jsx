import React from 'react';
import { useState, useEffect } from "react";
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

 export const App = () => {


const [good, setgood] = useState(0);
const [neutral, setneutral] = useState(0);
const [bad, setbad] = useState(0);
const [total, settotal] = useState(0);
const [positivePercentage, setpositivePercentage] = useState(0);

    useEffect(() => {
    settotal(good + neutral + bad);
    setpositivePercentage(Math.round((good * 100) / total));
  }, [good, neutral, bad, total]);

 const  handleFeedback = e => {
   
    console.log(e)
    if (e === 'Good') {
      setgood(good + 1);
    } else if (e === 'Neutral') {
      setneutral(neutral + 1)
    } else if (e === 'Bad') {
      setbad(bad + 1)
    }
  };

  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 20,
          fontSize: 40,
          color: 'black',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }

