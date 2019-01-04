var megaManPort = document.getElementById('MegaMan');
var audio = document.getElementsByTagName("audio")[0];
var megaManPortIndex = 0;

function hoverOverRobot(x){
    megaManPortIndex = x;
    switch (megaManPortIndex) {
        case 1:
            megaManPort.src = "styles/images/portraits/megaman/top-left.png";
            audio.play();
        break;

        case 2:
            megaManPort.src = "styles/images/portraits/megaman/top-mid.png";
            audio.play();
        break;

        case 3:
            megaManPort.src = "styles/images/portraits/megaman/top-right.png";
            audio.play();
        break;

        case 4:
            megaManPort.src = "styles/images/portraits/megaman/left.png";
            audio.play();
        break;

        case 5:
            megaManPort.src = "styles/images/portraits/megaman/right.png";
            audio.play();
        break;

        case 6:
            megaManPort.src = "styles/images/portraits/megaman/bot-left.png";
            audio.play();
        break;

        case 7:
            megaManPort.src = "styles/images/portraits/megaman/bot-mid.png";
            audio.play();
        break;

        case 8:
            megaManPort.src = "styles/images/portraits/megaman/bot-right.png";
            audio.play();
        break;

        case 0: 
            megaManPort.src = "styles/images/portraits/megaman/mid.png";
        break;

        default:
            megaManPort.src = "styles/images/portraits/megaman/mid.png";
    }        
}