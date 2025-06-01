import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { cn, getSubjectColor } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
interface CompanionsListProps{
    title: string;
    companions?:Companion[];
    classNames?:string;
}
const CompanionList = ({title, companions, classNames}:CompanionsListProps) => {
  return (
    <article className={cn('companion-list',classNames)}>
        <h2 className='font-bold text-3xl'>Recently Completed lessons</h2>
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="text-lg w-2/3">Lessons</TableHead>
      <TableHead className="text-lg">Subject</TableHead>
      <TableHead className="text-lg">Duration</TableHead>
    </TableRow>
  </TableHeader>            
  <TableBody>
    {companions?.map(({id,name,subject, topic, duration})=>(
        <TableRow key={id}>
            <TableCell>
                <Link href={`/companions/${id}`}>
                    <div className='flex items-center gap-2'>
                      <div className='size-[72px] flex items-center justify-center rounded-lg max-md:hidden' style={{backgroundColor:getSubjectColor(subject)}}>
                        <Image 
                          src={`/icons/${subject}.svg`}
                          alt={subject}
                          width={35}
                          height={35}
                        />
                      </div>
                      <div  className='flex flex-col gap-2'>
                        <p className='font-bold text-2xl'>{name}</p>
                        <p className='text-lg'>Topic: {topic}</p>
                      </div>
                    </div>
                </Link>
            </TableCell>
            <TableCell>
              <div>
                <p className='subject-badge w-fit flex justify-center items-center max-md:hidden'>{subject}</p>
              </div>
              <div className='flex items-center justify-center md:hidden p-2 rounder-lg w-fit' style={{backgroundColor:getSubjectColor(subject)}}>
                <Image src={`/icons/${subject}.svg`} alt={subject} width={13} height={13}/>
              </div>
            </TableCell>
            <TableCell>
              <div className='flex item-center gap-2 justify-end w-full'>
                <p>{duration} {' '}
                <span className='max-md:hidden'>
                  mins
                </span>
                </p>
                <Image src="/icons/clock.svg" alt='mins' width={13} height={13}/>
                </div>
            </TableCell>
        </TableRow>
    ))}
  </TableBody>
</Table>
    </article>
  )
}

export default CompanionList
