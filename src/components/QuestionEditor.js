import React, { useState, useEffect } from 'react';
import { 
	Button,
	FormLabel,
	HelpText,
	SectionHeading,
	TextField,
	TextInput,
} from '@contentful/forma-36-react-components';

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
			{questions.map((question, index) => {
				return (
					<div key={index}>	
							<SectionHeading style={{ marginTop: 10 }}>Question {index + 1}</SectionHeading>

				  		<TextField 
				  			style={{ marginTop: 10 }}
				  			labelText="Title"
				  			type="text" 
				  			onChange={(e) => onChange(index, 'title', e.target.value)}
				  			value={question.title} 
				  		/>

				  		<TextField 
				  			style={{ marginTop: 10 }}
				  			labelText="Placholder"
				  			type="text" 
				  			onChange={(e) => onChange(index, 'placeholder', e.target.value)}
				  			value={question.placeholder} 
				  		/>

				  		<FormLabel style={{ marginTop: 10 }}>Action ID</FormLabel>
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
				)
			})}

  		<Button  style={{ marginTop: 20 }} size="medium" icon="Plus" buttonType="positive" onClick={() => updateQuestions([...questions, questionTemplate])}>
        	Add Question
      </Button>

			<HelpText 
				style={{ marginTop: 10, fontStyle: 'italic' }}
			>
				The questions appearing in the Questionnaire. Each question requires a Title, Placeholder Text, & 
				valid <a target="_blank" rel="noreferrer" href="https://bit.ly/30xpNFC">Rogue Action ID</a>.
			</HelpText>
  	</div>
  );
};

export default QuestionEditor;
