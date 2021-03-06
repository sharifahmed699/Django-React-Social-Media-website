import { Typography } from '@material-ui/core'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { domain, header } from '../env'
import { useStateValue } from '../state/stateProvider'
import SinglePost from './common/SinglePost'

const AllPost = () => {
    const [allpost, setAllpost] = useState(null)
    const [{ reload }, { }] = useStateValue()
    useEffect(() => {
        const getallpost=async()=>{
            Axios({
                method:'GET',
                url:`${domain}/api/posts/`,
                headers:header
            }).then(response=>{
                console.log(response.data)
                setAllpost(response.data)
            })
        }
        getallpost()
    }, [reload])
    return (
        allpost !== null && (
            <>
                {
                    allpost?.map((item,i)=> <SinglePost key={i} post={item} /> )
                }   
            </>    
            
       )
    );
}

export default AllPost
