import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";

function App() {
    const transcriber = useTranscriber();

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='container flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl text-center'>
                    Giọng nói &#10137; Văn bản
                </h1>
                <h2 className='mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl'>
                    Chuyển giọng nói thành văn bản, hỗ trợ đa ngôn ngữ.
                </h2>
                <AudioManager transcriber={transcriber} />
                <Transcript transcribedData={transcriber.output} />
            </div>

            <div className='absolute bottom-4'>
                Liên hệ{" "}
                <a
                    className='underline'
                    href='https://zalo.me/0936770119'
                >
                    🤗 0936770119
                </a>
            </div>
        </div>
    );
}

export default App;
