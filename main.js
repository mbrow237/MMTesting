var megaManPort = document.getElementById('MegaMan');
var megaManPortIndex = 0;

function hoverOverRobot(x){
    megaManPortIndex = x;
    switch (megaManPortIndex) {
        case 1:
            megaManPort.src = "styles/images/portraits/megaman/top-left.png";
        break;

        case 2:
            megaManPort.src = "styles/images/portraits/megaman/top-mid.png";
        break;

        case 3:
            megaManPort.src = "styles/images/portraits/megaman/top-right.png";
        break;

        case 4:
            megaManPort.src = "styles/images/portraits/megaman/left.png";
        break;

        case 5:
            megaManPort.src = "styles/images/portraits/megaman/right.png";
        break;

        case 6:
            megaManPort.src = "styles/images/portraits/megaman/bot-left.png";
        break;

        case 7:
            megaManPort.src = "styles/images/portraits/megaman/bot-mid.png";
        break;

        case 8:
            megaManPort.src = "styles/images/portraits/megaman/bot-right.png";
        break;

        case 0: 
            megaManPort.src = "styles/images/portraits/megaman/mid.png";
        break;

        default:
            megaManPort.src = "styles/images/portraits/megaman/mid.png";
    }        
}