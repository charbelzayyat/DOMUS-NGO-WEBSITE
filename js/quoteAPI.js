
class QuoteAPI {

    constructor() {

        this.quoteText =
            document.getElementById("quoteText");

        this.quoteAuthor =
            document.getElementById("quoteAuthor");

        // DOMUS fallback quotes if API fails
        this.domusQuotes = [

            "Small acts of kindness can change the world.",

            "Where there is compassion, there is hope.",

            "Together, we bring dignity and care.",

            "Humanity begins with helping one another.",

            "Helping one person may not change the world, but it changes their world."

        ];

        if (this.quoteText) {

            this.getQuote();
        }
    }

    async getQuote() {

        try {

            this.quoteText.textContent =
                "Loading inspirational quote...";

            const response = await fetch(
                "https://api.api-ninjas.com/v1/quotes",
                {
                    method: "GET",

                    headers: {

                        "X-Api-Key":
                            "CLRLeJBjvJDjIIUsXQ9MYrr3M7YEdQZtkjsSnKKI"
                    }
                }
            );

            console.log(
                "Response status:",
                response.status
            );

            if (!response.ok) {

                throw new Error(
                    "HTTP error " + response.status
                );
            }

            const data =
                await response.json();
                if (!data || data.length === 0) {
                    this.quoteText.textContent =
                    "No inspirational quote available.";
                    this.quoteAuthor.textContent = "";
                    return;
                }

            console.log(
                "API Data:",
                data
            );

            const quote =
                data[0].quote;

            const author =
                data[0].author;

            console.log(
                "Displaying API quote..."
            );

            this.quoteText.textContent =
                `"${quote}"`;

            this.quoteAuthor.textContent =
                `— ${author}`;
        }

        catch (error) {

            console.error(
                "Fetch failed, using fallback:",
                error
            );

            // Fallback if API is unavailable
            const random =
                this.domusQuotes[
                    Math.floor(
                        Math.random() *
                        this.domusQuotes.length
                    )
                ];

            this.quoteText.textContent =
                random;

            this.quoteAuthor.textContent =
                "— DOMUS NGO";
        }
    }
}

// Initialize the API class
new QuoteAPI();