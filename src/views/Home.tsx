import ButtonAdd from '../components/ButtonAdd'
import CardActivity from '../components/CardActivity'
import newactivity from '../assets/newactivity.svg'
  
function Home() {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <div className="font-bold lg:text-lg">Activity</div>
        <ButtonAdd />
      </div>
      <div className="w-full">
        <div className="flex justify-center mt-10">
          <img className="max-w-lg" src={newactivity} alt="New Activity" />
        </div>
        <div>
          <CardActivity />
        </div>
      </div>
    </div>
  )
}

export default Home
  