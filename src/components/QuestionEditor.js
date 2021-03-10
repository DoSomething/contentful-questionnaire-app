import React, { useState, useEffect } from 'react';
import { FormLabel, TextField, TextInput, Button, EditorToolbar } from '@contentful/forma-36-react-components';

const QuestionEditor = ({sdk}) => {
	const questionTemplate = { title: "", placeholder: "", actionId: ""	 };

	const [questions, updateQuestions] = useState(sdk.field.getValue() || []);

	useEffect(() => {
		sdk.field.setValue(questions);
		sdk.window.updateHeight();
	}, [questions, sdk.field, sdk.window])

	const onChange = (index, attribute, value) => {
		const updatedQuestion = {...questions[index], [attribute]: value};
		const updatedQuestions = [...questions];
		updatedQuestions.splice(index, 1, updatedQuestion);
		updateQuestions(updatedQuestions);
	}

  return (
  	<div>
  		<EditorToolbar>
	  		<Button size="small" buttonType="muted" onClick={() => updateQuestions([...questions, questionTemplate])}>
	        	Add Question
	      	</Button>
  		</EditorToolbar>

		{questions.map((question, index) => {
			return (
				<div key={question.actionId}>	
			  		<TextField 
			  			style={{ marginTop: 10 }}
			  			labelText="Question Title"
			  			type="text" 
			  			onChange={(e) => onChange(index, 'title', e.target.value)}
			  			value={question.title} 
			  		/>

			  		<TextField 
			  			style={{ marginTop: 10 }}
			  			labelText="Question Placholder"
			  			type="text" 
			  			onChange={(e) => onChange(index, 'placeholder', e.target.value)}
			  			value={question.placeholder} 
			  		/>

			  		<FormLabel style={{ marginTop: 10 }} formLabelText="Action ID">Action ID</FormLabel>
			  		<TextInput 
			  			type="number" 
			  			width="small"
			  			onChange={(e) => onChange(index, 'actionId', e.target.value)}
			  			value={question.actionId} 
			  		/>

	  				<Button style={{ marginTop: 10 }} size="small" buttonType="negative" onClick={() => {
	  					const updatedQuestions = [...questions];
	  					updatedQuestions.splice(index, 1);
	  					updateQuestions(updatedQuestions);
	  				}}>
	  					Delete Question
	  				</Button>
				</div>
		)})}
  	</div>
  );
};

export default QuestionEditor;
