document.addEventListener('DOMContentLoaded', function() {
    //Selecting all required elements
    const filterItem = document.querySelector(".items");
    const filterImg = document.querySelectorAll(".image");

    window.onload = () => {
        filterItem.onclick = (selectedItem) => {
            if (selectedItem.target.classList.contains("item")) {
                filterItem.querySelector('.active').classList.remove("active");
                selectedItem.target.classList.add('active');
                let filterName = selectedItem.target.getAttribute("data-name");
                console.log(filterName);
                filterImg.forEach((image) => {
                    let filterImages = image.getAttribute("data-name");
                    //if user selected item data-name value is equal to image data-name value
                    //or user selected item data-name value to "all"
                    if ((filterImages == filterName) || (filterName == "tous")) {
                        image.classList.remove("hide");
                        image.classList.add("show");
                    } else {
                        image.classList.add("hide");
                        image.classList.remove("show");
                    }
                });
            }
        }
    }

    //fullscreen image preview function
    //selecting all required elements
    const previewBox = document.querySelector(".preview-box"),
        categoryName = previewBox.querySelector(".title p"),
        previewImg = previewBox.querySelector("img"),
        closeIcon = previewBox.querySelector(".icon"),
        shadow = document.querySelector(".shadow");

    function preview(element) {
        //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
        document.querySelector("body").style.overflow = "hidden";
        let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
        let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
        previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
        categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
        previewBox.classList.add("show"); //show the preview image box
        shadow.classList.add("show"); //show the light grey background
        closeIcon.onclick = () => { //if user click on close icon of preview box
            console.log("close")
            previewBox.classList.remove("show"); //hide the preview box
            shadow.classList.remove("show"); //hide the light grey background
            document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
        }
    }


    console.log('le document est chargé');
}, false);