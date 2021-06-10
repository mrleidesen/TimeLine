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
                <div className="container h-full mx-auto flex justify-between items-center box-border py-3 px-5">
                    <span className="text-3xl font-mono font-semibold text-white select-none">TimeLine</span>
                    <a 
                        href="https://github.com/mrleidesen/TimeLine"
                        target="_blank"
                        className="h-6 w-6"
                    >
                        <svg 
                            fill="currentColor" 
                            className="text-white h-full w-full"
                        >
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                        </svg>
                    </a>
                </div>
            </header>
            <div className="w-full overflow-auto box-border py-3 bg-gray-100">
                <main className="container mx-auto flex flex-col items-center">
                    <div className="flex flex-col md:items-center w-full box-border p-2">
                        {filterTimeline(nowTime).map((item, i) => (
                            <a
                                href={item.live}
                                target="_blank"
                                className={`sm:w-full md:w-4/5 lg:w-3/5 rounded-md box-border p-3 select-none bg-white flex flex-col font-sans
                                ${item.isToday ? 'shadow-lg mb-5' : 'shadow mb-3'} ${item.isExpire ? 'text-gray-500' : ''}`}
                                key={i}
                            >
                                <div className="flex">
                                    <h2 className="flex-1 text-xl font-semibold mb-2 font-mono">{item.name}</h2>
                                    <span className="text-red-500">{item.isSoon ? '即将开始' : ''}</span>
                                </div>
                                
                                <span className="text-sm">北京时间：<span className="text-yellow-600">{item.local}</span></span>
                                <span className="text-sm text-gray-500">{item.desc}</span>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}