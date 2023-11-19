import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([
    { id: 1, text: 'Question 1' },
    { id: 2, text: 'Question 2' },
    // ...other questions
  ]);

  // Function to delete a question by ID
  function deleteQuestionById(questionId) {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== questionId)
    );
  }

  return (
    <div>
      <main>
        <AdminNavBar onChangePage={setPage} />
        {page === "Form" ? <QuestionForm /> : <QuestionList />}
      </main>

      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.text}
            <button onClick={() => deleteQuestionById(question.id)}>Delete Question</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
