import { useMemo} from "react";


export const useSortedPersones = (persones, sort) => {
  
  const sortedPersones = useMemo(() => {
    if (sort) {
      return [...persones].sort((a, b) => b[sort] - a[sort])
    }

    return persones
  }, [sort, persones])
      return sortedPersones
}

export const usePersones = (persones, sort, query) => {
  const sortedPersones = useSortedPersones(persones, sort)
  const sortedAndSearchPersones = useMemo(() => {
    return sortedPersones.filter(persone => persone.name.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPersones])

  return sortedAndSearchPersones
}


 