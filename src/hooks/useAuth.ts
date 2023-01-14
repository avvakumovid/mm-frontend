import { useCookies } from 'react-cookie';
import { useEffect, useContext } from 'react';
import { ISingUp, useLazyAuthQuery, useLazyLoginQuery, useLazySingupQuery } from '../store/features/userApi';
import { ILogin } from './../store/features/userApi';
import { AuthContext } from './../context/AuthContext';

export const useAuth = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['access-token']);
    const { token, user, logInOut } = useContext(AuthContext)
    const [triggerLogin, { data: loginResponse, isError },] = useLazyLoginQuery()
    const [triggerSingUp, { data: singupResponse, isError: isSingUpError },] = useLazySingupQuery()
    const [auth, { data: authResponse }] = useLazyAuthQuery()
    const login = async (data: ILogin) => {
        triggerLogin(data)
    }
    const singup = async (data: ISingUp) => {
        triggerSingUp(data)
    }



    useEffect(() => {
        if (cookies['access-token']) {
            auth(cookies['access-token'])
        }

    }, [cookies, auth, authResponse])
    useEffect(() => {
        if (authResponse && cookies['access-token']) {
            logInOut(cookies['access-token'], authResponse)
        }
    }, [authResponse, cookies, logInOut])
    useEffect(() => {
        const date = new Date()
        date.setMonth(date.getMonth() + 1)
        if (loginResponse?.token && !isError) {
            setCookie('access-token', loginResponse.token, {
                expires: date
            })
            logInOut(loginResponse.token, loginResponse.user)
        }
        if (singupResponse?.token && !isSingUpError) {
            setCookie('access-token', singupResponse.token, {
                expires: date
            })
            logInOut(singupResponse.token, singupResponse.user)
        }
    }, [loginResponse, singupResponse, setCookie, isError, isSingUpError, logInOut])

    const logout = () => {
        logInOut('', null)
        removeCookie('access-token')
    }

    return { login, logout, token, user, isError, singup, isSingUpError }
} 