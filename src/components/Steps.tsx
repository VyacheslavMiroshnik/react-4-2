import StepsInputForm from './StepsInputForm';
import StepsOutputLine from './StepsOutputList';
import { dateObject, FormType } from '../../models';
import { useState } from 'react';
import { nanoid } from 'nanoid';
export default function Steps() {
  const listDate: dateObject[] = [
    {
      date: '2014-08-23',
      dateObject: new Date('2014-08-23'),
      id: nanoid(),
      distance: '1.2',
    },
  ];

  const [allTraining, setAllTraining] = useState(listDate);

  const onAddTraining = (newData: FormType) => {
    if (allTraining.filter((el) => el.date === newData.date).length) {
      const newList: dateObject[] = allTraining.map((el) => {
        if (el.date === newData.date) {
          el.distance = (
            parseFloat(el.distance) + parseFloat(newData.distance)
          ).toString();
          return el;
        } else {
          return el;
        }
      });
      setAllTraining(newList);

      return;
    }
    setAllTraining([
      ...allTraining,
      {
        date: newData.date,
        distance: newData.distance,
        id: nanoid(),
        dateObject: new Date(newData.date),
      },
    ]);
  };

  const deleteTraining = (training: dateObject) => {
    setAllTraining(allTraining.filter((step) => step.id !== training.id));
  };
  return (
    <div className='training_container'>
      <StepsInputForm addTrain={onAddTraining} />
      <div></div>
      <StepsOutputLine
        list={allTraining.sort((a, b) => {
          if (a.dateObject < b.dateObject) {
            return 1;
          }
          if (a.dateObject > b.dateObject) {
            return -1;
          }
          return 0;
        })}
        delTraining={deleteTraining}
      />
    </div>
  );
}
