import {useQuery, UseQueryResult} from 'react-query'
import {fetchAllLandPads} from './api'
import { TLandpad } from './entities'


const useAllLandPads = ():UseQueryResult<TLandpad[], Error> => {
    return useQuery<TLandpad[], Error>('landpads', fetchAllLandPads)
}

export {
    useAllLandPads
}