import { Code2 } from 'lucide-react'
import React from 'react'

export default function Logo() {
  return (
    <div>
      <span className="flex items-center justify-center gap-3">
        <Code2 className="inline w-8 h-8 xl:w-10 xl:h-10 text-purple-400" />
        <span className="text-3xl xl:text-5xl text-white">CodeQuiz</span>
      </span> 
    </div>
  )
}
