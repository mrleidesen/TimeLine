import React from 'react'
import Logo from './assets/E3Logo21.png'
import { sortTimelines } from '@/utils'

export default function App() {
    return (
        <div className="h-screen w-full flex flex-col">
            <header className="w-full h-14 bg-black text-white">
                <div className="container h-full mx-auto flex items-center box-border py-3 px-5">
                    <img 
                        className="object-contain object-center h-full"
                        src={Logo} 
                        alt="Logo" 
                    />
                </div>
            </header>
            <div className="w-full flex-1 overflow-auto box-border py-3 bg-gray-100">
                <main className="container mx-auto flex flex-col items-center">
                    <h1 className="sm:w-full md:w-4/5 lg:w-3/5 text-3xl font-semibold">时间表</h1>
                    <div className="flex flex-col md:items-center w-full box-border p-2">
                        {sortTimelines.map((item, i) => (
                            <a
                                href={item.live}
                                target="_blank"
                                className="sm:w-full md:w-4/5 lg:w-3/5 rounded-md shadow box-border p-3 mb-3 bg-white flex flex-col font-mono"
                                key={i}
                            >
                                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                                <span className="text-sm">开始时间：{item.time}</span>
                                <span className="text-sm text-gray-500">{item.desc}</span>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}