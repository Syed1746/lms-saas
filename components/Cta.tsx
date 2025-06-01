import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cta = () => {
  return (
    <article className='cta-section'>
        <div className='cta-badge'>
      Start learning your way
        </div>
        <h2 className='text-3xl font-bold'>Build a personalize Learning Companion</h2>
        <p>
          Pick a name, subject, voice & Personality - and start learnign throught voice conversations that feel natural and fun.
        </p>
        <Image src="/images/cta.svg" alt='' width={300} height={300}/>
        <button className='btn-primary bg-orange-500' >
          <Image src="/icons/plus.svg" alt='plus' width={12} height={12}/>
          <Link href="/companions/new">
            <p >Build New Companion
              </p>
          </Link>
        </button>
    </article>
  )
}

export default Cta
