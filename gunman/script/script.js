(function () {

    var credits = document.querySelector('.credits');
    var gunman = document.querySelector('.gunman');
    var playerTime = document.querySelector('.player__time');
    var back = document.querySelector('.main__back');
    var startBtn = document.querySelector('.start__btn');
    var dollars = document.querySelector('.dollars');
    var logo = document.querySelector('.logo');
    var sum = +(dollars.innerHTML);
    var blackBack = document.querySelector('.black__back');
    var hat = document.querySelector('.hat');
    var gameOver = document.querySelector('.gameOver');
    var timeDiff;
    var timeStart, timeEnd;
    var messageWon = document.querySelector('.won');
    var messageLost = document.querySelector('.lost');
    var messageFoul = document.querySelector('.foul');
    var messageFire = document.querySelector('.fire');
    var messages = document.querySelectorAll('.message');
    var gunmanTime = document.querySelector('.gunman__time');


    var gunmanNumber;


    // audios

    var intro = document.getElementById('intro');
    var fire = document.getElementById('fire');
    var wait = document.getElementById('wait');
    var win = document.getElementById('win');
    var death = document.getElementById('death');
    var foul = document.getElementById('foul');
    var shot = document.getElementById('shot');
    var shotFall = document.getElementById('shotFall');


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    var gunmanTiming;

    gunmanTiming = getRandomInt(3, 9);


    var uniqueRandoms = [];
    var numRandoms = 6;

    function makeUniqueRandom() {

        if (!uniqueRandoms.length) {
            for (var i = 1; i <= numRandoms; i++) {
                uniqueRandoms.push(i);
            }
        }
        var index = Math.floor(Math.random() * uniqueRandoms.length);
        var val = uniqueRandoms[index];

        uniqueRandoms.splice(index, 1);

        return val;

    }


    function reset() {


        gunman.style.cssText = '';
        back.style.cssText = '';
        hat.style.cssText = '';
        gameOver.style.cssText = '';
        gunmanTiming = getRandomInt(3, 9) / 10;
        gunmanTime.innerHTML = gunmanTiming.toFixed(2);


        for (var i = 0; i < messages.length; i++) {

            messages[i].style.cssText = '';
        }


        playerTime.innerHTML = '0.00';


        gunmanNumber = makeUniqueRandom();


    }


    var direction;

    function goInto() {


        var side = '';


        if ((Math.random() - 0.5) > 0) {
            direction = 'left';
        }
        else {
            direction = 'right';
        }

        if (direction == 'right') {
            gunman.style.cssText =
                "right: -106px;" +
                "transform: translate(-449px, 0);";


        }
        else {

            if (gunmanNumber == 1) {
                side = 'Left';
            }

            gunman.style.cssText =
                "left: -1004px;" +
                "transform: translate(449px, 0);";

        }


        gunman.style.cssText += " transition: transform 5s linear;" +
            " animation: goInto 0.5s steps(3) 10 ;" +
            "background-image: url(\"images/g" + gunmanNumber + side + ".png\");";

    }


    function goBack() {


        if ((gunmanNumber == 1) || direction == 'left') {

            gunman.style.cssText =
                "transform: translate(-449px, 0);";

        }

        else {
            gunman.style.cssText =
                "transform: translate(449px, 0);";

        }


        gunman.style.cssText +=
            "background-image: url(\"images/g" + gunmanNumber + ".png\");" +
            " transition: transform 4s linear;" +
            "left: 0;" +
            "right:0;" +
            " animation: goBack 0.5s steps(3) 8;";


    }


    function clearDeadBody() {
        gunman.style.cssText =
            "right:-106;";

        hat.style.display = 'none';


    }


    function lost() {
        gunman.style.cssText =

            "animation: lost 0.8s steps(2) 2; " +
            "background-image: url(\"images/g" + gunmanNumber + "Lost.png\");" +
            "left: 0;" +
            "right: 0;";

        messageLost.style.display = 'block';

        dollars.innerHTML = '0';
        sum = 0;


    }


    function won() {

        if ((gunmanNumber == 1) || (gunmanNumber == 6)) {
            hat.src = "images/g" + gunmanNumber + "Hat.png";
            hat.style.cssText = "animation: hatG1 2s 1;" +
                "display: block;" +
                "top: 265px;";

            gunman.style.cssText =
                "animation: won 1.2s steps(1) 1;" +
                "animation-fill-mode: forwards;";


        }


        else if (gunmanNumber == 3) {
            hat.src = "images/g" + gunmanNumber + "Hat.png";
            hat.style.cssText = "animation: hatG3 2s 1;" +
                "display: block;" +
                "top: -46px;";


        }
        else if (gunmanNumber == 4) {
            hat.src = "images/g" + gunmanNumber + "Hat.png";
            hat.style.cssText = "animation: hatG4 4s 1;" +
                "display: block;" +
                "top: -46px;";

            gunman.style.cssText =

                " animation: wonG4 1.2s 1 ease-out ;"

        }

        else if (gunmanNumber == 5) {
            hat.src = "images/g" + gunmanNumber + "Hat.png";
            hat.style.cssText = "animation: hatG5 4s 1 ease-out;" +
                "display: block;" +
                "top: -46px;";

            gunman.style.cssText =

                " animation: won 1.2s steps(1) 1;" +

                "animation-fill-mode: forwards;";

        }


        gunman.style.cssText +=
            "left: 0;" +
            "right: 0;" +
            "background-image: url(\"images/g" + gunmanNumber + "Won.png\");";


        messageWon.style.display = 'block';

    }


    function stop() {
        gunman.style.cssText = "background-image: url(\"images/g" + gunmanNumber + "Stop.png\");" +
            "left: 0;" +
            "right: 0;";
    }


    function over() {
        gameOver.style.visibility = 'visible';
        startBtn.innerHTML = 'Play Again';
        startBtn.style.visibility = 'visible';
        startBtn.style.color = 'white';
        blackBack.style.display = 'hidden';
        gunman.style.cssText = '';

        for (var i = 0; i < messages.length; i++) {

            messages[i].style.cssText = '';
        }


    }


    startBtn.addEventListener('click', start, false);


// Старт ________________________________________________


    function start() {


        reset();


        credits.style.visibility = 'hidden';
        startBtn.style.visibility = 'hidden';
        logo.style.visibility = 'hidden';
        blackBack.style.visibility = 'visible';


        // выход на экран

        goInto();
        intro.currentTime = 0;
        intro.play();


        // Остановка и проверка на Foul

        setTimeout(function () {

            wait.currentTime = 0;
            wait.play();

            stop();


            back.onclick = function () {

                shot.currentTime = 0;
                shot.play();
                foul.currentTime = 0;
                foul.play();

                messageFoul.style.display = 'block';

                console.log('Foul!!!');

                clearTimeout(timer2);
                clearTimeout(timer3);
                clearTimeout(timer4);
                clearTimeout(timer5);


                lost();

                setTimeout(goBack, 3000);


                setTimeout(over, 7000);


                back.onclick = '';
            };


        }, 5000);


        // Alert перед выстрелом

        var timer2 = setTimeout(function () {

            fire.currentTime = 0;
            fire.play();

            messageFire.style.display = 'block';


            back.onclick = '';

            timeStart = new Date().getTime();

            gunman.style.cssText = "background-image: url(\"images/g" + gunmanNumber + "Alert.png\");" +
                "left: 0;" +
                "right: 0;";


            // Проверка на попадание


            gunman.onclick = function () {

                shotFall.currentTime = 0;
                shotFall.play();


                back.style.cssText = "animation: backFlickr 0.21s 3;";


                console.log('Gunman Clicked');

                timeEnd = new Date().getTime();
                timeDiff = (timeEnd - timeStart) / 1000;
                timeDiff = timeDiff.toFixed(2);
                playerTime.innerHTML = timeDiff;


                won();
                win.currentTime = 0;
                win.play();


                sum = (Math.round(sum + sum * 0.2)) + 300;

                dollars.innerHTML = sum;


                clearTimeout(timer3);
                clearTimeout(timer4);
                clearTimeout(timer5);


                gunman.onclick = '';

                messageFire.style.display = '';

                setTimeout(clearDeadBody, 4000);


                setTimeout(start, 5000);

            };

        }, 6000);


        //Проигрыш

        var timer3 = setTimeout(function () {

            shot.currentTime = 0;
            shot.play();
            death.currentTime = 0;
            death.play();

            messageFire.style.display = '';

            gunman.onclick = '';


            back.style.cssText = "animation: backFlickr 0.2s 3;";

            setTimeout(function () {
                back.style.cssText =
                    "  background-color: red;" +
                    "background-blend-mode: multiply;";


            }, 210);


            lost();


        }, (6000 + gunmanTiming * 1000));


        //Остановка после проигрыша


        var timer4 = setTimeout(stop, 10000);


        // Уход с экрана

        var timer5 = setTimeout(function () {


            goBack();

            setTimeout(over, 6000);

        }, 11000);


    }


})();

