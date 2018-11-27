//1. Use dot notation to console log the value of the key "meaning_of_life" in this object

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

//2. Now access it using a variable called "meaning"
let meaning = "meaning_of_life";
console.log(hitchhikers_guide.random_facts.ultimate_answer["meaning_of_life"]);

// When using square bracket notation have to write the key as a string