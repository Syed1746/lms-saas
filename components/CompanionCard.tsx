import { Badge } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface CompanionCardProps{
    id: string;
    name:string;
    topic : string;
    subject : string;
    duration : number;
    color : string
}
const CompanionCard = ({id,topic,subject, name, duration,color} : CompanionCardProps) => {
  return (
    <article className='companion-card' style={{backgroundColor:color}}>
        <div className='flex justify-between items-center'>
            <div className='subject-badge'>{subject}</div>
            <button className='companion-bookmark'>
                <Image src="/icons/bookmark.svg" alt="book-mark" width={13} height={16}/>
            </button>
        </div>
        <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-sm'>{topic}</p>
                <div className='flex items-center gap-2'>
                    <Image src="/icons/clock.svg" width={13.5} height={15} alt='clock-svg'/>
                    <span>{duration} mins duration</span>
                </div>
                <Link href={`/companions/${id}`}>
                        <button className='btn-primary w-full justify-center'>
                            Launch Session
                        </button>
                    </Link>
            </div>
    </article>
  )
}

export default CompanionCard