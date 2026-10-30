import { useState } from 'react'
import profileImg from './assets/profile.jpg'
import './App.css'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Button,
  buttonVariants
} from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-2/5 bg-[#141414] flex flex-col items-center justify-center">
          <img className="rounded-full border border-purple-800" src={profileImg} alt="Profile picture" />
        </div>
        <div className="w-3/5 bg-black flex flex-col justify-center px-16">
          <Card className="w-full max-w-md bg-transparent text-white-500">
            <CardHeader>
              <CardTitle className="text-white-800"></CardTitle>
              <CardDescription>Explore my projects and skills.</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-gray-300">
                  Hi, I'm a passionate developer with experience in building web applications using modern technologies. Feel free to explore my work and get in touch!
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <Button variant="outline" className="text-white bg-black border border-purple-800 mt-4">
                  Ver projetos
                </Button>
                <Button variant="outline" className="text-white bg-purple border border-purple-800 mt-4">
                  Baixar Curriculo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default App
