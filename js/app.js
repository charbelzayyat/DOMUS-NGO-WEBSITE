class ActivitySearch {

    constructor() {

        this.searchInput =
            document.getElementById("searchInput");

        this.activities =
            document.querySelectorAll(".activity-item");

        if(this.searchInput){

            this.searchInput.addEventListener(
                "keyup",
                () => this.filterActivities()
            );
        }
    }

    filterActivities(){

    const value =
        this.searchInput.value.toLowerCase();

    let found = false;

    this.activities.forEach(activity => {

        const text =
            activity.textContent.toLowerCase();

        if(text.includes(value)){

            activity.style.display = "block";

            found = true;
        }
        else{

            activity.style.display = "none";
        }

    });

    const noResults =
        document.getElementById("noResults");

    if(noResults){

        noResults.classList.toggle(
            "d-none",
            found
        );
    }
    if (value === "") {
        this.activities.forEach(activity => {
            activity.style.display = "block";
        });

        if (noResults) {
            noResults.classList.add("d-none");
        }
    }
}

}

new ActivitySearch();

class CounterAnimation {

    constructor() {

        this.counters =
            document.querySelectorAll(".counter");

        if(this.counters.length > 0){

            this.initializeCounters();
        }
    }

    initializeCounters() {

        const options = {

            threshold: 0.5
        };

        const observer =
            new IntersectionObserver(

                (entries, obs) => {

                    entries.forEach(entry => {

                        if(entry.isIntersecting){

                            this.startCounter(
                                entry.target
                            );

                            obs.unobserve(
                                entry.target
                            );
                        }
                    });

                },

                options
            );

        this.counters.forEach(counter => {

            counter.innerText = "0";

            observer.observe(counter);
        });
    }

    startCounter(counter) {

        const target =
            +counter.getAttribute("data-target");

        const hasPlus =
            counter.getAttribute("data-plus")
            === "true";

        let current = 0;

        const speed = 2000;

        const stepTime = 20;

        const increment =
            target / (speed / stepTime);

        const update = () => {

            current += increment;

            if(current < target){

                counter.innerText =
                    Math.ceil(current);

                setTimeout(
                    update,
                    stepTime
                );

            } else {

                counter.innerText =
                    hasPlus
                    ? "+" + target
                    : target;
            }
        };

        update();
    }
}

new CounterAnimation();