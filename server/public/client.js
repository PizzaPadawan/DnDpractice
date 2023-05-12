//Let's play DUNGEONS AND DRAGONS
//jquery practice:

$(function (){
    hideEquip();
    $('#classInput').on('change', equipSelect);
    $('#raceInput').on('change', raceStatAssign);
    // $('#classInput').on('change', classStatAssign);
    $('#inputButton').on('click', createCharacter);
})

const character1 = {}
const playerCharacters = []


function createCharacter(){
    character1.name = $('#nameInput').val();
    character1.race = $('#raceInput').val();
    character1.class = $('#classInput').val();
    console.log(`Welcome to your adventure, ${character1.name} the ${character1.race} ${character1.class}!`);
    $('#nameInput').val("");
    $('#raceInput').val("select race")
    $('#classInput').val("select class")
}

// show all character attributes to the DOM as they're entered.
// attach applicable stats / increases to race and class, show stats on DOM
// as those fields are chosen.

let charStats = [
    {stat:"str",
    total: 0,
    mod: 0},
    {stat:"dex",
    total: 0,
    mod: 0},
    {stat:"con",
    total: 0,
    mod: 0},
    {stat:"wis",
    total: 0,
    mod: 0},
    {stat:"cha",
    total: 0,
    mod: 0},
    {stat:"int",
    total: 0,
    mod: 0}
];

function raceStatAssign(){
    
    if($("#raceInput").val() === "hilldwarf" || $("#raceInput").val() === "mtndwarf"){
        charStats[2].total += 2;
    }
    
    updateStatList();
}

//default stats = 15, 14, 13, 12, 10, 8

// function classStatAssign(){
//     //applies different array of stat objects based on chosen class,
//     //factors in race attributes according to selected race dropdown
//     //(dwarves getting inherent +2 to constitution, for example)
    
//     if ($('#classInput').val() === "barbarian"){ 
//         for(stat of charStats){
//             stat
//         }
//     }

//     showStatList();
// }


function updateStatList(){
     $('#strTotal').text(`${charStats[0].total}`);
     $('#strMod').text(`${charStats[0].mod}`);
     $('#dexTotal').text(`${charStats[1].total}`);
     $('#dexMod').text(`${charStats[1].mod}`);
     $('#conTotal').text(`${charStats[2].total}`);
     $('#conMod').text(`${charStats[2].mod}`);
     $('#wisTotal').text(`${charStats[3].total}`);
     $('#wisMod').text(`${charStats[3].mod}`);
     $('#chaTotal').text(`${charStats[4].total}`);
     $('#chaMod').text(`${charStats[4].mod}`);
     $('#intTotal').text(`${charStats[5].total}`);
     $('#intMod').text(`${charStats[5].mod}`);
}

// create a template to match equipment lists for each class
// and import them into character object
// ex bard:
// character.weapon1 = selected.$(".bard").val();
// character.weapon2 = dagger
// character.armor = leather armor


function hideEquip(){
    $(".barbarian").hide();
    $(".bard").hide();
    $(".cleric").hide();
    $(".druid").hide();
    $(".fighter").hide();
    $(".monk").hide();
    $(".paladin").hide();
    $(".ranger").hide();
    $(".rogue").hide();
    $(".sorceror").hide();
    $(".warlock").hide();
    $(".wizard").hide();
}

function equipSelect(){
    const dndClass = $("#classInput").val();
    hideEquip();
    $(`.${dndClass}`).show();
}

//needs a function to append "required" to dropdowns of selected class
//ONLY if that equipSelect has switched it to .show()




//IDEAS / TO DO:

//rollCharacter function attached to the inputButton that does the following and applies them in key form to a new character object:

// name: nameInput, race: raceinput, class: classInput, weapons: weaponInput, spells: spellInput
// weaponInput and spellInput dropdowns specific to each selected classInput

// rolls 4d6 into an array, pops out the lowest roll, adds the remaining 3 values, and pushes the sum into a new array. This function loops 4 times and applies this array's values to an array of stat objects with name, total, and mod based on the stat slot priority of the selected class (proiritizing the highest roll to strength for a fighter class, for example)

// adds applicable spd stat based on raceInput

// adds ac based on selected armor acMod + dex modifier

// hp (based on rolled con stat) and ac (based on default armor of selected class)
// creates a skill modifier list and applies applicable proficiency scores based on race and class
// adds character to an array of selectable characters so game functions can take character[i].name inputs for different playable events or change chosenCharacter based on character[i].name input. 

//spellCast function that takes a character.spells.option parameter and a target parameter, rolling the applicable dice and applying damage / healing / buffs upon successful roll.  

//visual grid with characters and enemies, movement based on character speed 

// CLEANING UP OLD CODE AS WE LEARN MORE EFFICIENT PRACTICES

//dice & rolls

let d4 = {
    sides: 4,
    roll: function diceRoll(){
        let randomNumber = Math.floor(Math.random()*this.sides + 1);
        return randomNumber;
    }
}

let d6 = {
    sides: 6,
    roll: function diceRoll(){
        let randomNumber = Math.floor(Math.random()*this.sides + 1);
        return randomNumber;
    }
}

let d8 = {
    sides: 8,
    roll: function diceRoll(){
        let randomNumber = Math.floor(Math.random()*this.sides + 1);
        return randomNumber;
    }
}

let d10 = {
    sides: 10,
    roll: function diceRoll(){
        let randomNumber = Math.floor(Math.random()*this.sides + 1);
        return randomNumber;
    }
}

let d12 = {
    sides: 12,
    roll: function diceRoll(){
        let randomNumber = Math.floor(Math.random()*this.sides + 1);
        return randomNumber;
    }
}

let d20 = {
    sides: 20,
    roll: function diceRoll(){
        let randomNumber = Math.floor(Math.random()*this.sides + 1);
        return randomNumber;
    }
}

let d100 = {
    sides: 100,
    roll: function diceRoll(){
        let randomNumber = Math.floor(Math.random()*this.sides + 1);
        return randomNumber;
    }
}

// Character sheets:




const mustaine = {
    name: "Mustaine",
    race: "Tiefling",
    class: "Bard",
    lvl: 1,
    hp: 10,
    ac: 13,
    init: 2,
    spd: 30,
    stats: [ 
        {   stat: 'str',
            total: 11,
            mod: 0
        },
        {   stat: 'dex',
            total: 15,
            mod: 2
        },
        {   stat: 'con',
            total: 15,
            mod: 2
        },
         {  stat: 'int',
            total: 9,
            mod: -1
        },
        {   stat: 'wis', 
            total: 15,
            mod: 2
        },
        {   stat: 'cha',
            total: 18,
            mod: 4
        }
        ],
    skills: [
        {skill: 'acrobatics',
        mod: 4},
        {skill: 'animalhandling',
        mod: 2},
        {skill: 'arcana',
        mod: -1},
        {skill: 'athletics',
        mod: 0},
        {skill:'deception', 
        mod: 4},
        {skill:'history',
         mod: -1},
        {skill:'insight', 
        mod: 2},
        {skill:'intimidation', 
        mod: 4},
        {skill:'medicine', 
        mod: 2},
        {skill:'nature', 
        mod: -1},
        {skill:'perception', 
        mod: 2},
        {skill:'performance', 
        mod: 6},
        {skill:'persuasion', 
        mod: 6},
        {skill:'religion', 
        mod: -1},
        {skill:'slightofhand', 
        mod:4},
        {skill:'stealth', 
        mod:2},
        {skill:'survival', 
        mod:2}
    ],
    weapon1:  {name: "crossbow",
        hit: 4,
        dice: d8,
        dam: 2},
    weapon2: 
        {name: "dagger",
        hit: 4,
        dice: d4,
        dam: 2},
    weapon3:  
        {name: "unarmed strike", 
        hit: 2,
        dice: 0,
        dam: 1}
}

const ganymede = {
    name: "Ganymede",
    race: "Wood Elf",
    class: "Ranger",
    lvl: 1,
    hp: 10,
    ac: 15,
    init: 4,
    spd: 35,
    weapon1: {name: "longbow",
            hit: 4,
            dice: d6,
            dam: 2}
}

const koboldWarrior = {
    name: "Kunck",
    race: "kobold",
    class: "warrior",
    lvl: 1,
    hp: 5,
    ac: 12,
    init: 1,
    spd: 30,
    weapon1: {
        name: "dagger",
        hit: 4,
        dice: d4,
        dam: 2
    }
    
} 

// assignment variables

let chosenCharacter = ganymede
let chosenWeapon = ganymede.weapon1
let target = koboldWarrior



function chooseCharacter(character){
    chosenCharacter = character;
    chosenWeapon = chosenCharacter.weapon1;
    return console.log(`It is ${chosenCharacter.name}'s turn`)
}


function chooseTarget(x){
    target = x;
}

// Dice roll functions

function skillCheck(skillToCheck){
    let chosenSkill = chosenCharacter.skills.find(item => item.skill === skillToCheck);
    let skillMod = chosenSkill.mod;
    return d20.roll() + skillMod;
}

function abilityCheck(statCheck){
    let chosenStat = chosenCharacter.stats.find(item => item.stat === statCheck);
    let statMod = chosenStat.mod;
    return d20.roll() + statMod;
}

function initRoll(character){
    return d20.roll() + character.init
}

function hitRoll(){
        return d20.roll() + chosenWeapon.hit;
}


function rollToHit(){
    
    let ac = target.ac

    if (hitRoll() >= 20){
        return "CRITICAL HIT!"
    } else if (hitRoll() < 20 && hitRoll() >= ac){
        return "Attack hits!"
    } else if (hitRoll() - chosenWeapon.hit === 1){
        return "CRITICAL MISS!"
    } else return "Attack missed."
}

let rolledHit = rollToHit()

function rollDamage(){
    return chosenWeapon.dice.roll() + chosenWeapon.dam;
}

let rolledDamage = rollDamage()

function dealDamage(){
    if (rolledDamage < target.hp){
        return target.hp -= rolledDamage;
    }
        console.log("Killing blow!")
    return target.hp -= rolledDamage;
}


function critDamage(){
    return (chosenWeapon.dice.roll() + chosenWeapon.dice.roll()) + chosenWeapon.dam;
}

let rolledCritDamage = critDamage()

function dealCrit(){
    if (rolledCritDamage < target.hp){
        return target.hp = target.hp - rolledCritDamage;
    }
    console.log("Killing blow!")
    return target.hp -= rolledCritDamage;
}

function attackRoll(){
    console.log(`${chosenCharacter.name} will attack ${target.name} with their ${chosenWeapon.name}:`)
    if (rolledHit === "CRITICAL HIT!"){
        console.log(`CRITICAL HIT! ${rolledCritDamage} damage!`)
            if (rolledCritDamage < target.hp){
                return target.name + " has " + dealCrit() + " hp remaining!";
            } else return target.name + " is unconscious!"
    } else if (rolledHit === "Attack hits!") {
        console.log(`Attack hits, ${rolledDamage} damage!`)
        if (rolledDamage < target.hp){
            return target.name + " has " + dealDamage() + " hp remaining!";
        } else return target.name + " is unconscious!"
    } else return rolledHit;
}

//try switch statement???

chooseCharacter(ganymede);
chooseTarget(koboldWarrior)
console.log(attackRoll())

