import { useState } from 'react'
import { Activity } from '../interfaces'
import IconTrash from '../assets/trash.svg'

function CardActivity(props: { data: Activity }) {
    const [activity, setActivity ] = useState(props.data)

    function getDate(created_at: string): string {
      const formatDate = new Date(created_at)
      const date = formatDate.getDate()
      const month = formatDate.getMonth()
      const year = formatDate.getFullYear()
      const months = ['Januari', 'Februari', 'Maret', 'April',
      'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober',
      'November', 'Desember'
      ]
      const fullmonth = months.filter((value, index) => index == month)
      return `${date} ${fullmonth} ${year}`
    }

    return (
      <div className="
        bg-white
        rounded-xl
        p-5
        w-56
        h-56
        shadow-md
      ">
        <div className="
          flex
          flex-col
          justify-between
          h-full
        ">
          <div className="font-bold">{activity.title}</div>
          <div className="
            flex
            justify-between
            text-subtitle
            text-sm
          ">
            <div>{getDate(activity.created_at)}</div>
            <div className="
              transform
              active:scale-100
              hover:scale-110
              cursor-pointer
            ">
              <img src={IconTrash} alt="Delete" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default CardActivity
    