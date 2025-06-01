import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/Cta'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underling'>Popular Companions</h1>
      <div className='home-section'>
        <CompanionCard
         id="123"
         name="Neura the Brainy Explorer"
         topic = "Neural Network of the Brain"
         subject = "Science"
         duration = {45}
         color="#ffda6e"
        />
        <CompanionCard
        id="456"
        name="Countsy the Number Wizard"
        topic = "Derivatives & Integrals"
        subject = "Maths"
        duration = {30}
        color="#e5d0ff"
        />
        <CompanionCard
        id="789"
        name="Verba the Vocabulary Builder"
        topic = "English Literature"
        subject = "Language"
        duration = {30}
        color="#BDE7FF"
        />
      </div>
      <div className='home-section'>
        <CompanionList
          title = "Recently Completed Sessions"
          companions = {recentSessions}
          classNames = 'w-2/3 max-lg:w-full'
        />
        <Cta/>
      </div>
      
      </main>
  )
}

export default Page