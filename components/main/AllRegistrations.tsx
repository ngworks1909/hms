import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import PendingCard from '../cards/PendingCard'
import PendingCardGroup from '../cards/PendingCardGroup'
import BedPendingCardGroup from '../cards/BedPendingCardGroup'
import AllotedGroup from '../cards/AllotedGroup'

export default function AllRegistrations() {
  
  return (
    
      <Tabs defaultValue="alloted" className="w-full flex flex-col p-4 h-full">
  <TabsList className='w-max self-end'>
    <TabsTrigger value="alloted">Alloted</TabsTrigger>
    <TabsTrigger value="doctor">Doctor</TabsTrigger>
    <TabsTrigger value="bed">Bed</TabsTrigger>
  </TabsList>
  <TabsContent value="alloted" className='h-[90dvh]'><AllotedGroup/></TabsContent>
  <TabsContent value="doctor" className='h-[90dvh]'>
    <PendingCardGroup/>
  </TabsContent>
  <TabsContent value="bed" className='h-[90dvh]'><BedPendingCardGroup/></TabsContent>
</Tabs>
  )
}
