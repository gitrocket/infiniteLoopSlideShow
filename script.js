
// variables

var i = 0; // start point
var images = []; // initialize an empty images array
var time = 3000;

// image list

images[0] = 'images/image_001.jpg'
images[1] = 'images/image_002.jpg'
images[2] = 'images/image_003.jpg'
images[3] = 'images/image_004.jpg'
images[4] = 'images/image_005.jpg'
images[5] = 'images/image_006.jpg'
images[6] = 'images/image_007.jpg'
images[7] = 'images/image_008.jpg'

// change image

function changeImg() {
    var image = document.getElementById('slide');
    image.src = images[i];
      
    if(i < images.length -1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg;