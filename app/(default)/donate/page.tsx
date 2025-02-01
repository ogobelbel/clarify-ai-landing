'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import PageIllustration from '@/components/page-illustration';

const cryptoOptions = [
    {
        name: 'BTC',
        address: 'bc1qzhmnr58mrn60y2gpxke2v4mqka5qym3fm72vs5',
        qrSrc: '/images/btc.PNG',
        icon: (
            <svg className="h-8 w-8" viewBox="-4.76 -4.76 43.52 43.52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366Z" fill="#F7931A"/>
            </svg>
        ),
    },
    {
        name: 'ETH',
        address: '0x50d3Aa00DA8E48a1B1eE34B4F4668363C0e6BFD4',
        qrSrc: '/images/eth.PNG',
        icon: (
            <svg className="h-8 w-8" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#5D7EE7" fillRule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11.814-7.581a1 1 0 0 0-1.628 0l-5 7a1 1 0 0 0 0 1.162l5 7a1 1 0 0 0 1.628 0l5-7a1 1 0 0 0 0-1.162l-5-7z" clipRule="evenodd"/>
            </svg>
        ),
    },
    {
        name: 'USDT (ERC20)',
        address: '0x50d3Aa00DA8E48a1B1eE34B4F4668363C0e6BFD4',
        qrSrc: '/images/usdt_eth.PNG',
        icon: (
            <svg className="h-8 w-8" viewBox="-5.76 -5.76 43.52 43.52" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#26A17B"/>
                <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/>
            </svg>
        ),
    },
    {
        name: 'USDC (ERC20)',
        address: '0x50d3Aa00DA8E48a1B1eE34B4F4668363C0e6BFD4',
        qrSrc: '/images/usdt_eth.PNG',
        icon: (
            <svg className="h-8 w-8" viewBox="-4.48 -4.48 40.96 40.96" xmlns="http://www.w3.org/2000/svg">
                <circle fill="#3E73C4" cx="16" cy="16" r="16"/>
                <path fill="#FFF" d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975a.416.416 0 00.427-.425v-.06a3.04 3.04 0 00-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 00-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z"/>
            </svg>
        ),
    },
    {
        name: 'USDT (TRC20)',
        address: 'TJpZBAR9yqm5D73XeV7ARnEgRB5nqVnk64',
        qrSrc: '/images/usdt_trc.PNG',
        icon: (
            <svg className="h-8 w-8" viewBox="-5.76 -5.76 43.52 43.52" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#26A17B"/>
                <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/>
            </svg>
        ),
    },
];

export default function DonationPage() {
    const [copiedAddress, setCopiedAddress] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleCopy = (address: string) => {
        navigator.clipboard.writeText(address);
        setCopiedAddress(address);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            setCopiedAddress('');
        }, 2000);
    };

    return (
        <section className="relative flex min-h-screen flex-col items-center">
            <PageIllustration />
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Content */}
                <div className="pb-12 pt-32 md:pb-5 md:pt-40">
                <div className="rounded-lg">
                    {/* Main content wrapper */}
                    <div className="flex flex-col items-center">
                        {/* Title section with 30px bottom margin */}
                        <div className="mb-8 text-center">
                            <h1 className="text-3xl font-bold">Support Our Project</h1>
                            <p className="mt-4 text-base text-gray-600">
                                Your donation helps us maintain and improve our services.
                            </p>
                        </div>

                        {/* Donation container with original 1rem gap */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {cryptoOptions.map((crypto) => (
                                <div
                                    key={crypto.name}
                                    className="flex w-[180px] flex-col items-center rounded-lg border bg-white p-4 shadow-sm"
                                    data-aos="fade-up"
                                >
                                    {/* Icon wrapper matching original vertical layout */}
                                    <div className="mb-2 flex flex-col items-center justify-center">
                                        <div className="h-10 w-10">{crypto.icon}</div>
                                        <h5 className="mt-1 text-sm font-medium">{crypto.name}</h5>
                                    </div>

                                    {/* QR code with original dimensions */}
                                    <div className="mb-2">
                                        <Image
                                            src={crypto.qrSrc}
                                            alt={`${crypto.name} QR Code`}
                                            width={130}
                                            height={130}
                                            className="cursor-pointer rounded-lg bg-white p-2"
                                            onClick={() => handleCopy(crypto.address)}
                                        />
                                    </div>

                                    {/* Address container matching original width */}
                                    <div className="flex w-[140px] items-center justify-between rounded bg-gray-50 p-1.5">
                    <span className="block max-w-[110px] overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-500">
                      {crypto.address}
                    </span>
                                        <button
                                            onClick={() => handleCopy(crypto.address)}
                                            className="ml-1 text-gray-500 hover:text-gray-700"
                                        >
                                            {copiedAddress === crypto.address ? '✓' : '📋'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Gratitude section with original 30px top margin */}
                        <div className="mt-8 text-center">
                            <h3 className="text-xl font-bold">Thank You for Your Donation!</h3>
                            <p className="mt-2 text-gray-600">
                                Your generosity is greatly appreciated and will make a significant impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}