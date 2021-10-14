import ButtonAdd from '../components/ButtonAdd'
import ButtonLoader from '../components/ButtonLoader'
import CardActivity from '../components/CardActivity'
import ImageActivity from '../assets/newactivity.svg'
import { getActivities, removeActivity, createActivity } from '../api/activity'
import { useState, useEffect } from 'react'
import { Activity } from '../interfaces'
import { Link, useHistory } from 'react-router-dom'
import AlertRemove from '../components/AlertRemove'
import AlertInfo from '../components/AlertInfo'
import Loader from '../components/Loader'

function Home() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const [isAddLoading, setIsAddLoading] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [activity, setActivity] = useState<Activity>()

  const history = useHistory()

  function handleRemoveActivity(data: Activity) {
    setActivity(data)
    setShowAlert(true)
  }

  function handleCancelAlert(value: boolean) {
    setShowAlert(value)
  }

  function handleClickActivity(id: number) {
    if (id) {
      history.push(`/detail/${id}`)
    }
  }

  function handleRemoveAlert(value: boolean) {
    if (value && activity?.id) {
      removeActivity(activity?.id)
      .then(response => {
        if (response.status == 200) {
          setShowAlert(false)
          setShowInfo(true)
          getActivityList()
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  function handleShowInfo(value: boolean) {
    setShowInfo(value)
  }

  function handleAddActivity() {
    setIsAddLoading(true)
    createActivity({
      title: 'New Activity'
    })
    .then(response => {
      if (response.status == 201) {
        setIsAddLoading(false)
        getActivityList()
      }
    })
    .catch(err => {
      console.log(err)
    })
  }


  function getActivityList() {
    setIsLoading(true)
    getActivities()
      .then(response => {
        setActivities(response.data.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (!activities.length) {
      getActivityList()
    }
  })

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg lg:text-xl">Activity</div>
        {
          isAddLoading ?
          <ButtonLoader />
          :
          <ButtonAdd onClick={handleAddActivity} data-cy="button-add-activity"/>
        }
      </div>
      <div className={`w-full h-72 flex justify-center items-center ${!isLoading && 'hidden'}`}>
        <Loader/>
      </div>
      <div className={`w-full mt-10 ${isLoading && 'hidden'}`}>
        {
          activities.length ?
            <div className="flex flex-wrap gap-4">
              {
                activities.map(
                  (item) => 
                  <CardActivity 
                    key={item.id}
                    data-cy="card-activity"
                    data={item}
                    onClick={handleClickActivity}
                    onRemove={handleRemoveActivity}
                  />
                )
              }
            </div>
          :
            <div className="flex justify-center mt-10">
              <img className="max-w-lg" src={ImageActivity} alt="New Activity" />
            </div>
        }
      </div>
      {
        showAlert &&
        <AlertRemove type="activity" name={activity?.title} onCancel={handleCancelAlert} onRemove={handleRemoveAlert}/>
      }
      {
        showInfo &&
        <AlertInfo onShow={handleShowInfo} msg="Activity berhasil dihapus"/>
      }
    </div>
  )
}

export default Home
  