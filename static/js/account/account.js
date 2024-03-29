
// account/account.js
console.log('account/account.js')

try {
    var cropper;
    var imageFile;
    var base64ImageString;
    var cropX;
    var cropX;
    var cropWidth;
    var cropHeight;
    enableImageOverlay()
} catch {}

function enableImageOverlay(){
    var text = document.getElementById("id_text")
    text.style.backgroundColor = "#0D47A1"
    text.style.color = "white"
    text.style.fontSize = "16px"
    text.style.padding = "16px 32px"
    text.style.cursor = "pointer"

    var profileImage = document.getElementById("id_profile_image_edit_profile")
    profileImage.style.opacity = "1"
    profileImage.style.display = "block"
    profileImage.style.width = "100%"
    profileImage.style.height = "auto"
    profileImage.style.transition = ".5s ease"
    profileImage.style.backfaceVisibility  = "hidden"
    profileImage.style.cursor = "pointer"

    var middleContainer = document.getElementById("id_middle_container")
    middleContainer.style.transition = ".5s ease"
    middleContainer.style.opacity = "0"
    middleContainer.style.position = "absolute"
    middleContainer.style.top = "50%"
    middleContainer.style.left = "50%"
    middleContainer.style.transform = "translate(-50%, -50%)"
    middleContainer.style.textAlign = "center"

    var imageContainer = document.getElementById("id_image_container")
    imageContainer.addEventListener("mouseover", function( event ) { 
        profileImage.style.opacity = "0.3"
        middleContainer.style.opacity = "1"
    })

    imageContainer.addEventListener("mouseout", function( event ) { 
        profileImage.style.opacity = "1"
        middleContainer.style.opacity = "0"
    })

    imageContainer.addEventListener("click", function(event){
        document.getElementById('id_profile_image_edit_profile').click();
    });

    var cropConfirm = document.getElementById("id_image_crop_confirm")
    cropConfirm.classList.remove("d-flex")
    cropConfirm.classList.remove("flex-row")
    cropConfirm.classList.remove("justify-content-between")
    cropConfirm.classList.add("d-none")
    
}

function disableImageOverlay(){
    var profileImage = document.getElementById("id_profile_image_edit_profile_display")
    var middleContainer = document.getElementById("id_middle_container")
    var imageContainer = document.getElementById("id_image_container")
    var text = document.getElementById("id_text")

    imageContainer.removeEventListener("mouseover", function( event ) { 
        profileImage.style.opacity = "0.3"
        middleContainer.style.opacity = "1"
    })

    imageContainer.removeEventListener("mouseout", function( event ) { 
        profileImage.style.opacity = "1"
        middleContainer.style.opacity = "0"
    })

    profileImage.style.opacity = "1"
    middleContainer.style.opacity = "0"
    text.style.cursor = "default"
    text.style.opacity = "0"

    document.getElementById('id_image_container').removeEventListener("click", function(event){
        event.preventDefault();
        // do nothing
    });
    document.getElementById('id_profile_image_edit_profile').addEventListener("click", function(event){
        event.preventDefault();
        // do nothing
    });

    var cropConfirm = document.getElementById("id_image_crop_confirm")
    cropConfirm.classList.remove("d-none")
    cropConfirm.classList.add("d-flex")
    cropConfirm.classList.add("flex-row")
    cropConfirm.classList.add("justify-content-between")

    var confirm = document.getElementById("id_confirm")
    confirm.addEventListener("click", function(event){
        //console.log("Sending crop data for processing...")
        cropImage(
            imageFile, 
            cropX, 
            cropY, 
            cropWidth,
            cropHeight
        )
        document.getElementById('edit').style.display = 'none';
        document.getElementById('CloseMessenger').click()
    })

    var cancel = document.getElementById("id_cancel")
    cancel.addEventListener("click", function(event){
        console.log("Reloading window...")
        window.location.reload();
    })
}

function isImageSizeValid(image){
    console.log("max size: {{DATA_UPLOAD_MAX_MEMORY_SIZE}}")
    var startIndex = image.indexOf("base64,") + 7;
    var base64str = image.substr(startIndex);
    var decoded = atob(base64str);
    console.log("FileSize: " + decoded.length);
    if(decoded.length>= "{{DATA_UPLOAD_MAX_MEMORY_SIZE}}"){
        return null
    }
    return base64str
}

function cropImage(image, x, y, width, height){
    base64ImageString = isImageSizeValid(image)
    if(base64ImageString != null){
        var requestData = {
            "csrfmiddlewaretoken": "{{ csrf_token }}",
            "image": base64ImageString,
            "cropX": cropX,
            "cropY": cropY,
            "cropWidth": cropWidth,
            "cropHeight": cropHeight
        }
        displayLoadingSpinner(true)
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: "{% url 'crop_image' user_id=form.initial.id %}",
            data: requestData,
            timeout: 10000,
            success: function(data) {
                if(data.result == "success"){
                    document.getElementById("id_cancel").click()
                    // window.location.reload()
                }
                else if(data.result == "error"){
                    alert(data.exception)
                    document.getElementById("id_cancel").click()
                }
            },
            error: function(data) {
                console.error("ERROR...", data)
            },
            complete: function(data){
                displayLoadingSpinner(false)
            }
        });
    }
    else{
        alert("Upload an image smaller than 10 MB");
        document.getElementById("id_cancel").click()
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            disableImageOverlay()
            var image = e.target.result
            var imageField = document.getElementById('id_profile_image_edit_profile_display')
            imageField.src = image
            cropper = new Cropper(imageField, {
                aspectRatio: 1/1,
                crop(event) {
                    //console.log("CROP START")
                    //console.log("x: " + event.detail.x);
                    //console.log("y: " + event.detail.y);
                    //console.log("width: " + event.detail.width);
                    //console.log("height: " + event.detail.height);
                    setImageCropProperties(
                        image,
                        event.detail.x,
                        event.detail.y,
                        event.detail.width,
                        event.detail.height
                    )
                },
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
};

function setImageCropProperties(image, x, y, width, height){
    imageFile = image
    cropX = x
    cropY = y
    cropWidth = width
    cropHeight = height
}