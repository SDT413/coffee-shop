"use client";
import Home from "@/components/home/Home";
import {useConfig} from "@/hooks/useConfig";
import {useActions} from "@/hooks/useActions";
export default function HomePage() {
  const config = useConfig();
  const {setCategory} = useActions();
  config.category === "" && setCategory("all");
  return (
   <Home/>
  )
}


