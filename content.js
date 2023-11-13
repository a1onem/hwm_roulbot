console.log('HWM Roulette Bot - Thanos Shadow');

const DATA = document.body.innerHTML;
const BET = 100;

const id1 = document.querySelector('a[href*="pl_info.php?id=7378972"]');
const id2 = document.querySelector('a[href*="pl_info.php?id=7383886"]');

const Run = async () => {

    if (id1 && !id2) {

        let parlay_dec = Number(/inforoul.php\?id=(\d+)/.exec(DATA)[1]) + 1;
        let minutes = document.querySelector('input[name="minutes"]').value;
        let seconds = document.querySelector('input[name="seconds"]').value;

        let bettype = id1.parentNode.nextSibling.textContent;


        await fetch('parlay.php', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `minutes=${minutes}&seconds=${seconds}&bet=${BET}&parlay_dec=${parlay_dec}&bettype=${bettype}&cur_pl_bet=0`
        });

        location.reload();

    } else if (!id1) {

        setTimeout(() => location.reload(), 5000);
    }
}

Run();