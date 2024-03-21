import { useReducer } from 'react'
import TContact from '@/types/contact'

type State = {
    loading: boolean
    contacts: TContact[]
    error: string | undefined
}

type OnLoad = {
    action: 'load'
}

type OnReload = {
    action: 'reload'
}

type OnSuccess = {
    action: 'success'
    contacts: TContact[]
}

type OnError = {
    action: 'error'
    message: string
}

type Action = OnLoad | OnReload | OnSuccess | OnError

function reducer(state: State, action: Action): State {
    switch (action.action) {
        case 'load':
            return {
                loading: true,
                contacts: [],
                error: undefined,
            }
        case 'reload':
            return {
                ...state,
                loading: true,
                error: undefined,
            }
        case 'success':
            return {
                loading: false,
                contacts: action.contacts,
                error: undefined,
            }
        case 'error':
            return {
                loading: false,
                contacts: [],
                error: action.message,
            }
    }
}

export default function useAsyncContacts() {
    const initialState: State = {
        loading: false,
        contacts: [],
        error: undefined,
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    function load() {
        dispatch({ action: 'load' })
        // async request to get contacts
        // success / error based on response
    }
    function reload() {
        dispatch({ action: 'reload' })
        // async request to get contacts
        // success / error based on response
    }
    return { state, load, reload }
}
