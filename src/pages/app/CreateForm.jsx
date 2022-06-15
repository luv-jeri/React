import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import FormField from '../../components/FormField';
import { saveDoc, queryForUser } from '../../functions';
import { TextInput } from '@mantine/core';
export default function CreateForm() {
  const [fields, setFields] = useState([{}]);
  const [title, setTitle] = useState('');

  const filedHandler = (e) => {
    const i = parseInt(e.target.getAttribute('i'));

    //` EXTRA MUST BE CHECKED
    if (e.target.id === 'name' && e.target.value === '') {
      // delete fields[e.target.i];
      const temp = [...fields];
      temp.splice(i, 1);
      setFields(temp);
    }
    // ` Real Code
    const obj = {
      ...fields[i],
      [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    };
    fields[i] = obj;
  };

  const addField = () => {
    // To check if the previous field is empty
    const lastEl = fields.at(-1); //`  fields[fields.length - 1];

    if (lastEl && !lastEl.name) {
      return showNotification({
        title: 'Error',
        message: 'Please fill the previous field',
      });
    }

    setFields([...fields, {}]);
  };

  const saveForm = async () => {
    const savedForm = await saveDoc('forms', { fields, title });

    console.log(savedForm);
  };

  React.useEffect(() => {}, []);

  console.log(fields);

  return (
    <div>
      <TextInput
        id='title'
        placeholder='Title of the Form '
        label='Title Form'
        description='Enter the title for the form'
        radius='md'
        size='md'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        style={{
          marginBottom: '1rem',
        }}
      />
      <div
        onChange={filedHandler}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addField();
          }
        }}
      >
        {fields.map((el, index) => {
          return <FormField key={index} i={index}></FormField>;
        })}
      </div>
      <Button onClick={addField}>Add Fields</Button>
      <Button onClick={saveForm}>Save Form</Button>
    </div>
  );
}
