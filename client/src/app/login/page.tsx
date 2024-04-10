import { Metadata } from 'next';
import LogInForm from "./form"

export const metadata: Metadata = {
    title: "Askme | Sign in",
    description: "",
};

function LogIn() {
    return <LogInForm/>;
}

export default LogIn;