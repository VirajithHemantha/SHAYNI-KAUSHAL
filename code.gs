function doPost(e) {
  try {
    var spreadsheetId = '1uNQDmFngZLQNpFAOXzfMqSo8QE-KiNYOylkG2qxEV8I';
    var ss = SpreadsheetApp.openById(spreadsheetId);

    var body = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var payload = JSON.parse(body);

    var formType = String(payload.formType || '').toLowerCase();
    var submittedAt = payload.submittedAt || new Date().toISOString();
    var source = String(payload.source || 'wedding-site').toLowerCase();
    var isHomecoming = source.indexOf('homecoming') !== -1 || source.indexOf('homecomming') !== -1;

    var rsvpSheetName = 'rsvp';
    var wishSheetName = 'wish';

    if (isHomecoming) {
      if (source.indexOf('homecomming') !== -1) {
        rsvpSheetName = 'homecomming_rsvp';
        wishSheetName = 'homecomming_wish';
      } else {
        rsvpSheetName = 'homecoming_rsvp';
        wishSheetName = 'homecoming_wish';
      }
    }

    if (formType === 'rsvp') {
      var rsvpSheet = ss.getSheetByName(rsvpSheetName);
      if (!rsvpSheet) {
        rsvpSheet = ss.insertSheet(rsvpSheetName);
      }

      if (rsvpSheet.getLastRow() === 0) {
        rsvpSheet.appendRow(['submittedAt', 'name', 'guests', 'dietary', 'source']);
      }

      rsvpSheet.appendRow([
        submittedAt,
        payload.name || '',
        payload.guests || '',
        payload.dietary || '',
        payload.source || 'website',
      ]);
    } else if (formType === 'wish') {
      var wishSheet = ss.getSheetByName(wishSheetName);
      if (!wishSheet) {
        wishSheet = ss.insertSheet(wishSheetName);
      }

      if (wishSheet.getLastRow() === 0) {
        wishSheet.appendRow(['submittedAt', 'name', 'message', 'source']);
      }

      wishSheet.appendRow([
        submittedAt,
        payload.name || '',
        payload.message || '',
        payload.source || 'website',
      ]);
    } else {
      throw new Error('Invalid formType. Expected rsvp or wish.');
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "success", message: "Wedding App Script is running properly. Please use POST for submissions." }))
    .setMimeType(ContentService.MimeType.JSON);
}
