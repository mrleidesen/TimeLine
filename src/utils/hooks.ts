import {
    useEffect,
    useState
} from 'react'
import dayjs from 'dayjs'

export const useDatetime = () => {
    const [dateTime, setDateTime] = useState(dayjs().format("YYYY/MM/DD HH:mm:ss"))
    let timer: number | null = null

    useEffect(() => {
        !timer && setTimer()

        return () => {
            disposeTimer()
        }
    }, [])

    const setTimer = () => {
        disposeTimer()
        timer = setInterval(() => {
            setDateTime(dayjs().format('YYYY/MM/DD HH:mm:ss'))
        }, 1000)
    }
    const disposeTimer = () => {
        if (timer) {
            clearInterval(timer)
            timer = null
        }
    }

    return dateTime
}