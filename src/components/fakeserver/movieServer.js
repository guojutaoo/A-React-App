import http from '../services/httpService';

const apiEndpoint = "http://localhost:3900/api/movies";

export function getMovie(){
    console.group(http.get(apiEndpoint))
    return http.get(apiEndpoint);
}

export function deleteMovie(movieId){
    return http.delete(apiEndpoint+'/'+movieId);
}