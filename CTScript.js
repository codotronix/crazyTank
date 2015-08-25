$(function () {
    //alert("ready");


    //everything related to arena named gamePanel
    var arena = {};
    arena.height = parseInt($("#arena").css("height"));
    arena.width =  parseInt($("#arena").css("width"));
    //alert("arena.height = " + arena.height + " and arena.width = " + arena.width);


    //everything related to myTank
    var myTank = {};
    myTank.left = parseInt($("#myTank").css("left"));
    myTank.top = parseInt($("#myTank").css("top"));
    myTank.width = parseInt($("#myTank").css("width"));
    myTank.height = parseInt($("#myTank").css("height"));
    myTank.shift = 5;
    //alert("myTank.left = " + myTank.left + " and myTank.top = " + myTank.top);


    //everything related to player turret
    var turret = {};
    turret.status = "sleeping";         //sleeping or running
    turret.direction = "right";


    //everything related to enemy tank named BigTank
    var bigTank = {};
    bigTank.left = parseInt($("#BigTank").css("left"));
    bigTank.top = parseInt($("#BigTank").css("top"));
    bigTank.width = parseInt($("#BigTank").css("width"));
    bigTank.height = parseInt($("#BigTank").css("height"));
    bigTank.shift = 3;
    //alert(bigTank.left + "..." + bigTank.top + "..." + bigTank.width + "..." + bigTank.height);


    //everything related to enemy turret named BigTurret
    var BigTurret = {};
    BigTurret.status = "sleeping";
    BigTurret.direction = "up";


    //everything related to Gola
    var gola = {};
    gola.left = myTank.left + 50;
    gola.top = myTank.top + 14;
    gola.width = parseInt($("#Gola").css("width"));
    gola.height = parseInt($("#Gola").css("height"));
    gola.direction = "right";
    gola.shift = 15;

    

    $(document).keydown(function (e) {
        //alert(e.keyCode);

        switch (e.keyCode) {
            case 37:
                //alert("Left Arrow Key Pressed...");

                //Face Left
                $("#Turret").removeClass().addClass("TurretLeft");
                turret.direction = "left";

                //modify tank position
                myTank.left -= myTank.shift;
                if (myTank.left < 0) { myTank.left = 0;}

                /*
                if (parseInt($("#MyTank").css("left")) > 0) {
                    //move the tank left
                    $("#MyTank").stop().animate({ "left": "-=30px" });
                    //update the Gola Position
                    /*
                    $("#Gola").css({
                        "left":$("#MyTank").position().left - 20 + 'px',
                        "top":$("#MyTank").position().top + 14 + 'px'
                    });
                    */
                    //GolaPosUpdated = true;
                    //turret.direction = "left";
                //} 
                break;
            case 38:
                //alert("Up Arrow Key Pressed...");

                //Face Up
                $("#Turret").removeClass().addClass("TurretUp");
                turret.direction = "up";

                //modify tank position
                myTank.top -= myTank.shift;
                if (myTank.top < 0) { myTank.top = 0;}

                // 
                //if (parseInt($("#MyTank").css("top")) > 0) {
                    //move the tank up
                    //$("#MyTank").stop().animate({ "top": "-=30px" });
                    //update the Gola Position
                    /*$("#Gola").css({
                        "left":$("#MyTank").position().left + 15 + 'px',
                        "top":$("#MyTank").position().top - 22 + 'px'
                    });*/

                    //GolaPosUpdated = true;
                   // turret.direction = "up";
               // }
                break;
            case 39:
                //alert("Right Arrow Key Pressed...");

                //Face Right
                $("#Turret").removeClass().addClass("TurretRight");
                turret.direction = "right";

                //modify tank position
                myTank.left += myTank.shift;
                if (myTank.left + myTank.width > arena.width) { myTank.left = arena.width - myTank.width;}

                //
                //if (parseInt($("#MyTank").css("left")) < 610) {
                    //move the tank right
                    //$("#MyTank").stop().animate({ "left": "+=30px" });
                    //update the Gola Position
                    /*$("#Gola").css({
                        "left":$("#MyTank").position().left + 50 + 'px',
                        "top":$("#MyTank").position().top + 14 + 'px'
                    });*/

                    //GolaPosUpdated = true;
                    //turret.direction = "right";
                //}
                break;
            case 40:
                //alert("Down Arrow Key Pressed...");

                //Face Down
                $("#Turret").removeClass().addClass("TurretDown");
                turret.direction = "down";

                //modify tank position
                myTank.top += myTank.shift;
                if(myTank.top > arena.height - myTank.height){ myTank.top = arena.height - myTank.height;}

                //$("#Turret").removeClass().addClass("TurretDown");
                //if (parseInt($("#MyTank").css("top")) < 460) {
                    //move the tank down
                    //$("#MyTank").stop().animate({ "top": "+=30px" });
                    //update the Gola Position
                    /*$("#Gola").css({
                        "left":$("#MyTank").position().left + 15 + 'px',
                        "top":$("#MyTank").position().top + 50 + 'px'
                    });*/

                    //GolaPosUpdated = true;
                    //turret.direction = "down";
                //}
                break;
            case 32:        //SPACE to FIRE
                //alert(turret.status);
                if (turret.status == "sleeping")
                {
                    turret.status = "running";
                    gola.direction = turret.direction;                    
                    //alert(turret.status + gola.direction + turret.direction);

                    if (turret.direction === "left")
                    {
                        gola.left = myTank.left - 20;
                        gola.top = myTank.top + 14;
                    }
                    else if (turret.direction === "right")
                    {
                        gola.left = myTank.left + 50;
                        gola.top = myTank.top + 14;
                    }
                    else if (turret.direction === "up")
                    {
                        gola.left = myTank.left + 15;
                        gola.top = myTank.top - 22;
                    }
                    else if (turret.direction === "down")
                    {
                        gola.left = myTank.left + 15;
                        gola.top = myTank.top + 50;
                    }

                    //alert(turret.status);

                    $("#Gola").css({
                        "display": "block",
                        "left": gola.left,
                        "top": gola.top
                    });
                }
                
                /*
                golaLeft = $("#Gola").position().left;
                golaTop = $("#Gola").position().top;
                //alert("left = "+golaLeft+"   Top = "+golaTop);
                //GolaPosUpdated = false;

                if (passed2sec === true && turret.direction === "left") {
                    golaLeft = $("#MyTank").position().left - 20;
                    golaTop = $("#MyTank").position().top + 14;
                    SetGolaPosition();
                    $("#Gola").fadeIn().animate({ "left": "-=150px" }).fadeOut();
                    passed2sec = false;
                }
                else if (passed2sec === true && turret.direction === "right") {
                    golaLeft = $("#MyTank").position().left + 50;
                    golaTop = $("#MyTank").position().top + 14;
                    SetGolaPosition();
                    $("#Gola").fadeIn().animate({ "left": "+=150px" }).fadeOut();
                    passed2sec = false;
                }
                else if (passed2sec === true && turret.direction === "up") {
                    golaLeft = $("#MyTank").position().left + 15;
                    golaTop = $("#MyTank").position().top - 22;
                    SetGolaPosition();
                    $("#Gola").fadeIn().animate({ "top": "-=150px" }).fadeOut();
                    passed2sec = false;
                }
                else if (passed2sec === true && turret.direction === "down") {
                    golaLeft = $("#MyTank").position().left + 15;
                    golaTop = $("#MyTank").position().top + 50;
                    SetGolaPosition();
                    $("#Gola").fadeIn().animate({ "top": "+=150px" }).fadeOut();
                    passed2sec = false;
                }
                */
                /*if(GolaPosUpdated === false)        //that means no ARROW Call made in between
                {
                    //hence golaLeft and golaRight holds the old velue before Firing the Gola
                    SetGolaPosition();
                }*/
                //

                break;
            default:
                //alert("Press Arrow Keys (Left/Right/Up/Down) to MOVE and SPACE to Fire");
        }
    });

    function render()
    {
        drawMyTank();
        drawBigTank();

        if (turret.status == "running") { drawGola(); }
    }

    function drawGola()
    {
        if (gola.direction == "left")
        {
            gola.left -= gola.shift;
            $("#Gola").css({ "left": gola.left });
            if (gola.left < 0)
            {
                turret.status = "sleeping";
                $("#Gola").css({ "display":"none" });
            }
        }
        else if (gola.direction == "right")
        {
            gola.left += gola.shift;
            $("#Gola").css({ "left": gola.left });
            if (gola.left > arena.width + gola.width)
            {
                turret.status = "sleeping";
                $("#Gola").css({ "display": "none" });
            }
        }
        else if (gola.direction == "up") {
            gola.top -= gola.shift;
            $("#Gola").css({ "top": gola.top });
            if (gola.top < 0) {
                turret.status = "sleeping";
                $("#Gola").css({ "display": "none" });
            }
        }
        else if (gola.direction == "down") {
            gola.top += gola.shift;
            $("#Gola").css({ "top": gola.top });
            if (gola.top > arena.height + gola.height) {
                turret.status = "sleeping";
                $("#Gola").css({ "display": "none" });
            }
        }
    }

    function drawMyTank()
    {
        $("#myTank").css({
            "top": myTank.top,
            "left":myTank.left
        });
    }

    var rand1 = 0;
    var moveCount = 0;
    

    function drawBigTank()
    {
        moveCount++;
        if (moveCount % 30 == 0)
        {
            rand1 = Math.ceil(Math.random() * 4);      // 1=left 2=right 3=up 4=down
            moveCount = 0;
        }
        //alert(rand1);

        if (rand1 == 1)                 // 1=Left
        {
            $("#BigTurret").removeClass().addClass("BigTurretLeft");
            bigTank.left -= bigTank.shift;
            if (bigTank.left < 0) { bigTank.left = 0; rand1 = 2;}
            $("#BigTank").css({ "left": bigTank.left });
        }
        else if (rand1 == 2)            //2=Right
        {
            $("#BigTurret").removeClass().addClass("BigTurretRight");
            bigTank.left += bigTank.shift;
            if (bigTank.left + bigTank.width > arena.width) { bigTank.left = arena.width - bigTank.width; rand1 = 1;}
            $("#BigTank").css({ "left": bigTank.left });
        }
        else if (rand1 == 3)            //3=Up
        {
            $("#BigTurret").removeClass().addClass("BigTurretUp");
            bigTank.top -= bigTank.shift;
            if (bigTank.top < 0) { bigTank.top = 0; rand1 = 4; }
            $("#BigTank").css({ "top": bigTank.top });
        }
        else if (rand1 == 4)            //4=Down
        {
            $("#BigTurret").removeClass().addClass("BigTurretDown");
            bigTank.top += bigTank.shift;
            if (bigTank.top + bigTank.height > arena.height) { bigTank.top = arena.height - bigTank.height; rand1 = 3;}
            $("#BigTank").css({ "top": bigTank.top });
        }

    }


    setInterval(render, 1000 / 30);

});
