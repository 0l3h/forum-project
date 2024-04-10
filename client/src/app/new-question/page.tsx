"use client"
import { v4 as uuidv4 } from 'uuid';
// import { redirect } from "next/navigation";
import { useSession } from 'next-auth/react';
import Navbar from '../../components/Navbar';
import { IoIosInformationCircleOutline as InfoIcon } from "react-icons/io";
import Footer from '../../components/Footer';
import { createQuestion } from "../../api";

async function NewQuestion() {
    const { data: session } = useSession();

    console.log("session: ", session);

    async function submit (data: FormData) {
        const question = {...Object.fromEntries(data.entries())}
        console.log("question object: ", question);
        try {
            createQuestion({ 
                id: uuidv4(), 
                authorId: session?.id,
                ...question 
            });

            // redirect("/questions");
        } catch (error) {
            console.error(error);
        }
    }

    return <>
        <Navbar/>

        <main className="min-h-screen bg-gray-100 justify-items-center">
            <section className="flex gap-16 pt-10 w-4/5 mx-auto">
                <section className="w-1/4 h-fit flex flex-col gap-3 border rounded p-5 mb-5 bg-white">
                    <InfoIcon size={26}/>
                    <b className="text-lg">General rules to follow</b>
                    <p>Try to be precise as you can</p>
                    <p>Do your research</p>
                    <p>Provide others with errors</p>
                    <p>Explain what you tried to do</p>
                    <p>Write as short as possible</p>
                    <p>Keep your post comprehensible</p>
                </section>

                <form className="p-10 w-3/4 gap-5 flex flex-col h-fit border bg-white" action={submit}>
                    <h1 className="text-3xl font-bold">Ask a public question</h1>

                    <label>
                        <span className="font-bold text-lg">Title</span>
                        <p>Brief summary of a problem</p>
                        <input type="text" className="border rounded p-3 w-full mt-3" placeholder="e.g. Got an error" name="title"/>                
                    </label>

                    <label>
                        <span className="font-bold text-lg">Tags</span>
                        <p>What your question is about</p>
                        <input type="text" className="border rounded p-3 w-full mt-3" required/>
                    </label>

                    <label>
                        <span className="font-bold text-lg">Description</span>
                        <p>Explain what went wrong</p>
                        <textarea className="w-full border rounded p-3 mt-3 h-32" name="questionBody" placeholder="I have tried these fixes but it doesn't work"/>
                    </label>

                    <button type="submit" className="bg-blue-500 rounded w-fit self-end text-white py-2 px-6">
                        Publish
                    </button>
                </form>
            </section>
        </main>

        <Footer/>
    </>
}

export default NewQuestion;