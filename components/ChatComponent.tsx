"use client"
import { useChat, Message } from "ai/react"
import MessageContent from "./MessageContent";


export default function ChatComponent() {
    // Vercel AI SDK (ai package) useChat()
    // useChat -> handles messages for us, user input, handling user submits, etc.
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    console.log(messages);
    console.log(input);

    return (
        <div>
            {messages.map((message : Message) => {
                return (
                    <div key={message.id}>
                        {/*  Actor */}
                        {
                            message.role === "assistant"
                            ?
                            <h3 className="text-lg font-semibold mt-2">
                                GPT-4
                            </h3>
                            :
                            <h3 className="text-lg font-semibold mt-2">
                                User
                            </h3>
                        }
                        {
                            <MessageContent content={message.content} />
                        }
                    </div>
                )
            })}

            <form className="mt-12" onSubmit={handleSubmit}>
                <p>User Message</p>
                <textarea
                    className="mt-2 w-full bg-slate-600 p-2"
                    placeholder={"Send message"}
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="rounded-md bg-blue-600 p-2 mt-2">
                    Send message
                </button>
            </form>
        </div>
    )
}