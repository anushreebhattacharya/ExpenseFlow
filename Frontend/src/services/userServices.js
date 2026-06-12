import axios from "axios";

const API_URL="https://expenseflow-backend-d0fm.onrender.com/api/user";

const getToken=()=>{
  const user=JSON.parse(localStorage.getItem("user"));
  return{
    headers:{
      Authorization:`Bearer ${user?.token}`
    }
  }
}

export const getProfile=async()=>{
  const response=await axios.get(API_URL+"profile",getToken());
  return response.data;
}

export const updateProfile=async(userData)=>{
  const response=await axios.put(API_URL+"profile",userData,getToken());
  return response.data;
}