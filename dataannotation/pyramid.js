const splitLinesIntoArray = function (text) {
    const lines = text.trim().split('\n'); // splits text file into an easy to work with array

    let wordsArr = [];
    
    lines.forEach(line => { // iterate over each word
        const lineWords = line.trim().split(' '); // splits line into words and number

        // Extracting the word and its relative position, adding it to the words Array
        const word = lineWords.slice(1).join(' '); // extracting the word and its number/position
        const position = parseInt(lineWords[0], 10); // parse the position as an integer
        wordsArr[position - 1] = word; // adjust position to 0-indexed array
    });

    return wordsArr;
};



const decodeMessage = function (arr) {
    // Initialising values
    let word = [];
    let n = 0;
    let counter = 2

    // using a while loop that will run until all words are found
    while (n < arr.length) {
        word.push(arr[n]) // adding respective word to the word array
        n += counter; // incrementally increasing n to find the matching word
        counter += 1 // adding 1 to the counter in order to increment correctly according to the pyramid pattern
    };

    const finalPhrase = word.join(' '); // joining the array to create the string of words
    return finalPhrase;
};

const linesSorted = splitLinesIntoArray (
    `195 land
    91 sun
    266 too
    120 huge
    3 dont
    140 such
    69 noun
    227 student
    225 brown
    263 complete
    174 play
    162 cook
    40 yard
    253 clock
    80 would
    202 plain
    269 excite
    109 fire
    207 wish
    138 cool
    295 child
    128 past
    29 colony
    51 oil
    34 dog
    211 back
    226 money
    11 kind
    238 open
    101 finger
    74 touch
    114 are
    123 dad
    142 am
    165 modern
    274 meant
    150 ocean
    167 pitch
    18 suit
    166 town
    28 east
    148 over
    81 group
    185 good
    184 kind
    1 down
    273 band
    235 especially
    110 organ
    276 of
    59 fire
    79 out
    182 area
    292 touch
    284 happen
    258 sat
    71 electric
    163 wrote
    65 buy
    10 lot
    129 stop
    297 corn
    24 where
    133 check
    239 live
    135 best
    171 hold
    130 cause
    175 grand
    241 present
    87 indicate
    161 counter
    137 we
    210 like
    93 visit
    47 state
    220 morning
    233 true
    183 are
    280 ball
    288 history
    5 seat
    127 rain
    200 less
    243 glass
    55 tone
    111 song
    143 fair
    270 element
    186 speed
    112 produce
    125 quotient
    246 sand
    156 begin
    136 moment
    23 offer
    149 probable
    299 all
    134 necessary
    298 post
    44 cent
    205 happen
    76 speech
    83 object
    21 silver
    14 third
    157 crease
    176 wait
    90 triangle
    58 idea
    64 clothe
    22 young
    108 discuss
    102 field
    57 company
    221 capital
    272 compare
    158 chart
    139 possible
    94 written
    27 remember
    104 mile
    39 cold
    168 lady
    259 felt
    285 against
    228 skin
    56 prepare
    267 he
    84 card
    240 organ
    154 object
    255 our
    19 major
    73 discuss
    214 system
    17 hole
    121 above
    281 they
    98 produce
    35 straight
    264 level
    245 though
    85 modern
    260 dry
    300 bought
    291 milk
    190 make
    118 show
    95 middle
    88 center
    61 blood
    46 speak
    7 prove
    249 select
    13 power
    106 come
    203 brown
    4 experiment
    198 strong
    170 hurry
    283 touch
    68 reach
    37 case
    97 beat
    189 over
    290 dry
    144 hill
    113 company
    26 opposite
    15 work
    48 field
    237 felt
    41 prepare
    152 now
    265 his
    116 stay
    160 toward
    271 observe
    244 time
    78 stop
    251 possible
    33 card
    268 prepare
    43 current
    224 compare
    115 neighbor
    213 thus
    262 include
    124 copy
    66 bit
    9 stead
    92 does
    229 general
    178 solve
    275 glad
    36 duck
    287 offer
    30 happen
    286 ball
    119 bread
    169 like
    201 machine
    63 come
    191 any
    196 band
    209 it
    278 section
    199 close
    25 heavy
    155 produce
    86 got
    231 possible
    117 insect
    206 way
    147 before
    222 men
    54 bird
    179 ease
    67 trade
    293 winter
    208 am
    141 repeat
    212 first
    230 to
    2 each
    126 guide
    131 column
    252 single
    204 remember
    38 wild
    247 major
    42 coast
    82 class
    45 done
    172 jump
    49 sister
    279 feel
    242 check
    250 fire
    6 nine
    151 indicate
    60 parent
    99 whole
    159 her
    53 the
    89 temperature
    132 design
    164 big
    12 skill
    192 friend
    188 hit
    289 wait
    296 instant
    32 blow
    181 about
    236 chick
    219 answer
    173 man
    180 material
    234 current
    223 think
    256 print
    282 nor
    277 better
    103 example
    194 people
    72 drink
    107 gun
    193 together
    254 cost
    96 require
    197 or
    215 people
    218 planet
    257 ease
    8 ready
    75 enough
    77 sugar
    105 deal
    16 with
    146 us
    216 share
    145 office
    187 protect
    52 low
    248 thus
    100 farm
    70 oxygen
    20 fire
    122 force
    232 select
    217 paragraph
    177 always
    153 poem
    31 chick
    50 planet
    62 fact
    294 moment
    261 term `
);

console.log(decodeMessage(linesSorted));