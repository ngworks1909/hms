import React from 'react'
import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type AllotedType = {
    totalbill: number;
    user: {
        userId: string;
        username: string;
        mobile: string;
        image: string
    };
    doctor: {
        docterId: string;
        doctorName: string;
    };
}
export default function AllotedCard({pendingcard}: {pendingcard: AllotedType}) {

  return (
    <Card className="flex justify-between items-center px-4 py-2">
      <Avatar>
        <AvatarImage src={pendingcard.user.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-sm font-medium">{pendingcard.user.username}</span>
      <span className="text-sm font-medium">{pendingcard.user.mobile}</span>
      <span className="text-sm font-medium">{pendingcard.doctor.doctorName}</span>
      <span className="text-sm font-medium">{pendingcard.totalbill}</span>
      <div className="border border-green-300 p-2 rounded-2xl text-green-300">Processing</div>
    </Card>
  )
}
