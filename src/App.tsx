import React, { useState } from "react";
import { db } from "./firebase";
import { setDoc, doc, collection } from "firebase/firestore";
import Login from "./components/Login";

export default function App() {
//   const questions = [
//     {
//       questionText: "How many years of experience do you have?",
//       responseOptions: [
//         { answerText: "0" },
//         { answerText: "1" },
//         { answerText: "2" },
//         { answerText: "3+" },
//       ],
//     },
//     {
//       questionText: "How old are you?",
//       responseOptions: [
//         { answerText: "under 18" },
//         { answerText: "18-22" },
//         { answerText: "23-30" },
//         { answerText: "30+" },
//       ],
//     },
//   ];

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showThankYouMessage, setShowScore] = useState(false);

//   const handleOptionClick = (response: string) => {
//     addResponseToDB(response);

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const addResponseToDB = async (response: string) => {
//     let collectionRef = collection(db, "response");
//     let docRef = doc(collectionRef);

//     await setDoc(docRef, {
//       response: response,
//     })
//       .then(() => {
//         console.log("Added to db");
//       })
//       .catch((error) => alert(error.message));
//   };
//   return (
//     <div className="app">
//       {showThankYouMessage ? (
//         <div className="thankyou-section">Thank you for your response!</div>
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               {/* <span>Question {currentQuestion + 1}</span>/{questions.length} */}
//             </div>
//             <div className="question-text">
//               {questions[currentQuestion].questionText}
//             </div>
//           </div>
//           <div className="response-section">
//             {questions[currentQuestion].responseOptions.map(
//               (responseOption) => (
//                 <button
//                   onClick={() => handleOptionClick(responseOption.answerText)}
//                 >
//                   {responseOption.answerText}
//                 </button>
//               )
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
return (
	<Login />
)
}
