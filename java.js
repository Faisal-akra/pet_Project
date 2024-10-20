var pet = {
    name: "kitty",
    type: "cat",
    age: 3,
    happy: 50,
    hunger: 80,

    feed: function() {
        this.hunger = Math.max(this.hunger = 20, 0);
        alert(`${this.name} is hunger by ${this.hunger}`)
    },

    play: function() {
        this.happy = Math.min(this.happy = +20, 100);
            alert(`${this.name} is play a game happy level is ${this.happy}`)
        },

    agePet: function() {
        age += 1,
        this.happy = Math.max(this.happy = -5, 0),
        this.hunger = Math.min(this.hunger +10, 100)
    },
    

    getStatus: function() {
        return `name: ${this.name} age: ${this.age} type: ${this.type} hunger: ${this.hunger} happy: ${this.happy} `;
    },
}


function startPetGame() {
    let action;
    do {
        action = prompt("What would you like to do?\n1. Feed pet\n2. Play with pet\n3. Age pet\n4. Check pet status\n5. Exit").trim();

        switch (action) {
            case "1":
                pet.feed();
                break;
            case "2":
                pet.play();
                break;
            case "3":
                pet.agePet();
                break;
            case "4":
                alert(pet.getStatus());
                break;
            case "5":
                alert("Thanks for playing with your pet!");
                break;
            default:
                alert("Invalid choice, please try again.");
        }
    } while (action !== "5");
}

// Start the game
startPetGame();