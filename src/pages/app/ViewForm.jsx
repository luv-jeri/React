import { useEffect, useState } from 'react';
import { getUserDocs } from '../../functions';
export default function ViewForm() {
  const [fromList, setFormList] = useState([]);

  // # Using ES6 async await
  const getForms = async () => {
    const data = await getUserDocs('forms');
    setFormList(data);
  };

  useEffect(() => {
    getForms();
  }, []);

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
      {fromList.map((el, index) => {
        return <h2 key={index}>{el.title}</h2>;
      })}
    </div>
  );
}
