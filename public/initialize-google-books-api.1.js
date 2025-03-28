function waitForGoogleApi(attempts = 20) {
  if (attempts <= 0) {
    console.error("Google API script failed to load.");
    return;
  }

  if (window.google && window.google.books) {
    google.books.load();
  } else {
    setTimeout(() => waitForGoogleApi(attempts - 1), 500);
  }
}

waitForGoogleApi();
