import { SignIn } from '@clerk/nextjs'
import { Main } from 'next/document'

export default function Page() {
  return (
    <main className='flex justify-center items-center'>
        <SignIn />
    </main>
)
}