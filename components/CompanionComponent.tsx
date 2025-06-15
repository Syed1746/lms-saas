    'use client'
    import { cn, getSubjectColor } from '@/lib/utils'
    import { vapi } from '@/lib/vapi.sdk'
    import Image from 'next/image'
    import React, { useEffect, useRef, useState } from 'react'
    import Lottie, { LottieRefCurrentProps } from 'lottie-react';
    import soundWaves from '@/constants/soundwaves.json'


    enum CallStatus{
        INACTIVE = 'INACTIVE',
        ACTIVE = 'ACTIVE',
        CONNECTING = 'CONNECTING',
        FINISHED = 'FINISHED'
    }

    const CompanionComponent =async ({companionId, name, subject, topic, userName,userImage, style, voice }:CompanionComponentProps) => {
        const[callStatus,setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)
        const [speechStart, setSpeechStart] = useState(false);
        const lottieRef = useRef<LottieRefCurrentProps>(null)
        useEffect(()=>{
            if(lottieRef){
                if(speechStart) lottieRef.current?.play();
            }
            else {
                lottieRef.current?.stop()
            }
        },[speechStart, lottieRef])
        useEffect(()=>{
            const onCallStart = () =>setCallStatus(CallStatus.ACTIVE)
            const onCallEnd = () =>setCallStatus(CallStatus.FINISHED)
            const onMessage = () => {}
            const onSpeechStart = () => setSpeechStart(true)
            const onSpeechEnd = () => setSpeechStart(false)
            const onError = (error:Error) => console.log("error",error)

            vapi.on('call-start',onCallStart)
            vapi.on('call-end',onCallEnd)
            vapi.on('message',onMessage)
            vapi.on('error',onError)
            vapi.on('speech-start',onSpeechStart)
            vapi.on('speech-end',onSpeechEnd)

            return () =>{
                vapi.off('call-start',onCallStart)
                vapi.off('call-end',onCallEnd)
                vapi.off('message',onMessage)
                vapi.off('error',onError)
                vapi.off('speech-start',onSpeechStart)
                vapi.off('speech-end',onSpeechEnd)
            }
        },[])
        
    return (
        <section className='flex flex-col h-[70vh]'>
            <section className='flex flex-col gap-8 max-sm:flex-col'>
                <div className='companion-section'>
                    <div className='companion-avatar' style={{backgroundColor:getSubjectColor(subject)}}>
                        <div className={cn('absolute transition-opacity duration-1000', callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED ? 'opacity-1001':'opacity-0', callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse')}>
                            <Image src={`/icons/${subject}.svg`} alt={subject} height={150} width={150}/>
                        </div>
                        <div className={cn('absolute transition-opacity duration-100', callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0' )}>
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={soundWaves}
                                autoplay={false}
                                className='companion-lottie'
                            />
                        </div>
                    </div>
                    <p className='text-2xl font-bold'>{name}</p>
                </div>
            </section>
        </section>
    )
    }

    export default CompanionComponent
