// QuestionList.js
import React from "react";
import QuestionItem from "./QuestionItem"; // Make sure to import the component
import { useQuestions } from "../hooks/useQuestions"; // Import the hook

function QuestionList() {
  const { questions, deleteQuestion } = useQuestions(); // Use the custom hook

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={() => deleteQuestion(question.id)} // Pass onDelete prop to handle deletion
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
