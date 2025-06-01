const Quote = () => {
        const quotes = [
        "With great power comes great electricity bill",
        "The best way to predict the future is to invent it",
        "Life is 10% what happens to us and 90% how we react to it",
        "The only limit to our realization of tomorrow is our doubts of today",
        "Success is not final, failure is not fatal: It is the courage to continue that counts",
        "The only way to do great work is to love what you do",
        "You miss 100% of the shots you don't take",
        "The future belongs to those who believe in the beauty of their dreams",
        "It does not matter how slowly you go as long as you do not stop",
        "The only impossible journey is the one you never begin",
        "Believe you can and you're halfway there",
        "Act as if what you do makes a difference. It does",
        "Success usually comes to those who are too busy to be looking for it",
        "Don't watch the clock; do what it does. Keep going",
        "You can't build a reputation on what you are going to do",
        "The future depends on what you do today",
        "The best revenge is massive success",
        "Your time is limited, so don't waste it living someone else's life",
        "The only way to achieve the impossible is to believe it is possible",
        "Success is not how high you have climbed, but how you make a positive difference to the world",
        "The only place where success comes before work is in the dictionary",
        "Success is walking from failure to failure with no loss of enthusiasm",
        "The way to get started is to quit talking and begin doing",
        "Don't be afraid to give up the good to go for the great",
        "If you want to achieve greatness stop asking for permission",
        "Success is not in what you have, but who you are",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful",
        ]
    return (
        <div className="bg-background w-full pb-24">
                <div className="flex-box w-fit flex-shrink items-center justify-center flex-col m-auto text-2xl">
                        <div className="border-2 border-secondary">
                                <h1 className="px-4 py-2 text-white font-medium">
                                        {quotes[Math.floor(Math.random() * quotes.length)]}
                                </h1>
                        </div>
                        <div className="border-2 border-secondary ml-auto w-fit px-4 py-2 text-white text-lg">
                                - Someone in the history probably
                        </div>
                </div>
        </div>
    )
}

export default Quote
