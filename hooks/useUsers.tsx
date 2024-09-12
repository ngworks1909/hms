import { useEffect, useState } from "react"

export type UserType = {userId: string, username: string, image: string, email: string}

export const useUsers = (data: string, timeout: number) => {
    const [debouncedValue, setDebouncedValue] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeOutNumber = setTimeout(async() => {
            setLoading(true)
            if(data){
                fetch(`/api/fetchuser/${data}`, {method: 'GET'}).then((response) => {
                    response.json().then((json) => {setDebouncedValue(json.users); setLoading(false)})
                })
            }
            else{
                setDebouncedValue([])
                setLoading(false)
            }
        }, timeout);
        return () => {
            clearTimeout(timeOutNumber);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return {loading, users:debouncedValue};
}