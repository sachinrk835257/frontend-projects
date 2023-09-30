console.log('script is running');
const uploadBox = document.querySelector('.upload-box');
const loadedImage = uploadBox.querySelector('img');
const fileInput = document.querySelector('#file-input');
const imageWidth = document.querySelector('#width-input');
const imageHeight = document.querySelector('#height-input');
const ratioAspect = document.querySelector('#ratio-aspect');
// const quality = document.querySelector('.quality');
let imgQuality = document.querySelector('.quality');
const downloadBtn = document.querySelector('.download-btn')
let proportion, file;

const loadImage = (e) => {
    file = e.target.files[0];
    if (!file) {
        alert('file is not seleted any');
    }
    console.log(file)
    let imagePath = URL.createObjectURL(file);          // give the URL path of the given file choosen
    loadedImage.src = imagePath;
    uploadBox.className = 'upload-box active';
    uploadBox.style.backgroundColor = 'white';
    uploadBox.style.border = 'none'
    loadedImage.addEventListener('load', () => {           //load the image succesfully then apply naturalWidth and naturalHeight property

        imageWidth.value = loadedImage.naturalWidth;
        imageHeight.value = loadedImage.naturalHeight;
        proportion = imageWidth.value / imageHeight.value;
    })


    // console.log(imagePath)

}

const resizeAndCompress = () => {
    if (!file) {
        alert('file is not seleted any');
    }
    else {
        console.log('file is seleted')
        if (confirm("sure to download the image")) {
            let canvas = document.createElement('canvas');
            imgQuality = imgQuality.checked ? 0.7 : 1;
            let a = document.createElement('a');
            canvas.width = imageWidth.value;
            canvas.height = imageHeight.value;
            let ctx = canvas.getContext('2d');
            ctx.drawImage(loadedImage, 0, 0, canvas.width, canvas.height);
            // document.body.appendChild(canvas);
            a.href = canvas.toDataURL("images/jpeg", imgQuality);
            a.download = new Date().getTime();
            a.click();
        }
    }
}

uploadBox.addEventListener('click', () => {
    fileInput.click();
})
fileInput.addEventListener('change', loadImage);

imageWidth.addEventListener('change', () => {
    imageHeight.value = ratioAspect.checked ? Math.floor(imageWidth.value / proportion) : imageHeight.value
})
imageHeight.addEventListener('change', () => {
    imageWidth.value = ratioAspect.checked ? Math.floor(imageHeight.value * proportion) : imageWidth.value
})

downloadBtn.addEventListener('click', resizeAndCompress);