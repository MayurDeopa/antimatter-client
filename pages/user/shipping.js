import styles from '../../styles/form.module.css'


import { useState } from "react";
import { useContext } from "react";
import { Store } from "../../lib/drawer/context/StoreContext";
import useForm from "../../lib/drawer/customhooks/useForm";
import {useRouter} from 'next/router'


import DashBoard from "../../components/Authentication/DashBoard"
import PageWrapper from "../../components/PageWrapper";
import AwaitButton from '../../components/Loaders/AwaitButton'
import withAuth from "../../components/Authentication/withAuth";
import Skeleton from "../../components/Loaders/Skeleton";
import ErrorPopUp from '../../components/Misc/ErrorPopUp'
import Input from "../../components/Authentication/Input";
import Head from "next/head";

const Shipping =()=>{
    const sample =[1,2,5,6]
    const router = useRouter()
    const {userState} = useContext(Store)
    const [user] = userState
    const {awaiting,saveDetails,err} = useForm({
        id:user?.id,
        formType:'shipping'
    })
    const [details,setDetails] = useState({
        name:'',
        email:'',
        'phone number':''
    })
    const [edit,setEdit] = useState(false)
    if(err){
        return(
         <ErrorPopUp>
             <h3>{err}</h3>
             <AwaitButton
                 states={{
                     text:"Try again",
                     action:()=>router.reload()
                 }}
             />
         </ErrorPopUp>
        )
    }
   else if(awaiting){
    return (
        <div className="page">
            <Head>
                <title>Loading</title>
            </Head>
            <PageWrapper>
                <DashBoard>
                <form className={styles.form}>
                            <div className={styles.header}>
                                <Skeleton
                                    attributes={{
                                        height:"2rem",
                                        width:'min(100%,15rem)'
                                    }}
                                />
                                <Skeleton
                                    attributes={{
                                        height:"1.4rem",
                                        width:'min(100%,3rem)'
                                    }}
                                />
                            </div>
                            <>
                                {sample.map((s,i)=>{
                                    return(
                                        <section className={styles.section}  key={i}>
                                            <Skeleton
                                                attributes={{
                                                    height:'1rem',
                                                    width:'min(100%,3rem)'
                                                }}
                                            />
                                            <Skeleton
                                                attributes={{
                                                    height:'2rem',
                                                    width:'min(100%,23rem)'
                                                }}
                                            />
                                        </section>)
                                })
                                }
                            </>
                            <Skeleton
                                attributes={{
                                    height:'2rem',
                                    width:'min(100%,5rem)'
                                }}
                            />
                        </form>
                </DashBoard>
            </PageWrapper>
        </div>
    )
   }
   else{
    return (
        <div className="page">
            <Head>
                <title>Shipping</title>
            </Head>
            <PageWrapper>
                <DashBoard>
                    <form className={styles.form}>
                        <div className={styles.header}>
                            <h2>
                                    Shipping Details
                            </h2>
                            <h3
                                className="edit"
                                onClick={()=>setEdit(!edit)}
                            >
                                {edit?"X":"Edit"}
                            </h3>
                        </div>
                        <>
                        {
                            Object.keys(user.details.shipping).map((key,index)=>{
                                return(
                                    <Input 
                                        value={{
                                            title:key,
                                            value:user.details.shipping[key]
                                        }}
                                        state={{
                                            editState:[edit,setEdit],
                                            form:[details,setDetails]
                                        }}
                                        key={index}
                                    />
                                )
                            })
                        }
                        </>
                        <section className={styles.section}>
                                {
                                    edit
                                    ?
                                    <input 
                                    className="save"
                                    value={'Save'}
                                    type='button'
                                    style={{
                                        width:'5rem'
                                    }}
                                    onClick={()=>console.log(details)}
                                    />
                                    :
                                    <input 
                                    className="await_save"
                                    value={'Save'}
                                    type='button'
                                    style={{
                                        width:'5rem'
                                    }}
                                    />
                                }
                                </section>
                    </form>
                </DashBoard>
            </PageWrapper>
        </div> 
    )
   }
}

export default withAuth(Shipping);