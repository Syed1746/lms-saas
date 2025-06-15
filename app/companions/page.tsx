import CompanionCard from "@/components/CompanionCard";
import { getAllCompanions } from "@/lib/actions/companions.actions";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/searchInput";
import SubjectFilter from "@/components/subjectFilter";

const CompanionsLibrary = async({searchParams}:SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';
  const companions = await getAllCompanions({subject, topic});
  console.log("companions: ", companions)
  // console.log("Params: ",params)
  return (
    <main>
      <div className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Comapanion Library</h1>
        <div className="flex gap-4">
          <SearchInput/>
          <SubjectFilter/>
        </div>
      </div>
      <div className="companions-grid">
        {companions.map((companion)=>(
          <CompanionCard 
          key={companion.id}
          {...companion}
          color={getSubjectColor(companion.subject)}
          />
        ))}
      </div>
    </main>
  )
}

export default CompanionsLibrary
