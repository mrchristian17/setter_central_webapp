import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'How many years of experience do you have?',
			responseOptions: [
				{ answerText: '0' },
				{ answerText: '1'},
				{ answerText: '2'},
				{ answerText: '3+'},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showThankYouMessage, setShowScore] = useState(false);

	const handleAnswerOptionClick = () => {

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showThankYouMessage ? (
				<div className='thankyou-section'>
					Thank you for your response!
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							{/* <span>Question {currentQuestion + 1}</span>/{questions.length} */}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='response-section'>
						{questions[currentQuestion].responseOptions.map((responseOption) => (
							<button onClick={() => handleAnswerOptionClick()}>{responseOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}