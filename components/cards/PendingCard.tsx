import React from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type PendingCardItem = {
    registerId: string;
    user: {
        userId: string;
        username: string;
        mobile: string;
        image: string;
    };
}

export default function PendingCard({pendingcard}: {pendingcard: PendingCardItem}) {
  return (
    <Card className="flex justify-between items-center px-4 py-2">
      <Avatar>
        <AvatarImage src={pendingcard.user.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-sm font-medium">{pendingcard.user.username}</span>
      <span className="text-sm font-medium">{pendingcard.user.mobile}</span>
      <div className="border border-red-300 p-2 rounded-2xl text-red-300">Pending</div>
    </Card>
  );
}
