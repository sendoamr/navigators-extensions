
chrome.runtime.onMessage.addListener(
  function(req, sender, sendResponse) {
  if (req.details) {
    var details = req.details;
    $('input[name="title"]').val('Titulo');
    $('input[name="url"]').val(details.url);
  }
});