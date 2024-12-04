let log = new Log(document.querySelector('.log'));

let char = new Kinght('Silvia');
let monster = new Sorcerer('João');

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();

