import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import { login, useLazyAuthQuery, useLazyLoginQuery } from '../store/features/userApi';
import { data } from './../components/ui/welcome/data';

export const useAuth = () => {
    const [cookies, setCookie] = useCookies(['access-token']);
    const [isAuth, setAuth] = useState(false)
    const [trigger, { data: loginResponse }] = useLazyLoginQuery()
    const [auth, { data: user, isError, }] = useLazyAuthQuery()
    const login = async (data: login) => {
        trigger(data)
    }
    useEffect(() => {
        console.log(cookies['access-token'])
        if (cookies['access-token']) {
            auth(cookies['access-token'])
            setAuth(true)
        }
    }, [cookies, auth])
    useEffect(() => {
        const date = new Date()
        date.setMonth(date.getMonth() + 1)
        if (loginResponse?.token && !isError) {
            setCookie('access-token', loginResponse.token, {
                expires: date
            })
            setAuth(true)
        }
    }, [loginResponse, setCookie])
    const logout = () => {
        setAuth(false)
    }

    return { isAuth, login, logout }
} 