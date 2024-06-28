"use client";
import Home from "@/components/home/Home";
import {useConfig} from "@/hooks/useConfig";
import {useActions} from "@/hooks/useActions";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
export default function HomePage() {
  const config = useConfig();
  const {setCategory} = useActions();
  config.category === "" && setCategory("all");
  const router = useRouter();
  useEffect(() => {
    if (config) {
      if (config.activeDetailLink && config.activeDetailLink !== "") {
        /*console.log("redirecting to from app: " + config.category + '/' + config.activeDetailLink);*/
        router.push("/"+config.category + '/' + config.activeDetailLink);
      }
    }
  }, []);
  return (
   <Home/>
  )
}


