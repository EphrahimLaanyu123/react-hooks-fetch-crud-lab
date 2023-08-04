// QuestionForm.js
import React, { useState } from "react";

function QuestionForm(props) {
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    props.onSubmit(formData); // You need to pass the form data to the parent component
  }

  return (
    <section>

      <form onSubmit={handleSubmit}>

        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;

