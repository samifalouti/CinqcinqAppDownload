document.getElementById('downloadButton').addEventListener('click', function() {
    // Provide the relative path to your app file
    var appPath = './app/app-release.apk'; // Change 'your_app.apk' to the actual file name

    // Create a temporary link element
    var link = document.createElement('a');
    link.href = appPath;
    link.download = './app/app-release.apk'; // Change the download file name if needed

    // Append the link to the document body and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);

    // Check if the app is installed after download
    if (!checkIfAppInstalled()) {
        // If the app is not installed, prompt the user to install it
        if (confirm("The app is not installed. Do you want to install it now?")) {
            // Replace 'yourapp://path' with the URI scheme specific to your app
            var appURI = './app/app-release.apk';
            // Open the app in the device's default app store for installation
            window.location.href = appURI;
        }
    }
});


function checkIfAppInstalled() {
    // Replace 'yourapp://path' with the URI scheme specific to your app
    var appURI = './app/app-release.apk';
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appURI;
    document.body.appendChild(iframe);

    setTimeout(function() {
        document.body.removeChild(iframe);
    }, 3000); // Adjust timeout as needed

    // If the app is installed, the device will attempt to open it, and the return value will be true
    // If the app is not installed or the device doesn't support URI schemes, the return value will be false
    return true; // Change this logic based on your actual implementation
}



// Get the modal and image elements and handle their functionality as before
var modal = document.querySelector('.modal');
var modalImg = document.getElementById('modal-img');
var images = document.querySelectorAll('.slide img');

images.forEach(function(image) {
  image.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});

var closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
