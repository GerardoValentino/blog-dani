//import { useState } from 'react'
//import './App.css'

import { useMemo } from "react";
import { MainLayout } from "./layouts"
import { useNavigationStore } from "./store/tab.store";
import type { NavItems } from "./types";
import { MainPage } from "./pages";

function App() {
  const { tabs } = useNavigationStore();
  const selectedTab: NavItems | undefined = useMemo(() => tabs.find(tab => tab.isSelected) , [tabs]);

  return (
    <>
      {!selectedTab ? (
        <MainPage />
      ) : (<MainLayout />)}
    </>
  )
}

export default App
