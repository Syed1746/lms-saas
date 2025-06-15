'use client'
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const searchInput = () => {
    const pathName = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic')|| '';
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(()=>{
        const delayDebounceFn = setTimeout(()=>{
            if(searchQuery){
                const newUrl = formUrlQuery({
                    params:searchParams.toString(),
                    key:"topic",
                    value:searchQuery
                })
                router.push(newUrl,{scroll:false});
            }
            else{
                if(pathName === '/companions'){
                    const newUrl = removeKeysFromUrlQuery({
                        params:searchParams.toString(),
                        keysToRemove:["topic"]
                    })
                }
            }
        },500)
        
    },[searchQuery, searchParams,router, pathName])

  return (
    <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
      <Image src="/icons/search.svg" alt='search-icon' height={15} width={15}/>
      <input type="text"
       placeholder='Search Companions...'
        className='outline-none'
        value={searchQuery}
        onChange={(e)=>{
            setSearchQuery(e.target.value)
        }}
         />
    </div>
  )
}

export default searchInput
