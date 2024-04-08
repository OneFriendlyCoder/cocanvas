"use client"
import queryString from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {useDebounceValue} from "usehooks-ts"
import { ChangeEvent, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
const SearchInputs = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounceValue(value, 500);            //returns a tuple

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const url = queryString.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue[0],
            },
        },{skipEmptyString: true, skipNull: true});
        router.push(url);
    }, [debouncedValue, router])

    return (  
        <div className="w-full relative">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"/>
            <Input className="text-white w-full max-w-[516px] pl-9" placeholder="Search Boards" onChange={handleChange} value={value}/>
        </div>
    );
}
 
export default SearchInputs;