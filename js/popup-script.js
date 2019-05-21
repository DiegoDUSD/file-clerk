var renameFileButton = document.getElementById("rename-file-button");
var pageBody = document.getElementById("page-body");
var renamePopup = document.getElementById("rename-popup");

renameFileButton.addEventListener("click", function() {
    pageBody.classList.add("unfocused-page");
    renamePopup.classList.add("rename-popup-visible");
});

// Cancel button
var cancelRenameButton = document.getElementById("cancel-rename-button");

cancelRenameButton.addEventListener("click", function() {
    pageBody.classList.remove("unfocused-page");
    renamePopup.classList.remove("rename-popup-visible");
});