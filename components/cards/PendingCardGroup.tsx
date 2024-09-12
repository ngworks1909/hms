import React from 'react'
import PendingCard from './PendingCard'
import { fetchPending } from '@/actions/fetchPending'
import { Card } from '../ui/card'

export default async function PendingCardGroup() {
  const pendingcards = await fetchPending()
  return (
    <Card className='h-full overflow-hidden overflow-y-scroll p-2 flex flex-col gap-2'>
     {pendingcards.length === 0 && <div className='h-full flex items-center justify-center'><span>No results found...</span></div>}
     {pendingcards.map((pendingcard, index) => {
        return <PendingCard key={index} pendingcard = {pendingcard}/>
     })}
    </Card>
  )
}
