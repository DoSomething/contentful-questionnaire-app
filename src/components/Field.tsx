import React from 'react';
import { FieldExtensionSDK } from '@contentful/app-sdk';

import QuestionEditor from './QuestionEditor';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: FieldProps) => {
  return <QuestionEditor sdk={props.sdk} />
};

export default Field;
