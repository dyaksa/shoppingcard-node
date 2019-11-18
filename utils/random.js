exports.id = () => {
    const abj = "abcdefghijklmnopqrtstuvwxyz1234567890";
    let random = "";
    for (let i = 0; i < 16; i++) {
        const randomize = Math.floor(Math.random() * (1 + abj.length - 0)) + 0;
        random += abj[randomize];
    }
    return random;
}