import styles from '../styles/contact.module.css'

import SecondaryButton from '../components/Loaders/SecondaryButton'
import Skeleton from '../components/Loaders/Skeleton';
import EmptyState from '../components/Misc/EmptyState';
import PageWrapper from '../components/PageWrapper'
import { useState } from 'react';
import MainContainer from '../components/Misc/MainContainer';
import Form from '../components/Misc/Form';
import OptInput from '../components/Misc/OptInput';

const Contact =()=>{
    return(
        <PageWrapper>
           <MainContainer
            customClasses={styles.container}
            justify={'center'}
            gap={0}
            maxWidth={'100%'}
           >
                <MainContainer
                    customClasses={styles.banner}
                    direction={'column'}
                >
                    <h2>Contact us</h2>
                    <p>You can contact the support from the form on right, or reach out to us on social media.</p>
                </MainContainer>
                <Form
                    
                    maxWidth={'50rem'}
                >
                    <MainContainer
                        maxWidth={'100%'}
                    >
                        <OptInput
                            placeholder={'Name'}
                            required
                        />
                        <OptInput
                            placeholder={'Email'}
                            required
                        />
                    </MainContainer>
                    <OptInput
                            placeholder={'Subject'}
                            required
                        />
                    <OptInput
                        placeholder={'Message'}
                        required
                        type={'textarea'}
                    />
                    <MainContainer
                        maxWidth={'100%'}
                        justify={'flex-end'}
                    >
                        <SecondaryButton
                            text={'Submit'}
                            width={'10rem'}
                        />
                    </MainContainer>
                </Form>
            </MainContainer> 
        </PageWrapper>
    )
}

export default Contact;