 const wordsByCategory = {
            Movie: [{ word: "Sholay", clues: ["An iconic action-adventure film.", "Features the characters Jai and Veeru.", "Directed by Ramesh Sippy."] },
        { word: "Dilwale Dulhania Le Jayenge", clues: ["A classic romantic drama.", "Stars Shah Rukh Khan and Kajol.", "Set in Europe and India."] },
        { word: "Lagaan", clues: ["An epic sports drama.", "Set during the British rule in India.", "Aamir Khan stars in it."] },
        { word: "Dangal", clues: ["An inspiring sports drama.", "Based on wrestler Mahavir Singh Phogat.", "Focuses on women's empowerment."] },
        { word: "3 Idiots", clues: ["A comedy-drama about engineering students.", "Critiques the education system.", "Features a memorable friendship."] },
        { word: "Bahubali: The Beginning", clues: ["An epic historical drama.", "Features grand visuals and a strong storyline.", "Focuses on royal intrigue."] },
        { word: "Gully Boy", clues: ["Inspired by the life of Indian street rappers.", "Stars Ranveer Singh and Alia Bhatt.", "Directed by Zoya Akhtar."] },
        { word: "Queen", clues: ["A coming-of-age film.", "Follows a woman's solo honeymoon journey.", "Stars Kangana Ranaut."] },
        { word: "Zindagi Na Milegi Dobara", clues: ["A road trip film.", "Explores friendship and life lessons.", "Features Hrithik Roshan and Farhan Akhtar."] },
        { word: "PK", clues: ["A satirical comedy-drama.", "Stars Aamir Khan as an alien.", "Questions religious beliefs."] },
        { word: "Andhadhun", clues: ["A black comedy thriller.", "Involves a blind pianist.", "Directed by Sriram Raghavan."] },
        { word: "Drishyam", clues: ["A gripping thriller.", "Stars Mohanlal as a father.", "Focuses on family and crime."] },
        { word: "Raja Hindustani", clues: ["A romantic drama.", "Stars Aamir Khan and Karisma Kapoor.", "Set in the backdrop of a rich girl-poor boy love story."] },
        { word: "Masaan", clues: ["A poignant drama.", "Explores themes of life and death.", "Set in Varanasi."] },
        { word: "Uri: The Surgical Strike", clues: ["A military action film.", "Based on the 2016 Uri attack.", "Stars Vicky Kaushal."] },
        { word: "Tumbbad", clues: ["A horror-fantasy film.", "Explores mythology and greed.", "Set in the village of Tumbbad."] },

        // Malayalam Movies
        { word: "Drishyam", clues: ["A gripping thriller.", "Stars Mohanlal as a father.", "Focuses on family and crime."] },
        { word: "Kumbalangi Nights", clues: ["A story about brotherhood.", "Set in a fishing village.", "Explores relationships and family."] },
        { word: "Bangalore Days", clues: ["A coming-of-age film.", "Follows three cousins in Bangalore.", "Explores love and friendship."] },
        { word: "Premam", clues: ["A romantic comedy-drama.", "Stars Nivin Pauly.", "Explores the protagonist's love life."] },
        { word: "Maheshinte Prathikaaram", clues: ["A comedy-drama.", "Stars Fahadh Faasil.", "Focuses on a photographer's revenge."] },
        { word: "Thondimuthalum Driksakshiyum", clues: ["A comedy-drama.", "Involves a stolen gold chain.", "Explores human relationships."] },
        { word: "Ustad Hotel", clues: ["A drama about dreams and aspirations.", "Set against the backdrop of a restaurant.", "Stars Dulquer Salmaan."] },
        { word: "Chola", clues: ["A thriller film.", "Involves complex relationships.", "Features an intense storyline."] },
        { word: "Kalyanam", clues: ["A romantic comedy.", "Focuses on the quirks of love.", "Stars Suresh Gopi."] },
        { word: "Naranathu Thampuran", clues: ["A historical drama.", "Explores Kerala's cultural heritage.", "Features rich storytelling."] },
        
        // International Movies
        { word: "The Shawshank Redemption", clues: ["A story of hope and friendship.", "Set in a prison.", "Based on a novella by Stephen King."] },
        { word: "Inception", clues: ["A mind-bending thriller.", "Directed by Christopher Nolan.", "Features dreams within dreams."] },
        { word: "The Godfather", clues: ["A classic crime film.", "Follows the Corleone family.", "Directed by Francis Ford Coppola."] },
        { word: "Pulp Fiction", clues: ["An iconic film by Quentin Tarantino.", "Weaves multiple storylines.", "Known for its dialogue and style."] },
        { word: "Parasite", clues: ["A South Korean dark comedy thriller.", "Explores class disparity.", "Won the Academy Award for Best Picture."] },
        { word: "Titanic", clues: ["A tragic love story.", "Based on a historical event.", "Features the famous ship sinking."] },
        { word: "The Dark Knight", clues: ["A critically acclaimed superhero film.", "Heath Ledger won an Oscar for his role.", "Features Batman's fight against the Joker."] },
        { word: "Gladiator", clues: ["An epic historical film set in Ancient Rome.", "Follows the story of a betrayed general.", "Directed by Ridley Scott."] },
        { word: "Forrest Gump", clues: ["Follows the life of a simple man.", "Features historical events.", "Stars Tom Hanks."] },
        { word: "Avatar", clues: ["A sci-fi epic directed by James Cameron.", "Set on the fictional planet of Pandora.", "Features groundbreaking visual effects."] },
        { word: "The Matrix", clues: ["A sci-fi film that questions reality.", "Features 'red pill' and 'blue pill' choices.", "Stars Keanu Reeves."] },
        { word: "Black Panther", clues: ["A superhero film that celebrates African culture.", "Part of the Marvel Cinematic Universe.", "Features the fictional nation of Wakanda."] },
        { word: "Fight Club", clues: ["A psychological drama.", "Explores themes of identity and consumerism.", "Stars Brad Pitt and Edward Norton."] },
        { word: "The Silence of the Lambs", clues: ["A psychological horror film.", "Involves a cannibalistic serial killer.", "Stars Jodie Foster and Anthony Hopkins."] },
        { word: "Spirited Away", clues: ["A critically acclaimed animated film.", "Directed by Hayao Miyazaki.", "Explores a mystical world."] },
        { word: "La La Land", clues: ["A modern musical.", "Follows the love story of an aspiring actress and a jazz musician.", "Features vibrant cinematography."] },
                                
            ],
            Anime: [
                { word: "Naruto", clues: ["A popular anime series.", "Features ninjas and villages.", "Created by Masashi Kishimoto."] },
                { word: "Attack on Titan", clues: ["An anime about humanity's struggle.", "Features giant creatures called 'Titans'.", "Created by Hajime Isayama."] },
        
    { word: "Naruto", clues: ["A ninja with dreams of becoming Hokage.", "Features a nine-tailed fox.", "He struggles with loneliness and seeks recognition."] },
    { word: "One Piece", clues: ["Follows a pirate crew searching for treasure.", "The main character is Luffy.", "They seek the One Piece to become the Pirate King."] },
    { word: "Attack on Titan", clues: ["Humans fight against giant humanoid creatures.", "Based on the manga by Hajime Isayama.", "The story involves complex political themes."] },
    { word: "My Hero Academia", clues: ["Set in a world of superpowers called Quirks.", "Follows a boy named Izuku Midoriya.", "He is born without powers but aims to be a hero."] },
    { word: "Death Note", clues: ["A high school student gains a notebook that can kill.", "Features the battle of wits between Light and L.", "Explores themes of justice and morality."] },
    { word: "Demon Slayer", clues: ["Follows a boy who becomes a demon slayer to save his sister.", "The main character is Tanjiro Kamado.", "The series is known for its stunning animation."] },
    { word: "Sword Art Online", clues: ["Players trapped in a virtual reality MMORPG.", "The main protagonist is Kirito.", "They must clear the game to escape or face death."] },
    { word: "Dragon Ball Z", clues: ["Features epic battles and transformations.", "Goku and Vegeta are the main characters.", "The series popularized the shonen genre globally."] },
    { word: "Fullmetal Alchemist", clues: ["Two brothers search for the Philosopher's Stone.", "Themes of sacrifice and redemption.", "They face moral dilemmas involving alchemy."] },
    { word: "Tokyo Ghoul", clues: ["A college student becomes a half-ghoul.", "Focuses on Kaneki's struggles with his identity.", "The series explores the conflict between humans and ghouls."] },
    { word: "One Punch Man", clues: ["Follows a hero who can defeat any opponent with one punch.", "The main character is Saitama.", "He struggles with boredom due to his overwhelming strength."] },
    { word: "Your Name", clues: ["A romantic film about body swapping.", "Involves two teenagers from different timelines.", "The story explores themes of fate and connection."] },
    { word: "Neon Genesis Evangelion", clues: ["A mecha anime that explores psychological themes.", "The protagonist is Shinji Ikari.", "It delves into existential crises and human emotion."] },
    { word: "Tokyo Revengers", clues: ["Follows a man who can time travel to save his girlfriend.", "The main character is Takemichi Hanagaki.", "He tries to change his past to alter the future."] },

    // Character Questions
    { word: "Sailor Moon", clues: ["A magical girl who fights for love and justice.", "Her alter ego is Usagi Tsukino.", "She leads the Sailor Guardians against evil."] },
    { word: "Edward Elric", clues: ["The protagonist of Fullmetal Alchemist.", "He is known for his mechanical arm and brotherhood.", "He seeks to restore his brother's body."] },
    { word: "Goku", clues: ["The main character of Dragon Ball.", "He is a Saiyan with immense fighting power.", "He constantly seeks stronger opponents to challenge."] },
    { word: "Naruto Uzumaki", clues: ["The titular character of Naruto.", "His goal is to become Hokage.", "He possesses the spirit of the nine-tailed fox."] },
    { word: "Luffy", clues: ["The main character of One Piece.", "He has the ability to stretch his body like rubber.", "He dreams of becoming the Pirate King."] },
    { word: "Light Yagami", clues: ["The protagonist of Death Note.", "He seeks to rid the world of criminals.", "He becomes increasingly consumed by his power."] },
    { word: "Mikasa Ackerman", clues: ["A skilled soldier in Attack on Titan.", "She has a strong bond with Eren Yeager.", "She is known for her combat prowess and loyalty."] },
    { word: "Levi Ackerman", clues: ["A captain in the Survey Corps in Attack on Titan.", "Known for his incredible combat skills.", "He has a reputation as humanity's strongest soldier."] },
    { word: "Rem", clues: ["A popular character from Re:Zero.", "She is a maid with a deep bond with Subaru.", "Her loyalty to Subaru is unwavering."] },
    { word: "Inosuke Hashibira", clues: ["A boar-headed fighter in Demon Slayer.", "He is known for his wild personality.", "He fights with dual swords and is very competitive."] },
    { word: "Kaguya Shinomiya", clues: ["A character from Kaguya-sama: Love Is War.", "She is the vice president of the student council.", "She is known for her intelligence and rivalry with Miyuki."] },
    { word: "Natsu Dragneel", clues: ["A dragon slayer wizard in Fairy Tail.", "He is known for his fiery personality.", "He seeks to find his friend and face powerful foes."] },
    { word: "Shinji Ikari", clues: ["The main character in Neon Genesis Evangelion.", "He pilots a giant mech to combat angels.", "He struggles with his self-worth and expectations."] },
    { word: "Saitama", clues: ["The main character of One Punch Man.", "He is bored with his overwhelming power.", "He seeks a worthy opponent to challenge him."] },
    { word: "Hinata Hyuga", clues: ["A shy girl from Naruto.", "She belongs to the Hyuga clan.", "She has a crush on Naruto and is skilled in Gentle Fist."] },
    { word: "Takemichi Hanagaki", clues: ["The protagonist of Tokyo Revengers.", "He can time travel to change the past.", "He is initially a weak hero seeking redemption."] },

            ],
            Indian: [
                { word: "Lagaan", clues: ["An epic sports drama.", "Set during the British rule in India.", "Aamir Khan stars in it."] },
          
    { 
        word: "Bharatanatyam", 
        clues: [
            "A classical Indian dance form originating from Tamil Nadu.", 
            "Characterized by intricate footwork and expressive hand gestures.", 
            "Traditionally performed by women and narrates stories through dance."
        ] 
    },
    { 
        word: "Mughal Architecture", 
        clues: [
            "A style of architecture that blends Persian, Turkish, and Indian elements.", 
            "Examples include the Taj Mahal and Red Fort.", 
            "Known for its grand structures and intricate designs."
        ] 
    },
    { 
        word: "Diwali", 
        clues: [
            "Known as the Festival of Lights celebrated by Hindus.", 
            "Symbolizes the victory of light over darkness and good over evil.", 
            "Involves lighting oil lamps and fireworks."
        ] 
    },
    { 
        word: "Puja", 
        clues: [
            "A ritualistic worship performed in Hinduism.", 
            "Involves offerings to deities, prayers, and rituals.", 
            "Can take place at home or in temples."
        ] 
    },
    { 
        word: "Rangoli", 
        clues: [
            "A decorative art form made on the floor using colored powders and flowers.", 
            "Commonly created during festivals and special occasions.", 
            "Often represents auspicious symbols and motifs."
        ] 
    },
    { 
        word: "Sanskrit", 
        clues: [
            "An ancient language of India, often used in Hindu scriptures.", 
            "Considered the mother of many Indian languages.", 
            "Rich in literature, philosophy, and religious texts."
        ] 
    },
    { 
        word: "Kumbh Mela", 
        clues: [
            "A major Hindu pilgrimage and festival that occurs every 12 years.", 
            "Held at four sacred river confluences in India.", 
            "Known as the largest gathering of human beings in the world."
        ] 
    },
    { 
        word: "Sufi Music", 
        clues: [
            "A genre of music associated with Sufism and spirituality.", 
            "Involves mystical poetry and themes of divine love.", 
            "Popular in regions like Punjab and Rajasthan."
        ] 
    },
    { 
        word: "Kathak", 
        clues: [
            "A classical dance form that originated in North India.", 
            "Known for its intricate footwork, spins, and expressive gestures.", 
            "Often tells stories through dance and music."
        ] 
    },
    { 
        word: "Bhangra", 
        clues: [
            "A lively folk dance from Punjab, often performed during harvest festivals.", 
            "Involves energetic movements and is usually accompanied by music.", 
            "Popularized globally as a celebration of Punjabi culture."
        ] 
    },
    { 
        word: "Ayurveda", 
        clues: [
            "An ancient system of medicine that originated in India.", 
            "Focuses on balance in the body, mind, and spirit for health.", 
            "Uses natural remedies, diet, and lifestyle changes."
        ] 
    },
    { 
        word: "Indian Cuisine", 
        clues: [
            "Known for its diverse flavors and use of spices.", 
            "Includes a variety of regional dishes such as biryani, dosa, and paneer.", 
            "Often vegetarian, but also features meat dishes."
        ] 
    },
    { 
        word: "Vedas", 
        clues: [
            "Ancient sacred texts of Hinduism.", 
            "Composed in Sanskrit and contain hymns, philosophy, and rituals.", 
            "Considered some of the oldest scriptures in the world."
        ] 
    },
    { 
        word: "Namaste", 
        clues: [
            "A common greeting in India, often accompanied by hands pressed together.", 
            "Means 'I bow to you' and expresses respect and acknowledgment.", 
            "Used in both formal and informal settings."
        ] 
    },
    { 
        word: "Kolkata", 
        clues: [
            "Formerly known as Calcutta, it's the cultural capital of India.", 
            "Famous for its literary heritage, arts, and festivals.", 
            "Home to iconic landmarks like Victoria Memorial and Howrah Bridge."
        ] 
    }

                 
            ],
            Kerala: [
    { word: "Onam", clues: ["A harvest festival celebrated in Kerala.", "Involves elaborate feasts and traditional dances.", "It marks the homecoming of the legendary King Mahabali."] },
    { word: "Kathakali", clues: ["A classical dance form from Kerala.", "Characterized by elaborate costumes and makeup.", "Tells stories from Indian epics through dance and drama."] },
    { word: "Ayurveda", clues: ["An ancient system of medicine originating in India.", "Widely practiced in Kerala for healing and wellness.", "Focuses on balancing body, mind, and spirit."] },
    { word: "Backwaters", clues: ["A network of lagoons and lakes in Kerala.", "Famous for houseboat tourism.", "Known for its scenic beauty and tranquility."] },
    { word: "Malabar", clues: ["A region in Kerala known for its diverse culture.", "Famous for its cuisine, including Malabar biryani.", "Home to several historical trade routes."] },
    { word: "Sadhya", clues: ["A traditional vegetarian feast served on a banana leaf.", "Includes rice and various side dishes.", "Commonly enjoyed during festivals and special occasions."] },
    { word: "Elephant", clues: ["Often referred to as the state's cultural icon.", "Featured in many festivals and parades.", "Kerala has a significant population of domesticated elephants."] },
    { word: "Vembanad", clues: ["The largest lake in Kerala.", "Part of the backwaters and a hotspot for tourism.", "Famous for houseboat cruises and bird watching."] },
    { word: "Theyyam", clues: ["A ritual dance form popular in North Kerala.", "Involves elaborate costumes and makeup.", "Associated with worship and is performed in temples."] },
    { word: "Kochi", clues: ["A major port city in Kerala.", "Known for its blend of colonial architecture and modern culture.", "Famous for the Chinese fishing nets on the waterfront."] },
    { word: "Nehru Trophy Boat Race", clues: ["An annual boat race held in Kerala.", "Features traditional snake boats competing on Vembanad Lake.", "Named after India's first Prime Minister, Jawaharlal Nehru."] },
    { word: "Munnar", clues: ["A hill station famous for tea plantations.", "Known for its cool climate and scenic landscapes.", "Popular for trekking and eco-tourism."] },
    { word: "Padmanabhaswamy Temple", clues: ["A famous temple located in Thiruvananthapuram.", "Dedicated to Lord Vishnu and known for its architecture.", "One of the richest temples in the world."] },
    { word: "Puliyodarai", clues: ["A traditional tamarind rice dish from Kerala.", "Often served as prasadam in temples.", "A popular option for festivals and special occasions."] },
    { word: "Kalaripayattu", clues: ["An ancient martial art form originating in Kerala.", "Involves weaponry and hand-to-hand combat techniques.", "Often described as the mother of all martial arts."] },
    { word: "Alleppey", clues: ["Known as the 'Venice of the East'.", "Famous for its backwater tourism and houseboats.", "Home to the annual Nehru Trophy Boat Race."] },
    { word: "Kochi Biennale", clues: ["An international art exhibition held in Kochi.", "Showcases contemporary art from India and around the world.", "Takes place every two years, attracting artists and tourists."] },
            ], Anime:[
    { word: "Naruto", clues: ["A ninja with dreams of becoming Hokage.", "Features a nine-tailed fox.", "He struggles with loneliness and seeks recognition."] },
    { word: "One Piece", clues: ["Follows a pirate crew searching for treasure.", "The main character is Luffy.", "They seek the One Piece to become the Pirate King."] },
    { word: "Attack on Titan", clues: ["Humans fight against giant humanoid creatures.", "Based on the manga by Hajime Isayama.", "The story involves complex political themes."] },
    { word: "My Hero Academia", clues: ["Set in a world of superpowers called Quirks.", "Follows a boy named Izuku Midoriya.", "He is born without powers but aims to be a hero."] },
    { word: "Death Note", clues: ["A high school student gains a notebook that can kill.", "Features the battle of wits between Light and L.", "Explores themes of justice and morality."] },
    { word: "Demon Slayer", clues: ["Follows a boy who becomes a demon slayer to save his sister.", "The main character is Tanjiro Kamado.", "The series is known for its stunning animation."] },
    { word: "Sword Art Online", clues: ["Players trapped in a virtual reality MMORPG.", "The main protagonist is Kirito.", "They must clear the game to escape or face death."] },
    { word: "Dragon Ball Z", clues: ["Features epic battles and transformations.", "Goku and Vegeta are the main characters.", "The series popularized the shonen genre globally."] },
    { word: "Fullmetal Alchemist", clues: ["Two brothers search for the Philosopher's Stone.", "Themes of sacrifice and redemption.", "They face moral dilemmas involving alchemy."] },
    { word: "Tokyo Ghoul", clues: ["A college student becomes a half-ghoul.", "Focuses on Kaneki's struggles with his identity.", "The series explores the conflict between humans and ghouls."] },
    { word: "One Punch Man", clues: ["Follows a hero who can defeat any opponent with one punch.", "The main character is Saitama.", "He struggles with boredom due to his overwhelming strength."] },
    { word: "Your Name", clues: ["A romantic film about body swapping.", "Involves two teenagers from different timelines.", "The story explores themes of fate and connection."] },
    { word: "Neon Genesis Evangelion", clues: ["A mecha anime that explores psychological themes.", "The protagonist is Shinji Ikari.", "It delves into existential crises and human emotion."] },
    { word: "Tokyo Revengers", clues: ["Follows a man who can time travel to save his girlfriend.", "The main character is Takemichi Hanagaki.", "He tries to change his past to alter the future."] },

    // Character Questions
    { word: "Sailor Moon", clues: ["A magical girl who fights for love and justice.", "Her alter ego is Usagi Tsukino.", "She leads the Sailor Guardians against evil."] },
    { word: "Edward Elric", clues: ["The protagonist of Fullmetal Alchemist.", "He is known for his mechanical arm and brotherhood.", "He seeks to restore his brother's body."] },
    { word: "Goku", clues: ["The main character of Dragon Ball.", "He is a Saiyan with immense fighting power.", "He constantly seeks stronger opponents to challenge."] },
    { word: "Naruto Uzumaki", clues: ["The titular character of Naruto.", "His goal is to become Hokage.", "He possesses the spirit of the nine-tailed fox."] },
    { word: "Luffy", clues: ["The main character of One Piece.", "He has the ability to stretch his body like rubber.", "He dreams of becoming the Pirate King."] },
    { word: "Light Yagami", clues: ["The protagonist of Death Note.", "He seeks to rid the world of criminals.", "He becomes increasingly consumed by his power."] },
    { word: "Mikasa Ackerman", clues: ["A skilled soldier in Attack on Titan.", "She has a strong bond with Eren Yeager.", "She is known for her combat prowess and loyalty."] },
    { word: "Levi Ackerman", clues: ["A captain in the Survey Corps in Attack on Titan.", "Known for his incredible combat skills.", "He has a reputation as humanity's strongest soldier."] },
    { word: "Rem", clues: ["A popular character from Re:Zero.", "She is a maid with a deep bond with Subaru.", "Her loyalty to Subaru is unwavering."] },
    { word: "Inosuke Hashibira", clues: ["A boar-headed fighter in Demon Slayer.", "He is known for his wild personality.", "He fights with dual swords and is very competitive."] },
    { word: "Kaguya Shinomiya", clues: ["A character from Kaguya-sama: Love Is War.", "She is the vice president of the student council.", "She is known for her intelligence and rivalry with Miyuki."] },
    { word: "Natsu Dragneel", clues: ["A dragon slayer wizard in Fairy Tail.", "He is known for his fiery personality.", "He seeks to find his friend and face powerful foes."] },
    { word: "Shinji Ikari", clues: ["The main character in Neon Genesis Evangelion.", "He pilots a giant mech to combat angels.", "He struggles with his self-worth and expectations."] },
    { word: "Saitama", clues: ["The main character of One Punch Man.", "He is bored with his overwhelming power.", "He seeks a worthy opponent to challenge him."] },
    { word: "Hinata Hyuga", clues: ["A shy girl from Naruto.", "She belongs to the Hyuga clan.", "She has a crush on Naruto and is skilled in Gentle Fist."] },
    { word: "Takemichi Hanagaki", clues: ["The protagonist of Tokyo Revengers.", "He can time travel to change the past.", "He is initially a weak hero seeking redemption."] },

            ]
        };
       

        let currentCategory = '';
        let currentWord = '';
        let currentClue1 = '';
        let currentClue2 = '';
        let currentExtraClue = ''; // Make sure this is set in `nextWord` function
        let attempts = 5;
        let score = 0;
        let highScore = 0;
        let coins = 0;
        let shuffledWords = [];
        let extraClueUsed = false;
        
        function selectCategory(category) {
            currentCategory = category;
            shuffledWords = wordsByCategory[category].sort(() => Math.random() - 0.5);
            document.getElementById("categorySelection").style.display = "none";
            document.getElementById("game").style.display = "block";
            nextWord();
        }
        function nextWord() {
    attempts = 5;
    extraClueUsed = false; // Reset extra clue usage for the new word

    if (shuffledWords.length === 0) {
        document.getElementById("message").innerText = "Game Over! You've guessed all the words.";
        document.getElementById("guess").disabled = true;
        document.getElementById("nextButton").disabled = true; // Disable Next button
        return;
    }

    const { word, clues } = shuffledWords.pop();
    currentWord = word;
    currentClue1 = clues[0];
    currentClue2 = clues[1];
    currentExtraClue = clues[2]; // Ensure this is assigned properly

    document.getElementById("clue1").innerText = `Clue 1: ${currentClue1}`;
    document.getElementById("clue2").innerText = `Clue 2: ${currentClue2}`;
    document.getElementById("guess").value = '';
    document.getElementById("message").innerText = '';
    document.getElementById("attempts").innerText = `Attempts left: ${attempts}`;
    document.getElementById("nextButton").disabled = true; // Disable Next button initially
    document.getElementById("iDontKnowButton").disabled = false; // Enable "I Don't Know" button for new word
}

function checkGuess() {
    const guess = document.getElementById("guess").value.trim();
    const correctSound = document.getElementById("correctSound");
    const wrongSound = document.getElementById("wrongSound");

    if (guess === "") {
        document.getElementById("message").innerText = "Please enter a guess.";
        return;
    }

    const distance = levenshteinDistance(guess.toLowerCase(), currentWord.toLowerCase());

    if (guess.toLowerCase() === currentWord.toLowerCase()) {
        score += 10;
        coins += 5;
        document.getElementById("message").innerText = `Correct! The word is '${currentWord}'.`;
        document.getElementById("coins").innerText = `Coins: ${coins}`;
        document.getElementById("score").innerText = `Score: ${score}`;
        
        // Play correct sound
        correctSound.play();

        if (score > highScore) {
            highScore = score;
            document.getElementById("highScore").innerText = `High Score: ${highScore}`;
        }

        // Enable the Next button
        document.getElementById("nextButton").disabled = false;
        
        // Disable the "I Don't Know" button
        document.getElementById("iDontKnowButton").disabled = true;
    } else if (distance <= 1) { // If the guess is very close (1 edit away)
        document.getElementById("message").innerText = `Almost there! The word is very close to '${guess}'. Try again.`;
        wrongSound.play();
    } else {
        attempts--;
        document.getElementById("attempts").innerText = `Attempts left: ${attempts}`;
        
        // Play wrong sound
        wrongSound.play();

        if (attempts === 0) {
            const gameOverSound = document.getElementById("gameOverSound");
            document.getElementById("message").innerText = `Game Over! The word was '${currentWord}'.`;
            document.getElementById("nextButton").disabled = false; // Enable Next button when out of attempts
            document.getElementById("guess").disabled = true; // Disable input when game is over
            
            // Play game over sound
            gameOverSound.play();
        } else {
            document.getElementById("message").innerText = "Wrong guess. Try again!";
        }
    }

    document.getElementById("guess").value = '';
}

function nextWord() {
    attempts = 5;
    extraClueUsed = false; // Reset extra clue usage for the new word

    if (shuffledWords.length === 0) {
        document.getElementById("message").innerText = "Game Over! You've guessed all the words.";
        document.getElementById("guess").disabled = true;
        document.getElementById("nextButton").disabled = true; // Disable Next button
        document.getElementById("iDontKnowButton").disabled = true; // Disable "I Don't Know" button
        return;
    }

    const { word, clues } = shuffledWords.pop();
    currentWord = word;
    currentClue1 = clues[0];
    currentClue2 = clues[1];
    currentExtraClue = clues[2]; // Ensure this is assigned properly

    document.getElementById("clue1").innerText = `Clue 1: ${currentClue1}`;
    document.getElementById("clue2").innerText = `Clue 2: ${currentClue2}`;
    document.getElementById("guess").value = '';
    document.getElementById("message").innerText = '';
    document.getElementById("attempts").innerText = `Attempts left: ${attempts}`;
    document.getElementById("nextButton").disabled = true; // Disable Next button initially
    document.getElementById("iDontKnowButton").disabled = false; // Enable "I Don't Know" button for new word
}

function iDontKnow() {
    document.getElementById("message").innerText = `You chose not to answer. The word was '${currentWord}'.`;
    document.getElementById("iDontKnowButton").disabled = true; // Disable "I Don't Know" button
    nextWord(); // Automatically go to the next word
}


        function getExtraClue() {
            if (coins >= 10 && !extraClueUsed) {
                coins -= 10;
                document.getElementById("coins").innerText = `Coins: ${coins}`;
                document.getElementById("extraClue").innerText = `Extra Clue: ${currentExtraClue}`;
                document.getElementById("extraClue").style.display = "block";
                extraClueUsed = true;
            } else if (extraClueUsed) {
                document.getElementById("message").innerText = "Extra clue already used for this word!";
            } else {
                document.getElementById("message").innerText = "Not enough coins for an extra clue!";
            }
        }
        
        function skipWord() {
            attempts = 0; // Set attempts to 0 to indicate skipping the word
            document.getElementById("message").innerText = `You skipped! The word was '${currentWord}'.`;
            document.getElementById("nextButton").disabled = false; // Enable next button to proceed
            document.getElementById("guess").disabled = true; // Disable input when skipped
        }function quitGame() {
            // Hide the game section
            document.getElementById("game").style.display = "none";
            // Show the category selection menu
            document.getElementById("categorySelection").style.display = "block";
            
            // Reset game state if necessary
            resetGame();
        }
        
        function resetGame() {
            // Reset any game-specific variables and states
            currentWord = '';
            currentClue1 = '';
            currentClue2 = '';
            currentExtraClue = '';
            attempts = 5;
            score = 0;
            extraClueUsed = false;
            shuffledWords = [];
            
            // Update the UI to reflect the reset state
            document.getElementById("guess").value = '';
            document.getElementById("message").innerText = '';
            document.getElementById("attempts").innerText = '';
            document.getElementById("clue1").innerText = '';
            document.getElementById("clue2").innerText = '';
            document.getElementById("coins").innerText = `Coins: ${coins}`;
            document.getElementById("score").innerText = `Score: ${score}`;
            document.getElementById("highScore").innerText = `High Score: ${highScore}`;
            document.getElementById("nextButton").disabled = true;
            document.getElementById("guess").disabled = false;
            document.getElementById("extraClue").style.display = "none";
        }
        function levenshteinDistance(a, b) {
            const matrix = [];
            
            for (let i = 0; i <= b.length; i++) {
                matrix[i] = [i];
            }
            
            for (let j = 0; j <= a.length; j++) {
                matrix[0][j] = j;
            }
            
            for (let i = 1; i <= b.length; i++) {
                for (let j = 1; j <= a.length; j++) {
                    if (b.charAt(i - 1) === a.charAt(j - 1)) {
                        matrix[i][j] = matrix[i - 1][j - 1];
                    } else {
                        matrix[i][j] = Math.min(
                            matrix[i - 1][j - 1] + 1, // substitution
                            matrix[i][j - 1] + 1, // insertion
                            matrix[i - 1][j] + 1 // deletion
                        );
                    }
                }
            }
            
            return matrix[b.length][a.length];
        }

        
        // Initialize the game by showing the category selection
        document.getElementById("categorySelection").style.display = "block";
        