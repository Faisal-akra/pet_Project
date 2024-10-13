var pet = {
    name: 'cat',
    age: 3,
    happiness: 50,
    hunger:80,


    feed: function() {
        this.hunger = Math.max(this.hunger -20, 0);
        alert(`${this.name}  has hunger now ${this.hunger}`)
    },

    play: function() {
        this.happiness = Math.min(this.happiness +20, 100);
        alert(`${this.name} has happy now ${this.happiness}`)
    },

    agePet: function() {
        this.age +=1;
        this.happiness = Math.max(this.happiness -5, 0);
        this.hunger = Math.min(this.hunger +10, 100);

        alert(`${this.name} is now ${this.age} old and happiness is ${this.happiness}`)

    }

}
    
