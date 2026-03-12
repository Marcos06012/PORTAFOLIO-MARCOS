"use client";

export default function AuroraBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

            {/* Aurora blobs */}
            <div className="absolute w-[900px] h-[900px] bg-purple-600 rounded-full blur-[250px] opacity-40 animate-aurora top-[-200px] left-[-200px]" />

            <div className="absolute w-[900px] h-[900px] bg-blue-600 rounded-full blur-[250px] opacity-40 animate-aurora2 bottom-[-300px] right-[-200px]" />

            <div className="absolute w-[900px] h-[900px] bg-pink-500 rounded-full blur-[250px] opacity-30 animate-aurora3 top-[40%] left-[30%]" />

            {/* Grain effect */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        </div>
    );
}