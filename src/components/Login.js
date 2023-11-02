import LoginForm from './loginForm.js'
import { auth } from './utils.js'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
export default function Login(){
    const handleGoogleLogin = async() => {
        const provider = new GoogleAuthProvider()
        const response = await signInWithPopup(auth, provider)
        console.log(response?.user)
    }
return (
    <section>
    <h2>Login</h2>
    <LoginForm/>
    <button>Sign In With Google</button>
    </section>


)

}