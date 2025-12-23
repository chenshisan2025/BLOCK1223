<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BLOCKWORLD - Web3 Arcade</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Icons -->
    <script src="https://unpkg.com/@phosphor-icons/web"></script>

    <!-- Configuration -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Poppins', 'Noto Sans SC', 'sans-serif'],
                    },
                    colors: {
                        surface0: '#FFF7FD',
                        surface1: '#FFFFFF',
                        ink: '#241A3D',
                        subtext: '#6A5E86',
                        success: '#2EE59D',
                        warning: '#FF9F5A',
                        error: '#FF4D6D',
                    },
                    borderRadius: {
                        'pill': '999px',
                        'card': '24px',
                        'card-sm': '16px',
                    },
                    animation: {
                        'bounce-slow': 'bounce 3s infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
                        'pop': 'pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                        'marquee': 'marquee 25s linear infinite',
                        'slide-up': 'slideUp 0.3s ease-out forwards',
                        'fade-in': 'fadeIn 0.3s ease-out forwards',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        shake: {
                            '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                            '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                            '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                            '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
                        },
                        pop: {
                            '0%': { transform: 'scale(0.8)', opacity: '0' },
                            '100%': { transform: 'scale(1)', opacity: '1' },
                        },
                        marquee: {
                            '0%': { transform: 'translateX(0)' },
                            '100%': { transform: 'translateX(-50%)' },
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(20px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' },
                        },
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        }
                    }
                }
            }
        }
    </script>

    <style>
        :root {
            --bg-0: #FFF7FD;
            --bg-1: #FFFFFF;
            --ink:  #241A3D;
            --sub:  #6A5E86;

            --g-cotton: linear-gradient(135deg, #7B61FF 0%, #FF4FD8 100%);
            --g-aqua:   linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%);
            --g-lemon:  linear-gradient(135deg, #FFD166 0%, #FF4FD8 100%);
            --g-party:  linear-gradient(90deg, #7B61FF, #FF4FD8, #00D4FF, #FFD166);

            --sh-card: 0 8px 24px rgba(123, 97, 255, 0.12);
            --sh-float: 0 14px 40px rgba(255, 79, 216, 0.14);
        }

        body {
            background-color: var(--bg-0);
            color: var(--ink);
            background-image: 
                radial-gradient(circle at 50% 0%, rgba(255, 79, 216, 0.15) 0%, rgba(255, 247, 253, 0) 60%),
                radial-gradient(circle at 10% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 20%),
                radial-gradient(circle at 90% 40%, rgba(255, 209, 102, 0.05) 0%, transparent 20%);
            background-repeat: no-repeat;
            min-height: 100vh;
        }

        /* Utils */
        .btn-candy {
            background: var(--g-cotton);
            color: white;
            border-radius: 999px;
            padding: 12px 32px;
            font-weight: 600;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(123, 97, 255, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.4);
            border: 2px solid rgba(255, 255, 255, 0.6);
            display: inline-flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer;
        }
        .btn-candy:hover { transform: translateY(-2px) scale(1.02); filter: brightness(1.1); }
        .btn-candy:active { transform: translateY(1px) scale(0.96); }

        .btn-ghost {
            background: rgba(255,255,255,0.6); color: var(--sub);
            border-radius: 999px; padding: 12px 32px; font-weight: 600;
            border: 1px solid rgba(106, 94, 134, 0.1); transition: all 0.2s; cursor: pointer;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.9); color: var(--ink); transform: translateY(-1px); }

        .card-juicy {
            background: var(--bg-1); border-radius: 24px; box-shadow: var(--sh-card);
            border: 1px solid rgba(255, 255, 255, 0.8); transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative; overflow: hidden;
        }
        .card-juicy::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
        }
        .card-juicy:hover { transform: translateY(-6px); box-shadow: var(--sh-float); }

        .text-gradient { background: var(--g-cotton); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        .hidden-page { display: none; }
        .active-nav { color: #7B61FF; background: #F3F0FF; }

        .arch-bg {
            position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
            width: 120%; height: 600px;
            border-radius: 50% 50% 0 0 / 100% 100% 0 0;
            background: radial-gradient(circle at 50% 0%, rgba(123, 97, 255, 0.05) 0%, rgba(255, 247, 253, 0) 70%);
            border-top: 2px solid rgba(255, 255, 255, 0.5); z-index: -1; pointer-events: none;
        }

        /* FAQ Accordion */
        details > summary { list-style: none; cursor: pointer; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] summary ~ * { animation: slide-up 0.2s ease-in-out; }
        .faq-icon { transition: transform 0.2s; }
        details[open] .faq-icon { transform: rotate(180deg); }

        /* Drops Marquee */
        .marquee-container:hover .animate-marquee { animation-play-state: paused; }
    </style>
</head>
<body class="antialiased overflow-x-hidden pb-20">

    <div class="arch-bg"></div>

    <!-- Navigation -->
    <nav class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <!-- Logo -->
        <div class="flex items-center gap-2 group cursor-pointer" onclick="switchPage('home')">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <i class="ph-fill ph-cube text-xl"></i>
            </div>
            <span class="font-bold text-xl tracking-tight text-ink">BLOCK<span class="text-purple-500">WORLD</span></span>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex gap-1 font-medium text-subtext bg-white/50 backdrop-blur-sm p-1 rounded-full border border-white/60">
            <button onclick="switchPage('home')" id="nav-home" class="px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all active-nav" data-i18n="nav.play">Play</button>
            <button onclick="switchPage('rewards')" id="nav-rewards" class="px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all" data-i18n="nav.rewards">Rewards</button>
            <button onclick="switchPage('events')" id="nav-events" class="px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all" data-i18n="nav.events">Events</button>
            <button onclick="switchPage('leaderboard')" id="nav-leaderboard" class="px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all" data-i18n="nav.leaderboard">Leaderboard</button>
        </div>

        <!-- Mobile & Actions -->
        <div class="flex items-center gap-3">
            <div class="hidden lg:flex gap-3 text-sm text-subtext font-medium mr-2">
                <a href="#safety" class="hover:text-purple-600" data-i18n="nav.safety">Safety</a>
                <a href="#faq" class="hover:text-purple-600" data-i18n="nav.help">Help</a>
            </div>
            <button onclick="toggleLang()" class="w-10 h-10 rounded-full bg-white border border-purple-100 text-subtext hover:text-purple-600 flex items-center justify-center transition-colors font-bold text-xs">
                <span id="lang-label">EN</span>
            </button>
            <button onclick="toggleLoginModal()" class="hidden md:block px-5 py-2 rounded-full bg-white border border-purple-100 text-purple-600 font-semibold shadow-sm hover:bg-purple-50 hover:scale-105 active:scale-95 transition-all text-sm" data-i18n="nav.login">Log In</button>
            
            <!-- Mobile Menu Trigger -->
            <button onclick="toggleMobileMenu()" class="md:hidden text-2xl text-ink p-2">
                <i class="ph-bold ph-list"></i>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-white/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8 hidden animate-fade-in">
        <button onclick="toggleMobileMenu()" class="absolute top-6 right-6 text-3xl text-subtext"><i class="ph-bold ph-x"></i></button>
        <div class="flex flex-col gap-4 text-center text-xl font-bold text-ink">
            <a onclick="switchPage('home'); toggleMobileMenu()" data-i18n="nav.play">Play</a>
            <a onclick="switchPage('rewards'); toggleMobileMenu()" data-i18n="nav.rewards">Rewards</a>
            <a onclick="switchPage('events'); toggleMobileMenu()" data-i18n="nav.events">Events</a>
            <a onclick="switchPage('leaderboard'); toggleMobileMenu()" data-i18n="nav.leaderboard">Leaderboard</a>
            <a href="#safety" onclick="toggleMobileMenu()" class="text-subtext font-medium text-lg mt-4" data-i18n="nav.safety">Safety</a>
            <a href="#faq" onclick="toggleMobileMenu()" class="text-subtext font-medium text-lg" data-i18n="nav.help">Help</a>
        </div>
        <button onclick="toggleLoginModal(); toggleMobileMenu()" class="btn-candy w-48" data-i18n="nav.login">Log In</button>
    </div>

    <!-- Login Modal -->
    <div id="login-modal" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 animate-fade-in" onclick="if(event.target === this) toggleLoginModal()">
        <div class="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative text-center">
            <button onclick="toggleLoginModal()" class="absolute top-4 right-4 text-gray-400 hover:text-ink"><i class="ph-bold ph-x text-xl"></i></button>
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-purple-600"><i class="ph-fill ph-sign-in"></i></div>
            <h3 class="text-2xl font-bold mb-2" data-i18n="login.title">One-tap Entry</h3>
            <p class="text-sm text-subtext mb-8" data-i18n="login.subtitle">Sign in with Email or Google and jump into your first round.</p>
            <div class="space-y-3">
                <button class="w-full py-3 rounded-full border border-gray-200 font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
                    <i class="ph-fill ph-google-logo text-lg text-red-500"></i> Google
                </button>
                <button class="w-full py-3 rounded-full border border-gray-200 font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
                    <i class="ph-fill ph-envelope-simple text-lg text-gray-500"></i> Email
                </button>
            </div>
            <p class="text-xs text-gray-400 mt-6" data-i18n="login.note">We’ll automatically create a secure game account for you.</p>
        </div>
    </div>

    <!-- ========================================= -->
    <!-- VIEW: HOME (首页) -->
    <!-- ========================================= -->
    <main id="view-home" class="fade-in">
        
        <!-- Hero Section -->
        <header class="relative pt-8 pb-12 px-6 max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1 text-center md:text-left">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm mb-6 animate-float">
                    <span class="w-2 h-2 rounded-full bg-green-400"></span>
                    <span class="text-xs font-bold text-subtext uppercase tracking-wide" data-i18n="hero.pill">WELCOME TO THE ARCADE</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                    <span data-i18n="hero.title1">Play 60s.</span><br>
                    <span class="text-gradient relative inline-block">
                        <span data-i18n="hero.title2">Open a Box.</span>
                        <i class="ph-fill ph-star-four absolute -top-4 -right-6 text-yellow-400 text-3xl animate-bounce-slow"></i>
                    </span>
                </h1>
                <p class="text-lg text-subtext mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed" data-i18n="hero.subtitle">
                    Your time finally pays back. As easy as a match game. Earn BWT + surprise drops.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
                    <button class="btn-candy group w-full sm:w-auto" onclick="toggleLoginModal()">
                        <i class="ph-fill ph-play-circle text-2xl"></i>
                        <span data-i18n="hero.ctaPlay">Play Now</span>
                    </button>
                    <button class="btn-ghost w-full sm:w-auto flex items-center justify-center gap-2">
                        <i class="ph ph-video-camera"></i>
                        <span data-i18n="hero.ctaWatch">Watch Gameplay</span>
                    </button>
                </div>
                <div class="flex flex-wrap justify-center md:justify-start gap-3 opacity-90">
                    <span class="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100 flex items-center gap-1"><i class="ph-fill ph-check-circle"></i> <span data-i18n="hero.badges.withdrawable">Withdrawable</span></span>
                    <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 flex items-center gap-1"><i class="ph-fill ph-users"></i> <span data-i18n="hero.badges.humanOnly">Human-only</span></span>
                    <span class="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100 flex items-center gap-1"><i class="ph-fill ph-lightning"></i> <span data-i18n="hero.badges.freeRounds">First 10 rounds free</span></span>
                </div>
            </div>
            
            <!-- Hero Interactive Box -->
            <div class="w-full md:w-[400px]">
                <div class="card-juicy p-8 relative transform transition-transform hover:scale-105 duration-300 group cursor-pointer" onclick="document.getElementById('aha-demo').scrollIntoView({behavior: 'smooth'})">
                    <div class="text-center">
                        <div class="w-32 h-32 mx-auto mb-6 relative">
                             <div class="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-xl flex items-center justify-center text-5xl animate-float border-4 border-white/30">🎁</div>
                             <div class="absolute top-0 right-0 text-2xl animate-bounce-slow" style="animation-delay: 0.5s">✨</div>
                        </div>
                        <h3 class="text-2xl font-bold mb-2" data-i18n="hero.box.title">Surprise Box</h3>
                        <p class="text-sm text-subtext mb-6 font-medium" data-i18n="hero.box.sub">USDT / BWT / NFTs</p>
                        <div class="w-full py-3 rounded-full bg-yellow-400 text-purple-900 font-bold shadow-md hover:bg-yellow-300 transition-colors uppercase tracking-wide text-sm flex items-center justify-center gap-2">
                            <i class="ph-fill ph-hand-tap"></i> <span data-i18n="hero.box.cta">Tap to Play</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- 1) Today's Drops Section -->
        <section class="max-w-6xl mx-auto px-6 mb-20 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-3xl -z-10 opacity-60 blur-xl"></div>
            <div class="card-juicy p-1 flex flex-col md:flex-row items-center gap-6 overflow-hidden bg-white/50 backdrop-blur-sm border-white/40">
                <!-- Header -->
                <div class="flex-shrink-0 px-6 py-4 md:border-r border-purple-100 min-w-[200px] text-center md:text-left">
                    <div class="flex items-center justify-center md:justify-start gap-2 mb-1">
                        <i class="ph-fill ph-sparkle text-yellow-500 text-lg"></i>
                        <h3 class="font-bold text-ink" data-i18n="drops.title">Today's Drops</h3>
                    </div>
                    <p class="text-xs text-subtext" data-i18n="drops.subtitle">Play to find special boxes.</p>
                </div>
                
                <!-- Marquee Container -->
                <div class="flex-1 w-full overflow-hidden marquee-container relative mask-gradient">
                    <div class="flex gap-4 animate-marquee w-max py-4 hover:[animation-play-state:paused]">
                        <div class="flex gap-4 items-center" id="drops-list"></div>
                        <div class="flex gap-4 items-center" id="drops-list-clone"></div>
                    </div>
                </div>

                <!-- CTA -->
                <div class="hidden md:block pr-6 pl-2">
                    <button onclick="switchPage('rewards')" class="text-sm font-bold text-purple-600 hover:text-purple-700 whitespace-nowrap" data-i18n="drops.cta">See Rewards →</button>
                </div>
            </div>
        </section>

        <!-- 2) Aha Demo Section -->
        <section id="aha-demo" class="max-w-6xl mx-auto px-6 mb-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <!-- Left: Text -->
                <div>
                    <h2 class="text-3xl md:text-4xl font-extrabold mb-4" data-i18n="aha.title">Open a box. Get a surprise.</h2>
                    <p class="text-lg text-subtext mb-8 leading-relaxed" data-i18n="aha.subtitle">Boxes can appear while you play. Rewards come from events and partner drops.</p>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-lg"><i class="ph-fill ph-check"></i></div>
                            <span class="font-medium text-ink" data-i18n="aha.points.0">No complicated setup</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-lg"><i class="ph-fill ph-users"></i></div>
                            <span class="font-medium text-ink" data-i18n="aha.points.1">Human-only rewards</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-green-100 text-green-500 flex items-center justify-center text-lg"><i class="ph-fill ph-wallet"></i></div>
                            <span class="font-medium text-ink" data-i18n="aha.points.2">Withdraw when you're ready</span>
                        </li>
                    </ul>
                    <div class="flex gap-4">
                        <button class="btn-candy" onclick="toggleLoginModal()"><span data-i18n="aha.ctaPlay">Play Now</span></button>
                        <button class="btn-ghost"><span data-i18n="aha.ctaWatch">Watch Gameplay</span></button>
                    </div>
                    <p class="text-xs text-subtext mt-4 flex items-center gap-1"><i class="ph-fill ph-info"></i> <span data-i18n="aha.demoNote">Demo for illustration.</span></p>
                </div>

                <!-- Right: Interactive Demo -->
                <div class="relative h-[400px] flex items-center justify-center">
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-[40px] -z-10 rotate-3"></div>
                    <div class="card-juicy w-full max-w-sm p-8 text-center cursor-pointer transition-all duration-300" id="demo-card" onclick="triggerAhaDemo()">
                        <div id="demo-state-idle">
                            <div class="absolute top-4 right-4 bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Demo</div>
                            <div class="w-40 h-40 mx-auto mb-6 relative">
                                <div class="w-full h-full bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl shadow-lg flex items-center justify-center text-6xl text-white border-4 border-white/40 animate-float" id="demo-box">🎁</div>
                            </div>
                            <h3 class="text-2xl font-bold mb-2" data-i18n="hero.box.title">Surprise Box</h3>
                            <div class="mt-6 w-full py-3 rounded-full bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition-colors" data-i18n="aha.demoCta">Tap to Play</div>
                        </div>
                        <div id="demo-state-revealed" class="hidden">
                            <div class="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4 text-5xl animate-pop">💎</div>
                            <p class="text-xs font-bold text-subtext uppercase tracking-widest mb-1" data-i18n="aha.rewardTitle">You Got</p>
                            <h3 class="text-3xl font-extrabold text-ink mb-6">5 USDT</h3>
                            <button class="w-full py-3 rounded-full bg-gray-100 text-ink font-bold hover:bg-gray-200 transition-colors mb-2" onclick="event.stopPropagation(); resetAhaDemo()">
                                <i class="ph-bold ph-arrow-counter-clockwise"></i> Play Again
                            </button>
                        </div>
                    </div>
                    <div id="demo-toasts" class="absolute top-0 right-0 left-0 bottom-0 pointer-events-none overflow-hidden"></div>
                </div>
            </div>
        </section>

        <!-- 3) Steps Section -->
        <section class="max-w-6xl mx-auto px-6 mb-24">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-3" data-i18n="steps.title">Start in 3 Steps</h2>
                <p class="text-subtext" data-i18n="steps.subtitle">No crypto knowledge needed. Just fun.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                <div class="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 -z-10 rounded-full"></div>
                <div class="card-juicy p-8 text-center group bg-white">
                    <div class="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-500 rounded-3xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform shadow-sm border border-blue-200/50 rotate-[-3deg]"><i class="ph-fill ph-sign-in"></i></div>
                    <h3 class="text-xl font-bold mb-3" data-i18n="steps.s1Title">One-tap Login</h3>
                    <p class="text-sm text-subtext" data-i18n="steps.s1Body">Use Google or Email.</p>
                </div>
                <div class="card-juicy p-8 text-center group bg-white md:-top-4 relative">
                    <div class="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 text-purple-500 rounded-3xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform shadow-sm border border-purple-200/50 rotate-[2deg]"><i class="ph-fill ph-game-controller"></i></div>
                    <h3 class="text-xl font-bold mb-3" data-i18n="steps.s2Title">Play 60 Seconds</h3>
                    <p class="text-sm text-subtext" data-i18n="steps.s2Body">Fast-paced match-3.</p>
                </div>
                <div class="card-juicy p-8 text-center group bg-white">
                    <div class="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-100 to-orange-100 text-orange-500 rounded-3xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform shadow-sm border border-orange-200/50 rotate-[-2deg]"><i class="ph-fill ph-gift"></i></div>
                    <h3 class="text-xl font-bold mb-3" data-i18n="steps.s3Title">Open Boxes</h3>
                    <p class="text-sm text-subtext" data-i18n="steps.s3Body">Open boxes to reveal rewards.</p>
                </div>
            </div>
        </section>

        <!-- 4) Safety Section -->
        <section id="safety" class="max-w-5xl mx-auto px-6 mb-24">
            <div class="bg-purple-50 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
                <div class="flex flex-col md:flex-row gap-12 items-center relative z-10">
                    <div class="flex-1">
                        <h2 class="text-3xl font-bold mb-4" data-i18n="safety.title">A park for real players.</h2>
                        <p class="text-subtext mb-8" data-i18n="safety.subtitle">High-value rewards use human checks to protect fair play.</p>
                        <button class="btn-ghost bg-white hover:bg-white/80" data-i18n="safety.cta">Learn About Safety</button>
                    </div>
                    <div class="grid gap-4 w-full md:w-1/2">
                        <div class="bg-white p-4 rounded-2xl flex items-start gap-4 shadow-sm hover:translate-y-[-2px] transition-transform">
                            <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-xl flex-shrink-0"><i class="ph-fill ph-users"></i></div>
                            <div>
                                <h4 class="font-bold text-sm mb-1" data-i18n="safety.items.0.title">Human-only rewards</h4>
                                <p class="text-xs text-subtext" data-i18n="safety.items.0.body">Bots and scripted patterns don’t get paid.</p>
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded-2xl flex items-start gap-4 shadow-sm hover:translate-y-[-2px] transition-transform">
                            <div class="w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center text-xl flex-shrink-0"><i class="ph-fill ph-shield-check"></i></div>
                            <div>
                                <h4 class="font-bold text-sm mb-1" data-i18n="safety.items.1.title">Fair by design</h4>
                                <p class="text-xs text-subtext" data-i18n="safety.items.1.body">High-value drops may require verification.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5) FAQ Section -->
        <section id="faq" class="max-w-3xl mx-auto px-6 mb-32">
            <div class="text-center mb-10">
                <h2 class="text-2xl font-bold mb-2" data-i18n="faq.title">Quick Questions</h2>
                <p class="text-subtext text-sm" data-i18n="faq.subtitle">Everything you need before your first round.</p>
            </div>
            <div class="space-y-4" id="faq-list"></div>
            <div class="text-center mt-8">
                <a href="#" class="text-sm font-bold text-purple-600 hover:text-purple-800" data-i18n="faq.cta">See all FAQs →</a>
            </div>
        </section>

    </main>

    <!-- ========================================= -->
    <!-- VIEW: REWARDS (奖励页) - UPDATED -->
    <!-- ========================================= -->
    <main id="view-rewards" class="hidden-page fade-in">
        <header class="pt-12 pb-16 px-6 text-center max-w-4xl mx-auto">
            <div class="flex justify-center gap-4 mb-8">
                <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-3xl animate-bounce-slow">🎁</div>
                <div class="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center text-3xl animate-bounce-slow" style="animation-delay: 0.2s">🍬</div>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold mb-4" data-i18n="rewards.title">Reward Boxes. <span class="text-purple-500">Open Anytime.</span></h1>
            <p class="text-subtext max-w-xl mx-auto mb-8" data-i18n="rewards.subtitle">Play and you’ll run into Sponsor Boxes and event drops. You may get BWT, stablecoins, or limited rewards.</p>
            <button class="btn-candy" onclick="switchPage('home')"><i class="ph-fill ph-play-circle text-xl"></i> <span data-i18n="rewards.cta">Play & Find Boxes</span></button>
        </header>

        <!-- R1: Reward Types -->
        <section class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            <div class="card-juicy p-8 text-center">
                <div class="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-4"><i class="ph-fill ph-coin"></i></div>
                <h3 class="text-lg font-bold mb-2">BWT (Points)</h3>
                <p class="text-sm text-subtext" data-i18n="rewards.types.bwt">Use it for tickets, higher-prize arenas, and event perks.</p>
            </div>
            <div class="card-juicy p-8 text-center">
                <div class="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl mb-4"><i class="ph-fill ph-currency-dollar"></i></div>
                <h3 class="text-lg font-bold mb-2">Stable Rewards</h3>
                <p class="text-sm text-subtext" data-i18n="rewards.types.stable">More straightforward rewards, withdrawable under event rules.</p>
            </div>
            <div class="card-juicy p-8 text-center">
                <div class="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-4"><i class="ph-fill ph-ticket"></i></div>
                <h3 class="text-lg font-bold mb-2">Event Drops</h3>
                <p class="text-sm text-subtext" data-i18n="rewards.types.event">From partner events and season pools—sometimes special boxes.</p>
            </div>
        </section>

        <!-- R2: Sponsor Box Explainer -->
        <section class="max-w-4xl mx-auto px-6 mb-24">
            <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col md:flex-row items-center gap-10">
                <div class="w-full md:w-1/3 flex justify-center">
                    <div class="w-40 h-56 bg-pink-400 rounded-t-full rounded-b-3xl relative p-4 flex flex-col items-center shadow-inner">
                        <div class="w-28 h-28 bg-white/30 rounded-full mb-4 flex items-center justify-center text-5xl">🔮</div>
                        <div class="w-24 h-8 bg-black/20 rounded-full mt-auto"></div>
                    </div>
                </div>
                <div class="flex-1">
                    <h2 class="text-2xl font-bold mb-6" data-i18n="rewards.sponsor.title">Sponsor Box: Surprise Gacha Drops</h2>
                    <div class="space-y-4">
                        <div class="flex gap-4">
                            <div class="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0"><i class="ph-fill ph-storefront"></i></div>
                            <p class="text-sm text-subtext" data-i18n="rewards.sponsor.p1">Partner events load prizes into the gacha machine.</p>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0"><i class="ph-fill ph-shuffle"></i></div>
                            <p class="text-sm text-subtext" data-i18n="rewards.sponsor.p2">You can run into it randomly during play.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- ========================================= -->
    <!-- VIEW: WITHDRAW (提现页) - UPDATED -->
    <!-- ========================================= -->
    <main id="view-withdraw" class="hidden-page fade-in">
        <header class="pt-12 pb-12 px-6 text-center max-w-3xl mx-auto">
            <div class="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"><i class="ph-fill ph-bag"></i></div>
            <h1 class="text-3xl md:text-4xl font-extrabold mb-4" data-i18n="withdraw.title">Take your rewards with you.</h1>
            <p class="text-subtext mb-8" data-i18n="withdraw.subtitle">We’ll guide you through a simple safety setup before withdrawing.</p>
        </header>

        <!-- W2: Safety Levels -->
        <section class="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div class="border border-gray-200 rounded-2xl p-6 bg-gray-50 opacity-70">
                <div class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Level 0</div>
                <h3 class="text-lg font-bold mb-2" data-i18n="withdraw.l0.title">Beginner Mode</h3>
                <p class="text-xs text-gray-500 mb-6" data-i18n="withdraw.l0.desc">Rewards stay in your game account.</p>
                <div class="px-3 py-1 bg-gray-200 text-gray-500 text-xs font-bold inline-block rounded">Current</div>
            </div>
            <div class="border-2 border-purple-500 rounded-2xl p-6 bg-white shadow-xl relative transform scale-105 z-10">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">RECOMMENDED</div>
                <div class="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2">Level 1</div>
                <h3 class="text-lg font-bold mb-2" data-i18n="withdraw.l1.title">Secure Mode</h3>
                <p class="text-xs text-gray-500 mb-6" data-i18n="withdraw.l1.desc">Add email/device recovery—safer even if you lose your phone.</p>
                <button class="w-full py-2 rounded-lg bg-purple-500 text-white text-sm font-bold hover:bg-purple-600 transition-colors" data-i18n="withdraw.l1.btn">Upgrade in 1 Tap</button>
            </div>
            <div class="border border-gray-200 rounded-2xl p-6 bg-white">
                <div class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Level 2</div>
                <h3 class="text-lg font-bold mb-2" data-i18n="withdraw.l2.title">Self-Control</h3>
                <p class="text-xs text-gray-500 mb-6" data-i18n="withdraw.l2.desc">Move rewards to your own external wallet.</p>
                <button class="w-full py-2 rounded-lg border border-purple-200 text-purple-600 text-sm font-bold hover:bg-purple-50 transition-colors" data-i18n="withdraw.l2.btn">I'm Ready</button>
            </div>
        </section>

        <!-- W4: Form -->
        <section class="max-w-lg mx-auto px-6 pb-24">
            <div class="card-juicy p-8">
                <h3 class="text-lg font-bold mb-6" data-i18n="withdraw.form.title">Withdraw to Address</h3>
                <div class="space-y-5">
                    <div>
                        <label class="block text-xs font-bold text-subtext mb-2 ml-1" data-i18n="withdraw.form.asset">CHOOSE ASSET</label>
                        <div class="relative">
                            <select class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-300 appearance-none font-medium text-ink">
                                <option>USDT (Polygon)</option>
                                <option>BWT (Points)</option>
                            </select>
                            <i class="ph-bold ph-caret-down absolute right-4 top-3.5 text-gray-400 pointer-events-none"></i>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2 ml-1">
                            <label class="text-xs font-bold text-subtext" data-i18n="withdraw.form.amount">AMOUNT</label>
                            <span class="text-xs font-bold text-purple-600">Available: 125.00</span>
                        </div>
                        <div class="relative">
                            <input type="text" value="100" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-300 focus:ring-4 focus:ring-purple-50 font-bold text-ink">
                            <button class="absolute right-3 top-2.5 text-xs font-bold bg-purple-100 text-purple-600 px-2 py-1 rounded">MAX</button>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-subtext mb-2 ml-1" data-i18n="withdraw.form.addr">RECEIVING ADDRESS</label>
                        <input type="text" placeholder="Paste address..." class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-300 focus:ring-4 focus:ring-purple-50 text-sm">
                    </div>
                    <button class="w-full btn-candy mt-2" data-i18n="withdraw.form.submit">Submit Withdraw</button>
                </div>
            </div>
            <p class="text-center text-xs text-gray-400 mt-6 max-w-xs mx-auto" data-i18n="withdraw.note">Estimated settlement: minutes to a few hours.</p>
        </section>
    </main>

    <!-- Placeholders -->
    <main id="view-events" class="hidden-page fade-in flex items-center justify-center min-h-[60vh]">
        <div class="text-center">
            <div class="text-6xl mb-4">🎟️</div>
            <h2 class="text-2xl font-bold text-ink">Events Coming Soon</h2>
            <p class="text-subtext mt-2">Special seasons and tournaments are on the way.</p>
            <button onclick="switchPage('home')" class="mt-6 btn-ghost">Back Home</button>
        </div>
    </main>
    <main id="view-leaderboard" class="hidden-page fade-in flex items-center justify-center min-h-[60vh]">
        <div class="text-center">
            <div class="text-6xl mb-4">🏆</div>
            <h2 class="text-2xl font-bold text-ink">Leaderboard Loading...</h2>
            <p class="text-subtext mt-2">Compete for the top spot and exclusive badges.</p>
            <button onclick="switchPage('home')" class="mt-6 btn-ghost">Back Home</button>
        </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-purple-100 bg-white/50 backdrop-blur-md mt-auto">
        <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="flex items-center gap-2 opacity-50">
                <i class="ph-fill ph-cube text-lg"></i>
                <span class="font-bold">BLOCKWORLD</span>
            </div>
            <div class="text-xs text-gray-400">
                © 2024 BlockWorld. Human-only Arcade.
            </div>
        </div>
    </footer>

    <!-- Logic -->
    <script>
        const faqItems = [
            { q: "faq.items.0.q", a: "faq.items.0.a" },
            { q: "faq.items.1.q", a: "faq.items.1.a" },
            { q: "faq.items.2.q", a: "faq.items.2.a" },
            { q: "faq.items.3.q", a: "faq.items.3.a" }
        ];

        const dropItems = [
            { icon: "💰", label: "500 USDT", sub: "Prize Pool" },
            { icon: "💎", label: "Rare Badge", sub: "Limited" },
            { icon: "🎁", label: "Mystery Box", sub: "Partner Drop" },
            { icon: "⚡️", label: "2x BWT", sub: "Event" },
            { icon: "🔥", label: "1 BNB", sub: "Jackpot" },
            { icon: "🎟️", label: "Season Pass", sub: "Ticket" }
        ];

        const translations = {
            en: {
                nav: { play: "Play", rewards: "Rewards", events: "Events", leaderboard: "Leaderboard", login: "Login", help: "Help", safety: "Safety" },
                login: { title: "One-tap Entry", subtitle: "Sign in with Email or Google and jump into your first round.", note: "We’ll automatically create a secure game account for you." },
                hero: { pill: "Welcome to the Arcade", title1: "Play 60s.", title2: "Open a Box.", subtitle: "Your time finally pays back. As easy as a match game. Earn BWT + surprise drops.", ctaPlay: "Play Now", ctaWatch: "Watch Gameplay", badges: { withdrawable: "Withdrawable", humanOnly: "Human-only", freeRounds: "First 10 rounds free" }, box: { title: "Surprise Box", sub: "USDT / BWT / NFTs", cta: "Tap to Play" } },
                drops: { title: "Today's Drops", subtitle: "Play and you may run into special boxes.", cta: "See Rewards" },
                aha: { title: "Open a box. Get a surprise.", subtitle: "Boxes can appear while you play. Rewards come from events and partner drops.", points: ["No complicated setup", "Human-only rewards", "Withdraw when you're ready"], demoNote: "Demo for illustration.", ctaPlay: "Play Now", ctaWatch: "Watch Gameplay", demoCta: "Tap to Play", rewardTitle: "You got" },
                steps: { title: "Start in 3 Steps", subtitle: "No crypto knowledge needed. Just fun.", s1Title: "One-tap Login", s1Body: "Use Google or Email. We create a secure game account.", s2Title: "Play 60 Seconds", s2Body: "Fast-paced match-3. Juicy effects.", s3Title: "Open Boxes", s3Body: "Open boxes to reveal rewards." },
                safety: { title: "A park for real players.", subtitle: "High-value rewards use human checks to protect fair play.", cta: "Learn About Safety", items: [{ title: "Human-only rewards", body: "Bots and scripted patterns don’t get paid." }, { title: "Fair by design", body: "High-value drops may require verification." }] },
                faq: { title: "Quick Questions", subtitle: "Everything you need before your first round.", cta: "See all FAQs", items: [{ q: "Can I really withdraw?", a: "Yes. Withdraw options depend on event rules." }, { q: "Do I need a wallet?", a: "No. Start like a normal game." }, { q: "Where do rewards come from?", a: "From events and partner drops." }, { q: "Why didn't I get a box?", a: "Boxes are not guaranteed every round." }] },
                rewards: { title: "Reward Boxes.", subtitle: "Play and you’ll run into Sponsor Boxes and event drops. You may get BWT, stablecoins, or limited rewards.", cta: "Play & Find Boxes", types: { bwt: "Use it for tickets, higher-prize arenas, and event perks.", stable: "More straightforward rewards, withdrawable under event rules.", event: "From partner events and season pools—sometimes special boxes." }, sponsor: { title: "Sponsor Box: Surprise Gacha Drops", p1: "Partner events load prizes into the gacha machine.", p2: "You can run into it randomly during play." } },
                withdraw: { title: "Take your rewards with you.", subtitle: "We’ll guide you through a simple safety setup before withdrawing.", l0: { title: "Beginner Mode", desc: "Rewards stay in your game account." }, l1: { title: "Secure Mode", desc: "Add email/device recovery—safer even if you lose your phone.", btn: "Upgrade in 1 Tap" }, l2: { title: "Self-Control", desc: "Move rewards to your own external wallet.", btn: "I'm Ready" }, form: { title: "Withdraw to Address", asset: "CHOOSE ASSET", amount: "AMOUNT", addr: "RECEIVING ADDRESS", submit: "Submit Withdraw" }, note: "Estimated settlement: minutes to a few hours." }
            },
            cn: {
                nav: { play: "开玩", rewards: "奖励盲盒", events: "活动", leaderboard: "排行榜", login: "登录", help: "帮助", safety: "安全" },
                login: { title: "一键入园", subtitle: "用邮箱或 Google 登录，马上开始第一局。", note: "我们会为你自动创建一个安全的游戏账户。" },
                hero: { pill: "欢迎来到游戏乐园", title1: "玩 60 秒。", title2: "开一个盒子。", subtitle: "你的时间终于开始回本。像三消一样轻松。赢取 BWT 与惊喜掉落奖励。", ctaPlay: "立即开玩", ctaWatch: "看玩法视频", badges: { withdrawable: "可提现", humanOnly: "真人奖励", freeRounds: "前 10 局免费" }, box: { title: "惊喜盒子", sub: "USDT / BWT / NFTs", cta: "点一下开玩" } },
                drops: { title: "今日掉落", subtitle: "玩游戏时，可能会随机遇到特别盒子。", cta: "查看奖励详情" },
                aha: { title: "打开盒子，来点惊喜。", subtitle: "玩的时候会随机遇到盒子。奖励来自活动与合作掉落。", points: ["无需复杂设置", "真人才有奖励", "准备好了再提现"], demoNote: "演示示例，奖励以活动规则为准。", ctaPlay: "立即开玩", ctaWatch: "看玩法视频", demoCta: "点一下开玩", rewardTitle: "你获得了" },
                steps: { title: "3 步开玩", subtitle: "不用懂币圈，只要开心。", s1Title: "一键登录", s1Body: "用 Google 或邮箱登录，自动创建安全账户。", s2Title: "玩 60 秒", s2Body: "快节奏三消，Q 弹特效。", s3Title: "打开盒子", s3Body: "打开盒子拿到奖励。" },
                safety: { title: "这是给真人玩家的游乐园。", subtitle: "高价值奖励会进行真人验证，保护公平体验。", cta: "了解安全与公平", items: [{ title: "真人才有奖励", body: "脚本与异常模式拿不到奖励。" }, { title: "公平是默认设置", body: "高价值掉落可能需要额外验证。" }] },
                faq: { title: "快速答疑", subtitle: "开玩前你最关心的问题。", cta: "查看全部 FAQ", items: [{ q: "真的能提现吗？", a: "可以。提现方式会受活动规则影响。" }, { q: "我需要懂钱包吗？", a: "不需要。你可以先当作普通游戏玩。" }, { q: "奖励从哪里来？", a: "来自活动、合作掉落与奖池。" }, { q: "为什么没遇到盒子？", a: "盒子不是每局必出。" }] },
                rewards: { title: "奖励盲盒。", subtitle: "玩游戏会遇到 Sponsor Box 和活动盒子。开盒可能拿到 BWT、稳定币或限时奖励。", cta: "开玩找盒子", types: { bwt: "用来买门票、进更高奖金的竞技场，也可用于活动权益。", stable: "更直观的奖励体验，支持按规则提现。", event: "来自合作活动与赛季奖池，可能包含特别盲盒。" }, sponsor: { title: "Sponsor Box：游乐园的惊喜扭蛋", p1: "合作活动会把奖品放进扭蛋机里。", p2: "你在游戏过程中随机遇到它。" } },
                withdraw: { title: "把你的奖励带走。", subtitle: "我们会用最简单的步骤，帮你完成提现前的安全设置。", l0: { title: "新手模式", desc: "奖励会保存在你的游戏账户里。" }, l1: { title: "更安全", desc: "绑定邮箱/设备恢复方式，丢手机也不怕。", btn: "一键升级" }, l2: { title: "完全自持", desc: "把奖励转到你自己的外部钱包（适合熟悉用户）。", btn: "我已准备好" }, form: { title: "提到地址（推荐）", asset: "选择奖励类型", amount: "金额", addr: "收款地址", submit: "提交提现" }, note: "预计到账时间：几分钟到数小时。" }
            }
        };

        // Render Logic
        function renderDrops() {
            const container = document.getElementById('drops-list');
            const cloneContainer = document.getElementById('drops-list-clone');
            const html = dropItems.map(item => `
                <div class="flex items-center gap-3 bg-white border border-purple-100 rounded-full pl-2 pr-4 py-1.5 shadow-sm min-w-[140px]">
                    <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-lg">${item.icon}</div>
                    <div>
                        <div class="text-xs font-bold text-ink">${item.label}</div>
                        <div class="text-[10px] text-purple-500 font-bold uppercase tracking-wider">${item.sub}</div>
                    </div>
                </div>
            `).join('');
            container.innerHTML = html; cloneContainer.innerHTML = html;
        }

        function renderFAQ() {
            const container = document.getElementById('faq-list');
            const lang = translations[currentLang];
            container.innerHTML = faqItems.map(item => `
                <details class="group bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary class="flex justify-between items-center p-4 md:p-5 font-bold text-ink hover:text-purple-600 transition-colors">
                        ${getNestedTranslation(lang, item.q)} <span class="faq-icon text-gray-400 group-hover:text-purple-500"><i class="ph-bold ph-caret-down"></i></span>
                    </summary>
                    <div class="px-5 pb-5 text-sm text-subtext leading-relaxed">${getNestedTranslation(lang, item.a)}</div>
                </details>
            `).join('');
        }

        // Interactivity
        let demoTimeout;
        function triggerAhaDemo() {
            const card = document.getElementById('demo-card');
            const idleState = document.getElementById('demo-state-idle');
            const revealedState = document.getElementById('demo-state-revealed');
            const box = document.getElementById('demo-box');

            box.classList.remove('animate-float'); box.classList.add('animate-shake');
            setTimeout(() => {
                idleState.classList.add('hidden'); revealedState.classList.remove('hidden');
                card.classList.add('scale-105', 'shadow-2xl');
                showToast("Just won 5 USDT!", "coin"); setTimeout(() => showToast("Got a Rare Badge", "badge"), 800);
            }, 600);
        }

        function resetAhaDemo() {
            const card = document.getElementById('demo-card');
            const idleState = document.getElementById('demo-state-idle');
            const revealedState = document.getElementById('demo-state-revealed');
            const box = document.getElementById('demo-box');
            card.classList.remove('scale-105', 'shadow-2xl');
            idleState.classList.remove('hidden'); revealedState.classList.add('hidden');
            box.classList.remove('animate-shake'); box.classList.add('animate-float');
            document.getElementById('demo-toasts').innerHTML = '';
        }

        function showToast(text, type) {
            const container = document.getElementById('demo-toasts');
            const toast = document.createElement('div');
            const icons = { coin: '💰', badge: '🏅' };
            toast.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-purple-100 text-sm font-bold animate-slide-up whitespace-nowrap z-20';
            toast.innerHTML = `<span>${icons[type]||'✨'}</span> <span>${text}</span>`;
            const rx = (Math.random() - 0.5) * 100; const ry = (Math.random() - 1) * 100 - 50;
            toast.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px))`;
            container.appendChild(toast); setTimeout(() => toast.remove(), 2500);
        }

        function toggleLoginModal() {
            const modal = document.getElementById('login-modal');
            modal.classList.toggle('hidden');
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function getNestedTranslation(obj, path) {
            return path.split('.').reduce((acc, part) => acc && acc[part], obj);
        }

        let currentLang = 'en';
        function toggleLang() {
            currentLang = currentLang === 'en' ? 'cn' : 'en';
            document.getElementById('lang-label').innerText = currentLang.toUpperCase();
            const data = translations[currentLang];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const val = getNestedTranslation(data, key);
                if (val) el.innerText = val;
            });
            renderFAQ();
        }

        function switchPage(pageId) {
            ['home', 'rewards', 'withdraw', 'events', 'leaderboard'].forEach(id => {
                const el = document.getElementById('view-' + id);
                if(el) el.classList.add('hidden-page');
                const btn = document.getElementById('nav-' + id);
                if(btn) btn.classList.remove('active-nav');
            });
            const target = document.getElementById('view-' + pageId);
            if(target) target.classList.remove('hidden-page');
            const activeBtn = document.getElementById('nav-' + pageId);
            if(activeBtn) activeBtn.classList.add('active-nav');
            window.scrollTo(0, 0);
        }

        // Init
        renderDrops(); renderFAQ();
    </script>
</body>
</html>
