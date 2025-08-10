import React from 'react';
import { useQuiz } from './context/QuizContext';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <main className="main">
        {status === 'loading' && <p className="loader">Loading questions...</p>}
        {status === 'error' && <p className="error">Error fetching questions.</p>}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && <Quiz />}
        {status === 'finished' && <Result />}
      </main>
    </div>
  );
}

export default App;
