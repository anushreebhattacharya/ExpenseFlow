import axios from "axios";

const API_URL="http://localhost:3002/api/expenses/";

const getToken=()=>{
  const user=JSON.parse(localStorage.getItem("user"));
  return{
    headers:{
      Authorization:`Bearer ${user?.token}`
    }
  }
}

export const addExpense=async(expenseData)=>{
  const response=await axios.post(API_URL,expenseData,getToken());
  return response.data;
}

export const getExpenses=async()=>{
  const response=await axios.get(API_URL,getToken());
  return response.data;
}

export const deleteExpense=async(id)=>{
  const response=await axios.delete(API_URL+id,getToken());
  return response.data;
}

export const updateExpense=async(id,expenseData)=>{
  const response=await axios.put(API_URL+id,expenseData,getToken());
  return response.data;
}