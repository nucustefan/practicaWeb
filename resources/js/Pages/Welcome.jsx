import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-blue-400 text-black/50 ">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    //src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl ">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3 bg-white rounded-lg">
                            <div className="flex lg:justify-center lg:col-start-2">
                                
                            </div>
                            <nav className="mx-3 flex  justify-end">
                                {auth.user ? (
                                    <>
                                    <Link
                                        //href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-blue-900 bg-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        //href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-blue-900 bg-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                    >
                                        Contact
                                    </Link>

                                    
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-blue-900 bg-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                    >
                                        Dashboard
                                    </Link>


                                    </>
                                ) : (
                                    <>
                                    <Link
                                        //href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-blue-900 bg-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        //href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-blue-900 bg-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                    >
                                        Contact
                                    </Link>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-blue-900 bg-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-blue-900 bg-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <a
                                    href="https://laravel.com/docs"
                                    id="docs-card"
                                    className="flex flex-col items-start overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 "
                                >
                                   {/* <div
                                        id="screenshot-container"
                                        className="relative flex w-full flex-1 items-stretch"
                                    >
                                        
                                            {/*src="https://laravel.com/assets/img/welcome/docs-light.svg"
                                            alt="Laravel documentation screenshot"
                                            className="aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"
                                            onError={handleImageError}
                                            
                                        
                                       
                                        <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] "></div>
                                    </div>
                                    */}

                                    <div className="relative flex items-center gap-6 lg:items">
                                        <div id="docs-card-content" className="flex items-start gap-6 lg:flex-col">
                                            

                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-xl font-bold text-blue-700 ">
                                                    List of Weekly Deals
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed text-blue-500">
                                                    Below you can find this week's best offers (still need to add images)
                                                </p>
                                            </div>
                                        </div>

                                        <svg
                                            className="size-6 shrink-0 "
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </div>
                                </a>

                                <a
                                    href="https://laracasts.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 "
                                >
                                    

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-blue-700">Products</h2>

                                        <p className="mt-4 text-sm/relaxed text-blue-600">
                                            Browse the product catalog here.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href="https://laravel-news.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 "
                                >
                                    

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-blue-700">
                                            Placeholder
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed text-blue-600">
                                            work in progress
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 "
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>

                                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10">
                        

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-blue-700">
                                            Also Placeholder
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed text-blue-600">
                                            Also work in progress{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black">
                            This site thankfully works with the help of Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
