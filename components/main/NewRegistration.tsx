"use client"
import { UserType, useUsers } from '@/hooks/useUsers';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import {CiUser} from 'react-icons/ci'

export default function NewRegistration() {
    const [data, setData] = useState('')
    const {users} = useUsers(data, 500);

    const registerOpd = async(email: string) => {
      const response = await fetch('/api/registeropd', {
        method: "POST",
        body: JSON.stringify(email)
      });
      const json = await response.json();
      if(json.success){
        alert(json.message)
      }
      else{
        alert(json.error)
      }
    }

    return (
      <div className='p-4'>
        <div className='flex flex-col mt-4 shadow-2xl shadow-border'>
            <Input type={"text"} placeholder="Search by email" value={data} onChange={(e) =>{e.preventDefault(); setData(e.target.value)}} />
        </div>
        <div className='flex h-[50dvh] flex-col mt-4 gap-4 overflow-hidden overflow-y-scroll'>
          {data.length > 0 && users.length === 0 && <div className='h-full flex items-center justify-center'><span>No results found</span></div>}
          {users.map((user: UserType, index: number) => {
            return <>
            <Card key={index} className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
            <Avatar>
               <AvatarImage src= {user.image} />
               <AvatarFallback><CiUser size={20}/></AvatarFallback>
               </Avatar>
              <span className='text-sm'>{user.username}</span>
            </div>
              <Button onClick={async() => {await registerOpd(user.email)}} >Register</Button>
            </Card>
            </>
          })}
        </div>
      </div>
    )
}
