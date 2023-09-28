import { listProps } from '../../models';
export default function StepsOutputLine({ list, delTraining }: listProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Расстояния</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {list.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.date}</td>
              <td>{el.distance}</td>
              <td>
                <span className='material-icons'>edit</span>{' '}
                <span
                  className='material-icons'
                  onClick={() => {
                    delTraining(el);
                  }}
                >
                  content_cut
                </span>{' '}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
