import { useEffect, useState } from 'react';
import { Activity } from '../interfaces';
import IconTrash from '../assets/trash.svg';
import ResourcesMonths from '../resources/months.json';

function CardActivity(props: { data: Activity; onRemove: Function; onClick: Function }) {
  const [activity, setActivity] = useState(props.data);

  function getDate(created_at: string): string {
    const formatDate = new Date(created_at);
    const date = formatDate.getDate();
    const month = formatDate.getMonth();
    const year = formatDate.getFullYear();
    const months = ResourcesMonths.data;
    const fullmonth = months.filter((value, index) => index == month);
    return `${date} ${fullmonth} ${year}`;
  }

  function handleRemove() {
    props.onRemove(activity);
  }

  function handleClick() {
    props.onClick(activity.id);
  }

  return (
    <div
      data-cy="activity-item"
      className="
        bg-white
        rounded-xl
        p-5
        w-56
        h-56
        shadow-md
      "
    >
      <div
        className="
          flex
          flex-col
          justify-between
          h-full
        "
      >
        <div
          data-cy="activity-item-title"
          onClick={handleClick}
          className="font-bold h-full cursor-pointer"
        >
          {activity.title}
        </div>
        <div
          className="
            flex
            justify-between
            text-subtitle
            text-sm
          "
        >
          <div data-cy="activity-item-date">{getDate(activity.created_at)}</div>
          <img 
            data-cy="activity-item-delete-button"
            className="
              transform
              active:scale-100
              hover:scale-110
              cursor-pointer
            "
            onClick={handleRemove} src={IconTrash} alt="Delete" />
          {/* <div
            data-cy="activity-item-delete-button"
            onClick={handleRemove}
            className="
              transform
              active:scale-100
              hover:scale-110
              cursor-pointer
            "
          >
            <img src={IconTrash} alt="Delete" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CardActivity;
