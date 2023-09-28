import { useState } from 'react';
import { stepProps } from '../../models';
export default function StepsInputForm({ addTrain }: stepProps) {
  const [error, setError] = useState({ date: '', distance: '' });
  const [form, setForm] = useState({ date: '', distance: '' });
  const handlerSubmit = (e) => {
    e.preventDefault();
    const validDate = /[0-9]{4}[.\-,][0-9]{2}[.\-,][0-9]{2}$/gi.test(form.date);
    const validDistance = /^\d+([.,]?(\d+)?)$/gi.test(form.distance);
    if (validDate && validDistance) {
      setForm((prev) => ({
        ...prev,
        distance: form.distance.replace(',', '.'),
      }));
      addTrain(form);
      setForm({ date: '', distance: '' });
      setError({ date: '', distance: '' });
      e.target.reset();
      return;
    }
    setError({
      date: validDate ? '' : 'ошибка',
      distance: validDistance ? '' : 'ошибка',
    });
  };
  const handlerChange = (e) => {
    setError({ date: '', distance: '' });
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label htmlFor='date'>
        Дата (дд.мм.гггг)
        <input
          type='date'
          className={error.date ? 'error' : ''}
          name='date'
          id='date'
          onChange={handlerChange}
        />
      </label>

      <label htmlFor='distance'>
        Пройдено км
        <input
          type='text'
          className={error.distance ? 'error' : ''}
          name='distance'
          id='distance'
          onChange={handlerChange}
        />
      </label>
      <button type='submit'>OK</button>
    </form>
  );
}
