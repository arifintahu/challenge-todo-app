import ButtonAdd from '../components/ButtonAdd'
import CardActivity from '../components/CardActivity'
import newactivity from '../assets/newactivity.svg'
import { getActivities } from '../api/activity'
import { useState, useEffect } from 'react'
import { Activity } from '../interfaces'
import { Link } from 'react-router-dom'

function Home() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    if (!activities.length) {
      getActivities()
      .then(response => {
        setActivities(response.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  })

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg lg:text-xl">Activity</div>
        <Link to="/new">
          <ButtonAdd data-cy="button-add-activity"/>
        </Link>
      </div>
      <div className="w-full mt-10">
        {
          activities.length ?
            <div className="flex flex-wrap gap-4">
              {
                activities.map(item => <CardActivity data-cy="card-activity" data={item} />)
              }
            </div>
          :
            <div className="flex justify-center mt-10">
              <img className="max-w-lg" src={newactivity} alt="New Activity" />
            </div>
        }
      </div>
    </div>
  )
}

export default Home
  