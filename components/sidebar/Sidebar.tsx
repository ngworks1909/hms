import {
    User,
    View,
    Library,
    BookPlus,
    BookUp,
    BookDown
  } from "lucide-react"
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command";
import Link from "next/link";
  
  export default function Sidebar() {
    return (
      <Command className="rounded-lg border shadow-md h-full">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="h-full max-h-full">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Users">
            <Link href={'/'}>
            <CommandItem className="py-2 bg-none data-[selected='true']:bg-transparent hover:bg-accimp">
              <Library className="mr-2 h-4 w-4" />
              <span>All Registrations</span>
            </CommandItem>
            </Link>
            <Link href={'/new'}>
            <CommandItem className="py-2 bg-none data-[selected='true']:bg-transparent hover:bg-accimp">
              <BookPlus className="mr-2 h-4 w-4" />
              <span>New Registration</span>
            </CommandItem>
            </Link>
            
            <Link href={'/paybill'}>
            <CommandItem className="py-2 bg-none data-[selected='true']:bg-transparent hover:bg-accimp">
              <BookUp className="mr-2 h-4 w-4" />
              <span>Pay Bill</span>
            </CommandItem>
            </Link>
            <Link href={'/discharge'}>
            <CommandItem className="py-2 bg-none data-[selected='true']:bg-transparent hover:bg-accimp">
              <BookDown className="mr-2 h-4 w-4" />
              <span>Discharge</span>
            </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Admin">
            <Link href={'/idledoctors'}>
            <CommandItem className="py-2 bg-none data-[selected='true']:bg-transparent hover:bg-accimp">
              <User className="mr-2 h-4 w-4" />
              <span>Idle Doctors</span>
            </CommandItem>
            </Link>
            <Link href={'/idlebeds'}>
            <CommandItem className="py-2 bg-none data-[selected='true']:bg-transparent hover:bg-accimp">
              <View className="mr-2 h-4 w-4" />
              <span>Idle Beds</span>
            </CommandItem>
            </Link>
          </CommandGroup>
        </CommandList>
      </Command>
    )
  }
  