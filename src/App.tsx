import React from 'react'

import Header from './components/Header'

import { filterTimeline } from '@/utils'
import { useDatetime } from '@/utils/hooks'

export default function App() {
    const nowTime = useDatetime()

    return (
        <div className="pt-14 w-full">
            <Header />
            <div className="w-full overflow-auto box-border py-3 bg-gray-100">
                <main className="container mx-auto flex flex-col items-center">
                    <div className="flex flex-col md:items-center w-full box-border p-2">
                        {filterTimeline(nowTime).map((item, i) => {
                            if (!item.isExpire) {
                                return (
                                    <a
                                        href={item.live}
                                        target="_blank"
                                        className={`sm:w-full md:w-4/5 lg:w-3/5 rounded-md box-border p-3 select-none bg-white flex flex-col font-mono
                                        ${item.isToday ? 'shadow-lg mb-5' : 'shadow mb-3'} ${item.isExpire ? 'text-gray-500' : ''}`}
                                        key={i}
                                    >
                                        <div className="flex">
                                            <h2 className="flex-1 text-xl font-semibold mb-2">{item.name}</h2>
                                            { item.isSoon ? (<span className="text-red-500 text-xs">即将开始</span>) : null }
                                            { item.isExpire ? (<span className="text-gray-500 text-xs">已经结束</span>) : null }
                                            { item.isGoing ? (<span className="text-green-500 text-xs">正在进行</span>) : null }
                                        </div>
                                        
                                        <span className="text-sm">北京时间：<span className="text-yellow-600">{item.local}</span></span>
                                        <span className="text-sm text-gray-500">{item.desc}</span>
                                    </a>
                                )
                            }
                        })}
                    </div>
                </main>
            </div>
        </div>
    )
}