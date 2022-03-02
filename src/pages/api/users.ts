import { NextRequest, NextResponse } from "next/server"

export default (resquest:NextRequest,response:NextResponse)=>{
 const users=[
    {id:1,nome:'Minchak'},
    {id:2,nome:'Canive'},
    {id:3,nome:'Antonio'}
]
return response.json();
}