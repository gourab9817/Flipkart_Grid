// Function to open the camera and display the feed
function openCamera() {
    const cameraFeed = document.getElementById('cameraFeed');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                const video = document.createElement('video');
                video.srcObject = stream;
                video.width = 640;
                video.height = 480;
                video.autoplay = true;

                // Clear any existing content in the camera feed
                cameraFeed.innerHTML = '';
                cameraFeed.appendChild(video);
            })
            .catch(function(err) {
                alert("Error accessing camera: " + err.message);
            });
    } else {
        alert("Camera is not supported by your browser");
    }
}

// Function to trigger image upload dialog
function triggerImageUpload() {
    document.getElementById('imageUpload').click();
}

// Function to handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    const cameraFeed = document.getElementById('cameraFeed');

    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.width = 640;
        img.height = 480;

        // Clear any existing content in the camera feed
        cameraFeed.innerHTML = '';
        cameraFeed.appendChild(img);

        // Show the Predict button after the image is uploaded
        const predictButton = document.getElementById('predictButton');
        predictButton.style.display = 'inline-block'; // Make the Predict button visible
    } else {
        alert("No file selected.");
    }
}

// Function to handle the "Predict" button click
function predictResult() {
    const resultDiv = document.getElementById('result');
    
    // Simulate a prediction result based on the uploaded image
    resultDiv.innerHTML = "Prediction: The uploaded image is likely a fresh item."; // Placeholder text for prediction result
    resultDiv.style.display = 'block'; // Make the result visible
}
