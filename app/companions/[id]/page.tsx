import CompanionComponent from "@/components/CompanionComponent";
import { getCompanions } from "@/lib/actions/companions.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

interface companionSessionPageProps {
  params: Promise<{id:string}>
}

const CompanionSession = async({params}: companionSessionPageProps) => {
  const {id} = await params;
  const companions = await getCompanions(id)
  const {name, subject, title, duration, topic} = companions
  const user = await currentUser();
  if (!user) redirect ('/sign-in');
  if(!name) redirect('/companion') 
  return (
    <main>
      <article className="flex rounded-border justify-between p-6 max-md:flex-col">
        <div className="flex items-center gap-2">
          <div className="flex size-[72px] items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor:getSubjectColor(subject)}}>
            <Image src={`/icons/${subject}.svg`} alt={subject} height={24} width={24}/>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl">
              {name}
              </p>
              <div className="subject-badge">
                {subject}
              </div>
            </div>
            <p className="text-lg">
              {topic}
            </p>
          </div>
        </div>
        <div className="items-start max-md:hidden text-2xl">
          {duration} Minutes
        </div>
      </article>
      <CompanionComponent
      {...companions}
      companionId={id}
      userName={user.firstName!}
      imageUrl={user.imageUrl!}
      />
    </main>
  )
}

export default CompanionSession;
