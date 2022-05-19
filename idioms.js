const data = [
    {
        '': 0,
        text: 'A bird in the hand is worth two in the bush',
        explanation:
            "The proverb 'A bird in the hand is worth two in the bush' means  that it's\n          better to hold onto something you  have rather than take the risk of getting something better  which may come to nothing.",
        origin: 'English',
    },
    {
        '': 1,
        text: 'A bunch of fives',
        explanation:
            "'A bunch of fives' is a slang term for\n          a fist, especially one used for punching. The\n          fives are the four fingers and the thumb.",
        origin: 'English',
    },
    {
        '': 2,
        text: 'A chain is only as strong as its weakest link',
        explanation:
            "The proverb 'A chain is only as strong as its weakest link' has a literal meaning, although the 'weakest link' referred to is figurative and usually applies to a person or technical feature rather than the link of an actual chain.",
        origin: 'English',
    },
    {
        '': 3,
        text: 'A change is as good as a rest',
        explanation:
            "A  change is as good as a rest is a proverb that expresses, in a fairly straightforward literal way, the notion that a change from one's regular occupation is as restorative as a holiday.",
        origin: 'English',
    },
    {
        '': 4,
        text: 'A countenance more in sorrow than in anger',
        explanation:
            'Literal meaning - a person or thing that displays more  sadness than  anger.',
        origin: 'English',
    },
    {
        '': 5,
        text: 'A Daniel come to judgement',
        explanation:
            'Someone who makes a wise judgement about something that has previously proven difficult to resolve.',
        origin: 'English',
    },
    {
        '': 6,
        text: 'A diamond in the rough',
        explanation:
            'Someone who is basically good hearted but lacking social graces and respect for the law.',
        origin: 'English',
    },
    {
        '': 7,
        text: 'A diamond is forever',
        explanation: "Advertising\nslogan for De Beers' diamonds.",
        origin: 'English',
    },
    {
        '': 8,
        text: 'A different kettle of fish',
        explanation:
            "'A different kettle of fish' is an alternative to what has been previously considered; a different thing altogether.",
        origin: 'English',
    },
    {
        '': 9,
        text: 'A dish fit for the gods',
        explanation: 'An offering of high quality.',
        origin: 'English',
    },
    {
        '': 10,
        text: "A dog is a man's best friend",
        explanation:
            'An animal that performs valuable service to humans, often with reference to dogs.',
        origin: 'English',
    },
    {
        '': 11,
        text: 'A drop in the bucket',
        explanation:
            'A drop in the bucket is a very small and insignificant proportion of the whole.',
        origin: 'English',
    },
    {
        '': 12,
        text: 'A drop in the ocean',
        explanation:
            'A drop in the bucket is a very small and insignificant proportion of the whole.',
        origin: 'English',
    },
    {
        '': 13,
        text: 'A fate worse than death',
        explanation:
            'Any misfortune that would make life unlivable, especially rape\n or loss of virginity. The phrase was formerly a euphemism for rape.',
        origin: 'English',
    },
    {
        '': 14,
        text: "A feather in one's cap",
        explanation: 'A symbol of honour and achievement.',
        origin: 'English',
    },
    {
        '': 15,
        text: 'A fish rots from the head down',
        explanation:
            'When an organization or state fails, it is the leadership that is the root cause.',
        origin: 'English',
    },
    {
        '': 16,
        text: 'A fish out of water',
        explanation: 'Someone who is in a situation they are unsuited to.',
        origin: 'English',
    },
    {
        '': 17,
        text: 'A fly in the ointment',
        explanation:
            'A fly in the ointment is a small but irritating flaw that spoils the whole. In the 20th century the expression has also come to be used to describe a small flaw that comes to light to spoil  an otherwise faultless plan.',
        origin: 'English',
    },
    {
        '': 18,
        text: 'A fool and his money are soon parted',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 19,
        text: "A fool's paradise",
        explanation: 'A state of happiness based on false hope.',
        origin: 'English',
    },
    {
        '': 20,
        text: 'A foot in the door',
        explanation:
            'An introduction or way in to something, made in order that progress may be made later.',
        origin: 'English',
    },
    {
        '': 21,
        text: 'A foregone conclusion',
        explanation:
            'A decision made before the evidence for it is known. An inevitable conclusion.',
        origin: 'English',
    },
    {
        '': 22,
        text: 'A friend in need is a friend indeed',
        explanation:
            "There are various interpretations of the meaning of 'a friend in need is a friend indeed'.",
        origin: 'English',
    },
    {
        '': 23,
        text: 'A golden key can open any door',
        explanation:
            "'A golden key opens any door' is the opinion that sufficient money, or the promise of it, will allow the possessor of it to do anything they wish.",
        origin: 'English',
    },
    {
        '': 24,
        text: 'A good man is hard to find',
        explanation:
            'A modern-day proverb, bemoaning the difficulty of finding a suitable male partner.',
        origin: 'English',
    },
    {
        '': 25,
        text: 'A hard man is good to find',
        explanation:
            'A risquÃ© comic play\non words on a good man is hard to find.',
        origin: 'English',
    },
    {
        '': 26,
        text: 'A hiding to nothing - On',
        explanation:
            "To be faced with a situation which is pointless, as a successful outcome is impossible. This is usually expressed in terms of a sporting contest in which one of two outcomes is foreseen, either a hiding or nothing. The 'to' in the phrase indicates alternative outcomes, as in terms like '6 to 1' or 'dollars to doughnuts'.",
        origin: 'English',
    },
    {
        '': 27,
        text: 'A horse, a horse, my kingdom for a horse',
        explanation:
            "'A horse, a horse, my kingdom for a horse' is one of Shakespeare's best known lines. The king spoke the line in Act V of the play Richard III, after losing his horse in battle.",
        origin: 'English',
    },
    {
        '': 28,
        text: 'A house divided against itself cannot stand',
        explanation: 'Literal meaning (house meaning household).',
        origin: 'English',
    },
    {
        '': 29,
        text: 'A journey of a thousand miles begins with a single step',
        explanation:
            "The proverb 'a journey of a thousand miles begins with a single step' puts forward the notion that, however difficult a task is, you can only complete it if you first start it.",
        origin: 'English',
    },
    {
        '': 30,
        text: 'A knight in shining armour',
        explanation:
            'A knight in shining armour is a person, usually a man, who comes to the aid of another, usually a woman, in a gallant and courteous manner.',
        origin: 'English',
    },
    {
        '': 31,
        text: 'À la carte',
        explanation:
            "'A la carte' means 'on the menu', with each dish separately priced.",
        origin: 'English',
    },
    {
        '': 32,
        text: 'À la mode',
        explanation:
            'Fashionable. Also, in the USA, a dessert served with ice cream.',
        origin: 'English',
    },
    {
        '': 33,
        text: "A legend in one's own lifetime",
        explanation:
            "'A legend in their own lifetime' refers to  a living person of considerable fame.",
        origin: 'English',
    },
    {
        '': 34,
        text: 'A leopard cannot change its spots',
        explanation:
            "The\n          proverbial saying 'A leopard cannot change its spots' expresses the notion that things cannot change their innate nature. It is normally used to suggest that  people who have done bad things will always be bad people.",
        origin: 'English',
    },
    {
        '': 35,
        text: 'A little bird told me',
        explanation: 'I was told by a private or secret source.',
        origin: 'English',
    },
    {
        '': 36,
        text: 'A little knowledge is a dangerous thing',
        explanation:
            "The proverb 'A little knowledge is a dangerous thing' expresses the idea that a small amount of knowledge can mislead people into thinking that they are more expert than they really are, which can lead to mistakes being made.",
        origin: 'English',
    },
    {
        '': 37,
        text: 'A little of what you fancy does you good',
        explanation: 'A euphemistic way of expressing the benefits of sex.',
        origin: 'English',
    },
    {
        '': 38,
        text: 'A load of cobblers',
        explanation: 'Nonsense, rubbish.',
        origin: 'English',
    },
    {
        '': 39,
        text: 'A load of codswallop',
        explanation: 'Nonsense.',
        origin: 'English',
    },
    {
        '': 40,
        text: 'A man after my own heart',
        explanation: 'A\nkindred spirit - someone I can agree with.',
        origin: 'English',
    },
    {
        '': 41,
        text: 'A man who is his own lawyer has a fool for a client',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 42,
        text: "A millstone around one's neck",
        explanation: 'A heavy and inescapable burden or responsibility.',
        origin: 'English',
    },
    {
        '': 43,
        text: 'A ministering angel shall my sister be',
        explanation:
            'To minister is to serve, or act as a subordinate agent. So a ministering angel is a kind-hearted person, providing help and comfort.',
        origin: 'English',
    },
    {
        '': 44,
        text: 'A miss is as good as a mile',
        explanation:
            'A narrow miss is as bad as a wide miss - they are both misses.',
        origin: 'English',
    },
    {
        '': 45,
        text: 'A nation of shopkeepers',
        explanation:
            'This proverbial saying has a straightforward literal meaning, although it is intended to imply criticism of the English as a nation with little ambition.',
        origin: 'English',
    },
    {
        '': 46,
        text: 'A nest of vipers',
        explanation: 'A group of iniquitous people, congregating together.',
        origin: 'English',
    },
    {
        '': 47,
        text: 'A no-brainer',
        explanation:
            'Something that requires little mental effort or intelligence to perform or understand. The term is often applied to decisions which are straightorward or sometimes to people who appear to lack intelligence.',
        origin: 'English',
    },
    {
        '': 48,
        text: 'A nod is as good as a wink',
        explanation:
            "'A nod is as good as a wink' expresses the idea that, to a person who is ready to understand or undertake something, any subtle signalling of it is sufficient. The context is usually of some undertaking that is borderline illegal or of sexual innuendo.",
        origin: 'English',
    },
    {
        '': 49,
        text: 'A norange',
        explanation:
            "In 1914 the Danish grammarian Otto Jespersen coined the term 'metanalysis'. That's rather a dry start to a piece on what is a lively and intriguing facet of the English language. To find out what prompted Jespersen to believe that we needed a new word, let's bring in a stage prop - the humble orange.",
        origin: 'English',
    },
    {
        '': 50,
        text: 'A penny for your thoughts',
        explanation:
            'An invitation to a person lost in thought to share his or her preoccupation.',
        origin: 'English',
    },
    {
        '': 51,
        text: 'A picture is worth a thousand words',
        explanation:
            'A picture tells a story just as well as, if not better than, a lot of written words.',
        origin: 'English',
    },
    {
        '': 52,
        text: 'A piece of the action',
        explanation: 'A share in an activity, or in its profits.',
        origin: 'English',
    },
    {
        '': 53,
        text: 'A pig in a poke',
        explanation:
            'A pig in a poke is an\n              offer or deal that is foolishly accepted without being examined first.',
        origin: 'English',
    },
    {
        '': 54,
        text: 'A place for everything and everything in its place',
        explanation:
            "The proverbial notion that there should be 'a place for everything and everything in its place' is the idea that everything should have somewhere to be stored  and that it should be tidily returned there when not in use.",
        origin: 'English',
    },
    {
        '': 55,
        text: 'A plague on both your houses',
        explanation: 'A frustrated\n curse on both sides of an argument.',
        origin: 'English',
    },
    {
        '': 56,
        text: 'A priori',
        explanation: 'From the previous.',
        origin: 'English',
    },
    {
        '': 57,
        text: 'A red rag to a bull',
        explanation:
            'To wave a red rag to a bull is to  deliberately provoke it. More generally, the expression denotes any deliberate action intended to bring about an adverse reaction.',
        origin: 'English',
    },
    {
        '': 58,
        text: 'A riddle wrapped up in an enigma',
        explanation:
            "'A riddle wrapped up in an enigma' is a puzzle - something especially difficult to understand or to solve.",
        origin: 'English',
    },
    {
        '': 59,
        text: 'A rolling stone gathers no moss',
        explanation:
            'Someone who does not settle in one place rarely prospers.',
        origin: 'English',
    },
    {
        '': 60,
        text: 'A rose by any other name would smell as sweet',
        explanation:
            "The saying 'A rose by any other name would smell as sweet' means that what matters is what something is, not what it is called.",
        origin: 'English',
    },
    {
        '': 61,
        text: 'A rose is a rose is a rose',
        explanation:
            "The meaning most often attributed to 'a rose is a rose is a rose' is the notion that, when all is said and done, a thing is what it is. This is in similar vein to Shakespeare's 'a rose by any other name would smell as sweet'. However, that's not the interpretation given by the author of the phrase - see below.",
        origin: 'English',
    },
    {
        '': 62,
        text: 'A safe pair of hands',
        explanation:
            'A\nreliable, if somewhat dull, person who can be entrusted not to make a mistake\nwith a task.',
        origin: 'English',
    },
    {
        '': 63,
        text: 'A sea change',
        explanation: 'A\nradical change or transformation.',
        origin: 'English',
    },
    {
        '': 64,
        text: 'A skeleton in the closet',
        explanation:
            "The expression 'a skeleton in the closet' refers to a secret source of shame, potentially ruinous if exposed, which a person or family makes efforts to conceal.",
        origin: 'English',
    },
    {
        '': 65,
        text: 'A sledgehammer to crack a nut',
        explanation:
            "To use 'a sledgehammer to crack a nut' means to use disproportionate force or expense to overcome a minor problem.",
        origin: 'English',
    },
    {
        '': 66,
        text: 'A shot in the arm',
        explanation: 'A\nstimulus.',
        origin: 'English',
    },
    {
        '': 67,
        text: 'A sight for sore eyes',
        explanation:
            'A welcome sight;  someone or something you are glad to see.',
        origin: 'English',
    },
    {
        '': 68,
        text: 'A sorry sight',
        explanation:
            'A regrettable and unwelcome aspect or feature. Now also used to mean something or someone of untidy appearance.',
        origin: 'English',
    },
    {
        '': 69,
        text: 'A stitch in time saves nine',
        explanation:
            "A 'stitch in time' is a timely effort that will prevent more work later.",
        origin: 'English',
    },
    {
        '': 70,
        text: "A stone's throw",
        explanation: 'A\nshort distance.',
        origin: 'English',
    },
    {
        '': 71,
        text: 'A thing of beauty is a joy forever',
        explanation: 'The experience of beauty is blissful and lasting.',
        origin: 'English',
    },
    {
        '': 72,
        text: "A tinker's damn",
        explanation: 'Something that is insignificant or worthless.',
        origin: 'English',
    },
    {
        '': 73,
        text: 'A turn up for the books',
        explanation: 'An unexpected piece of good fortune.',
        origin: 'English',
    },
    {
        '': 74,
        text: 'A watched pot never boils',
        explanation:
            "The proverbial expression 'a watched pot never boils' refers to the feeling time seems to go slower when you are anxiously waiting for something to happen.",
        origin: 'English',
    },
    {
        '': 75,
        text: "A wolf in sheep's clothing",
        explanation:
            "'A wolf in sheep's clothing' is someone who hides malicious intent under the guise of kindliness.",
        origin: 'English',
    },
    {
        '': 76,
        text: 'A woman needs a man like a fish needs a bicycle',
        explanation:
            'A woman needs a man like a fish needs a bicycle" is a\nfeminist slogan, humorously expressing the view that a woman can live her life perfectly well without a man.',
        origin: 'English',
    },
    {
        '': 77,
        text: "A woman's place is in the home",
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 78,
        text: 'A word in edgeways',
        explanation:
            'Join a conversation in which another is speaking continually and leaving little opportunity for others.',
        origin: 'English',
    },
    {
        '': 79,
        text: 'A word in your shell-like',
        explanation: 'I\nwould like to talk to you.',
        origin: 'English',
    },
    {
        '': 80,
        text: "A young man's fancy",
        explanation:
            "The expression 'A young man's fancy' alludes to  light  thoughts of romantic love.",
        origin: 'English',
    },
    {
        '': 81,
        text: 'A1 at Lloyds',
        explanation: 'The highest quality.',
        origin: 'English',
    },
    {
        '': 82,
        text: 'Abandon all hope ye who enter here',
        explanation:
            "'Abandon hope all ye who enter here' is the\n supposed inscription at the entrance to Hell.",
        origin: 'English',
    },
    {
        '': 83,
        text: 'Abide with me',
        explanation:
            "The name of the well-known Christian hymn, written by Henry\n Francis Lyte in 1847. A plea for God to be always present, in one's life and through death.",
        origin: 'English',
    },
    {
        '': 84,
        text: 'About face',
        explanation: 'Change direction.',
        origin: 'English',
    },
    {
        '': 85,
        text: 'About turn',
        explanation: 'Change direction.',
        origin: 'English',
    },
    {
        '': 86,
        text: 'Above board',
        explanation: 'Openly; without\nany trickery.',
        origin: 'English',
    },
    {
        '': 87,
        text: 'Abracadabra',
        explanation:
            'An exclamation used by conjurers when performing  tricks.',
        origin: 'English',
    },
    {
        '': 88,
        text: 'Absence makes the heart grow fonder',
        explanation:
            'The missing of a person or thing increases the desire for it.',
        origin: 'English',
    },
    {
        '': 89,
        text: 'Absent without leave',
        explanation: 'Absent without permission.',
        origin: 'English',
    },
    {
        '': 90,
        text: 'Absolute power corrupts absolutely',
        explanation:
            "The proverbial saying 'power corrupts; absolute power corrupts absolutely'  conveys the opinion that, as a person's power increases, their moral sense diminishes.",
        origin: 'English',
    },
    {
        '': 91,
        text: 'Accidentally on purpose',
        explanation: 'Deliberately,\nbut feigning accident.',
        origin: 'English',
    },
    {
        '': 92,
        text: 'Accidents will happen',
        explanation: 'Things sometimes go wrong, despite our best efforts.',
        origin: 'English',
    },
    {
        '': 93,
        text: 'According to Hoyle',
        explanation:
            'In accord with the highest authority; in accord with a strict set of rules.',
        origin: 'English',
    },
    {
        '': 94,
        text: 'Ace in the hole',
        explanation: 'Something\nthat can supply a sure victory when revealed.',
        origin: 'English',
    },
    {
        '': 95,
        text: "Achilles' heel",
        explanation:
            "An Achilles' heel is a \nweak or vulnerable factor - especially one where all other components are strong.",
        origin: 'English',
    },
    {
        '': 96,
        text: 'Acid test',
        explanation: 'A\nsure test, giving an incontestable result.',
        origin: 'English',
    },
    {
        '': 97,
        text: 'Acronyms',
        explanation:
            'Acronyms are words which are formed from the initial letters of other words.',
        origin: 'English',
    },
    {
        '': 98,
        text: 'Across the board',
        explanation: 'Embracing all classes or categories without exception.',
        origin: 'English',
    },
    {
        '': 99,
        text: 'Act of God',
        explanation:
            'An\nact which is accepted legally as being outside human control.',
        origin: 'English',
    },
    {
        '': 100,
        text: 'Act the giddy goat',
        explanation: 'Behave foolishly.',
        origin: 'English',
    },
    {
        '': 101,
        text: 'Action man',
        explanation: 'A dynamic, macho type of man.',
        origin: 'English',
    },
    {
        '': 102,
        text: 'Actions speak louder than words',
        explanation:
            "This proverb express the idea that a person's actions are a better indication of their character than what he or she says.",
        origin: 'English',
    },
    {
        '': 103,
        text: "Adam's ale",
        explanation: 'Water.',
        origin: 'English',
    },
    {
        '': 104,
        text: 'Adversity makes strange bedfellows',
        explanation:
            "The proverbial saying 'adversity makes strange bedfellows' suggests that, in times of trouble, people who wouldn't normally associate with each other may form an alliance.",
        origin: 'English',
    },
    {
        '': 105,
        text: 'After the fact',
        explanation:
            "'After the fact' means after an action is performed; in legal parlance, after a crime has been committed.",
        origin: 'English',
    },
    {
        '': 106,
        text: 'Aga saga',
        explanation:
            "An 'aga saga' is a genre of popular fiction usually set in comfortable middle-class English homes.",
        origin: 'English',
    },
    {
        '': 107,
        text: 'Against the grain',
        explanation: "Against\none's inclination or natural tendency.",
        origin: 'English',
    },
    {
        '': 108,
        text: 'Age before beauty',
        explanation:
            'Older people should be given precedence over the younger and, by implication, more beautiful. This is normally used jocularly, often by the older person in order to flatter the younger.',
        origin: 'English',
    },
    {
        '': 109,
        text: 'Age cannot wither her, nor custom stale her infinite variety',
        explanation: "From\nShakespeare's Antony and Cleopatra, 1606:",
        origin: 'English',
    },
    {
        '': 110,
        text: 'Agree to disagree',
        explanation:
            'Set aside an irreconcilable difference in order to maintain a civil dialogue.',
        origin: 'English',
    },
    {
        '': 111,
        text: 'Aid and abet',
        explanation:
            'To help and encourage, usually in the commission of a crime or anti-social act.',
        origin: 'English',
    },
    {
        '': 112,
        text: 'Aide-mémoire',
        explanation:
            "'To aid memory' - a literal translation\nfrom the French.",
        origin: 'English',
    },
    {
        '': 113,
        text: 'Air kiss',
        explanation:
            'The act of greeting (or sometimes of farewell) by making a kissing gesture into the air while brushing cheeks - or in a near miss.',
        origin: 'English',
    },
    {
        '': 114,
        text: 'Air quotes',
        explanation:
            'A gesture with raised pairs of fingers, when making a statement, to simulate quotation marks. It indicates that what is being said is ironic or otherwise not to be taken verbatim.',
        origin: 'English',
    },
    {
        '': 115,
        text: 'Al fresco',
        explanation:
            "From the Italian, literally translated as 'in the fresh'. In English, used to mean either 'in the open air' or, where specifically related to mural painting, 'on fresh plaster'.",
        origin: 'English',
    },
    {
        '': 116,
        text: 'Alas, poor Yorick! I knew him, Horatio',
        explanation:
            "The dramatic line 'Alas, poor Yorick! I knew him, Horatio' comes from Shakespeare's Hamlet. Hamlet speaks the line in a graveyard, as a meditation on the fragility of life, as he looks at the skull of  Yorick.",
        origin: 'English',
    },
    {
        '': 117,
        text: 'Alike as two peas in a pod',
        explanation: "'Two peas in a pod' are two identical items or people.",
        origin: 'English',
    },
    {
        '': 118,
        text: 'Alive and kicking',
        explanation: 'Definitely alive; lively and active.',
        origin: 'English',
    },
    {
        '': 119,
        text: 'All agog',
        explanation: 'Excited, in high spirits; in eager expectation.',
        origin: 'English',
    },
    {
        '': 120,
        text: 'All at sea',
        explanation: 'In a state of confusion and disorder.',
        origin: 'English',
    },
    {
        '': 121,
        text: 'All fingers and thumbs',
        explanation:
            "Clumsy, unable to hold things steadily in one's hands. 'All fingers and thumbs' is how we might describe ourselves during a temporary loss of manual dexterity.",
        origin: 'English',
    },
    {
        '': 122,
        text: 'All Greek to me',
        explanation: 'It was unintelligible to me.',
        origin: 'English',
    },
    {
        '': 123,
        text: 'All in all',
        explanation: 'All things having been taken into account.',
        origin: 'English',
    },
    {
        '': 124,
        text: 'All intents and purposes',
        explanation: 'In effect; for all practical purposes.',
        origin: 'English',
    },
    {
        '': 125,
        text: 'All mouth and no trousers',
        explanation:
            "'All mouth and no trousers' means 'loud-mouthed and boastful, but lacking in substance'.",
        origin: 'English',
    },
    {
        '': 126,
        text: 'All of a sudden',
        explanation: "'All of a sudden' means suddenly.",
        origin: 'English',
    },
    {
        '': 127,
        text: 'All present and correct',
        explanation: 'Everything, or everyone, is accounted for.',
        origin: 'English',
    },
    {
        '': 128,
        text: 'All publicity is good publicity',
        explanation:
            "'There is no such thing as bad publicity' is the notion that all mentions in the media aid a person's cause, even if they put them in a bad light.",
        origin: 'English',
    },
    {
        '': 129,
        text: 'All singing, all dancing',
        explanation:
            'Full of verve and vitality; more recently - with many features or attributes.',
        origin: 'English',
    },
    {
        '': 130,
        text: 'All systems go',
        explanation:
            "'All systems go' is what someone might say when all systems are functional and ready to proceed.",
        origin: 'English',
    },
    {
        '': 131,
        text: 'All that glitters is not gold / All that glisters is not gold',
        explanation:
            "The proverbial saying 'All that glitters is not gold' means that not everything that is shiny and superficially attractive  is  valuable.",
        origin: 'English',
    },
    {
        '': 132,
        text: 'All the tea in China - Not for',
        explanation: 'Not at any price.',
        origin: 'English',
    },
    {
        '': 133,
        text: 'All things come to those who wait',
        explanation: 'A literal meaning, advocating patience.',
        origin: 'English',
    },
    {
        '': 134,
        text: 'All things must pass',
        explanation: 'Nothing lasts forever.',
        origin: 'English',
    },
    {
        '': 135,
        text: 'All you can eat',
        explanation:
            'A restaurant advertising slogan (usually followed by a price).',
        origin: 'English',
    },
    {
        '': 136,
        text: "All's fair in love and war",
        explanation:
            "The proverbial saying 'All's fair in love and war' expresses the idea that, like war, where any strategy is accepted, affairs of the heart are also  no-holds-barred contests.",
        origin: 'English',
    },
    {
        '': 137,
        text: 'All work and no play makes Jack a dull boy',
        explanation:
            "The proverbial saying 'All work and no play makes Jack a dull boy' expresses the idea that working constantly and making no time for enjoyment makes one bored and boring.",
        origin: 'English',
    },
    {
        '': 138,
        text: 'Alter ego',
        explanation: 'A second self.',
        origin: 'English',
    },
    {
        '': 139,
        text: 'Amber nectar',
        explanation: 'Lager.',
        origin: 'English',
    },
    {
        '': 140,
        text: "An albatross around one's neck",
        explanation: 'A\nburden which some unfortunate person has to carry.',
        origin: 'English',
    },
    {
        '': 141,
        text: 'An apple a day keeps the doctor away',
        explanation:
            "The proverb 'An apple a day keeps the doctor away' has a straightforward literal, and very probably correct, meaning - that the eating of fruit maintains good health.",
        origin: 'English',
    },
    {
        '': 142,
        text: 'An arm and a leg',
        explanation: 'A large, possibly exorbitant, amount of money.',
        origin: 'English',
    },
    {
        '': 143,
        text: 'An axe to grind',
        explanation:
            'To have an axe to grind is to have a dispute to take up with someone or, to have an ulterior motive; to have private ends to serve.',
        origin: 'English',
    },
    {
        '': 144,
        text: "An Englishman's home is his castle",
        explanation: "The English dictum that a man's home is his refuge.",
        origin: 'English',
    },
    {
        '': 145,
        text: 'An eye for an eye, a tooth for a tooth',
        explanation:
            "The proverb 'an eye for an eye, a tooth for a tooth' expresses the notion that for every wrong done there should be a compensating measure of justice.",
        origin: 'English',
    },
    {
        '': 146,
        text: 'An ill wind',
        explanation: 'A misfortune.',
        origin: 'English',
    },
    {
        '': 147,
        text: "An offer he can't refuse",
        explanation: "The\n 'offer' being 'do as I say or I'll kill you'.",
        origin: 'English',
    },
    {
        '': 148,
        text: 'An Oxford scholar',
        explanation: 'A\ndollar.',
        origin: 'English',
    },
    {
        '': 149,
        text: 'Anchors aweigh',
        explanation:
            'Said in preparation of getting underway, especially of a ship.',
        origin: 'English',
    },
    {
        '': 150,
        text: 'Angry young man',
        explanation:
            "Often applied to the British 'kitchen sink' playwrights of the 1950s. Also anyone, particularly young men obviously, who rails against the establishment.",
        origin: 'English',
    },
    {
        '': 151,
        text: 'Ankle biter',
        explanation: 'A small child. Also applied to small dogs.',
        origin: 'English',
    },
    {
        '': 152,
        text: 'Annus horribilis',
        explanation: 'A horrible year.',
        origin: 'English',
    },
    {
        '': 153,
        text: 'Another day, another dollar',
        explanation:
            "The proverbial phrase 'another day, another dollar' is a weary resignation that the day to come will be one of tedious work, the only benefit being the small amount of payment at the end of it.",
        origin: 'English',
    },
    {
        '': 154,
        text: 'Another think coming',
        explanation:
            "To have 'another think coming' is to be greatly mistaken. The phrase is usually spoken by an antagonist as 'you have another think coming'; the implication being that one will shortly be obliged to adopt a different viewpoint, either by the presentation of indisputable evidence, or by force.",
        origin: 'English',
    },
    {
        '': 155,
        text: 'Apple of my eye - The',
        explanation:
            "The apple of one's eye originally referred to the central aperture of the eye. Figuratively it is something, or more usually someone, cherished above others.",
        origin: 'English',
    },
    {
        '': 156,
        text: 'Apple pie order',
        explanation: 'Tidy\nand well-ordered.',
        origin: 'English',
    },
    {
        '': 157,
        text: 'April fool',
        explanation:
            'The\nvictim of a trick played on April 1st, or the trick itself.',
        origin: 'English',
    },
    {
        '': 158,
        text: 'Arm candy - see ear candy',
        explanation:
            'Music with an instant appeal but with little lasting significance.',
        origin: 'English',
    },
    {
        '': 159,
        text: 'Arms akimbo',
        explanation:
            'A stance, with the hands on the hips and elbows directed outwards.',
        origin: 'English',
    },
    {
        '': 160,
        text: 'Ars longa, vita brevis',
        explanation:
            "The translation into Latin of part of a quotation by the Greek 'Father of Medicine' - Hippocrates.",
        origin: 'English',
    },
    {
        '': 161,
        text: 'Arty-farty',
        explanation:
            'Pertaining to, or having an interest in, the arts - often pretentiously and affectedly so.',
        origin: 'English',
    },
    {
        '': 162,
        text: 'Asap - As soon as possible',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 163,
        text: 'As X as Y',
        explanation: 'A simile is a comparison of one thing with another.',
        origin: 'English',
    },
    {
        '': 164,
        text: 'As alike as two peas in a pod',
        explanation: "'Two peas in a pod' are two identical items or people.",
        origin: 'English',
    },
    {
        '': 165,
        text: 'As bald as a coot',
        explanation: 'Completely\n          bald.',
        origin: 'English',
    },
    {
        '': 166,
        text: "As black as Newgate's knocker",
        explanation:
            "'As black as Newgate's knocker' means pitch\n          black.",
        origin: 'English',
    },
    {
        '': 167,
        text: 'As bold as brass',
        explanation: "The simile 'as bold as brass' means 'very bold; blatant.",
        origin: 'English',
    },
    {
        '': 168,
        text: 'As brown as a berry',
        explanation:
            'Entirely or very brown; often referring to a suntanned skin.',
        origin: 'English',
    },
    {
        '': 169,
        text: 'As busy as a bee',
        explanation: 'Very busy.',
        origin: 'English',
    },
    {
        '': 170,
        text: 'As busy as a one-armed paperhanger',
        explanation:
            "The simile 'as busy as a one-armed paperhanger' means 'frenetically busy'.",
        origin: 'English',
    },
    {
        '': 171,
        text: 'As cold as any stone',
        explanation: 'Very cold.',
        origin: 'English',
    },
    {
        '': 172,
        text: 'As cool as a cucumber',
        explanation: "'As cool as a cucumber' means calm and unruffled.",
        origin: 'English',
    },
    {
        '': 173,
        text: "As cute as a bug's ear",
        explanation: 'Very cute.',
        origin: 'English',
    },
    {
        '': 174,
        text: 'As daft as a brush',
        explanation:
            "To be 'as daft as a brush' is to be very stupid or foolish.",
        origin: 'English',
    },
    {
        '': 175,
        text: 'As dead as a dodo',
        explanation: 'Unambiguously and unequivocally dead.',
        origin: 'English',
    },
    {
        '': 176,
        text: 'As dead as a doornail',
        explanation:
            "To be 'as dead as a doornail' is to be utterly dead,  devoid of life (when applied to people, plants or animals) or finished with, unusable (when applied to inanimate objects).",
        origin: 'English',
    },
    {
        '': 177,
        text: 'As different as chalk and cheese',
        explanation: 'Two things that are  very different from each other.',
        origin: 'English',
    },
    {
        '': 178,
        text: 'As easy as pie',
        explanation: 'Very easy.',
        origin: 'English',
    },
    {
        '': 179,
        text: 'As fast as greased lightning',
        explanation: 'Very fast.',
        origin: 'English',
    },
    {
        '': 180,
        text: "As fine as frog's hair",
        explanation: 'Extremely fine, that is, delicate and slender.',
        origin: 'English',
    },
    {
        '': 181,
        text: "As fit as a butcher's dog",
        explanation: 'Very fit.',
        origin: 'English',
    },
    {
        '': 182,
        text: 'As fit as a fiddle',
        explanation: "To be 'as fit as a fiddle' is to be very fit and well.",
        origin: 'English',
    },
    {
        '': 183,
        text: 'As good as gold',
        explanation: 'Well-behaved and obedient.',
        origin: 'English',
    },
    {
        '': 184,
        text: 'As good luck would have it',
        explanation:
            "If something is 'as good luck would have it' it has come about by some fortunate chance.",
        origin: 'English',
    },
    {
        '': 185,
        text: 'As happy as...',
        explanation:
            "Regular readers of this mailing list will know that it has often featured 'as x as y' similes. These provide a rich source of colour in the language and most English speakers will be familiar with hundreds of them (see this list). The term's usual format makes a link between some creature or object, say 'a dodo', and a well-known property of the same, that is, 'dead', and that applies to virtually all examples of this type of simile, e.g. 'as black as coal/pitch/the ace of spades', 'as white as a sheet/ghost/snow'. However this pattern breaks down when it comes to happiness. Larks and dogs with two tails fit the bill as creatures known to be happy but the three best-known 'happy' similes are 'as happy as a clam/a sandboy/Larry'. It is not now common knowledge as to why clams, sandboys or Larry should have been happy. For the phrases to have been adopted into the language in the first place such knowledge must have been widespread at some time. Let's see if we can resurrect it.",
        origin: 'English',
    },
    {
        '': 186,
        text: 'As happy as a clam',
        explanation: 'Very happy and content.',
        origin: 'English',
    },
    {
        '': 187,
        text: 'As happy as a sandboy',
        explanation: 'Very happy and content.',
        origin: 'English',
    },
    {
        '': 188,
        text: 'As happy as Larry',
        explanation: 'Very\nhappy.',
        origin: 'English',
    },
    {
        '': 189,
        text: 'As high as a kite',
        explanation:
            'Highly excited, or under the influence of drink or drugs.',
        origin: 'English',
    },
    {
        '': 190,
        text: 'As keen as mustard',
        explanation: 'Very enthusiastic.',
        origin: 'English',
    },
    {
        '': 191,
        text: 'As mad as a hatter',
        explanation:
            'Completely\n          mad. This is now commonly understood to mean crazy, although the original meaning is unclear and may have meant annoyed.',
        origin: 'English',
    },
    {
        '': 192,
        text: 'As mad as a March hare',
        explanation:
            "To be 'as mad as a March hare' is to be completely\n              mad.",
        origin: 'English',
    },
    {
        '': 193,
        text: 'As nice as ninepence',
        explanation: 'Neat, tidy, well-ordered.',
        origin: 'English',
    },
    {
        '': 194,
        text: 'As old as Methuselah',
        explanation: 'Very\nold.',
        origin: 'English',
    },
    {
        '': 195,
        text: 'As old as the hills',
        explanation: 'Exceedingly old.',
        origin: 'English',
    },
    {
        '': 196,
        text: 'As pleased as Punch',
        explanation: 'Very\npleased.',
        origin: 'English',
    },
    {
        '': 197,
        text: 'As pure as the driven snow',
        explanation: 'Entirely pure.',
        origin: 'English',
    },
    {
        '': 198,
        text: 'As safe as houses',
        explanation: 'Completely safe and secure.',
        origin: 'English',
    },
    {
        '': 199,
        text: 'As queer as a nine bob note',
        explanation: 'Odd\nor unusual. Also used to mean homosexual.',
        origin: 'English',
    },
    {
        '': 200,
        text: 'As snug as a bug in a rug',
        explanation:
            "To be 'as snug as a bug in a rug' is to be very comfortable and cosy.",
        origin: 'English',
    },
    {
        '': 201,
        text: 'As straight as a die',
        explanation: 'Completely straight.',
        origin: 'English',
    },
    {
        '': 202,
        text: 'As the crow flies',
        explanation:
            'In a direct line, without any of the detours caused by following a road.',
        origin: 'English',
    },
    {
        '': 203,
        text: 'As thick as thieves',
        explanation: 'Close friends with; sharing  confidences.',
        origin: 'English',
    },
    {
        '': 204,
        text: 'As thick as two short planks',
        explanation: 'Exceedingly stupid.',
        origin: 'English',
    },
    {
        '': 205,
        text: 'As white as snow',
        explanation:
            "Pure white. What better to symbolise whiteness than snow? Not only the intensity of colour on a bright winter's day, but also the purity of untrodden snow is summoned up by the simile. Shakespeare used this association to good effect in as pure as the driven snow.",
        origin: 'English',
    },
    {
        '': 206,
        text: 'Ashes to ashes dust to dust',
        explanation:
            "The phrase 'ashes to ashes' expresses the notion that we come from dust and we return to dust.",
        origin: 'English',
    },
    {
        '': 207,
        text: "Ask a silly question and you'll get a silly answer",
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 208,
        text: '(Ask not) for whom the bell tolls',
        explanation:
            "'For whom the bells tolls' is a quotation from a work by John Donne, in which he explores the interconnectedness of humanity.",
        origin: 'English',
    },
    {
        '': 209,
        text: '(H)asta la vista, baby',
        explanation:
            "'Hasta la vista' translates from the Spanish as 'see you later'.",
        origin: 'English',
    },
    {
        '': 210,
        text: 'At loggerheads',
        explanation: 'In dispute with.',
        origin: 'English',
    },
    {
        '': 211,
        text: 'At one fell swoop',
        explanation:
            "'At one fell swoop' means 'suddenly; in a single action'.",
        origin: 'English',
    },
    {
        '': 212,
        text: "At one's beck and call",
        explanation:
            "To be at someone's beck and call is to be entirely subservient to them; to be responsive to their slightest request.",
        origin: 'English',
    },
    {
        '': 213,
        text: "At one's wit's end",
        explanation:
            "To be at your wit's end is to be perplexed; unable to think what to do.",
        origin: 'English',
    },
    {
        '': 214,
        text: 'At sixes and sevens',
        explanation:
            'A state of confusion and disorder, or of disagreement between parties.',
        origin: 'English',
    },
    {
        '': 215,
        text: 'Attack is the best form of defence',
        explanation:
            "The proverbial phrase 'attack is the best form of defence' expresses the opinion that a pre-emptive strike is the best way to defend yourself.",
        origin: 'English',
    },
    {
        '': 216,
        text: 'Augur well',
        explanation:
            'To foreshadow a successful outcome, indicated by some circumstance or event.',
        origin: 'English',
    },
    {
        '': 217,
        text: 'Auld lang syne',
        explanation:
            "The Anglicized version of 'auld lang syne', which means old long-since or old long-ago.",
        origin: 'English',
    },
    {
        '': 218,
        text: 'Away with the fairies',
        explanation: 'Not facing reality; in a dream-world.',
        origin: 'English',
    },
    {
        '': 219,
        text: 'Baby blues',
        explanation:
            'Feelings of depression or anxiety, experienced by some mothers following childbirth.',
        origin: 'English',
    },
    {
        '': 220,
        text: 'Baby boomer',
        explanation:
            'A person born during the temporary peak in the birth-rate that occurred in several countries following WWII, notably the USA and the UK.',
        origin: 'English',
    },
    {
        '': 221,
        text: 'Baby father',
        explanation:
            'The father of an infant who is not married to or in an exclusive relationship with the mother.',
        origin: 'English',
    },
    {
        '': 222,
        text: 'Back of beyond - The',
        explanation: 'A lonely forsaken place.',
        origin: 'English',
    },
    {
        '': 223,
        text: 'Back-seat driver',
        explanation: 'Someone\nwho criticizes from the sidelines.',
        origin: 'English',
    },
    {
        '': 224,
        text: 'Back the field',
        explanation: 'Place a bet on all the horses in a race, except one.',
        origin: 'English',
    },
    {
        '': 225,
        text: 'Back to basics',
        explanation: 'A\nreturn to previously held values of decency.',
        origin: 'English',
    },
    {
        '': 226,
        text: 'Back to square one',
        explanation:
            "'Back to square one' means back to the beginning; start again.",
        origin: 'English',
    },
    {
        '': 227,
        text: 'Back to the drawing board',
        explanation:
            'Start again on a new design  or plan after the  failure of an earlier attempt.',
        origin: 'English',
    },
    {
        '': 228,
        text: 'Backroom boy',
        explanation:
            'One\nwho works in anonymity in an organization while others take on more public roles.',
        origin: 'English',
    },
    {
        '': 229,
        text: 'Backward in coming forward',
        explanation:
            "Shy or reluctant to do something. Here 'backward' means shy or unwilling; 'come forward' means present oneself into view.",
        origin: 'English',
    },
    {
        '': 230,
        text: 'Bacon - Bring home the',
        explanation:
            "To earn money, particularly for one's family; to be successful, especially financially successful.",
        origin: 'English',
    },
    {
        '': 231,
        text: 'Bad books',
        explanation: 'To be in disgrace or out of favour.',
        origin: 'English',
    },
    {
        '': 232,
        text: 'Bad egg',
        explanation: 'Someone or something that disappoints expectations.',
        origin: 'English',
    },
    {
        '': 233,
        text: 'Bad hair day',
        explanation:
            "A\n'bad hair day' originally had a literal meaning - a day on which one's hair seems unmanageable. The expression's meaning has been extended to mean a day when everything seems to go wrong.",
        origin: 'English',
    },
    {
        '': 234,
        text: 'Bad money drives out good',
        explanation:
            "The proverbial saying \n'bad money drives out good' can be understood literally. It is known as Gresham's Law, which is that money which is labelled as 'bad' will harm the prospects of money that is labelled as 'good'. Of course, we need to know what bad and good money are to understand that (see below).",
        origin: 'English',
    },
    {
        '': 235,
        text: 'Badger to death',
        explanation: 'Harass or persecute.',
        origin: 'English',
    },
    {
        '': 236,
        text: 'Bag and baggage',
        explanation:
            "One's bag and baggage is the sum total of  one's possessions.",
        origin: 'English',
    },
    {
        '': 237,
        text: "Baker's dozen",
        explanation: "A baker's dozen is 13 (or, more rarely, 14).",
        origin: 'English',
    },
    {
        '': 238,
        text: 'Balance of power - The',
        explanation:
            'The\ndistribution of power between nations in such a way that no single state has dominance\nover the others.',
        origin: 'English',
    },
    {
        '': 239,
        text: 'Balance of trade - The',
        explanation:
            'The\ndifference between the value of the imports and exports that a nation makes.',
        origin: 'English',
    },
    {
        '': 240,
        text: 'Bald as a coot',
        explanation: 'Completely\n          bald.',
        origin: 'English',
    },
    {
        '': 241,
        text: 'Bale out/bail out',
        explanation:
            "Various meanings, including 'making an emergency parachute escape from an aeroplane' and 'ladling water from a boat'.",
        origin: 'English',
    },
    {
        '': 242,
        text: 'Ball and chain',
        explanation: 'A 20th century slang term, meaning wife.',
        origin: 'English',
    },
    {
        '': 243,
        text: 'Bandy words',
        explanation: 'To\nargue persistently.',
        origin: 'English',
    },
    {
        '': 244,
        text: 'Bane of your life',
        explanation: 'The agent of ruin or woe.',
        origin: 'English',
    },
    {
        '': 245,
        text: 'Bang on about',
        explanation: 'Talk repetitively and boringly about something.',
        origin: 'English',
    },
    {
        '': 246,
        text: 'Baptism of fire',
        explanation:
            "An\nordeal or martyrdom. More recently, a soldier's first experience of battle.",
        origin: 'English',
    },
    {
        '': 247,
        text: "Barge-pole - Wouldn't touch with a",
        explanation:
            "Said of something or someone so unappealing that one wouldn't want to go anywhere near.",
        origin: 'English',
    },
    {
        '': 248,
        text: 'Barking mad',
        explanation: 'Insane; intensely mad.',
        origin: 'English',
    },
    {
        '': 249,
        text: 'Barking up the wrong tree',
        explanation:
            'Making a mistake or a false assumption in something you are trying to achieve.',
        origin: 'English',
    },
    {
        '': 250,
        text: 'Barrel of laughs',
        explanation: 'The source of abundant fun and enjoyment.',
        origin: 'English',
    },
    {
        '': 251,
        text: 'Basket case',
        explanation:
            'An\ninfirm or failing person or thing - unable to  function properly. Originally\nthis referred to soldiers who had lost arms and legs and had to be carried by others. More recently it has been used to denounce a failing organisation or scheme and is less often applied to people.',
        origin: 'English',
    },
    {
        '': 252,
        text: 'Bated breath',
        explanation:
            'Breathing that is subdued because of some emotion or difficulty.',
        origin: 'English',
    },
    {
        '': 253,
        text: 'Bats in the belfry',
        explanation: 'Crazy; eccentric.',
        origin: 'English',
    },
    {
        '': 254,
        text: 'Batten down the hatches',
        explanation: 'Prepare for trouble.',
        origin: 'English',
    },
    {
        '': 255,
        text: 'Battle royal',
        explanation: 'General mayhem; a free-for-all fight.',
        origin: 'English',
    },
    {
        '': 256,
        text: 'Be afraid, be very afraid',
        explanation:
            'Ostensibly, a warning that something dangerous is imminent. In reality, this is usually said with comic intent. The thing being warned of is more likely to be mildly unwelcome than actually dangerous; for example, "That fierce librarian was asking about your overdue books - be afraid, be very afraid.',
        origin: 'English',
    },
    {
        '': 257,
        text: 'Be enthralled',
        explanation:
            'To be captivated; to be held spellbound by pleasing qualities.',
        origin: 'English',
    },
    {
        '': 258,
        text: 'Be still, my beating heart',
        explanation:
            "'Be still, my beating heart' is an expression of excitement when seeing the object of one's romantic affections.",
        origin: 'English',
    },
    {
        '': 259,
        text: 'Beam ends - On your',
        explanation: 'Hard up; in a bad situation.',
        origin: 'English',
    },
    {
        '': 260,
        text: 'Bean counter',
        explanation:
            'A disparaging term for an accountant, or anyone   excessively concerned with  statistical records or accounts.',
        origin: 'English',
    },
    {
        '': 261,
        text: 'Beast with two backs',
        explanation: 'Partners engaged in sexual intercourse.',
        origin: 'English',
    },
    {
        '': 262,
        text: 'Beat a hasty retreat',
        explanation: 'Withdraw rapidly.',
        origin: 'English',
    },
    {
        '': 263,
        text: 'Beat around the bush',
        explanation: 'To prevaricate and avoid coming to the point.',
        origin: 'English',
    },
    {
        '': 264,
        text: 'Beat swords into ploughshares',
        explanation: 'Turn to peaceful pursuits and away from war.',
        origin: 'English',
    },
    {
        '': 265,
        text: 'Beat the living daylights out of someone',
        explanation:
            'To beat the living daylights out of someone is to beat them severely, to the point where they lose consciousness.',
        origin: 'English',
    },
    {
        '': 266,
        text: 'Beauty is in the eye of the beholder',
        explanation:
            "'Beauty in the eye of the beholder' has a literal meaning - that the perception of beauty is subjective - what one person finds beautiful another may not.",
        origin: 'English',
    },
    {
        '': 267,
        text: 'Beauty is only skin deep',
        explanation: 'Physical beauty is superficial.',
        origin: 'English',
    },
    {
        '': 268,
        text: 'Beck and call',
        explanation:
            "To be at someone's beck and call is to be entirely subservient to them; to be responsive to their slightest request.",
        origin: 'English',
    },
    {
        '': 269,
        text: 'Bed of roses',
        explanation:
            "The expression 'a bed of roses' describes a pleasant or easy situation.",
        origin: 'English',
    },
    {
        '': 270,
        text: 'Bee in your bonnet',
        explanation: 'Preoccupied\nor obsessed with an idea.',
        origin: 'English',
    },
    {
        '': 271,
        text: 'Beef and reef',
        explanation:
            'A type of cuisine that combines both meat and seafood (especially lobster and steak), or restaurants that serve such cuisine.',
        origin: 'English',
    },
    {
        '': 272,
        text: 'Beelzebub has a devil for a sideboard',
        explanation: 'Misheard lyric.',
        origin: 'English',
    },
    {
        '': 273,
        text: 'Been there, done that',
        explanation:
            'When someone says "been there, done that" they mean that whatever is being talked about is commonplace to them, to the point of boredom.',
        origin: 'English',
    },
    {
        '': 274,
        text: 'Beer and skittles',
        explanation:
            "'Beer and skittles' is shorthand for a life of indulgence spent in the pub.",
        origin: 'English',
    },
    {
        '': 275,
        text: 'Beer goggles',
        explanation:
            "Having your 'beer goggles' on means you are sexually attracted to someone, who you wouldn't normally find attractive, because you are drunk.",
        origin: 'English',
    },
    {
        '': 276,
        text: 'Bee-line - make a bee-line for',
        explanation: 'Go directly towards.',
        origin: 'English',
    },
    {
        '': 277,
        text: "Bee's knees - The",
        explanation:
            "If something is said to be the bee's knees it is excellent - the highest quality.",
        origin: 'English',
    },
    {
        '': 278,
        text: 'Beetle-browed',
        explanation:
            'With a furrowed or prominent brow, or worried expression. Formerly, with large or bushy eyebrows.',
        origin: 'English',
    },
    {
        '': 279,
        text: 'Before the fact',
        explanation:
            "'After the fact' means after an action is performed; in legal parlance, after a crime has been committed.",
        origin: 'English',
    },
    {
        '': 280,
        text: 'Before you can say Jack Robinson',
        explanation: 'In a very short time; suddenly.',
        origin: 'English',
    },
    {
        '': 281,
        text: 'Beg the question',
        explanation:
            'This is one of those rare phrases in which the meaning is more debated than the origin.',
        origin: 'English',
    },
    {
        '': 282,
        text: 'Beggar belief',
        explanation: 'To defy or go beyond what is believable.',
        origin: 'English',
    },
    {
        '': 283,
        text: "Beggars can't be choosers",
        explanation:
            'If you request something to be given you should not question what you are given.',
        origin: 'English',
    },
    {
        '': 284,
        text: "Behind every great man there's a great woman",
        explanation:
            "'Behind every great man there's a great woman' has a straightforward literal meaning. The implication behind the saying is that the great woman is often ignored or taken for granted.",
        origin: 'English',
    },
    {
        '': 285,
        text: 'Behind the eight ball',
        explanation:
            'A difficult position from which it is unlikely one can escape.',
        origin: 'English',
    },
    {
        '': 286,
        text: 'Bell, book and candle',
        explanation:
            "The phrase 'bell, book and candle' is the final line of an incantation denoting excommunication from the Catholic church.",
        origin: 'English',
    },
    {
        '': 287,
        text: 'Bell the cat',
        explanation:
            "To hang a bell around a cat's neck to provide a warning. Figuratively, the expression refers to any task that is difficult or impossible to achieve.",
        origin: 'English',
    },
    {
        '': 288,
        text: 'Belle of the ball',
        explanation: 'The most attractive woman at a social gathering.',
        origin: 'English',
    },
    {
        '': 289,
        text: 'Below the belt',
        explanation: 'An unfair, underhand tactic.',
        origin: 'English',
    },
    {
        '': 290,
        text: 'Below the salt',
        explanation: "Common or lowly. See also 'beyond the pale'.",
        origin: 'English',
    },
    {
        '': 291,
        text: 'Bells and whistles',
        explanation: 'Attractive additional features or fittings',
        origin: 'English',
    },
    {
        '': 292,
        text: 'Belt and braces',
        explanation:
            "'Belt and braces' means being careful -  taking double measures to avoid risk. It alludes to the use of both belt and braces to hold up a person's trousers.",
        origin: 'English',
    },
    {
        '': 293,
        text: 'Belt up',
        explanation:
            "'Be quiet'. Also, since the introduction of car seat belts - an injunction to fasten one's belt.",
        origin: 'English',
    },
    {
        '': 294,
        text: 'Best bib and tucker',
        explanation: "One's best clothes.",
        origin: 'English',
    },
    {
        '': 295,
        text: 'Best laid schemes of mice and men - The',
        explanation: 'The most carefully prepared plans may go wrong.',
        origin: 'English',
    },
    {
        '': 296,
        text: 'Bet your bottom dollar',
        explanation: 'Bet your last coin.',
        origin: 'English',
    },
    {
        '': 297,
        text: 'Better half',
        explanation: 'My husband or my wife.',
        origin: 'English',
    },
    {
        '': 298,
        text: 'Better late than never',
        explanation:
            "To arrive or do something later than expected isn't good, but it is better than not at all.",
        origin: 'English',
    },
    {
        '': 299,
        text: 'Better to have loved and lost than never to have loved at all',
        explanation:
            "The proverbial saying 'It's better to have loved and lost than never to have loved at all' has a straightforward literal meaning.",
        origin: 'English',
    },
    {
        '': 300,
        text: 'Between a rock and a hard place',
        explanation:
            'In difficulty, faced with a choice between two unsatisfactory options.',
        origin: 'English',
    },
    {
        '': 301,
        text: 'Between the Devil and the deep blue sea',
        explanation: 'In difficulty, faced with two dangerous alternatives.',
        origin: 'English',
    },
    {
        '': 302,
        text: 'Between two stools',
        explanation:
            "To be 'between two stools' is to fail, due to being unable to choose between two alternatives.",
        origin: 'English',
    },
    {
        '': 303,
        text: 'Between you, me and the bed-post',
        explanation:
            "The phrase 'between you, me and the bed-post' is used when divulging a secret; something that only the speaker and the listener should hear.",
        origin: 'English',
    },
    {
        '': 304,
        text: 'Beware of Greeks bearing gifts',
        explanation: "Don't trust your enemies.",
        origin: 'English',
    },
    {
        '': 305,
        text: 'Beware the Ides of March',
        explanation: 'The Ides of March is just the 15th of March.',
        origin: 'English',
    },
    {
        '': 306,
        text: 'Beyond a shadow of a doubt',
        explanation:
            "If something is said to be 'beyond a shadow of a doubt' the speaker is certain that it is true, with no possibility of ambiguity.",
        origin: 'English',
    },
    {
        '': 307,
        text: 'Beyond belief',
        explanation:
            'Outside the range of what is normally considered  believable.',
        origin: 'English',
    },
    {
        '': 308,
        text: 'Beyond our ken',
        explanation: 'Beyond our understanding.',
        origin: 'English',
    },
    {
        '': 309,
        text: 'Beyond the pale',
        explanation:
            "To be 'beyond the pale' is to be unacceptable; outside agreed standards of decency.",
        origin: 'English',
    },
    {
        '': 310,
        text: 'Biblical phrases',
        explanation:
            "The King James Version of the Bible has been enormously influential in the development of the English language. It ranks with the complete works of Shakespeare and the Oxford English Dictionary as one of the cornerstones of the recorded language. After Shakespeare, the King James, or Authorized, Version of the Bible is the most common source of phrases in English. The King James in question was James I of England and James VI of Scotland. He didn't write the text of course, he merely authorized it, hence the name by which the book is best known in the UK (King James Version, or KJV, being more commonly used in the USA).",
        origin: 'English',
    },
    {
        '': 311,
        text: 'Big Apple - The',
        explanation: 'Nickname\nfor New York, USA.',
        origin: 'English',
    },
    {
        '': 312,
        text: 'Big cheese - The',
        explanation: 'The most important person.',
        origin: 'English',
    },
    {
        '': 313,
        text: 'Big Easy - The',
        explanation:
            'Nickname\nfor New Orleans, USA, referring\nto the easy-going, laid back attitude to life that jazz musicians and local residents indulge in there.',
        origin: 'English',
    },
    {
        '': 314,
        text: 'Big fish in a small pond - A',
        explanation:
            'Someone who is important but only within a limited area of influence.',
        origin: 'English',
    },
    {
        '': 315,
        text: "Big fleas have little fleas upon their back to bite 'em",
        explanation:
            'Everyone is preyed up[on by someone, who in turn has someone preying on them.',
        origin: 'English',
    },
    {
        '': 316,
        text: 'Big wig',
        explanation:
            "An important person. Now usually spelled as single word, 'bigwig'.",
        origin: 'English',
    },
    {
        '': 317,
        text: '(A) bigger bang for your buck',
        explanation: 'More for your money.',
        origin: 'English',
    },
    {
        '': 318,
        text: 'Bill Stickers is innocent',
        explanation: "Play on words, based on 'Bill Stickers...' notices.",
        origin: 'English',
    },
    {
        '': 319,
        text: 'Billy-o - Like',
        explanation:
            'An extreme standard of comparison; for example, "It rained like billy-o; we were all soaked through.".',
        origin: 'English',
    },
    {
        '': 320,
        text: 'Billy no mates',
        explanation: 'Someone with no friends.',
        origin: 'English',
    },
    {
        '': 321,
        text: 'Binge drinking',
        explanation: 'Drinking to excess in a short space of time.',
        origin: 'English',
    },
    {
        '': 322,
        text: 'Bird in the hand is worth two in the bush - A',
        explanation:
            "The proverb 'A bird in the hand is worth two in the bush' means  that it's\n          better to hold onto something you  have rather than take the risk of getting something better  which may come to nothing.",
        origin: 'English',
    },
    {
        '': 323,
        text: 'Birds and the bees - The',
        explanation:
            "'The birds and the bees' is a  phrase that refers to coy explanations about sex and reproduction that are given to children.",
        origin: 'English',
    },
    {
        '': 324,
        text: 'Birds of a feather flock together',
        explanation: 'Those of similar taste congregate in groups.',
        origin: 'English',
    },
    {
        '': 325,
        text: 'Bite the bullet',
        explanation:
            'Accept the inevitable impending hardship and endure the resulting pain with fortitude.',
        origin: 'English',
    },
    {
        '': 326,
        text: 'Bite the dust',
        explanation: 'Fall to the ground, wounded or dead.',
        origin: 'English',
    },
    {
        '': 327,
        text: 'Bitter end - The',
        explanation: "To the\nlimit of one's efforts - to the last extremity.",
        origin: 'English',
    },
    {
        '': 328,
        text: "Black as Newgate's knocker",
        explanation:
            "'As black as Newgate's knocker' means pitch\n          black.",
        origin: 'English',
    },
    {
        '': 329,
        text: 'Black-on-black',
        explanation:
            'Interactions that occur between black people, notably crime that is perpetrated by one black person against another.',
        origin: 'English',
    },
    {
        '': 330,
        text: 'Black sheep of the family',
        explanation: 'A\ndisreputable or disgraced member of a family.',
        origin: 'English',
    },
    {
        '': 331,
        text: 'Blast from the past - A',
        explanation:
            'Something\nor someone that returns after a period of obscurity or absence. It is normally applied to things that that were thought fondly of previously and are making a welcome return - particularly pop songs.',
        origin: 'English',
    },
    {
        '': 332,
        text: 'Blaze a trail',
        explanation: 'To lead the way.',
        origin: 'English',
    },
    {
        '': 333,
        text: 'Bless you! (after a sneeze)',
        explanation:
            "'Bless you!', or sometimes 'God bless you!' or 'God bless!', is a response often said when someone sneezes.",
        origin: 'English',
    },
    {
        '': 334,
        text: 'Blind leading the blind - The',
        explanation:
            'Uninformed\nand incompetent people leading others who are similarly incapable.',
        origin: 'English',
    },
    {
        '': 335,
        text: "Blind-man's buff",
        explanation:
            'A game, in which a blindfolded player tries to catch others.',
        origin: 'English',
    },
    {
        '': 336,
        text: 'Bling-bling',
        explanation:
            "Ostentatious, over-the-top jewellery or dress. Often used to demonstrate the wearer's wealth.",
        origin: 'English',
    },
    {
        '': 337,
        text: 'Blonde bombshell',
        explanation: 'A glamorous blonde.',
        origin: 'English',
    },
    {
        '': 338,
        text: 'Blood and thunder',
        explanation: 'An oath, alluding to mayhem and bloodshed.',
        origin: 'English',
    },
    {
        '': 339,
        text: 'Blood is thicker than water',
        explanation:
            "By saying 'blood is thicker than water' we mean that family bonds are closer than those of outsiders.",
        origin: 'English',
    },
    {
        '': 340,
        text: 'Blood toil tears and sweat',
        explanation:
            "A line from Sir Winston Churchill's WWII speech on becoming prime minister of the UK in 1940.",
        origin: 'English',
    },
    {
        '': 341,
        text: 'Blood, sweat and tears',
        explanation: 'Hard work and effort in  difficult circumstances.',
        origin: 'English',
    },
    {
        '': 342,
        text: 'Bloody-minded',
        explanation: 'Tiresome, stubborn and obstructive.',
        origin: 'English',
    },
    {
        '': 343,
        text: 'Blot on the landscape',
        explanation:
            'Something\nthat spoils the view or ruins a previously comfortable situation.',
        origin: 'English',
    },
    {
        '': 344,
        text: 'Blow a raspberry - see raspberry tart',
        explanation: 'Fart.',
        origin: 'English',
    },
    {
        '': 345,
        text: 'Blow your mind',
        explanation: 'Expand your mind by use of hallucinatory drugs.',
        origin: 'English',
    },
    {
        '': 346,
        text: 'Blow your own trumpet',
        explanation: 'Act in a boastful, self-promoting manner.',
        origin: 'English',
    },
    {
        '': 347,
        text: 'Blown to smithereens',
        explanation:
            'Disintegrated into small fragments by a sudden impact or explosion.',
        origin: 'English',
    },
    {
        '': 348,
        text: 'Blue blood',
        explanation:
            'The blood that which flows in the veins of old and aristocratic families.',
        origin: 'English',
    },
    {
        '': 349,
        text: 'Blue moon (Once in a)',
        explanation: 'Very rarely.',
        origin: 'English',
    },
    {
        '': 350,
        text: 'Blue-plate special',
        explanation: 'A set meal provided at a reduced price.',
        origin: 'English',
    },
    {
        '': 351,
        text: "Bob's your uncle",
        explanation:
            "'Bob's your uncle'  is an archetypically English phrase and is so familiar here for it to have spawned jokey variants. As 'take the Mickey' has an extended alternative 'extract the Michael', 'Bob's your uncle' is sometimes extended to 'Robert's your auntie's husband'. People  in other English speaking countries won't be so familiar with the phrase, so I'll give some examples that may explain the meaning.",
        origin: 'English',
    },
    {
        '': 352,
        text: 'Bode well',
        explanation:
            'To foreshadow a successful outcome, indicated by some circumstance or event.',
        origin: 'English',
    },
    {
        '': 353,
        text: 'Bodice ripper',
        explanation:
            "A 'Bodice ripper' is a sexually suggestive romantic novel; usually in a historical setting and always with a plot involving the seduction of the heroine.",
        origin: 'English',
    },
    {
        '': 354,
        text: 'Body - phrases related to the human body',
        explanation:
            'All of the phrases below contain a reference to a part of the human body - brain, shoulder, face, toe etc. There are more of them than you might expect, around 600 here and no doubt you can think of a few others...',
        origin: 'English',
    },
    {
        '': 355,
        text: 'Body surfing',
        explanation:
            'Surfing (a.k.a. surfboarding) is, in its literal meaning, the riding of a wave while standing or lying on a surfboard.',
        origin: 'English',
    },
    {
        '': 356,
        text: 'Bog standard',
        explanation: 'The basic unrefined article.',
        origin: 'English',
    },
    {
        '': 357,
        text: 'Bold as brass',
        explanation: "The simile 'as bold as brass' means 'very bold; blatant.",
        origin: 'English',
    },
    {
        '': 358,
        text: 'Bolt from the blue',
        explanation:
            'A\ncomplete surprise, like\na bolt of lightning from a clear blue sky.',
        origin: 'English',
    },
    {
        '': 359,
        text: 'Bone dry',
        explanation: 'Completely dry.',
        origin: 'English',
    },
    {
        '': 360,
        text: 'Bone idle',
        explanation: 'Utterly lazy.',
        origin: 'English',
    },
    {
        '': 361,
        text: 'Bone up on',
        explanation: 'To study hard, usually in preparation for a test.',
        origin: 'English',
    },
    {
        '': 362,
        text: 'Booby prize',
        explanation:
            'A prize given to make fun of the loser in a contest or game.',
        origin: 'English',
    },
    {
        '': 363,
        text: 'Booby trap',
        explanation:
            'A practical joke. Also a concealed and possibly lethal trap.',
        origin: 'English',
    },
    {
        '': 364,
        text: 'Boogie-woogie',
        explanation:
            'A style of blues music, with close links to jazz forms like ragtime and stride, usually played on the piano.',
        origin: 'English',
    },
    {
        '': 365,
        text: '(Too big for your) boots',
        explanation: 'Conceited; having a too high opinion of oneself.',
        origin: 'English',
    },
    {
        '': 366,
        text: 'Booze cruise',
        explanation:
            'A\nsea trip from England to continental Europe to buy cheap drink.',
        origin: 'English',
    },
    {
        '': 367,
        text: 'Born again',
        explanation:
            "Christians\n who affirm their renewed and strengthened commitment to their religion are\n called 'born again'. To be born again is to be 'born\n of the spirit'; the first birth being the physical birth of\n the flesh.",
        origin: 'English',
    },
    {
        '': 368,
        text: "Born with a silver spoon in one's mouth",
        explanation:
            "To be born with a silver spoon in one's mouth is to be born into a wealthy and privileged family.",
        origin: 'English',
    },
    {
        '': 369,
        text: 'Born within the sound of Bow Bells',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 370,
        text: 'Boss eyed',
        explanation: 'Cross-eyed or squinty.',
        origin: 'English',
    },
    {
        '': 371,
        text: 'Bottle out',
        explanation:
            "Give up an attempt at something after losing one's nerve.",
        origin: 'English',
    },
    {
        '': 372,
        text: 'Bottom drawer',
        explanation:
            "A 'bottom drawer' is a place where valuables are stored, especially  clothes, linen, etc. Typically this was the place that a woman might store items in preparation for her marriage. Literally, the lowest drawer of a chest of drawers.",
        origin: 'English',
    },
    {
        '': 373,
        text: 'Bottom-up',
        explanation:
            'An approach to organisation or planning that is built up from basic details rather than from a guiding principal or theory. It is a form of organisation often associated with the democratic involvement of many individuals rather than one governed by an individual or small group.',
        origin: 'English',
    },
    {
        '': 374,
        text: 'Bought the farm',
        explanation: 'To die, particularly in an accident or military action.',
        origin: 'English',
    },
    {
        '': 375,
        text: 'Bowled a maiden over',
        explanation:
            'To bowl a maiden over is to sweep a woman off her feet with a romantic gesture.',
        origin: 'English',
    },
    {
        '': 376,
        text: 'Box and Cox',
        explanation: 'To take turns.',
        origin: 'English',
    },
    {
        '': 377,
        text: 'Box-seat - in the',
        explanation: 'In\na superior or advantageous position.',
        origin: 'English',
    },
    {
        '': 378,
        text: 'Boxing Day',
        explanation:
            "See also: our list of 'Christmas Card Sayings and Expressions'.",
        origin: 'English',
    },
    {
        '': 379,
        text: 'Boys will be boys',
        explanation:
            "The proverbial saying 'boys will be boys' is used to express resignation at, or even encouragement of,  the bad behaviour of boys, imagining it to be an inevitable consequence of their gender.",
        origin: 'English',
    },
    {
        '': 380,
        text: 'Brand spanking new',
        explanation: 'Entirely new.',
        origin: 'English',
    },
    {
        '': 381,
        text: 'Brass monkey weather',
        explanation:
            "If it's said to be 'cold enough to freeze the balls off a brass monkey' it is very\ncold indeed.",
        origin: 'English',
    },
    {
        '': 382,
        text: 'Brass tacks - get down to',
        explanation: 'Engage with the basic facts or realities.',
        origin: 'English',
    },
    {
        '': 383,
        text: 'Bread always falls buttered side down',
        explanation:
            "The 'buttered side down' view of life is one that is pessimistic and fatalistic.",
        origin: 'English',
    },
    {
        '': 384,
        text: 'Bread of life - The',
        explanation: 'A name used by Christians to denote Jesus Christ.',
        origin: 'English',
    },
    {
        '': 385,
        text: 'Break a leg',
        explanation:
            "The phrase 'break a leg' is a jovial encouragement, said to actors for good luck before they go on stage, especially on an opening night.",
        origin: 'English',
    },
    {
        '': 386,
        text: 'Break the ice',
        explanation: 'To break down social formality and stiffness.',
        origin: 'English',
    },
    {
        '': 387,
        text: 'Bricks and clicks',
        explanation:
            'A sales model that utilizes both traditional stores (bricks) and Internet trading (clicks).',
        origin: 'English',
    },
    {
        '': 388,
        text: 'Bring home the bacon',
        explanation:
            "To earn money, particularly for one's family; to be successful, especially financially successful.",
        origin: 'English',
    },
    {
        '': 389,
        text: 'Broad in the beam',
        explanation: 'Having wide hips or buttocks.',
        origin: 'English',
    },
    {
        '': 390,
        text: "Broke - if it ain't, don't fix it",
        explanation: 'If something is working adequately well, leave it alone.',
        origin: 'English',
    },
    {
        '': 391,
        text: 'Brook no truck with',
        explanation: 'To reject or to have nothing to do with.',
        origin: 'English',
    },
    {
        '': 392,
        text: 'Bronx cheer',
        explanation:
            'A sound of contempt or derision, made by blowing through closed lips, usually with the tongue protruding..',
        origin: 'English',
    },
    {
        '': 393,
        text: 'Brown as a berry',
        explanation:
            'Entirely or very brown; often referring to a suntanned skin.',
        origin: 'English',
    },
    {
        '': 394,
        text: 'Browned off',
        explanation: "To be 'browned off' is to be bored or fed-up.",
        origin: 'English',
    },
    {
        '': 395,
        text: 'Brownie points',
        explanation:
            'A notional mark of achievement or kudos for performing some creditable act.',
        origin: 'English',
    },
    {
        '': 396,
        text: 'Brummagem screwdriver',
        explanation:
            "A 'Brummagem screwdriver' is a disparaging term for a hammer.",
        origin: 'English',
    },
    {
        '': 397,
        text: 'Brush - As daft as a',
        explanation:
            "To be 'as daft as a brush' is to be very stupid or foolish.",
        origin: 'English',
    },
    {
        '': 398,
        text: 'Bubble and squeak',
        explanation:
            'In the 18th century this was a dish of fried meat and cabbage. Nowadays it is more often fried potatoes and other vegetables, usually greens.',
        origin: 'English',
    },
    {
        '': 399,
        text: 'Buck stops here - The',
        explanation:
            "The slogan 'The buck stops here' is a promise that responsibility will not be passed on to anyone else.",
        origin: 'English',
    },
    {
        '': 400,
        text: 'Bucket list',
        explanation:
            'A list of things that a person wants to experience or achieve before they die.',
        origin: 'English',
    },
    {
        '': 401,
        text: 'Buckle down',
        explanation: 'Apply oneself to hard work.',
        origin: 'English',
    },
    {
        '': 402,
        text: 'Build a better mousetrap and the world will beat a path to your door',
        explanation:
            "To 'build a better mousetrap' is to make an improvement to an existing product or service. It especially refers to simple and straightforward changes that are obvious advances on earlier devices.",
        origin: 'English',
    },
    {
        '': 403,
        text: 'Bugger Bognor!',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 404,
        text: "Buggins' turn",
        explanation:
            "'Buggins' turn' is the method of appointing people to positions based on rotation rather than on merit.",
        origin: 'English',
    },
    {
        '': 405,
        text: 'Bullet - Bit the, Bite the',
        explanation:
            'Accept the inevitable impending hardship and endure the resulting pain with fortitude.',
        origin: 'English',
    },
    {
        '': 406,
        text: 'Bums on seats',
        explanation:
            'The paying audience at a venue with seating, usually a theatre or cinema.',
        origin: 'English',
    },
    {
        '': 407,
        text: 'Bun in the oven',
        explanation:
            "To have 'a bun in the oven' is to be pregnant. Oven = womb, baby = bun.",
        origin: 'English',
    },
    {
        '': 408,
        text: 'Bunch of fives - A',
        explanation:
            "'A bunch of fives' is a slang term for\n          a fist, especially one used for punching. The\n          fives are the four fingers and the thumb.",
        origin: 'English',
    },
    {
        '': 409,
        text: 'Bunny boiler',
        explanation:
            'An\nobsessive and dangerous female, in pursuit of a lover who has spurned her.',
        origin: 'English',
    },
    {
        '': 410,
        text: 'Burn the candle at both ends',
        explanation: 'To live at a hectic pace.',
        origin: 'English',
    },
    {
        '': 411,
        text: 'Burning the midnight oil',
        explanation:
            "To 'burn the midnight oil' is to work late into the night. Originally this was by the light of an oil lamp or candle. More recently, the phrase is used figuratively, alluding back its use before electric lighting.",
        origin: 'English',
    },
    {
        '': 412,
        text: 'Bury the hatchet',
        explanation:
            'To bury the hatchett is to settle your differences with an adversary.',
        origin: 'English',
    },
    {
        '': 413,
        text: 'Bury your head in the sand',
        explanation: 'Refuse to confront or acknowledge a problem.',
        origin: 'English',
    },
    {
        '': 414,
        text: 'Busy as a bee',
        explanation: 'Very busy.',
        origin: 'English',
    },
    {
        '': 415,
        text: 'Butt end of the stick - The',
        explanation:
            'To get the short end of the stick is to come off worst in a bargain or contest.',
        origin: 'English',
    },
    {
        '': 416,
        text: 'Butter no parsnips - Fine words',
        explanation:
            "The proverb 'Fine words butter no parsnips' means that nothing concrete is achieved by empty words or flattery.",
        origin: 'English',
    },
    {
        '': 417,
        text: 'Butter side down',
        explanation:
            "The 'buttered side down' view of life is one that is pessimistic and fatalistic.",
        origin: 'English',
    },
    {
        '': 418,
        text: "Butter wouldn't melt in his mouth",
        explanation: 'Prim and proper, with a cool demeanour',
        origin: 'English',
    },
    {
        '': 419,
        text: 'Butterfingers',
        explanation:
            'A name playfully applied to someone who  fails to catch a ball or lets something slip from their fingers.',
        origin: 'English',
    },
    {
        '': 420,
        text: 'By and large',
        explanation: 'On the whole; generally speaking; all things considered.',
        origin: 'English',
    },
    {
        '': 421,
        text: 'By dint of',
        explanation:
            'By means of; as a result of - especially by the means of force.',
        origin: 'English',
    },
    {
        '': 422,
        text: 'By gum',
        explanation:
            "Exclamation of surprise. This is an example of a minced-oath, and is a euphemism for 'By God'.",
        origin: 'English',
    },
    {
        '': 423,
        text: 'By hook or by crook',
        explanation:
            "To do something 'by hook or by crook' is to do it by whatever means are necessary - be they fair or foul.",
        origin: 'English',
    },
    {
        '': 424,
        text: 'By the board',
        explanation: 'Finished with, as in thrown overboard.',
        origin: 'English',
    },
    {
        '': 425,
        text: 'By the book',
        explanation: 'Correctly; according to\nthe rules.',
        origin: 'English',
    },
    {
        '': 426,
        text: 'By the short hairs',
        explanation:
            "To be 'caught/got/held by the short hairs', or in the UK equivalent '... by the short and curlies', is to be trapped by an opponent in a position one can't easily escape from.",
        origin: 'English',
    },
    {
        '': 427,
        text: 'By the skin of your teeth',
        explanation:
            'Narrowly; barely. Usually used in regard to a narrow escape from a disaster.',
        origin: 'English',
    },
    {
        '': 428,
        text: 'By your leave',
        explanation: 'Without even asking for permission.',
        origin: 'English',
    },
    {
        '': 429,
        text: 'Bygones be bygones - Let',
        explanation:
            "To 'let bygones be bygones' is to allow the unpleasant things that have happened in the past  be forgotten.",
        origin: 'English',
    },
    {
        '': 430,
        text: 'Caesar Salad',
        explanation:
            'The name of a salad typically consisting of cos lettuce, garlic, croutons and anchovies, dressed with olive oil, lemon juice and parmesan cheese.',
        origin: 'English',
    },
    {
        '': 431,
        text: 'Call a spade a spade',
        explanation:
            'To call a spade a spade is to speak plainly - to describe something as it really is.',
        origin: 'English',
    },
    {
        '': 432,
        text: 'Call of the wild - The',
        explanation: 'The appeal of nature in the raw.',
        origin: 'English',
    },
    {
        '': 433,
        text: 'Camera cannot lie - The',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 434,
        text: "Can't be overestimated/can't be underestimated",
        explanation:
            "There has always been some muddling up of the words overestimate and underestimate. The use of the negative in the expressions 'can't be over/underestimated' makes it easy to slip up. Also, the fact that, when you use either phrase, the context of what you are saying usually makes your meaning clear. Many speakers (and the people they are speaking to) just don't bother to check.",
        origin: 'English',
    },
    {
        '': 435,
        text: "Can't hold a candle to",
        explanation:
            "The expression 'can't hold a candle to' refers to someone who\ncompares badly to an known authority - to be unfit even to hold a subordinate position.",
        origin: 'English',
    },
    {
        '': 436,
        text: 'Canteen culture',
        explanation:
            'The colloquial name for the conservative and discriminatory attitudes held by some sections of the British police forces.',
        origin: 'English',
    },
    {
        '': 437,
        text: 'Canterbury pace',
        explanation: 'The pace of mounted pilgrims.',
        origin: 'English',
    },
    {
        '': 438,
        text: 'Carbon-copy',
        explanation: 'An exact duplicate.',
        origin: 'English',
    },
    {
        '': 439,
        text: 'Carbon footprint',
        explanation:
            'The amount of carbon dioxide (CO2) emitted during an industrial or domestic process; a measure of how that process contributes toward global warming.',
        origin: 'English',
    },
    {
        '': 440,
        text: 'Card-sharp',
        explanation:
            'Someone who is skilful at playing or manipulating cards, or one who makes a living by cheating at cards.',
        origin: 'English',
    },
    {
        '': 441,
        text: 'Carey Street - On',
        explanation: 'Euphemism\nfor being bankrupt or in debt.',
        origin: 'English',
    },
    {
        '': 442,
        text: 'Carpe diem',
        explanation:
            "'Carpe diem' is usually translated from the Latin as 'seize the day'. However, the more pedantic of Latin scholars may very well seize you by the throat if you suggest that translation.",
        origin: 'English',
    },
    {
        '': 443,
        text: 'Carry coals to Newcastle',
        explanation: 'To do something pointless and superfluous.',
        origin: 'English',
    },
    {
        '': 444,
        text: 'Cart before the horse - Put the',
        explanation: 'Reverse the accepted or logical order of things.',
        origin: 'English',
    },
    {
        '': 445,
        text: 'Carte blanche',
        explanation:
            'Having free rein to choose whatever course of action you want.',
        origin: 'English',
    },
    {
        '': 446,
        text: 'Cash on the nail',
        explanation: 'Payment made immediately.',
        origin: 'English',
    },
    {
        '': 447,
        text: "(Ne'er) cast a clout till May be out",
        explanation:
            "With most phrases and sayings the meaning is well understood but the origin is uncertain. With this one the main interest is the doubt about the meaning. So, this time, we'll have the origin first.",
        origin: 'English',
    },
    {
        '': 448,
        text: 'Cast the first stone',
        explanation:
            "Be the first to attack a sinner. The implication in Jesus' teaching was that the members of the congregation were only in a position to condemn a sinner if they were without sin themselves - in other words, 'judge not lest you be judged'.",
        origin: 'English',
    },
    {
        '': 449,
        text: 'Cat burglar',
        explanation:
            "A 'Cat burglar' is a burglar who enters buildings by extraordinarily skilful feats of climbing.",
        origin: 'English',
    },
    {
        '': 450,
        text: 'Cat got your tongue?',
        explanation:
            "'Has the cat got your tongue' is a light-hearted question addressed to someone who is inexplicably silent.",
        origin: 'English',
    },
    {
        '': 451,
        text: 'Cat may look at a king - A',
        explanation:
            "An inferior isn't completely restricted in what they may do in the presence of a superior.",
        origin: 'English',
    },
    {
        '': 452,
        text: 'Cat out of the bag - Let the',
        explanation:
            'To let the cat out of the bag is to disclose a secret, either deliberately or inadvertently.',
        origin: 'English',
    },
    {
        '': 453,
        text: 'Catbird seat - In the',
        explanation: 'In\na superior or advantageous position.',
        origin: 'English',
    },
    {
        '': 454,
        text: 'Catch 22',
        explanation:
            "'Catch-22' is a paradox in which the attempt to escape makes escape impossible.",
        origin: 'English',
    },
    {
        '': 455,
        text: "Cat's Cradle",
        explanation:
            'A box-like shape which is made by from twisting a loop of string around their fingers. It is usually played by two players, although some variations may be played by one.',
        origin: 'English',
    },
    {
        '': 456,
        text: "Cat's pajamas - The",
        explanation:
            "If something is said to be the cat's pajamas it is excellent - the highest quality.",
        origin: 'English',
    },
    {
        '': 457,
        text: 'Caught in a cleft stick',
        explanation:
            'In a position where advance and retreat are both impossible; in a fix.',
        origin: 'English',
    },
    {
        '': 458,
        text: 'Caught by the short hairs',
        explanation:
            "To be 'caught/got/held by the short hairs', or in the UK equivalent '... by the short and curlies', is to be trapped by an opponent in a position one can't easily escape from.",
        origin: 'English',
    },
    {
        '': 459,
        text: 'Caught red-handed',
        explanation:
            'To be caught red-handed is to be caught in the act of committing a misdemeanour, with the evidence there for all to see.',
        origin: 'English',
    },
    {
        '': 460,
        text: 'Chain is only as strong as its weakest link - A',
        explanation:
            "The proverb 'A chain is only as strong as its weakest link' has a literal meaning, although the 'weakest link' referred to is figurative and usually applies to a person or technical feature rather than the link of an actual chain.",
        origin: 'English',
    },
    {
        '': 461,
        text: 'Chaise lounge',
        explanation:
            "A 'chaise lounge' is the American name of a form of sofa with a backrest at one end only. Elsewhere these sofas are called chaise longues.",
        origin: 'English',
    },
    {
        '': 462,
        text: 'Chalk and cheese',
        explanation: 'Two things that are  very different from each other.',
        origin: 'English',
    },
    {
        '': 463,
        text: 'Champ at the bit',
        explanation:
            'Be restless and impatient to commence; especially during an unwelcome delay.',
        origin: 'English',
    },
    {
        '': 464,
        text: 'Chance would be a fine thing',
        explanation:
            'There is not much chance of that [thing], welcome though it would be.',
        origin: 'English',
    },
    {
        '': 465,
        text: 'Channel surfing',
        explanation:
            'Surfing (a.k.a. surfboarding) is, in its literal meaning, the riding of a wave while standing or lying on a surfboard.',
        origin: 'English',
    },
    {
        '': 466,
        text: 'Charity begins at home',
        explanation:
            "The proverb 'charity begins at home' expresses the overriding demand to take care of one's family, before caring for others.",
        origin: 'English',
    },
    {
        '': 467,
        text: 'Charley horse',
        explanation: 'Leg cramp or stiffness.',
        origin: 'English',
    },
    {
        '': 468,
        text: 'Charm offensive',
        explanation:
            'A\npublicity campaign, usually by politicians, that attempts to attract supporters\nby emphasizing their charisma or trustworthiness.',
        origin: 'English',
    },
    {
        '': 469,
        text: 'Charmed life',
        explanation:
            'A life of guaranteed good fortune or invulnerability, by virtue of a charm or spell.',
        origin: 'English',
    },
    {
        '': 470,
        text: 'Cheap at half the price',
        explanation: 'Of uncertain meaning - see below.',
        origin: 'English',
    },
    {
        '': 471,
        text: 'Cheek by jowl',
        explanation: 'Side by side; in close or intimate proximity',
        origin: 'English',
    },
    {
        '': 472,
        text: 'Cherchez la femme',
        explanation:
            'The translation from the French is "look for/seek the woman". It is used when a man behaves unusually or gets into a quarrel or other difficulty and the reason for it is sought.',
        origin: 'English',
    },
    {
        '': 473,
        text: 'Chew the cud',
        explanation:
            "To 'chew the cud', in a literal sense, is for ruminant animals to masticate regurgitated food. In a metaphorical sense it is, for humans, to chat in an aimless manner.",
        origin: 'English',
    },
    {
        '': 474,
        text: 'Chick flick',
        explanation:
            'A film with characterization and story-lines that appeal especially to women.',
        origin: 'English',
    },
    {
        '': 475,
        text: 'Chickens come home to roost',
        explanation:
            'Bad deeds or words return to discomfort their perpetrator.',
        origin: 'English',
    },
    {
        '': 476,
        text: 'Children should be seen and not heard',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 477,
        text: 'Chinese whispers',
        explanation:
            "Inaccurately transmitted gossip. 'Chinese whispers' refers to a sequence of repetitions of a story, each one differing slightly from the original, so that the final telling bears only a scant resemblance to the original.",
        origin: 'English',
    },
    {
        '': 478,
        text: 'Chinless wonder',
        explanation: 'A\nmember of the upper classes - usually male.',
        origin: 'English',
    },
    {
        '': 479,
        text: 'Chip off the old block',
        explanation:
            'A person or thing that derives from the source or parentage.',
        origin: 'English',
    },
    {
        '': 480,
        text: 'Chip on your shoulder',
        explanation:
            "A 'chip on your shoulder' is a perceived grievance or sense of inferiority.",
        origin: 'English',
    },
    {
        '': 481,
        text: 'Chit-chat',
        explanation: 'Casual small-talk or gossip.',
        origin: 'English',
    },
    {
        '': 482,
        text: 'Chock-a-block',
        explanation: 'Crammed so tightly together as to prevent movement.',
        origin: 'English',
    },
    {
        '': 483,
        text: 'Chop and change',
        explanation: "To  change one's mind or action again and again.",
        origin: 'English',
    },
    {
        '': 484,
        text: 'Chop-chop',
        explanation: 'Be quick; hurry up.',
        origin: 'English',
    },
    {
        '': 485,
        text: 'Chow down',
        explanation:
            "Sit down to eat - similar in meaning to the British term 'tuck in'.",
        origin: 'English',
    },
    {
        '': 486,
        text: 'Christmas box - A',
        explanation:
            "See also: our list of 'Christmas Card Sayings and Expressions'.",
        origin: 'English',
    },
    {
        '': 487,
        text: 'Christmas card verses',
        explanation:
            "Self-made cards with goodwill verses have been sent, by hand or by post, for centuries. The first that's recognizable as what we now think of as a Christmas card, that is, a printed card sent by post, was sent at Christmas 1843.",
        origin: 'English',
    },
    {
        '': 488,
        text: 'Clean breast - make a',
        explanation: 'To make a full disclosure; to confess.',
        origin: 'English',
    },
    {
        '': 489,
        text: 'Cleanliness is next to godliness',
        explanation:
            "The proverb 'cleanliness is next to godliness' expresses the idea that those who are pure and wholesome are close to God.",
        origin: 'English',
    },
    {
        '': 490,
        text: 'Clear blue water',
        explanation:
            'Originally a term from competitive rowing referring to an obvious gap between the leading boat and those following. In more recent years it has been used allusively to mean the discernible distance between the ideologies of two political parties.',
        origin: 'English',
    },
    {
        '': 491,
        text: 'Cleft stick - In a',
        explanation:
            'In a position where advance and retreat are both impossible; in a fix.',
        origin: 'English',
    },
    {
        '': 492,
        text: 'Cliff-hanger',
        explanation:
            'A story or situation in which the main consideration is one of suspense.',
        origin: 'English',
    },
    {
        '': 493,
        text: 'Climb on the bandwagon',
        explanation:
            'Join a growing movement in support of someone or something, often in an opportunist way, when that movement is seen to have become successful.',
        origin: 'English',
    },
    {
        '': 494,
        text: 'Cloak and dagger',
        explanation:
            'Concerned with, or characteristic of espionage or intrigue, especially in the context of drama.',
        origin: 'English',
    },
    {
        '': 495,
        text: 'Clod-hopper',
        explanation: 'A rough, unsophisticated countryman.',
        origin: 'English',
    },
    {
        '': 496,
        text: 'Clog up',
        explanation: 'To  become obstructed.',
        origin: 'English',
    },
    {
        '': 497,
        text: 'Close, but no cigar',
        explanation:
            "The expression 'close but no cigar' is used to indicate that someone has fallen just short of a successful outcome and failed to secure any reward.",
        origin: 'English',
    },
    {
        '': 498,
        text: 'Close quarters',
        explanation:
            'Close contact with, especially in a military context - close contact with the enemy.',
        origin: 'English',
    },
    {
        '': 499,
        text: 'Close your eyes and think of England',
        explanation:
            "'Close your eyes and think of England' is a reference to unwanted sexual intercourse - specifically advice to an unwilling wife when sexually approached by her husband.",
        origin: 'English',
    },
    {
        '': 500,
        text: 'Cloud cuckoo land',
        explanation: 'A realm of fanciful or impractical, idealistic notions.',
        origin: 'English',
    },
    {
        '': 501,
        text: 'Cloud nine',
        explanation:
            "To be 'on cloud nine' is to be in a state of blissful happiness.",
        origin: 'English',
    },
    {
        '': 502,
        text: 'Club sandwich',
        explanation:
            'A club sandwich is a sandwich of bread, sometimes toasted, and several other ingredients, often chicken or turkey,  bacon, lettuce, tomato, and mayonnaise. The sandwiches are usually cut into halves or quarters to form small triangles.',
        origin: 'English',
    },
    {
        '': 503,
        text: "Clue - don't have a",
        explanation: 'Without any knowledge or understanding.',
        origin: 'English',
    },
    {
        '': 504,
        text: 'Clutch at straws',
        explanation:
            'Try any route to get out of a desperate situation, no matter how unlikely it is to succeed.',
        origin: 'English',
    },
    {
        '': 505,
        text: 'Coals to Newcastle - Carry',
        explanation: 'To do something pointless and superfluous.',
        origin: 'English',
    },
    {
        '': 506,
        text: 'Coat of many colours',
        explanation: 'From the Bible, Genesis 37:3 (King James Version):',
        origin: 'English',
    },
    {
        '': 507,
        text: 'Cobblers - A load of',
        explanation: 'Nonsense, rubbish.',
        origin: 'English',
    },
    {
        '': 508,
        text: 'Cock-a-hoop',
        explanation: 'In a state of exuberant elation.',
        origin: 'English',
    },
    {
        '': 509,
        text: 'Cock-sure',
        explanation:
            "Certain. This term has been used in many ways, all with different but related meanings; for example, 'absolutely sure or safe', 'completely dependable', 'sure in one's own mind', etc. The common thread through all of these is certainty.",
        origin: 'English',
    },
    {
        '': 510,
        text: 'Cock a snook',
        explanation: 'A derisive gesture.',
        origin: 'English',
    },
    {
        '': 511,
        text: 'Cock and bull story',
        explanation: 'A\nfanciful and unbelievable tale.',
        origin: 'English',
    },
    {
        '': 512,
        text: 'Cock-up',
        explanation: 'A blunder; a confused situation.',
        origin: 'English',
    },
    {
        '': 513,
        text: 'Cockney rhyming slang',
        explanation:
            'A type of slang in which  words are replaced by  words or phrases they rhyme with.',
        origin: 'English',
    },
    {
        '': 514,
        text: 'Codswallop - a load of',
        explanation: 'Nonsense.',
        origin: 'English',
    },
    {
        '': 515,
        text: 'Cogito ergo sum',
        explanation:
            "Usually translated from the Latin as 'I think, therefore I am'.",
        origin: 'English',
    },
    {
        '': 516,
        text: 'Coin a phrase',
        explanation: 'To create a new phrase.',
        origin: 'English',
    },
    {
        '': 517,
        text: 'Cold as any stone',
        explanation: 'Very cold.',
        origin: 'English',
    },
    {
        '': 518,
        text: 'Cold comfort',
        explanation:
            'Slight consolation or encouragement in the face of a reverse.',
        origin: 'English',
    },
    {
        '': 519,
        text: 'Cold enough to freeze the balls off a brass monkey',
        explanation:
            "If it's said to be 'cold enough to freeze the balls off a brass monkey' it is very\ncold indeed.",
        origin: 'English',
    },
    {
        '': 520,
        text: 'Cold feet',
        explanation:
            "To 'get cold feet' is to become disheartened or timid, losing one's previous enthusiasm or courage.",
        origin: 'English',
    },
    {
        '': 521,
        text: 'Cold shoulder',
        explanation:
            'A display of coldness or indifference, intended to wound.',
        origin: 'English',
    },
    {
        '': 522,
        text: 'Cold turkey',
        explanation:
            'The sudden and complete withdrawal from an addictive substance and/or the physiological effects of such a withdrawal. Also, predominantly in the U.S.A., plain speaking.',
        origin: 'English',
    },
    {
        '': 523,
        text: "Colder than a witch's tit",
        explanation:
            "'Colder than a witch's tit' is an expressive way of saying 'very cold' - usually in reference to the weather.",
        origin: 'English',
    },
    {
        '': 524,
        text: 'Collywobbles - The',
        explanation:
            "A\nstate of intestinal disorder, usually accompanied by a rumbling stomach; for example, 'butterflies in the stomach'.",
        origin: 'English',
    },
    {
        '': 525,
        text: 'Colour up',
        explanation: 'To blush or turn red in the face.',
        origin: 'English',
    },
    {
        '': 526,
        text: 'Come a cropper',
        explanation: 'Fall over or fail at some venture.',
        origin: 'English',
    },
    {
        '': 527,
        text: 'Come clean',
        explanation: 'To make a full disclosure; to confess.',
        origin: 'English',
    },
    {
        '': 528,
        text: 'Come on down',
        explanation:
            'The catchphrase used to invite audience members to the stage to become contestants in game shows.',
        origin: 'English',
    },
    {
        '': 529,
        text: 'Come up trumps',
        explanation:
            "To complete something well or successfully, especially in circumstances in which it isn't expected.",
        origin: 'English',
    },
    {
        '': 530,
        text: 'Come what come may',
        explanation: 'Let whatever events crop up come to pass.',
        origin: 'English',
    },
    {
        '': 531,
        text: 'Comes to the crunch - (When it)',
        explanation:
            "When a decisive point at which one's future course is determined.",
        origin: 'English',
    },
    {
        '': 532,
        text: '(Coming in) on a wing and a prayer',
        explanation:
            'In a difficult situation, relying on meagre resources and luck to get out of it.',
        origin: 'English',
    },
    {
        '': 533,
        text: 'Common sense',
        explanation:
            'Good practical sense. The natural intelligence that is believed to be available to all rational people.',
        origin: 'English',
    },
    {
        '': 534,
        text: 'Comparisons are odious',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 535,
        text: 'Compassion fatigue',
        explanation:
            'A weariness of and diminishing public response to frequent requests for charity.',
        origin: 'English',
    },
    {
        '': 536,
        text: 'Complete shambles',
        explanation: 'A scene of disorder; a ruin; a mess.',
        origin: 'English',
    },
    {
        '': 537,
        text: 'Concrete overcoat',
        explanation:
            'A jocular reference to a form of coffin, alluding to a body being dumped beneath a layer of concrete.',
        origin: 'English',
    },
    {
        '': 538,
        text: 'Cook the books',
        explanation:
            "The deliberate distorting of a firm's financial accounts, often with the aim of avoiding the payment of tax.",
        origin: 'English',
    },
    {
        '': 539,
        text: 'Cookie cutter',
        explanation:
            'Originally, a utensil for cutting shaped pieces out of dough. More recently, characterising a lack of originality.',
        origin: 'English',
    },
    {
        '': 540,
        text: 'Cool as a cucumber',
        explanation: "'As cool as a cucumber' means calm and unruffled.",
        origin: 'English',
    },
    {
        '': 541,
        text: 'Cool Britannia',
        explanation:
            'Used to describe the contemporary culture of the United Kingdom, primarily during the 1990s.',
        origin: 'English',
    },
    {
        '': 542,
        text: 'Cop an attitude',
        explanation: 'Adopt an aggressive or antagonistic bearing.',
        origin: 'English',
    },
    {
        '': 543,
        text: 'Copper-bottomed',
        explanation:
            'A thing that is copper-bottomed, whether it be an object or an idea, is genuine; trustworthy; unlikely to fail.',
        origin: 'English',
    },
    {
        '': 544,
        text: 'Cor blimey',
        explanation: "'Cor blimey' is an exclamation of surprise.",
        origin: 'English',
    },
    {
        '': 545,
        text: 'Cordon bleu',
        explanation:
            "The rating of 'Cordon bleu' is an indication of high quality, especially of cooking.",
        origin: 'English',
    },
    {
        '': 546,
        text: 'Cost an arm and a leg',
        explanation: 'A large, possibly exorbitant, amount of money.',
        origin: 'English',
    },
    {
        '': 547,
        text: 'Cotton on to',
        explanation: 'To get to know or understand something.',
        origin: 'English',
    },
    {
        '': 548,
        text: 'Cotton-picking',
        explanation:
            "'Cotton-picking' ia an intensifier, used as a general term of disapproval. A substitute for the word 'damned'.",
        origin: 'English',
    },
    {
        '': 549,
        text: 'Count your chickens before they are hatched',
        explanation: "Don't be hasty in evaluating one's assets.",
        origin: 'English',
    },
    {
        '': 550,
        text: 'Countenance more in sorrow than in anger - A',
        explanation:
            'Literal meaning - a person or thing that displays more  sadness than  anger.',
        origin: 'English',
    },
    {
        '': 551,
        text: 'Counting sheep',
        explanation:
            'Counting sheep is  a distraction technique used to help people get to sleep.',
        origin: 'English',
    },
    {
        '': 552,
        text: 'Country bumpkin',
        explanation: 'An awkward, unsophisticated rustic; a clown',
        origin: 'English',
    },
    {
        '': 553,
        text: 'Course of true love never did run smooth - The',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 554,
        text: 'Crack of doom - The',
        explanation:
            'The sound that heralds the day of the Last Judgment, when God will decree the fates of all men according to the good and evil of their earthly lives.',
        origin: 'English',
    },
    {
        '': 555,
        text: 'Crackpot',
        explanation: 'A crazy person; a crank.',
        origin: 'English',
    },
    {
        '': 556,
        text: 'Crapper - The',
        explanation: 'The\n lavatory.',
        origin: 'English',
    },
    {
        '': 557,
        text: 'Crocodile tears',
        explanation:
            'To weep crocodile tears is to put on an insincere show of sorrow.',
        origin: 'English',
    },
    {
        '': 558,
        text: 'Crop up',
        explanation: 'To emerge or occur incidentally or unexpectedly.',
        origin: 'English',
    },
    {
        '': 559,
        text: 'Crown jewels',
        explanation:
            "Literally, the Crown Jewels are the state jewellery of the United Kingdom. In a figurative sense 'the crown jewels' is a slang term for the male genitalia.",
        origin: 'English',
    },
    {
        '': 560,
        text: 'Cry havoc and let slip the dogs of war',
        explanation:
            "The military order Havoc! was a signal given to the English military forces in the Middle Ages to direct the soldiery (in Shakespeare's parlance 'the dogs of war') to pillage and chaos.",
        origin: 'English',
    },
    {
        '': 561,
        text: "Curate's egg",
        explanation:
            'Something bad that is called good out of politeness or timidity.',
        origin: 'English',
    },
    {
        '': 562,
        text: 'Curiosity killed the cat',
        explanation: 'Inquisitiveness can lead one into dangerous situations.',
        origin: 'English',
    },
    {
        '': 563,
        text: 'Curry favour',
        explanation:
            'To curry favour is to attempt to gain benefit or ingratiate oneself, by officious courtesy or flattery.',
        origin: 'English',
    },
    {
        '': 564,
        text: 'Customer is always right - The',
        explanation:
            "'The customer is always right' is a trading slogan that states a company's keenness to be seen to put the customer first. The implied suggestion is that the company is so customer focussed that they will say the customer is right, even if they aren't.",
        origin: 'English',
    },
    {
        '': 565,
        text: 'Cut and run',
        explanation: 'Run away.',
        origin: 'English',
    },
    {
        '': 566,
        text: 'Cut of your jib - The',
        explanation: "One's general appearance and demeanour.",
        origin: 'English',
    },
    {
        '': 567,
        text: 'Cut off without a penny',
        explanation: 'Disinherited.',
        origin: 'English',
    },
    {
        '': 568,
        text: 'Cut off your nose to spite your face',
        explanation:
            "To 'cut off your nose to spite your face' is to disadvantage yourself in order to do harm to an adversary.",
        origin: 'English',
    },
    {
        '': 569,
        text: 'Cut the mustard',
        explanation: 'To succeed; to come up to expectations.',
        origin: 'English',
    },
    {
        '': 570,
        text: 'Cut to the chase',
        explanation: 'Get to the point - leaving out unnecessary preamble.',
        origin: 'English',
    },
    {
        '': 571,
        text: "Cute as a bug's ear",
        explanation: 'Very cute.',
        origin: 'English',
    },
    {
        '': 572,
        text: 'Daft as a brush',
        explanation:
            "To be 'as daft as a brush' is to be very stupid or foolish.",
        origin: 'English',
    },
    {
        '': 573,
        text: 'Damp squib',
        explanation:
            "A 'damp squib' is something that fails ignominiously to satisfy  expectations; an anti-climax, a disappointment.",
        origin: 'English',
    },
    {
        '': 574,
        text: 'Dance attendance on',
        explanation:
            'To wait upon someone in an overly assiduous or sycophantic manner.',
        origin: 'English',
    },
    {
        '': 575,
        text: 'Daniel come to judgement',
        explanation:
            'Someone who makes a wise judgement about something that has previously proven difficult to resolve.',
        origin: 'English',
    },
    {
        '': 576,
        text: 'Darby and Joan',
        explanation:
            "'Darby and Joan' are an archetypal elderly couple. The phrase is used as a general term for old age.",
        origin: 'English',
    },
    {
        '': 577,
        text: 'Dark horse',
        explanation:
            'A dark horse is someone, who was previously little known, emerges to prominence in a competition.',
        origin: 'English',
    },
    {
        '': 578,
        text: 'Darkest hour - The',
        explanation:
            'The darkest hour is the time when bad events are at their worst and most dispiriting.',
        origin: 'English',
    },
    {
        '': 579,
        text: 'Darkest hour is just before the dawn - The',
        explanation: 'There is hope, even in the worst of circumstances.',
        origin: 'English',
    },
    {
        '': 580,
        text: 'Dark side - The',
        explanation:
            'The evil and malevolent aspect of human personality or society, often referred to in a lighthearted or comic context.',
        origin: 'English',
    },
    {
        '': 581,
        text: 'Darling buds of May',
        explanation: 'An appreciation of what is fresh and new.',
        origin: 'English',
    },
    {
        '': 582,
        text: 'Dash to pieces',
        explanation: 'Break into fragments.',
        origin: 'English',
    },
    {
        '': 583,
        text: 'Date rape',
        explanation: 'Rape by an acquaintance during a social engagement.',
        origin: 'English',
    },
    {
        '': 584,
        text: "Davy Jones' locker",
        explanation:
            'The bottom of the sea; the mythical resting place of drowned mariners.',
        origin: 'English',
    },
    {
        '': 585,
        text: 'Daylight robbery',
        explanation: 'Blatant and unfair overcharging.',
        origin: 'English',
    },
    {
        '': 586,
        text: 'Dead as a dodo',
        explanation: 'Unambiguously and unequivocally dead.',
        origin: 'English',
    },
    {
        '': 587,
        text: 'Dead as a doornail',
        explanation:
            "To be 'as dead as a doornail' is to be utterly dead,  devoid of life (when applied to people, plants or animals) or finished with, unusable (when applied to inanimate objects).",
        origin: 'English',
    },
    {
        '': 588,
        text: 'Dead cat bounce',
        explanation:
            'A dead cat bounce is a small and temporary recovery in a financial market following a large fall.',
        origin: 'English',
    },
    {
        '': 589,
        text: 'Dead in the water',
        explanation:
            "A dead in the water ship is one that is motionless and without power. The figurative expression 'dead in the water' means 'unable to function; without hope of future  success;  doomed'.",
        origin: 'English',
    },
    {
        '': 590,
        text: 'Dead ringer',
        explanation: 'An\nexact duplicate.',
        origin: 'English',
    },
    {
        '': 591,
        text: 'Delusions of grandeur',
        explanation:
            "A false and exaggerated belief about one's status or importance.",
        origin: 'English',
    },
    {
        '': 592,
        text: 'Derring-do',
        explanation: 'Heroic daring.',
        origin: 'English',
    },
    {
        '': 593,
        text: 'Designer stubble',
        explanation:
            'A short growth of beard, aimed to affect a rugged masculine or deliberately unkempt appearance.',
        origin: 'English',
    },
    {
        '': 594,
        text: 'Deus ex machina',
        explanation:
            'Something or someone that comes in the nick of time to solve a difficulty, especially in works of fiction.',
        origin: 'English',
    },
    {
        '': 595,
        text: 'Devil and the deep blue sea',
        explanation: 'In difficulty, faced with two dangerous alternatives.',
        origin: 'English',
    },
    {
        '': 596,
        text: 'Devil Incarnate - The',
        explanation: 'The Devil in human form.',
        origin: 'English',
    },
    {
        '': 597,
        text: 'Devil take the hindmost - The',
        explanation:
            'A proverbial phrase indicating that those who lag behind will receive no aid.',
        origin: 'English',
    },
    {
        '': 598,
        text: 'Devil to pay - The',
        explanation:
            "'The devil to pay' means serious trouble because of a particular circumstance or obligation.",
        origin: 'English',
    },
    {
        '': 599,
        text: "Devil's advocate",
        explanation:
            'Figuratively, one who takes a contrary position for the sake of testing an argument, or just to be perverse.',
        origin: 'English',
    },
    {
        '': 600,
        text: 'Diamond in the rough',
        explanation:
            'Someone who is basically good hearted but lacking social graces and respect for the law.',
        origin: 'English',
    },
    {
        '': 601,
        text: 'Diamond is forever - A',
        explanation: "Advertising\nslogan for De Beers' diamonds.",
        origin: 'English',
    },
    {
        '': 602,
        text: 'Dicky-bird - Not a',
        explanation: 'Not a sound; not an utterance.',
        origin: 'English',
    },
    {
        '': 603,
        text: 'Die-hard',
        explanation:
            'A person who holds stubbornly to a minority view, in defiance of the circumstances.',
        origin: 'English',
    },
    {
        '': 604,
        text: 'Die has been cast - The',
        explanation:
            "'The die has been cast' means that an\nirrevocable choice has been made.",
        origin: 'English',
    },
    {
        '': 605,
        text: '(As)  different as chalk and cheese',
        explanation: 'Two things that are  very different from each other.',
        origin: 'English',
    },
    {
        '': 606,
        text: 'Different kettle of fish',
        explanation:
            "'A different kettle of fish' is an alternative to what has been previously considered; a different thing altogether.",
        origin: 'English',
    },
    {
        '': 607,
        text: 'Differently abled',
        explanation:
            "To be 'differently abled' is to be physically or mentally handicapped or disabled but to show qualities that the able-bodied do not have. The expression is intended to avoid the perceived negative connotations of the prefix 'dis' in disabled.",
        origin: 'English',
    },
    {
        '': 608,
        text: 'Dirt bag',
        explanation:
            'Originally a bag or sack with dirt in it. More recently an unkempt or slovenly person.',
        origin: 'English',
    },
    {
        '': 609,
        text: 'Dish fit for the gods - A',
        explanation: 'An offering of high quality.',
        origin: 'English',
    },
    {
        '': 610,
        text: 'Do unto others as you would have them do to you',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 611,
        text: 'Dock your pay',
        explanation: "Make a deduction from a person's pay.",
        origin: 'English',
    },
    {
        '': 612,
        text: "Doesn't know shit from Shinola",
        explanation:
            'Someone might be said not to know shit from Shinola if they display poor judgment or knowledge.',
        origin: 'English',
    },
    {
        '': 613,
        text: 'Doff your hat',
        explanation:
            'To doff your hat is to raise your hat in acknowledgement of or deference to another.',
        origin: 'English',
    },
    {
        '': 614,
        text: 'Dog days',
        explanation:
            "The 'dog days' are the very hot days during July and August.",
        origin: 'English',
    },
    {
        '': 615,
        text: 'Dog in the manger',
        explanation: 'Spiteful\n and mean-spirited.',
        origin: 'English',
    },
    {
        '': 616,
        text: "(A) Dog is a man's best friend",
        explanation:
            'An animal that performs valuable service to humans, often with reference to dogs.',
        origin: 'English',
    },
    {
        '': 617,
        text: "Dog's bollocks",
        explanation:
            'Excellent - the absolute apex. In other contexts the word bollocks (meaning testicles) has a negative connotation; for example:',
        origin: 'English',
    },
    {
        '': 618,
        text: "Dog's breakfast",
        explanation: 'A confused mess or muddle.',
        origin: 'English',
    },
    {
        '': 619,
        text: "Dog's dinner",
        explanation: "The expression 'dog's dinner' has several meanings:",
        origin: 'English',
    },
    {
        '': 620,
        text: 'Doldrums - in the',
        explanation: 'In low spirits; feeling dull and drowsy.',
        origin: 'English',
    },
    {
        '': 621,
        text: 'Dollars to doughnuts',
        explanation: 'An outcome that is almost assured; a certainty.',
        origin: 'English',
    },
    {
        '': 622,
        text: 'Done a runner',
        explanation: 'Left in a hurry.',
        origin: 'English',
    },
    {
        '': 623,
        text: 'Done to a turn',
        explanation: 'Cooked just right.',
        origin: 'English',
    },
    {
        '': 624,
        text: "Donkey's years",
        explanation: 'A very long time.',
        origin: 'English',
    },
    {
        '': 625,
        text: "Don't call us, we'll call you",
        explanation: "Don't bother to pursue your application further.",
        origin: 'English',
    },
    {
        '': 626,
        text: "Don't cast your pearls before swine",
        explanation:
            "Items of quality offered to those who aren't cultured enough to appreciate them.",
        origin: 'English',
    },
    {
        '': 627,
        text: "Don't change horses in midstream",
        explanation:
            "Don't change your leader or your basic position when part-way through a campaign or a project .",
        origin: 'English',
    },
    {
        '': 628,
        text: "Don't count your chickens before they are hatched",
        explanation: "Don't be hasty in evaluating one's assets.",
        origin: 'English',
    },
    {
        '': 629,
        text: "Don't die like I did",
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 630,
        text: "Don't get mad, get even",
        explanation:
            "The proverbial saying 'don't get mad, get even' means that, when suffering a loss at the hands of another, don't waste your energy on anger but work towards redressing the harm done.",
        origin: 'English',
    },
    {
        '': 631,
        text: "Don't go there",
        explanation: "I don't want to discuss that.",
        origin: 'English',
    },
    {
        '': 632,
        text: "Don't have a clue",
        explanation: 'Without any knowledge or understanding.',
        origin: 'English',
    },
    {
        '': 633,
        text: "Don't keep a dog and bark yourself",
        explanation:
            "The proverbial saying 'don't keep a dog and bark yourself' is advice that you should not  pay someone to do a task and then do it yourself.",
        origin: 'English',
    },
    {
        '': 634,
        text: "Don't know shit from Shinola",
        explanation:
            'Someone might be said not to know shit from Shinola if they display poor judgment or knowledge.',
        origin: 'English',
    },
    {
        '': 635,
        text: "Don't let the bastards grind you down",
        explanation: 'The meaning of this proverbial saying is self evident.',
        origin: 'English',
    },
    {
        '': 636,
        text: "Don't look a gift horse in the mouth",
        explanation:
            "The proverbial saying 'don't look a gift horse in the mouth' means don't be ungrateful when you receive a gift.",
        origin: 'English',
    },
    {
        '': 637,
        text: "Don't shut the stable door after the horse has bolted",
        explanation:
            "Don't waste time taking precautions when the damage has already been done.",
        origin: 'English',
    },
    {
        '': 638,
        text: "Don't throw good money after bad",
        explanation:
            "You 'throw good money after bad' when, following the loss of some money, you to incur a further loss in trying to make good.",
        origin: 'English',
    },
    {
        '': 639,
        text: "Don't throw the baby out with the bathwater",
        explanation:
            "Don't discard something valuable along with something undesirable.",
        origin: 'English',
    },
    {
        '': 640,
        text: "Don't try to teach your Grandma to suck eggs",
        explanation:
            "Don't offer advice to someone who has more experience than oneself.",
        origin: 'English',
    },
    {
        '': 641,
        text: 'Doom and gloom',
        explanation:
            'A feeling of pessimism and despondency, often with regard to business or political prospects.',
        origin: 'English',
    },
    {
        '': 642,
        text: 'Double cross',
        explanation:
            'An act of treachery, perpetrated on a previous partner in a deceit.',
        origin: 'English',
    },
    {
        '': 643,
        text: 'Double, double toil and trouble, fire burn, and cauldron bubble',
        explanation: "From Shakespeare's Macbeth, 1605.",
        origin: 'English',
    },
    {
        '': 644,
        text: 'Double Dutch',
        explanation: 'Nonsense; gibberish - a language one cannot understand.',
        origin: 'English',
    },
    {
        '': 645,
        text: 'Double entendre',
        explanation:
            'A figure of speech in which a phrase can be understood in two ways - one of them risquÃ©. Commonly used  to convey sexual puns.',
        origin: 'English',
    },
    {
        '': 646,
        text: 'Double standard',
        explanation:
            'A double standard is a rule which is applied more strictly to one group than to another.',
        origin: 'English',
    },
    {
        '': 647,
        text: 'Double whammy',
        explanation: 'A double blow or setback.',
        origin: 'English',
    },
    {
        '': 648,
        text: 'Down at heel',
        explanation: 'Impoverished.',
        origin: 'English',
    },
    {
        '': 649,
        text: 'Down in the dumps',
        explanation: 'Unhappy; depressed.',
        origin: 'English',
    },
    {
        '': 650,
        text: 'Down to the wire',
        explanation:
            'Referring to the decisive moment at the very end of a close contest.',
        origin: 'English',
    },
    {
        '': 651,
        text: 'Down the pan',
        explanation:
            "If something has gone 'down the pan' it is wasted and unrecoverable.",
        origin: 'English',
    },
    {
        '': 652,
        text: 'Down the tubes',
        explanation: 'Wasted and unrecoverable.',
        origin: 'English',
    },
    {
        '': 653,
        text: 'Drag race',
        explanation:
            'A race between road vehicles - usually two vehicles over a quarter mile straight track and from a standing start. The race is essentially a competition to determine which vehicle has the greater acceleration.',
        origin: 'English',
    },
    {
        '': 654,
        text: 'Dragged through a hedge backwards',
        explanation:
            'Said to someone who is unkempt and whose hair needs brushing.',
        origin: 'English',
    },
    {
        '': 655,
        text: 'Draw a blank',
        explanation:
            'To fail to recall a memory or fail in some speculative effort.',
        origin: 'English',
    },
    {
        '': 656,
        text: 'Draw your horns in',
        explanation: "Restrain one's ardour; lower one's ambitions.",
        origin: 'English',
    },
    {
        '': 657,
        text: 'Dreams of empire',
        explanation: 'The aimless longing for glory.',
        origin: 'English',
    },
    {
        '': 658,
        text: 'Dressed to the nines',
        explanation:
            "To be 'dressed to the nines' is to be dressed flamboyantly or smartly.",
        origin: 'English',
    },
    {
        '': 659,
        text: 'Drink like a fish',
        explanation:
            "To 'drink like a fish' is to drink heavily, especially of alcoholic drink.",
        origin: 'English',
    },
    {
        '': 660,
        text: 'Driving while black',
        explanation:
            'An ironic name for the imagined crime of being a black driver.',
        origin: 'English',
    },
    {
        '': 661,
        text: 'Drop-dead gorgeous',
        explanation: 'Breathtakingly beautiful.',
        origin: 'English',
    },
    {
        '': 662,
        text: 'Drop in the bucket - A',
        explanation:
            'A drop in the bucket is a very small and insignificant proportion of the whole.',
        origin: 'English',
    },
    {
        '': 663,
        text: 'Dropping like flies',
        explanation: 'Falling down ill or dead in large numbers.',
        origin: 'English',
    },
    {
        '': 664,
        text: 'Drummed out of the army',
        explanation: 'Dismissed from army service to the sound of a drum.',
        origin: 'English',
    },
    {
        '': 665,
        text: 'Ducks and drakes',
        explanation: "To behave recklessly; to idly squander one's wealth.",
        origin: 'English',
    },
    {
        '': 666,
        text: 'Dumb blonde',
        explanation: 'A conspicuously attractive but stupid blonde woman.',
        origin: 'English',
    },
    {
        '': 667,
        text: 'Dust up',
        explanation: 'A\n fight.',
        origin: 'English',
    },
    {
        '': 668,
        text: 'Dutch - My old',
        explanation: 'An affectionate term for wife.',
        origin: 'English',
    },
    {
        '': 669,
        text: 'Dutch courage',
        explanation: 'Confidence gained from being drunk.',
        origin: 'English',
    },
    {
        '': 670,
        text: 'Duvet day',
        explanation:
            "A duvet day is a paid day's work in which the employee is allowed to stay at home for rest and relaxation.",
        origin: 'English',
    },
    {
        '': 671,
        text: 'Ear candy',
        explanation:
            'Music with an instant appeal but with little lasting significance.',
        origin: 'English',
    },
    {
        '': 672,
        text: 'Early bird catches the worm - The',
        explanation:
            'Success comes to those who prepare well and put in effort.',
        origin: 'English',
    },
    {
        '': 673,
        text: 'Early to bed and early to rise makes a man healthy, wealthy and wise',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 674,
        text: 'Ear-mark',
        explanation: 'To set aside for a particular purpose.',
        origin: 'English',
    },
    {
        '': 675,
        text: "East, west, home's best",
        explanation:
            'This proverbial saying express the idea that, wherever you travel in the world, your home is the best place to be.',
        origin: 'English',
    },
    {
        '': 676,
        text: 'Easy as pie',
        explanation: 'Very easy.',
        origin: 'English',
    },
    {
        '': 677,
        text: 'Eat drink and be merry',
        explanation:
            'From the Bible, Ecclesiastes VIII 15 (King James Version):',
        origin: 'English',
    },
    {
        '': 678,
        text: 'Eat humble pie',
        explanation:
            'Act submissively and apologetically, especially in admitting an error.',
        origin: 'English',
    },
    {
        '': 679,
        text: 'Eat my hat',
        explanation:
            "A display of confidence in a particular outcome; for example, 'She's always late. If she gets that train I'll eat my hat'.",
        origin: 'English',
    },
    {
        '': 680,
        text: 'Eaten out of house and home',
        explanation:
            "This is one of the phrases that, while having been long attributed to Shakespeare, was in fact used earlier by others and has now been demoted to 'popularised by' rather than 'coined by' the bard. There is a definition of the expression in Thomas Cooper's glossary Thesaurus Linguae Romanae Britannicae, 1578:",
        origin: 'English',
    },
    {
        '': 681,
        text: 'Economical with the truth',
        explanation:
            'Conveying an untrue version of events by leaving out the important facts. A euphemism for lying, in short.',
        origin: 'English',
    },
    {
        '': 682,
        text: 'Eeny, meeny, miny, mo',
        explanation: "The first line of a popular children's counting rhyme.",
        origin: 'English',
    },
    {
        '': 683,
        text: 'Egg on',
        explanation:
            'To egg someone on is to encourage them and urge them forward.',
        origin: 'English',
    },
    {
        '': 684,
        text: 'Eighty six',
        explanation:
            'This little term originally meant that a restaurant had run out of an item that was on the menu.',
        origin: 'English',
    },
    {
        '': 685,
        text: 'Elbow-grease',
        explanation: 'Energetic labour.',
        origin: 'English',
    },
    {
        '': 686,
        text: 'Elementary my dear Watson',
        explanation:
            'The supposed explanation that Sherlock Holmes gave to his assistant, Dr. Watson, when explaining deductions he had made.',
        origin: 'English',
    },
    {
        '': 687,
        text: 'Elephant in the room',
        explanation:
            "An important and obvious topic, which everyone present is aware of, but which isn't discussed, as such discussion is considered to be uncomfortable.",
        origin: 'English',
    },
    {
        '': 688,
        text: 'Elvis has left the building',
        explanation:
            "The expression 'Elvis has left the building' was originally a literal announcement that Elvis Presely had left after a show. It later took on a more general meaning of 'the show is over; there's nothing more to say'.",
        origin: 'English',
    },
    {
        '': 689,
        text: "Emperor's new clothes",
        explanation:
            'The label given to any fictional item that viewers have been induced into believing as real..',
        origin: 'English',
    },
    {
        '': 690,
        text: 'End of story',
        explanation: "The talking is over - there's no more to be said.",
        origin: 'English',
    },
    {
        '': 691,
        text: 'Ends of the earth  - The',
        explanation: 'The furthest reaches of the land.',
        origin: 'English',
    },
    {
        '': 692,
        text: 'Enough is as good as a feast',
        explanation:
            'To get Enough is enough is to come off worst in a bargain or contest.',
        origin: 'English',
    },
    {
        '': 693,
        text: 'Enough is enough',
        explanation:
            'To get Enough is enough is to come off worst in a bargain or contest.',
        origin: 'English',
    },
    {
        '': 694,
        text: "Englishman's home is his castle",
        explanation: "The English dictum that a man's home is his refuge.",
        origin: 'English',
    },
    {
        '': 695,
        text: 'Eponymous Phrases',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 696,
        text: 'Et tu, Brute',
        explanation:
            "Et tu Brute\" are supposedly the dying words of Julius Caesar. They translate from Latin as 'You too, Brutus?'.",
        origin: 'English',
    },
    {
        '': 697,
        text: 'Ethnic cleansing',
        explanation:
            "The expression 'ethnic cleansing' is a  euphemism for the ruthless removal or killing of an ethnic or religious group from areas that have been taken over by opposing forces.",
        origin: 'English',
    },
    {
        '': 698,
        text: 'Euphemisms',
        explanation:
            "English has a wealth of euphemisms. They are coded expressions that we use when whatever we are referring to is considered inappropriate for the circumstances or when we are embarrassed or uncomfortable with the literal version. As one might expect, many euphemisms relate to death or to what a true euphemist would refer to as 'the trouser region'.",
        origin: 'English',
    },
    {
        '': 699,
        text: 'Even at the turning of the tide',
        explanation:
            "The 'turning of the tide' is literally the change of the tide from incoming to outgoing, or vice-versa. Normally the phrase is used to denote some change from a previously stable course of events.",
        origin: 'English',
    },
    {
        '': 700,
        text: 'Every cloud has a silver lining',
        explanation:
            "The proverbial saying 'every cloud has a silver lining' is used to convey the notion that, no matter how bad a situation might seem, there is always has some good aspect to it.",
        origin: 'English',
    },
    {
        '': 701,
        text: 'Everybody out',
        explanation:
            "An injunction to workers to 'down tools' come out on strike.",
        origin: 'English',
    },
    {
        '': 702,
        text: 'Exceedingly well read',
        explanation: 'Erudite and literate.',
        origin: 'English',
    },
    {
        '': 703,
        text: 'Exception that proves the rule - The',
        explanation:
            "Normally with these meanings and origins the meaning is well-understood or self-evident and the interesting aspect is how, where and when the phrase originated. This one is a little different - it's the meaning that is generally not understood.",
        origin: 'English',
    },
    {
        '': 704,
        text: 'Excuse me while I kiss this guy',
        explanation: 'A misheard lyric.',
        origin: 'English',
    },
    {
        '': 705,
        text: 'Excuse my French',
        explanation: 'Please forgive my swearing.',
        origin: 'English',
    },
    {
        '': 706,
        text: 'Extraordinary rendition',
        explanation:
            'A procedure whereby criminal suspects are sent for interrogation from one country to a second country, where less strict laws governing interrogation apply.',
        origin: 'English',
    },
    {
        '': 707,
        text: 'Eye candy - see ear candy',
        explanation:
            'Music with an instant appeal but with little lasting significance.',
        origin: 'English',
    },
    {
        '': 708,
        text: '(An) eye for an eye, a tooth for a tooth',
        explanation:
            "The proverb 'an eye for an eye, a tooth for a tooth' expresses the notion that for every wrong done there should be a compensating measure of justice.",
        origin: 'English',
    },
    {
        '': 709,
        text: 'Eye of newt and toe of frog, wool of bat and tongue of dog',
        explanation: 'The archetypal recipe for spells and enchantments.',
        origin: 'English',
    },
    {
        '': 710,
        text: 'Face that launched a thousand ships - The',
        explanation:
            'A reference to the mythological figure Helen of Troy (or some would say, to Aphrodite). Her abduction by Paris was said to be the reason for a fleet of a thousand ships to be launched into battle, initiating the Trojan Wars.',
        origin: 'English',
    },
    {
        '': 711,
        text: 'Face the music',
        explanation: "Accept the unpleasant consequences of one's actions.",
        origin: 'English',
    },
    {
        '': 712,
        text: 'Faff about',
        explanation: 'Dither ineffectually.',
        origin: 'English',
    },
    {
        '': 713,
        text: 'Fag end',
        explanation:
            'The  remnant of something, especially the part left after the best part has been used.',
        origin: 'English',
    },
    {
        '': 714,
        text: 'Failing to plan is planning to fail',
        explanation: 'Literal meaning .',
        origin: 'English',
    },
    {
        '': 715,
        text: 'Faint-hearted',
        explanation:
            "Having one's intentions divided; not fully committed; lacking zeal or courage.",
        origin: 'English',
    },
    {
        '': 716,
        text: 'Fair and square',
        explanation:
            'Honest and straightforward, especially of business dealings.',
        origin: 'English',
    },
    {
        '': 717,
        text: 'Fair dinkum',
        explanation: 'Honest; genuine; fair play.',
        origin: 'English',
    },
    {
        '': 718,
        text: 'Fair exchange is no robbery',
        explanation:
            'An exchange of two things of equal value is a reasonable and honest trade.',
        origin: 'English',
    },
    {
        '': 719,
        text: 'Fair play',
        explanation:
            "'Fair play' is the properly conducted conditions for a game, giving all participants an equal chance. The expression is also used more widely to mean fairness and justice in contexts other than games.",
        origin: 'English',
    },
    {
        '': 720,
        text: 'Fair to middling',
        explanation: 'Slightly above average.',
        origin: 'English',
    },
    {
        '': 721,
        text: 'Fairy-tale ending',
        explanation:
            'A perfect, joyful and  simplistic ending  to a story, like those often found in fairy tales.',
        origin: 'English',
    },
    {
        '': 722,
        text: 'Fait accompli',
        explanation:
            'An accomplished fact; an action which is completed before those affected by it are in a position to query or reverse it.',
        origin: 'English',
    },
    {
        '': 723,
        text: 'Faith will move mountains',
        explanation: 'Faith is immensely powerful.',
        origin: 'English',
    },
    {
        '': 724,
        text: 'Fall from grace',
        explanation: 'To fall from position of high esteem.',
        origin: 'English',
    },
    {
        '': 725,
        text: 'Fall guy',
        explanation:
            "A scapegoat; one who takes on the responsibilities or workload of others. Here 'fall' is used with the criminal slang meaning of 'arrest' or 'period in prison'. More recently, it has also come to mean a person who is easily duped or outmanoeuvred.",
        origin: 'English',
    },
    {
        '': 726,
        text: 'Fall off the back of a lorry',
        explanation: "A euphemism for 'acquired illegally'.",
        origin: 'English',
    },
    {
        '': 727,
        text: 'Fall on your sword',
        explanation:
            "To 'fall on your sword' is, literally, to commit suicide or, figuratively, to offer your resignation.",
        origin: 'English',
    },
    {
        '': 728,
        text: 'Famous for fifteen minutes',
        explanation:
            'This is a well-known as a quotation from Andy Warhol. It does derive from Warhol - his actual line was "In the future everybody will be world famous for fifteen minutes.".',
        origin: 'English',
    },
    {
        '': 729,
        text: 'Famous last words (dying statements of famous people - a list)',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 730,
        text: 'Famous last words (the ironic phrase)',
        explanation:
            "'Famous last words' might be used ironically when a remark or prediction  is likely to be proved wrong by events. No one is suggesting that  death might be the result, merely a mild inconvenience. For example:",
        origin: 'English',
    },
    {
        '': 731,
        text: 'Fancy free',
        explanation:
            "To be 'fancy free' is to be without any ties or commitments.",
        origin: 'English',
    },
    {
        '': 732,
        text: 'Fancy pants',
        explanation:
            'Overly elaborate, swanky or pretentious - especially of dress. Also applied to people who act in that manner.',
        origin: 'English',
    },
    {
        '': 733,
        text: 'Fanny Adams - Sweet',
        explanation: 'Nothing.',
        origin: 'English',
    },
    {
        '': 734,
        text: 'Far be it from me',
        explanation:
            "A disassociation from something - 'God forbid that I should... ' [do that thing].",
        origin: 'English',
    },
    {
        '': 735,
        text: 'Far from the madding crowd',
        explanation: 'A quiet and rural place.',
        origin: 'English',
    },
    {
        '': 736,
        text: 'Farmers',
        explanation:
            'Haemorrhoids. Haemorrhoids -> piles -> Farmer Giles -> Farmers.',
        origin: 'English',
    },
    {
        '': 737,
        text: 'Fashion victim',
        explanation: 'Someone who slavishly follows fashion trends.',
        origin: 'English',
    },
    {
        '': 738,
        text: 'The word fast, and phrases that derive from it.',
        explanation: 'Stable and firmly fixed in  place; not easily moved.',
        origin: 'English',
    },
    {
        '': 739,
        text: 'Fast and loose',
        explanation: 'Be inconstant and unreliable.',
        origin: 'English',
    },
    {
        '': 740,
        text: 'Fast asleep',
        explanation: 'Soundly asleep.',
        origin: 'English',
    },
    {
        '': 741,
        text: 'Fathom out',
        explanation: 'To ascertain something; to deduce from the facts.',
        origin: 'English',
    },
    {
        '': 742,
        text: '(The) fat of the land',
        explanation: 'Living well; fed by abundant crops.',
        origin: 'English',
    },
    {
        '': 743,
        text: 'Fate worse than death - A',
        explanation:
            'Any misfortune that would make life unlivable, especially rape\n or loss of virginity. The phrase was formerly a euphemism for rape.',
        origin: 'English',
    },
    {
        '': 744,
        text: "Feather in one's cap - A",
        explanation: 'A symbol of honour and achievement.',
        origin: 'English',
    },
    {
        '': 745,
        text: 'Fed up',
        explanation:
            'To  have had more than enough of something or someone, or to be  bored with or tired of the same.',
        origin: 'English',
    },
    {
        '': 746,
        text: 'Feeding frenzy',
        explanation:
            'An aggressive attack on prey by a group of sharks. The resulting boiling and bloody sea results in the sharks wildly attacking any creature nearby - even their own kind.',
        origin: 'English',
    },
    {
        '': 747,
        text: '(It) fell off the back of a truck',
        explanation: "A euphemism for 'acquired illegally'.",
        origin: 'English',
    },
    {
        '': 748,
        text: 'Fell swoop - At one',
        explanation:
            "'At one fell swoop' means 'suddenly; in a single action'.",
        origin: 'English',
    },
    {
        '': 749,
        text: 'Fellow traveller',
        explanation:
            'Someone\n sympathetic toward a certain point of view without being a fully paid-up member\n of the club.',
        origin: 'English',
    },
    {
        '': 750,
        text: 'Female of the species is more deadly then the male - The',
        explanation: 'See also: the List of Proverbs.',
        origin: 'English',
    },
    {
        '': 751,
        text: 'Fend for yourself',
        explanation:
            "To  'fend for yourself' is to provide for yourself - to be able to cope with whatever life throws at you. The expression is usually applied to youngsters, animal or human, who have previously been taken care of by their parents.",
        origin: 'English',
    },
    {
        '': 752,
        text: 'Fend off',
        explanation:
            "To  'fend off' is to resist; to keep (someone or something) from coming near.",
        origin: 'English',
    },
    {
        '': 753,
        text: 'Fiddlesticks',
        explanation: 'An exclamation made to indicate "nonsense; rubbish".',
        origin: 'English',
    },
    {
        '': 754,
        text: 'Fiddling while Rome burns',
        explanation:
            'To occupy oneself with unimportant matters and neglect priorities during a crisis.',
        origin: 'English',
    },
    {
        '': 755,
        text: 'Fie, foh, fum, I smell the blood of an Englishman',
        explanation:
            'A nonsense rhyme, usually heard as part of the Jack The Giant Killer fable.',
        origin: 'English',
    },
    {
        '': 756,
        text: 'Field day',
        explanation: 'A day of excitement or a circumstance of opportunity.',
        origin: 'English',
    },
    {
        '': 757,
        text: 'Fifteen minutes of fame',
        explanation:
            'This is a well-known as a quotation from Andy Warhol. It does derive from Warhol - his actual line was "In the future everybody will be world famous for fifteen minutes.".',
        origin: 'English',
    },
    {
        '': 758,
        text: 'Fifth column',
        explanation: 'Infiltrators or collaborators with the enemy.',
        origin: 'English',
    },
    {
        '': 759,
        text: 'Fight fire with fire',
        explanation:
            "Respond to an attack by using a similar method as one's attacker.",
        origin: 'English',
    },
    {
        '': 760,
        text: 'Fight the good fight',
        explanation:
            'An evangelical call to believe in and spread the Christian faith.',
        origin: 'English',
    },
    {
        '': 761,
        text: 'Filthy rich',
        explanation: 'Very rich, possibly having become so by unfair means.',
        origin: 'English',
    },
    {
        '': 762,
        text: "Finagle's Law",
        explanation:
            "The so-called law is usually expressed as 'If anything can go wrong, it will'.",
        origin: 'English',
    },
    {
        '': 763,
        text: "Fine as frog's hair",
        explanation: 'Extremely fine, that is, delicate and slender.',
        origin: 'English',
    },
    {
        '': 764,
        text: 'Fine words butter no parsnips',
        explanation:
            "The proverb 'Fine words butter no parsnips' means that nothing concrete is achieved by empty words or flattery.",
        origin: 'English',
    },
    {
        '': 765,
        text: 'Finger lickin good',
        explanation:
            'Excellent - especially of food. Known primarily as the slogan of the KFC food chain.',
        origin: 'English',
    },
    {
        '': 766,
        text: 'Fingers and thumbs',
        explanation:
            "Clumsy, unable to hold things steadily in one's hands. 'All fingers and thumbs' is how we might describe ourselves during a temporary loss of manual dexterity.",
        origin: 'English',
    },
    {
        '': 767,
        text: 'First dibs',
        explanation:
            "'First dibs' is an exclamation that is used, primarily by children but also by adults, to establish a claim on something. The first person to call out 'dibs' or 'first dibs' has the option on the first use or the ownership of the item claimed.",
        origin: 'English',
    },
    {
        '': 768,
        text: 'First water',
        explanation: 'Of the highest quality.',
        origin: 'English',
    },
    {
        '': 769,
        text: 'First World',
        explanation:
            "Originally the term referred just to the USA\n (see origin below), but now is understood to mean the most industrially\n developed, wealthy and powerful nations of the world. These\n countries are often referred to loosely as 'The West', although\n the First World certainly includes Japan and Australia.",
        origin: 'English',
    },
    {
        '': 770,
        text: 'Fish rot from the head down',
        explanation:
            'When an organization or state fails, it is the leadership that is the root cause.',
        origin: 'English',
    },
    {
        '': 771,
        text: 'Fish or cut bait',
        explanation:
            "There is some uncertainty about the precise meaning of this phrase. Some use it to mean 'make a choice about what you intend to do'; others have it that it means 'either get to work in a productive manner or do something else and let someone else work'. The second meaning, which I favour, and which is more common, is similar in meaning to 'put up or shut up', or the 20th century US vulgarism 'shit or get off the pot'.",
        origin: 'English',
    },
    {
        '': 772,
        text: 'Fish out of water - A',
        explanation: 'Someone who is in a situation they are unsuited to.',
        origin: 'English',
    },
    {
        '': 773,
        text: "As fit as a butcher's dog",
        explanation: 'Very fit.',
        origin: 'English',
    },
    {
        '': 774,
        text: 'Fit as a fiddle',
        explanation: "To be 'as fit as a fiddle' is to be very fit and well.",
        origin: 'English',
    },
    {
        '': 775,
        text: 'Fifth column',
        explanation: 'Infiltrators or collaborators with the enemy.',
        origin: 'English',
    },
    {
        '': 776,
        text: 'Fifth estate',
        explanation: 'The fifth power in the land.',
        origin: 'English',
    },
    {
        '': 777,
        text: 'Fits and starts',
        explanation: 'Spasmodically; at irregular intervals.',
        origin: 'English',
    },
    {
        '': 778,
        text: 'Fits to a tee',
        explanation:
            "If something is said to fit 'to a T' it fits exactly; properly; precisely.",
        origin: 'English',
    },
    {
        '': 779,
        text: "Five o'clock shadow",
        explanation:
            "Beard regrowth that darkens a man's features late in the day, following a morning shave.",
        origin: 'English',
    },
    {
        '': 780,
        text: 'Fixer-upper',
        explanation:
            'A property or item that is in need of repair and is offered for sale at a low price.',
        origin: 'English',
    },
    {
        '': 781,
        text: 'Flash in the pan',
        explanation:
            'Something which disappoints by failing to deliver anything of value, despite a showy beginning.',
        origin: 'English',
    },
    {
        '': 782,
        text: 'Flat out',
        explanation: "Using all of one's efforts; at top speed.",
        origin: 'English',
    },
    {
        '': 783,
        text: 'Flavor of the month',
        explanation:
            'Something that is prominent in the public eye for a short time then fades out of interest. Originally a term of approval for something that was up to the minute and desirable. It has been used ironically from the late 20th century to pass disdainful comment on things which pass out of fashion quickly; for example, the "one hit wonders" of the music business.',
        origin: 'English',
    },
    {
        '': 784,
        text: 'Flesh and blood',
        explanation:
            "One's flesh and blood may refer to one's family, or may denote all mankind. It is also used to denote the living material of which people are mostly composed.",
        origin: 'English',
    },
    {
        '': 785,
        text: 'Flogging a dead horse',
        explanation:
            'To flog a dead horse is to attempt to revive an interest which has died out;  to engage in fruitless effort.',
        origin: 'English',
    },
    {
        '': 786,
        text: 'Floozie in the jacuzzi - The',
        explanation:
            "The floozie (or floosie or floozy) in the jacuzzi is the nickname of the bronze statue, properly called Anna Livia, previously in O'Connell Street, Dublin, Ireland. It personifies the River Liffey, which passes nearby.",
        origin: 'English',
    },
    {
        '': 787,
        text: 'Flotsam and jetsam',
        explanation:
            "Ships' goods which are lost at sea. Also used figuratively in non-nautical contexts to means odds and ends, bits and pieces.",
        origin: 'English',
    },
    {
        '': 788,
        text: "Fly by the seat of one's pants",
        explanation:
            "To 'fly by the seat of your pants' is to decide a course of action as you go along, using your own initiative and perceptions rather than a predetermined plan or mechanical aids.",
        origin: 'English',
    },
    {
        '': 789,
        text: 'Fly in the ointment',
        explanation:
            'A fly in the ointment is a small but irritating flaw that spoils the whole. In the 20th century the expression has also come to be used to describe a small flaw that comes to light to spoil  an otherwise faultless plan.',
        origin: 'English',
    },
    {
        '': 790,
        text: 'Fly off the handle',
        explanation: 'Lose self control.',
        origin: 'English',
    },
    {
        '': 791,
        text: 'Fly on the wall',
        explanation:
            'Alludes to the position of being able to freely observe a situation without being oneself noticed.',
        origin: 'English',
    },
    {
        '': 792,
        text: 'Foam at the mouth',
        explanation: 'Display furious rage.',
        origin: 'English',
    },
    {
        '': 793,
        text: 'Fobbed off',
        explanation:
            'To put off deceitfully; to attempt to satisfy with   something of inferior quality or something less than one has been led to expect.',
        origin: 'English',
    },
    {
        '': 794,
        text: 'Folk Etymology - The Nonsense Nine',
        explanation:
            'People like to retell stories about the origin of some phrase or other. I get mail, phone calls, posts on Facebook.',
        origin: 'English',
    },
    {
        '': 795,
        text: 'Fool and his money are soon parted - A',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 796,
        text: 'Fools rush in where angels fear to tread',
        explanation:
            'The rash or inexperienced will attempt things that wiser people are more cautious of.',
        origin: 'English',
    },
    {
        '': 797,
        text: "Fool's errand",
        explanation: 'A pointless undertaking.',
        origin: 'English',
    },
    {
        '': 798,
        text: "Fool's gold",
        explanation:
            'The name given to iron pyrites, which looks a little like gold but is worthless.',
        origin: 'English',
    },
    {
        '': 799,
        text: "Fool's paradise - A",
        explanation: 'A state of happiness based on false hope.',
        origin: 'English',
    },
    {
        '': 800,
        text: 'Foot in the door - A',
        explanation:
            'An introduction or way in to something, made in order that progress may be made later.',
        origin: 'English',
    },
    {
        '': 801,
        text: 'Foot of our stairs - The',
        explanation: 'An exclamation of surprise.',
        origin: 'English',
    },
    {
        '': 802,
        text: 'For all intents and purposes',
        explanation: 'In effect; for all practical purposes.',
        origin: 'English',
    },
    {
        '': 803,
        text: 'For crying out loud',
        explanation: "For Christ's sake.",
        origin: 'English',
    },
    {
        '': 804,
        text: 'For ever and a day',
        explanation: 'Indefinitely.',
        origin: 'English',
    },
    {
        '': 805,
        text: 'For every thing there is a season',
        explanation: 'There is an appropriate time for everything.',
        origin: 'English',
    },
    {
        '': 806,
        text: 'For good measure',
        explanation: 'As an additional extra.',
        origin: 'English',
    },
    {
        '': 807,
        text: 'For keeps',
        explanation:
            "Play to keep the winnings. Also, more generally, especially in America, 'in deadly earnest; in such a way that the result will stand'.",
        origin: 'English',
    },
    {
        '': 808,
        text: 'For the birds',
        explanation: 'Trivial; worthless; only of interest to gullible people.',
        origin: 'English',
    },
    {
        '': 809,
        text: 'For whom the bell tolls',
        explanation:
            "'For whom the bells tolls' is a quotation from a work by John Donne, in which he explores the interconnectedness of humanity.",
        origin: 'English',
    },
    {
        '': 810,
        text: 'Forbidden fruit',
        explanation: 'A prohibited article.',
        origin: 'English',
    },
    {
        '': 811,
        text: 'Foregone conclusion',
        explanation:
            'A decision made before the evidence for it is known. An inevitable conclusion.',
        origin: 'English',
    },
    {
        '': 812,
        text: 'Forewarned is forearmed',
        explanation: 'Advance warning provides an advantage.',
        origin: 'English',
    },
    {
        '': 813,
        text: 'Forgive them for they know not what they do',
        explanation:
            "'Forgive them for they know not what they do' are reported as Jesus' words from the cross, asking forgiveness for those who put him to death. More widely, of course, the plea was for all humanity.",
        origin: 'English',
    },
    {
        '': 814,
        text: 'Forlorn hope',
        explanation: 'A hopeless or desperate enterprise.',
        origin: 'English',
    },
    {
        '': 815,
        text: 'Foul play',
        explanation:
            'Dishonest or treacherous behaviour; also violent conduct.',
        origin: 'English',
    },
    {
        '': 816,
        text: 'Four by two',
        explanation: 'Jew.',
        origin: 'English',
    },
    {
        '': 817,
        text: 'Four corners of the earth',
        explanation: 'All parts of the Earth.',
        origin: 'English',
    },
    {
        '': 818,
        text: 'Frailty, thy name is woman',
        explanation:
            'Alluding to the alleged inherent weakness of character of women.',
        origin: 'English',
    },
    {
        '': 819,
        text: 'Freeze the balls off a brass monkey - cold enough to',
        explanation:
            "If it's said to be 'cold enough to freeze the balls off a brass monkey' it is very\ncold indeed.",
        origin: 'English',
    },
    {
        '': 820,
        text: 'Freezing temperatures',
        explanation: 'A colloquial expression, used to denote icy weather.',
        origin: 'English',
    },
    {
        '': 821,
        text: 'French phrases',
        explanation:
            "Here's a list of French phrases and sayings that are used in English often enough to have become part of the language. Many of these relate to those French preoccupations, fashion and food.",
        origin: 'English',
    },
    {
        '': 822,
        text: 'Friday afternoon car',
        explanation:
            'A faulty or sub-standard car. More widely, any poor effort.',
        origin: 'English',
    },
    {
        '': 823,
        text: 'Friend in need is a friend indeed - A',
        explanation:
            "There are various interpretations of the meaning of 'a friend in need is a friend indeed'.",
        origin: 'English',
    },
    {
        '': 824,
        text: 'Friends, Romans, Countrymen, lend me your ears',
        explanation:
            "This quotation from Julius Caesar is one of Shakespeare's best-known lines. Mark Antony delivers a eulogy in honour of the recently murdered Julius Caesar:",
        origin: 'English',
    },
    {
        '': 825,
        text: 'Frog in the throat - A',
        explanation:
            'Temporary hoarseness caused by phlegm in the back of the throat.',
        origin: 'English',
    },
    {
        '': 826,
        text: "Frog's hair- as fine as",
        explanation: 'Extremely fine, that is, delicate and slender.',
        origin: 'English',
    },
    {
        '': 827,
        text: 'From pillar to post',
        explanation:
            'From one place to another, haphazardly and to little purpose..',
        origin: 'English',
    },
    {
        '': 828,
        text: 'From sea to shining sea',
        explanation: 'From one coast to another.',
        origin: 'English',
    },
    {
        '': 829,
        text: 'From strength to strength',
        explanation:
            'Progress from one success to another higher level of success.',
        origin: 'English',
    },
    {
        '': 830,
        text: 'Fruits of your loins',
        explanation: "One's children.",
        origin: 'English',
    },
    {
        '': 831,
        text: 'Fuddy-duddy',
        explanation: 'A stuffy or foolishly old-fashioned person.',
        origin: 'English',
    },
    {
        '': 832,
        text: 'Full Monty - The',
        explanation: 'Complete, the whole thing.',
        origin: 'English',
    },
    {
        '': 833,
        text: 'Full of piss and vinegar',
        explanation: 'Rowdy, boisterous, full of youthful energy.',
        origin: 'English',
    },
    {
        '': 834,
        text: 'Full tilt',
        explanation: 'At top speed; with maximum energy.',
        origin: 'English',
    },
    {
        '': 835,
        text: 'Full to the gunwales',
        explanation: 'Full to the brim; packed tight.',
        origin: 'English',
    },
    {
        '': 836,
        text: 'Funny farm',
        explanation: 'Mental institution.',
        origin: 'English',
    },
    {
        '': 837,
        text: 'Fuzzy wuzzy',
        explanation:
            'A derogatory term for a black person, especially one with fuzzy hair.',
        origin: 'English',
    },
    {
        '': 838,
        text: 'Gad zooks (or gadzooks)',
        explanation:
            "An exclamation - a euphemistic shortening of God's hooks (the nails on the cross).",
        origin: 'English',
    },
    {
        '': 839,
        text: 'Game is afoot - The',
        explanation:
            "The phrase 'the game is afoot' means 'the process is underway'; for example, 'The teams are on the pitch - the whistle blows - the game is afoot.'",
        origin: 'English',
    },
    {
        '': 840,
        text: 'Game is up - The',
        explanation:
            "The original meaning was 'the game is over - all is lost'. More recently it has come to be used to mean ' we have seen through your tricks - your deceit is exposed'.",
        origin: 'English',
    },
    {
        '': 841,
        text: 'Game of two halves',
        explanation: 'Circumstances have changed suddenly.',
        origin: 'English',
    },
    {
        '': 842,
        text: 'Gee whiz',
        explanation: 'An interjection or exclamation of surprise.',
        origin: 'English',
    },
    {
        '': 843,
        text: 'Generation X',
        explanation:
            'The generation of people born between the 1950s and early 1970s, who were anarchic and directionless.',
        origin: 'English',
    },
    {
        '': 844,
        text: 'Genius is one percent inspiration and 99 percent perspiration',
        explanation:
            'Genius is largely the result of hard work, rather than an inspired flash of insight.',
        origin: 'English',
    },
    {
        '': 845,
        text: 'Get a word in edgeways',
        explanation:
            'Join a conversation in which another is speaking continually and leaving little opportunity for others.',
        origin: 'English',
    },
    {
        '': 846,
        text: 'Get down to brass tacks',
        explanation: 'Engage with the basic facts or realities.',
        origin: 'English',
    },
    {
        '': 847,
        text: 'Get medieval',
        explanation: 'Use violence or extreme measures.',
        origin: 'English',
    },
    {
        '': 848,
        text: 'Get off on the wrong foot',
        explanation: 'Make\n a bad start to a project or relationship.',
        origin: 'English',
    },
    {
        '': 849,
        text: 'Get off your high horse',
        explanation:
            'A request to someone to stop behaving in a haughty and self-righteous manner.',
        origin: 'English',
    },
    {
        '': 850,
        text: 'Get on my wick',
        explanation:
            "To get on someone's wick is to annoy them; get on their nerves.",
        origin: 'English',
    },
    {
        '': 851,
        text: "Get one's dander up",
        explanation: 'Become agitated or angry.',
        origin: 'English',
    },
    {
        '': 852,
        text: 'Get over it',
        explanation:
            "Don't concern yourself with something that's already in the past; accept it and move on to more productive pursuits.",
        origin: 'English',
    },
    {
        '': 853,
        text: 'Get the pip',
        explanation: 'Become irritated or annoyed.',
        origin: 'English',
    },
    {
        '': 854,
        text: 'Get the sack',
        explanation: 'Be dismissed from a job.',
        origin: 'English',
    },
    {
        '': 855,
        text: 'Get the upper hand',
        explanation: 'Take a dominant position.',
        origin: 'English',
    },
    {
        '': 856,
        text: 'Get thee behind me Satan',
        explanation: "Jesus's response when tempted by the Devil.",
        origin: 'English',
    },
    {
        '': 857,
        text: 'Get underway',
        explanation: 'Begin a journey or a project.',
        origin: 'English',
    },
    {
        '': 858,
        text: 'Get used to it',
        explanation: 'Accept that a particular state of affairs is inevitable.',
        origin: 'English',
    },
    {
        '': 859,
        text: 'Get your dander up',
        explanation: 'Become agitated or angry.',
        origin: 'English',
    },
    {
        '': 860,
        text: 'Get your goat',
        explanation: 'Make you annoyed or angry.',
        origin: 'English',
    },
    {
        '': 861,
        text: 'Giddy aunt',
        explanation: 'An exclamation of surprise.',
        origin: 'English',
    },
    {
        '': 862,
        text: 'Giddy goat',
        explanation: 'Behave foolishly.',
        origin: 'English',
    },
    {
        '': 863,
        text: 'Gild the lily',
        explanation: 'To apply unnecessary ornament - to over embellish.',
        origin: 'English',
    },
    {
        '': 864,
        text: 'Gilt off the gingerbread',
        explanation: "Remove an item's most attractive qualities.",
        origin: 'English',
    },
    {
        '': 865,
        text: 'Ginned up',
        explanation:
            'Drunk; by drinking gin or other alcoholic drink. Alternatively; enlivened.',
        origin: 'English',
    },
    {
        '': 866,
        text: 'Ginger',
        explanation: 'Ginger beer = queer, that is, homosexual.',
        origin: 'English',
    },
    {
        '': 867,
        text: 'Ginger up',
        explanation: 'To excite or enthuse.',
        origin: 'English',
    },
    {
        '': 868,
        text: 'Give a man a fish and you will feed him for a day',
        explanation:
            'This proverbial saying  suggests that the ability to work is of greater benefit than a one-off handout.',
        origin: 'English',
    },
    {
        '': 869,
        text: 'Give a wide berth',
        explanation: 'A goodly distance.',
        origin: 'English',
    },
    {
        '': 870,
        text: 'Give no quarter',
        explanation:
            'Show no mercy or concession; in its original usage, show no mercy for a vanquished opponent.',
        origin: 'English',
    },
    {
        '': 871,
        text: 'Give the Devil his due',
        explanation:
            "Literally, pay the devil what you owe him. Used figuratively to mean 'give back what you owe', either money or favours.",
        origin: 'English',
    },
    {
        '': 872,
        text: 'Give up the ghost',
        explanation:
            'To\n die, or in the case of inanimate objects, to cease working.',
        origin: 'English',
    },
    {
        '': 873,
        text: 'Giving me gyp',
        explanation:
            "Someone might complain of some ailment 'giving them gyp' if it were causing them nagging ongoing pain.",
        origin: 'English',
    },
    {
        '': 874,
        text: 'Glass ceiling',
        explanation:
            'The glass ceiling is an unacknowledged, self-imposed barrier to workplace advancement, usually in regard to women or minority groups.',
        origin: 'English',
    },
    {
        '': 875,
        text: 'Gloom and doom',
        explanation:
            'A feeling of pessimism and despondency, often with regard to business or political prospects.',
        origin: 'English',
    },
    {
        '': 876,
        text: 'Go and boil your head',
        explanation:
            'An insult, of the form go and do something bad for yourself. Other examples are, go and play in the traffic and the more recent, and vehement, eat shit and die.',
        origin: 'English',
    },
    {
        '': 877,
        text: 'Go berserk',
        explanation:
            "To 'go berserk' is to behave in a frenzied and violent manner.",
        origin: 'English',
    },
    {
        '': 878,
        text: 'Go by the board',
        explanation: 'Finished with, as in thrown overboard.',
        origin: 'English',
    },
    {
        '': 879,
        text: 'Go by the book',
        explanation: 'Correctly; according to\nthe rules.',
        origin: 'English',
    },
    {
        '': 880,
        text: 'Go Dolally',
        explanation:
            "Originally 'doolally tap', meaning unbalanced state of mind.",
        origin: 'English',
    },
    {
        '': 881,
        text: 'Go-faster',
        explanation:
            'Any peripheral and pointless device which is added to a product to make it appear to perform better.',
        origin: 'English',
    },
    {
        '': 882,
        text: 'Go for a burton',
        explanation:
            "Something which has 'gone for a burton' is no longer functional - a reference to a person who had died or an item that was broken.",
        origin: 'English',
    },
    {
        '': 883,
        text: 'Go haywire',
        explanation: 'To go wrong, to become overly excited or deranged.',
        origin: 'English',
    },
    {
        '': 884,
        text: 'Go like the clappers',
        explanation: 'Go very fast; in a vigorous manner.',
        origin: 'English',
    },
    {
        '': 885,
        text: 'Go off half-cocked',
        explanation: 'Speak or act prematurely.',
        origin: 'English',
    },
    {
        '': 886,
        text: 'Go out on a limb',
        explanation:
            "Put oneself in an isolated  position in one's support of someone or something.",
        origin: 'English',
    },
    {
        '': 887,
        text: 'Go postal',
        explanation:
            'Fly into a violent rage, especially when provoked by workplace stress.',
        origin: 'English',
    },
    {
        '': 888,
        text: 'Go over like a lead balloon',
        explanation: 'Fail completely and be considered a flop by the public.',
        origin: 'English',
    },
    {
        '': 889,
        text: 'Go pound sand',
        explanation:
            "'Go pound sand' is an American expression of disdain, along the same lines as 'get lost', 'go and play in the traffic', etc.",
        origin: 'English',
    },
    {
        '': 890,
        text: 'Go the whole hog',
        explanation:
            'To perform some act or adopt some opinion fully and thoroughly.',
        origin: 'English',
    },
    {
        '': 891,
        text: 'Go to hell in a handbasket',
        explanation:
            "To be 'going to hell in a handbasket' is to be rapidly deteriorating - on course for disaster.",
        origin: 'English',
    },
    {
        '': 892,
        text: 'Go to pot',
        explanation: 'To go to pot is to become ruined; to go to pieces.',
        origin: 'English',
    },
    {
        '': 893,
        text: 'Go to the dogs',
        explanation: 'Become ruined.',
        origin: 'English',
    },
    {
        '': 894,
        text: 'Go to the foot of our stairs',
        explanation: 'An exclamation of surprise.',
        origin: 'English',
    },
    {
        '': 895,
        text: 'Go to the mattresses',
        explanation:
            'To go to the mattresses is to prepare for a battle or adopt a warlike stance.',
        origin: 'English',
    },
    {
        '': 896,
        text: 'God bless you! (after a sneeze)',
        explanation:
            "'Bless you!', or sometimes 'God bless you!' or 'God bless!', is a response often said when someone sneezes.",
        origin: 'English',
    },
    {
        '': 897,
        text: 'God is dead',
        explanation:
            'This quotation is widely attributed to Friedrich Nietzsche (1844-1900), who wrote in Die Frohliche Wissenschaft, 1882:',
        origin: 'English',
    },
    {
        '': 898,
        text: 'God rot them',
        explanation: 'Drat or doggone.',
        origin: 'English',
    },
    {
        '': 899,
        text: 'Godfrey Daniel',
        explanation: 'God damn them.',
        origin: 'English',
    },
    {
        '': 900,
        text: 'Going for a burton',
        explanation:
            "Something which has 'gone for a burton' is no longer functional - a reference to a person who had died or an item that was broken.",
        origin: 'English',
    },
    {
        '': 901,
        text: 'Golden key can open any door - A',
        explanation:
            "'A golden key opens any door' is the opinion that sufficient money, or the promise of it, will allow the possessor of it to do anything they wish.",
        origin: 'English',
    },
    {
        '': 902,
        text: 'GOLF - Gentlemen only, ladies forbidden',
        explanation:
            'GOLF - Gentlemen only, ladies forbidden. The phrase that is sometimes supposed to be the origin of the word golf.',
        origin: 'English',
    },
    {
        '': 903,
        text: 'Gone for a burton',
        explanation:
            "Something which has 'gone for a burton' is no longer functional - a reference to a person who had died or an item that was broken.",
        origin: 'English',
    },
    {
        '': 904,
        text: 'Good as gold',
        explanation: 'Well-behaved and obedient.',
        origin: 'English',
    },
    {
        '': 905,
        text: 'Good in parts',
        explanation:
            'Something bad that is called good out of politeness or timidity.',
        origin: 'English',
    },
    {
        '': 906,
        text: 'Good man is hard to find - A',
        explanation:
            'A modern-day proverb, bemoaning the difficulty of finding a suitable male partner.',
        origin: 'English',
    },
    {
        '': 907,
        text: 'Good measure - For',
        explanation: 'As an additional extra.',
        origin: 'English',
    },
    {
        '': 908,
        text: 'Good men and true',
        explanation:
            "Dependable men, of rank and honour. The phrase was adapted later to 'twelve good men and true', indicating the twelve (originally all men, now both sexes) of a criminal jury.",
        origin: 'English',
    },
    {
        '': 909,
        text: 'Good money after bad',
        explanation:
            "You 'throw good money after bad' when, following the loss of some money, you to incur a further loss in trying to make good.",
        origin: 'English',
    },
    {
        '': 910,
        text: 'Good riddance',
        explanation:
            'An expression of pleasure on being rid of some annoyance - usually an individual.',
        origin: 'English',
    },
    {
        '': 911,
        text: 'Good Samaritan',
        explanation:
            'Someone who helps another in need for compassionate motives and with no thought of reward.',
        origin: 'English',
    },
    {
        '': 912,
        text: 'Good things come to those that wait',
        explanation: 'A literal meaning, advocating patience.',
        origin: 'English',
    },
    {
        '': 913,
        text: 'Goodnight Vienna',
        explanation:
            "'Goodnight Vienna' means 'it's all over', for example \"Jack stepped on the landmine and it was goodnight Vienna\". It is also used to refer to an implied coming conclusion which has become inevitable, for example  \"She winked and beckoned me towards her bedroom and I knew it was goodnight Vienna\".",
        origin: 'English',
    },
    {
        '': 914,
        text: 'Goody, goody gumdrops',
        explanation: 'A childish exclamation of delight.',
        origin: 'English',
    },
    {
        '': 915,
        text: 'Goody two-shoes',
        explanation:
            'Someone who is virtuous in a coy, smug or sentimental manner.',
        origin: 'English',
    },
    {
        '': 916,
        text: 'Gordon Bennett',
        explanation:
            "The expression 'Gordon Bennett!' is an exclamation of incredulous surprise.",
        origin: 'English',
    },
    {
        '': 917,
        text: 'Got my mojo working',
        explanation: 'My magic charm is working.',
        origin: 'English',
    },
    {
        '': 918,
        text: 'Grace of God - There but for ...',
        explanation:
            "I too, like someone seen to have suffered misfortune, might have suffered a similar fate, but for God's mercy.",
        origin: 'English',
    },
    {
        '': 919,
        text: '(Take with a) grain of salt',
        explanation:
            "To take a statement with 'a grain of salt' (or 'a pinch of salt') means to accept it while maintaining a degree of scepticism about its truth.",
        origin: 'English',
    },
    {
        '': 920,
        text: 'Grand slam',
        explanation:
            "Winning all that's on offer in a sports competition,\n e.g. all the tricks in a game of bridge, or the all the major competitions in a sport in a single year - especially associated with tennis and golf. More generally, any all-out achievement.",
        origin: 'English',
    },
    {
        '': 921,
        text: 'Grandfather clock',
        explanation:
            'A   grandfather clock is a colloquial name for the kind of weight-and-pendulum eight-day clock in a tall case, formerly in common use.',
        origin: 'English',
    },
    {
        '': 922,
        text: 'Granny dumping',
        explanation: 'The abandonment of elderly relatives by their carers.',
        origin: 'English',
    },
    {
        '': 923,
        text: 'Grasp the nettle',
        explanation: 'To tackle a difficult problem boldly.',
        origin: 'English',
    },
    {
        '': 924,
        text: 'Grass up',
        explanation: 'Inform on someone to the police.',
        origin: 'English',
    },
    {
        '': 925,
        text: 'Graveyard shift',
        explanation: 'A late-night/early-morning work shift.',
        origin: 'English',
    },
    {
        '': 926,
        text: 'Greased lightning',
        explanation: 'Very fast.',
        origin: 'English',
    },
    {
        '': 927,
        text: 'Great balls of fire',
        explanation: 'An exclamation of surprise or delight.',
        origin: 'English',
    },
    {
        '': 928,
        text: 'Great minds think alike',
        explanation:
            "The proverb 'great minds think alike' has a straightforward literal meaning. However, the usage is often ironic, that is, it is used when two unexceptional  minds have the same thought.",
        origin: 'English',
    },
    {
        '': 929,
        text: 'Great unwashed - the',
        explanation: 'The common, lower classes; the hoi polloi.',
        origin: 'English',
    },
    {
        '': 930,
        text: 'Green eyed monster',
        explanation: 'Jealousy.',
        origin: 'English',
    },
    {
        '': 931,
        text: 'Gregory Peck',
        explanation: 'The neck.',
        origin: 'English',
    },
    {
        '': 932,
        text: 'Gridlock',
        explanation:
            'Severe traffic congestion, where backed-up traffic blocks movement on intersecting roads and progress is completely halted.',
        origin: 'English',
    },
    {
        '': 933,
        text: 'Grind to a halt',
        explanation: 'Lose momentum and stop.',
        origin: 'English',
    },
    {
        '': 934,
        text: 'Grinning like a Cheshire cat',
        explanation: 'Grinning broadly.',
        origin: 'English',
    },
    {
        '': 935,
        text: 'Grist to the mill',
        explanation:
            'All things are a potential source of profit or advantage.',
        origin: 'English',
    },
    {
        '': 936,
        text: 'Gry - Words ending in',
        explanation:
            "Don't waste your time looking for the mythical 'third word ending in GRY'. If you have come here looking for it, read the explanation\nbelow and relax - you can stop searching. The story goes like this:",
        origin: 'English',
    },
    {
        '': 937,
        text: 'Guinea pig',
        explanation:
            'A person or animal who is used as the subject of an experiment.',
        origin: 'English',
    },
    {
        '': 938,
        text: 'Gung ho',
        explanation: 'Zealous and eager.',
        origin: 'English',
    },
    {
        '': 939,
        text: 'Gussied-up',
        explanation: 'Smartened up, in a showy or garish way.',
        origin: 'English',
    },
    {
        '': 940,
        text: 'Guts for garters',
        explanation:
            "To threaten to 'have someone's guts for garters' is to state the intention to do them serious harm. The threat isn't an actual and literal one and the overstatement of reprisal is meant to indicate humour, but with an indication that the threatened person has done something which has been something of an annoyance.",
        origin: 'English',
    },
    {
        '': 941,
        text: 'Hair of the dog that bit you',
        explanation:
            'The hair of the dog is a small measure of drink, intended to cure a hangover.',
        origin: 'English',
    },
    {
        '': 942,
        text: 'Hairy eyeball',
        explanation:
            'A glance made with partially lowered eyelashes. This usually indicates suspicion or hostility but may signal other emotions too.',
        origin: 'English',
    },
    {
        '': 943,
        text: 'Halcyon days',
        explanation: 'Calm, peaceful days.',
        origin: 'English',
    },
    {
        '': 944,
        text: 'Half a loaf is better than no bread',
        explanation:
            "Something, even if it isn't what you ideally would prefer, is better than nothing.",
        origin: 'English',
    },
    {
        '': 945,
        text: 'Half-cocked',
        explanation: 'Speak or act prematurely.',
        origin: 'English',
    },
    {
        '': 946,
        text: 'Half-hearted',
        explanation:
            "Having one's intentions divided; not fully committed; lacking zeal or courage.",
        origin: 'English',
    },
    {
        '': 947,
        text: 'Half inch',
        explanation: 'Pinch (steal).',
        origin: 'English',
    },
    {
        '': 948,
        text: 'Hand over fist',
        explanation: 'Quickly and continuously.',
        origin: 'English',
    },
    {
        '': 949,
        text: 'Handbags at ten paces',
        explanation:
            "'Handbags at ten paces', sometimes shortened just to 'handbags', is a comic reference to a confrontation which is histrionic but which doesn't involve physical violence. Such confrontations are also called handbag situations.",
        origin: 'English',
    },
    {
        '': 950,
        text: 'Handle with kid gloves',
        explanation:
            'Handle a situation, or a person or  an object,  delicately and gingerly.',
        origin: 'English',
    },
    {
        '': 951,
        text: 'Hands down',
        explanation: 'Win easily, with little effort.',
        origin: 'English',
    },
    {
        '': 952,
        text: 'Hanged, drawn and quartered',
        explanation:
            'A gruesome form of torture and, eventually, death by execution.',
        origin: 'English',
    },
    {
        '': 953,
        text: 'Hanky-panky',
        explanation:
            'Trickery - double dealing. Also, more recently, sexual shenanigans.',
        origin: 'English',
    },
    {
        '': 954,
        text: 'Happy as a clam',
        explanation: 'Very happy and content.',
        origin: 'English',
    },
    {
        '': 955,
        text: 'Happy as a sandboy',
        explanation: 'Very happy and content.',
        origin: 'English',
    },
    {
        '': 956,
        text: 'Happy as Larry',
        explanation: 'Very\nhappy.',
        origin: 'English',
    },
    {
        '': 957,
        text: 'Happy clappy',
        explanation:
            'A disparaging name for the form of Christian religious observance which is informal, musical and spontaneous.',
        origin: 'English',
    },
    {
        '': 958,
        text: 'Happy slapping',
        explanation:
            "Unprovoked attacks on individuals made in order to record the event, and especially the victim's shock and surprise, on video phones.",
        origin: 'English',
    },
    {
        '': 959,
        text: 'Harbinger of doom',
        explanation: 'A sign, warning of bad things to come.',
        origin: 'English',
    },
    {
        '': 960,
        text: 'Hard and fast',
        explanation: 'Rigidly adhered to - without doubt or debate.',
        origin: 'English',
    },
    {
        '': 961,
        text: 'Hard cases make bad law',
        explanation:
            "'Hard', that is, exceptional, legal cases aren't suitable as the source of generalised laws.",
        origin: 'English',
    },
    {
        '': 962,
        text: 'Hard cheese',
        explanation: 'Hard luck.',
        origin: 'English',
    },
    {
        '': 963,
        text: 'Hard hearted',
        explanation: 'Lacking mercy; incapable of pity.',
        origin: 'English',
    },
    {
        '': 964,
        text: 'Hard lines',
        explanation: 'Bad luck.',
        origin: 'English',
    },
    {
        '': 965,
        text: 'Hard man is good to find - A',
        explanation:
            'A risquÃ© comic play\non words on a good man is hard to find.',
        origin: 'English',
    },
    {
        '': 966,
        text: "Hark, hark! the lark at heaven's gate sings",
        explanation:
            "In Shakespeare's Cymbeline, Cloten uses lewd language to talk about Cymbeline. In an attempt to use musicians to court her, he calls on them to play 'a wonderful sweet air'. The hark, hark!... line is chosen to represent sweetness and refinement, as a counterpoint to the previous crudities.",
        origin: 'English',
    },
    {
        '': 967,
        text: 'Harp on',
        explanation: 'To repeatedly and boringly speak about a topic.',
        origin: 'English',
    },
    {
        '': 968,
        text: 'Harvest moon',
        explanation: 'The  full moon  closest to the autumn equinox.',
        origin: 'English',
    },
    {
        '': 969,
        text: 'Has the cat got your tongue?',
        explanation:
            "'Has the cat got your tongue' is a light-hearted question addressed to someone who is inexplicably silent.",
        origin: 'English',
    },
    {
        '': 970,
        text: 'Hasta la vista, baby',
        explanation:
            "'Hasta la vista' translates from the Spanish as 'see you later'.",
        origin: 'English',
    },
    {
        '': 971,
        text: 'Haste makes waste',
        explanation:
            'Rushing into a decision may cause mistakes that waste more time than would have been taken by proceeding more carefully.',
        origin: 'English',
    },
    {
        '': 972,
        text: 'Hat trick',
        explanation:
            'A series of three consecutive successes, in sport or some other area of activity.',
        origin: 'English',
    },
    {
        '': 973,
        text: 'Have a Captain Cook',
        explanation: 'Have a look.',
        origin: 'English',
    },
    {
        '': 974,
        text: 'Have a dekko',
        explanation: 'Have a look.',
        origin: 'English',
    },
    {
        '': 975,
        text: 'Have an axe to grind',
        explanation:
            'To have an axe to grind is to have a dispute to take up with someone or, to have an ulterior motive; to have private ends to serve.',
        origin: 'English',
    },
    {
        '': 976,
        text: 'Have an inkling',
        explanation: 'Have a vague intimation of; have a slight knowledge of.',
        origin: 'English',
    },
    {
        '': 977,
        text: 'Have no truck with',
        explanation: 'To reject or to have nothing to do with.',
        origin: 'English',
    },
    {
        '': 978,
        text: "Haven't got a clue",
        explanation: 'Without any knowledge or understanding.',
        origin: 'English',
    },
    {
        '': 979,
        text: 'Have your guts for garters',
        explanation:
            "To threaten to 'have someone's guts for garters' is to state the intention to do them serious harm. The threat isn't an actual and literal one and the overstatement of reprisal is meant to indicate humour, but with an indication that the threatened person has done something which has been something of an annoyance.",
        origin: 'English',
    },
    {
        '': 980,
        text: 'Have your work cut out',
        explanation:
            'To have your work cut out is to be faced with a lengthy or difficult task.',
        origin: 'English',
    },
    {
        '': 981,
        text: 'He who can, does; he who cannot, teaches',
        explanation:
            'A criticism of the teaching profession, portraying it as second best.',
        origin: 'English',
    },
    {
        '': 982,
        text: 'He who laughs last laughs longest',
        explanation: 'See also: the List of Proverbs.',
        origin: 'English',
    },
    {
        '': 983,
        text: 'He who sups with the devil should have a long spoon',
        explanation:
            'This proverbial saying suggests that, if you have dealings with wicked people you should be cautious and distance yourself from them, or else you may be corrupted into their evil ways.',
        origin: 'English',
    },
    {
        '': 984,
        text: 'He will give the Devil his due',
        explanation:
            "Literally, pay the devil what you owe him. Used figuratively to mean 'give back what you owe', either money or favours.",
        origin: 'English',
    },
    {
        '': 985,
        text: 'Head over heels',
        explanation:
            "To be 'head over heels' is to be very excited. In a literal sense the expression also refers to turning cartwheels to demonstrate one's excitement.",
        origin: 'English',
    },
    {
        '': 986,
        text: 'Heads up',
        explanation:
            'This little phrase has several meanings - an advance warning - being wide awake and alert - being the head of - a type is display screen.',
        origin: 'English',
    },
    {
        '': 987,
        text: 'Heads will roll',
        explanation:
            "The expression 'heads will roll' is the promise or prediction that  people responsible for some failure or disaster will be dismissed or otherwise held to account.",
        origin: 'English',
    },
    {
        '': 988,
        text: 'Hear hear',
        explanation: 'A shout of acclamation or agreement.',
        origin: 'English',
    },
    {
        '': 989,
        text: 'Heard it through the grapevine',
        explanation:
            'An indication that a piece of information was obtained via an informal contact.',
        origin: 'English',
    },
    {
        '': 990,
        text: "Heart's content",
        explanation:
            "To one's (or your) heart's content means to one's complete inner satisfaction - until one's heart is content.",
        origin: 'English',
    },
    {
        '': 991,
        text: 'Heavens to Betsy',
        explanation: 'A mild exclamation of surprise.',
        origin: 'English',
    },
    {
        '': 992,
        text: 'Heavens to Murgatroyd',
        explanation:
            "A stylised exclamation of surprise, similar to 'Heavens to Betsy'.",
        origin: 'English',
    },
    {
        '': 993,
        text: 'Heavy metal',
        explanation:
            'Hard\n rock music, usually electric guitar-based and always loud.',
        origin: 'English',
    },
    {
        '': 994,
        text: 'Heebie-jeebies - The',
        explanation: 'A feeling of anxiety, apprehension or illness.',
        origin: 'English',
    },
    {
        '': 995,
        text: 'Hedge your bets',
        explanation:
            'To avoid committing oneself; to leave a means of retreat open.',
        origin: 'English',
    },
    {
        '': 996,
        text: '(Go to) Hell in a handbasket',
        explanation:
            "To be 'going to hell in a handbasket' is to be rapidly deteriorating - on course for disaster.",
        origin: 'English',
    },
    {
        '': 997,
        text: 'Hell has no fury like a woman scorned',
        explanation:
            "'Hell has no fury like a woman scorned' conveys the idea that a scorned woman (that is, one who has been betrayed) is more furious than anything that hell can devise.",
        origin: 'English',
    },
    {
        '': 998,
        text: 'Hell or high water',
        explanation: 'Any great difficulty or obstacle.',
        origin: 'English',
    },
    {
        '': 999,
        text: "Hell's bells",
        explanation: "'Hell's bells' is an expression of anger or annoyance.",
        origin: 'English',
    },
    {
        '': 1000,
        text: 'Helter-skelter',
        explanation:
            "'Helter-skelter' means 'pell-mell - in chaotic and disorderly haste'.",
        origin: 'English',
    },
    {
        '': 1001,
        text: 'Hem and haw',
        explanation:
            'To hem and haw is to speak indistinctly. making frequent pauses. More generally, hemming and hawing is acting indecisively.',
        origin: 'English',
    },
    {
        '': 1002,
        text: 'Here lies one whose name is writ in water',
        explanation: 'Fame, and indeed life, is fleeting.',
        origin: 'English',
    },
    {
        '': 1003,
        text: 'Het up',
        explanation: 'Agitated.',
        origin: 'English',
    },
    {
        '': 1004,
        text: 'Hiding to nothing - On a',
        explanation:
            "To be faced with a situation which is pointless, as a successful outcome is impossible. This is usually expressed in terms of a sporting contest in which one of two outcomes is foreseen, either a hiding or nothing. The 'to' in the phrase indicates alternative outcomes, as in terms like '6 to 1' or 'dollars to doughnuts'.",
        origin: 'English',
    },
    {
        '': 1005,
        text: 'Higgledy-piggledy',
        explanation: 'Chaotic and disorderly; in jumbled confusion.',
        origin: 'English',
    },
    {
        '': 1006,
        text: 'High and dry',
        explanation: 'Stranded, without help or hope of recovery.',
        origin: 'English',
    },
    {
        '': 1007,
        text: 'High and mighty',
        explanation: 'Powerful and superior, or arrogantly affecting to be so.',
        origin: 'English',
    },
    {
        '': 1008,
        text: 'High as a kite',
        explanation:
            'Highly excited, or under the influence of drink or drugs.',
        origin: 'English',
    },
    {
        '': 1009,
        text: 'High five',
        explanation:
            'A gesture of celebration in which two people slap palms with the hands held above above the head.',
        origin: 'English',
    },
    {
        '': 1010,
        text: 'High-flyer',
        explanation:
            'High-flyers, sometimes spelled high-fliers, are people who have achieved notable success, especially those who have become successful more quickly than is normal. The term is also used to describe speculative stock that has reached a high price in a short time.',
        origin: 'English',
    },
    {
        '': 1011,
        text: 'High horse - get off your',
        explanation:
            'A request to someone to stop behaving in a haughty and self-righteous manner.',
        origin: 'English',
    },
    {
        '': 1012,
        text: 'High on the hog',
        explanation: 'Affluent and luxurious.',
        origin: 'English',
    },
    {
        '': 1013,
        text: 'High time',
        explanation:
            'The\n time that something is due (bordering on overdue) to be done.',
        origin: 'English',
    },
    {
        '': 1014,
        text: 'High, wide and handsome',
        explanation: 'In a carefree, stylish manner.',
        origin: 'English',
    },
    {
        '': 1015,
        text: 'Hissy fit',
        explanation: 'A temperamental outburst; a tantrum.',
        origin: 'English',
    },
    {
        '': 1016,
        text: 'History is bunk',
        explanation: 'Live in the present, not the past.',
        origin: 'English',
    },
    {
        '': 1017,
        text: 'Hit for six',
        explanation:
            "To be hit (or knocked) for six is to be dealt a severe blow, emotional or physical, or to have one's arguments or schemes swept aside.",
        origin: 'English',
    },
    {
        '': 1018,
        text: 'Hit the ground running',
        explanation: 'Get off to a brisk and successful start.',
        origin: 'English',
    },
    {
        '': 1019,
        text: 'Hit the hay',
        explanation: 'Go to bed.',
        origin: 'English',
    },
    {
        '': 1020,
        text: 'Hit the nail on the head',
        explanation:
            'Get to the precise point. Do or say something exactly right.',
        origin: 'English',
    },
    {
        '': 1021,
        text: 'Hither and yon',
        explanation: 'Here and there; to this place and that place.',
        origin: 'English',
    },
    {
        '': 1022,
        text: "Hobson's choice",
        explanation: "'Hobson's choice' is no real choice at all.",
        origin: 'English',
    },
    {
        '': 1023,
        text: 'Hobby-horse',
        explanation:
            'A favourite topic that one frequently refers to or dwells on; a fixation.',
        origin: 'English',
    },
    {
        '': 1024,
        text: 'Hocus pocus',
        explanation:
            "'Hocus pocus' is a  supposed magical charm previously uttered by magicians. More recently it has been used as a general term for trickery or magic.",
        origin: 'English',
    },
    {
        '': 1025,
        text: 'Hoi polloi',
        explanation: 'The common masses.',
        origin: 'English',
    },
    {
        '': 1026,
        text: 'Hoist with your own petard',
        explanation:
            'Injured by the device that you intended to use to injure others.',
        origin: 'English',
    },
    {
        '': 1027,
        text: 'Hoity-toity',
        explanation: 'Pretentiously self-important, haughty or pompous.',
        origin: 'English',
    },
    {
        '': 1028,
        text: "(Can't) hold a candle to",
        explanation:
            "The expression 'can't hold a candle to' refers to someone who\ncompares badly to an known authority - to be unfit even to hold a subordinate position.",
        origin: 'English',
    },
    {
        '': 1029,
        text: 'Hold your horses',
        explanation: 'Hold on; be patient.',
        origin: 'English',
    },
    {
        '': 1030,
        text: 'Home is where the heart is',
        explanation:
            "The proverb 'home is where the heart is' means that, wherever you are and whoever you are with, your home and family  provide the greatest emotional bond.",
        origin: 'English',
    },
    {
        '': 1031,
        text: 'Homonyms',
        explanation:
            "Hononyms are words that have the same pronunciation but different meaning, origin, or spelling. For example, 'right', 'wright', 'write' and 'rite'.",
        origin: 'English',
    },
    {
        '': 1032,
        text: 'Honesty is the best policy',
        explanation:
            "The proverb 'Honesty is the best policy' has a straightforward literal meaning, which encourages the populace to tell the turth and avoid crime.",
        origin: 'English',
    },
    {
        '': 1033,
        text: 'Honey catches more flies than vinegar',
        explanation:
            'This proverbial saying expresses the idea that it is more effective to be polite and ingratiating than to be hostile or demanding.',
        origin: 'English',
    },
    {
        '': 1034,
        text: 'Hooray Henry',
        explanation: 'A loud-mouthed but ineffectual upper class fool.',
        origin: 'English',
    },
    {
        '': 1035,
        text: 'Horse and cart',
        explanation: 'Fart.',
        origin: 'English',
    },
    {
        '': 1036,
        text: 'Horse feathers',
        explanation: 'Rubbish, nonsense.',
        origin: 'English',
    },
    {
        '': 1037,
        text: 'Horse-sense',
        explanation:
            'A  robust form of common sense believed to be found in poorly educated but shrewd people.',
        origin: 'English',
    },
    {
        '': 1038,
        text: 'Horse, a horse, my kingdom for a horse - A',
        explanation:
            "'A horse, a horse, my kingdom for a horse' is one of Shakespeare's best known lines. The king spoke the line in Act V of the play Richard III, after losing his horse in battle.",
        origin: 'English',
    },
    {
        '': 1039,
        text: "Horse's mouth - straight from the",
        explanation: 'From the highest authority.',
        origin: 'English',
    },
    {
        '': 1040,
        text: 'Hot-blooded',
        explanation:
            'Having a passionate nature, or being inclined to quick temper.',
        origin: 'English',
    },
    {
        '': 1041,
        text: 'Hot off the press',
        explanation: 'Freshly printed.',
        origin: 'English',
    },
    {
        '': 1042,
        text: 'Hot on the heels',
        explanation:
            'In close pursuit of someone/something, or immediately after some event.',
        origin: 'English',
    },
    {
        '': 1043,
        text: 'House divided against itself cannot stand - A',
        explanation: 'Literal meaning (house meaning household).',
        origin: 'English',
    },
    {
        '': 1044,
        text: 'Household words',
        explanation:
            'Words or sayings that are in common use; names that are familiar to everyone.',
        origin: 'English',
    },
    {
        '': 1045,
        text: 'Houston, we have a problem',
        explanation:
            'Originally a genuine report of a life-threatening fault. Now used humorously to report any kind of problem.',
        origin: 'English',
    },
    {
        '': 1046,
        text: 'How are the mighty fallen?',
        explanation: 'The previously powerful are now reduced.',
        origin: 'English',
    },
    {
        '': 1047,
        text: 'How do you do?',
        explanation:
            'A greeting, considered by the English upper classes to be the only correct form of greeting when meeting someone for the first time.',
        origin: 'English',
    },
    {
        '': 1048,
        text: 'How now brown cow?',
        explanation:
            'A nonsense phrase with no real meaning as such, although it also sometimes used as a jovial greeting.',
        origin: 'English',
    },
    {
        '': 1049,
        text: "How sharper than a serpent's tooth it is to have a thankless child",
        explanation:
            'Literal meaning - it is especially painful to raise an ungrateful child.',
        origin: 'English',
    },
    {
        '': 1050,
        text: 'Hugger-mugger',
        explanation: 'In secret; in a clandestine manner.',
        origin: 'English',
    },
    {
        '': 1051,
        text: 'Hung, drawn and quartered',
        explanation:
            'A gruesome form of torture and, eventually, death by execution.',
        origin: 'English',
    },
    {
        '': 1052,
        text: 'Hunky-dory',
        explanation: 'Satisfactory; fine.',
        origin: 'English',
    },
    {
        '': 1053,
        text: 'Hunt and peck',
        explanation:
            'Typing by looking for characters on the keyboard individually.',
        origin: 'English',
    },
    {
        '': 1054,
        text: 'Hush puppies',
        explanation:
            'A type of suede shoes. Also, in the USA, a form of corn-bread fritter.',
        origin: 'English',
    },
    {
        '': 1055,
        text: 'I bear a charmed life',
        explanation:
            'A life of guaranteed good fortune or invulnerability, by virtue of a charm or spell.',
        origin: 'English',
    },
    {
        '': 1056,
        text: 'I have not slept one wink',
        explanation: 'I have not slept at all.',
        origin: 'English',
    },
    {
        '': 1057,
        text: 'I have nothing to declare but my genius',
        explanation:
            'Supposedly said by Oscar Wilde at Customs Control in New York, 1882.',
        origin: 'English',
    },
    {
        '': 1058,
        text: 'I have nothing to offer but blood toil tears and sweat',
        explanation:
            "A line from Sir Winston Churchill's WWII speech on becoming prime minister of the UK in 1940.",
        origin: 'English',
    },
    {
        '': 1059,
        text: "I haven't got a clue",
        explanation: 'Without any knowledge or understanding.',
        origin: 'English',
    },
    {
        '': 1060,
        text: 'I see you stand like greyhounds in the slips',
        explanation: 'I see you are ready and anxious to depart.',
        origin: 'English',
    },
    {
        '': 1061,
        text: 'I spy with my little eye',
        explanation:
            "'I spy with my little eye' is a rhyme used in the children's guessing game to indicate what it is that is being looked at.",
        origin: 'English',
    },
    {
        '': 1062,
        text: 'I told you is was ill',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 1063,
        text: 'I will swing for you',
        explanation:
            'I will kill you and am prepared to be hanged as a consequence", or "I will swing a punch at you".',
        origin: 'English',
    },
    {
        '': 1064,
        text: 'I will wear my heart upon my sleeve',
        explanation: 'Display your feelings openly, for all to see.',
        origin: 'English',
    },
    {
        '': 1065,
        text: 'Identity theft',
        explanation:
            'The use of personal details of another in order to use their identity dishonestly; for example, in order to obtain money, credit etc. fraudulently.',
        origin: 'English',
    },
    {
        '': 1066,
        text: 'Idioms quiz',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 1067,
        text: '(Beware the)  Ides of March',
        explanation: 'The Ides of March is just the 15th of March.',
        origin: 'English',
    },
    {
        '': 1068,
        text: 'If I had my druthers',
        explanation: 'If I had my preference.',
        origin: 'English',
    },
    {
        '': 1069,
        text: "If it ain't broke, don't fix it",
        explanation: 'If something is working adequately well, leave it alone.',
        origin: 'English',
    },
    {
        '': 1070,
        text: 'If music be the food of love, play on',
        explanation:
            "'If music be the food of love, play on' is the famous opening line from Shakespeare's comedy Twelfth Night.",
        origin: 'English',
    },
    {
        '': 1071,
        text: 'If the cap fits',
        explanation: 'If a description applies to you, then accept it.',
        origin: 'English',
    },
    {
        '': 1072,
        text: 'If the mountain will not come to Muhammad, then Muhammad must go to the mountain',
        explanation:
            "The proverbial phrase 'If the mountain will not come to Muhammad...' means that , if one's will does not prevail, one must submit to an alternative.",
        origin: 'English',
    },
    {
        '': 1073,
        text: 'If the shoe fits',
        explanation: 'If a description applies to you, then accept it.',
        origin: 'English',
    },
    {
        '': 1074,
        text: 'If wishes were horses, beggars would ride',
        explanation:
            "This proverb is recorded in English from quite an early date. A version of the expression appeared in the published works of William Camden in the  17th century. Camden was an interesting character; a historian and one of the select few who could write 'Herald' as his job description. He was one of three    senior heralds of the College of Arms under Queen Elizabeth I. In 1605, Camden collected together his miscellaneous notes on English and Classic history and published them under the title  The Remaines of a Greater Worke Concerning Britain. He didn't put his name to the work and dismissed it as \"the rude rubble and out-cast rubbishâ¦ of a greater and more serious worke\". The book was republished in several versions and  included this proverb:",
        origin: 'English',
    },
    {
        '': 1075,
        text: "If you can't stand the heat, get out of the kitchen",
        explanation:
            "Don't persist with a task if the pressure of it is too much for you. The implication being that, if you can't cope, you should leave the work to someone who can.",
        origin: 'English',
    },
    {
        '': 1076,
        text: 'If you think that, you have another think coming',
        explanation:
            "To have 'another think coming' is to be greatly mistaken. The phrase is usually spoken by an antagonist as 'you have another think coming'; the implication being that one will shortly be obliged to adopt a different viewpoint, either by the presentation of indisputable evidence, or by force.",
        origin: 'English',
    },
    {
        '': 1077,
        text: 'Ill wind',
        explanation: 'A misfortune.',
        origin: 'English',
    },
    {
        '': 1078,
        text: "I'll be there with bells on",
        explanation: 'Eager; ready to participate.',
        origin: 'English',
    },
    {
        '': 1079,
        text: "I'll go to the foot of our stairs",
        explanation: 'An exclamation of surprise.',
        origin: 'English',
    },
    {
        '': 1080,
        text: "I'll have your guts for garters",
        explanation:
            "To threaten to 'have someone's guts for garters' is to state the intention to do them serious harm. The threat isn't an actual and literal one and the overstatement of reprisal is meant to indicate humour, but with an indication that the threatened person has done something which has been something of an annoyance.",
        origin: 'English',
    },
    {
        '': 1081,
        text: "I'm stumped",
        explanation:
            'Stumped: Stuck - unable to proceed, often regarding being confounded by some intellectual puzzle.',
        origin: 'English',
    },
    {
        '': 1082,
        text: 'Imitation is the sincerest form of flattery',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1083,
        text: 'In a cleft stick',
        explanation:
            'In a position where advance and retreat are both impossible; in a fix.',
        origin: 'English',
    },
    {
        '': 1084,
        text: 'In a pickle',
        explanation: 'In a quandary or some other difficult position.',
        origin: 'English',
    },
    {
        '': 1085,
        text: "In a pig's eye",
        explanation: 'An expression of emphatic disbelief.',
        origin: 'English',
    },
    {
        '': 1086,
        text: 'In a quandary',
        explanation:
            'Faced with a dilemma - perplexed and uncertain what to do.',
        origin: 'English',
    },
    {
        '': 1087,
        text: 'In a nutshell',
        explanation: 'In a few words; concisely stated.',
        origin: 'English',
    },
    {
        '': 1088,
        text: 'In a trice',
        explanation: 'In a single moment, with no delay.',
        origin: 'English',
    },
    {
        '': 1089,
        text: 'In an interesting condition',
        explanation: 'A euphemism for pregnant.',
        origin: 'English',
    },
    {
        '': 1090,
        text: 'In for a penny, in for a pound',
        explanation:
            'This expression indicates the intention of seeing a course of action through, regardless of what it may entail. It suggests that, if one is decided to do something, one may as well do it wholeheartedly.',
        origin: 'English',
    },
    {
        '': 1091,
        text: 'In like Flynn',
        explanation:
            "To be 'in like Flynn' is to be quickly and/or emphatically successful, usually in a sexual or romantic context.",
        origin: 'English',
    },
    {
        '': 1092,
        text: 'In limbo',
        explanation:
            'In a state of being neglected and immobile, with no prospect of movement to a better place.',
        origin: 'English',
    },
    {
        '': 1093,
        text: 'In my minds eye',
        explanation: "One's visual memory or imagination.",
        origin: 'English',
    },
    {
        '': 1094,
        text: "In someone's bad books",
        explanation: 'To be in disgrace or out of favour.',
        origin: 'English',
    },
    {
        '': 1095,
        text: 'In spades',
        explanation: 'In abundance; very much.',
        origin: 'English',
    },
    {
        '': 1096,
        text: 'In stitches',
        explanation: 'Laughing\nuproariously.',
        origin: 'English',
    },
    {
        '': 1097,
        text: 'In the bag',
        explanation: "Virtually secured - as good as in one's possession.",
        origin: 'English',
    },
    {
        '': 1098,
        text: 'In the box-seat',
        explanation: 'In\na superior or advantageous position.',
        origin: 'English',
    },
    {
        '': 1099,
        text: 'In the buff',
        explanation: 'Naked.',
        origin: 'English',
    },
    {
        '': 1100,
        text: 'In the cart',
        explanation: 'In trouble.',
        origin: 'English',
    },
    {
        '': 1101,
        text: 'In the catbird seat',
        explanation: 'In\na superior or advantageous position.',
        origin: 'English',
    },
    {
        '': 1102,
        text: 'In the club',
        explanation: 'Euphemism, meaning pregnant.',
        origin: 'English',
    },
    {
        '': 1103,
        text: 'In the doghouse',
        explanation: 'In disgrace; out of favour.',
        origin: 'English',
    },
    {
        '': 1104,
        text: 'In the doldrums',
        explanation: 'In low spirits; feeling dull and drowsy.',
        origin: 'English',
    },
    {
        '': 1105,
        text: 'In the limelight',
        explanation: 'At the centre of attention.',
        origin: 'English',
    },
    {
        '': 1106,
        text: 'In the nick of time',
        explanation: 'Just in time; at the precise moment.',
        origin: 'English',
    },
    {
        '': 1107,
        text: 'In the pink',
        explanation: 'In perfect condition, especially of health.',
        origin: 'English',
    },
    {
        '': 1108,
        text: 'In the red',
        explanation: "To be 'in the red' is to be in debt.",
        origin: 'English',
    },
    {
        '': 1109,
        text: 'In the same boat',
        explanation: 'In the same circumstances; facing the same predicament..',
        origin: 'English',
    },
    {
        '': 1110,
        text: 'In your face',
        explanation: 'In a bold confrontational manner.',
        origin: 'English',
    },
    {
        '': 1111,
        text: 'Including, but not limited to',
        explanation: 'In a bold confrontational manner.',
        origin: 'English',
    },
    {
        '': 1112,
        text: 'Indian giver',
        explanation: 'One\nwho gives a gift but later takes it back.',
        origin: 'English',
    },
    {
        '': 1113,
        text: 'Indian summer',
        explanation:
            'An unseasonably warm, dry and calm weather, usually following a period of colder weather or frost in the late Autumn (or in the Southern hemisphere, where the term is less common, the late Spring).',
        origin: 'English',
    },
    {
        '': 1114,
        text: 'Infra dig',
        explanation: "Unbecoming of one's position - beneath one's dignity.",
        origin: 'English',
    },
    {
        '': 1115,
        text: 'Innocent until proven guilty',
        explanation:
            'The legal concept that the guilt of an accused person cannot be presumed and that they must be assumed to be innocent until proven otherwise.',
        origin: 'English',
    },
    {
        '': 1116,
        text: 'Inside out',
        explanation: 'With the inside on the outside .',
        origin: 'English',
    },
    {
        '': 1117,
        text: 'For all intents and purposes',
        explanation: 'In effect; for all practical purposes.',
        origin: 'English',
    },
    {
        '': 1118,
        text: 'Iron hoof',
        explanation: 'Poof\n(homosexual).',
        origin: 'English',
    },
    {
        '': 1119,
        text: 'Is the Pope Catholic?',
        explanation: 'A jokey rhetorical question.',
        origin: 'English',
    },
    {
        '': 1120,
        text: 'Is the Pope Polish?',
        explanation: "A jokey alternative version of 'Is the Pope Catholic?'.",
        origin: 'English',
    },
    {
        '': 1121,
        text: 'Is this a dagger which I see before me?',
        explanation:
            "This is one of the best-known lines from Shakespeare's Macbeth, 1605. Shakespeare used the image of a dagger in many of his plays. In fact there are few of his plays that don't have a reference to daggers in some form - most commonly deployed as symbolic of treachery. In the Scottish play, Macbeth has a vision of a dagger, pointing toward the King Duncan's chamber and perhaps indicating that he should use it to follow through on his and Lady Macbeth's plan of murdering the King.",
        origin: 'English',
    },
    {
        '': 1122,
        text: "It ain't over till the fat lady sings",
        explanation:
            'Nothing is irreversible until the final act is played out.',
        origin: 'English',
    },
    {
        '': 1123,
        text: 'It came like a bolt from the blue',
        explanation: 'A complete and sudden surprise.',
        origin: 'English',
    },
    {
        '': 1124,
        text: 'It is meat and drink to me',
        explanation:
            'Meat and drink in this phrase has two meanings, which appear to be independent of each other.\n Either, to be a source of support or pleasure or, to be a simple and routine matter.',
        origin: 'English',
    },
    {
        '': 1125,
        text: 'It never rains but it pours',
        explanation: 'When troubles come they come together.',
        origin: 'English',
    },
    {
        '': 1126,
        text: "It's all Greek to me",
        explanation: 'It was unintelligible to me.',
        origin: 'English',
    },
    {
        '': 1127,
        text: "It's all grist to the mill",
        explanation:
            'All things are a potential source of profit or advantage.',
        origin: 'English',
    },
    {
        '': 1128,
        text: "It's better to give than to receive",
        explanation:
            "The proverb 'It's better to give than to receive' has a straightforward literal meaning which needs no further explanation.",
        origin: 'English',
    },
    {
        '': 1129,
        text: "It's better to have loved and lost than never to have loved at all",
        explanation:
            "The proverbial saying 'It's better to have loved and lost than never to have loved at all' has a straightforward literal meaning.",
        origin: 'English',
    },
    {
        '': 1130,
        text: "It's better to light a candle than curse the darkness",
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1131,
        text: "It's not rocket science",
        explanation:
            "It (the subject under discussion) isn't difficult to understand.",
        origin: 'English',
    },
    {
        '': 1132,
        text: "It's that man again",
        explanation:
            'The full title of the popular 1940s BBC radio comedy - ITMA.',
        origin: 'English',
    },
    {
        '': 1133,
        text: 'Ivory tower',
        explanation:
            'A\nstate of sheltered and unworldly intellectual isolation.',
        origin: 'English',
    },
    {
        '': 1134,
        text: 'Jack in the box',
        explanation:
            'A toy consisting of a box containing a figure with a spring, which leaps up when the lid is raised.',
        origin: 'English',
    },
    {
        '': 1135,
        text: 'Jack of all trades, master of none',
        explanation: 'A man who can turn his hand to many things.',
        origin: 'English',
    },
    {
        '': 1136,
        text: 'Jack Palancing',
        explanation: 'Dancing.',
        origin: 'English',
    },
    {
        '': 1137,
        text: 'Jack - phrases that include the name Jack',
        explanation:
            "If it is true, as I'm sure it is, that the phrases in a language define a culture's interests and preoccupations then the English-speaking world must be fascinated by people.",
        origin: 'English',
    },
    {
        '': 1138,
        text: 'Jack Robinson - Before you can say',
        explanation: 'In a very short time; suddenly.',
        origin: 'English',
    },
    {
        '': 1139,
        text: 'Jack tar',
        explanation:
            "'Jack tar' is a generic name for a seaman of the British Royal Navy.",
        origin: 'English',
    },
    {
        '': 1140,
        text: 'Jack the lad',
        explanation:
            "A conspicuously self-assured, carefree and brash young man; a 'chancer'.",
        origin: 'English',
    },
    {
        '': 1141,
        text: 'Jam tomorrow',
        explanation:
            "'Jam tomorrow' is some pleasant event in the future, which is never likely to materialize.",
        origin: 'English',
    },
    {
        '': 1142,
        text: 'Jerry built',
        explanation:
            "If something is 'Jerry built' it is built in a makeshift and insubstantial manner.",
        origin: 'English',
    },
    {
        '': 1143,
        text: 'Jet-black',
        explanation: 'Absolutely black.',
        origin: 'English',
    },
    {
        '': 1144,
        text: 'Jimmy Horner',
        explanation: 'A corner.',
        origin: 'English',
    },
    {
        '': 1145,
        text: 'Jimmy Riddle',
        explanation: 'Urinate. Jimmy Riddle = piddle.',
        origin: 'English',
    },
    {
        '': 1146,
        text: 'Jobs for the boys',
        explanation:
            'Favouritism where jobs or other benefits are given to friends and acquaintances.',
        origin: 'English',
    },
    {
        '': 1147,
        text: 'Join the colours',
        explanation: 'Enlist in the army.',
        origin: 'English',
    },
    {
        '': 1148,
        text: 'Joined at the hip',
        explanation: 'Inextricably linked; inseparable.',
        origin: 'English',
    },
    {
        '': 1149,
        text: 'Johnny on the spot',
        explanation: 'Someone ready and available at the time needed.',
        origin: 'English',
    },
    {
        '': 1150,
        text: 'Jot or tittle',
        explanation: 'A tiny amount.',
        origin: 'English',
    },
    {
        '': 1151,
        text: 'Jump on the bandwagon',
        explanation:
            'Join a growing movement in support of someone or something, often in an opportunist way, when that movement is seen to have become successful.',
        origin: 'English',
    },
    {
        '': 1152,
        text: 'Jump the gun',
        explanation: 'Begin something before preparations for it are complete.',
        origin: 'English',
    },
    {
        '': 1153,
        text: 'Jump the shark',
        explanation:
            'To reach the point in a TV series that denotes it is irretrievably past its best by introducing a ridiculous or otherwise unbelievable plot device or characterisation in order to boost ratings.',
        origin: 'English',
    },
    {
        '': 1154,
        text: 'Jury is still out',
        explanation:
            'Judgement has not yet been finalised on a particular subject; especially due to information being incomplete.',
        origin: 'English',
    },
    {
        '': 1155,
        text: 'Just deserts',
        explanation:
            'That which is deserved. A reward for what has been done - good or bad.',
        origin: 'English',
    },
    {
        '': 1156,
        text: 'Just in time',
        explanation:
            'A manufacturing/delivery process where a minimum of goods are kept in stock. Items are planned to arrive precisely at the time they are required for use or despatch.',
        origin: 'English',
    },
    {
        '': 1157,
        text: 'Kangaroo court',
        explanation: 'An unauthorized, bogus court.',
        origin: 'English',
    },
    {
        '': 1158,
        text: 'Katy bar the door',
        explanation:
            "The expression 'Katy, bar the door' means take\n precautions; there's trouble ahead.",
        origin: 'English',
    },
    {
        '': 1159,
        text: 'Keel over',
        explanation: 'To keel over is to fall, suddenly and in a heap.',
        origin: 'English',
    },
    {
        '': 1160,
        text: 'Keep a wide berth',
        explanation: 'A goodly distance.',
        origin: 'English',
    },
    {
        '': 1161,
        text: 'Keen as mustard',
        explanation: 'Very enthusiastic.',
        origin: 'English',
    },
    {
        '': 1162,
        text: 'Keep body and soul together',
        explanation:
            'To survive. The phrase is most often used specifically to refer to earning sufficient money to keep oneself alive.',
        origin: 'English',
    },
    {
        '': 1163,
        text: 'Keep schtum',
        explanation:
            'Say nothing - especially in circumstances where saying the wrong thing may get you into trouble.',
        origin: 'English',
    },
    {
        '': 1164,
        text: 'Keep a stiff upper lip',
        explanation:
            'Remain resolute and unemotional in the face of adversity, or even tragedy.',
        origin: 'English',
    },
    {
        '': 1165,
        text: 'Keep at bay',
        explanation:
            'Prevent, either a person or an event, from advancing nearer.',
        origin: 'English',
    },
    {
        '': 1166,
        text: 'Keep it under your hat',
        explanation: 'Keep it secret.',
        origin: 'English',
    },
    {
        '': 1167,
        text: 'Keep the ball rolling',
        explanation:
            'Maintain a level of activity in and enthusiasm for a project.',
        origin: 'English',
    },
    {
        '': 1168,
        text: 'Keep up with the Joneses',
        explanation:
            'Keeping up with the Joneses" is striving to match one\'s neighbours in spending and social standing.',
        origin: 'English',
    },
    {
        '': 1169,
        text: 'Keep your chin up',
        explanation: 'Remain cheerful in a difficult situation.',
        origin: 'English',
    },
    {
        '': 1170,
        text: 'Keep your distance',
        explanation:
            "Observe the  avoidance of familiarity which is appropriate to one's position. Also, in more recent usage, to remain aloof and detached from another person or situation.",
        origin: 'English',
    },
    {
        '': 1171,
        text: 'Keep your hands clean',
        explanation: 'Be innocent of any wrongdoing; stay out of trouble.',
        origin: 'English',
    },
    {
        '': 1172,
        text: 'Keep your nose clean',
        explanation: 'Be innocent of any wrongdoing; stay out of trouble.',
        origin: 'English',
    },
    {
        '': 1173,
        text: 'Keep your nose to the grindstone',
        explanation:
            'To keep your nose to the grindstone is to apply yourself conscientiously to your work.',
        origin: 'English',
    },
    {
        '': 1174,
        text: 'Keep your pecker up',
        explanation: 'Remain cheerful - keep your head held high.',
        origin: 'English',
    },
    {
        '': 1175,
        text: 'Keep your powder dry',
        explanation:
            'Be prepared and save your resources until they are needed.',
        origin: 'English',
    },
    {
        '': 1176,
        text: 'Keeping up with the Joneses',
        explanation:
            'Keeping up with the Joneses" is striving to match one\'s neighbours in spending and social standing.',
        origin: 'English',
    },
    {
        '': 1177,
        text: 'Keepy-uppy',
        explanation:
            'The skill of ball-juggling - to keep a ball in the air for as long as possible by bouncing it off any part of the body that is allowed in the rules of football, that is, any part except the hands and arms. Typically the ball is kept up using the feet and head.',
        origin: 'English',
    },
    {
        '': 1178,
        text: 'Kettle of fish',
        explanation:
            "The expression 'a kettle of fish' is usually part of the phrases 'a fine kettle of fish', 'a pretty kettle of fish' etc, which mean 'a muddle or awkward state of affairs'.",
        origin: 'English',
    },
    {
        '': 1179,
        text: 'Khyber pass',
        explanation: 'Arse.',
        origin: 'English',
    },
    {
        '': 1180,
        text: 'Kick the bucket',
        explanation: "'Kick the bucket' is a colloquial expression for 'die'.",
        origin: 'English',
    },
    {
        '': 1181,
        text: 'Kick your heels',
        explanation: 'Wait impatiently to be summoned.',
        origin: 'English',
    },
    {
        '': 1182,
        text: "Kickin' - Alive and",
        explanation: 'Definitely alive; lively and active.',
        origin: 'English',
    },
    {
        '': 1183,
        text: 'Kilroy was here',
        explanation:
            "This was a graffito, of unknown origin but used predominantly by members of the US and UK military and predominantly during WWII. It was often combined with an earlier cartoon image, known as Chad, although the two aren't related apart from that conjunction.",
        origin: 'English',
    },
    {
        '': 1184,
        text: "King James' Version of the Bible",
        explanation:
            "The King James Version of the Bible has been enormously influential in the development of the English language. It ranks with the complete works of Shakespeare and the Oxford English Dictionary as one of the cornerstones of the recorded language. After Shakespeare, the King James, or Authorized, Version of the Bible is the most common source of phrases in English. The King James in question was James I of England and James VI of Scotland. He didn't write the text of course, he merely authorized it, hence the name by which the book is best known in the UK (King James Version, or KJV, being more commonly used in the USA).",
        origin: 'English',
    },
    {
        '': 1185,
        text: 'Kiss and tell',
        explanation:
            "Publicly retell of one's sexual exploits, often with the aim of revenge or monetary gain.",
        origin: 'English',
    },
    {
        '': 1186,
        text: 'Kiss me Hardy',
        explanation:
            'Words spoken, on his deathbed, by Admiral Horatio Nelson to Captain Thomas Hardy.',
        origin: 'English',
    },
    {
        '': 1187,
        text: '(The whole) kit and caboodle',
        explanation: 'A collection of things.',
        origin: 'English',
    },
    {
        '': 1188,
        text: 'Kith and kin',
        explanation: "One's kith and kin are one's friends and relations.",
        origin: 'English',
    },
    {
        '': 1189,
        text: 'Knee-jerk reaction',
        explanation: 'An\nautomatic response to something.',
        origin: 'English',
    },
    {
        '': 1190,
        text: 'Knick-knack',
        explanation: 'A dainty little trinket or ornament.',
        origin: 'English',
    },
    {
        '': 1191,
        text: 'Knight in shining armour',
        explanation:
            'A knight in shining armour is a person, usually a man, who comes to the aid of another, usually a woman, in a gallant and courteous manner.',
        origin: 'English',
    },
    {
        '': 1192,
        text: 'Knock back',
        explanation:
            'A\nreversal of fortune or disappointment. Also used in a verb form as to knock-back,\nmeaning to refuse an offer. Drinkers in a hurry may also knock back their drink, that is, gulp it down.',
        origin: 'English',
    },
    {
        '': 1193,
        text: 'Knock into a cocked hat',
        explanation: 'To beat  severely.',
        origin: 'English',
    },
    {
        '': 1194,
        text: 'Knock off',
        explanation:
            'To finish work for the day. Alternatively, to work quickly and complete a task - similar to polish off. A third alternative is a slang term meaning to steal.',
        origin: 'English',
    },
    {
        '': 1195,
        text: 'Knock on wood',
        explanation:
            "This\nphrase is used by people who rap their knuckles on a piece of wood hoping to stave off bad luck. In the UK, the phrase 'touch wood' is used - often jokingly by tapping one's head. The phrases are sometimes spoken when a person is already experiencing some good fortune and hope that it will continue - for example \"I've been winning on every race - touch wood\".",
        origin: 'English',
    },
    {
        '': 1196,
        text: 'Know the ropes',
        explanation:
            "To 'know the ropes' is to understand how to do something. To be acquainted with all the methods required.",
        origin: 'English',
    },
    {
        '': 1197,
        text: 'Know your onions',
        explanation: 'To be experienced in or knowledgeable about a subject.',
        origin: 'English',
    },
    {
        '': 1198,
        text: 'Know which side your bread is buttered',
        explanation:
            "To 'know on which side your bread is buttered' is to be aware of which side of a conflict it is in your interests to be on.",
        origin: 'English',
    },
    {
        '': 1199,
        text: 'Know which way the wind blows',
        explanation:
            'To understand what is happening in changing circumstances and to be able to anticipate the future.',
        origin: 'English',
    },
    {
        '': 1200,
        text: 'Knuckle down',
        explanation: 'Get down to work and apply oneself earnestly to it.',
        origin: 'English',
    },
    {
        '': 1201,
        text: 'Knuckle under',
        explanation: 'Give way; give in; submit.',
        origin: 'English',
    },
    {
        '': 1202,
        text: 'Kowtow to',
        explanation:
            'To accept the authority of another; to act in a  subservient manner.',
        origin: 'English',
    },
    {
        '': 1203,
        text: 'La-di-da',
        explanation:
            'Used to highlight and ridicule snobbish forms of behaviour or speech.',
        origin: 'English',
    },
    {
        '': 1204,
        text: 'La dolce vita',
        explanation: 'The good life, full of pleasure and indulgence.',
        origin: 'English',
    },
    {
        '': 1205,
        text: 'Labour of love',
        explanation:
            'Work\nundertaken for the pleasure of it or for the benefit of a loved one.',
        origin: 'English',
    },
    {
        '': 1206,
        text: 'Lackadaisical',
        explanation: 'In a listless, languid manner; without interest. .',
        origin: 'English',
    },
    {
        '': 1207,
        text: "Ladies' room",
        explanation: 'Euphemism for going to the lavatory.',
        origin: 'English',
    },
    {
        '': 1208,
        text: 'Lager frenzy',
        explanation: 'Drink induced mayhem.',
        origin: 'English',
    },
    {
        '': 1209,
        text: 'Laid out in lavender',
        explanation:
            "Prepared for burial. The phrase has also been used to mean 'show something in the best possible light'. There are also reports of its use as meaning 'to criticize or condemn', but I can't confirm that usage.",
        origin: 'English',
    },
    {
        '': 1210,
        text: 'La-la land',
        explanation:
            'A notional place characterized by fantasy, self-absorption and blissful lack of touch with reality.',
        origin: 'English',
    },
    {
        '': 1211,
        text: 'Lamb to the slaughter',
        explanation:
            'In an unconcerned manner - unaware of the impending catastrophe.',
        origin: 'English',
    },
    {
        '': 1212,
        text: 'Lame duck',
        explanation:
            "A person or thing that isn't properly able to function, especially one that was previously proficient.",
        origin: 'English',
    },
    {
        '': 1213,
        text: 'Land of nod - The',
        explanation:
            'The Land of Nod is a mythical  land where we travel to to sleep.',
        origin: 'English',
    },
    {
        '': 1214,
        text: 'Lardy-dardy',
        explanation:
            'Used to highlight and ridicule snobbish forms of behaviour or speech.',
        origin: 'English',
    },
    {
        '': 1215,
        text: 'Lark about',
        explanation: 'Play the fool, in a childish or careless manner.',
        origin: 'English',
    },
    {
        '': 1216,
        text: 'Last but not least',
        explanation:
            'An introduction, often on stage, indicating that the person announced last is no less important than those introduced earlier.',
        origin: 'English',
    },
    {
        '': 1217,
        text: 'Last straw - The',
        explanation:
            "The final additional small burden that makes the entirety of one's difficulties unbearable.",
        origin: 'English',
    },
    {
        '': 1218,
        text: 'Latin Phrases',
        explanation:
            "Here's a list of Latin phrases and sayings that are used in English often enough to have become part of the language.",
        origin: 'English',
    },
    {
        '': 1219,
        text: 'Laugh like a drain',
        explanation:
            'To laugh coarsely or loudly, especially at the discomfort of others.',
        origin: 'English',
    },
    {
        '': 1220,
        text: 'Laughing-stock',
        explanation: 'A figure or object of ridicule and laughter.',
        origin: 'English',
    },
    {
        '': 1221,
        text: "Laurels - rest on one's",
        explanation:
            "To be  satisfied with one's past success and to consider further   effort unnecessary.",
        origin: 'English',
    },
    {
        '': 1222,
        text: 'The law is an ass',
        explanation:
            'Said of the application of the law that is contrary to common sense.',
        origin: 'English',
    },
    {
        '': 1223,
        text: 'Lay it on with a trowel',
        explanation:
            'To lay something on with a trowel is to crudely labour a point, or flatter in an overly generous manner.',
        origin: 'English',
    },
    {
        '': 1224,
        text: 'Lead balloon - Go over like a',
        explanation: 'Fail completely and be considered a flop by the public.',
        origin: 'English',
    },
    {
        '': 1225,
        text: 'Lead-pipe cinch',
        explanation: 'A complete certainty.',
        origin: 'English',
    },
    {
        '': 1226,
        text: 'Learn the ropes',
        explanation:
            "To 'know the ropes' is to understand how to do something. To be acquainted with all the methods required.",
        origin: 'English',
    },
    {
        '': 1227,
        text: "Left hand doesn't know what the right hand is doing",
        explanation: "One's varied interests are kept separate.",
        origin: 'English',
    },
    {
        '': 1228,
        text: 'Left in the lurch',
        explanation: 'Abandoned in a difficult position without help.',
        origin: 'English',
    },
    {
        '': 1229,
        text: "Legend in one's own lifetime",
        explanation:
            "'A legend in their own lifetime' refers to  a living person of considerable fame.",
        origin: 'English',
    },
    {
        '': 1230,
        text: 'Leopard cannot change its spots - A',
        explanation:
            "The\n          proverbial saying 'A leopard cannot change its spots' expresses the notion that things cannot change their innate nature. It is normally used to suggest that  people who have done bad things will always be bad people.",
        origin: 'English',
    },
    {
        '': 1231,
        text: 'Less is more',
        explanation:
            'The notion that simplicity and clarity lead to good design.',
        origin: 'English',
    },
    {
        '': 1232,
        text: 'Let a thousand flowers bloom',
        explanation: 'Encourage many ideas from many sources.',
        origin: 'English',
    },
    {
        '': 1233,
        text: 'Let bygones be bygones',
        explanation:
            "To 'let bygones be bygones' is to allow the unpleasant things that have happened in the past  be forgotten.",
        origin: 'English',
    },
    {
        '': 1234,
        text: 'Let not poor Nelly starve',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 1235,
        text: 'Let not the sun go down on your wrath',
        explanation: 'Do not hold on to your anger for more than one day.',
        origin: 'English',
    },
    {
        '': 1236,
        text: 'Let or hindrance',
        explanation: 'Without impediment.',
        origin: 'English',
    },
    {
        '': 1237,
        text: 'Let sleeping dogs lie',
        explanation:
            'Avoid interfering in a situation which is currently stable.',
        origin: 'English',
    },
    {
        '': 1238,
        text: 'Let the cat out of the bag',
        explanation:
            'To let the cat out of the bag is to disclose a secret, either deliberately or inadvertently.',
        origin: 'English',
    },
    {
        '': 1239,
        text: 'Let them eat cake',
        explanation:
            'The origins of many English phrases are unknown. Nevertheless, many people would say that they know the source of this one. It is widely attributed to Marie-Antoinette (1755-93), the Queen consort of Louis XVI. She is supposed to have said this when she was told that the French populace had no bread to eat.',
        origin: 'English',
    },
    {
        '': 1240,
        text: 'Let there be light',
        explanation:
            "2011 sees the celebration of the 400th anniversary of the publication of the King James Version of the Bible (or Authorized Version). The KJV is a strong contender for the accolade of 'the book that has had more influence on the development of English than any other'.",
        origin: 'English',
    },
    {
        '': 1241,
        text: 'Let your hair down',
        explanation: 'Behave in a free or uninhibited manner.',
        origin: 'English',
    },
    {
        '': 1242,
        text: "Let's roll",
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 1243,
        text: 'Level playing field',
        explanation:
            'Fair competition, where no advantage is shown to either side.',
        origin: 'English',
    },
    {
        '': 1244,
        text: 'Lick and a promise',
        explanation:
            'A\n cursory effort, for instance at painting or tidying up. It alludes to the perfunctory washing performed by children.',
        origin: 'English',
    },
    {
        '': 1245,
        text: 'Lick into shape',
        explanation:
            'To transform a faulty object or venture into something that works effectively.',
        origin: 'English',
    },
    {
        '': 1246,
        text: 'Lickety-split',
        explanation: 'Headlong; at full speed.',
        origin: 'English',
    },
    {
        '': 1247,
        text: 'Lie low',
        explanation: "Keep\nout of sight; bide one's time.",
        origin: 'English',
    },
    {
        '': 1248,
        text: 'Lies, damned lies and statistics',
        explanation:
            'This saying has a literal meaning. It suggests that statisyics can be used to mislead even more than the worst form of untruth.',
        origin: 'English',
    },
    {
        '': 1249,
        text: 'Life begins at forty',
        explanation: "Life begins to be better in one's middle age.",
        origin: 'English',
    },
    {
        '': 1250,
        text: 'Life in the 1500s - folk etymologies',
        explanation:
            'The message below contains several false attributions of the origin of some common English phrases. It began circulating on the Internet in April 1999, under the heading of "Life in the 1500s".',
        origin: 'English',
    },
    {
        '': 1251,
        text: 'Life of Riley',
        explanation: "'The life of Riley' is an easy and pleasant life.",
        origin: 'English',
    },
    {
        '': 1252,
        text: "Life's not all beer and skittles",
        explanation:
            "'Beer and skittles' is shorthand for a life of indulgence spent in the pub.",
        origin: 'English',
    },
    {
        '': 1253,
        text: "Life's too short",
        explanation:
            'Response to a request to do something that seems too petty to waste valuable time on.',
        origin: 'English',
    },
    {
        '': 1254,
        text: 'Like a chicken with its head cut off',
        explanation: 'In a frenzied manner.',
        origin: 'English',
    },
    {
        '': 1255,
        text: 'Like a moth to a flame',
        explanation:
            'Irresistibly and dangerously attracted to something or someone.',
        origin: 'English',
    },
    {
        '': 1256,
        text: 'Like being savaged by a dead sheep',
        explanation:
            'This was said by combative UK Labour politician Dennis Healey on being criticized by the mild mannered Tory minister Geoffrey Howe in the UK House of Commons in June 1978.',
        origin: 'English',
    },
    {
        '': 1257,
        text: 'Like billy-o',
        explanation:
            'An extreme standard of comparison; for example, "It rained like billy-o; we were all soaked through.".',
        origin: 'English',
    },
    {
        '': 1258,
        text: 'Like it or lump it',
        explanation:
            'Said of an unpleasant outcome that one has no choice but to accept - one can either endure it willingly or endure it with suffering.',
        origin: 'English',
    },
    {
        '': 1259,
        text: 'Like the clappers',
        explanation: 'Go very fast; in a vigorous manner.',
        origin: 'English',
    },
    {
        '': 1260,
        text: 'Like the Dickens',
        explanation: "A lot; as in 'hurts like the dickens'.",
        origin: 'English',
    },
    {
        '': 1261,
        text: 'Like two peas in a pod',
        explanation: "'Two peas in a pod' are two identical items or people.",
        origin: 'English',
    },
    {
        '': 1262,
        text: 'Like turkeys voting for Christmas',
        explanation:
            "'Turkeys voting for Christmas' is used to describe people acting in a way that  is harmful to their own interests.",
        origin: 'English',
    },
    {
        '': 1263,
        text: 'Lily-livered',
        explanation: 'Cowardly.',
        origin: 'English',
    },
    {
        '': 1264,
        text: 'Little bird told me - A',
        explanation: 'I was told by a private or secret source.',
        origin: 'English',
    },
    {
        '': 1265,
        text: 'Little knowledge is a dangerous thing - A',
        explanation:
            "The proverb 'A little knowledge is a dangerous thing' expresses the idea that a small amount of knowledge can mislead people into thinking that they are more expert than they really are, which can lead to mistakes being made.",
        origin: 'English',
    },
    {
        '': 1266,
        text: 'Little of what you fancy does you good - A',
        explanation: 'A euphemistic way of expressing the benefits of sex.',
        origin: 'English',
    },
    {
        '': 1267,
        text: 'Little pitchers have big ears',
        explanation:
            "This proverbial saying means 'be careful, children are listening'.",
        origin: 'English',
    },
    {
        '': 1268,
        text: 'Lions led by donkeys',
        explanation: 'A description of the British soldiers of WWI.',
        origin: 'English',
    },
    {
        '': 1269,
        text: 'Live long and prosper',
        explanation:
            "'Live long and prosper' is an\nabbreviated version of a traditional Jewish religious blessing. It came to a wider public in the Star Trek TV series, where it was used\nthere by the character Mr. Spock (actor Leonard Nimoy, himself Jewish) as the\ngreeting of the Vulcan people.",
        origin: 'English',
    },
    {
        '': 1270,
        text: 'Living daylights',
        explanation:
            'To beat the living daylights out of someone is to beat them severely, to the point where they lose consciousness.',
        origin: 'English',
    },
    {
        '': 1271,
        text: 'Living off the fat of the land',
        explanation: 'Living well; fed by abundant crops.',
        origin: 'English',
    },
    {
        '': 1272,
        text: 'Living on borrowed time',
        explanation:
            'Living after the time you would have expected to have died.',
        origin: 'English',
    },
    {
        '': 1273,
        text: 'Lo and behold',
        explanation:
            'An exclamation, on drawing others attention to something. Used especially to to announce things that are considered startling or important. The phrase is often written with an exclamation mark.',
        origin: 'English',
    },
    {
        '': 1274,
        text: 'Load of cobblers',
        explanation: 'Nonsense, rubbish.',
        origin: 'English',
    },
    {
        '': 1275,
        text: 'Load of codswallop',
        explanation: 'Nonsense.',
        origin: 'English',
    },
    {
        '': 1276,
        text: 'Loaf of bread',
        explanation: 'Head.',
        origin: 'English',
    },
    {
        '': 1277,
        text: 'Local derby',
        explanation:
            'A sporting contest between rivals from the same district. Often referring to football (soccer) matches.',
        origin: 'English',
    },
    {
        '': 1278,
        text: 'Lock stock and barrel',
        explanation:
            'Lock, stock and barrel means the whole thing, entire and complete.',
        origin: 'English',
    },
    {
        '': 1279,
        text: 'Long in the tooth',
        explanation: 'Old, especially of horses or people.',
        origin: 'English',
    },
    {
        '': 1280,
        text: 'Look before you leap',
        explanation:
            'Check that you are clear what is ahead of you before making a decision that you cannot go back on.',
        origin: 'English',
    },
    {
        '': 1281,
        text: 'Loose cannon',
        explanation:
            'An unpredictable person or thing, liable to cause damage if not kept in check by others.',
        origin: 'English',
    },
    {
        '': 1282,
        text: 'Loose lips sink ships',
        explanation:
            "'Loose lips sink ships' was a wartime expression meaning 'unguarded talk may give useful information to the enemy'.",
        origin: 'English',
    },
    {
        '': 1283,
        text: 'Lose face',
        explanation: "Lose face - Be humiliated; lose one's reputation.",
        origin: 'English',
    },
    {
        '': 1284,
        text: 'Lose your marbles',
        explanation: 'Lose your wits.',
        origin: 'English',
    },
    {
        '': 1285,
        text: 'Love is blind',
        explanation:
            "This expression is first found in Chaucer's  Merchant's Tale, circa 1405:",
        origin: 'English',
    },
    {
        '': 1286,
        text: 'Love that dare not speak its name - The',
        explanation:
            'A reference to homosexual love, although Oscar Wilde\n denied this in his defense of the charge of gross indecency.',
        origin: 'English',
    },
    {
        '': 1287,
        text: 'Loved-up',
        explanation:
            'Feeling euphoric and well-disposed towards those around you - induced by the use of drugs, notably Ecstasy (methylenedioxymethamphetamine).',
        origin: 'English',
    },
    {
        '': 1288,
        text: 'Lunatic fringe',
        explanation:
            'A minority group of adherents showing extreme support for a political  movement or a set of beliefs.',
        origin: 'English',
    },
    {
        '': 1289,
        text: 'Mad as a hatter',
        explanation:
            'Completely\n          mad. This is now commonly understood to mean crazy, although the original meaning is unclear and may have meant annoyed.',
        origin: 'English',
    },
    {
        '': 1290,
        text: 'Mad as a March hare',
        explanation:
            "To be 'as mad as a March hare' is to be completely\n              mad.",
        origin: 'English',
    },
    {
        '': 1291,
        text: 'Magical realism',
        explanation:
            'A literary genre in which magical features and storylines appear and are accepted as everyday reality.',
        origin: 'English',
    },
    {
        '': 1292,
        text: 'Main chance',
        explanation: 'The most important issue.',
        origin: 'English',
    },
    {
        '': 1293,
        text: 'Make a bee-line for',
        explanation: 'Go directly towards.',
        origin: 'English',
    },
    {
        '': 1294,
        text: 'Make a clean breast of it',
        explanation: 'To make a full disclosure; to confess.',
        origin: 'English',
    },
    {
        '': 1295,
        text: "Make a pig's ear of",
        explanation:
            "As 'pig's ear' - Cockney rhyming slang for beer. \n  As 'in a pig's ear' - an expression of disbelief.\n    \n    As \n  'make a pig's ear of ' - make a mess or muddle.",
        origin: 'English',
    },
    {
        '': 1296,
        text: 'Make a virtue of necessity',
        explanation:
            "Obtain kudos from apparently willingly doing something that one was in fact couldn't avoid doing. It is also used to mean 'submit with good grace'.",
        origin: 'English',
    },
    {
        '': 1297,
        text: 'Make haste',
        explanation: 'Act quickly.',
        origin: 'English',
    },
    {
        '': 1298,
        text: 'Make hay while the sun shines',
        explanation:
            "Make the most of one's opportunities while you have the chance.",
        origin: 'English',
    },
    {
        '': 1299,
        text: "Make him an offer he can't refuse",
        explanation: "The\n 'offer' being 'do as I say or I'll kill you'.",
        origin: 'English',
    },
    {
        '': 1300,
        text: 'Make my day',
        explanation:
            'Carry on with what you are doing - it will give me an excuse to behave badly.',
        origin: 'English',
    },
    {
        '': 1301,
        text: 'Make no bones about',
        explanation:
            'To state a fact in a way that allows no doubt. To have no objection to.',
        origin: 'English',
    },
    {
        '': 1302,
        text: 'Make your hair stand on end',
        explanation:
            'Something that makes your hair stand on end is something alarming or frightening.',
        origin: 'English',
    },
    {
        '': 1303,
        text: 'Mal de mer',
        explanation: 'Seasickness.',
        origin: 'English',
    },
    {
        '': 1304,
        text: 'Man after my own heart - A',
        explanation: 'A\nkindred spirit - someone I can agree with.',
        origin: 'English',
    },
    {
        '': 1305,
        text: 'Man does not live by bread alone',
        explanation:
            'Physical nourishment is not sufficient for a healthy life; man also has spiritual needs.',
        origin: 'English',
    },
    {
        '': 1306,
        text: 'Man who is his own lawyer has a fool for a client - A',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1307,
        text: "A dog is a man's best friend",
        explanation:
            'An animal that performs valuable service to humans, often with reference to dogs.',
        origin: 'English',
    },
    {
        '': 1308,
        text: "Man's inhumanity to man",
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1309,
        text: 'Many a little makes a mickle',
        explanation: 'Many small amounts accumulate to make a large amount.',
        origin: 'English',
    },
    {
        '': 1310,
        text: 'Many are called but few are chosen',
        explanation:
            'Literal meaning, alluding to the variety in qualities of humankind.',
        origin: 'English',
    },
    {
        '': 1311,
        text: 'Many happy returns',
        explanation: 'Have\nmany more happy days, especially birthdays.',
        origin: 'English',
    },
    {
        '': 1312,
        text: 'Many a true word is spoken in jest',
        explanation:
            'A literal meaning; that the truth is often found in comic utterances.',
        origin: 'English',
    },
    {
        '': 1313,
        text: "'March' phrases",
        explanation:
            'March. That means spring is round the corner in the UK and, as is usual here at this time of year, the weather is madly changeable. Yesterday, we had a beautifully sunny spring day; today as I look out of the window I can see nothing but  freezing grey fog.',
        origin: 'English',
    },
    {
        '': 1314,
        text: "Mare's nest",
        explanation:
            'A much vaunted discovery, which later turns out to be illusory or worthless.',
        origin: 'English',
    },
    {
        '': 1315,
        text: 'Marital aid',
        explanation:
            'A euphemism for a sex toy or any device intended to enhance sexual stimulation.',
        origin: 'English',
    },
    {
        '': 1316,
        text: 'Market forces',
        explanation:
            'The economic factors affecting the price and availability of a commodity or product in a free market',
        origin: 'English',
    },
    {
        '': 1317,
        text: 'Marry in haste, repent at leisure',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1318,
        text: 'May you live in interesting times',
        explanation:
            'May you experience much disorder and trouble in your life.',
        origin: 'English',
    },
    {
        '': 1319,
        text: 'McCoy - The real',
        explanation: 'The real thing - not a substitute.',
        origin: 'English',
    },
    {
        '': 1320,
        text: 'Mea culpa',
        explanation:
            "I'm to blame. The literal translation from the Latin is 'through my own fault'.\nEven those who don't speak Latin could probably make a guess that this phrase means 'I am culpable', or words to that effect.",
        origin: 'English',
    },
    {
        '': 1321,
        text: 'Meat and drink',
        explanation:
            'Meat and drink in this phrase has two meanings, which appear to be independent of each other.\n Either, to be a source of support or pleasure or, to be a simple and routine matter.',
        origin: 'English',
    },
    {
        '': 1322,
        text: 'Meat and two veg.',
        explanation:
            'Meat and two vegetables, that is, meat with potatoes and another vegetable, is a traditional English meal.',
        origin: 'English',
    },
    {
        '': 1323,
        text: 'Meet your Waterloo',
        explanation: 'Arrive at a final decisive contest.',
        origin: 'English',
    },
    {
        '': 1324,
        text: 'Memory lane',
        explanation:
            'An imaginary idyllic place where people take sentimental journeys through their memories of  past  experiences.',
        origin: 'English',
    },
    {
        '': 1325,
        text: 'Men in suits',
        explanation:
            "Businessmen/bureaucrats/soldiers and the like who follow convention and the company line. Also called just 'suits'.",
        origin: 'English',
    },
    {
        '': 1326,
        text: 'Mend fences',
        explanation:
            'Re-establish good relations with people one has disagreed with.',
        origin: 'English',
    },
    {
        '': 1327,
        text: 'Ménage à trois',
        explanation:
            'A living arrangement comprising three people (not all of the same sex) in a sexual relationship. Alternatively, a sexual liaison between such a group of people.',
        origin: 'English',
    },
    {
        '': 1328,
        text: "Men's evil manners live in brass; their virtues we write in water",
        explanation: "From Shakespeare's Henry VIII, 1612:",
        origin: 'English',
    },
    {
        '': 1329,
        text: 'Merry Christmas',
        explanation:
            "See also: our list of 'Christmas Card Sayings and Expressions'.",
        origin: 'English',
    },
    {
        '': 1330,
        text: 'Method in my madness',
        explanation: 'Reason behind apparent folly or disorder.',
        origin: 'English',
    },
    {
        '': 1331,
        text: 'Mexican wave',
        explanation:
            'A\nwave effect formed when crowds in stadia rise up and down from their seats in\nsuccession.',
        origin: 'English',
    },
    {
        '': 1332,
        text: 'Mickey Finn',
        explanation:
            "A sedative (or sometimes in the US a purgative) drug surreptitiously slipped into someone's drink.",
        origin: 'English',
    },
    {
        '': 1333,
        text: 'Middle for diddle',
        explanation: 'A rhyme used to decide who starts a darts match.',
        origin: 'English',
    },
    {
        '': 1334,
        text: 'Middle of the road',
        explanation:
            'Something unadventurous or inoffensive; opting to go neither one way or the other.',
        origin: 'English',
    },
    {
        '': 1335,
        text: 'Might and main',
        explanation: "With might and main is 'with all of one's strength'.",
        origin: 'English',
    },
    {
        '': 1336,
        text: '(The pen is) mightier than the sword',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1337,
        text: 'Mighty oaks from little acorns grow',
        explanation: 'Great things may come from small beginnings.',
        origin: 'English',
    },
    {
        '': 1338,
        text: "Milk of human kindness\nMinced oaths\nMinced words\nMind your Ps and Qs\nMind's ear\nMind's eye\nMinistering angel shall my sister be - A \nMint condition\n\n\n\nMisery acquaints a man with strange bedfellows\nMisquotes\nMiss is as good as a mile\nMoaning Minnie\nMondegreens\nMontezuma's Revenge\n'Money' phrases\nMoney for old rope\nMonstrous regiment of women\nMonty - The full\nMoot point\nMorbid obesity\nMore bang for your buck\nMore fool you\nMore haste, less speed\nMore honoured in the breach than in the observance\nMore light!\nMorning person\nMother country\nMotley crew\nMouth-watering\nMovable feast\nMovers and shakers\nMoving finger writes - The \nMoving the goalposts\nMuch Ado about Nothing\nMuch of a muchness\nMud - your name is\nMull (something) over\nMultitude of sins\nMumbo jumbo\nMum's the word\nMurphy's Law\nMusic has charms to soothe the savage breast\nMutt's nuts - The \nMutt and Jeff\nMutton dressed as lamb\nMy bad \nMy better half \nMy cup of tea\nMy cup runneth over\nMy giddy aunt\nMy husband and I\nMy mind's eye\nMy old china\nMy old Dutch\nMy salad days\nMy stars and garters\nMy way or the highway\nNail your colours to the mast\nNamby-pamby\nName and shame\nName is mud\nNasty, brutish and short\nNation of shopkeepers - A \nNautical phrases\nNear the knuckle \nNecessity is the mother of invention\nNe'er cast a clout till May be out\nNe'er do well\nNeeds must \nNeither a borrower nor a lender be\nNeither fish nor flesh, nor good red herring\nNeither here nor there\nNest-egg\nNest of vipers - A \nNever give a sucker an even break\nNever knowingly undersold\nNever look a gift horse in the mouth\nNever-never land\nNever the twain shall meet\nNew kid on the block\nNice as ninepence\nNice kettle of fish\n(In the) nick of time \nNight owl\nNine days' wonder\nNip and tuck\nNip in the bud\nNitty-gritty\nNo-brainer\nNo dice\nNo holds barred\nNo laughing matter\nNo love lost\nNo man is an island\nNo more cakes and ale?\nNo names: no pack-drill\nNo quarter given\nNo rest for the wicked\nNo room to swing a cat\nNo truck with\nNo way, Jose\nNod is as good as a wink - A \nNod - The land of\nNorange - A \nNosy parker\nNot a dicky-bird\nNot by a long chalk\nNot my cup of tea\nNot for all the tea in China\nNot playing with a full deck\nNot rocket science\nNot tonight Josephine\nNot worth a plugged nickel\nNot worth the candle\nNothing is certain but death and taxes\nNothing succeeds like success\nNothing ventured, nothing gained\nNow is the winter of our discontent\nNth degree \nNul points\nNutshell - In a\nO Romeo, Romeo! wherefore art thou Romeo?\nO ye, of little faith\nOdds bodkins\nOff his own bat\nOff the record\nOff with his head\n\n\n\nOffing - In the\nOh, my stars and garters\nOh, they have slain the Earl of Moray and Lady Mondegreen\nOkay\nOkey-dokey\nOld as Methuselah\nOld as the hills\nOld chestnut\nOld codger\nOld hat\nOld lang syne - see auld lang syne\nOn a hiding to nothing\nOn a wing and a prayer\nOn Carey Street\nOn cloud nine\nOn queer street\nOn tenterhooks\nOn the ball\nOn the bubble\nOn the button\nOn the dole\nOn the fiddle\nOn the pig's back\nOn the QT\nOn the shoulders of giants\nOn the side of the angels\nOn the wagon\nOn the warpath\nOn with the motley\nOn your beam ends\nOn your tod\nOnce bitten, twice shy\nOnce in a blue moon\nOnce more unto the breach, dear friends, once more\nOne-hit wonder\nOne fell swoop - At\nOne for the road\nOne foot in the grave\nOne good turn deserves another\nOne hand washes the other\nOne over the eight\nOne sandwich short of a picnic\nOne small step for man\nOne stop shop\nOne swallow doesn't make a summer\nOne's heart's content\nOops-a-daisy\nOpen season\n(The) order of the boot\nOugh - the many ways to pronounce\nOut of sight\nOut of sight, out of mind\nOut of sorts\nOut of the jaws of death\nOut of the mouths of babes and sucklings\nOut on a limb\nOver a barrel\nOver-egg the pudding\nOver the moon\nOver the top\nOverpaid, oversexed, and over here\nOxo cube\nPs and Qs - Mind your \n Packed to the gunwales\nPaddle your own canoe\nPaint the town red\nPanic stations\nPaper tiger\nParting shot / Parthian shot \nPass over to the other side\nPass the buck\nPaying guest - A\nP.D.Q. - pretty damn quick\nPearls before swine\nPears for your heirs\nPeeping Tom\nPeg out\nPell-mell\n(The) pen is mightier than the sword \nPennies from heaven\nPenny dreadful\n(The) penny drops \nPenny pinching\nPenny for your thoughts - A\nPenny saved is a penny earned - A \nPenny wise and pound foolish\nPester power\nPeter out\nPetty cash\nPhrases and sayings quiz\nPhrases that people get wrong\nPhysician heal thyself\nPick 'n' mix \nPicture is worth a thousand words - A \nPicture-perfect\nPie - as easy as \nPie in the sky\nPiece of cake - A\nPiece of piss\nPiece of the action\nPig in a poke\nPigeon-chested\nPig's back - on the \nPig's ear\n(In a) pig's eye\nPig and whistle\nPiggyback\nPigs might fly\nPin money\n(Take with a) pinch of salt\nPip - Get the/got the /have the \nPipe down\nPipe dream - A\nPiping hot\nPiss and vinegar - Full of \nPitch black\nPitch dark\nPlace for everything and everything in its place - A \nPlague on both your houses - A \nPlain sailing\nPlates of meat\nPlay by ear\nPlay Devil's advocate\nPlay ducks and drakes\nPlay fast and loose\nPlay gooseberry\nPlay it again Sam\nPlay second fiddle\nPlay silly buggers\nPlay the giddy goat\nPlay the race card\nPleased as Punch\nPlug-ugly\nPlugged nickel\nPoetic justice\n\n\n\nPoint-and-click \nPoint Percy at the porcelain\nPolitically correct\nPoint-blank\nPoint to point\nPommy bashing\nPomp and circumstance\nPond life\nPony and trap\nPony up\nPop goes the weasel\nPop your clogs\nPopular fallacies - The Nonsense Nine \nPork pies\nPOSH - Port out, starboard home\nPot calling the kettle black - The \nTake potluck \nPound of flesh\nPour oil on troubled waters\nPower corrupts; absolute power corrupts absolutely\nPower dressing\nPowers that be - The \nPraying at the porcelain altar\nPreaching to the choir\nPreposterous\nPress into service\nPretty kettle of fish\nPretty penny - A\nPrick up your ears\nPride comes before a fall\nPrime time\nPrimrose path\nProcrastination is the thief of time\nProof of the pudding is in the eating - The\nProverbs - A list of \nPull in your horns\nPull out all the stops\nPull the other one, it's got bells on\nPull the wool over your eyes\nPull up stakes\nPull your horns in\nPull your finger out\nPull yourself up by your bootstraps\nPulling one's leg\nPunch above one's weight\nPure as the driven snow\nPurple patch\nPush the boat out\nPush the envelope\nPut a damper on\nPut a sock in it\nPut a spanner in the works\nPut on the wooden overcoat\nPut on your thinking cap\nPut paid to\nPut the cart before the horse\nPut the mockers on\nPut the wood in the hole\nPut up your dukes\nPut your back up\nPut your best foot forward\nPut your nose out of joint \nPut your shoulder to the wheel \nPyrric victory\nQuality time\nQuantum leap\nQuarter - Give no \nQueer as a nine bob note\nQueer Street\nQueer the pitch\nQuick and the dead - The \nQuicker than lager turns to piss\nQuid pro quo\nQuotations\nRabbit and pork\nRack and ruin\nRag-and-bone man\nRack your brains\nRag, tag and bobtail\nRaining cats and dogs\nRaining stair-rods\nRaise Cain\nRank and file\nRaspberry tart\nRaze to the ground\nRat arsed\nRead between the lines\nRead the riot act\nReal McCoy\nRed-handed (caught) \nRed herring\nRed in tooth and claw\nRed-letter day\nRed rag to a bull - A \nRed sky at night ...\nRed tape\nReduplicated phrases\nReligion is the opium of the people \nRest on his laurels\nRevenge is a dish best served cold\nRhyme nor reason\nRhyming slang\nRichard of York gave battle in vain\nRichard the Third\nRiddle wrapped up in an enigma - A \nRide a cock-horse to Banbury Cross\nRiding shotgun\nRiff-raff\nRiley - the life of \n[That] Rings a bell\nRing a ring o'roses, a pocketful of posies, atishoo, atishoo, all fall down\nRing down the curtain\nRing-fencing\nRing the changes\nRinky-dink\nRise and shine\nRoad less travelled - The \nRoad apples\nRoad rage\nRoasted to a turn\nRob Peter to pay Paul\nRock and roll \nIt's not rocket science \nA rolling stone gathers no moss\nRomeo, Romeo, wherefore art thou Romeo?\nRose by any other name would smell as sweet - A \nRose is a rose is a rose\nRosie Lea\nRough diamond\n\n\n\nRound Robin\nRoute one\nRub of the green\nRule of thumb\nRum do\nRumpy-pumpy\nRun a mile\nRun amok\nRun of the mill\nRun out of steam\nRun rings around\nRun the gauntlet\nSacred cow\nSafe as houses - As\nSafe pair of hands - A \nSafe sex\nSalad days\nSalt of the earth - The \nSan fairy Ann\nSandwich short of a picnic\nSave face\nSave one's bacon \nSaved by the bell\nSavoir faire\nSay cheese\nSay goodnight Gracie\nScapegoat\nScarper\nScot-free\nScott (Sir Walter - phrases coined by) \nScrew your courage to the sticking place\n'Scuse me while I kiss this guy\nSea change\nSealed with a loving kiss\nSeason of mists and mellow fruitfulness\nSecond-guess\nSecurity blanket\nSee a pin and pick it up, all the day you'll have good luck; see a pin and let it lie, bad luck you'll have all day\nSee red\nSeek and you shall find\nSeen better days\nSend packing\nSenior citizen\nSent to Coventry\nSeparate the sheep from the goats\nSet one's cap at\nSet your teeth on edge\nSex and shopping\nSeven-year itch\nSexton Blake\nShebang - The whole \nShaggy dog story\nShake a leg\nShakers and movers\nShakespeare (phrases and sayings of) \nShall I compare thee to a summer's day?\nShambles\nShanks' mare/shanks' pony\nShare and share alike\nShilly-shally\nShip shape and Bristol fashion\n Shit end of the stick - The \nShit for brains\nShiver my timbers\nShoddy\nShort end of the stick - The \nShot across the bows\nShot heard 'round the world - The \nShot in the arm\nShot in the dark\nShoot through\nShort shrift\nShow a leg - see shake a leg\nShow your mettle\nShrinking violet\nShuffle off this mortal coil\nShut your cake-hole\nSiamese twins\nSick puppy (A) \nSight for sore eyes (A) \nSilly Billy\nSilly season\nSilver lining - every cloud has a \nSir Walter Scott (phrases coined by) \nSilence is golden\nSilver bullet\nSimiles\nSitting pretty\nSixes and sevens - At \nSkeleton in the closet\nSkid row\nSkin and blister\n(By the) skin of your teeth\n(The) sky's the limit\nSledgehammer to crack a nut - A \nSleep like a top\nSleep on a clothesline\nSleep tight\nSleeveless errand\nSloane Ranger\nSlush fund\nSmallest room in the house - The\nSmart casual\nSmoke and mirrors\nSnug as a bug in a rug\nSo sue me\nSoap-dodger\nSod's Law\nSold down the river\nSome are born great, some achieve greatness, and some have greatness thrust upon 'em\nSome men are born mediocre, some men achieve mediocrity, and some men, have mediocrity thrust upon them\nSomeone is walking over my grave\nSomething for the weekend sir?\nSomething nasty in the woodshed\nSomething old, something new, something borrowed, something blue\nSon of a bitch\nSon of a gun\nSorry sight\nSound bite\nSound out\nSour grapes\nSpace, the final frontier\nSpare the rod and spoil the child\nSpeak of the Devil\nSpeak softly and carry a big stick\nSpecial relationship\nSpelling-bee\nSpend a penny\nSpick and span\nSpill the beans\nSpin doctor\n\n\n\nSpitting feathers\nSpitting image\nSpoonerisms\nSpring forward, fall back\nSpruce-up\nSquare meal\nSqueaky bum time\nStand and deliver\nStand up guy\nStanding on the shoulders of giants\nStar-crossed lovers\nStark, raving mad\nStars and garters - My \nStart from scratch\nSteal a march\nSteal my thunder\nStep up to the plate\nStick in the mud\nSticks and stones may break my bones\nSticky wicket\nStiff upper lip\nStiffen the sinews\nStinking rich\nStitch in time saves nine - A \nStone the crows\nStone's throw\nStony-hearted\nStool pigeon\nStorm in a teacup\nStraight as a die\nStraight from the horse's mouth\nStrain at the leash\nStrait-laced\nStrait and narrow\nStranger danger\nStranger than fiction - Truth is \nStrike while the iron is hot\nStuff and nonsense\nStump up\nSuch is life\nSurf and turf\n Surfing the Net/surfing the Internet/surfing the Web \nSurvival of the fittest\nSuspension of disbelief\nSwan song\nSweet Fanny Adams\nSwing for you\nSwing the lead\nTail wagging the dog - The \nTake a back seat\nTake care of the pence and the pounds will take care of themselves\nTake down a peg or two\nTake potluck \nTake the bit between your teeth\nTake the cake\nTake the gilt off the gingerbread\nTake the Mickey\nTake the upper hand\nTake umbrage \nTake with a grain of salt\nTaken aback\nTaken for a ride\nTalk of the Devil\nTalk the talk\nTalk through one's hat\nTalk to the hand\nTall story\nTanstaafl - (there's no such thing as a free lunch)\nTattoo phrases and sayings\nTawdry\nTea leaf\nTechnicolor yawn\nTell it to the marines\nTell me about it \nTempest in a teapot\nTest your mettle - see show your mettle\nThat's all folks!\nThat's all she wrote\nThat's one small step for a man, a giant leap for mankind\nThe ants are my friends, they're blowing in the wind\nThe apple never falls far from the tree\nThe apple of my eye\nThe back of beyond\nThe balance of power\nThe balance of trade\nThe bane of my life\nThe bee's knees\nThe belle of the ball\nThe best  defense is a good offence\nThe best laid schemes of mice and men\nThe Big Apple\nThe Big Easy\nThe birds and the bees\nThe bitter end\nThe blind leading the blind\nThe bread of life\nThe buck stops here\nThe call of the wild\nThe camera cannot lie\nThe chickens come home to roost\nThe child is father to the man The collywobbles\nThe course of true love never did run smooth\nThe crack of doom\nThe Crapper\nThe customer is always right\nThe cut of your jib\nThe dark side\nThe darkest hour is just before the dawn\nThe Devil has all the best tunes\nThe Devil Incarnate\nThe Devil is in the details\nThe Devil makes work for idle hands to do\nThe Devil take the hindmost\nThe Devil to pay\nThe die has been cast\nThe early bird catches the worm\nThe elephant in the room\nThe emperor's new clothes\nThe ends of the earth \nThe exception which proves the rule\nThe face that launched a thousand ships\nThe fat of the land\nThe female of the species is more deadly then the male\nThe fifth estate\nThe floozie in the jacuzzi\nThe fly in the ointment\nThe full monty\nThe game is afoot\nThe game is up\nThe great unwashed\nThe hair of the dog that bit you\nThe hairy eyeball\nThe heebie-jeebies\nThe jury is still out\nThe land of nod\nThe last straw\n\n\n\nThe law is an ass\nThe life of Riley\nThe living daylights\nThe love that dare not speak its name\nThe monstrous regiment of women\nThe more the merrier\nThe moving finger writes\nThe mutt's nuts\nThe nth degree \nThe opera ain't over till the fat lady sings\nThe pen is mightier than the sword \nThe pip - Get/got/have \nThe pot calling the kettle black\nThe powers that be\nThe proof of the pudding is in the eating \nThe quick and the dead\nThe real McCoy\nThe road less travelled\nThe road to hell is paved with good intentions\nThe salt of the earth \nThe seven-year itch\nThe shoemaker always wears the worst shoes\nThe short end of the stick\nThe shot heard 'round the world\nThe sky's the limit\nThe smallest room in the house\nThe straw that broke the camel's back\nThe tail wagging the dog\nThe toast of the town\nThe third degree\nThe triumph of hope over experience\nThe upper hand\nThe usual suspects\nThe whole kit and caboodle\nThe whole nine yards\nThe whole shebang\nThe writing is on the wall\nThe wrong side of the blanket\nThe year dot\nThe Yellow Peril\nThere is more than one way to kill a cat\nThere are three kinds of lies... \nThere but for the grace of God, go I\nThere is no alternative\nThere's an R in the month\nThere's method in my madness\nThere's no fool like an old fool\nThere's no place like home\nThere's no such thing as a free lunch (Tanstaafl)\nThere's no such thing as bad publicity\nThere's one (a sucker) born every minute\nThere's one law for the rich and another law for the poor\nThey couldn't hit an elephant at this distance\nThick and fast \nThick and thin \n(As) thick as thieves\n(As) thick as two short planks\nThin air - Vanish into \nThing of beauty is a joy forever - A \nThings that go bump in the night\nThink outside the box\nThinking cap\nThird degree - The \nThird time lucky\nThomas Paine - The writings of\nThorn in the flesh\nThou shalt not kill\nThough this be madness, yet there is method in it\nThree score and ten\nThree sheets to the wind\nThree strikes and you are out\nThrough thick and thin \nThrow in the towel\nThrow good money after bad\nThrow your hat into the ring\nThumbs up\nThus far into the bowels of the land\nTicked off\nTickle the ivories\nTickled pink\nTide over\nTie the knot\nTill the cows come home\nTime and tide wait for no man\nTinker's damn\nTilting at windmills\nTissue of lies\nTitfer\nTit for tat \nTits up\nTo a T\nTo all intents and purposes\nTo be or not to be, that is the question\nTo beggar belief\nTo boldly go where no man has gone before\nTo boot\nTo cast the first stone\nTo err is human; to forgive divine\nTo gild refined gold, to paint the lily\nTo sleep: perchance to dream: ay, there's the rub\nTo the manner born\nTo the nth degree \nTo travel hopefully is a better thing than to arrive\nToast of the town\nToe the line\nToe-curling\nToffee-nosed\nTommy Atkins\nTomorrow is another day\nTongue in cheek\nToo big for your breeches\nToo much of a good thing\nToodle-oo\nTooth and nail\nTop dog\nTop drawer\nTop notch\nTopsy-turvy\nTotal shambles\nTouch and go\nTouch with a barge-pole - Wouldn't \nTouch wood \nTouchy-feely\nTout de suite\nTower of strength\n Train surfing\nTrick or treat\nTrip the light fantastic\nTrouble and strife\nTrue blue\nTruth is stranger than fiction\nTruth will out\nTuckered out\nTurkeys voting for Christmas\nTurn a blind eye\nTurn of phrase\nTurn the tables\nTurn up for the books\nTurn up trumps\nTwelve good men and true\nTwenty three skidoo\nTwenty four seven\nTwo cents worth\nTwo heads are better than one\nTwo peas in a pod \nUnder the thumb\n\n\n\nUnder your hat - Keep it \nUnder the auspices of\nGet - underway\nUnder wraps\nUneasy lies the head that wears a crown\nUnion Jack\nThe great - unwashed\nThe - unkindest cut of all\nUp a blind alley\nUp a gum tree\n Up in arms\nUp the creek without a paddle\nUp the apples and pears\nUp the duff\nUp the pole\nUp the wooden hill to Bedfordshire\nUp to snuff\nUpper crust\nUpper hand\nUp in arms\nUps-a-daisy\nUpset the apple-cart\nUp the ante\nUpside down\nUrban myth\nUse your loaf\nUsual suspects - The \nUsing a sledgehammer to crack a nut\nValentine's Day Poems and Sayings\nVan surfing\nVanish into thin air\nVeg out\nVerbosity leads to unclear, inarticulate things\nVice versa\nVicious circle\nVis-a-vis\nVisit the ladies' room\nVorsprung Durch Technik\nWalk free\nWalk the walk\nWalk the plank\nWalter Scott (phrases coined by) \nWarts and all\nWatch the birdie\n(A) watched pot never boils \nWatching brief\nWave a red rag to a bull\nWax lyrical\nWax poetic\nWe are a grandmother\nWe are not amused\nWe few, we happy few, we band of brothers\nWe have seen better days\nWe know where you live\nWeakest link - A chain is only as strong as its \nWear the trousers\nWear your heart on your sleeve\nWeasel words\nWee-wee\nWell heeled\nWell read\nWet behind the ears\nWet blanket\nWhat a piece of work is man\nWhat are you like?\nWhat football is all about\nWhat God has joined together let no man put asunder\nWhat part of no don't you understand?\nWhat you see is what you get - wysiwyg\nWhat's in a name? That which we call a rose by any other name would smell as sweet\nWhat's not to like?\nWhat's up Doc?\nWhen in Rome, do as the Romans do\nWhen it comes to the crunch\nWhen pigs fly\nWhen the going gets tough, the tough get going\nWhen the shit hits the fan\nWhere there's muck there's brass\nWhet your appetite\nWhich  is which?\nWhich  witch is which?\nWhile you live, tell truth and shame the Devil!\nWhip round\nWhipper snapper\nWhipping boy\nWhistle and flute\nWhistle blower\nWhistle down the wind\nWhite as snow\nWhite bread\nWhite elephant\nWhole kit and caboodle - The \nWhole-hearted\nWhole nine yards - The\nWhole shebang - The \nWhoops-a-daisy\nWhy does bread always fall butter side down?\nWhy should the Devil have all the best tunes?\nWick - you get on my \nWide berth - Keep a \nWild and woolly\nWild goose chase\nWilly nilly\nWin hands down\nWin one for the Gipper\n(On a) wing and a prayer\nWing it\nWinter drawers on\nWish you were here\nWith bells on\nWithout a shadow of a doubt\nWithout let or hindrance \nWithout so much as a by your leave\nWoe betide you\nWoe is me\nWolf in sheep's clothing\nWoman needs a man like a fish needs a bicycle - A \nWoman's place is in the home - A \nWomen and children first\nWooden hill to Bedfordshire\nWord association football\nWord for word\nWord in edgeways - A \nWord in your shell-like - A \nWords ending in gry\nWorse for wear\nWorth one's salt\nWotcher\nWouldn't touch with a barge-pole\nWreak havoc \nWriting is on the wall - The \n Wrong end of the stick - The\nWrong side of the blanket - The\nYada yada\nYear dot - The\nYellow-belly\nYellow Peril\nYou are what you eat\nYou can catch more flies with honey than with vinegar\nYou can lead a horse to water but you can't make it drink\nYou can lead a whore to culture but you can't make her think\nYou can't get blood out of a stone\nYou can't have your cake and eat it too \nYou can't make a silk purse out of a sow's ear\nYou can't teach an old dog new tricks\nYou get on my wick\nYou look as if you've been dragged through a hedge backwards\nYou'll wonder where the yellow went when you brush your teeth with Pepsodent\nYoung turk\nYour days are numbered\nYour money or your life\nYour name is mud\nYou've never had it so good\nZero tolerance\nZig-zag",
        explanation: 'Care and compassion for others.',
        origin: 'English',
    },
    {
        '': 1339,
        text: 'Minced oaths',
        explanation:
            'The English, being a restrained lot, have a long list of euphemistic phrases, many of which became\n part of the language before it spread to other parts of the world. The root cause of these is a\n wish to communicate without being explicit. This is something the English are particularly fond of,\n hence their long tradition of double-entendre comedy.',
        origin: 'English',
    },
    {
        '': 1340,
        text: 'Minced words',
        explanation:
            "To mince words is to moderate one's language, to keep within the bounds of  what is prudent or polite. Minced words are usually referred to in the negative 'do not mince your words'.",
        origin: 'English',
    },
    {
        '': 1341,
        text: 'Mind your Ps and Qs',
        explanation: 'Be on your best behaviour; be careful of your language.',
        origin: 'English',
    },
    {
        '': 1342,
        text: "Mind's ear",
        explanation: "One's aural memory or imagination.",
        origin: 'English',
    },
    {
        '': 1343,
        text: "Mind's eye",
        explanation: "One's visual memory or imagination.",
        origin: 'English',
    },
    {
        '': 1344,
        text: 'Ministering angel shall my sister be - A',
        explanation:
            'To minister is to serve, or act as a subordinate agent. So a ministering angel is a kind-hearted person, providing help and comfort.',
        origin: 'English',
    },
    {
        '': 1345,
        text: 'Mint condition',
        explanation:
            'A condition of perfection or newness suggestive of that of a freshly minted coin.',
        origin: 'English',
    },
    {
        '': 1346,
        text: 'Misery acquaints a man with strange bedfellows',
        explanation: "From Shakespeare's The Tempest, 1610:",
        origin: 'English',
    },
    {
        '': 1347,
        text: 'Misquotes',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 1348,
        text: 'Miss is as good as a mile',
        explanation:
            'A narrow miss is as bad as a wide miss - they are both misses.',
        origin: 'English',
    },
    {
        '': 1349,
        text: 'Moaning Minnie',
        explanation: 'A\nhabitual grumbler.',
        origin: 'English',
    },
    {
        '': 1350,
        text: 'Mondegreens',
        explanation:
            'Mondegreens are misheard song lyrics. A fuller explanation of the meaning of the word mondegreen is best shown by retelling how it originated...',
        origin: 'English',
    },
    {
        '': 1351,
        text: "Montezuma's Revenge",
        explanation:
            'The diarrhoea (spelled in America as diarrhea)  that is often suffered by tourists when travelling to foreign parts.',
        origin: 'English',
    },
    {
        '': 1352,
        text: "'Money' phrases",
        explanation:
            "Money: after sex and the weather, this must be our favourite topic of conversation. Here's the phrases and sayings that we use to talk about it:",
        origin: 'English',
    },
    {
        '': 1353,
        text: 'Money for old rope',
        explanation: 'A profitable return for little effort.',
        origin: 'English',
    },
    {
        '': 1354,
        text: 'Monstrous regiment of women',
        explanation:
            'A disparaging description, often used to describe feminist or rowdy women by their detractors.',
        origin: 'English',
    },
    {
        '': 1355,
        text: 'Monty - The full',
        explanation: 'Complete, the whole thing.',
        origin: 'English',
    },
    {
        '': 1356,
        text: 'Moot point',
        explanation: 'An irrelevant argument.',
        origin: 'English',
    },
    {
        '': 1357,
        text: 'Morbid obesity',
        explanation:
            "The condition of having a body weight high enough to pose a severe risk to health. This is informally measured as having a body weight which is more than twice the optimum. It is indicated more precisely by a 'body mass index' of 40 or over (BMI = the weight in kilograms divided by the square of height in metres).",
        origin: 'English',
    },
    {
        '': 1358,
        text: 'More bang for your buck',
        explanation: 'More for your money.',
        origin: 'English',
    },
    {
        '': 1359,
        text: 'More fool you',
        explanation:
            'Said in reply to someone who has reported doing something that is considered to be obviously foolish.',
        origin: 'English',
    },
    {
        '': 1360,
        text: 'More haste, less speed',
        explanation:
            "Something, even if it isn't what you ideally would prefer, is better than nothing.",
        origin: 'English',
    },
    {
        '': 1361,
        text: 'More honoured in the breach than in the observance',
        explanation:
            "This is usually thought to mean a rule which is more often broken than observed. The context of the play shows the real meaning as 'it is more honourable to breach than to observe'.",
        origin: 'English',
    },
    {
        '': 1362,
        text: 'More light!',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 1363,
        text: 'Morning person',
        explanation:
            'Someone who functions better in the morning, as compared to later in the day.',
        origin: 'English',
    },
    {
        '': 1364,
        text: 'Mother country',
        explanation:
            "One's native land, or the native land of one's ancestors.",
        origin: 'English',
    },
    {
        '': 1365,
        text: 'Motley crew',
        explanation: "An assorted and ill-disciplined group of ne'er do wells.",
        origin: 'English',
    },
    {
        '': 1366,
        text: 'Mouth-watering',
        explanation: 'Delicious; tasty enough to make you salivate.',
        origin: 'English',
    },
    {
        '': 1367,
        text: 'Movable feast',
        explanation:
            'A feast day that falls on the same day of the week each year but which has a date which varies.',
        origin: 'English',
    },
    {
        '': 1368,
        text: 'Movers and shakers',
        explanation:
            'People of energetic demeanour, who initiate change and influence events.',
        origin: 'English',
    },
    {
        '': 1369,
        text: 'Moving finger writes - The',
        explanation:
            "The phrase 'The moving finger writes...' expresses the notion that whatever one does in one's life is one's own responsibility and cannot be changed.",
        origin: 'English',
    },
    {
        '': 1370,
        text: 'Moving the goalposts',
        explanation:
            'Changing the target of a process or competition to by one side in order to gain advantage.',
        origin: 'English',
    },
    {
        '': 1371,
        text: 'Much Ado about Nothing',
        explanation:
            "'Much ado about nothing' means 'a great deal of fuss over a thing of little importance'.",
        origin: 'English',
    },
    {
        '': 1372,
        text: 'Much of a muchness',
        explanation: 'Similar - difficult to distinguish.',
        origin: 'English',
    },
    {
        '': 1373,
        text: 'Mud - your name is',
        explanation: 'You are unpopular.',
        origin: 'English',
    },
    {
        '': 1374,
        text: 'Mull (something) over',
        explanation:
            "To 'mull something over' is to turn it over in one's mind, in a reflective way.",
        origin: 'English',
    },
    {
        '': 1375,
        text: 'Multitude of sins',
        explanation: 'A number of undesirable qualities.',
        origin: 'English',
    },
    {
        '': 1376,
        text: 'Mumbo jumbo',
        explanation:
            'Nonsense, especially meaningless speech and often associated with spurious religious ritual.',
        origin: 'English',
    },
    {
        '': 1377,
        text: "Mum's the word",
        explanation: "'Mum's the word' means 'keep quiet - say nothing'.",
        origin: 'English',
    },
    {
        '': 1378,
        text: "Murphy's Law",
        explanation:
            "The so-called law is usually expressed as 'If anything can go wrong, it will'.",
        origin: 'English',
    },
    {
        '': 1379,
        text: 'Music has charms to soothe the savage breast',
        explanation:
            "Literal meaning. That literal meaning is open to misinterpretation as this phrase is frequently written as 'music has charms to soothe the savage beast'.",
        origin: 'English',
    },
    {
        '': 1380,
        text: "Mutt's nuts - The",
        explanation: 'Excellent\n- the highest quality.',
        origin: 'English',
    },
    {
        '': 1381,
        text: 'Mutt and Jeff',
        explanation:
            "When written and pronounced as Mutt 'n' Jeff this has the meaning deaf. It is also a slang term for the 'good cop/bad cop' method of police interrogation or any other pair of people or items which are contrasting in size or nature.",
        origin: 'English',
    },
    {
        '': 1382,
        text: 'Mutton dressed as lamb',
        explanation:
            "'Mutton dressed as lamb' is a put-down aimed at an ageing woman who is dressed or made up of someone much younger.",
        origin: 'English',
    },
    {
        '': 1383,
        text: 'My bad',
        explanation: "My mistake - I'm to blame.",
        origin: 'English',
    },
    {
        '': 1384,
        text: 'My better half',
        explanation: 'My husband or my wife.',
        origin: 'English',
    },
    {
        '': 1385,
        text: 'My cup of tea',
        explanation: 'Something or someone that one finds pleasing.',
        origin: 'English',
    },
    {
        '': 1386,
        text: 'My cup runneth over',
        explanation:
            "'My cup runneth over' means 'I have more than enough for my needs'.",
        origin: 'English',
    },
    {
        '': 1387,
        text: 'My giddy aunt',
        explanation: 'An exclamation of surprise.',
        origin: 'English',
    },
    {
        '': 1388,
        text: 'My husband and I',
        explanation:
            'This turn of phrase has often been used by Queen Elizabeth II in public speeches. The Queen married the Duke of Edinburgh (formerly Prince Philip of Greece and Denmark) on 20 November 1947. Since that day he has been resigned to walking a few paces behind her in public.',
        origin: 'English',
    },
    {
        '': 1389,
        text: "My mind's eye",
        explanation: "One's visual memory or imagination.",
        origin: 'English',
    },
    {
        '': 1390,
        text: 'My old china',
        explanation: 'Affectionate term for a friend.',
        origin: 'English',
    },
    {
        '': 1391,
        text: 'My old Dutch',
        explanation: 'An affectionate term for wife.',
        origin: 'English',
    },
    {
        '': 1392,
        text: 'My salad days',
        explanation: "The\n days of one's youthful inexperience.",
        origin: 'English',
    },
    {
        '': 1393,
        text: 'My stars and garters',
        explanation: 'A jocular exclamation or expression of astonishment.',
        origin: 'English',
    },
    {
        '': 1394,
        text: 'My way or the highway',
        explanation:
            "The idiom 'my way or the highway' forcefully expresses the view that 'you can take it or leave it'. In fact, it really means 'take it or leave', as the highway refers to the road the listener should go down if they don't agree with the speaker.",
        origin: 'English',
    },
    {
        '': 1395,
        text: 'Nail your colours to the mast',
        explanation:
            "To defiantly display one's opinions and beliefs. Also, to show one's intention to hold on to those beliefs until the end.",
        origin: 'English',
    },
    {
        '': 1396,
        text: 'Namby-pamby',
        explanation: 'Childish and weakly sentimental.',
        origin: 'English',
    },
    {
        '': 1397,
        text: 'Name and shame',
        explanation:
            'The publication of the identity of a person or group that is culpable in some anti-social act in order to shame them into remorse.',
        origin: 'English',
    },
    {
        '': 1398,
        text: 'Name is mud',
        explanation: 'You are unpopular.',
        origin: 'English',
    },
    {
        '': 1399,
        text: 'Nasty, brutish and short',
        explanation:
            "'Nasty, brutish and short' is a 17th century phrase describing the life of mankind when in a state of war.",
        origin: 'English',
    },
    {
        '': 1400,
        text: 'Nation of shopkeepers - A',
        explanation:
            'This proverbial saying has a straightforward literal meaning, although it is intended to imply criticism of the English as a nation with little ambition.',
        origin: 'English',
    },
    {
        '': 1401,
        text: 'Nautical phrases',
        explanation:
            'Many phrases that have been adopted into everyday use originate from seafaring - in particular from the days of sail. Virtually all of these are metaphorical and the original nautical meanings are now forgotten.',
        origin: 'English',
    },
    {
        '': 1402,
        text: 'Near the knuckle',
        explanation:
            'Just at the limit of acceptability, especially regarding sexual morals',
        origin: 'English',
    },
    {
        '': 1403,
        text: 'Necessity is the mother of invention',
        explanation: 'Difficult situations inspire ingenious solutions.',
        origin: 'English',
    },
    {
        '': 1404,
        text: "Ne'er cast a clout till May be out",
        explanation:
            "With most phrases and sayings the meaning is well understood but the origin is uncertain. With this one the main interest is the doubt about the meaning. So, this time, we'll have the origin first.",
        origin: 'English',
    },
    {
        '': 1405,
        text: "Ne'er do well",
        explanation: 'A worthless, good for nothing person.',
        origin: 'English',
    },
    {
        '': 1406,
        text: 'Needs must',
        explanation:
            "Necessity compels. In current usage this phrase is usually used to express something that is done unwillingly but with an acceptance that it can't be avoided; for example, I really don't want to cook tonight, but needs must, I suppose.",
        origin: 'English',
    },
    {
        '': 1407,
        text: 'Neither a borrower nor a lender be',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1408,
        text: 'Neither fish nor flesh, nor good red herring',
        explanation:
            'A deliberate misleading and diverting of attention from the real issue.',
        origin: 'English',
    },
    {
        '': 1409,
        text: 'Neither here nor there',
        explanation: 'Of no consequence either one way or the other.',
        origin: 'English',
    },
    {
        '': 1410,
        text: 'Nest-egg',
        explanation: 'Savings, set aside for later use.',
        origin: 'English',
    },
    {
        '': 1411,
        text: 'Nest of vipers - A',
        explanation: 'A group of iniquitous people, congregating together.',
        origin: 'English',
    },
    {
        '': 1412,
        text: 'Never give a sucker an even break',
        explanation: 'Literal meaning, but usually used for comic effect.',
        origin: 'English',
    },
    {
        '': 1413,
        text: 'Never knowingly undersold',
        explanation:
            'The slogan\nof the John Lewis Partnership from the 1920s.',
        origin: 'English',
    },
    {
        '': 1414,
        text: 'Never look a gift horse in the mouth',
        explanation:
            "The proverbial saying 'don't look a gift horse in the mouth' means don't be ungrateful when you receive a gift.",
        origin: 'English',
    },
    {
        '': 1415,
        text: 'Never-never land',
        explanation: 'A utopian dreamland.',
        origin: 'English',
    },
    {
        '': 1416,
        text: 'Never the twain shall meet',
        explanation:
            'Two things which are so different as to have no opportunity to unite.',
        origin: 'English',
    },
    {
        '': 1417,
        text: 'New kid on the block',
        explanation: 'A new arrival in an area or in a group of young friends.',
        origin: 'English',
    },
    {
        '': 1418,
        text: 'Nice as ninepence',
        explanation: 'Neat, tidy, well-ordered.',
        origin: 'English',
    },
    {
        '': 1419,
        text: 'Nice kettle of fish',
        explanation:
            "The expression 'a kettle of fish' is usually part of the phrases 'a fine kettle of fish', 'a pretty kettle of fish' etc, which mean 'a muddle or awkward state of affairs'.",
        origin: 'English',
    },
    {
        '': 1420,
        text: '(In the) nick of time',
        explanation: 'Just in time; at the precise moment.',
        origin: 'English',
    },
    {
        '': 1421,
        text: 'Night owl',
        explanation: 'A person who is active late at night.',
        origin: 'English',
    },
    {
        '': 1422,
        text: "Nine days' wonder",
        explanation: 'A novelty that loses its appeal after a few days.',
        origin: 'English',
    },
    {
        '': 1423,
        text: 'Nip and tuck',
        explanation:
            'A close result in a race or contest. More recently, the name of a cosmetic surgery procedure.',
        origin: 'English',
    },
    {
        '': 1424,
        text: 'Nip in the bud',
        explanation:
            'To nip something in the bud is to put a stop to it while it is still in its early development.',
        origin: 'English',
    },
    {
        '': 1425,
        text: 'Nitty-gritty',
        explanation:
            'The heart of the matter; the basic essentials; the harsh realities.',
        origin: 'English',
    },
    {
        '': 1426,
        text: 'No-brainer',
        explanation:
            'Something that requires little mental effort or intelligence to perform or understand. The term is often applied to decisions which are straightorward or sometimes to people who appear to lack intelligence.',
        origin: 'English',
    },
    {
        '': 1427,
        text: 'No dice',
        explanation:
            "The expression 'no dice' is a refusal to accept a proposition - equivalent to 'nothing doing'.",
        origin: 'English',
    },
    {
        '': 1428,
        text: 'No holds barred',
        explanation: 'Without restrictions or rules.',
        origin: 'English',
    },
    {
        '': 1429,
        text: 'No laughing matter',
        explanation: 'Not a subject for levity.',
        origin: 'English',
    },
    {
        '': 1430,
        text: 'No love lost',
        explanation:
            "'There's no love lost between them' is used to describe a relationship between two people who dislike each each.",
        origin: 'English',
    },
    {
        '': 1431,
        text: 'No man is an island',
        explanation:
            "The phrase 'no man is an island' expresses the idea that human beings do badly when isolated from others and need to be part of a community in order to thrive.",
        origin: 'English',
    },
    {
        '': 1432,
        text: 'No more cakes and ale?',
        explanation:
            'Cakes and ale are synonymous with the good life, like beer and skittles.',
        origin: 'English',
    },
    {
        '': 1433,
        text: 'No names: no pack-drill',
        explanation: 'Say nothing and avoid repercussions.',
        origin: 'English',
    },
    {
        '': 1434,
        text: 'No quarter given',
        explanation:
            'Show no mercy or concession; in its original usage, show no mercy for a vanquished opponent.',
        origin: 'English',
    },
    {
        '': 1435,
        text: 'No rest for the wicked',
        explanation:
            "'No rest for the wicked has a literal meaning - that the wicked shall be tormented in Hell.",
        origin: 'English',
    },
    {
        '': 1436,
        text: 'No room to swing a cat',
        explanation: 'An awkwardly small, confined space.',
        origin: 'English',
    },
    {
        '': 1437,
        text: 'No truck with',
        explanation: 'To reject or to have nothing to do with.',
        origin: 'English',
    },
    {
        '': 1438,
        text: 'No way, Jose',
        explanation: 'Absolutely not; never.',
        origin: 'English',
    },
    {
        '': 1439,
        text: 'Nod is as good as a wink - A',
        explanation:
            "'A nod is as good as a wink' expresses the idea that, to a person who is ready to understand or undertake something, any subtle signalling of it is sufficient. The context is usually of some undertaking that is borderline illegal or of sexual innuendo.",
        origin: 'English',
    },
    {
        '': 1440,
        text: 'Nod - The land of',
        explanation:
            'The Land of Nod is a mythical  land where we travel to to sleep.',
        origin: 'English',
    },
    {
        '': 1441,
        text: 'Norange - A',
        explanation:
            "In 1914 the Danish grammarian Otto Jespersen coined the term 'metanalysis'. That's rather a dry start to a piece on what is a lively and intriguing facet of the English language. To find out what prompted Jespersen to believe that we needed a new word, let's bring in a stage prop - the humble orange.",
        origin: 'English',
    },
    {
        '': 1442,
        text: 'Nosy parker',
        explanation:
            "A 'nosy parker', sometimes spelled 'nosey parker', is a person of an overly inquisitive or prying nature.",
        origin: 'English',
    },
    {
        '': 1443,
        text: 'Not a dicky-bird',
        explanation: 'Not a sound; not an utterance.',
        origin: 'English',
    },
    {
        '': 1444,
        text: 'Not by a long chalk',
        explanation: 'Not by any means; a good distance away from being true.',
        origin: 'English',
    },
    {
        '': 1445,
        text: 'Not my cup of tea',
        explanation: 'Something or someone that one finds pleasing.',
        origin: 'English',
    },
    {
        '': 1446,
        text: 'Not for all the tea in China',
        explanation: 'Not at any price.',
        origin: 'English',
    },
    {
        '': 1447,
        text: 'Not playing with a full deck',
        explanation:
            "'Not playing with a full deck' might be said about someone who was considered stupid.",
        origin: 'English',
    },
    {
        '': 1448,
        text: 'Not rocket science',
        explanation:
            "It (the subject under discussion) isn't difficult to understand.",
        origin: 'English',
    },
    {
        '': 1449,
        text: 'Not tonight Josephine',
        explanation:
            'This is the supposed response by Napoleon Bonaparte when declining sex with Empress JosÃ©phine.',
        origin: 'English',
    },
    {
        '': 1450,
        text: 'Not worth a plugged nickel',
        explanation: 'Worthless.',
        origin: 'English',
    },
    {
        '': 1451,
        text: 'Not worth the candle',
        explanation:
            "Something might be considered to be 'not worth the candle' if is too insignificant or worthless to be worth bothering with.",
        origin: 'English',
    },
    {
        '': 1452,
        text: 'Nothing is certain but death and taxes',
        explanation:
            'A rather fatalistic and sardonic proverb. It draws on the actual inevitability of death to highlight the difficulty in avoiding the burden of taxes.',
        origin: 'English',
    },
    {
        '': 1453,
        text: 'Nothing succeeds like success',
        explanation:
            'A proverb, expressing the idea that success breeds further success.',
        origin: 'English',
    },
    {
        '': 1454,
        text: 'Nothing ventured, nothing gained',
        explanation: 'In order to achieve, you need to act and take risks.',
        origin: 'English',
    },
    {
        '': 1455,
        text: 'Now is the winter of our discontent',
        explanation:
            "'Now is the winter of our discontent' express the idea that we have reached the depth of our unhappiness and that better times are ahead.",
        origin: 'English',
    },
    {
        '': 1456,
        text: 'Nth degree',
        explanation: 'To the utmost degree; without limit.',
        origin: 'English',
    },
    {
        '': 1457,
        text: 'Nul points',
        explanation:
            "'No points' - the lowest possible score awarded to performers in the Eurovision Song Contest. The term is also sometimes used as a jokey judgement on any hopelessly inept performance. This is sometimes accompanied by the raising of imaginary cards showing zero, in a mock simulation of the scoring in ice-skating competitions.",
        origin: 'English',
    },
    {
        '': 1458,
        text: 'Nutshell - In a',
        explanation: 'In a few words; concisely stated.',
        origin: 'English',
    },
    {
        '': 1459,
        text: 'O Romeo, Romeo! wherefore art thou Romeo?',
        explanation:
            "The literal meaning of 'O Romeo, Romeo! wherefore art thou Romeo?' would appear to be 'Where are you Romeo?'. In fact, using the meaning of wherefore that would have been commonplace in Shakespeare's day, the playright suggested the meaning of 'For what reason are you Romeo?'.",
        origin: 'English',
    },
    {
        '': 1460,
        text: 'O ye, of little faith',
        explanation:
            "This is the rebuke levelled at the disciples of Christ, when seeming to doubt his divinity. The phrase is also more widely used to describe any Christian doubter. In a secular setting it may be intended as a humorous jibe when doubting someone's abilities.",
        origin: 'English',
    },
    {
        '': 1461,
        text: 'Odds bodkins',
        explanation: "God's body.",
        origin: 'English',
    },
    {
        '': 1462,
        text: 'Off his own bat',
        explanation: "By an individual's own efforts.",
        origin: 'English',
    },
    {
        '': 1463,
        text: 'Off the record',
        explanation:
            "Something said in confidence that the speaker doesn't want attributed to them.",
        origin: 'English',
    },
    {
        '': 1464,
        text: 'Off with his head',
        explanation:
            "Literal meaning. That is, 'chop off his head'. It is now usually used humorously as a means of mildly reproaching someone.",
        origin: 'English',
    },
    {
        '': 1465,
        text: 'Offing - In the',
        explanation: 'Imminent; likely to happen soon.',
        origin: 'English',
    },
    {
        '': 1466,
        text: 'Oh, my stars and garters',
        explanation: 'A jocular exclamation or expression of astonishment.',
        origin: 'English',
    },
    {
        '': 1467,
        text: 'Oh, they have slain the Earl of Moray and Lady Mondegreen',
        explanation:
            'The misheard lyric that was the source of the generic term for misheard lyrics - mondegreens.',
        origin: 'English',
    },
    {
        '': 1468,
        text: 'Okay',
        explanation: 'Satisfactory - all correct.',
        origin: 'English',
    },
    {
        '': 1469,
        text: 'Okey-dokey',
        explanation: "'Okey-dokey' is just an extended form of 'okay'.",
        origin: 'English',
    },
    {
        '': 1470,
        text: 'Old as Methuselah',
        explanation: 'Very\nold.',
        origin: 'English',
    },
    {
        '': 1471,
        text: 'Old as the hills',
        explanation: 'Exceedingly old.',
        origin: 'English',
    },
    {
        '': 1472,
        text: 'Old chestnut',
        explanation:
            "A story that has been told repeatedly before, a 'venerable' joke. Hence, in extended use, anything trite, stale, or too often repeated.",
        origin: 'English',
    },
    {
        '': 1473,
        text: 'Old codger',
        explanation:
            'An old man, especially one who is eccentric, curmudgeonly or grotesque.',
        origin: 'English',
    },
    {
        '': 1474,
        text: 'Old hat',
        explanation: 'Old-fashioned; hackneyed.',
        origin: 'English',
    },
    {
        '': 1475,
        text: 'Old lang syne - see auld lang syne',
        explanation:
            "The Anglicized version of 'auld lang syne', which means old long-since or old long-ago.",
        origin: 'English',
    },
    {
        '': 1476,
        text: 'On a hiding to nothing',
        explanation:
            "To be faced with a situation which is pointless, as a successful outcome is impossible. This is usually expressed in terms of a sporting contest in which one of two outcomes is foreseen, either a hiding or nothing. The 'to' in the phrase indicates alternative outcomes, as in terms like '6 to 1' or 'dollars to doughnuts'.",
        origin: 'English',
    },
    {
        '': 1477,
        text: 'On a wing and a prayer',
        explanation:
            'In a difficult situation, relying on meagre resources and luck to get out of it.',
        origin: 'English',
    },
    {
        '': 1478,
        text: 'On Carey Street',
        explanation: 'Euphemism\nfor being bankrupt or in debt.',
        origin: 'English',
    },
    {
        '': 1479,
        text: 'On cloud nine',
        explanation:
            "To be 'on cloud nine' is to be in a state of blissful happiness.",
        origin: 'English',
    },
    {
        '': 1480,
        text: 'On queer street',
        explanation: 'An imaginary street where people in difficulty live.',
        origin: 'English',
    },
    {
        '': 1481,
        text: 'On tenterhooks',
        explanation:
            "To be 'on tenterhooks' is to be in a state of uncomfortable suspense or impatience.",
        origin: 'English',
    },
    {
        '': 1482,
        text: 'On the ball',
        explanation: "To be alert; in command of one's senses.",
        origin: 'English',
    },
    {
        '': 1483,
        text: 'On the bubble',
        explanation:
            "On the threshold; finely balanced between success and failure; for example, if a qualifying competition for an event allowed the top eight runners to proceed to the next round then those who were close to qualification and could get through by a small increase in performance would be said to be 'on the bubble'.",
        origin: 'English',
    },
    {
        '': 1484,
        text: 'On the button',
        explanation:
            'Just right; exactly on target or at exactly the right time.',
        origin: 'English',
    },
    {
        '': 1485,
        text: 'On the dole',
        explanation: 'Unemployed and in receipt of state benefit.',
        origin: 'English',
    },
    {
        '': 1486,
        text: 'On the fiddle',
        explanation: 'Engaged in a fraud.',
        origin: 'English',
    },
    {
        '': 1487,
        text: "On the pig's back",
        explanation: 'To be in luck; in a prosperous happy state.',
        origin: 'English',
    },
    {
        '': 1488,
        text: 'On the QT',
        explanation: 'On the quiet.',
        origin: 'English',
    },
    {
        '': 1489,
        text: 'On the shoulders of giants',
        explanation:
            'Using the understanding gained by major thinkers who have gone before in order to make intellectual progress.',
        origin: 'English',
    },
    {
        '': 1490,
        text: 'On the side of the angels',
        explanation:
            '(Originally) Supporting the theory of the divine creation.',
        origin: 'English',
    },
    {
        '': 1491,
        text: 'On the wagon',
        explanation:
            "'On the wagon' - abstaining from alcohol. 'Off the wagon' - returned to drinking after an attempt to give it up.",
        origin: 'English',
    },
    {
        '': 1492,
        text: 'On the warpath',
        explanation: 'Intent on a confrontation or fight.',
        origin: 'English',
    },
    {
        '': 1493,
        text: 'On with the motley',
        explanation:
            "Prepare for a stage performance. Latterly also used more widely just to mean let's begin or let's continue.",
        origin: 'English',
    },
    {
        '': 1494,
        text: 'On your beam ends',
        explanation: 'Hard up; in a bad situation.',
        origin: 'English',
    },
    {
        '': 1495,
        text: 'On your tod',
        explanation: 'On your own.',
        origin: 'English',
    },
    {
        '': 1496,
        text: 'Once bitten, twice shy',
        explanation:
            "The proverb 'once bitten, twice shy' suggests that, when someone is hurt doing something, they are wary of doing it again for fear of being hurt a second time.",
        origin: 'English',
    },
    {
        '': 1497,
        text: 'Once in a blue moon',
        explanation: 'Very rarely.',
        origin: 'English',
    },
    {
        '': 1498,
        text: 'Once more unto the breach, dear friends, once more',
        explanation: 'Let us try again one more time.',
        origin: 'English',
    },
    {
        '': 1499,
        text: 'One-hit wonder',
        explanation:
            'A performer or act, usually a singer or band, who has just one popular success.',
        origin: 'English',
    },
    {
        '': 1500,
        text: 'One fell swoop - At',
        explanation:
            "'At one fell swoop' means 'suddenly; in a single action'.",
        origin: 'English',
    },
    {
        '': 1501,
        text: 'One for the road',
        explanation: 'A final drink taken just before leaving on a journey.',
        origin: 'English',
    },
    {
        '': 1502,
        text: 'One foot in the grave',
        explanation: 'To be near to death.',
        origin: 'English',
    },
    {
        '': 1503,
        text: 'One good turn deserves another',
        explanation:
            "'One good turn deserves another' is a proverbial expression that means, when someone does you a good turn, a good turn done in return is appropriate.",
        origin: 'English',
    },
    {
        '': 1504,
        text: 'One hand washes the other',
        explanation:
            "The proverb 'one hand washes the other' expresses the idea that mutual cooperation can help both parties.",
        origin: 'English',
    },
    {
        '': 1505,
        text: 'One over the eight',
        explanation: 'The final drink that renders someone drunk.',
        origin: 'English',
    },
    {
        '': 1506,
        text: 'One sandwich short of a picnic',
        explanation: 'A jokey, colloquial term for stupid.',
        origin: 'English',
    },
    {
        '': 1507,
        text: 'One small step for man',
        explanation:
            "These were Neil\nArmstrong's words on first setting foot on the moon in 1969. The line is a strong contender as the most famous  ever to have been uttered.",
        origin: 'English',
    },
    {
        '': 1508,
        text: 'One stop shop',
        explanation:
            'A location, usually a shop, where various requirements can be met in one place.',
        origin: 'English',
    },
    {
        '': 1509,
        text: "One swallow doesn't make a summer",
        explanation:
            "A single instance of something is just that; it doesn't indicate a trend.",
        origin: 'English',
    },
    {
        '': 1510,
        text: "One's heart's content",
        explanation:
            "To one's (or your) heart's content means to one's complete inner satisfaction - until one's heart is content.",
        origin: 'English',
    },
    {
        '': 1511,
        text: 'Oops-a-daisy',
        explanation:
            'An exclamation made when encouraging a child to get up after a fall or when lifting a child into the air.',
        origin: 'English',
    },
    {
        '': 1512,
        text: 'Open season',
        explanation:
            'A time when criticism or other negative actions may be expected, with no mercy shown.',
        origin: 'English',
    },
    {
        '': 1513,
        text: '(The) order of the boot',
        explanation:
            "Given\nthe sack, that is, asked to leave your job (see 'get the sack').",
        origin: 'English',
    },
    {
        '': 1514,
        text: 'Ough - the many ways to pronounce',
        explanation:
            "English isn't an easy language to learn. One reason for that is the non-standard spelling and pronunciation. There's no better example of that than in the many ways that 'ough' is pronounced.",
        origin: 'English',
    },
    {
        '': 1515,
        text: 'Out of sight',
        explanation: 'Excellent; extraordinary.',
        origin: 'English',
    },
    {
        '': 1516,
        text: 'Out of sight, out of mind',
        explanation:
            'The idea that something is easily forgotten or dismissed as unimportant if it is not in our direct view.',
        origin: 'English',
    },
    {
        '': 1517,
        text: 'Out of sorts',
        explanation:
            "To be 'out of sorts' is to be mildly unwell; not in one's usual health or state of mind.",
        origin: 'English',
    },
    {
        '': 1518,
        text: 'Out of the jaws of death',
        explanation: 'Saved from great danger.',
        origin: 'English',
    },
    {
        '': 1519,
        text: 'Out of the mouths of babes and sucklings',
        explanation: 'From the Bible, King James Version:',
        origin: 'English',
    },
    {
        '': 1520,
        text: 'Out on a limb',
        explanation:
            "Put oneself in an isolated  position in one's support of someone or something.",
        origin: 'English',
    },
    {
        '': 1521,
        text: 'Over a barrel',
        explanation:
            "To be 'over a barrel' is to be left without choice; in someone else's power.",
        origin: 'English',
    },
    {
        '': 1522,
        text: 'Over-egg the pudding',
        explanation:
            "To  'over-egg the pudding' is to go too far in exaggerating or embellishing something - to adorn or supply to excess.",
        origin: 'English',
    },
    {
        '': 1523,
        text: 'Over the moon',
        explanation: 'Very happy or delighted.',
        origin: 'English',
    },
    {
        '': 1524,
        text: 'Over the top',
        explanation:
            'To an excessive degree; beyond reasonable or acceptable limits.',
        origin: 'English',
    },
    {
        '': 1525,
        text: 'Overpaid, oversexed, and over here',
        explanation:
            'Comic line, making fun of the US Army in Europe in WWII. There was a good humoured banter between the GIs that were stationed in Britain prior to and during WWII and the British citizenry. The GIs had a come-back - calling the Brits, "underpaid, undersexed and under Eisenhower".',
        origin: 'English',
    },
    {
        '': 1526,
        text: 'Oxo cube',
        explanation: 'The Tube (London Underground train).',
        origin: 'English',
    },
    {
        '': 1527,
        text: 'Ps and Qs - Mind your',
        explanation: 'Be on your best behaviour; be careful of your language.',
        origin: 'English',
    },
    {
        '': 1528,
        text: 'Packed to the gunwales',
        explanation: 'Full to the brim; packed tight.',
        origin: 'English',
    },
    {
        '': 1529,
        text: 'Paddle your own canoe',
        explanation: 'Act independently and decide your own fate.',
        origin: 'English',
    },
    {
        '': 1530,
        text: 'Paint the town red',
        explanation: "To 'paint the town red' is to engage in a riotous spree.",
        origin: 'English',
    },
    {
        '': 1531,
        text: 'Panic stations',
        explanation:
            'A state of high alert, often a simulated panic for comic effect.',
        origin: 'English',
    },
    {
        '': 1532,
        text: 'Paper tiger',
        explanation:
            'A\nperson who appears to have power but is in reality ineffectual.',
        origin: 'English',
    },
    {
        '': 1533,
        text: 'Parting shot / Parthian shot',
        explanation:
            'A final remark, usually cutting or derogatory, made just before departing.',
        origin: 'English',
    },
    {
        '': 1534,
        text: 'Pass over to the other side',
        explanation:
            "'Passing over to the other side' is a euphemism for dying.",
        origin: 'English',
    },
    {
        '': 1535,
        text: 'Pass the buck',
        explanation:
            "To 'pass the buck' is to evade responsibility by passing it on to someone else.",
        origin: 'English',
    },
    {
        '': 1536,
        text: 'Paying guest - A',
        explanation: 'A lodger.',
        origin: 'English',
    },
    {
        '': 1537,
        text: 'P.D.Q. - pretty damn quick',
        explanation: 'Pretty damn quick.',
        origin: 'English',
    },
    {
        '': 1538,
        text: 'Pearls before swine',
        explanation:
            "Items of quality offered to those who aren't cultured enough to appreciate them.",
        origin: 'English',
    },
    {
        '': 1539,
        text: 'Pears for your heirs',
        explanation:
            'An adage to encourage us to think long-term and look after future generations.',
        origin: 'English',
    },
    {
        '': 1540,
        text: 'Peeping Tom',
        explanation:
            'A voyeur. A man who furtively observes naked or sexually active people for his own gratification.',
        origin: 'English',
    },
    {
        '': 1541,
        text: 'Peg out',
        explanation: 'Die.',
        origin: 'English',
    },
    {
        '': 1542,
        text: 'Pell-mell',
        explanation: 'In disorderly confusion; with reckless haste.',
        origin: 'English',
    },
    {
        '': 1543,
        text: '(The) pen is mightier than the sword',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1544,
        text: 'Pennies from heaven',
        explanation:
            'Money acquired without effort or risk. The phrase is applied to any unexpected benefits, but especially financial ones.',
        origin: 'English',
    },
    {
        '': 1545,
        text: 'Penny dreadful',
        explanation:
            'A cheap publication, comntaining melodramas written in a colourful and down-market style.',
        origin: 'English',
    },
    {
        '': 1546,
        text: '(The) penny drops',
        explanation:
            'A\nbelated realization of something after a period of confusion or ignorance.',
        origin: 'English',
    },
    {
        '': 1547,
        text: 'Penny pinching',
        explanation: 'Parsimonious; mean with money.',
        origin: 'English',
    },
    {
        '': 1548,
        text: 'Penny for your thoughts - A',
        explanation:
            'An invitation to a person lost in thought to share his or her preoccupation.',
        origin: 'English',
    },
    {
        '': 1549,
        text: 'Penny saved is a penny earned - A',
        explanation:
            "The notion expressed in the proverbial saying 'A penny saved is a penny earned' is that it is as useful to save money that you already have as it is to earn more.",
        origin: 'English',
    },
    {
        '': 1550,
        text: 'Penny wise and pound foolish',
        explanation:
            "Careful with one's spending of small sums of money but careless and wasteful with larger amounts.",
        origin: 'English',
    },
    {
        '': 1551,
        text: 'Pester power',
        explanation:
            'The power children have, by repeated nagging, of influencing their parents to buy advertised or fashionable items.',
        origin: 'English',
    },
    {
        '': 1552,
        text: 'Peter out',
        explanation: 'Dwindle away to nothing.',
        origin: 'English',
    },
    {
        '': 1553,
        text: 'Petty cash',
        explanation:
            'An accessible store of money, intended for small purchases.',
        origin: 'English',
    },
    {
        '': 1554,
        text: 'Phrases and sayings quiz',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 1555,
        text: 'Phrases that people get wrong',
        explanation:
            "Anyone learning English has a hard job on their hands. Lots of words don't sound the way you might expect from their spelling and lots of idiomatic phrases don't seem  to make much sense.",
        origin: 'English',
    },
    {
        '': 1556,
        text: 'Physician heal thyself',
        explanation:
            "Attend to one's own faults, in preference to pointing out the faults of others.",
        origin: 'English',
    },
    {
        '': 1557,
        text: "Pick 'n' mix",
        explanation:
            'A range of sweets, chocolates, ice-creams etc., from which a selection can be made.',
        origin: 'English',
    },
    {
        '': 1558,
        text: 'Picture is worth a thousand words - A',
        explanation:
            'A picture tells a story just as well as, if not better than, a lot of written words.',
        origin: 'English',
    },
    {
        '': 1559,
        text: 'Picture-perfect',
        explanation: 'A faultless image.',
        origin: 'English',
    },
    {
        '': 1560,
        text: 'Pie - as easy as',
        explanation: 'Very easy.',
        origin: 'English',
    },
    {
        '': 1561,
        text: 'Pie in the sky',
        explanation:
            'A promise of heaven, while continuing to suffer in this life.',
        origin: 'English',
    },
    {
        '': 1562,
        text: 'Piece of cake - A',
        explanation: 'A straightforward task that can easily be accomplished.',
        origin: 'English',
    },
    {
        '': 1563,
        text: 'Piece of piss',
        explanation: 'A straightforward task that can easily be accomplished.',
        origin: 'English',
    },
    {
        '': 1564,
        text: 'Piece of the action',
        explanation: 'A share in an activity, or in its profits.',
        origin: 'English',
    },
    {
        '': 1565,
        text: 'Pig in a poke',
        explanation:
            'A pig in a poke is an\n              offer or deal that is foolishly accepted without being examined first.',
        origin: 'English',
    },
    {
        '': 1566,
        text: 'Pigeon-chested',
        explanation:
            'Having a narrow chest with a protruding breastbone - alluding to the appearance of pigeons.',
        origin: 'English',
    },
    {
        '': 1567,
        text: "Pig's back - on the",
        explanation: 'To be in luck; in a prosperous happy state.',
        origin: 'English',
    },
    {
        '': 1568,
        text: "Pig's ear",
        explanation:
            "As 'pig's ear' - Cockney rhyming slang for beer. \n  As 'in a pig's ear' - an expression of disbelief.\n    \n    As \n  'make a pig's ear of ' - make a mess or muddle.",
        origin: 'English',
    },
    {
        '': 1569,
        text: "(In a) pig's eye",
        explanation: 'An expression of emphatic disbelief.',
        origin: 'English',
    },
    {
        '': 1570,
        text: 'Pig and whistle',
        explanation: 'A popular name for British pubs.',
        origin: 'English',
    },
    {
        '': 1571,
        text: 'Piggyback',
        explanation:
            'To ride piggyback is to be carried on the back and shoulders of another person. Often, the person being carried is a child, either by an adult or another child. More recently the term has been applied to any person or process that is carried along by another.',
        origin: 'English',
    },
    {
        '': 1572,
        text: 'Pigs might fly',
        explanation:
            'A humorous/sarcastic remark, used to indicate the unlikeliness of some event or to mock the credulity of others; for example, "I might make a start on papering the back bedroom tomorrow". "Yes, and pigs might fly".',
        origin: 'English',
    },
    {
        '': 1573,
        text: 'Pin money',
        explanation:
            'Originally a small allowance given to a woman in order to purchase clothes etc. for herself. More recently it is used to describe any small amount of money which might be earned by children or the low-paid for some service.',
        origin: 'English',
    },
    {
        '': 1574,
        text: '(Take with a) pinch of salt',
        explanation:
            "To take a statement with 'a grain of salt' (or 'a pinch of salt') means to accept it while maintaining a degree of scepticism about its truth.",
        origin: 'English',
    },
    {
        '': 1575,
        text: 'Pip - Get the/got the /have the',
        explanation: 'Become irritated or annoyed.',
        origin: 'English',
    },
    {
        '': 1576,
        text: 'Pipe down',
        explanation: 'A request to be quiet.',
        origin: 'English',
    },
    {
        '': 1577,
        text: 'Pipe dream - A',
        explanation: "A 'pipe dream' is an unrealistic hope or fantasy.",
        origin: 'English',
    },
    {
        '': 1578,
        text: 'Piping hot',
        explanation: 'Very hot, usually referring to food.',
        origin: 'English',
    },
    {
        '': 1579,
        text: 'Piss and vinegar - Full of',
        explanation: 'Rowdy, boisterous, full of youthful energy.',
        origin: 'English',
    },
    {
        '': 1580,
        text: 'Pitch black',
        explanation:
            'Intensely dark, usually in reference to a moonless, starless night.',
        origin: 'English',
    },
    {
        '': 1581,
        text: 'Pitch dark',
        explanation:
            'Intensely dark, usually in reference to a moonless, starless night.',
        origin: 'English',
    },
    {
        '': 1582,
        text: 'Place for everything and everything in its place - A',
        explanation:
            "The proverbial notion that there should be 'a place for everything and everything in its place' is the idea that everything should have somewhere to be stored  and that it should be tidily returned there when not in use.",
        origin: 'English',
    },
    {
        '': 1583,
        text: 'Plague on both your houses - A',
        explanation: 'A frustrated\n curse on both sides of an argument.',
        origin: 'English',
    },
    {
        '': 1584,
        text: 'Plain sailing',
        explanation: 'Smooth and easy progress.',
        origin: 'English',
    },
    {
        '': 1585,
        text: 'Plates of meat',
        explanation: 'Feet.',
        origin: 'English',
    },
    {
        '': 1586,
        text: 'Play by ear',
        explanation:
            "Initially, this referred to the playing of music without reference to printed notation. More recently it is also used figuratively to mean 'handle a situation in an impromptu manner', that is, without reference to pre-determined rules or guidelines.",
        origin: 'English',
    },
    {
        '': 1587,
        text: "Play Devil's advocate",
        explanation:
            'Figuratively, one who takes a contrary position for the sake of testing an argument, or just to be perverse.',
        origin: 'English',
    },
    {
        '': 1588,
        text: 'Play ducks and drakes',
        explanation: "To behave recklessly; to idly squander one's wealth.",
        origin: 'English',
    },
    {
        '': 1589,
        text: 'Play fast and loose',
        explanation: 'Be inconstant and unreliable.',
        origin: 'English',
    },
    {
        '': 1590,
        text: 'Play gooseberry',
        explanation:
            'To play gooseberry is to act as a chaperone to a couple who are romantically inclined.',
        origin: 'English',
    },
    {
        '': 1591,
        text: 'Play it again Sam',
        explanation:
            "Bogart's supposed line from Casablanca. This is well-known as one of the most widely misquoted lines from films. The actual line in the film is 'Play it, Sam'. Something approaching 'Play it again, Sam' is first said in the film by Ilsa Lund (Ingrid Bergman) in an exchange with the piano player 'Sam' (Dooley Wilson):",
        origin: 'English',
    },
    {
        '': 1592,
        text: 'Play second fiddle',
        explanation:
            "To 'play second fiddle' is to take a subordinate position to another person.",
        origin: 'English',
    },
    {
        '': 1593,
        text: 'Play silly buggers',
        explanation:
            "I have been watching the 30th cricket Test series between England and India and  musing about the oddly named field positions 'Silly mid-on', 'Silly point' etc. I've watched enough cricket to know that these are positions close to the batsman, but wondered why they are labelled 'silly' and whether there might be  an archaic 'near to' meaning of the word. As it turns out, there isn't. 'Silly' in this context means what we normally mean by the word, that is, 'foolish or empty-headed'. Anyone who has been hit on the knee (or elsewhere) by a cricket ball will understand that standing about six feet away from the batsman is just plain silly.",
        origin: 'English',
    },
    {
        '': 1594,
        text: 'Play the giddy goat',
        explanation: 'Behave foolishly.',
        origin: 'English',
    },
    {
        '': 1595,
        text: 'Play the race card',
        explanation:
            "To attempt to gain advantage in an election by pandering to the electorate's racism. Also, more recently, to attempt  to gain advantage by drawing attention to one's race.",
        origin: 'English',
    },
    {
        '': 1596,
        text: 'Pleased as Punch',
        explanation: 'Very\npleased.',
        origin: 'English',
    },
    {
        '': 1597,
        text: 'Plug-ugly',
        explanation: 'Extremely ugly, usually of people.',
        origin: 'English',
    },
    {
        '': 1598,
        text: 'Plugged nickel',
        explanation: 'Worthless.',
        origin: 'English',
    },
    {
        '': 1599,
        text: 'Poetic justice',
        explanation:
            'The allocation of an ideal form of justice, where virtue is rewarded and infamy punished, as befitting a work of poetry or drama.',
        origin: 'English',
    },
    {
        '': 1600,
        text: 'Point-and-click',
        explanation:
            'Relating to digital equipment, for example a camera or computer interface, in which action action is performed as the result of a single clicked button press.',
        origin: 'English',
    },
    {
        '': 1601,
        text: 'Point Percy at the porcelain',
        explanation:
            "'Point Percy at the porcelain' is a comic reference to urinating.",
        origin: 'English',
    },
    {
        '': 1602,
        text: 'Politically correct',
        explanation:
            "'Politically correct'  is that which used language that conforms to liberal or radical opinion by avoiding anything which might cause offence to or disadvantage social minorities.",
        origin: 'English',
    },
    {
        '': 1603,
        text: 'Point-blank',
        explanation: 'Close enough to go directly to a target.',
        origin: 'English',
    },
    {
        '': 1604,
        text: 'Point to point',
        explanation:
            "A\nrace, usually a horse-race, in a direct line across countryside. The term has also migrated to other areas which involve transit from one specific point to another; for example, direct air transport from one city to another and the 'P2P [Point to Point] Protocol' used in Internet communications.",
        origin: 'English',
    },
    {
        '': 1605,
        text: 'Pommy bashing',
        explanation: 'Australian slang term for attacks on the English.',
        origin: 'English',
    },
    {
        '': 1606,
        text: 'Pomp and circumstance',
        explanation: 'An ostentatious display of ceremonial grandeur.',
        origin: 'English',
    },
    {
        '': 1607,
        text: 'Pond life',
        explanation: 'A worthless or stupid person or group.',
        origin: 'English',
    },
    {
        '': 1608,
        text: 'Pony and trap',
        explanation:
            "Rubbish; nonsense, or 'of poor quality'. Often shortened just to 'pony'.",
        origin: 'English',
    },
    {
        '': 1609,
        text: 'Pony up',
        explanation: 'Pay  money, especially  a payment that is in arrears.',
        origin: 'English',
    },
    {
        '': 1610,
        text: 'Pop goes the weasel',
        explanation: 'The name of the nursery rhyme and song.',
        origin: 'English',
    },
    {
        '': 1611,
        text: 'Pop your clogs',
        explanation: "To 'pop your clogs' is to die.",
        origin: 'English',
    },
    {
        '': 1612,
        text: 'Popular fallacies - The Nonsense Nine',
        explanation:
            'People like to retell stories about the origin of some phrase or other. I get mail, phone calls, posts on Facebook.',
        origin: 'English',
    },
    {
        '': 1613,
        text: 'Pork pies',
        explanation: "Lies. Often shortened to 'porkies'.",
        origin: 'English',
    },
    {
        '': 1614,
        text: 'POSH - Port out, starboard home',
        explanation: 'Elegant, swanky, rich.',
        origin: 'English',
    },
    {
        '': 1615,
        text: 'Pot calling the kettle black - The',
        explanation:
            "'The pot calling the kettle black' is a response often given when someone  criticises  another for a fault they also  have themselves.",
        origin: 'English',
    },
    {
        '': 1616,
        text: 'Take potluck',
        explanation:
            "Take one's chance as to what meal one is served when accepting another's hospitality. Also, in the USA, potluck is the name of a communal meal, in which participants each bring a dish to be shared.",
        origin: 'English',
    },
    {
        '': 1617,
        text: 'Pound of flesh',
        explanation:
            'Something which is owed that is ruthlessly required to be paid back.',
        origin: 'English',
    },
    {
        '': 1618,
        text: 'Pour oil on troubled waters',
        explanation: 'Attempt to calm a problematic situation.',
        origin: 'English',
    },
    {
        '': 1619,
        text: 'Power corrupts; absolute power corrupts absolutely',
        explanation:
            "The proverbial saying 'power corrupts; absolute power corrupts absolutely'  conveys the opinion that, as a person's power increases, their moral sense diminishes.",
        origin: 'English',
    },
    {
        '': 1620,
        text: 'Power dressing',
        explanation:
            'A stylish and expensive clothing style, intended to convey the impression of assertiveness and competence and predominantly worn by women..',
        origin: 'English',
    },
    {
        '': 1621,
        text: 'Powers that be - The',
        explanation: 'The established government or authority.',
        origin: 'English',
    },
    {
        '': 1622,
        text: 'Praying at the porcelain altar',
        explanation:
            "'Praying at the porcelain altar' is a comic reference to kneeling and vomiting down the toilet.",
        origin: 'English',
    },
    {
        '': 1623,
        text: 'Preaching to the choir',
        explanation:
            'To (pointlessly) try to convince a person or group to accept an opinion that they already agree with.',
        origin: 'English',
    },
    {
        '': 1624,
        text: 'Preposterous',
        explanation: 'Now chiefly used to mean absurd; ridiculous.',
        origin: 'English',
    },
    {
        '': 1625,
        text: 'Press into service',
        explanation:
            "Induce someone to join the military. More recently the phrase is used to mean 'make impromptu use of' some article or person to fulfil some task - usually someone or thing that isn't normally used for such a task.",
        origin: 'English',
    },
    {
        '': 1626,
        text: 'Pretty kettle of fish',
        explanation:
            "The expression 'a kettle of fish' is usually part of the phrases 'a fine kettle of fish', 'a pretty kettle of fish' etc, which mean 'a muddle or awkward state of affairs'.",
        origin: 'English',
    },
    {
        '': 1627,
        text: 'Pretty penny - A',
        explanation: 'A considerable profit, or a large sum of money.',
        origin: 'English',
    },
    {
        '': 1628,
        text: 'Prick up your ears',
        explanation: 'To begin listening attentively.',
        origin: 'English',
    },
    {
        '': 1629,
        text: 'Pride comes before a fall',
        explanation:
            "The proverbial saying 'pride comes before a fall' is a warning that  haughtiness and  hubris leads to failure and loss.",
        origin: 'English',
    },
    {
        '': 1630,
        text: 'Prime time',
        explanation:
            "'Prime time' is the time of day when the TV audience is at its largest.",
        origin: 'English',
    },
    {
        '': 1631,
        text: 'Primrose path',
        explanation:
            'The pleasant route through life, of pleasure and dissipation.',
        origin: 'English',
    },
    {
        '': 1632,
        text: 'Procrastination is the thief of time',
        explanation:
            'Putting off an action leads to time wasting. If something is necessary, it is best to act quickly to accomplish it.',
        origin: 'English',
    },
    {
        '': 1633,
        text: 'Proof of the pudding is in the eating - The',
        explanation:
            'To fully judge how effective something is you need to use it for its intended purpose.',
        origin: 'English',
    },
    {
        '': 1634,
        text: 'Proverbs - A list of',
        explanation: 'What is a proverb?',
        origin: 'English',
    },
    {
        '': 1635,
        text: 'Pull in your horns',
        explanation: "Restrain one's ardour; lower one's ambitions.",
        origin: 'English',
    },
    {
        '': 1636,
        text: 'Pull out all the stops',
        explanation: 'Make every possible effort.',
        origin: 'English',
    },
    {
        '': 1637,
        text: "Pull the other one, it's got bells on",
        explanation:
            "To pull someone's leg is deceive them in a humorous or playful way.",
        origin: 'English',
    },
    {
        '': 1638,
        text: 'Pull the wool over your eyes',
        explanation: 'To deceive, to hoodwink.',
        origin: 'English',
    },
    {
        '': 1639,
        text: 'Pull up stakes',
        explanation: "To move home. Sometimes also given as 'pull up sticks'.",
        origin: 'English',
    },
    {
        '': 1640,
        text: 'Pull your horns in',
        explanation: "Restrain one's ardour; lower one's ambitions.",
        origin: 'English',
    },
    {
        '': 1641,
        text: 'Pull your finger out',
        explanation: 'Hurry up; make every possible effort.',
        origin: 'English',
    },
    {
        '': 1642,
        text: 'Pull yourself up by your bootstraps',
        explanation:
            "To 'pull yourself up by your bootstraps' is to improve your situation by your own unaided efforts.",
        origin: 'English',
    },
    {
        '': 1643,
        text: "Pulling one's leg",
        explanation:
            "To pull someone's leg is deceive them in a humorous or playful way.",
        origin: 'English',
    },
    {
        '': 1644,
        text: "Punch above one's weight",
        explanation: 'Competing against someone who you are no match for.',
        origin: 'English',
    },
    {
        '': 1645,
        text: 'Pure as the driven snow',
        explanation: 'Entirely pure.',
        origin: 'English',
    },
    {
        '': 1646,
        text: 'Purple patch',
        explanation:
            'An overly elaborate or effusive piece of writing. Also, a period of notable success or good luck.',
        origin: 'English',
    },
    {
        '': 1647,
        text: 'Push the boat out',
        explanation:
            'To spend generously. To spend more than one is normally accustomed to doing, often to mark a special occasion.',
        origin: 'English',
    },
    {
        '': 1648,
        text: 'Push the envelope',
        explanation:
            'To attempt to extend the current limits of performance. To innovate, or go beyond commonly accepted boundaries.',
        origin: 'English',
    },
    {
        '': 1649,
        text: 'Put a damper on',
        explanation:
            'Make dishearted, especially to diminish interest in something that was previously exciting.',
        origin: 'English',
    },
    {
        '': 1650,
        text: 'Put a sock in it',
        explanation: 'A request to be quiet.',
        origin: 'English',
    },
    {
        '': 1651,
        text: 'Put a spanner in the works',
        explanation:
            'To throw a spanner in the works is to, deliberately or otherwise, cause disruption; to interfere with the smooth running of something.',
        origin: 'English',
    },
    {
        '': 1652,
        text: 'Put on the wooden overcoat',
        explanation: 'Die.',
        origin: 'English',
    },
    {
        '': 1653,
        text: 'Put on your thinking cap',
        explanation: 'Take time for consideration of some question.',
        origin: 'English',
    },
    {
        '': 1654,
        text: 'Put paid to',
        explanation: 'To deal with effectively; to finish something off.',
        origin: 'English',
    },
    {
        '': 1655,
        text: 'Put the cart before the horse',
        explanation: 'Reverse the accepted or logical order of things.',
        origin: 'English',
    },
    {
        '': 1656,
        text: 'Put the mockers on',
        explanation:
            "To thwart someone's efforts or cause them to have bad luck. Also, to have the mockers on - to be cursed with bad luck.",
        origin: 'English',
    },
    {
        '': 1657,
        text: 'Put the wood in the hole',
        explanation: 'Close the door.',
        origin: 'English',
    },
    {
        '': 1658,
        text: 'Put up your dukes',
        explanation: 'Put up your fists and prepare to fight.',
        origin: 'English',
    },
    {
        '': 1659,
        text: 'Put your back up',
        explanation: 'Make one angry.',
        origin: 'English',
    },
    {
        '': 1660,
        text: 'Put your best foot forward',
        explanation: 'Embark on a journey or task with purpose and gusto.',
        origin: 'English',
    },
    {
        '': 1661,
        text: 'Put your nose out of joint',
        explanation: 'Hurt your feelings or upset your plans.',
        origin: 'English',
    },
    {
        '': 1662,
        text: 'Put your shoulder to the wheel',
        explanation:
            "To 'put your shoulder to the wheel' is to respond to a problem by applying oneself and making your  best effort. It is similar in meaning to  'get stuck in'.",
        origin: 'English',
    },
    {
        '': 1663,
        text: 'Pyrric victory',
        explanation: 'A\nvictory gained at too great a cost.',
        origin: 'English',
    },
    {
        '': 1664,
        text: 'Quality time',
        explanation:
            'Time in which individual attention is given to an otherwise neglected child or partner.',
        origin: 'English',
    },
    {
        '': 1665,
        text: 'Quantum leap',
        explanation: 'A sudden, very noticable and significant advance.',
        origin: 'English',
    },
    {
        '': 1666,
        text: 'Quarter - Give no',
        explanation:
            'Show no mercy or concession; in its original usage, show no mercy for a vanquished opponent.',
        origin: 'English',
    },
    {
        '': 1667,
        text: 'Queer as a nine bob note',
        explanation: 'Odd\nor unusual. Also used to mean homosexual.',
        origin: 'English',
    },
    {
        '': 1668,
        text: 'Queer Street',
        explanation: 'An imaginary street where people in difficulty live.',
        origin: 'English',
    },
    {
        '': 1669,
        text: 'Queer the pitch',
        explanation:
            '(Originally) interfere with or spoil the business of a tradesman or showman. (More recently) spoil the business at hand.',
        origin: 'English',
    },
    {
        '': 1670,
        text: 'Quick and the dead - The',
        explanation: 'All souls - alive or dead.',
        origin: 'English',
    },
    {
        '': 1671,
        text: 'Quicker than lager turns to piss',
        explanation: 'Very quick.',
        origin: 'English',
    },
    {
        '': 1672,
        text: 'Quid pro quo',
        explanation:
            'Something given in return for a item of equivalent value - like tit for tat.',
        origin: 'English',
    },
    {
        '': 1673,
        text: 'Quotations',
        explanation:
            'People love to talk and when they say something memorable we call it a quotation.',
        origin: 'English',
    },
    {
        '': 1674,
        text: 'Rabbit and pork',
        explanation: 'Talk.',
        origin: 'English',
    },
    {
        '': 1675,
        text: 'Rack and ruin',
        explanation: 'Complete destruction.',
        origin: 'English',
    },
    {
        '': 1676,
        text: 'Rag-and-bone man',
        explanation:
            'A rag-and-bone man is a collector  of discarded  clothes, bones and other low-value items that can be re-sold to merchants. Cloth was recycled to make shoddy and bones were used to make glue.',
        origin: 'English',
    },
    {
        '': 1677,
        text: 'Rack your brains',
        explanation:
            "To rack one's brains is to strain mentally to recall or to understand something.",
        origin: 'English',
    },
    {
        '': 1678,
        text: 'Rag, tag and bobtail',
        explanation: 'A common rabble - the hoi polloi.',
        origin: 'English',
    },
    {
        '': 1679,
        text: 'Raining cats and dogs',
        explanation: 'Raining very heavily.',
        origin: 'English',
    },
    {
        '': 1680,
        text: 'Raining stair-rods',
        explanation: "Raining stair rods means 'aining very heavily'.",
        origin: 'English',
    },
    {
        '': 1681,
        text: 'Raise Cain',
        explanation:
            "To be 'raising Cain' is to be causing trouble or creating an uproar.",
        origin: 'English',
    },
    {
        '': 1682,
        text: 'Rank and file',
        explanation:
            'The ordinary members of a group; as opposed to the group leadership.',
        origin: 'English',
    },
    {
        '': 1683,
        text: 'Raspberry tart',
        explanation: 'Fart.',
        origin: 'English',
    },
    {
        '': 1684,
        text: 'Raze to the ground',
        explanation: 'To destroy and sweep completely away.',
        origin: 'English',
    },
    {
        '': 1685,
        text: 'Rat arsed',
        explanation: 'Drunk.',
        origin: 'English',
    },
    {
        '': 1686,
        text: 'Read between the lines',
        explanation: "Discern a meaning which isn't made obvious or explicit.",
        origin: 'English',
    },
    {
        '': 1687,
        text: 'Read the riot act',
        explanation:
            'Reprimand\nrowdy characters and warn them to stop behaving badly.',
        origin: 'English',
    },
    {
        '': 1688,
        text: 'Real McCoy',
        explanation: 'The real thing - not a substitute.',
        origin: 'English',
    },
    {
        '': 1689,
        text: 'Red-handed (caught)',
        explanation:
            'To be caught red-handed is to be caught in the act of committing a misdemeanour, with the evidence there for all to see.',
        origin: 'English',
    },
    {
        '': 1690,
        text: 'Red herring',
        explanation:
            'A deliberate misleading and diverting of attention from the real issue.',
        origin: 'English',
    },
    {
        '': 1691,
        text: 'Red in tooth and claw',
        explanation:
            'A reference to the sometimes violent natural world, in which predatory animals unsentimentally cover their teeth and claws with the blood of their prey as they kill and devour them.',
        origin: 'English',
    },
    {
        '': 1692,
        text: 'Red-letter day',
        explanation:
            "In earlier times a church festival or saint's day; more recently, any special day.",
        origin: 'English',
    },
    {
        '': 1693,
        text: 'Red rag to a bull - A',
        explanation:
            'To wave a red rag to a bull is to  deliberately provoke it. More generally, the expression denotes any deliberate action intended to bring about an adverse reaction.',
        origin: 'English',
    },
    {
        '': 1694,
        text: 'Red sky at night ...',
        explanation: 'This is the first part of the weather-lore rhyme:',
        origin: 'English',
    },
    {
        '': 1695,
        text: 'Red tape',
        explanation:
            'Rigid or mechanical adherence to bureaucratic rules and regulations especially those involving unnecessary paperwork.',
        origin: 'English',
    },
    {
        '': 1696,
        text: 'Reduplicated phrases',
        explanation:
            "The coinage of new words and phrases into English has been greatly enhanced by the pleasure we get from playing with words. There are numerous alliterative and rhyming idioms, which are a significant feature of the language. These aren't restricted to poets and Cockneys; everyone uses them. We start in the nursery with choo-choos, move on in adult life to hanky-panky and end up in the nursing home having a sing-song.",
        origin: 'English',
    },
    {
        '': 1697,
        text: 'Religion is the opium of the people',
        explanation:
            "This is probably the best-known quotation by Karl Marx, the German economist and Communist political philosopher. The origin German text, in Critique of Hegel's Philosophy of Right, 1843 is:",
        origin: 'English',
    },
    {
        '': 1698,
        text: 'Rest on his laurels',
        explanation:
            "To be  satisfied with one's past success and to consider further   effort unnecessary.",
        origin: 'English',
    },
    {
        '': 1699,
        text: "Revenge is a dish best served cold\nRhyme nor reason\nRhyming slang\nRichard of York gave battle in vain\nRichard the Third\nRiddle wrapped up in an enigma - A \nRide a cock-horse to Banbury Cross\nRiding shotgun\nRiff-raff\nRiley - the life of \n[That] Rings a bell\nRing a ring o'roses, a pocketful of posies, atishoo, atishoo, all fall down\nRing down the curtain\nRing-fencing\nRing the changes\nRinky-dink\nRise and shine\nRoad less travelled - The \nRoad apples\nRoad rage\nRoasted to a turn\nRob Peter to pay Paul\nRock and roll \nIt's not rocket science \nA rolling stone gathers no moss\nRomeo, Romeo, wherefore art thou Romeo?\nRose by any other name would smell as sweet - A \nRose is a rose is a rose\nRosie Lea\nRough diamond\n\n\n\nRound Robin\nRoute one\nRub of the green\nRule of thumb\nRum do\nRumpy-pumpy\nRun a mile\nRun amok\nRun of the mill\nRun out of steam\nRun rings around\nRun the gauntlet\nSacred cow\nSafe as houses - As\nSafe pair of hands - A \nSafe sex\nSalad days\nSalt of the earth - The \nSan fairy Ann\nSandwich short of a picnic\nSave face\nSave one's bacon \nSaved by the bell\nSavoir faire\nSay cheese\nSay goodnight Gracie\nScapegoat\nScarper\nScot-free\nScott (Sir Walter - phrases coined by) \nScrew your courage to the sticking place\n'Scuse me while I kiss this guy\nSea change\nSealed with a loving kiss\nSeason of mists and mellow fruitfulness\nSecond-guess\nSecurity blanket\nSee a pin and pick it up, all the day you'll have good luck; see a pin and let it lie, bad luck you'll have all day\nSee red\nSeek and you shall find\nSeen better days\nSend packing\nSenior citizen\nSent to Coventry\nSeparate the sheep from the goats\nSet one's cap at\nSet your teeth on edge\nSex and shopping\nSeven-year itch\nSexton Blake\nShebang - The whole \nShaggy dog story\nShake a leg\nShakers and movers\nShakespeare (phrases and sayings of) \nShall I compare thee to a summer's day?\nShambles\nShanks' mare/shanks' pony\nShare and share alike\nShilly-shally\nShip shape and Bristol fashion\n Shit end of the stick - The \nShit for brains\nShiver my timbers\nShoddy\nShort end of the stick - The \nShot across the bows\nShot heard 'round the world - The \nShot in the arm\nShot in the dark\nShoot through\nShort shrift\nShow a leg - see shake a leg\nShow your mettle\nShrinking violet\nShuffle off this mortal coil\nShut your cake-hole\nSiamese twins\nSick puppy (A) \nSight for sore eyes (A) \nSilly Billy\nSilly season\nSilver lining - every cloud has a \nSir Walter Scott (phrases coined by) \nSilence is golden\nSilver bullet\nSimiles\nSitting pretty\nSixes and sevens - At \nSkeleton in the closet\nSkid row\nSkin and blister\n(By the) skin of your teeth\n(The) sky's the limit\nSledgehammer to crack a nut - A \nSleep like a top\nSleep on a clothesline\nSleep tight\nSleeveless errand\nSloane Ranger\nSlush fund\nSmallest room in the house - The\nSmart casual\nSmoke and mirrors\nSnug as a bug in a rug\nSo sue me\nSoap-dodger\nSod's Law\nSold down the river\nSome are born great, some achieve greatness, and some have greatness thrust upon 'em\nSome men are born mediocre, some men achieve mediocrity, and some men, have mediocrity thrust upon them\nSomeone is walking over my grave\nSomething for the weekend sir?\nSomething nasty in the woodshed\nSomething old, something new, something borrowed, something blue\nSon of a bitch\nSon of a gun\nSorry sight\nSound bite\nSound out\nSour grapes\nSpace, the final frontier\nSpare the rod and spoil the child\nSpeak of the Devil\nSpeak softly and carry a big stick\nSpecial relationship\nSpelling-bee\nSpend a penny\nSpick and span\nSpill the beans\nSpin doctor\n\n\n\nSpitting feathers\nSpitting image\nSpoonerisms\nSpring forward, fall back\nSpruce-up\nSquare meal\nSqueaky bum time\nStand and deliver\nStand up guy\nStanding on the shoulders of giants\nStar-crossed lovers\nStark, raving mad\nStars and garters - My \nStart from scratch\nSteal a march\nSteal my thunder\nStep up to the plate\nStick in the mud\nSticks and stones may break my bones\nSticky wicket\nStiff upper lip\nStiffen the sinews\nStinking rich\nStitch in time saves nine - A \nStone the crows\nStone's throw\nStony-hearted\nStool pigeon\nStorm in a teacup\nStraight as a die\nStraight from the horse's mouth\nStrain at the leash\nStrait-laced\nStrait and narrow\nStranger danger\nStranger than fiction - Truth is \nStrike while the iron is hot\nStuff and nonsense\nStump up\nSuch is life\nSurf and turf\n Surfing the Net/surfing the Internet/surfing the Web \nSurvival of the fittest\nSuspension of disbelief\nSwan song\nSweet Fanny Adams\nSwing for you\nSwing the lead\nTail wagging the dog - The \nTake a back seat\nTake care of the pence and the pounds will take care of themselves\nTake down a peg or two\nTake potluck \nTake the bit between your teeth\nTake the cake\nTake the gilt off the gingerbread\nTake the Mickey\nTake the upper hand\nTake umbrage \nTake with a grain of salt\nTaken aback\nTaken for a ride\nTalk of the Devil\nTalk the talk\nTalk through one's hat\nTalk to the hand\nTall story\nTanstaafl - (there's no such thing as a free lunch)\nTattoo phrases and sayings\nTawdry\nTea leaf\nTechnicolor yawn\nTell it to the marines\nTell me about it \nTempest in a teapot\nTest your mettle - see show your mettle\nThat's all folks!\nThat's all she wrote\nThat's one small step for a man, a giant leap for mankind\nThe ants are my friends, they're blowing in the wind\nThe apple never falls far from the tree\nThe apple of my eye\nThe back of beyond\nThe balance of power\nThe balance of trade\nThe bane of my life\nThe bee's knees\nThe belle of the ball\nThe best  defense is a good offence\nThe best laid schemes of mice and men\nThe Big Apple\nThe Big Easy\nThe birds and the bees\nThe bitter end\nThe blind leading the blind\nThe bread of life\nThe buck stops here\nThe call of the wild\nThe camera cannot lie\nThe chickens come home to roost\nThe child is father to the man The collywobbles\nThe course of true love never did run smooth\nThe crack of doom\nThe Crapper\nThe customer is always right\nThe cut of your jib\nThe dark side\nThe darkest hour is just before the dawn\nThe Devil has all the best tunes\nThe Devil Incarnate\nThe Devil is in the details\nThe Devil makes work for idle hands to do\nThe Devil take the hindmost\nThe Devil to pay\nThe die has been cast\nThe early bird catches the worm\nThe elephant in the room\nThe emperor's new clothes\nThe ends of the earth \nThe exception which proves the rule\nThe face that launched a thousand ships\nThe fat of the land\nThe female of the species is more deadly then the male\nThe fifth estate\nThe floozie in the jacuzzi\nThe fly in the ointment\nThe full monty\nThe game is afoot\nThe game is up\nThe great unwashed\nThe hair of the dog that bit you\nThe hairy eyeball\nThe heebie-jeebies\nThe jury is still out\nThe land of nod\nThe last straw\n\n\n\nThe law is an ass\nThe life of Riley\nThe living daylights\nThe love that dare not speak its name\nThe monstrous regiment of women\nThe more the merrier\nThe moving finger writes\nThe mutt's nuts\nThe nth degree \nThe opera ain't over till the fat lady sings\nThe pen is mightier than the sword \nThe pip - Get/got/have \nThe pot calling the kettle black\nThe powers that be\nThe proof of the pudding is in the eating \nThe quick and the dead\nThe real McCoy\nThe road less travelled\nThe road to hell is paved with good intentions\nThe salt of the earth \nThe seven-year itch\nThe shoemaker always wears the worst shoes\nThe short end of the stick\nThe shot heard 'round the world\nThe sky's the limit\nThe smallest room in the house\nThe straw that broke the camel's back\nThe tail wagging the dog\nThe toast of the town\nThe third degree\nThe triumph of hope over experience\nThe upper hand\nThe usual suspects\nThe whole kit and caboodle\nThe whole nine yards\nThe whole shebang\nThe writing is on the wall\nThe wrong side of the blanket\nThe year dot\nThe Yellow Peril\nThere is more than one way to kill a cat\nThere are three kinds of lies... \nThere but for the grace of God, go I\nThere is no alternative\nThere's an R in the month\nThere's method in my madness\nThere's no fool like an old fool\nThere's no place like home\nThere's no such thing as a free lunch (Tanstaafl)\nThere's no such thing as bad publicity\nThere's one (a sucker) born every minute\nThere's one law for the rich and another law for the poor\nThey couldn't hit an elephant at this distance\nThick and fast \nThick and thin \n(As) thick as thieves\n(As) thick as two short planks\nThin air - Vanish into \nThing of beauty is a joy forever - A \nThings that go bump in the night\nThink outside the box\nThinking cap\nThird degree - The \nThird time lucky\nThomas Paine - The writings of\nThorn in the flesh\nThou shalt not kill\nThough this be madness, yet there is method in it\nThree score and ten\nThree sheets to the wind\nThree strikes and you are out\nThrough thick and thin \nThrow in the towel\nThrow good money after bad\nThrow your hat into the ring\nThumbs up\nThus far into the bowels of the land\nTicked off\nTickle the ivories\nTickled pink\nTide over\nTie the knot\nTill the cows come home\nTime and tide wait for no man\nTinker's damn\nTilting at windmills\nTissue of lies\nTitfer\nTit for tat \nTits up\nTo a T\nTo all intents and purposes\nTo be or not to be, that is the question\nTo beggar belief\nTo boldly go where no man has gone before\nTo boot\nTo cast the first stone\nTo err is human; to forgive divine\nTo gild refined gold, to paint the lily\nTo sleep: perchance to dream: ay, there's the rub\nTo the manner born\nTo the nth degree \nTo travel hopefully is a better thing than to arrive\nToast of the town\nToe the line\nToe-curling\nToffee-nosed\nTommy Atkins\nTomorrow is another day\nTongue in cheek\nToo big for your breeches\nToo much of a good thing\nToodle-oo\nTooth and nail\nTop dog\nTop drawer\nTop notch\nTopsy-turvy\nTotal shambles\nTouch and go\nTouch with a barge-pole - Wouldn't \nTouch wood \nTouchy-feely\nTout de suite\nTower of strength\n Train surfing\nTrick or treat\nTrip the light fantastic\nTrouble and strife\nTrue blue\nTruth is stranger than fiction\nTruth will out\nTuckered out\nTurkeys voting for Christmas\nTurn a blind eye\nTurn of phrase\nTurn the tables\nTurn up for the books\nTurn up trumps\nTwelve good men and true\nTwenty three skidoo\nTwenty four seven\nTwo cents worth\nTwo heads are better than one\nTwo peas in a pod \nUnder the thumb\n\n\n\nUnder your hat - Keep it \nUnder the auspices of\nGet - underway\nUnder wraps\nUneasy lies the head that wears a crown\nUnion Jack\nThe great - unwashed\nThe - unkindest cut of all\nUp a blind alley\nUp a gum tree\n Up in arms\nUp the creek without a paddle\nUp the apples and pears\nUp the duff\nUp the pole\nUp the wooden hill to Bedfordshire\nUp to snuff\nUpper crust\nUpper hand\nUp in arms\nUps-a-daisy\nUpset the apple-cart\nUp the ante\nUpside down\nUrban myth\nUse your loaf\nUsual suspects - The \nUsing a sledgehammer to crack a nut\nValentine's Day Poems and Sayings\nVan surfing\nVanish into thin air\nVeg out\nVerbosity leads to unclear, inarticulate things\nVice versa\nVicious circle\nVis-a-vis\nVisit the ladies' room\nVorsprung Durch Technik\nWalk free\nWalk the walk\nWalk the plank\nWalter Scott (phrases coined by) \nWarts and all\nWatch the birdie\n(A) watched pot never boils \nWatching brief\nWave a red rag to a bull\nWax lyrical\nWax poetic\nWe are a grandmother\nWe are not amused\nWe few, we happy few, we band of brothers\nWe have seen better days\nWe know where you live\nWeakest link - A chain is only as strong as its \nWear the trousers\nWear your heart on your sleeve\nWeasel words\nWee-wee\nWell heeled\nWell read\nWet behind the ears\nWet blanket\nWhat a piece of work is man\nWhat are you like?\nWhat football is all about\nWhat God has joined together let no man put asunder\nWhat part of no don't you understand?\nWhat you see is what you get - wysiwyg\nWhat's in a name? That which we call a rose by any other name would smell as sweet\nWhat's not to like?\nWhat's up Doc?\nWhen in Rome, do as the Romans do\nWhen it comes to the crunch\nWhen pigs fly\nWhen the going gets tough, the tough get going\nWhen the shit hits the fan\nWhere there's muck there's brass\nWhet your appetite\nWhich  is which?\nWhich  witch is which?\nWhile you live, tell truth and shame the Devil!\nWhip round\nWhipper snapper\nWhipping boy\nWhistle and flute\nWhistle blower\nWhistle down the wind\nWhite as snow\nWhite bread\nWhite elephant\nWhole kit and caboodle - The \nWhole-hearted\nWhole nine yards - The\nWhole shebang - The \nWhoops-a-daisy\nWhy does bread always fall butter side down?\nWhy should the Devil have all the best tunes?\nWick - you get on my \nWide berth - Keep a \nWild and woolly\nWild goose chase\nWilly nilly\nWin hands down\nWin one for the Gipper\n(On a) wing and a prayer\nWing it\nWinter drawers on\nWish you were here\nWith bells on\nWithout a shadow of a doubt\nWithout let or hindrance \nWithout so much as a by your leave\nWoe betide you\nWoe is me\nWolf in sheep's clothing\nWoman needs a man like a fish needs a bicycle - A \nWoman's place is in the home - A \nWomen and children first\nWooden hill to Bedfordshire\nWord association football\nWord for word\nWord in edgeways - A \nWord in your shell-like - A \nWords ending in gry\nWorse for wear\nWorth one's salt\nWotcher\nWouldn't touch with a barge-pole\nWreak havoc \nWriting is on the wall - The \n Wrong end of the stick - The\nWrong side of the blanket - The\nYada yada\nYear dot - The\nYellow-belly\nYellow Peril\nYou are what you eat\nYou can catch more flies with honey than with vinegar\nYou can lead a horse to water but you can't make it drink\nYou can lead a whore to culture but you can't make her think\nYou can't get blood out of a stone\nYou can't have your cake and eat it too \nYou can't make a silk purse out of a sow's ear\nYou can't teach an old dog new tricks\nYou get on my wick\nYou look as if you've been dragged through a hedge backwards\nYou'll wonder where the yellow went when you brush your teeth with Pepsodent\nYoung turk\nYour days are numbered\nYour money or your life\nYour name is mud\nYou've never had it so good\nZero tolerance\nZig-zag",
        explanation:
            "The proverbial phrase 'revenge is a dish best served cold' expresses the notion that vengeance is more satisfying when exacted some time after the harm that instigated it.",
        origin: 'English',
    },
    {
        '': 1700,
        text: 'Rhyme nor reason',
        explanation:
            'A thing which has neither rhyme nor reason makes no sense, from either a poetic or logical standpoint.',
        origin: 'English',
    },
    {
        '': 1701,
        text: 'Rhyming slang',
        explanation:
            'A type of slang in which  words are replaced by  words or phrases they rhyme with.',
        origin: 'English',
    },
    {
        '': 1702,
        text: 'Richard of York gave battle in vain',
        explanation:
            "The phrase 'Richard of York gave battle in vain', often shortened to ROYGBIV,  is intended to aid the recall of the colours of the rainbow",
        origin: 'English',
    },
    {
        '': 1703,
        text: 'Richard the Third',
        explanation: 'Turd.',
        origin: 'English',
    },
    {
        '': 1704,
        text: 'Riddle wrapped up in an enigma - A',
        explanation:
            "'A riddle wrapped up in an enigma' is a puzzle - something especially difficult to understand or to solve.",
        origin: 'English',
    },
    {
        '': 1705,
        text: 'Ride a cock-horse to Banbury Cross',
        explanation:
            "'Ride a cock-horse to Banbury Cross' is a line from  a nursery rhyme. The original meaning is unknown and may simply be a nonsense rhyme.",
        origin: 'English',
    },
    {
        '': 1706,
        text: 'Riding shotgun',
        explanation:
            "To travel as an armed guard next to a vehicle's driver. Latterly, (chiefly in the USA) - to travel in a car's front passenger seat.",
        origin: 'English',
    },
    {
        '': 1707,
        text: 'Riff-raff',
        explanation:
            'A group of disreputable people of low social position; the dregs of society.',
        origin: 'English',
    },
    {
        '': 1708,
        text: 'Riley - the life of',
        explanation: "'The life of Riley' is an easy and pleasant life.",
        origin: 'English',
    },
    {
        '': 1709,
        text: '[That] Rings a bell',
        explanation: 'Awaken a memory.',
        origin: 'English',
    },
    {
        '': 1710,
        text: "Ring a ring o'roses, a pocketful of posies, atishoo, atishoo, all fall down",
        explanation: 'Verse\n from a nursery rhyme.',
        origin: 'English',
    },
    {
        '': 1711,
        text: 'Ring down the curtain',
        explanation: 'Bring something to an end.',
        origin: 'English',
    },
    {
        '': 1712,
        text: 'Ring-fencing',
        explanation:
            'Separating something from usual judgement and guaranteeing its protection, especially the funds of a project.',
        origin: 'English',
    },
    {
        '': 1713,
        text: 'Ring the changes',
        explanation: 'To employ alternative methods.',
        origin: 'English',
    },
    {
        '': 1714,
        text: 'Rinky-dink',
        explanation:
            'Something that is worn out, cheap or insignificant. To give someone the rinky-dink means to cheat them.',
        origin: 'English',
    },
    {
        '': 1715,
        text: 'Rise and shine',
        explanation: 'Get out of bed and prepare for work.',
        origin: 'English',
    },
    {
        '': 1716,
        text: 'Road less travelled - The',
        explanation:
            "The road less travelled is the \n          unconventional or uninvestigated option. More metaphorically, it is also used to refer to 'the life you never had' - what might have been had you  made different choices. The notion is near\n          to what is nowadays called 'alternative'.",
        origin: 'English',
    },
    {
        '': 1717,
        text: 'Road apples',
        explanation: 'Horse dung.',
        origin: 'English',
    },
    {
        '': 1718,
        text: 'Road rage',
        explanation:
            "Aggressively argumentative, and sometimes violent, behaviour indulged in by drivers when annoyed by other road users' actions.",
        origin: 'English',
    },
    {
        '': 1719,
        text: 'Roasted to a turn',
        explanation: 'Cooked just right.',
        origin: 'English',
    },
    {
        '': 1720,
        text: 'Rob Peter to pay Paul',
        explanation:
            'To take from one merely to give to another; to discharge one debt by incurring another.',
        origin: 'English',
    },
    {
        '': 1721,
        text: 'Rock and roll',
        explanation:
            'The form of popular music that came to prominence in the USA in the 1950s.',
        origin: 'English',
    },
    {
        '': 1722,
        text: "It's not rocket science",
        explanation:
            "It (the subject under discussion) isn't difficult to understand.",
        origin: 'English',
    },
    {
        '': 1723,
        text: 'A rolling stone gathers no moss',
        explanation:
            'Someone who does not settle in one place rarely prospers.',
        origin: 'English',
    },
    {
        '': 1724,
        text: 'Romeo, Romeo, wherefore art thou Romeo?',
        explanation:
            "The literal meaning of 'O Romeo, Romeo! wherefore art thou Romeo?' would appear to be 'Where are you Romeo?'. In fact, using the meaning of wherefore that would have been commonplace in Shakespeare's day, the playright suggested the meaning of 'For what reason are you Romeo?'.",
        origin: 'English',
    },
    {
        '': 1725,
        text: 'Rose by any other name would smell as sweet - A',
        explanation:
            "The saying 'A rose by any other name would smell as sweet' means that what matters is what something is, not what it is called.",
        origin: 'English',
    },
    {
        '': 1726,
        text: 'Rose is a rose is a rose',
        explanation:
            "The meaning most often attributed to 'a rose is a rose is a rose' is the notion that, when all is said and done, a thing is what it is. This is in similar vein to Shakespeare's 'a rose by any other name would smell as sweet'. However, that's not the interpretation given by the author of the phrase - see below.",
        origin: 'English',
    },
    {
        '': 1727,
        text: 'Rosie Lea',
        explanation: 'Tea.',
        origin: 'English',
    },
    {
        '': 1728,
        text: 'Rough diamond',
        explanation:
            'Someone who is basically good hearted but lacking social graces and respect for the law.',
        origin: 'English',
    },
    {
        '': 1729,
        text: 'Round Robin',
        explanation:
            'A tournament in which each contestant plays each of the others.',
        origin: 'English',
    },
    {
        '': 1730,
        text: 'Route one',
        explanation:
            "In regard to football 'route one' is a direct form of attack in which the ball is kicked high and long towards the goal, in order to stage an attack. In wider use it is a generalized term for any direct no-nonsense means to an end.",
        origin: 'English',
    },
    {
        '': 1731,
        text: 'Rub of the green',
        explanation:
            'Luck; especially in sports and pastimes played on a green surface.',
        origin: 'English',
    },
    {
        '': 1732,
        text: 'Rule of thumb',
        explanation:
            'A rule of thumb is a means of estimation made according to a rough and ready practical rule, not based on science or exact measurement.',
        origin: 'English',
    },
    {
        '': 1733,
        text: 'Rum do',
        explanation: 'An\nevent that is disreputable or strange.',
        origin: 'English',
    },
    {
        '': 1734,
        text: 'Rumpy-pumpy',
        explanation:
            'Sexual intercourse, especially that of a casual and saucy nature.',
        origin: 'English',
    },
    {
        '': 1735,
        text: 'Run a mile',
        explanation:
            'Distance oneself from physically or, more often, emotionally. The phrases is used in circumstances where a person has made an advance without an expectation of a response, but, when a response is forthcoming, is shown to be unprepared for it and immediately retreats.',
        origin: 'English',
    },
    {
        '': 1736,
        text: 'Run amok',
        explanation:
            "To 'run amok', which is sometimes spelled 'run amuck', is to behave in a wild or unruly manner.",
        origin: 'English',
    },
    {
        '': 1737,
        text: 'Run of the mill',
        explanation:
            'The ordinary, basic article, with no decoration or augmentation.',
        origin: 'English',
    },
    {
        '': 1738,
        text: 'Run out of steam',
        explanation: 'Run out of energy.',
        origin: 'English',
    },
    {
        '': 1739,
        text: 'Run rings around',
        explanation: 'To easily outrun or outclass and opponent.',
        origin: 'English',
    },
    {
        '': 1740,
        text: 'Run the gauntlet',
        explanation:
            "To go through a series of criticisms or harsh treatments at the hands of one's detractors.",
        origin: 'English',
    },
    {
        '': 1741,
        text: 'Sacred cow',
        explanation:
            'Something too highly regarded to be open to criticism or curtailment.',
        origin: 'English',
    },
    {
        '': 1742,
        text: 'Safe as houses - As',
        explanation: 'Completely safe and secure.',
        origin: 'English',
    },
    {
        '': 1743,
        text: 'Safe pair of hands - A',
        explanation:
            'A\nreliable, if somewhat dull, person who can be entrusted not to make a mistake\nwith a task.',
        origin: 'English',
    },
    {
        '': 1744,
        text: 'Safe sex',
        explanation:
            "What is usually meant by 'safe sex' is sexual activity where precautions, e.g. the use of condoms, are taken against the transmission of diseases, notably HIV/AIDS. Earlier, in the 20th century, there have been other interpretations of what was meant by the term; for example, 'the avoidance of sex, notably for young or unmarried people' and 'birth control methods'.",
        origin: 'English',
    },
    {
        '': 1745,
        text: 'Salad days',
        explanation: "The\n days of one's youthful inexperience.",
        origin: 'English',
    },
    {
        '': 1746,
        text: 'Salt of the earth - The',
        explanation:
            "People who are described as 'the salt of the earth' are those who are considered to be of great worth and reliability.",
        origin: 'English',
    },
    {
        '': 1747,
        text: 'San fairy Ann',
        explanation:
            "A deliberate jokey corruption of the French phrase 'Ãa ne fait rien' - it doesn't matter.",
        origin: 'English',
    },
    {
        '': 1748,
        text: 'Sandwich short of a picnic',
        explanation: 'A jokey, colloquial term for stupid.',
        origin: 'English',
    },
    {
        '': 1749,
        text: 'Save face',
        explanation: "Lose face - Be humiliated; lose one's reputation.",
        origin: 'English',
    },
    {
        '': 1750,
        text: "Save one's bacon",
        explanation:
            "Escape from injury; avoid harm, especially to one's body.",
        origin: 'English',
    },
    {
        '': 1751,
        text: 'Saved by the bell',
        explanation: 'Saved by a last minute intervention.',
        origin: 'English',
    },
    {
        '': 1752,
        text: 'Savoir faire',
        explanation:
            'The instinctive ability to know how to deal with any situation that arises.',
        origin: 'English',
    },
    {
        '': 1753,
        text: 'Say cheese',
        explanation:
            "A photographer's instruction just before taking a picture, in order to make people smile.",
        origin: 'English',
    },
    {
        '': 1754,
        text: 'Say goodnight Gracie',
        explanation:
            "This was coined as the sign-off at the end of George Burns' shows with his wife Gracie Allen in 1958.",
        origin: 'English',
    },
    {
        '': 1755,
        text: 'Scapegoat',
        explanation: 'One who is blamed or punished for the sins of others.',
        origin: 'English',
    },
    {
        '': 1756,
        text: 'Scarper',
        explanation: 'Depart hastily.',
        origin: 'English',
    },
    {
        '': 1757,
        text: 'Scot-free',
        explanation:
            "To go 'scot free' is to escape without incurring payment or  without punishment.",
        origin: 'English',
    },
    {
        '': 1758,
        text: 'Scott (Sir Walter - phrases coined by)',
        explanation:
            "There are many sources for the phrases and sayings that colour our language. One important source is the Bible, from which we get 'by the skin of your teeth', 'from strength to strength' and many more. Whether we view these as English phrases is debatable as the first English translation of the Bible was a thousand years or more after the writing of the original biblical texts. Wycliffe's translation, circa 1392, is the first version that brought the Bible to the English-speaking world - apart from that small number of scholars who had read the previous Latin versions and discussed them in English. Whatever we think about the Englishness of translated biblical phrases even they pale next to the single most prolific coiner of English - Shakespeare. To use his own words from All's Well That Ends Well:",
        origin: 'English',
    },
    {
        '': 1759,
        text: 'Screw your courage to the sticking place',
        explanation: 'Be firm and resolute.',
        origin: 'English',
    },
    {
        '': 1760,
        text: "'Scuse me while I kiss this guy",
        explanation: 'A misheard lyric.',
        origin: 'English',
    },
    {
        '': 1761,
        text: 'Sea change',
        explanation: 'A\nradical change or transformation.',
        origin: 'English',
    },
    {
        '': 1762,
        text: 'Sealed with a loving kiss',
        explanation: 'The full version of the acronym SWALK.',
        origin: 'English',
    },
    {
        '': 1763,
        text: 'Season of mists and mellow fruitfulness',
        explanation: 'Autumn (in the UK).',
        origin: 'English',
    },
    {
        '': 1764,
        text: 'Second-guess',
        explanation:
            '1. To criticize and offer advice, with the benefit of hindsight.\n  2. To foresee the actions of others,  before they have come to a decision themselves.',
        origin: 'English',
    },
    {
        '': 1765,
        text: 'Security blanket',
        explanation:
            "1. A small familiar blanket or other soft fabric item  carried by a child for reassurance.\n  2. A form of harness for a baby's crib.\n  3. All-encompassing military and political security measures.",
        origin: 'English',
    },
    {
        '': 1766,
        text: "See a pin and pick it up, all the day you'll have good luck; see a pin and let it lie, bad luck you'll have all day",
        explanation: 'A proverb extolling the virtue of thrift.',
        origin: 'English',
    },
    {
        '': 1767,
        text: 'See red',
        explanation: 'Become angry; lose self-control.',
        origin: 'English',
    },
    {
        '': 1768,
        text: 'Seek and you shall find',
        explanation:
            "The proverbial saying 'Seek and you shall find' means, in the Biblical sense, 'come to God and your prayers will be answered. In a wider literal sense it just means 'effort will be rewarded'.",
        origin: 'English',
    },
    {
        '': 1769,
        text: 'Seen better days',
        explanation:
            'To have been more wealthy or in better condition in former times.',
        origin: 'English',
    },
    {
        '': 1770,
        text: 'Send packing',
        explanation: 'Send away ignominiously.',
        origin: 'English',
    },
    {
        '': 1771,
        text: 'Senior citizen',
        explanation:
            'An elderly person; one who is past the age of retirement.',
        origin: 'English',
    },
    {
        '': 1772,
        text: 'Sent to Coventry',
        explanation:
            "To be ignored or ostracised. This behaviour often takes the form of pretending that the shunned person, although conspicuously present, can't be seen or heard.",
        origin: 'English',
    },
    {
        '': 1773,
        text: 'Separate the sheep from the goats',
        explanation: 'Separate the good from the bad.',
        origin: 'English',
    },
    {
        '': 1774,
        text: "Set one's cap at",
        explanation:
            'Said of a woman who determines to gain the affections of a man.',
        origin: 'English',
    },
    {
        '': 1775,
        text: 'Set your teeth on edge',
        explanation:
            'Literally, to cause an unpleasant tingling of the teeth. More generally, the expression is used to describe any feeling of unpleasant distaste.',
        origin: 'English',
    },
    {
        '': 1776,
        text: 'Sex and shopping',
        explanation:
            'A type of novel where the plot revolves around the affluent consumer lifestyle and sexual encounters of the characters.',
        origin: 'English',
    },
    {
        '': 1777,
        text: 'Seven-year itch',
        explanation:
            'The inclination to become unfaithful after seven years of marriage.',
        origin: 'English',
    },
    {
        '': 1778,
        text: 'Sexton Blake',
        explanation: 'Fake.',
        origin: 'English',
    },
    {
        '': 1779,
        text: 'Shebang - The whole',
        explanation: 'All of it; the whole thing.',
        origin: 'English',
    },
    {
        '': 1780,
        text: 'Shaggy dog story',
        explanation:
            'A lengthy, improbable and ultimately pointless story, often told in an attempt at humour.',
        origin: 'English',
    },
    {
        '': 1781,
        text: 'Shake a leg',
        explanation: 'Rouse yourself from sleep and get out of bed.',
        origin: 'English',
    },
    {
        '': 1782,
        text: 'Shakers and movers',
        explanation:
            'People of energetic demeanour, who initiate change and influence events.',
        origin: 'English',
    },
    {
        '': 1783,
        text: 'Shakespeare (phrases and sayings of)',
        explanation:
            'William Shakespeare  contributed more phrases and sayings to the English language than any other individual, and most of them are still in daily use.',
        origin: 'English',
    },
    {
        '': 1784,
        text: "Shall I compare thee to a summer's day?",
        explanation:
            "'Shall I compare thee to a summer's day', one of the most celebrated lines in all poetry, is from Shakespeare's Sonnet 18, 1609.",
        origin: 'English',
    },
    {
        '': 1785,
        text: 'Shambles',
        explanation: 'A scene of disorder; a ruin; a mess.',
        origin: 'English',
    },
    {
        '': 1786,
        text: "Shanks' mare/shanks' pony",
        explanation: "One's legs, used as a means of transport.",
        origin: 'English',
    },
    {
        '': 1787,
        text: 'Share and share alike',
        explanation:
            "To 'share and share alike' is to give equal shares to all.",
        origin: 'English',
    },
    {
        '': 1788,
        text: 'Shilly-shally',
        explanation: 'To dither and be undecided.',
        origin: 'English',
    },
    {
        '': 1789,
        text: 'Ship shape and Bristol fashion',
        explanation:
            "If something is  'ship-shape and Bristol fashion' it is in first-class order.",
        origin: 'English',
    },
    {
        '': 1790,
        text: 'Shit end of the stick - The',
        explanation:
            'To get the short end of the stick is to come off worst in a bargain or contest.',
        origin: 'English',
    },
    {
        '': 1791,
        text: 'Shit for brains',
        explanation: 'Extremely stupid.',
        origin: 'English',
    },
    {
        '': 1792,
        text: 'Shiver my timbers',
        explanation: 'An oath, expressing annoyance or surprise.',
        origin: 'English',
    },
    {
        '': 1793,
        text: 'Shoddy',
        explanation:
            'Describing  inferior goods or workmanship, or disrespectful behaviour.',
        origin: 'English',
    },
    {
        '': 1794,
        text: 'Short end of the stick - The',
        explanation:
            'To get the short end of the stick is to come off worst in a bargain or contest.',
        origin: 'English',
    },
    {
        '': 1795,
        text: 'Shot across the bows',
        explanation: 'A\nwarning shot, either real or metaphorical.',
        origin: 'English',
    },
    {
        '': 1796,
        text: "Shot heard 'round the world - The",
        explanation:
            "A line from Emerson's Concord Hymn. Later used to denote shots of various forms that had international significance.",
        origin: 'English',
    },
    {
        '': 1797,
        text: 'Shot in the arm',
        explanation: 'A\nstimulus.',
        origin: 'English',
    },
    {
        '': 1798,
        text: 'Shot in the dark',
        explanation: 'A\nhopeful attempt.',
        origin: 'English',
    },
    {
        '': 1799,
        text: 'Shoot through',
        explanation: 'To abscond, or depart quickly.',
        origin: 'English',
    },
    {
        '': 1800,
        text: 'Short shrift',
        explanation:
            "To\ngive 'short shrift' is to give little and unsympathetic attention to.",
        origin: 'English',
    },
    {
        '': 1801,
        text: 'Show a leg - see shake a leg',
        explanation: 'Rouse yourself from sleep and get out of bed.',
        origin: 'English',
    },
    {
        '': 1802,
        text: 'Show your mettle',
        explanation: 'Demonstrate your true character.',
        origin: 'English',
    },
    {
        '': 1803,
        text: 'Shrinking violet',
        explanation: 'A shy or modest person.',
        origin: 'English',
    },
    {
        '': 1804,
        text: 'Shuffle off this mortal coil',
        explanation: 'Die.',
        origin: 'English',
    },
    {
        '': 1805,
        text: 'Shut your cake-hole',
        explanation: 'Be quiet.',
        origin: 'English',
    },
    {
        '': 1806,
        text: 'Siamese twins',
        explanation:
            "Inextricably linked - inseparable. Previously the term was used as a synonym for the more accurate term 'conjoined twins'.",
        origin: 'English',
    },
    {
        '': 1807,
        text: 'Sick puppy (A)',
        explanation:
            'Someone who behaves oddly, as a sick puppy might; for example, a lovesick person who pines after their beloved.',
        origin: 'English',
    },
    {
        '': 1808,
        text: 'Sight for sore eyes (A)',
        explanation:
            'A welcome sight;  someone or something you are glad to see.',
        origin: 'English',
    },
    {
        '': 1809,
        text: 'Silly Billy',
        explanation:
            "I have been watching the 30th cricket Test series between England and India and  musing about the oddly named field positions 'Silly mid-on', 'Silly point' etc. I've watched enough cricket to know that these are positions close to the batsman, but wondered why they are labelled 'silly' and whether there might be  an archaic 'near to' meaning of the word. As it turns out, there isn't. 'Silly' in this context means what we normally mean by the word, that is, 'foolish or empty-headed'. Anyone who has been hit on the knee (or elsewhere) by a cricket ball will understand that standing about six feet away from the batsman is just plain silly.",
        origin: 'English',
    },
    {
        '': 1810,
        text: 'Silly season',
        explanation:
            "I have been watching the 30th cricket Test series between England and India and  musing about the oddly named field positions 'Silly mid-on', 'Silly point' etc. I've watched enough cricket to know that these are positions close to the batsman, but wondered why they are labelled 'silly' and whether there might be  an archaic 'near to' meaning of the word. As it turns out, there isn't. 'Silly' in this context means what we normally mean by the word, that is, 'foolish or empty-headed'. Anyone who has been hit on the knee (or elsewhere) by a cricket ball will understand that standing about six feet away from the batsman is just plain silly.",
        origin: 'English',
    },
    {
        '': 1811,
        text: 'Silver lining - every cloud has a',
        explanation:
            "The proverbial saying 'every cloud has a silver lining' is used to convey the notion that, no matter how bad a situation might seem, there is always has some good aspect to it.",
        origin: 'English',
    },
    {
        '': 1812,
        text: 'Sir Walter Scott (phrases coined by)',
        explanation:
            "There are many sources for the phrases and sayings that colour our language. One important source is the Bible, from which we get 'by the skin of your teeth', 'from strength to strength' and many more. Whether we view these as English phrases is debatable as the first English translation of the Bible was a thousand years or more after the writing of the original biblical texts. Wycliffe's translation, circa 1392, is the first version that brought the Bible to the English-speaking world - apart from that small number of scholars who had read the previous Latin versions and discussed them in English. Whatever we think about the Englishness of translated biblical phrases even they pale next to the single most prolific coiner of English - Shakespeare. To use his own words from All's Well That Ends Well:",
        origin: 'English',
    },
    {
        '': 1813,
        text: 'Silence is golden',
        explanation:
            'A proverbial saying, often used in circumstances where it is thought that saying nothing is preferable to speaking.',
        origin: 'English',
    },
    {
        '': 1814,
        text: 'Silver bullet',
        explanation: 'A direct and effortless solution to a problem.',
        origin: 'English',
    },
    {
        '': 1815,
        text: 'Similes',
        explanation: 'A simile is a comparison of one thing with another.',
        origin: 'English',
    },
    {
        '': 1816,
        text: 'Sitting pretty',
        explanation: 'Comfortably placed or well situated.',
        origin: 'English',
    },
    {
        '': 1817,
        text: 'Sixes and sevens - At',
        explanation:
            'A state of confusion and disorder, or of disagreement between parties.',
        origin: 'English',
    },
    {
        '': 1818,
        text: 'Skeleton in the closet',
        explanation:
            "The expression 'a skeleton in the closet' refers to a secret source of shame, potentially ruinous if exposed, which a person or family makes efforts to conceal.",
        origin: 'English',
    },
    {
        '': 1819,
        text: 'Skid row',
        explanation:
            'A squalid district inhabited by the impoverished and destitute.',
        origin: 'English',
    },
    {
        '': 1820,
        text: 'Skin and blister',
        explanation: 'Sister.',
        origin: 'English',
    },
    {
        '': 1821,
        text: '(By the) skin of your teeth',
        explanation:
            'Narrowly; barely. Usually used in regard to a narrow escape from a disaster.',
        origin: 'English',
    },
    {
        '': 1822,
        text: "(The) sky's the limit",
        explanation: 'There is no apparent limit.',
        origin: 'English',
    },
    {
        '': 1823,
        text: 'Sledgehammer to crack a nut - A',
        explanation:
            "To use 'a sledgehammer to crack a nut' means to use disproportionate force or expense to overcome a minor problem.",
        origin: 'English',
    },
    {
        '': 1824,
        text: 'Sleep like a top',
        explanation: 'To sleep like a top is to sleep very soundly.',
        origin: 'English',
    },
    {
        '': 1825,
        text: 'Sleep on a clothesline',
        explanation: 'To sleep on a clothesline is to sleep very soundly.',
        origin: 'English',
    },
    {
        '': 1826,
        text: 'Sleep tight',
        explanation: "To 'sleep tight' is to sleep well and undisturbed.",
        origin: 'English',
    },
    {
        '': 1827,
        text: 'Sleeveless errand',
        explanation: 'A pointless undertaking.',
        origin: 'English',
    },
    {
        '': 1828,
        text: 'Sloane Ranger',
        explanation:
            'Sloane Rangers, or latterly just Sloanes or Sloanies are upper class and fashion-conscious but conventional young people, living in the more expensive parts of West London.',
        origin: 'English',
    },
    {
        '': 1829,
        text: 'Slush fund',
        explanation:
            'Money put aside to be used to bribe or influence, especially in a political context.',
        origin: 'English',
    },
    {
        '': 1830,
        text: 'Smallest room in the house - The',
        explanation: 'A euphemistic\nreference to a lavatory.',
        origin: 'English',
    },
    {
        '': 1831,
        text: 'Smart casual',
        explanation:
            'Smart but informal clothing. Conforming to a dress code but not uncomfortably so.',
        origin: 'English',
    },
    {
        '': 1832,
        text: 'Smoke and mirrors',
        explanation: 'Trickery or deception, often in a political context.',
        origin: 'English',
    },
    {
        '': 1833,
        text: 'Snug as a bug in a rug',
        explanation:
            "To be 'as snug as a bug in a rug' is to be very comfortable and cosy.",
        origin: 'English',
    },
    {
        '': 1834,
        text: 'So sue me',
        explanation:
            'A defiant challenge for an adversary to escalate a dispute.',
        origin: 'English',
    },
    {
        '': 1835,
        text: 'Soap-dodger',
        explanation: 'A scruffy or dirty person; one who washes rarely.',
        origin: 'English',
    },
    {
        '': 1836,
        text: "Sod's Law",
        explanation:
            "The so-called law is usually expressed as 'If anything can go wrong, it will'.",
        origin: 'English',
    },
    {
        '': 1837,
        text: 'Sold down the river',
        explanation: 'Betrayed or cheated.',
        origin: 'English',
    },
    {
        '': 1838,
        text: "Some are born great, some achieve greatness, and some have greatness thrust upon 'em",
        explanation: 'Literal meaning',
        origin: 'English',
    },
    {
        '': 1839,
        text: 'Some men are born mediocre, some men achieve mediocrity, and some men, have mediocrity thrust upon them',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1840,
        text: 'Someone is walking over my grave',
        explanation: 'A response to a sudden unexplained shudder or shivering.',
        origin: 'English',
    },
    {
        '': 1841,
        text: 'Something for the weekend sir?',
        explanation: 'A coy query asking if a customer wanted to buy a condom.',
        origin: 'English',
    },
    {
        '': 1842,
        text: 'Something nasty in the woodshed',
        explanation:
            "'Something nasty in the woodshed' is a traumatic but unspecified incident in someone's experience, or something  shocking or distasteful that has been  kept secret.",
        origin: 'English',
    },
    {
        '': 1843,
        text: 'Something old, something new, something borrowed, something blue',
        explanation:
            'The collection of items that is considered lucky for a bride to take to her wedding.',
        origin: 'English',
    },
    {
        '': 1844,
        text: 'Son of a bitch',
        explanation: 'A general term of abuse for a man.',
        origin: 'English',
    },
    {
        '': 1845,
        text: 'Son of a gun',
        explanation:
            "A 'son of a gun' is a rogue or scamp - \"you are naughty, you old son of a gun\". The phrase is also used, although this is uncommon outside the USA, as a euphemism for 'son of a bitch'.",
        origin: 'English',
    },
    {
        '': 1846,
        text: 'Sorry sight',
        explanation:
            'A regrettable and unwelcome aspect or feature. Now also used to mean something or someone of untidy appearance.',
        origin: 'English',
    },
    {
        '': 1847,
        text: 'Sound bite',
        explanation:
            'A short and easily remembered line, intended by the speaker to be suitable for media repetition.',
        origin: 'English',
    },
    {
        '': 1848,
        text: 'Sound out',
        explanation: "To shirk one's labour; to malinger.",
        origin: 'English',
    },
    {
        '': 1849,
        text: 'Sour grapes',
        explanation: 'Acting meanly after a disappointment.',
        origin: 'English',
    },
    {
        '': 1850,
        text: 'Space, the final frontier',
        explanation: 'The first line of the opening voice-over in Star Trek',
        origin: 'English',
    },
    {
        '': 1851,
        text: 'Spare the rod and spoil the child',
        explanation:
            "'Spare the rod and spoil the child' is the notion that children will become weak and vulnerable if not chastised, physically or otherwise, for any wrongdoing.",
        origin: 'English',
    },
    {
        '': 1852,
        text: 'Speak of the Devil',
        explanation:
            'A reference to someone who appears unexpectedly while being talked about.',
        origin: 'English',
    },
    {
        '': 1853,
        text: 'Speak softly and carry a big stick',
        explanation:
            "'Speak softly and carry a big stick' is a proverbial saying advising the tactic of caution and non-aggression, backed up by the ability to carry out violent action if required.",
        origin: 'English',
    },
    {
        '': 1854,
        text: 'Special relationship',
        explanation: 'The relationship between the United Kingdom and the USA.',
        origin: 'English',
    },
    {
        '': 1855,
        text: 'Spelling-bee',
        explanation: 'A spelling contest.',
        origin: 'English',
    },
    {
        '': 1856,
        text: 'Spend a penny',
        explanation: 'To use a public lavatory.',
        origin: 'English',
    },
    {
        '': 1857,
        text: 'Spick and span',
        explanation: 'Entirely new - fresh or unused.',
        origin: 'English',
    },
    {
        '': 1858,
        text: 'Spill the beans',
        explanation:
            'To divulge a secret, especially to do so inadvertently or maliciously.',
        origin: 'English',
    },
    {
        '': 1859,
        text: 'Spin doctor',
        explanation:
            "A 'spin doctor' is a political press agent or publicist employed to promote a favourable interpretation of events to journalists.",
        origin: 'English',
    },
    {
        '': 1860,
        text: 'Spitting feathers',
        explanation: 'Various meanings; see below.',
        origin: 'English',
    },
    {
        '': 1861,
        text: 'Spitting image',
        explanation: 'The exact likeness.',
        origin: 'English',
    },
    {
        '': 1862,
        text: 'Spoonerisms',
        explanation:
            'A Spoonerism is a word or phrase that is formed by transposing the initial sounds of two or more other words.',
        origin: 'English',
    },
    {
        '': 1863,
        text: 'Spring forward, fall back',
        explanation:
            "'Spring forward, fall back' is a mnemonic relating to Daylight Saving Time, indicating that clocks are moved  forward an hour in spring and  back an hour in autumn.",
        origin: 'English',
    },
    {
        '': 1864,
        text: 'Spruce-up',
        explanation: 'To make smart and trim.',
        origin: 'English',
    },
    {
        '': 1865,
        text: 'Square meal',
        explanation: 'A\nsubstantial, nourishing meal.',
        origin: 'English',
    },
    {
        '': 1866,
        text: 'Squeaky bum time',
        explanation: 'The tense, final stages of a competition.',
        origin: 'English',
    },
    {
        '': 1867,
        text: 'Stand and deliver',
        explanation:
            'A demand for money, often associated with English highwaymen.',
        origin: 'English',
    },
    {
        '': 1868,
        text: 'Stand up guy',
        explanation: 'A loyal and\nreliable friend.',
        origin: 'English',
    },
    {
        '': 1869,
        text: 'Standing on the shoulders of giants',
        explanation:
            'Using the understanding gained by major thinkers who have gone before in order to make intellectual progress.',
        origin: 'English',
    },
    {
        '': 1870,
        text: 'Star-crossed lovers',
        explanation:
            'Star-crossed means unlucky, that is, not favoured by the stars.',
        origin: 'English',
    },
    {
        '': 1871,
        text: 'Stark, raving mad',
        explanation: 'Completely mad; delirious.',
        origin: 'English',
    },
    {
        '': 1872,
        text: 'Stars and garters - My',
        explanation: 'A jocular exclamation or expression of astonishment.',
        origin: 'English',
    },
    {
        '': 1873,
        text: 'Start from scratch',
        explanation:
            'Begin (again) from the beginning, embark on something without any preparation or advantage.',
        origin: 'English',
    },
    {
        '': 1874,
        text: 'Steal a march',
        explanation: 'Gain an advantage over an opponent.',
        origin: 'English',
    },
    {
        '': 1875,
        text: 'Steal my thunder',
        explanation:
            "Someone 'steals your thunder' when they use your ideas or inventions to their own advantage.",
        origin: 'English',
    },
    {
        '': 1876,
        text: 'Step up to the plate',
        explanation:
            "'Step up to the plate' is an expression used in baseball, meaning 'enter the batter's box to take a turn to bat'.",
        origin: 'English',
    },
    {
        '': 1877,
        text: 'Stick in the mud',
        explanation:
            'A narrow-minded or unprogressive person; one who lacks initiative',
        origin: 'English',
    },
    {
        '': 1878,
        text: 'Sticks and stones may break my bones',
        explanation:
            '\'Sticks and stones may break my bones\' is a response to an insult, implying that "You might be hurt able to hurt me by physical force but not by insults".',
        origin: 'English',
    },
    {
        '': 1879,
        text: 'Sticky wicket',
        explanation: 'A\ndifficult situation.',
        origin: 'English',
    },
    {
        '': 1880,
        text: 'Stiff upper lip',
        explanation:
            'Remain resolute and unemotional in the face of adversity, or even tragedy.',
        origin: 'English',
    },
    {
        '': 1881,
        text: 'Stiffen the sinews',
        explanation:
            "To stiffen the sinews is to, by one's own efforts, become resolute and purposeful. The sinews are the fibrous cords that connect bone to muscle - we stiffen them when we prepare for action.",
        origin: 'English',
    },
    {
        '': 1882,
        text: 'Stinking rich',
        explanation: 'Extremely, offensively rich',
        origin: 'English',
    },
    {
        '': 1883,
        text: 'Stitch in time saves nine - A',
        explanation:
            "A 'stitch in time' is a timely effort that will prevent more work later.",
        origin: 'English',
    },
    {
        '': 1884,
        text: 'Stone the crows',
        explanation: 'An exclamation of incredulity or annoyance.',
        origin: 'English',
    },
    {
        '': 1885,
        text: "Stone's throw",
        explanation: 'A\nshort distance.',
        origin: 'English',
    },
    {
        '': 1886,
        text: 'Stony-hearted',
        explanation: 'Cruel and unfeeling.',
        origin: 'English',
    },
    {
        '': 1887,
        text: 'Stool pigeon',
        explanation:
            "The literal meaning of a stool pigeon is a  decoy bird. In the more common figurative meaning a stool pigeon is  a police informer, or criminal's look-out.",
        origin: 'English',
    },
    {
        '': 1888,
        text: 'Storm in a teacup',
        explanation:
            'A tempest in a teapot is a small or insignificant event that is over-reacted to, as if it were of considerably more consequence.',
        origin: 'English',
    },
    {
        '': 1889,
        text: 'Straight as a die',
        explanation: 'Completely straight.',
        origin: 'English',
    },
    {
        '': 1890,
        text: "Straight from the horse's mouth",
        explanation: 'From the highest authority.',
        origin: 'English',
    },
    {
        '': 1891,
        text: 'Strain at the leash',
        explanation:
            "To strain at the leash is to be enthusiastic to free oneself from the restrictions that bar one's progress.",
        origin: 'English',
    },
    {
        '': 1892,
        text: 'Strait-laced',
        explanation:
            "Excessively rigid  in matters of conduct; narrow or over-precise in one's behaviour or moral judgement.",
        origin: 'English',
    },
    {
        '': 1893,
        text: 'Strait and narrow',
        explanation: 'A conventional and law-abiding course.',
        origin: 'English',
    },
    {
        '': 1894,
        text: 'Stranger danger',
        explanation:
            'A slogan, intended to alert children to the risks posed by people they do not know.',
        origin: 'English',
    },
    {
        '': 1895,
        text: 'Stranger than fiction - Truth is',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1896,
        text: 'Strike while the iron is hot',
        explanation:
            'To strike while the iron is hot is to act decisively and take an opportunity when it arises.',
        origin: 'English',
    },
    {
        '': 1897,
        text: 'Stuff and nonsense',
        explanation:
            'Rubbish, nonsense. Also used, although less often in recent years, as an exclamation of incredulity.',
        origin: 'English',
    },
    {
        '': 1898,
        text: 'Stump up',
        explanation: 'Pay for a purchase.',
        origin: 'English',
    },
    {
        '': 1899,
        text: 'Such is life',
        explanation:
            'An acceptance of the unpredictable fortunes of existence, often spoken with an air of weary resignation.',
        origin: 'English',
    },
    {
        '': 1900,
        text: 'Surf and turf',
        explanation:
            'A type of cuisine that combines both meat and seafood (especially lobster and steak), or restaurants that serve such cuisine.',
        origin: 'English',
    },
    {
        '': 1901,
        text: 'Surfing the Net/surfing the Internet/surfing the Web',
        explanation:
            'Surfing (a.k.a. surfboarding) is, in its literal meaning, the riding of a wave while standing or lying on a surfboard.',
        origin: 'English',
    },
    {
        '': 1902,
        text: 'Survival of the fittest',
        explanation:
            'The idea that species adapt and change by natural selection with the best suited mutations becoming dominant.',
        origin: 'English',
    },
    {
        '': 1903,
        text: 'Suspension of disbelief',
        explanation:
            'The temporary acceptance as believable of events or characters that would ordinarily be seen as incredible. This is usually to allow an audience to appreciate works of literature or drama that are exploring unusual ideas.',
        origin: 'English',
    },
    {
        '': 1904,
        text: 'Swan song',
        explanation:
            'A\n          swan song is a final composition or performance, given before dying or retirement.',
        origin: 'English',
    },
    {
        '': 1905,
        text: 'Sweet Fanny Adams',
        explanation: 'Nothing.',
        origin: 'English',
    },
    {
        '': 1906,
        text: 'Swing for you',
        explanation:
            'I will kill you and am prepared to be hanged as a consequence", or "I will swing a punch at you".',
        origin: 'English',
    },
    {
        '': 1907,
        text: 'Swing the lead',
        explanation: "To shirk one's labour; to malinger.",
        origin: 'English',
    },
    {
        '': 1908,
        text: 'Tail wagging the dog - The',
        explanation: 'An item of minor importance dominating a situation.',
        origin: 'English',
    },
    {
        '': 1909,
        text: 'Take a back seat',
        explanation:
            "To 'take a back seat' is take a subordinate or reclusive position.",
        origin: 'English',
    },
    {
        '': 1910,
        text: 'Take care of the pence and the pounds will take care of themselves',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1911,
        text: 'Take down a peg or two',
        explanation:
            "To 'take (or pull, or bring) down a peg (or two)' is to lower someone's high opinion of themselves.",
        origin: 'English',
    },
    {
        '': 1912,
        text: 'Take potluck',
        explanation:
            "Take one's chance as to what meal one is served when accepting another's hospitality. Also, in the USA, potluck is the name of a communal meal, in which participants each bring a dish to be shared.",
        origin: 'English',
    },
    {
        '': 1913,
        text: 'Take the bit between your teeth',
        explanation: 'Take control of a situation.',
        origin: 'English',
    },
    {
        '': 1914,
        text: 'Take the cake',
        explanation:
            "Carry off the honours. Sometimes used to express incredulity; for example, \"That's three goals he's missed in one game. If that don't take the cake...\".",
        origin: 'English',
    },
    {
        '': 1915,
        text: 'Take the gilt off the gingerbread',
        explanation: "Remove an item's most attractive qualities.",
        origin: 'English',
    },
    {
        '': 1916,
        text: 'Take the Mickey',
        explanation: 'Tease or make fun of.',
        origin: 'English',
    },
    {
        '': 1917,
        text: 'Take the upper hand',
        explanation: 'Take a dominant position.',
        origin: 'English',
    },
    {
        '': 1918,
        text: 'Take umbrage',
        explanation: 'To be displeased or offended by the actions of others.',
        origin: 'English',
    },
    {
        '': 1919,
        text: 'Take with a grain of salt',
        explanation:
            "To take a statement with 'a grain of salt' (or 'a pinch of salt') means to accept it while maintaining a degree of scepticism about its truth.",
        origin: 'English',
    },
    {
        '': 1920,
        text: 'Taken aback',
        explanation:
            'To be taken aback is to be surprised or startled by a sudden turn of events.',
        origin: 'English',
    },
    {
        '': 1921,
        text: 'Taken for a ride',
        explanation:
            "To be 'taken for a ride' is to be deliberately misled or cheated. Alternatively, and primarily in the USA, it means to be  abducted in a vehicle and murdered.",
        origin: 'English',
    },
    {
        '': 1922,
        text: 'Talk of the Devil',
        explanation:
            'A reference to someone who appears unexpectedly while being talked about.',
        origin: 'English',
    },
    {
        '': 1923,
        text: 'Talk the talk',
        explanation: "Back up one's talk with action.",
        origin: 'English',
    },
    {
        '': 1924,
        text: "Talk through one's hat",
        explanation:
            'Talk nonsense; especially on a subject that one professes to be knowledgeable about but in fact is ignorant of.',
        origin: 'English',
    },
    {
        '': 1925,
        text: 'Talk to the hand',
        explanation:
            "(With outstretched vertical palm) Shut up - I've no interest in hearing what you've got to say.",
        origin: 'English',
    },
    {
        '': 1926,
        text: 'Tall story',
        explanation: 'An untrue and unbelievable story.',
        origin: 'English',
    },
    {
        '': 1927,
        text: "Tanstaafl - (there's no such thing as a free lunch)",
        explanation:
            "The economic theory, and also the lay opinion, that whatever goods and services are provided, they must be paid for by someone - that is, you don't get something for nothing. The phrase is also known by the acronym of 'there ain't no such thing as a free lunch' - tanstaafl.",
        origin: 'English',
    },
    {
        '': 1928,
        text: 'Tattoo phrases and sayings',
        explanation:
            'Almost all examples of the written word are found on paper. Until the late 20th century, the only significant alternative was on gravestones. We can now add another source - tattoos.',
        origin: 'English',
    },
    {
        '': 1929,
        text: 'Tawdry',
        explanation: 'Showy, but of poor quality.',
        origin: 'English',
    },
    {
        '': 1930,
        text: 'Tea leaf',
        explanation: 'Thief.',
        origin: 'English',
    },
    {
        '': 1931,
        text: 'Technicolor yawn',
        explanation: 'Vomiting.',
        origin: 'English',
    },
    {
        '': 1932,
        text: 'Tell it to the marines',
        explanation: 'A scornful response to a tall and unbelieved story.',
        origin: 'English',
    },
    {
        '': 1933,
        text: 'Tell me about it',
        explanation:
            "'Tell me about it' is a lighthearted, rueful response used when someone wants to say \"I'm well aware of that; you don't have to tell me.\".",
        origin: 'English',
    },
    {
        '': 1934,
        text: 'Tempest in a teapot',
        explanation:
            'A tempest in a teapot is a small or insignificant event that is over-reacted to, as if it were of considerably more consequence.',
        origin: 'English',
    },
    {
        '': 1935,
        text: 'Test your mettle - see show your mettle',
        explanation: 'Demonstrate your true character.',
        origin: 'English',
    },
    {
        '': 1936,
        text: "That's all folks!",
        explanation:
            'The catchphrase on the\nbanner shown at the end of Looney Tunes cartoons.',
        origin: 'English',
    },
    {
        '': 1937,
        text: "That's all she wrote",
        explanation:
            "An articulation of a sudden and unforeseen  end to one's hopes or plans.",
        origin: 'English',
    },
    {
        '': 1938,
        text: "That's one small step for a man, a giant leap for mankind",
        explanation:
            "These were Neil\nArmstrong's words on first setting foot on the moon in 1969. The line is a strong contender as the most famous  ever to have been uttered.",
        origin: 'English',
    },
    {
        '': 1939,
        text: "The ants are my friends, they're blowing in the wind",
        explanation: 'Misheard lyric.',
        origin: 'English',
    },
    {
        '': 1940,
        text: 'The apple never falls far from the tree',
        explanation:
            "The proverbial saying 'the apple never falls far from the tree', or 'the apple doesn't fall far from the tree' expresses the idea that a person inevitably shares traits with or resembles his or her parents or family..",
        origin: 'English',
    },
    {
        '': 1941,
        text: 'The apple of my eye',
        explanation:
            "The apple of one's eye originally referred to the central aperture of the eye. Figuratively it is something, or more usually someone, cherished above others.",
        origin: 'English',
    },
    {
        '': 1942,
        text: 'The back of beyond',
        explanation: 'A lonely forsaken place.',
        origin: 'English',
    },
    {
        '': 1943,
        text: 'The balance of power',
        explanation:
            'The\ndistribution of power between nations in such a way that no single state has dominance\nover the others.',
        origin: 'English',
    },
    {
        '': 1944,
        text: 'The balance of trade',
        explanation:
            'The\ndifference between the value of the imports and exports that a nation makes.',
        origin: 'English',
    },
    {
        '': 1945,
        text: 'The bane of my life',
        explanation: 'The agent of ruin or woe.',
        origin: 'English',
    },
    {
        '': 1946,
        text: "The bee's knees",
        explanation:
            "If something is said to be the bee's knees it is excellent - the highest quality.",
        origin: 'English',
    },
    {
        '': 1947,
        text: 'The belle of the ball',
        explanation: 'The most attractive woman at a social gathering.',
        origin: 'English',
    },
    {
        '': 1948,
        text: 'The best  defense is a good offence',
        explanation:
            "The proverbial phrase 'attack is the best form of defence' expresses the opinion that a pre-emptive strike is the best way to defend yourself.",
        origin: 'English',
    },
    {
        '': 1949,
        text: 'The best laid schemes of mice and men',
        explanation: 'The most carefully prepared plans may go wrong.',
        origin: 'English',
    },
    {
        '': 1950,
        text: 'The Big Apple',
        explanation: 'Nickname\nfor New York, USA.',
        origin: 'English',
    },
    {
        '': 1951,
        text: 'The Big Easy',
        explanation:
            'Nickname\nfor New Orleans, USA, referring\nto the easy-going, laid back attitude to life that jazz musicians and local residents indulge in there.',
        origin: 'English',
    },
    {
        '': 1952,
        text: 'The birds and the bees',
        explanation:
            "'The birds and the bees' is a  phrase that refers to coy explanations about sex and reproduction that are given to children.",
        origin: 'English',
    },
    {
        '': 1953,
        text: 'The bitter end',
        explanation: "To the\nlimit of one's efforts - to the last extremity.",
        origin: 'English',
    },
    {
        '': 1954,
        text: 'The blind leading the blind',
        explanation:
            'Uninformed\nand incompetent people leading others who are similarly incapable.',
        origin: 'English',
    },
    {
        '': 1955,
        text: 'The bread of life',
        explanation: 'A name used by Christians to denote Jesus Christ.',
        origin: 'English',
    },
    {
        '': 1956,
        text: 'The buck stops here',
        explanation:
            "The slogan 'The buck stops here' is a promise that responsibility will not be passed on to anyone else.",
        origin: 'English',
    },
    {
        '': 1957,
        text: 'The call of the wild',
        explanation: 'The appeal of nature in the raw.',
        origin: 'English',
    },
    {
        '': 1958,
        text: 'The camera cannot lie',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1959,
        text: 'The chickens come home to roost',
        explanation:
            'Bad deeds or words return to discomfort their perpetrator.',
        origin: 'English',
    },
    {
        '': 1960,
        text: 'The child is father to the man',
        explanation:
            "The proverb 'The child is father to the man' expresses the idea that the character that we form as children stays with us into our adult life.",
        origin: 'English',
    },
    {
        '': 1961,
        text: 'The collywobbles',
        explanation:
            "A\nstate of intestinal disorder, usually accompanied by a rumbling stomach; for example, 'butterflies in the stomach'.",
        origin: 'English',
    },
    {
        '': 1962,
        text: 'The course of true love never did run smooth',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 1963,
        text: 'The crack of doom',
        explanation:
            'The sound that heralds the day of the Last Judgment, when God will decree the fates of all men according to the good and evil of their earthly lives.',
        origin: 'English',
    },
    {
        '': 1964,
        text: 'The Crapper',
        explanation: 'The\n lavatory.',
        origin: 'English',
    },
    {
        '': 1965,
        text: 'The customer is always right',
        explanation:
            "'The customer is always right' is a trading slogan that states a company's keenness to be seen to put the customer first. The implied suggestion is that the company is so customer focussed that they will say the customer is right, even if they aren't.",
        origin: 'English',
    },
    {
        '': 1966,
        text: 'The cut of your jib',
        explanation: "One's general appearance and demeanour.",
        origin: 'English',
    },
    {
        '': 1967,
        text: 'The dark side',
        explanation:
            'The evil and malevolent aspect of human personality or society, often referred to in a lighthearted or comic context.',
        origin: 'English',
    },
    {
        '': 1968,
        text: 'The darkest hour is just before the dawn',
        explanation: 'There is hope, even in the worst of circumstances.',
        origin: 'English',
    },
    {
        '': 1969,
        text: 'The Devil has all the best tunes',
        explanation:
            "'The Devil has all the best tunes' is the view that  music, especially popular music, is predominantly secular rather than religious.",
        origin: 'English',
    },
    {
        '': 1970,
        text: 'The Devil Incarnate',
        explanation: 'The Devil in human form.',
        origin: 'English',
    },
    {
        '': 1971,
        text: 'The Devil is in the details',
        explanation:
            'The details of a plan, while seeming insignificant, may contain hidden  problems that threaten its overall feasibility.',
        origin: 'English',
    },
    {
        '': 1972,
        text: 'The Devil makes work for idle hands to do',
        explanation:
            "'The devil makes work for idle hands' is one of the numerous variants of phrase that express the idea that trouble or evil arises from not keeping  busy.",
        origin: 'English',
    },
    {
        '': 1973,
        text: 'The Devil take the hindmost',
        explanation:
            'A proverbial phrase indicating that those who lag behind will receive no aid.',
        origin: 'English',
    },
    {
        '': 1974,
        text: 'The Devil to pay',
        explanation:
            "'The devil to pay' means serious trouble because of a particular circumstance or obligation.",
        origin: 'English',
    },
    {
        '': 1975,
        text: 'The die has been cast',
        explanation:
            "'The die has been cast' means that an\nirrevocable choice has been made.",
        origin: 'English',
    },
    {
        '': 1976,
        text: 'The early bird catches the worm',
        explanation:
            'Success comes to those who prepare well and put in effort.',
        origin: 'English',
    },
    {
        '': 1977,
        text: 'The elephant in the room',
        explanation:
            "An important and obvious topic, which everyone present is aware of, but which isn't discussed, as such discussion is considered to be uncomfortable.",
        origin: 'English',
    },
    {
        '': 1978,
        text: "The emperor's new clothes",
        explanation:
            'The label given to any fictional item that viewers have been induced into believing as real..',
        origin: 'English',
    },
    {
        '': 1979,
        text: 'The ends of the earth',
        explanation: 'The furthest reaches of the land.',
        origin: 'English',
    },
    {
        '': 1980,
        text: 'The exception which proves the rule',
        explanation:
            "Normally with these meanings and origins the meaning is well-understood or self-evident and the interesting aspect is how, where and when the phrase originated. This one is a little different - it's the meaning that is generally not understood.",
        origin: 'English',
    },
    {
        '': 1981,
        text: 'The face that launched a thousand ships',
        explanation:
            'A reference to the mythological figure Helen of Troy (or some would say, to Aphrodite). Her abduction by Paris was said to be the reason for a fleet of a thousand ships to be launched into battle, initiating the Trojan Wars.',
        origin: 'English',
    },
    {
        '': 1982,
        text: 'The fat of the land',
        explanation: 'Living well; fed by abundant crops.',
        origin: 'English',
    },
    {
        '': 1983,
        text: 'The female of the species is more deadly then the male',
        explanation: 'See also: the List of Proverbs.',
        origin: 'English',
    },
    {
        '': 1984,
        text: 'The fifth estate',
        explanation: 'The fifth power in the land.',
        origin: 'English',
    },
    {
        '': 1985,
        text: 'The floozie in the jacuzzi',
        explanation:
            "The floozie (or floosie or floozy) in the jacuzzi is the nickname of the bronze statue, properly called Anna Livia, previously in O'Connell Street, Dublin, Ireland. It personifies the River Liffey, which passes nearby.",
        origin: 'English',
    },
    {
        '': 1986,
        text: 'The fly in the ointment',
        explanation:
            'A fly in the ointment is a small but irritating flaw that spoils the whole. In the 20th century the expression has also come to be used to describe a small flaw that comes to light to spoil  an otherwise faultless plan.',
        origin: 'English',
    },
    {
        '': 1987,
        text: 'The full monty',
        explanation: 'Complete, the whole thing.',
        origin: 'English',
    },
    {
        '': 1988,
        text: 'The game is afoot',
        explanation:
            "The phrase 'the game is afoot' means 'the process is underway'; for example, 'The teams are on the pitch - the whistle blows - the game is afoot.'",
        origin: 'English',
    },
    {
        '': 1989,
        text: 'The game is up',
        explanation:
            "The original meaning was 'the game is over - all is lost'. More recently it has come to be used to mean ' we have seen through your tricks - your deceit is exposed'.",
        origin: 'English',
    },
    {
        '': 1990,
        text: 'The great unwashed',
        explanation: 'The common, lower classes; the hoi polloi.',
        origin: 'English',
    },
    {
        '': 1991,
        text: 'The hair of the dog that bit you',
        explanation:
            'The hair of the dog is a small measure of drink, intended to cure a hangover.',
        origin: 'English',
    },
    {
        '': 1992,
        text: 'The hairy eyeball',
        explanation:
            'A glance made with partially lowered eyelashes. This usually indicates suspicion or hostility but may signal other emotions too.',
        origin: 'English',
    },
    {
        '': 1993,
        text: 'The heebie-jeebies',
        explanation: 'A feeling of anxiety, apprehension or illness.',
        origin: 'English',
    },
    {
        '': 1994,
        text: 'The jury is still out',
        explanation:
            'Judgement has not yet been finalised on a particular subject; especially due to information being incomplete.',
        origin: 'English',
    },
    {
        '': 1995,
        text: 'The land of nod',
        explanation:
            'The Land of Nod is a mythical  land where we travel to to sleep.',
        origin: 'English',
    },
    {
        '': 1996,
        text: 'The last straw',
        explanation:
            "The final additional small burden that makes the entirety of one's difficulties unbearable.",
        origin: 'English',
    },
    {
        '': 1997,
        text: 'The law is an ass',
        explanation:
            'Said of the application of the law that is contrary to common sense.',
        origin: 'English',
    },
    {
        '': 1998,
        text: 'The life of Riley',
        explanation: "'The life of Riley' is an easy and pleasant life.",
        origin: 'English',
    },
    {
        '': 1999,
        text: 'The living daylights',
        explanation:
            'To beat the living daylights out of someone is to beat them severely, to the point where they lose consciousness.',
        origin: 'English',
    },
    {
        '': 2000,
        text: 'The love that dare not speak its name',
        explanation:
            'A reference to homosexual love, although Oscar Wilde\n denied this in his defense of the charge of gross indecency.',
        origin: 'English',
    },
    {
        '': 2001,
        text: 'The monstrous regiment of women',
        explanation:
            'A disparaging description, often used to describe feminist or rowdy women by their detractors.',
        origin: 'English',
    },
    {
        '': 2002,
        text: 'The more the merrier',
        explanation:
            'The more people who are present, the better an occasion or situation (especially a party) will be.',
        origin: 'English',
    },
    {
        '': 2003,
        text: 'The moving finger writes',
        explanation:
            "The phrase 'The moving finger writes...' expresses the notion that whatever one does in one's life is one's own responsibility and cannot be changed.",
        origin: 'English',
    },
    {
        '': 2004,
        text: "The mutt's nuts",
        explanation: 'Excellent\n- the highest quality.',
        origin: 'English',
    },
    {
        '': 2005,
        text: 'The nth degree',
        explanation: 'To the utmost degree; without limit.',
        origin: 'English',
    },
    {
        '': 2006,
        text: "The opera ain't over till the fat lady sings",
        explanation:
            'Nothing is irreversible until the final act is played out.',
        origin: 'English',
    },
    {
        '': 2007,
        text: 'The pen is mightier than the sword',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 2008,
        text: 'The pip - Get/got/have',
        explanation: 'Become irritated or annoyed.',
        origin: 'English',
    },
    {
        '': 2009,
        text: 'The pot calling the kettle black',
        explanation:
            "'The pot calling the kettle black' is a response often given when someone  criticises  another for a fault they also  have themselves.",
        origin: 'English',
    },
    {
        '': 2010,
        text: 'The powers that be',
        explanation: 'The established government or authority.',
        origin: 'English',
    },
    {
        '': 2011,
        text: 'The proof of the pudding is in the eating',
        explanation:
            'To fully judge how effective something is you need to use it for its intended purpose.',
        origin: 'English',
    },
    {
        '': 2012,
        text: 'The quick and the dead',
        explanation: 'All souls - alive or dead.',
        origin: 'English',
    },
    {
        '': 2013,
        text: 'The real McCoy',
        explanation: 'The real thing - not a substitute.',
        origin: 'English',
    },
    {
        '': 2014,
        text: 'The road less travelled',
        explanation:
            "The road less travelled is the \n          unconventional or uninvestigated option. More metaphorically, it is also used to refer to 'the life you never had' - what might have been had you  made different choices. The notion is near\n          to what is nowadays called 'alternative'.",
        origin: 'English',
    },
    {
        '': 2015,
        text: 'The road to hell is paved with good intentions',
        explanation:
            'The intention to engage in good acts often fails. It points up the principle that there is no merit in good intentions unless they are acted on.',
        origin: 'English',
    },
    {
        '': 2016,
        text: 'The salt of the earth',
        explanation:
            "People who are described as 'the salt of the earth' are those who are considered to be of great worth and reliability.",
        origin: 'English',
    },
    {
        '': 2017,
        text: 'The seven-year itch',
        explanation:
            'The inclination to become unfaithful after seven years of marriage.',
        origin: 'English',
    },
    {
        '': 2018,
        text: 'The shoemaker always wears the worst shoes',
        explanation:
            'Artisans work for the wealthy but cannot afford their own produce.',
        origin: 'English',
    },
    {
        '': 2019,
        text: 'The short end of the stick',
        explanation:
            'To get the short end of the stick is to come off worst in a bargain or contest.',
        origin: 'English',
    },
    {
        '': 2020,
        text: "The shot heard 'round the world",
        explanation:
            "A line from Emerson's Concord Hymn. Later used to denote shots of various forms that had international significance.",
        origin: 'English',
    },
    {
        '': 2021,
        text: "The sky's the limit",
        explanation: 'There is no apparent limit.',
        origin: 'English',
    },
    {
        '': 2022,
        text: 'The smallest room in the house',
        explanation: 'A euphemistic\nreference to a lavatory.',
        origin: 'English',
    },
    {
        '': 2023,
        text: "The straw that broke the camel's back",
        explanation:
            "The final additional small burden that makes the entirety of one's difficulties unbearable.",
        origin: 'English',
    },
    {
        '': 2024,
        text: 'The tail wagging the dog',
        explanation: 'An item of minor importance dominating a situation.',
        origin: 'English',
    },
    {
        '': 2025,
        text: 'The toast of the town',
        explanation: 'A person who is widely admired.',
        origin: 'English',
    },
    {
        '': 2026,
        text: 'The third degree',
        explanation: 'Close interrogation.',
        origin: 'English',
    },
    {
        '': 2027,
        text: 'The triumph of hope over experience',
        explanation: 'A literal view of the subject of remarriage.',
        origin: 'English',
    },
    {
        '': 2028,
        text: 'The upper hand',
        explanation: 'Take a dominant position.',
        origin: 'English',
    },
    {
        '': 2029,
        text: 'The usual suspects',
        explanation:
            'The usual suspects" are the people habitually suspected or arrested following a crime.',
        origin: 'English',
    },
    {
        '': 2030,
        text: 'The whole kit and caboodle',
        explanation: 'A collection of things.',
        origin: 'English',
    },
    {
        '': 2031,
        text: 'The whole nine yards',
        explanation:
            "The expression 'the whole nine yards' means 'all of it - the full measure'.",
        origin: 'English',
    },
    {
        '': 2032,
        text: 'The whole shebang',
        explanation: 'All of it; the whole thing.',
        origin: 'English',
    },
    {
        '': 2033,
        text: 'The writing is on the wall',
        explanation:
            "The expression 'the writing is on the wall' is used whenever an inevitable result or imminent  danger has become apparent.",
        origin: 'English',
    },
    {
        '': 2034,
        text: 'The wrong side of the blanket',
        explanation:
            "The expression 'born on the wrong side of the blanket' is a euphemism for being born out of wedlock.",
        origin: 'English',
    },
    {
        '': 2035,
        text: 'The year dot',
        explanation: 'A very long time ago; too long ago to be dated.',
        origin: 'English',
    },
    {
        '': 2036,
        text: 'The Yellow Peril',
        explanation:
            'The supposed danger of Oriental hordes overwhelming the West.',
        origin: 'English',
    },
    {
        '': 2037,
        text: 'There is more than one way to kill a cat',
        explanation:
            "The proverbial saying 'There is more than one way to skin a cat' means there is more than one way of achieving an aim.",
        origin: 'English',
    },
    {
        '': 2038,
        text: 'There are three kinds of lies...',
        explanation:
            'This saying has a literal meaning. It suggests that statisyics can be used to mislead even more than the worst form of untruth.',
        origin: 'English',
    },
    {
        '': 2039,
        text: 'There but for the grace of God, go I',
        explanation:
            "I too, like someone seen to have suffered misfortune, might have suffered a similar fate, but for God's mercy.",
        origin: 'English',
    },
    {
        '': 2040,
        text: 'There is no alternative',
        explanation:
            "This is the mantra chanted by 'dries' during the prime ministerial reign of Margaret Thatcher, by which they demonstrated their belief that free-market capitalism was the only possible economic theory. It was said so often amongst them that it was shortened to TINA. The hard-right Thatcherites called themselves 'dries' to demonstrate their opposition to the 'wets', that is, the One-Nation Tories whom Thatcher despised. Wet was the public school nickname for any boy who showed any sign of caring for his fellow beings.",
        origin: 'English',
    },
    {
        '': 2041,
        text: "There's an R in the month",
        explanation: 'The\nweather is cold.',
        origin: 'English',
    },
    {
        '': 2042,
        text: "There's method in my madness",
        explanation: 'Reason behind apparent folly or disorder.',
        origin: 'English',
    },
    {
        '': 2043,
        text: "There's no fool like an old fool",
        explanation:
            'People of mature years, who are expected to know better, often do outrageously foolish things, especially regarding romantic liaisons.',
        origin: 'English',
    },
    {
        '': 2044,
        text: "There's no place like home",
        explanation: 'Home is the best of all places.',
        origin: 'English',
    },
    {
        '': 2045,
        text: "There's no such thing as a free lunch (Tanstaafl)",
        explanation:
            "The economic theory, and also the lay opinion, that whatever goods and services are provided, they must be paid for by someone - that is, you don't get something for nothing. The phrase is also known by the acronym of 'there ain't no such thing as a free lunch' - tanstaafl.",
        origin: 'English',
    },
    {
        '': 2046,
        text: "There's no such thing as bad publicity",
        explanation:
            "'There is no such thing as bad publicity' is the notion that all mentions in the media aid a person's cause, even if they put them in a bad light.",
        origin: 'English',
    },
    {
        '': 2047,
        text: "There's one (a sucker) born every minute",
        explanation: 'There are many fools and dupes in the world.',
        origin: 'English',
    },
    {
        '': 2048,
        text: "There's one law for the rich and another law for the poor",
        explanation:
            'This proverbial saying express the opinion that the poor are treated harshly by the law whereas the rich, with their access to clever lawyers and bribes, usually escape punishment.',
        origin: 'English',
    },
    {
        '': 2049,
        text: "They couldn't hit an elephant at this distance",
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 2050,
        text: 'Thick and fast',
        explanation:
            "If something comes 'thick and fast' it comes in rapid succession with little time to respond between events. It may refer to physical objects, like raindrops, or non-physical, like commands.",
        origin: 'English',
    },
    {
        '': 2051,
        text: 'Thick and thin',
        explanation: "Through all forms of obstacle that are put in one's way.",
        origin: 'English',
    },
    {
        '': 2052,
        text: '(As) thick as thieves',
        explanation: 'Close friends with; sharing  confidences.',
        origin: 'English',
    },
    {
        '': 2053,
        text: '(As) thick as two short planks',
        explanation: 'Exceedingly stupid.',
        origin: 'English',
    },
    {
        '': 2054,
        text: 'Thin air - Vanish into',
        explanation: 'Disappear without trace.',
        origin: 'English',
    },
    {
        '': 2055,
        text: 'Thing of beauty is a joy forever - A',
        explanation: 'The experience of beauty is blissful and lasting.',
        origin: 'English',
    },
    {
        '': 2056,
        text: 'Things that go bump in the night',
        explanation: 'Frightening but imagined supernatural events.',
        origin: 'English',
    },
    {
        '': 2057,
        text: 'Think outside the box',
        explanation:
            'Think creatively, unimpeded by orthodox or conventional constraints.',
        origin: 'English',
    },
    {
        '': 2058,
        text: 'Thinking cap',
        explanation: 'Take time for consideration of some question.',
        origin: 'English',
    },
    {
        '': 2059,
        text: 'Third degree - The',
        explanation: 'Close interrogation.',
        origin: 'English',
    },
    {
        '': 2060,
        text: 'Third time lucky',
        explanation:
            'The belief that the third time something is attempted is more likely to succeed than the previous two attempts. It is also used as a good luck charm - spoken just before trying something for the third time.',
        origin: 'English',
    },
    {
        '': 2061,
        text: 'Thomas Paine - The writings of',
        explanation: 'NO INFORMATION',
        origin: 'English',
    },
    {
        '': 2062,
        text: 'Thorn in the flesh',
        explanation: 'A persistent difficulty or annoyance.',
        origin: 'English',
    },
    {
        '': 2063,
        text: 'Thou shalt not kill',
        explanation: 'Literal meaning',
        origin: 'English',
    },
    {
        '': 2064,
        text: 'Though this be madness, yet there is method in it',
        explanation: 'Reason behind apparent folly or disorder.',
        origin: 'English',
    },
    {
        '': 2065,
        text: 'Three score and ten',
        explanation:
            "'Three\nscore and ten' is the nominal span of a human life. In the days that this expression was coined that span was considered to be seventy years.",
        origin: 'English',
    },
    {
        '': 2066,
        text: 'Three sheets to the wind',
        explanation: 'Very drunk.',
        origin: 'English',
    },
    {
        '': 2067,
        text: 'Three strikes and you are out',
        explanation:
            'This slogan was used by US President Clinton to publicize his plans for mandatory life sentences for those convicted of a third violent offence.',
        origin: 'English',
    },
    {
        '': 2068,
        text: 'Through thick and thin',
        explanation: "Through all forms of obstacle that are put in one's way.",
        origin: 'English',
    },
    {
        '': 2069,
        text: 'Throw in the towel',
        explanation:
            'To throw in the towel (or, to throw the towel in) is to give up, to avoid further punishment when facing certain defeat.',
        origin: 'English',
    },
    {
        '': 2070,
        text: 'Throw good money after bad',
        explanation:
            "You 'throw good money after bad' when, following the loss of some money, you to incur a further loss in trying to make good.",
        origin: 'English',
    },
    {
        '': 2071,
        text: 'Throw your hat into the ring',
        explanation:
            "Make or take up a challenge, or demonstrate one's willingness to join an enterprise.",
        origin: 'English',
    },
    {
        '': 2072,
        text: 'Thumbs up',
        explanation:
            'A sign of acceptance, approval or encouragement, made with closed fingers and the thumb extended upwards.',
        origin: 'English',
    },
    {
        '': 2073,
        text: 'Thus far into the bowels of the land',
        explanation: 'The dark interior of the earth.',
        origin: 'English',
    },
    {
        '': 2074,
        text: 'Ticked off',
        explanation:
            "Chastised; 'told off', or in a separate US meaning, 'annoyed'. There's also the literal meaning of 'ticked off' - when ticks are placed against a list of items as they are noted.",
        origin: 'English',
    },
    {
        '': 2075,
        text: 'Tickle the ivories',
        explanation: 'Play the piano.',
        origin: 'English',
    },
    {
        '': 2076,
        text: 'Tickled pink',
        explanation: 'Delighted.',
        origin: 'English',
    },
    {
        '': 2077,
        text: 'Tide over',
        explanation:
            'Make a small allowance (of money, food etc.) last until stocks are replenished.',
        origin: 'English',
    },
    {
        '': 2078,
        text: 'Tie the knot',
        explanation: 'Get married.',
        origin: 'English',
    },
    {
        '': 2079,
        text: 'Till the cows come home',
        explanation: 'For a long but indefinite time.',
        origin: 'English',
    },
    {
        '': 2080,
        text: 'Time and tide wait for no man',
        explanation:
            'No one is so powerful that they can stop the march of time.',
        origin: 'English',
    },
    {
        '': 2081,
        text: "Tinker's damn",
        explanation: 'Something that is insignificant or worthless.',
        origin: 'English',
    },
    {
        '': 2082,
        text: 'Tilting at windmills',
        explanation: "To 'tilt at windmills' is to attack imaginary enemies.",
        origin: 'English',
    },
    {
        '': 2083,
        text: 'Tissue of lies',
        explanation: 'A story  invented in order to deceive.',
        origin: 'English',
    },
    {
        '': 2084,
        text: 'Titfer',
        explanation:
            'A blow or some other retaliation in return for an injury from another.',
        origin: 'English',
    },
    {
        '': 2085,
        text: 'Tit for tat',
        explanation:
            'A blow or some other retaliation in return for an injury from another.',
        origin: 'English',
    },
    {
        '': 2086,
        text: 'Tits up',
        explanation:
            "Inoperative; broken. The term is also used to mean fallen over (on one's back)",
        origin: 'English',
    },
    {
        '': 2087,
        text: 'To a T',
        explanation:
            "If something is said to fit 'to a T' it fits exactly; properly; precisely.",
        origin: 'English',
    },
    {
        '': 2088,
        text: 'To all intents and purposes',
        explanation: 'In effect; for all practical purposes.',
        origin: 'English',
    },
    {
        '': 2089,
        text: 'To be or not to be, that is the question',
        explanation:
            "Shakespeare's line 'to be or not to be' is usually interpreted as meaning 'is it better to live or to die'?",
        origin: 'English',
    },
    {
        '': 2090,
        text: 'To beggar belief',
        explanation: 'To defy or go beyond what is believable.',
        origin: 'English',
    },
    {
        '': 2091,
        text: 'To boldly go where no man has gone before',
        explanation:
            'This introductory text was spoken at the beginning of many Star Trek television episodes and films, from 1966 onward:',
        origin: 'English',
    },
    {
        '': 2092,
        text: 'To boot',
        explanation: 'Moreover; in addition to.',
        origin: 'English',
    },
    {
        '': 2093,
        text: 'To cast the first stone',
        explanation:
            "Be the first to attack a sinner. The implication in Jesus' teaching was that the members of the congregation were only in a position to condemn a sinner if they were without sin themselves - in other words, 'judge not lest you be judged'.",
        origin: 'English',
    },
    {
        '': 2094,
        text: 'To err is human; to forgive divine',
        explanation:
            'A proverb expressing the idea that forgiveness is a worthy response to human failings.',
        origin: 'English',
    },
    {
        '': 2095,
        text: 'To gild refined gold, to paint the lily',
        explanation: 'To apply unnecessary ornament - to over embellish.',
        origin: 'English',
    },
    {
        '': 2096,
        text: "To sleep: perchance to dream: ay, there's the rub",
        explanation:
            "This line is from the celebrated 'To be, or not to be' speech in Shakespeare's Hamlet, 1602:",
        origin: 'English',
    },
    {
        '': 2097,
        text: 'To the manner born',
        explanation:
            'Destined to be suited to something, by virtue of birth or custom and practise.',
        origin: 'English',
    },
    {
        '': 2098,
        text: 'To the nth degree',
        explanation: 'To the utmost degree; without limit.',
        origin: 'English',
    },
    {
        '': 2099,
        text: 'To travel hopefully is a better thing than to arrive',
        explanation: 'Hope and anticipation are often better than reality.',
        origin: 'English',
    },
    {
        '': 2100,
        text: 'Toast of the town',
        explanation: 'A person who is widely admired.',
        origin: 'English',
    },
    {
        '': 2101,
        text: 'Toe the line',
        explanation:
            'To conform to an established standard or political programme.',
        origin: 'English',
    },
    {
        '': 2102,
        text: 'Toe-curling',
        explanation:
            "Something that is 'toe-curlingly embarrassing' is discomforting enough as to make one squirm and curl one's toes in response.",
        origin: 'English',
    },
    {
        '': 2103,
        text: 'Toffee-nosed',
        explanation:
            "To be 'toffee-nosed' is to be snobbish; supercilious; stuck-up.",
        origin: 'English',
    },
    {
        '': 2104,
        text: 'Tommy Atkins',
        explanation: 'A generic name for a British private soldier.',
        origin: 'English',
    },
    {
        '': 2105,
        text: 'Tomorrow is another day',
        explanation:
            "'Tomorrow is another day' is famous for being the last line of Margaret Mitchells's American Civil War novel Gone With The Wind, 1936:",
        origin: 'English',
    },
    {
        '': 2106,
        text: 'Tongue in cheek',
        explanation: 'In an ironic manner, not meant to be taken seriously.',
        origin: 'English',
    },
    {
        '': 2107,
        text: 'Too big for your breeches',
        explanation: 'Conceited; having a too high opinion of oneself.',
        origin: 'English',
    },
    {
        '': 2108,
        text: 'Too much of a good thing',
        explanation: 'Excess may do you harm.',
        origin: 'English',
    },
    {
        '': 2109,
        text: 'Toodle-oo',
        explanation: "A colloquial version of 'goodbye', now rather archaic.",
        origin: 'English',
    },
    {
        '': 2110,
        text: 'Tooth and nail',
        explanation:
            "A fight, undertaken with all one's efforts and with the intensity of a wild animal.",
        origin: 'English',
    },
    {
        '': 2111,
        text: 'Top dog',
        explanation: 'One who is dominant or victorious.',
        origin: 'English',
    },
    {
        '': 2112,
        text: 'Top drawer',
        explanation: 'Of the best quality; of the highest social standing.',
        origin: 'English',
    },
    {
        '': 2113,
        text: 'Top notch',
        explanation: 'Excellent.',
        origin: 'English',
    },
    {
        '': 2114,
        text: 'Topsy-turvy',
        explanation: 'Upset; with the top where the bottom should be.',
        origin: 'English',
    },
    {
        '': 2115,
        text: 'Total shambles',
        explanation: 'A scene of disorder; a ruin; a mess.',
        origin: 'English',
    },
    {
        '': 2116,
        text: 'Touch and go',
        explanation:
            'A risky, precarious or delicate case or state of things - such that the slightest change could prove disastrous.',
        origin: 'English',
    },
    {
        '': 2117,
        text: "Touch with a barge-pole - Wouldn't",
        explanation:
            "Said of something or someone so unappealing that one wouldn't want to go anywhere near.",
        origin: 'English',
    },
    {
        '': 2118,
        text: 'Touch wood',
        explanation:
            "This\nphrase is used by people who rap their knuckles on a piece of wood hoping to stave off bad luck. In the UK, the phrase 'touch wood' is used - often jokingly by tapping one's head. The phrases are sometimes spoken when a person is already experiencing some good fortune and hope that it will continue - for example \"I've been winning on every race - touch wood\".",
        origin: 'English',
    },
    {
        '': 2119,
        text: 'Touchy-feely',
        explanation:
            'Human interactive that emphasizes physical closeness and emotional openness. The phrase is often used disparagingly in contexts where hard and businesslike behaviour is the norm.',
        origin: 'English',
    },
    {
        '': 2120,
        text: 'Tout de suite',
        explanation: 'At once.',
        origin: 'English',
    },
    {
        '': 2121,
        text: 'Tower of strength',
        explanation:
            'Someone who can be relied on to provide support and comfort.',
        origin: 'English',
    },
    {
        '': 2122,
        text: 'Train surfing',
        explanation:
            'Surfing (a.k.a. surfboarding) is, in its literal meaning, the riding of a wave while standing or lying on a surfboard.',
        origin: 'English',
    },
    {
        '': 2123,
        text: 'Trick or treat',
        explanation:
            "'Trick or treat' is the ultimatum given to householders by children who call on houses to solicit gifts at Hallowe'en.",
        origin: 'English',
    },
    {
        '': 2124,
        text: 'Trip the light fantastic',
        explanation:
            "To dance, especially in an imaginative or 'fantastic' manner.",
        origin: 'English',
    },
    {
        '': 2125,
        text: 'Trouble and strife',
        explanation: 'Wife.',
        origin: 'English',
    },
    {
        '': 2126,
        text: 'True blue',
        explanation:
            "Loyal and unwavering in one's opinions or support for a cause.",
        origin: 'English',
    },
    {
        '': 2127,
        text: 'Truth is stranger than fiction',
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 2128,
        text: 'Truth will out',
        explanation: 'The truth will become known eventually.',
        origin: 'English',
    },
    {
        '': 2129,
        text: 'Tuckered out',
        explanation: 'Exhausted.',
        origin: 'English',
    },
    {
        '': 2130,
        text: 'Turkeys voting for Christmas',
        explanation:
            "'Turkeys voting for Christmas' is used to describe people acting in a way that  is harmful to their own interests.",
        origin: 'English',
    },
    {
        '': 2131,
        text: 'Turn a blind eye',
        explanation:
            'To turn a blind eye is to knowingly refuse to acknowledge something which you know to be real.',
        origin: 'English',
    },
    {
        '': 2132,
        text: 'Turn of phrase',
        explanation: 'A distinctive spoken or written expression.',
        origin: 'English',
    },
    {
        '': 2133,
        text: 'Turn the tables',
        explanation:
            'Reverse the positions of adversaries. The phrases is often used when the weaker position subsequently becomes dominant.',
        origin: 'English',
    },
    {
        '': 2134,
        text: 'Turn up for the books',
        explanation: 'An unexpected piece of good fortune.',
        origin: 'English',
    },
    {
        '': 2135,
        text: 'Turn up trumps',
        explanation: 'To turn out well or successfully.',
        origin: 'English',
    },
    {
        '': 2136,
        text: 'Twelve good men and true',
        explanation: 'A jury.',
        origin: 'English',
    },
    {
        '': 2137,
        text: 'Twenty three skidoo',
        explanation: 'Go away - scram.',
        origin: 'English',
    },
    {
        '': 2138,
        text: 'Twenty four seven',
        explanation:
            'All of the time - twenty four hours/day and seven\ndays/week.',
        origin: 'English',
    },
    {
        '': 2139,
        text: 'Two cents worth',
        explanation: "An individual's opinion.",
        origin: 'English',
    },
    {
        '': 2140,
        text: 'Two heads are better than one',
        explanation:
            'Two people may be able to solve a problem that an individual cannot.',
        origin: 'English',
    },
    {
        '': 2141,
        text: 'Two peas in a pod',
        explanation: "'Two peas in a pod' are two identical items or people.",
        origin: 'English',
    },
    {
        '': 2142,
        text: 'Under the thumb',
        explanation: "Completely under someone's control.",
        origin: 'English',
    },
    {
        '': 2143,
        text: 'Under your hat - Keep it',
        explanation: 'Keep it secret.',
        origin: 'English',
    },
    {
        '': 2144,
        text: 'Under the auspices of',
        explanation:
            'Under the control or protection of someone or some group.',
        origin: 'English',
    },
    {
        '': 2145,
        text: 'Get - underway',
        explanation: 'Begin a journey or a project.',
        origin: 'English',
    },
    {
        '': 2146,
        text: 'Under wraps',
        explanation:
            "A thing is 'under wraps' if it is concealed from public view, with only a few insiders being aware of it.",
        origin: 'English',
    },
    {
        '': 2147,
        text: 'Uneasy lies the head that wears a crown',
        explanation:
            "The expression 'uneasy lies the head that wears a crown' means that a person with great power, such as a king, is constantly apprehensive.",
        origin: 'English',
    },
    {
        '': 2148,
        text: 'Union Jack',
        explanation:
            'The Union Jack is the popular name of the national flag of the United Kingdom.',
        origin: 'English',
    },
    {
        '': 2149,
        text: 'The great - unwashed',
        explanation: 'The common, lower classes; the hoi polloi.',
        origin: 'English',
    },
    {
        '': 2150,
        text: 'The - unkindest cut of all',
        explanation:
            "Brutus was\nCaesar's close and trusted friend. To be stabbed by him was even more hurtful than by those who he was less intimate.",
        origin: 'English',
    },
    {
        '': 2151,
        text: 'Up a blind alley',
        explanation:
            'Following a course of action that leads to no good outcome.',
        origin: 'English',
    },
    {
        '': 2152,
        text: 'Up a gum tree',
        explanation:
            "With most phrases it is the origin rather than the meaning that is in doubt. 'Up a gum tree' has several meanings. The most commonly used is 'in great difficulties'. Other meanings are 'in a state of contentment' or 'with great speed'.",
        origin: 'English',
    },
    {
        '': 2153,
        text: 'Up in arms',
        explanation: 'Roused; incensed.',
        origin: 'English',
    },
    {
        '': 2154,
        text: 'Up the creek without a paddle',
        explanation: 'In an awkward situation or unpleasant predicament.',
        origin: 'English',
    },
    {
        '': 2155,
        text: 'Up the apples and pears',
        explanation: 'Apples and pears is Cockney rhyming slang for  stairs.',
        origin: 'English',
    },
    {
        '': 2156,
        text: 'Up the duff',
        explanation:
            "'Up the duff' is a euphemism for pregnant. It is used most commonly, although not exclusively, to describe unplanned pregnancy.",
        origin: 'English',
    },
    {
        '': 2157,
        text: 'Up the pole',
        explanation: "'Up the pole' has various meanings, including:",
        origin: 'English',
    },
    {
        '': 2158,
        text: 'Up the wooden hill to Bedfordshire',
        explanation:
            'Go up the hill to Bedfordshire was phrase uttered to children in the UK when it was time to go upstairs to prepare for bed. The expression is now rather archaic and little-used.',
        origin: 'English',
    },
    {
        '': 2159,
        text: 'Up to snuff',
        explanation:
            "Initially, the phrase meant 'sharp and in the know'; more recently, 'up to the required standard'.",
        origin: 'English',
    },
    {
        '': 2160,
        text: 'Upper crust',
        explanation: 'Aristocratic; society superior.',
        origin: 'English',
    },
    {
        '': 2161,
        text: 'Upper hand',
        explanation: 'Take a dominant position.',
        origin: 'English',
    },
    {
        '': 2162,
        text: 'Up in arms',
        explanation: 'Roused; incensed.',
        origin: 'English',
    },
    {
        '': 2163,
        text: 'Ups-a-daisy',
        explanation:
            'An exclamation made when encouraging a child to get up after a fall or when lifting a child into the air.',
        origin: 'English',
    },
    {
        '': 2164,
        text: 'Upset the apple-cart',
        explanation:
            "To 'upset the apple-cart' is to cause upset - to create a difficulty.",
        origin: 'English',
    },
    {
        '': 2165,
        text: 'Up the ante',
        explanation:
            'To raise the stakes, either in betting or in any form of conflict or competition.',
        origin: 'English',
    },
    {
        '': 2166,
        text: 'Upside down',
        explanation: 'Turned so that the upper surface becomes the lower.',
        origin: 'English',
    },
    {
        '': 2167,
        text: 'Urban myth',
        explanation:
            "A story, generally untrue but sometimes one that is merely exaggerated or sensationalise, that gains the status of folklore by continual retelling. Such stories, which may be old and clichÃ©-ridden, are often given a degree of plausibility by being updated in a contemporary setting, or by the teller's claims of personal involvement.",
        origin: 'English',
    },
    {
        '': 2168,
        text: 'Use your loaf',
        explanation: 'Head.',
        origin: 'English',
    },
    {
        '': 2169,
        text: 'Usual suspects - The',
        explanation:
            'The usual suspects" are the people habitually suspected or arrested following a crime.',
        origin: 'English',
    },
    {
        '': 2170,
        text: 'Using a sledgehammer to crack a nut',
        explanation:
            "To use 'a sledgehammer to crack a nut' means to use disproportionate force or expense to overcome a minor problem.",
        origin: 'English',
    },
    {
        '': 2171,
        text: "Valentine's Day Poems and Sayings",
        explanation:
            "Valentine's Day, or as it is more formally known, Saint Valentine's Day, is celebrated on 14th February each year. The Valentines that are commemorated or two Italian saints, Valentin or Valentnus, who share the saint's day of 14th February. The date is now when lovers declare their love by sending each other gifts and romantic cards. There's nothing especially romantic about the lives of the two original Valentines, they were both martyred for their faith, in Ad 197 and AD 269 respectively.",
        origin: 'English',
    },
    {
        '': 2172,
        text: 'Van surfing',
        explanation:
            'Surfing (a.k.a. surfboarding) is, in its literal meaning, the riding of a wave while standing or lying on a surfboard.',
        origin: 'English',
    },
    {
        '': 2173,
        text: 'Vanish into thin air',
        explanation: 'Disappear without trace.',
        origin: 'English',
    },
    {
        '': 2174,
        text: 'Veg out',
        explanation:
            "To 'veg out' is to relax in a slothful and mindless manner.",
        origin: 'English',
    },
    {
        '': 2175,
        text: 'Verbosity leads to unclear, inarticulate things',
        explanation:
            'Quotation - widely attributed to US ex Vice-President Dan Quayle.',
        origin: 'English',
    },
    {
        '': 2176,
        text: 'Vice versa',
        explanation:
            "The reverse of the previous statement, with the main items transposed. Vice versa originates as Latin, with the literal translation being 'the other way round' or 'the position being reversed', but is now fully absorbed into English.",
        origin: 'English',
    },
    {
        '': 2177,
        text: 'Vicious circle',
        explanation:
            'A self-perpetuating process which returns to its starting point with no improvement from when it was begun.',
        origin: 'English',
    },
    {
        '': 2178,
        text: 'Vis-a-vis',
        explanation:
            "In\na position facing another. Literally 'face to face'. Often now used in the sense\nof 'in relation to'.",
        origin: 'English',
    },
    {
        '': 2179,
        text: "Visit the ladies' room",
        explanation: 'Euphemism for going to the lavatory.',
        origin: 'English',
    },
    {
        '': 2180,
        text: 'Vorsprung Durch Technik',
        explanation:
            "The German phrase 'vorsprung durch technik' is usually translated into English as 'progress through technology'.",
        origin: 'English',
    },
    {
        '': 2181,
        text: 'Walk free',
        explanation:
            'To be released from a criminal charge without punishment, or not receive the expected or deserved punishment.',
        origin: 'English',
    },
    {
        '': 2182,
        text: 'Walk the walk',
        explanation: "Back up one's talk with action.",
        origin: 'English',
    },
    {
        '': 2183,
        text: 'Walk the plank',
        explanation:
            'A form of execution in which victims were forced to walk, often blindfold and with hands tied, off a plank of wood and into the sea.',
        origin: 'English',
    },
    {
        '': 2184,
        text: 'Walter Scott (phrases coined by)',
        explanation:
            "There are many sources for the phrases and sayings that colour our language. One important source is the Bible, from which we get 'by the skin of your teeth', 'from strength to strength' and many more. Whether we view these as English phrases is debatable as the first English translation of the Bible was a thousand years or more after the writing of the original biblical texts. Wycliffe's translation, circa 1392, is the first version that brought the Bible to the English-speaking world - apart from that small number of scholars who had read the previous Latin versions and discussed them in English. Whatever we think about the Englishness of translated biblical phrases even they pale next to the single most prolific coiner of English - Shakespeare. To use his own words from All's Well That Ends Well:",
        origin: 'English',
    },
    {
        '': 2185,
        text: 'Warts and all',
        explanation:
            "'Warts and all' means the whole thing; not concealing the less attractive parts.",
        origin: 'English',
    },
    {
        '': 2186,
        text: 'Watch the birdie',
        explanation:
            "A photographer's instruction just before taking a picture, in order to make people smile.",
        origin: 'English',
    },
    {
        '': 2187,
        text: '(A) watched pot never boils',
        explanation:
            "The proverbial expression 'a watched pot never boils' refers to the feeling time seems to go slower when you are anxiously waiting for something to happen.",
        origin: 'English',
    },
    {
        '': 2188,
        text: 'Watching brief',
        explanation: 'Instructions given to someone to observe a situation.',
        origin: 'English',
    },
    {
        '': 2189,
        text: 'Wave a red rag to a bull',
        explanation:
            'To wave a red rag to a bull is to  deliberately provoke it. More generally, the expression denotes any deliberate action intended to bring about an adverse reaction.',
        origin: 'English',
    },
    {
        '': 2190,
        text: 'Wax lyrical',
        explanation:
            'Speak niin an increasingly enthusiastic and poetic manner.',
        origin: 'English',
    },
    {
        '': 2191,
        text: 'Wax poetic',
        explanation:
            'Speak niin an increasingly enthusiastic and poetic manner.',
        origin: 'English',
    },
    {
        '': 2192,
        text: 'We are a grandmother',
        explanation:
            "'We have become a grandmother' was UK\n Prime Minister Margaret Thatcher's statement to the press in 1989, on the\n birth of her first grandchild, Mark Thatcher's son Michael.",
        origin: 'English',
    },
    {
        '': 2193,
        text: 'We are not amused',
        explanation:
            "'We are not amused' is a quotation, attributed to Queen Victoria.",
        origin: 'English',
    },
    {
        '': 2194,
        text: 'We few, we happy few, we band of brothers',
        explanation:
            "'We few, we happy few, we band of brothers' is one of the well-known lines from the rousing St. Crispin's Day Speech given by the king in Shakespeare's Henry V.",
        origin: 'English',
    },
    {
        '': 2195,
        text: 'We have seen better days',
        explanation:
            'To have been more wealthy or in better condition in former times.',
        origin: 'English',
    },
    {
        '': 2196,
        text: 'We know where you live',
        explanation: 'A threat of violence.',
        origin: 'English',
    },
    {
        '': 2197,
        text: 'Weakest link - A chain is only as strong as its',
        explanation:
            "The proverb 'A chain is only as strong as its weakest link' has a literal meaning, although the 'weakest link' referred to is figurative and usually applies to a person or technical feature rather than the link of an actual chain.",
        origin: 'English',
    },
    {
        '': 2198,
        text: 'Wear the trousers',
        explanation: 'Be in charge.',
        origin: 'English',
    },
    {
        '': 2199,
        text: 'Wear your heart on your sleeve',
        explanation:
            'To wear your heart on your sleeve is to display your emotions openly.',
        origin: 'English',
    },
    {
        '': 2200,
        text: 'Weasel words',
        explanation: 'Ambiguous or quibbling speech.',
        origin: 'English',
    },
    {
        '': 2201,
        text: 'Wee-wee',
        explanation: 'A nursery euphemism for urine or urination.',
        origin: 'English',
    },
    {
        '': 2202,
        text: 'Well heeled',
        explanation: 'Wealthy - well provided for.',
        origin: 'English',
    },
    {
        '': 2203,
        text: 'Well read',
        explanation: 'Erudite and literate.',
        origin: 'English',
    },
    {
        '': 2204,
        text: 'Wet behind the ears',
        explanation: 'Naive.',
        origin: 'English',
    },
    {
        '': 2205,
        text: 'Wet blanket',
        explanation:
            "A person or thing that says or does something to impinge on other people's enjoyment.",
        origin: 'English',
    },
    {
        '': 2206,
        text: 'What a piece of work is man',
        explanation: 'Man is a supreme creature.',
        origin: 'English',
    },
    {
        '': 2207,
        text: 'What are you like?',
        explanation:
            'This rhetorical question is asked of someone who has done something stupid or outrageous. The point being that it is quite obvious what the person in question is like.',
        origin: 'English',
    },
    {
        '': 2208,
        text: 'What football is all about',
        explanation:
            "The expression 'what football is all about' originated in the UK and began appearing commonly in newspaper there around 1970. Being of UK origin it should be said that the 'football' being referred to is what Americans like to call soccer and not what they call football, which all right-minded people refer to as American Football.",
        origin: 'English',
    },
    {
        '': 2209,
        text: 'What God has joined together let no man put asunder',
        explanation:
            "'What God has joined together let no man put asunder' is the part of the Christian marriage ceremony that states God's authority over man.",
        origin: 'English',
    },
    {
        '': 2210,
        text: "What part of no don't you understand?",
        explanation: 'I am plainly saying no, and I mean just that.',
        origin: 'English',
    },
    {
        '': 2211,
        text: 'What you see is what you get - wysiwyg',
        explanation:
            'A computer screen display which appears on screen as it will be seen when printed on paper.',
        origin: 'English',
    },
    {
        '': 2212,
        text: "What's in a name? That which we call a rose by any other name would smell as sweet",
        explanation:
            "The saying 'A rose by any other name would smell as sweet' means that what matters is what something is, not what it is called.",
        origin: 'English',
    },
    {
        '': 2213,
        text: "What's not to like?",
        explanation:
            'A rhetorical question, suggesting that what is being spoken of is without fault.',
        origin: 'English',
    },
    {
        '': 2214,
        text: "What's up Doc?",
        explanation:
            "'Eh, What's up Doc?' joins 'That's All Folks!' as the best-known lines from Tex Avery's Looney Tunes cartoon series. It was delivered by Bugs Bunny, while nonchalantly chewing on a carrot, in most of the cartoons in which the character appeared, beginning with A Wild Hare, 1940. This was the first Bugs Bunny cartoon, although Bugs wasn't named until the second cartoon - Elmer's Pet Rabbit ('Happy Rabbit', a prototype Bugs Bunny with a somewhat different personality had appeared earlier).",
        origin: 'English',
    },
    {
        '': 2215,
        text: 'When in Rome, do as the Romans do',
        explanation:
            'It is polite, and possibly also advantageous, to abide by the customs of a society when one is a visitor.',
        origin: 'English',
    },
    {
        '': 2216,
        text: 'When it comes to the crunch',
        explanation:
            "When a decisive point at which one's future course is determined.",
        origin: 'English',
    },
    {
        '': 2217,
        text: 'When pigs fly',
        explanation:
            'A humorous/sarcastic remark, used to indicate the unlikeliness of some event or to mock the credulity of others; for example, "I might make a start on papering the back bedroom tomorrow". "Yes, and pigs might fly".',
        origin: 'English',
    },
    {
        '': 2218,
        text: 'When the going gets tough, the tough get going',
        explanation:
            "'When the going gets tough, the tough get going' means that, when times are difficult, those with resolve don't give up but are stimulated into action.",
        origin: 'English',
    },
    {
        '': 2219,
        text: 'When the shit hits the fan',
        explanation:
            "'When the shit hits the fan' alludes to the messy and hectic consequences brought about by a previously secret situation becoming public.",
        origin: 'English',
    },
    {
        '': 2220,
        text: "Where there's muck there's brass",
        explanation:
            'Where there are dirty jobs to be done there is money to be made.',
        origin: 'English',
    },
    {
        '': 2221,
        text: 'Whet your appetite',
        explanation:
            'To have your interest in something, especially food, stimulated.',
        origin: 'English',
    },
    {
        '': 2222,
        text: 'Which  is which?',
        explanation:
            "'Which is which?' - often expressed as a question, asking for help in distinguishing two similar things or people.",
        origin: 'English',
    },
    {
        '': 2223,
        text: 'Which  witch is which?',
        explanation:
            "'Which is which?' - often expressed as a question, asking for help in distinguishing two similar things or people.",
        origin: 'English',
    },
    {
        '': 2224,
        text: 'While you live, tell truth and shame the Devil!',
        explanation: 'Tell the truth, even when tempted to lie.',
        origin: 'English',
    },
    {
        '': 2225,
        text: 'Whip round',
        explanation:
            'An impromptu collection of money from a group of people, in order to fund some  joint enterprise.',
        origin: 'English',
    },
    {
        '': 2226,
        text: 'Whipper snapper',
        explanation:
            'A diminutive or insignificant person, especially a sprightly or impertinent youngster.',
        origin: 'English',
    },
    {
        '': 2227,
        text: 'Whipping boy',
        explanation:
            'A scapegoat. One who is singled out for blame or punishment.',
        origin: 'English',
    },
    {
        '': 2228,
        text: 'Whistle and flute',
        explanation: 'Suit.',
        origin: 'English',
    },
    {
        '': 2229,
        text: 'Whistle blower',
        explanation:
            'A person who tries to raise the alarm about a problem   and publicizes it inside and/or outside of his/her organization.',
        origin: 'English',
    },
    {
        '': 2230,
        text: 'Whistle down the wind',
        explanation: 'Send away or abandon.',
        origin: 'English',
    },
    {
        '': 2231,
        text: 'White as snow',
        explanation:
            "Pure white. What better to symbolise whiteness than snow? Not only the intensity of colour on a bright winter's day, but also the purity of untrodden snow is summoned up by the simile. Shakespeare used this association to good effect in as pure as the driven snow.",
        origin: 'English',
    },
    {
        '': 2232,
        text: 'White bread',
        explanation: 'Pertaining to the US white middle classes.',
        origin: 'English',
    },
    {
        '': 2233,
        text: 'White elephant',
        explanation:
            "Originally 'white elephants' were simply that - elephants that were white. Later, the expression came to mean 'a burdensome possession - one that is  more trouble than it is worth'. More recently, the term has also been used to describe any doomed enterprise, on which large sums of money are spent and which is then abandoned.",
        origin: 'English',
    },
    {
        '': 2234,
        text: 'Whole kit and caboodle - The',
        explanation: 'A collection of things.',
        origin: 'English',
    },
    {
        '': 2235,
        text: 'Whole-hearted',
        explanation:
            "Having one's intentions divided; not fully committed; lacking zeal or courage.",
        origin: 'English',
    },
    {
        '': 2236,
        text: 'Whole nine yards - The',
        explanation:
            "The expression 'the whole nine yards' means 'all of it - the full measure'.",
        origin: 'English',
    },
    {
        '': 2237,
        text: 'Whole shebang - The',
        explanation: 'All of it; the whole thing.',
        origin: 'English',
    },
    {
        '': 2238,
        text: 'Whoops-a-daisy',
        explanation:
            'An exclamation made when encouraging a child to get up after a fall or when lifting a child into the air.',
        origin: 'English',
    },
    {
        '': 2239,
        text: 'Why does bread always fall butter side down?',
        explanation:
            "The 'buttered side down' view of life is one that is pessimistic and fatalistic.",
        origin: 'English',
    },
    {
        '': 2240,
        text: 'Why should the Devil have all the best tunes?',
        explanation:
            "'The Devil has all the best tunes' is the view that  music, especially popular music, is predominantly secular rather than religious.",
        origin: 'English',
    },
    {
        '': 2241,
        text: 'Wick - you get on my',
        explanation:
            "To get on someone's wick is to annoy them; get on their nerves.",
        origin: 'English',
    },
    {
        '': 2242,
        text: 'Wide berth - Keep a',
        explanation: 'A goodly distance.',
        origin: 'English',
    },
    {
        '': 2243,
        text: 'Wild and woolly',
        explanation: 'Lawless and uncultured.',
        origin: 'English',
    },
    {
        '': 2244,
        text: 'Wild goose chase',
        explanation: 'A hopeless quest.',
        origin: 'English',
    },
    {
        '': 2245,
        text: 'Willy nilly',
        explanation:
            "This term has two, slightly differing, but related meanings: 'whether it is with or against your will' and 'in an unplanned, haphazard fashion'. We tend to use the latter of these meanings today; the former was the accepted meaning when the term was first coined.",
        origin: 'English',
    },
    {
        '': 2246,
        text: 'Win hands down',
        explanation: 'Win easily, with little effort.',
        origin: 'English',
    },
    {
        '': 2247,
        text: 'Win one for the Gipper',
        explanation: 'Ronald Reagan quotation.',
        origin: 'English',
    },
    {
        '': 2248,
        text: '(On a) wing and a prayer',
        explanation:
            'In a difficult situation, relying on meagre resources and luck to get out of it.',
        origin: 'English',
    },
    {
        '': 2249,
        text: 'Wing it',
        explanation:
            'To do something  in an impromptu manner, improvising, with little preparation.',
        origin: 'English',
    },
    {
        '': 2250,
        text: 'Winter drawers on',
        explanation:
            'Said when an intimation of the approaching winter is first felt.',
        origin: 'English',
    },
    {
        '': 2251,
        text: 'Wish you were here',
        explanation: 'The archetypal message postcard message.',
        origin: 'English',
    },
    {
        '': 2252,
        text: 'With bells on',
        explanation: 'Eager; ready to participate.',
        origin: 'English',
    },
    {
        '': 2253,
        text: 'Without a shadow of a doubt',
        explanation:
            "If something is said to be 'beyond a shadow of a doubt' the speaker is certain that it is true, with no possibility of ambiguity.",
        origin: 'English',
    },
    {
        '': 2254,
        text: 'Without let or hindrance',
        explanation: 'Without impediment.',
        origin: 'English',
    },
    {
        '': 2255,
        text: 'Without so much as a by your leave',
        explanation: 'Without even asking for permission.',
        origin: 'English',
    },
    {
        '': 2256,
        text: 'Woe betide you',
        explanation:
            "A prediction, usually expressed as a warning following someone's bad behaviour, that you may suffer future misfortune.",
        origin: 'English',
    },
    {
        '': 2257,
        text: 'Woe is me',
        explanation: 'I am distressed; sad; grieved.',
        origin: 'English',
    },
    {
        '': 2258,
        text: "Wolf in sheep's clothing",
        explanation:
            "'A wolf in sheep's clothing' is someone who hides malicious intent under the guise of kindliness.",
        origin: 'English',
    },
    {
        '': 2259,
        text: 'Woman needs a man like a fish needs a bicycle - A',
        explanation:
            'A woman needs a man like a fish needs a bicycle" is a\nfeminist slogan, humorously expressing the view that a woman can live her life perfectly well without a man.',
        origin: 'English',
    },
    {
        '': 2260,
        text: "Woman's place is in the home - A",
        explanation: 'Literal meaning.',
        origin: 'English',
    },
    {
        '': 2261,
        text: 'Women and children first',
        explanation:
            'The seafaring command that women and children be the first to board the lifeboats when a ship abandoned.',
        origin: 'English',
    },
    {
        '': 2262,
        text: 'Wooden hill to Bedfordshire',
        explanation:
            'Go up the hill to Bedfordshire was phrase uttered to children in the UK when it was time to go upstairs to prepare for bed. The expression is now rather archaic and little-used.',
        origin: 'English',
    },
    {
        '': 2263,
        text: 'Word association football',
        explanation:
            'Word association is a psychological technique invented by Jung in which patients are asked for an immediate response to any word fired at them. A word game based on this in which the first player starts with a word and subsequent players have to follow with a related word and so on has been staple fare for families on long car journeys and the like for many years.',
        origin: 'English',
    },
    {
        '': 2264,
        text: 'Word for word',
        explanation:
            "A precise following of another's words, that is, verbatim, either in spoken repetition of those words or in a close study of a text.",
        origin: 'English',
    },
    {
        '': 2265,
        text: 'Word in edgeways - A',
        explanation:
            'Join a conversation in which another is speaking continually and leaving little opportunity for others.',
        origin: 'English',
    },
    {
        '': 2266,
        text: 'Word in your shell-like - A',
        explanation: 'I\nwould like to talk to you.',
        origin: 'English',
    },
    {
        '': 2267,
        text: 'Words ending in gry',
        explanation:
            "Don't waste your time looking for the mythical 'third word ending in GRY'. If you have come here looking for it, read the explanation\nbelow and relax - you can stop searching. The story goes like this:",
        origin: 'English',
    },
    {
        '': 2268,
        text: 'Worse for wear',
        explanation: 'Shabby or worn through use; drunk.',
        origin: 'English',
    },
    {
        '': 2269,
        text: "Worth one's salt",
        explanation: "To be effective and efficient; deserving of one's pay.",
        origin: 'English',
    },
    {
        '': 2270,
        text: 'Wotcher',
        explanation: 'A colloquial greeting.',
        origin: 'English',
    },
    {
        '': 2271,
        text: "Wouldn't touch with a barge-pole",
        explanation:
            "Said of something or someone so unappealing that one wouldn't want to go anywhere near.",
        origin: 'English',
    },
    {
        '': 2272,
        text: 'Wreak havoc',
        explanation:
            "It isn't surprising that some people get this phrase wrong and assume that it is 'wreck havoc'. After all 'havoc' and 'wreckage' usually belong together. However, the correct spelling is 'wreak havoc', which means, 'inflict or create damage'.",
        origin: 'English',
    },
    {
        '': 2273,
        text: 'Writing is on the wall - The',
        explanation:
            "The expression 'the writing is on the wall' is used whenever an inevitable result or imminent  danger has become apparent.",
        origin: 'English',
    },
    {
        '': 2274,
        text: 'Wrong end of the stick - The',
        explanation:
            'To get the short end of the stick is to come off worst in a bargain or contest.',
        origin: 'English',
    },
    {
        '': 2275,
        text: 'Wrong side of the blanket - The',
        explanation:
            "The expression 'born on the wrong side of the blanket' is a euphemism for being born out of wedlock.",
        origin: 'English',
    },
    {
        '': 2276,
        text: 'Yada yada',
        explanation:
            'A disparaging response, indicating that something previously said was predictable, repetitive or tedious.',
        origin: 'English',
    },
    {
        '': 2277,
        text: 'Year dot - The',
        explanation: 'A very long time ago; too long ago to be dated.',
        origin: 'English',
    },
    {
        '': 2278,
        text: 'Yellow-belly',
        explanation: 'A coward.',
        origin: 'English',
    },
    {
        '': 2279,
        text: 'Yellow Peril',
        explanation:
            'The supposed danger of Oriental hordes overwhelming the West.',
        origin: 'English',
    },
    {
        '': 2280,
        text: 'You are what you eat',
        explanation:
            "The proverbial saying 'You are what you eat' is the notion that to be fit and healthy you need to eat good food.",
        origin: 'English',
    },
    {
        '': 2281,
        text: 'You can catch more flies with honey than with vinegar',
        explanation:
            'This proverbial saying expresses the idea that it is more effective to be polite and ingratiating than to be hostile or demanding.',
        origin: 'English',
    },
    {
        '': 2282,
        text: "You can lead a horse to water but you can't make it drink",
        explanation:
            'People, like horses, will only do what they have a mind to do.',
        origin: 'English',
    },
    {
        '': 2283,
        text: "You can lead a whore to culture but you can't make her think",
        explanation: 'Humorous quotation, attributed to Dorothy Parker.',
        origin: 'English',
    },
    {
        '': 2284,
        text: "You can't get blood out of a stone",
        explanation: "You cannot extract what isn't there to begin with.",
        origin: 'English',
    },
    {
        '': 2285,
        text: "You can't have your cake and eat it too",
        explanation:
            "You can't have two desirable but contradictory options - you have to choose.",
        origin: 'English',
    },
    {
        '': 2286,
        text: "You can't make a silk purse out of a sow's ear",
        explanation:
            "This proverb expresses the view that you  can't turn something which is inherently low-grade or ugly into something valuable or attractive.",
        origin: 'English',
    },
    {
        '': 2287,
        text: "You can't teach an old dog new tricks",
        explanation: 'Old dogs (and people) learn less well than the young.',
        origin: 'English',
    },
    {
        '': 2288,
        text: 'You get on my wick',
        explanation:
            "To get on someone's wick is to annoy them; get on their nerves.",
        origin: 'English',
    },
    {
        '': 2289,
        text: "You look as if you've been dragged through a hedge backwards",
        explanation:
            'Said to someone who is unkempt and whose hair needs brushing.',
        origin: 'English',
    },
    {
        '': 2290,
        text: "You'll wonder where the yellow went when you brush your teeth with Pepsodent",
        explanation:
            'An early TV advertising slogan for Pepsodent toothpaste, in use in the USA and UK from the late 1940s to 1960s.',
        origin: 'English',
    },
    {
        '': 2291,
        text: 'Young turk',
        explanation:
            'A young person, full of new ideas and impatient for change.',
        origin: 'English',
    },
    {
        '': 2292,
        text: 'Your days are numbered',
        explanation:
            'A demand for money, often associated with English highwaymen.',
        origin: 'English',
    },
    {
        '': 2293,
        text: 'Your money or your life',
        explanation:
            'A demand for money, often associated with English highwaymen.',
        origin: 'English',
    },
    {
        '': 2294,
        text: 'Your name is mud',
        explanation: 'You are unpopular.',
        origin: 'English',
    },
    {
        '': 2295,
        text: "You've never had it so good",
        explanation: 'You are likely to die soon.',
        origin: 'English',
    },
    {
        '': 2296,
        text: 'Zero tolerance',
        explanation:
            'A form of policing that allows no crime or anti-social behaviour to be overlooked.',
        origin: 'English',
    },
    {
        '': 2297,
        text: 'Zig-zag',
        explanation:
            'A series of short straight lines, set at angles to one another and connected to form a continuous line. Often forming a regular pattern, but not necessarily so. Also, the action of moving along such a course.',
        origin: 'English',
    },
];
