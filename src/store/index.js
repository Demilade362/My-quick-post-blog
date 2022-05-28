import { createStore } from "vuex"
import { auth } from "../firebase/config"

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, 
    onAuthStateChanged
} from "firebase/auth"

const store = createStore({
    state: {
        user: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log("User State Changed:", state.user)
        },

        setAuthIsReady(state, payload) {
            state.authIsReady = payload
        }
    },
    actions: {
        async signIn(context, { email, password }) {
            console.log("Sign In Auth")
            //async

            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                context.commit('setUser', res.user)
            } else {
                throw new Error("Could Not complete Sign In")
            }
        },

        async login(context, { email, password }) {
            console.log("Login Auth")

            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                context.commit("setUser", res.user)
            } else {
                throw new Error("Could Not complete Login")
            }
        },

        async logOut(context) {
            console.log("LogOut Action")

            await signOut(auth)
            context.commit("setUser", null)
        }
    }
})
const unSub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    unSub()
})

export default store