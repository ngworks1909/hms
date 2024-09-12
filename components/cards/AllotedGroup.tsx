import React from 'react'
import { Card } from '../ui/card'
import { fetchAlloted } from '@/actions/fetchAlloted'
import AllotedCard from './AllotedCard'

export default async function AllotedGroup() {
  const pendingcards = await fetchAlloted()
  return (
    <Card className='h-full overflow-hidden overflow-y-scroll p-2 flex flex-col gap-2'>
     {pendingcards.length === 0 && <div className='h-full flex items-center justify-center'><span>No results found...</span></div>}
     {pendingcards.map((pendingcard, index) => {
        return <AllotedCard key={index} pendingcard = {pendingcard}/>
     })}
    </Card>
  )
}
