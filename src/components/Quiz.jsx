import { useQuiz } from '../context/QuizContext';
import Question from './Question';

function Quiz() {
  const { index, answer, dispatch, points, numQuestions, questions } = useQuiz();
  const hasAnswered = answer !== null;
  const isLastQuestion = index === numQuestions - 1;

  return (
    <>
      <div className="progress">
        <progress max={numQuestions} value={index + (answer !== null ? 1 : 0)} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> points
        </p>
      </div>

      <Question question={questions[index]} />

      <footer className="footer">
        {hasAnswered && (
          <button
            className="btn btn-ui"
            onClick={() => {
              if (isLastQuestion) {
                dispatch({ type: 'finish' });
              } else {
                dispatch({ type: 'nextQuestion' });
              }
            }}
          >
            {isLastQuestion ? 'Finish' : 'Next'}
          </button>
        )}
      </footer>
    </>
  );
}

export default Quiz;
