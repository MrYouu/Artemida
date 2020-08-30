//  The JavaScript code is property to Mr. You (Kristiyan Valchev) and can only be viewed
//  If you want to use part of the code, please first contact me: mr.youdevelopment@gmail.com

var sideMenuState = 1;

function sideMenu()
{
    if (sideMenuState == 1)
    {
        document.getElementById("pageHolder").style.transform = "translate(-200px)";
        document.getElementById("line1").style.animation = "line1AnimationOpen .3s ease-out forwards";
        document.getElementById("line2").style.animation = "fadeOut .3s ease-out forwards";
        document.getElementById("line3").style.animation = "line3AnimationOpen .3s ease-out forwards";

        window.scroll(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        sideMenuState = 2;
    }
    else if (sideMenuState == 2)
    {
        document.getElementById("pageHolder").style.transform = "translate(0px)";
        document.getElementById("line1").style.animation = "line1AnimationClose .3s ease-out forwards";
        document.getElementById("line2").style.animation = "fadeIn .3s ease-out forwards";
        document.getElementById("line3").style.animation = "line3AnimationClose .3s ease-out forwards";
        sideMenuState = 1;
    }
}

function defaultFunction()
{

}