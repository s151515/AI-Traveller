/* eslint-disable no-unused-vars */
import React, {FunctionComponent, useEffect, useState} from 'react';
import { Input } from '../components/ui/input';
import { BudgetOptions, SelectTravelsList } from '../constants/Options';

import { Button } from "../components/ui/button"
import { toast } from 'sonner';
import { AI_PROMPT } from '../constants/Options';
import { chatSession } from '../service/Aimodel.jsx';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../service/firebaseConfig.jsx';


const CreateTrip = () => {

  const [formData,setFormData]=useState([]);
  const [openDialog,setOpenDialog]=useState(false);
  const [loading,setLoading]=useState(false);

  const handleInputChange=(name,value)=>{

    setFormData({
      ...formData,
      [name]:value
    })
  }


  useEffect(()=>{
    console.log(formData);
  },[formData])


  const login=useGoogleLogin({
    onSuccess:(codeResp)=>{
      console.log(codeResp),
      getUserProfile(codeResp);
    },
    onError:(error)=>console.log(error)
  })

  const onGenerateTrip=async()=>{

    const user=localStorage.getItem('user')
    if(!user){
      setOpenDialog(true)
      return  ;
    }

    if(formData?.noOfDays>7 && !formData?.location || !formData?.budget || !formData?.traveler){
      toast("Please Fill all details")
      return ;
    }
    setLoading(true);

    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}',formData?.location)
    .replace('{noOfDays}',formData?.noOfDays)
    .replace('{traveler}',formData?.traveler)
    .replace('{budget}',formData?.budget)
    .replace('{totalDays}',formData?.noOfDays)

    const result=await chatSession.sendMessage(FINAL_PROMPT)

    console.log(result?.response?.text());

    setLoading(false);

    saveAiTrip(result?.response?.text())
  }

  const saveAiTrip=async(TripData)=>{

    setLoading(true);

    const user=JSON.parse(localStorage.getItem('user'))
    const docId=Date.now().toString()
    await setDoc(doc(db, "Aitrips", docId), {
      
      userSelection:formData,
      tripData:TripData,
      userEmail:user?.email,
      id:docId
    });

    setLoading(false);
    
  }

  const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'application/json',
      },
    }).then((resp) => {
      console.log("Hi, I have a response");
      console.log(resp);
      localStorage.setItem('user',JSON.stringify(resp.data));
      setOpenDialog(false);
      
    })
    .then(()=>onGenerateTrip())
    .catch((error) => console.log("Error fetching user profile:", error));
  };
  


  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'
    style={{ backgroundColor: 'lightgray', backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWd7GEAAAABGdBTUEAALGPC+tsAAAACXBIWXMAAAsTAAALEwEAmpwAAAABnSURBVhBYBEKg+SGFRE了什么/9///9///9///9///9///9///9///9///9///9///9///9///9///9///9///9///9///9///9///9///9///9///9///9+73333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333)' }}>

        <h2 className='font-bold text-3xl'>Tell us your travel Preferences⛺⛺</h2>
        <p className="mt-3 text-grey-500 text-xl">Provide just a few details of your dream trip and this AI planner will plan a trip based on ypur choices!!</p>

        <div className='mt-15 flex flex-col gap-10'>
            <div>
                <h2 className='my-3 text-xl font-medium'>Where do you plan to go?</h2>
                <Input placeholder={'Delhi, India'} type="string"
                  onChange={(e)=>handleInputChange('location',e.target.value)}
                />
                
            </div>

            <div>

            <h2 className='my-3 text-xl font-medium'>How many days are you planning for trip?</h2>
            <Input placeholder={'Ex.4'} type="number"
              onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
            />
            </div>


        </div>

        <div className='mt-10'>
        <h2 className='my-3 text-xl font-medium'>What is your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {BudgetOptions.map((item,index) => (
            
            <div key={index} className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget==item.title&&'shadow-xl border-black'}`}
              onClick={()=>handleInputChange('budget',item.title)}
            >
              
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
        </div>

        <div className='mt-10'>
        <h2 className='my-3 text-xl font-medium'>With who do you plan to travel?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelsList.map((item,index) => (
            
            <div key={index} className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.traveler==item.people&&'shadow-xl border-black'}`}
             onClick={()=>handleInputChange('traveler',item.people)}
            >
              
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
              
            </div>
          ))}
        </div>
        </div>
        
        <div className='flex justify-end my-10'>
          <Button 
          disabled={loading}
          onClick={onGenerateTrip}>
          {loading?
            <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin'/>:'Create Trip'
          }
            </Button>
        </div>

          <Dialog open={openDialog}>
          
          <DialogContent>
            <DialogHeader>
              
              <DialogDescription>
                <img src='/logo.svg' />
                <h2 className='font-bold text-xl mt-7'>Sign In with Google</h2>
                <p>Sign in to the App with google authentication securely</p>
                <Button 
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center">
                
                <FcGoogle className='h-7 w-7'/>Sign In with Google
                
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>


    </div>
  )
}

export default CreateTrip