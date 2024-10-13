var pet = {
    name: 'cat',
    age: 3,
    happiness: 50,
    hunger:80,


    feed: function() {
        this.hunger = Math.max(this.hunger -20, 0)
    },

    play: function() {
        this.happiness = Math.min(this.happiness +20, 100)
    },

    agePet: function() {
        
    }

}
    
