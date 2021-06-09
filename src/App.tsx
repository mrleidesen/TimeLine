import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { filterTimeline } from '@/utils'

export default function App() {
    const [nowTime, setNowTime] = useState(dayjs().format('YYYY/MM/DD HH:mm:ss'))
    let timer: number | null = null

    useEffect(() => {
        if (!timer) {
            setTimer()
        }

        return () => {
            disposeTimer()
        }
    }, [])

    const setTimer = () => {
        disposeTimer()
        timer = setInterval(() => {
            setNowTime(dayjs().format('YYYY/MM/DD HH:mm:ss'))
        }, 1000)
    }
    const disposeTimer = () => {
        if (timer) {
            clearInterval(timer)
            timer = null
        }
    }

    return (
        <div className="pt-14 w-full">
            <header className="fixed top-0 left-0 w-full h-14 bg-black text-white">
                <div className="container h-full mx-auto flex items-center box-border py-3 px-5">
                    <span className="text-3xl font-mono font-semibold text-white select-none">TimeLine</span>
                </div>
            </header>
            <div className="w-full overflow-auto box-border py-3 bg-gray-100">
                <main className="container mx-auto flex flex-col items-center">
                    <div className="flex flex-col md:items-center w-full box-border p-2">
                        {filterTimeline(nowTime).map((item, i) => (
                            <a
                                href={item.live}
                                target="_blank"
                                className={`sm:w-full md:w-4/5 lg:w-3/5 rounded-md box-border p-3 select-none bg-white flex flex-col font-mono
                                ${item.isSoon ? 'shadow-lg mb-5' : 'shadow mb-3'} ${item.isExpire ? 'text-gray-500' : ''}`}
                                key={i}
                            >
                                <div className="flex">
                                    <h2 className="flex-1 text-xl font-semibold mb-2">{item.name}</h2>
                                    <span className="text-red-500">{item.isSoon ? '即将开始' : ''}</span>
                                </div>
                                
                                <span className="text-sm">北京时间：<span className="text-yellow-600">{item.time}</span></span>
                                <span className="text-sm text-gray-500">{item.desc}</span>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}