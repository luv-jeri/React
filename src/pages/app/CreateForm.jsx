import React, { useState, useRef } from 'react';
import LoaderButton from '../../components/LoaderButton';
import { showNotification } from '@mantine/notifications';
import FormField from '../../components/FormField';
import { saveDoc, queryForUser } from '../../functions';
import { TextInput, Divider } from '@mantine/core';

export default function CreateForm() {
  const [fields, setFields] = useState([{}]);
  const title = useRef('');

  const filedHandler = (e) => {
    console.log('e.target.type', e.target.type, e.target.value.split(','));
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
      [e.target.id]:
        e.target.type === 'checkbox'
          ? e.target.checked
          : e.target.type === 'textarea'
          ? e.target.value.split(',')
          : e.target.value,
    };

    fields[i] = obj;
  };

  console.log(fields);

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
    const savedForm = await saveDoc('forms', { fields, title: title.current });

    console.log(savedForm);
  };

  return (
    <div>
      <TextInput
        id='title'
        placeholder='Title of the Form '
        label='Form Title '
        // description='Enter the title for the form'
        radius='lg'
        size='lg'
        required
        onChange={(e) => {
          title.current = e.target.value;
        }}
        style={{
          marginBottom: '1rem',
        }}
      />
      <Divider my='sm' />
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

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <LoaderButton onClick={addField}>Add Filed</LoaderButton>
        <LoaderButton onClick={saveForm}>Save Form</LoaderButton>
      </div>
    </div>
  );
}
