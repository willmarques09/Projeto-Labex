import {useNavigate} from "react-router-dom"
import { useEffect} from "react";


export const useProtectPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token === null){
        navigate('/login');
      }
    }, [])
  };