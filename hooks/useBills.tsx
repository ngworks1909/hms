import { useEffect, useState } from "react"

export type BillType = {
    user: {
        username: string;
        image: string;
    };
    registerId: string;
    totalbill: number;
}

export const useBills = (data: string, timeout: number) => {
    const [debouncedValue, setDebouncedValue] = useState<BillType[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeOutNumber = setTimeout(async() => {
            setLoading(true)
            if(data){
                fetch(`/api/fetchbill/${data}`, {method: 'GET'}).then((response) => {
                    response.json().then((json) => {setDebouncedValue(json.data); setLoading(false)})
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