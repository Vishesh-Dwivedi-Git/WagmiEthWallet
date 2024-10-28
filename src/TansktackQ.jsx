import React from 'react'
import {useQuery , QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryclient=new QueryClient();


async function getTodo(){
    const resp=await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data=await resp.json()
    
    return data;
}
const TansktackQ = () => {
  return (
    <QueryClientProvider client={queryclient}>
    <Todo/>
    </QueryClientProvider>
  )
}

export default TansktackQ


function Todo(){
    const {data,isLoading,error}=useQuery({queryKey:["todo"], queryFn:getTodo , refetchInterval:5000});
    if(isLoading) return <h1>Loading.....</h1>
    else if(error) return <h1>Error...</h1>
    return (
        <div>
        {data?.map(tod=><li key={tod.id}>{tod.title}</li>)}
        </div>


    )
}