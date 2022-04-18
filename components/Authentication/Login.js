import Link from 'next/link';
import { loginWithGoogle } from '../../services/api/user.authentication';
import {BsPerson,BsGoogle,BsApple,BsTwitter} from 'react-icons/bs'
import styles from '../../styles/authentication.module.css'
import { useContext } from 'react';
import  { Store } from '../../lib/drawer/context/StoreContext';
import { decodeJwt } from '../../lib/drawer/decode';
import { useState } from 'react';
import ErrorPopUp from '../Misc/ErrorPopUp';
import AwaitButton from '../Loaders/AwaitButton'
import { useRouter } from 'next/router';
import { providers } from '../../lib/drawer/AuthProvider';
import Toast from '../Misc/Toast';
import Message from '../basic/Message';

const Login =()=>{
    const router = useRouter()
    const [authProviders,setAuthProviders] = useState(providers)
    const [isLoading,setIsLoading] = useState(false)
    const {userState}= useContext(Store)
    const [user,setUser] = userState
    const [err,setErr] = useState(false)

    const login =async(data)=>{
        const fun = data.action
        setErr()
        setAuthProviders(authProviders.map((a)=>a.name!==data.name?{...a,state:'disabled'}:{...a,state:'loading'}))
        if(fun){
            try{
                const res = await fun()
                if(res.status==="ok"){
                    localStorage.setItem('key',JSON.stringify(res.user))
                    setErr()
                    setUser(decodeJwt(res.user))
                }
                else{
                    setErr(res.messsage)
                }
            }catch(error){
                setErr(error.message)
            }
        }
        setAuthProviders(providers)
    }
    
    return (
        <div className={styles.card}> 
                <div className={styles.card_header}>
                <div className='svg_wrapper' style={{
                    fontSize:'60px'
                }}>
                    <BsPerson/>
                </div>
                <h1>
                    Log In
                </h1>
            </div>
            <div className={styles.card_input_wrapper}>
                {authProviders.map((p,i)=>{
                    return (
                        <AwaitButton
                            states={{
                                awaitState:p.state,
                                action:()=>login(p),
                                color:p.color
                            }}
                            key={i}
                        >
                            {p.icon}
                            <h3>{`Continue with ${p.name}`}</h3>
                        </AwaitButton>
                    )
                })}
            </div>
            <div className={styles.card_footer}>
                <h3>
                    by logging in you agree to our 
                    <Link href={'/about'}>
                        <p className='link'>Terms and Conditions</p>
                    </Link>
                </h3>
            </div>
            {
                err
                ?
                <ErrorPopUp>
                    <h3>{err}</h3>
                    <AwaitButton
                        states={{
                            text:"Try again",
                            awaitState:'none',
                            action:()=>router.reload()
                        }}
                    />
                </ErrorPopUp>
                :
                null
            }
        </div>
    )
}

export default Login;