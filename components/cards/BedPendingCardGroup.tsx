import React from 'react'
import { Card } from '../ui/card'
import BedPendingCard from './BedPendingCard'
import { fetchBedPending } from '@/actions/fetchBedPending'

export default async function BedPendingCardGroup() {
  const pendingcards = await fetchBedPending()
  return (
    <Card className='h-full overflow-hidden overflow-y-scroll p-2 flex flex-col gap-2'>
     {pendingcards.length === 0 && <div className='h-full flex items-center justify-center'><span>No results found...</span></div>}
     {pendingcards.map((pendingcard, index) => {
        return <BedPendingCard key={index} pendingcard = {pendingcard}/>
     })}
    </Card>
  )
}
