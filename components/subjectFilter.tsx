'use client'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { subjects } from '@/constants'
// import { useRouter } from 'next/router'
import { useSearchParams,useRouter } from 'next/navigation'
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils'

const subjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("subject") || " ";
    const [subject,setSubject] = useState("")
    useEffect(()=>{
        let newUrl = "";
        if(subject === 'All'){
            newUrl = removeKeysFromUrlQuery({
                params:searchParams.toString(),
                keysToRemove:["subject"],
            })
        }
        else{
            newUrl = formUrlQuery({
                params:searchParams.toString(),
                key:"subject",
                value:subject
            })
            router.push(newUrl,{scroll:false})
        }
    },[subject])
  return (
    <div>
      <Select onValueChange={setSubject} value={subject}>
      <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the Subject" />
  </SelectTrigger>
  <SelectContent>
    {subjects.map((subject)=>(
        <SelectItem
        value={subject}
        key={subject}
        className='capitalize'
        >
            {subject}
        </SelectItem>
    ))}
  </SelectContent>
      </Select>
    </div>
  )
}

export default subjectFilter
