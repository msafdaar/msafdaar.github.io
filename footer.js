(function () {
  var hook = document.querySelector("[data-footer]");
  if (!hook) return;

  var waIcon =
    '<svg class="footer-icon-svg" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path fill="currentColor" d="M17.472,14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94,1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198,0-.52.074-.792.372-.272.297-1.04,1.016-1.04,2.479,0,1.462,1.065,2.875,1.213,3.074.149.198,2.096,3.2,5.077,4.487.709.306,1.262.489,1.694.625.712.227,1.36.195,1.871.118.571-.085,1.758-.719,2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421,7.403h-.004a9.87,9.87,0,0,1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86,9.86,0,0,1-1.51-5.26c.001-5.45,4.436-9.884,9.888-9.884,2.64,0,5.122,1.03,6.988,2.898a9.825,9.825,0,0,1,2.893,6.994c-.003,5.45-4.437,9.884-9.885,9.884m8.413-18.297A11.815,11.815,0,0,0,12.05,0C5.495,0,.16,5.335.157,11.892c0,2.096.547,4.142,1.588,5.945L.057,24l6.305-1.654a11.882,11.882,0,0,0,5.683,1.448h.005c6.554,0,11.89-5.335,11.893-11.893a11.821,11.821,0,0,0-3.48-8.413Z" />' +
    "</svg>";

  var ghIcon =
    '<svg class="footer-icon-svg" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path fill="currentColor" d="M12,.297c-6.63,0-12,5.373-12,12,0,5.303,3.438,9.8,8.205,11.385.6.113.82-.258.82-.577,0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422,18.07,3.633,17.7,3.633,17.7c-1.087-.744.084-.729.084-.729,1.205.084,1.838,1.236,1.838,1.236,1.07,1.835,2.809,1.305,3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93,0-1.31.465-2.38,1.235-3.22-.135-.303-.54-1.523.105-3.176,0,0,1.005-.322,3.3,1.23.96-.267,1.98-.399,3-.405,1.02.006,2.04.138,3,.405,2.28-1.552,3.285-1.23,3.285-1.23.645,1.653.24,2.873.12,3.176.765.84,1.23,1.91,1.23,3.22,0,4.61-2.805,5.625-5.475,5.92.42.36.81,1.096.81,2.22,0,1.606-.015,2.896-.015,3.286,0,.315.21.69.825.57C20.565,22.092,24,17.592,24,12.297c0-6.627-5.373-12-12-12" />' +
    "</svg>";

  var pinIcon =
    '<svg class="footer-pin-svg" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path fill="currentColor" d="M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zM12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5z" />' +
    "</svg>";

  var clockIcon =
    '<svg class="footer-time-svg" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path fill="currentColor" d="M11.99,2C6.47,2 2,6.48 2,12s4.47,10 9.99,10C17.52,22 22,17.52 22,12S17.52,2 11.99,2zM12,20c-4.42,0 -8,-3.58 -8,-8s3.58,-8 8,-8 8,3.58 8,8 -3.58,8 -8,8zM12.5,7H11v6l5.25,3.15 0.75,-1.23 -4.5,-2.67z" />' +
    "</svg>";

  hook.innerHTML = `
  <p class="footer-time">${clockIcon} <span class="footer-clock" aria-label="Current time in Pakistan" data-footer-clock>12:00:00AM</span></p>
  <p class="footer-location">${pinIcon} Kamalia, Punjab, PK <span class="footer-flag" aria-hidden="true">\u{1F1F5}\u{1F1F0}</span></p>
  <div class="footer-row">
    <p class="footer-copyright">\u00A9 2026 Safdar</p>
    <nav class="footer-links" aria-label="Contact links">
      <a class="footer-icon" href="https://wa.me/923446834780" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${waIcon}</a>
      <a class="footer-icon" href="https://github.com/msafdaar" target="_blank" rel="noopener" aria-label="GitHub profile">${ghIcon}</a>
    </nav>
  </div>
  `;

  var clockEl = hook.querySelector("[data-footer-clock]");
  if (clockEl) {
    var format = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Karachi",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    function renderClock() {
      var parts = {};
      format.formatToParts(new Date()).forEach(function (part) {
        parts[part.type] = part.value;
      });
      clockEl.textContent = parts.hour + ":" + parts.minute + ":" + parts.second + " " +parts.dayPeriod;
    }

    renderClock();
    window.setInterval(renderClock, 1000);
  }
})();