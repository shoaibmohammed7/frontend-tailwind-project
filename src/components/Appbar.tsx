import { SearchBar } from "@/components/Searchbar"

export const Appbar = () => {
    return <div className="flex justify-between	pl-3 pr-3 pt-1">
        <div className="text-md inline-flex items-center">
            Youtube
        </div>
        <div>
            <SearchBar />
        </div>
        <div className="text-md inline-flex items-center">
            Logout
        </div>
    </div>
}