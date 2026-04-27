(() => {
    const sourcePages = {
        base: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Base_Deck_-_Inventory_List",
        baseCards: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Base_Deck_-_Cards_In_This_Deck",
        basePreviews: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Base_Deck_-_Card_Previews",
        monster: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Monster_Expansion_-_Inventory_List",
        monsterPreviews: "https://unstablegameswiki.com/index.php?title=Here_To_Slay_Monster_Expansion_-_Card_Previews_-_2nd_Edition",
        sorcerer: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Dragon_Sorcerer_Expansion_-_Inventory_List",
        sorcererPreviews: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Dragon_Sorcerer_Expansion_-_Card_Previews",
        warriorDruid: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_-_Warrior_and_Druid_Expansion_-_Inventory_List",
        warriorDruidPreviews: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_-_Warrior_and_Druid_Expansion_-_Card_Previews",
        berserkerNecromancer: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Dragon_Berserkers_and_Necromancers_Expansion_-_Inventory_List",
        berserkerNecromancerPreviews: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Dragon_Berserkers_and_Necromancers_Expansion_-_Card_Previews",
        sleigh: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Here_To_Sleigh_Expansion_-_Inventory_List",
        sleighPreviews: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_Here_To_Sleigh_Expansion_-_Card_Previews",
        bannerQuest: "https://unstablegameswiki.com/index.php?title=HtS_Banner_Quest_Expansion_-_Inventory_List",
        bannerQuestPreviews: "https://www.unstablegameswiki.com/index.php?title=HtS_Banner_Quest_Expansion_-_Card_Previews",
        kse: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_KSE_Cards",
        ksePreviews: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_KSE_Cards-_Card_Previews",
        vinyl: "https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_-_Blind_Box_Vinyl_-_Card_Set",
        vinylPreviews: "https://unstablegameswiki.com/index.php?title=Here_To_Slay_-_Blind_Box_Vinyl_-_Card_Set"
    };

    const imageBatches = [
        {
            deckId: "base",
            prefix: "HtS-Base",
            entries: [
                ["The Charismatic Song", "103"], ["The Cloaked Sage", "106"], ["The Divine Arrow", "101"], ["The Fist of Reason", "105"], ["The Protecting Horn", "102"], ["The Shadow Claw", "104"],
                ["Abyss Queen", "213"], ["Anuran Cauldron", "210"], ["Artic Aries", "211"], ["Bloodwing", "212"], ["Corrupted Sabretooth", "207"], ["Crowned Serpent", "205"], ["Dark Dragon King", "201"], ["Dracos", "203"], ["Malamammoth", "214"], ["Mega Slime", "208"], ["Orthus", "202"], ["Rex Major", "215"], ["Terratuga", "204"], ["Titan Wyvern", "206"], ["Warworn Owlbear", "209"],
                ["Bad Axe", "034"], ["Bear Claw", "033"], ["Beary Wise", "030"], ["Fury Knuckle", "032"], ["Heavy Bear", "028"], ["Pan Chucks", "027"], ["Qi Bear", "029"], ["Tough Teddy", "031"],
                ["Dodgy Dealer", "041"], ["Fuzzy Cheeks", "039"], ["Greedy Cheeks", "038"], ["Lucky Bucky", "042"], ["Mellow Dee", "037"], ["Napping Nibbles", "036"], ["Peanut", "035"], ["Tipsy Tootie", "040"],
                ["Calming Voice", "043"], ["Guiding Light", "050"], ["Holy Curselifter", "048"], ["Iron Resolve", "047"], ["Mighty Blade", "045"], ["Radiant Horn", "046"], ["Vibrant Glow", "049"], ["Wise Shield", "044"],
                ["Bullseye", "055"], ["Hook", "057"], ["Lookie Rookie", "054"], ["Quick Draw", "056"], ["Serious Grey", "058"], ["Sharp Fox", "051"], ["Wildshot", "052"], ["Wily Red", "053"],
                ["Kit Napper", "065"], ["Meowzio", "062"], ["Plundering Puma", "060"], ["Shurikitty", "061"], ["Silent Shadow", "066"], ["Slippery Paws", "063"], ["Sly Pickings", "064"], ["Smooth Mimimeow", "059"],
                ["Bun Bun", "068"], ["Buttons", "072"], ["Fluffy", "071"], ["Hopper", "074"], ["Snowball", "067"], ["Spooky", "070"], ["Whiskers", "073"], ["Wiggles", "069"],
                ["Bard Mask", "004"], ["Decoy Doll", "012"], ["Fighter Mask", "007"], ["Guardian Mask", "008"], ["Particularly Rusty Coin", "011"], ["Ranger Mask", "005"], ["Really Big Ring", "010"], ["Thief Mask", "009"], ["Wizard Mask", "006"],
                ["Curse of the Snake's Eyes", "002"], ["Sealing Key", "001"], ["Suspiciously Shiny Coin", "003"],
                ["Modifier +1/-3", "024"], ["Modifier +2/-2", "021"], ["Modifier +3/-1", "025"], ["Modifier +4", "023"], ["Modifier -4", "022"],
                ["Call to the Fallen", "019"], ["Critical Boost", "017"], ["Destructive Spell", "018"], ["Enchanted Spell", "013"], ["Entangling Trap", "015"], ["Forced Exchange", "020"], ["Forceful Winds", "014"], ["Winds of Change", "016"],
                ["Challenge", "026"], ["Rule Card", "000"]
            ]
        },
        {
            deckId: "sorcerer",
            prefix: "HtS-Drag",
            entries: [
                ["The Fearless Flame", "101"], ["Calamity Mongrel", "201"],
                ["Dragalter", "008"], ["Dystortivern", "006"], ["Extraga", "010"], ["Luut", "011"], ["Mirroryu", "009"], ["Oracon", "012"], ["Renovern", "007"], ["Shamanaga", "013"], ["Smok", "014"],
                ["Sorcerer Mask", "002"], ["Modifier +6", "004"], ["Modifier -6", "003"], ["Egg of Fortune", "001"], ["Sorcerer Challenge", "005"]
            ]
        },
        {
            deckId: "monster",
            prefix: "HtS-Mon",
            suffix: "-2E",
            entries: [
                ["Ancient Megashark", "205"], ["Clawed Nightmare", "211"], ["Dragon Wasp", "206"], ["Goretelodont", "201"], ["Lumbering Demon", "203"], ["Possessed Plush", "212"], ["Reef Ripper", "204"], ["Saffyre Phoenix", "213"], ["Scavenger Griffin", "207"], ["Venomous Gemini", "209"], ["Voltclaw Lion", "202"], ["Wandering Behemoth", "208"], ["Wicked Sea Serpent", "210"]
            ]
        },
        {
            deckId: "warrior-druid",
            prefix: "HtS-WarDruid",
            entries: [
                ["The Noble Shaman", "102"], ["The Piercing Howl", "101"], ["Feral Dragon", "202"], ["Muscipula Rex", "201"],
                ["Big Buckley", "020"], ["Buck Omens", "018"], ["Doe Fallow", "017"], ["Glowing Antler", "019"], ["Maegisty", "022"], ["Magus Moose", "016"], ["Majestelk", "023"], ["Stagguard", "021"],
                ["Agile Dagger", "028"], ["Blinding Blade", "026"], ["Critical Fang", "029"], ["Hardened Hunter", "025"], ["Looting Lupo", "024"], ["Silent Shield", "031"], ["Tenacious Timber", "030"], ["Wolfgang Pack", "027"],
                ["Bottomless Bag", "007"], ["Druid Mask", "006"], ["Even Bigger Ring", "003"], ["Temporal Hourglass", "004"], ["Warrior Mask", "005"],
                ["Cursed Glove", "009"], ["Soul Tether", "008"], ["Modifier +1/-1", "012"], ["Modifier +2/-1", "013"], ["Modifier +4", "010"], ["Modifier -4", "011"],
                ["Beast Call", "002"], ["Rapid Refresh", "001"], ["Druid Challenge", "015"], ["Warrior Challenge", "014"]
            ]
        },
        {
            deckId: "berserker-necromancer",
            prefix: "HtS-BersNecr",
            entries: [
                ["The Gnawing Dread", "101"], ["The Raging Manticore", "102"], ["Doombringer", "202"], ["Reptilian Ripper", "201"],
                ["Annihilator", "012"], ["Brawling Spirit", "010"], ["Gruesome Gladiator", "016"], ["Meowntain", "013"], ["Rabid Beast", "015"], ["Roaryal Guard", "009"], ["Vicious Wildcat", "014"], ["Unbridled Fury", "011"],
                ["Bark Hexer", "003"], ["Beholden Retriever", "008"], ["Bone Collector", "005"], ["Boston Terror", "002"], ["Grim Pupper", "001"], ["Hollow Husk", "006"], ["Perfect Vessel", "004"], ["Shadow Saint", "007"],
                ["Berserker Mask", "024"], ["Biggest Ring Ever", "026"], ["Goblet of Caffeination", "025"], ["Necromancer Mask", "023"], ["Silver Lining", "027"],
                ["Dragon's Bile", "028"], ["Soulbound Grimoire", "029"], ["Modifier +2/-2", "019"], ["Modifier +7", "020"], ["Lightning Labrys", "021"], ["Mass Sacrifice", "022"], ["Berserker Challenge", "018"], ["Necromancer Challenge", "017"]
            ]
        },
        {
            deckId: "sleigh",
            prefix: "HtS-xmas",
            entries: [
                ["Blue Snowflakes Overlay", "101"], ["Red Holly Overlay", "102"], ["Green Bows Overlay", "103"], ["Purple Candycane Overlay", "104"],
                ["Gift Bearer", "013"], ["Santa Claws", "014"], ["Christmas Carol", "004"], ["Lil' Drummer Bard", "003"], ["Shiny Nose", "008"], ["Snow Slinger", "007"], ["Prancer", "011"], ["Shooting Star", "012"], ["Fireplace Fugitive", "009"], ["Gift Bag Bandit", "010"], ["Evergreen", "005"], ["Holly Jolly", "006"],
                ["Freshly Sharpened Skates", "015"], ["Milk and Cookies", "016"], ["Garbage Gift Challenge", "001"], ["Good Gift Challenge", "002"],
                ["Bag of Holding Gifts", "213"], ["EZ Mix Potions", "210"], ["Mythical Mystery", "215"], ["Rudolph's Nose", "211"], ["Snows of Time", "212"], ["The Gift of Destruction", "214"], ["Warm Socks", "209"], ["Endless Unwrapping", "207"], ["Gag Gift", "206"], ["Lump of Coal", "202"], ["Mint Condition Mittens", "203"], ["Potluck Surprise", "208"], ["Really Itchy Sweater", "204"], ["Watchful Medallion", "205"], ["White Elephant", "201"],
                ["Checklist", "301"]
            ]
        },
        {
            deckId: "banner-quest",
            prefix: "HtS-Banner",
            entries: [
                ["Bard Banner", "101"], ["Berserker Banner", "102"], ["Druid Banner", "103"], ["Fighter Banner", "104"], ["Guardian Banner", "105"], ["Hunter's Trophy Banner", "106"], ["Necromancer Banner", "107"], ["Ranger Banner", "108"], ["Thief Banner", "109"], ["Warrior Banner", "110"], ["Wizard Banner", "111"],
                ["Chitin Scourge", "201"], ["Razor Tongue", "202"], ["Bone Bruiser", "001"], ["Crushing Crusader", "002"], ["Deft Paw", "003"], ["Grave Howl", "004"], ["Loopy Lyricist", "005"], ["Mystical Melody", "006"], ["Shadow Striker", "007"], ["Thorn Blade", "008"], ["Ursine Protector", "009"], ["Wild Hooves", "010"],
                ["Prism Mask", "301"], ["Chaos Mask", "302"], ["Morph Mask", "303"],
                ["+1/-1 (Bard)", "400"], ["+1/-1 (Berserker)", "401"], ["+1/-1 (Druid)", "402"], ["+1/-1 (Fighter)", "403"], ["+1/-1 (Guardian)", "404"], ["+1/-1 (Necromancer)", "405"], ["+1/-1 (Ranger)", "406"], ["+1/-1 (Thief)", "407"], ["+1/-1 (Warrior)", "408"], ["+1/-1 (Wizard)", "409"],
                ["Relic Amp", "501"], ["Synergy Boost", "502"]
            ]
        },
        {
            deckId: "kse",
            prefix: "HtS-KSE",
            entries: [
                ["The Brutal Bow", "102"], ["The Mystical Maestro", "101"], ["The Veiled Raider", "103"], ["The Unstable Unicorn", "104"],
                ["Hamlet", "019"], ["Bearserker", "015"], ["Complex Illusion", "017"], ["Enchantler", "021"], ["Hoodwink", "018"], ["Purring Bandit", "014"], ["Nimble Gray", "020"], ["Mimi", "016"],
                ["Mysterious Feather", "002"], ["Mask of Misfortune", "001"], ["Modifier +1/-4", "005"], ["Modifier +2/-3", "006"], ["Modifier +3/-2", "004"], ["Modifier +4/-1", "007"], ["Captivating Spell", "003"],
                ["Bard Challenge", "010"], ["Fighter Challenge", "013"], ["Guardian Challenge", "008"], ["Ranger Challenge", "011"], ["Thief Challenge", "009"], ["Wizard Challenge", "012"]
            ]
        },
        {
            deckId: "vinyl",
            prefix: "HtS-NecBers",
            suffix: "-V",
            entries: [
                ["Howl Of The Dead", "001"], ["Reigning King", "002"]
            ]
        }
    ];

    const imageFiles = Object.fromEntries(imageBatches.flatMap((batch) =>
        batch.entries.map(([name, code]) => [`${batch.deckId}::${name}`, `${batch.prefix}-${code}${batch.suffix || ""}.png`])
    ));

    const classHints = {
        Bard: "สายจั่ว/แลกมือ/จังหวะเสริม เล่นแล้วช่วยเปิดมือและสร้างคอมโบ",
        Fighter: "สายแรงปะทะ เน้นทำลาย กดดัน และใช้แต้มเต๋าสูงให้คุ้ม",
        Guardian: "สายป้องกันและบัฟ ช่วยกัน Challenge หรือเพิ่มความนิ่งให้การทอย",
        Ranger: "สายมองข้อมูล/จั่ว/จัดมือ ช่วยหาใบสำคัญก่อนคนอื่น",
        Thief: "สายขโมยและป่วนมือคู่แข่ง เหมาะกับตัดจังหวะคนกำลังจะชนะ",
        Wizard: "สายเวทและควบคุมกระดาน มักเกี่ยวกับ Magic, Destroy หรือ Sacrifice",
        Druid: "สายธรรมชาติจากภาคเสริม มักเล่นกับเงื่อนไขเต๋าต่ำและการรีเฟรชทรัพยากร",
        Warrior: "สายต่อสู้จากภาคเสริม เน้นโจมตีและสร้างแรงกดดันบนโต๊ะ",
        Berserker: "สายเสี่ยงสูงผลแรง เหมาะกับเทิร์นที่ต้องการพลิกเกมด้วยพลังทำลาย",
        Necromancer: "สายกองทิ้งและการคืนชีพ มักใช้ Sacrifice/Discard เป็นต้นทุน",
        Sorcerer: "สายมังกรและเวทจาก KSE มักโยงกับ Magic และเอฟเฟกต์ฉับพลัน",
        "Fighter/Ranger": "ผู้นำสองคลาส ช่วยนับทั้ง Fighter และ Ranger ในการทำ Full Party",
        "Wizard/Bard": "ผู้นำสองคลาส ช่วยนับทั้ง Wizard และ Bard ในการทำ Full Party",
        "Guardian/Thief": "ผู้นำสองคลาส ช่วยนับทั้ง Guardian และ Thief ในการทำ Full Party",
        "Unstable Unicorn": "การ์ดพิเศษนอกคลาสหลัก ใช้เป็นสีสันของชุด Kickstarter Exclusive"
    };

    const typeHints = {
        "Party Leader": "วางตั้งแต่เริ่มเกม ให้ความสามารถติดตัวและนับเป็นคลาสของปาร์ตี้ แต่ไม่ใช่ Hero ปกติ",
        Monster: "เป้าหมายให้โจมตีด้วย 2 AP เมื่อ Slay สำเร็จจะเก็บไว้เป็นแต้มชนะและความสามารถถาวร",
        Hero: "ลงเข้าปาร์ตี้ด้วย 1 AP แล้วใช้คลาส/เอฟเฟกต์บนการ์ดเพื่อทำ Full Party หรือคอมโบ",
        Item: "สวมให้ Hero เพื่อเพิ่มความสามารถหรือเปลี่ยนจังหวะการเล่นของ Hero ตัวนั้น",
        "Cursed Item": "ไอเทมด้านลบ มักเล่นใส่ Hero ของคู่แข่งเพื่อถ่วงหรือปิดความสามารถ",
        Modifier: "เล่นฟรีตอนมีการทอยเต๋า เพื่อบวกหรือลบผลรวม 2D6",
        Magic: "การ์ดเวทใช้ครั้งเดียว แสดงผลทันทีแล้วลงกองทิ้ง",
        Challenge: "เล่นฟรีเพื่อท้าทายการลง Hero, Item หรือ Magic ของผู้เล่นอื่น",
        "Gift Card": "ระบบของ Here to Sleigh ใช้ส่งของขวัญดีหรือของขวัญป่วนให้ผู้เล่นอื่น",
        "Party Leader Overlay": "แผ่นทับผู้นำจาก Here to Sleigh เปลี่ยนธีม/ข้อมูลอ้างอิงของ Party Leader",
        Banner: "ระบบ Banner Quest อ้างอิงคลาสเพื่อแย่ง Banner และเปิดเส้นทางชนะด้วย Banner",
        Rule: "การ์ดช่วยจำกติกาหรือ checklist ไม่ใช่การ์ดเล่นหลัก"
    };

    const decks = [
        {
            id: "base",
            name: "Base Deck",
            sourceUrl: sourcePages.base,
            groups: [
                { type: "Party Leader", cardClass: "Bard", cards: ["The Charismatic Song"] },
                { type: "Party Leader", cardClass: "Wizard", cards: ["The Cloaked Sage"] },
                { type: "Party Leader", cardClass: "Ranger", cards: ["The Divine Arrow"] },
                { type: "Party Leader", cardClass: "Fighter", cards: ["The Fist of Reason"] },
                { type: "Party Leader", cardClass: "Guardian", cards: ["The Protecting Horn"] },
                { type: "Party Leader", cardClass: "Thief", cards: ["The Shadow Claw"] },
                { type: "Monster", cards: ["Anuran Cauldron", "Artic Aries", "Bloodwing", "Orthus", "Corrupted Sabretooth", "Crowned Serpent", "Abyss Queen", "Dracos", "Dark Dragon King", "Malamammoth", "Rex Major", "Terratuga", "Mega Slime", "Titan Wyvern", "Warworn Owlbear"] },
                { type: "Hero", cardClass: "Bard", cards: ["Dodgy Dealer", "Fuzzy Cheeks", "Greedy Cheeks", "Lucky Bucky", "Mellow Dee", "Napping Nibbles", "Peanut", "Tipsy Tootie"] },
                { type: "Hero", cardClass: "Fighter", cards: ["Bad Axe", "Bear Claw", "Beary Wise", "Fury Knuckle", "Heavy Bear", "Pan Chucks", "Qi Bear", "Tough Teddy"] },
                { type: "Hero", cardClass: "Guardian", cards: ["Calming Voice", "Guiding Light", "Holy Curselifter", "Iron Resolve", "Mighty Blade", "Radiant Horn", "Vibrant Glow", "Wise Shield"] },
                { type: "Hero", cardClass: "Ranger", cards: ["Bullseye", "Hook", "Lookie Rookie", "Quick Draw", "Serious Grey", "Sharp Fox", "Wildshot", "Wily Red"] },
                { type: "Hero", cardClass: "Thief", cards: ["Kit Napper", "Meowzio", "Plundering Puma", "Shurikitty", "Silent Shadow", "Slippery Paws", "Sly Pickings", "Smooth Mimimeow"] },
                { type: "Hero", cardClass: "Wizard", cards: ["Bun Bun", "Buttons", "Fluffy", "Hopper", "Snowball", "Spooky", "Whiskers", "Wiggles"] },
                { type: "Item", cards: ["Bard Mask", "Decoy Doll", "Fighter Mask", "Guardian Mask", { name: "Particularly Rusty Coin", copies: 2 }, "Ranger Mask", { name: "Really Big Ring", copies: 2 }, "Thief Mask", "Wizard Mask"] },
                { type: "Cursed Item", cards: [{ name: "Curse of the Snake's Eyes", copies: 2 }, "Sealing Key", "Suspiciously Shiny Coin"] },
                { type: "Modifier", cards: [{ name: "Modifier +1/-3", copies: 4 }, { name: "Modifier +2/-2", copies: 9 }, { name: "Modifier +3/-1", copies: 4 }, { name: "Modifier +4", copies: 4 }, { name: "Modifier -4", copies: 4 }] },
                { type: "Magic", cards: ["Call to the Fallen", { name: "Critical Boost", copies: 2 }, { name: "Destructive Spell", copies: 2 }, { name: "Enchanted Spell", copies: 2 }, { name: "Entangling Trap", copies: 2 }, "Forced Exchange", "Forceful Winds", { name: "Winds of Change", copies: 2 }] },
                { type: "Challenge", cards: [{ name: "Challenge", copies: 14 }] },
                { type: "Rule", cards: ["Rule Card"] }
            ]
        },
        {
            id: "monster",
            name: "Monster Expansion",
            sourceUrl: sourcePages.monster,
            groups: [
                { type: "Monster", cards: ["Ancient Megashark", "Clawed Nightmare", "Dragon Wasp", "Goretelodont", "Lumbering Demon", "Possessed Plush", "Reef Ripper", "Saffyre Phoenix", "Scavenger Griffin", "Venomous Gemini", "Voltclaw Lion", "Wandering Behemoth", "Wicked Sea Serpent"] }
            ]
        },
        {
            id: "sorcerer",
            name: "Dragon Sorcerer Expansion",
            sourceUrl: sourcePages.sorcerer,
            groups: [
                { type: "Party Leader", cardClass: "Sorcerer", cards: ["The Fearless Flame"] },
                { type: "Monster", cards: ["Calamity Mongrel"] },
                { type: "Hero", cardClass: "Sorcerer", cards: ["Dragalter", "Dystortivern", "Extraga", "Luut", "Mirroryu", "Oracon", "Renovern", "Shamanaga", "Smok"] },
                { type: "Item", cardClass: "Sorcerer", cards: ["Sorcerer Mask"] },
                { type: "Modifier", cards: ["Modifier +6", "Modifier -6"] },
                { type: "Magic", cards: ["Egg of Fortune"] },
                { type: "Challenge", cardClass: "Sorcerer", cards: ["Sorcerer Challenge"] }
            ]
        },
        {
            id: "warrior-druid",
            name: "Warrior and Druid Expansion",
            sourceUrl: sourcePages.warriorDruid,
            groups: [
                { type: "Party Leader", cardClass: "Druid", cards: ["The Noble Shaman"] },
                { type: "Party Leader", cardClass: "Warrior", cards: ["The Piercing Howl"] },
                { type: "Monster", cards: ["Feral Dragon", "Muscipula Rex"] },
                { type: "Hero", cardClass: "Druid", cards: ["Big Buckley", "Buck Omens", "Doe Fallow", "Glowing Antler", "Maegisty", "Magus Moose", "Majestelk", "Stagguard"] },
                { type: "Hero", cardClass: "Warrior", cards: ["Agile Dagger", "Blinding Blade", "Critical Fang", "Hardened Hunter", "Looting Lupo", "Silent Shield", "Tenacious Timber", "Wolfgang Pack"] },
                { type: "Item", cards: ["Bottomless Bag", "Druid Mask", "Even Bigger Ring", "Temporal Hourglass", "Warrior Mask"] },
                { type: "Cursed Item", cards: ["Cursed Glove", "Soul Tether"] },
                { type: "Modifier", cards: ["Modifier +1/-1", "Modifier +2/-1", "Modifier +4", "Modifier -4"] },
                { type: "Magic", cards: ["Beast Call", "Rapid Refresh"] },
                { type: "Challenge", cards: ["Druid Challenge", "Warrior Challenge"] }
            ]
        },
        {
            id: "berserker-necromancer",
            name: "Berserkers and Necromancers Expansion",
            sourceUrl: sourcePages.berserkerNecromancer,
            groups: [
                { type: "Party Leader", cardClass: "Necromancer", cards: ["The Gnawing Dread"] },
                { type: "Party Leader", cardClass: "Berserker", cards: ["The Raging Manticore"] },
                { type: "Monster", cards: ["Doombringer", "Reptilian Ripper"] },
                { type: "Hero", cardClass: "Necromancer", cards: ["Bark Hexer", "Beholden Retriever", "Bone Collector", "Boston Terror", "Grim Pupper", "Hollow Husk", "Perfect Vessel", "Shadow Saint"] },
                { type: "Hero", cardClass: "Berserker", cards: ["Annihilator", "Brawling Spirit", "Gruesome Gladiator", "Meowntain", "Rabid Beast", "Roaryal Guard", "Vicious Wildcat", "Unbridled Fury"] },
                { type: "Item", cards: ["Berserker Mask", "Biggest Ring Ever", "Goblet of Caffeination", "Necromancer Mask", "Silver Lining"] },
                { type: "Cursed Item", cards: ["Dragon's Bile", "Soulbound Grimoire"] },
                { type: "Modifier", cards: ["Modifier +2/-2", "Modifier +7"] },
                { type: "Magic", cards: [{ name: "Lightning Labrys", copies: 2 }, { name: "Mass Sacrifice", copies: 2 }] },
                { type: "Challenge", cards: ["Berserker Challenge", "Necromancer Challenge"] }
            ]
        },
        {
            id: "sleigh",
            name: "Here to Sleigh Expansion",
            sourceUrl: sourcePages.sleigh,
            groups: [
                { type: "Party Leader Overlay", cards: ["Blue Snowflakes Overlay", "Red Holly Overlay", "Green Bows Overlay", "Purple Candycane Overlay"] },
                { type: "Hero", cardClass: "Fighter", cards: ["Gift Bearer", "Santa Claws"] },
                { type: "Hero", cardClass: "Bard", cards: ["Christmas Carol", "Lil' Drummer Bard"] },
                { type: "Hero", cardClass: "Guardian", cards: ["Shiny Nose", "Snow Slinger"] },
                { type: "Hero", cardClass: "Ranger", cards: ["Prancer", "Shooting Star"] },
                { type: "Hero", cardClass: "Thief", cards: ["Fireplace Fugitive", "Gift Bag Bandit"] },
                { type: "Hero", cardClass: "Wizard", cards: ["Evergreen", "Holly Jolly"] },
                { type: "Item", cards: ["Freshly Sharpened Skates", "Milk and Cookies"] },
                { type: "Challenge", cards: [{ name: "Garbage Gift Challenge", copies: 3 }, { name: "Good Gift Challenge", copies: 3 }] },
                { type: "Gift Card", tags: ["Good Gift"], cards: ["Bag of Holding Gifts", "EZ Mix Potions", "Mythical Mystery", "Rudolph's Nose", "Snows of Time", "The Gift of Destruction", { name: "Warm Socks", copies: 4 }] },
                { type: "Gift Card", tags: ["Bad Gift"], cards: ["Endless Unwrapping", "Gag Gift", { name: "Lump of Coal", copies: 3 }, "Mint Condition Mittens", "Potluck Surprise", "Really Itchy Sweater", "Watchful Medallion", { name: "White Elephant", copies: 3 }] },
                { type: "Rule", cards: [{ name: "Checklist", copies: 4 }] }
            ]
        },
        {
            id: "banner-quest",
            name: "Banner Quest",
            sourceUrl: sourcePages.bannerQuest,
            groups: [
                { type: "Banner", cardClass: "Bard", cards: ["Bard Banner"] },
                { type: "Banner", cardClass: "Berserker", cards: ["Berserker Banner"] },
                { type: "Banner", cardClass: "Druid", cards: ["Druid Banner"] },
                { type: "Banner", cardClass: "Fighter", cards: ["Fighter Banner"] },
                { type: "Banner", cardClass: "Guardian", cards: ["Guardian Banner"] },
                { type: "Banner", cards: ["Hunter's Trophy Banner"] },
                { type: "Banner", cardClass: "Necromancer", cards: ["Necromancer Banner"] },
                { type: "Banner", cardClass: "Ranger", cards: ["Ranger Banner"] },
                { type: "Banner", cardClass: "Thief", cards: ["Thief Banner"] },
                { type: "Banner", cardClass: "Warrior", cards: ["Warrior Banner"] },
                { type: "Banner", cardClass: "Wizard", cards: ["Wizard Banner"] },
                { type: "Monster", cards: ["Chitin Scourge", "Razor Tongue"] },
                { type: "Hero", cards: ["Bone Bruiser", "Crushing Crusader", "Deft Paw", "Grave Howl", "Loopy Lyricist", "Mystical Melody", "Shadow Striker", "Thorn Blade", "Ursine Protector", "Wild Hooves"] },
                { type: "Item", cards: [{ name: "Prism Mask", copies: 3 }] },
                { type: "Cursed Item", cards: [{ name: "Chaos Mask", copies: 2 }, { name: "Morph Mask", copies: 3 }] },
                { type: "Modifier", cards: ["+1/-1 (Bard)", "+1/-1 (Berserker)", "+1/-1 (Druid)", "+1/-1 (Fighter)", "+1/-1 (Guardian)", "+1/-1 (Necromancer)", "+1/-1 (Ranger)", "+1/-1 (Thief)", "+1/-1 (Warrior)", "+1/-1 (Wizard)"] },
                { type: "Magic", cards: [{ name: "Relic Amp", copies: 2 }, { name: "Synergy Boost", copies: 2 }] }
            ]
        },
        {
            id: "kse",
            name: "Kickstarter Exclusive Cards",
            sourceUrl: sourcePages.kse,
            groups: [
                { type: "Party Leader", cardClass: "Fighter/Ranger", cards: ["The Brutal Bow"] },
                { type: "Party Leader", cardClass: "Wizard/Bard", cards: ["The Mystical Maestro"] },
                { type: "Party Leader", cardClass: "Guardian/Thief", cards: ["The Veiled Raider"] },
                { type: "Party Leader", cardClass: "Unstable Unicorn", cards: ["The Unstable Unicorn"] },
                { type: "Hero", cardClass: "Bard", cards: ["Hamlet"] },
                { type: "Hero", cardClass: "Fighter", cards: ["Bearserker"] },
                { type: "Hero", cardClass: "Guardian", cards: ["Complex Illusion"] },
                { type: "Hero", cardClass: "Druid", cards: ["Enchantler"] },
                { type: "Hero", cardClass: "Ranger", cards: ["Hoodwink"] },
                { type: "Hero", cardClass: "Thief", cards: ["Purring Bandit"] },
                { type: "Hero", cardClass: "Warrior", cards: ["Nimble Gray"] },
                { type: "Hero", cardClass: "Wizard", cards: ["Mimi"] },
                { type: "Item", cards: ["Mysterious Feather"] },
                { type: "Cursed Item", cards: ["Mask of Misfortune"] },
                { type: "Modifier", cards: ["Modifier +1/-4", "Modifier +2/-3", "Modifier +3/-2", "Modifier +4/-1"] },
                { type: "Magic", cards: ["Captivating Spell"] },
                { type: "Challenge", cardClass: "Bard", cards: ["Bard Challenge"] },
                { type: "Challenge", cardClass: "Fighter", cards: ["Fighter Challenge"] },
                { type: "Challenge", cardClass: "Guardian", cards: ["Guardian Challenge"] },
                { type: "Challenge", cardClass: "Ranger", cards: ["Ranger Challenge"] },
                { type: "Challenge", cardClass: "Thief", cards: ["Thief Challenge"] },
                { type: "Challenge", cardClass: "Wizard", cards: ["Wizard Challenge"] }
            ]
        },
        {
            id: "vinyl",
            name: "Blind Box Vinyl Exclusive Cards",
            sourceUrl: sourcePages.vinyl,
            groups: [
                { type: "Hero", cardClass: "Necromancer", tags: ["Vinyl Rare"], cards: ["Howl Of The Dead"] },
                { type: "Hero", cardClass: "Berserker", tags: ["Vinyl Rare"], cards: ["Reigning King"] }
            ]
        }
    ];

    function normalizeCard(raw) {
        if (typeof raw === "string") return { name: raw, copies: 1 };
        return { copies: 1, ...raw };
    }

    function slugify(value) {
        return value
            .toLowerCase()
            .replace(/\+/g, " plus ")
            .replace(/-/g, " minus ")
            .replace(/&/g, " and ")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
    }

    function summarize(type, cardClass, tags) {
        const classText = cardClass && classHints[cardClass] ? ` คลาส/ธีม: ${classHints[cardClass]}` : "";
        const tagText = tags.length ? ` หมายเหตุ: ${tags.join(", ")}.` : "";
        return `${typeHints[type] || "การ์ดในชุด Here to Slay"}${classText}${tagText}`;
    }

    function wikiCardUrl(cardName) {
        const slug = cardName.replace(/\s+/g, "_");
        return `https://www.unstablegameswiki.com/index.php?title=Here_To_Slay_-_${encodeURIComponent(slug)}`;
    }

    function wikiImageUrl(fileName) {
        return `https://www.unstablegameswiki.com/index.php/Special:Redirect/file/${encodeURIComponent(fileName)}`;
    }

    function findImageUrl(deckId, cardName) {
        const fileName = imageFiles[`${deckId}::${cardName}`];
        return fileName ? wikiImageUrl(fileName) : "";
    }

    const cards = decks.flatMap((deck) =>
        deck.groups.flatMap((group) =>
            group.cards.map((raw) => {
                const card = normalizeCard(raw);
                const cardClass = card.cardClass || group.cardClass || "";
                const tags = [...(group.tags || []), ...(card.tags || [])];
                const id = `${deck.id}-${slugify(card.name)}`;
                return {
                    id,
                    name: card.name,
                    setId: deck.id,
                    setName: deck.name,
                    type: group.type,
                    cardClass,
                    copies: card.copies,
                    tags,
                    summary: card.summary || summarize(group.type, cardClass, tags),
                    imageUrl: (window.HERE_TO_SLAY_CARD_IMAGES && window.HERE_TO_SLAY_CARD_IMAGES[id]) || findImageUrl(deck.id, card.name),
                    sourceUrl: wikiCardUrl(card.name),
                    deckSourceUrl: deck.sourceUrl
                };
            })
        )
    );

    window.HERE_TO_SLAY_CARD_DATA = {
        updated: "2026-04-26",
        sourcePages,
        decks: decks.map(({ id, name, sourceUrl }) => ({ id, name, sourceUrl })),
        cards
    };
})();
