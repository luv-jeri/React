import { useEffect, useState } from 'react';
import { getUserDocs, getDataWithQuery } from '../../functions';
import { Button, TextInput, Checkbox, Table } from '@mantine/core';
import { saveDoc } from '../../functions';

export default function ViewForm() {
  const [fromList, setFormList] = useState([]);
  const [UI, setUI] = useState([]);
  const [data, setData] = useState({});
  const [selectedForm, setSelectedForm] = useState('');
  const [selectedFormData, setSelectedFormData] = useState([]);
  const [rows, setRows] = useState([]);
  const [view, setView] = useState(false);

  // # Using ES6 async await
  const getForms = async () => {
    const data = await getUserDocs('forms');
    setFormList(data);
    setUI(data[0].fields);
    setData({
      formID: data[0].id,
    });
  };

  useEffect(() => {
    getForms();
  }, []);

  useEffect(() => {
    getDataWithQuery('data', {
      field: 'formID',
      op: '==',
      value: selectedForm,
    }).then((data) => {
      setSelectedFormData(data);
    });
  }, [selectedForm]);

  // # Using promises
  // useEffect(() => {
  //   getUserDocs('forms').then((data) => {
  //     setFormList(data);
  //   });
  // }, []);

  //# Uisng callbacks
  // useEffect(() => {
  //   getUserDocs('forms', setFormList);
  // }, []);

  return (
    <div>
      {/* List of Forms in a Tab manner */}
      {fromList.map((el, index) => {
        return (
          <Button
            color='teal'
            radius='xs'
            size='lg'
            onClick={() => {
              setUI(el.fields);
              setSelectedForm(el.id);

              setData({
                formID: el.id,
              });
            }}
            compact
            uppercase
          >
            {el.title}
          </Button>
        );
      })}
      {!view ? (
        <div>
          {UI.map((el) => {
            // console.log(el);
            return (
              <div
                style={{
                  marginTop: '10px',
                }}
              >
                {el.type === 'checkbox' ? (
                  <Checkbox
                    label={el.name}
                    onChange={(e) => {
                      setData({
                        ...data,
                        [el.name]: e.target.checked,
                      });
                    }}
                  />
                ) : (
                  <TextInput
                    label={el.name}
                    type={el.type}
                    onChange={(e) => {
                      // const temp = { ...data };

                      // temp[el.name] = e.target.value;

                      // setData(temp);

                      setData({
                        ...data,
                        [el.name]: e.target.value,
                      });
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      ) : null}
      <Button
        color='teal'
        radius='xs'
        size='lg'
        onClick={() => {
          saveDoc('data', {
            ...data,
          });
        }}
        compact
        uppercase
      >
        Save Data
      </Button>
      <Button
        color='teal'
        radius='xs'
        size='lg'
        onClick={() => {
          setView(!view);
        }}
        compact
        uppercase
      >
        {!view ? 'View' : 'Hide'} Data
      </Button>

      {view ? (
        <Table>
          <thead>
            <tr>
              {UI.map((el) => {
                return <th>{el.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {selectedFormData.map((data) => {
              return (
                <tr>
                  {UI.map((ui) => {
                    return <td>{data[ui.name]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
          {/* <tbody>{rows}</tbody> */}
        </Table>
      ) : null}
    </div>
  );
}
