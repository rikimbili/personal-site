google.books.load();

function initializeGoogleBooksApi() {
  var viewer = new google.books.DefaultViewer(
    document.getElementById("viewerCanvas"),
  );
  viewer.load("ISBN:0738531367");
}

google.books.setOnLoadCallback(initializeGoogleBooksApi);
