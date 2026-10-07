(() => {
  document.documentElement.classList.add('js');
  document.querySelector('#current-year').textContent = new Date().getFullYear();

  const widget = document.querySelector('#seated-55fdf2c0');
  const status = document.querySelector('#tour-status');
  const message = document.querySelector('#tour-status-message');
  const retry = document.querySelector('#tour-retry');
  let timeout;

  const showError = () => {
    if (status.hidden) return;
    message.textContent = 'Shows couldn’t load. Try again or get show alerts.';
    retry.hidden = false;
  };

  const styleEvent = row => {
    const dateCell = row.querySelector('.seated-event-date-cell');
    if (dateCell && !dateCell.querySelector('.tour-date')) {
      const label = dateCell.textContent.trim();
      const match = label.match(/^([a-z]{3,9})\s+(\d{1,2}),?\s+(\d{4})$/i);
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      const month = match ? months.indexOf(match[1].slice(0, 3).toLowerCase()) : -1;
      if (match && month !== -1) {
        const time = document.createElement('time');
        time.className = 'tour-date';
        time.dateTime = `${match[3]}-${String(month + 1).padStart(2, '0')}-${match[2].padStart(2, '0')}`;
        time.setAttribute('aria-label', label);
        const day = document.createElement('span');
        day.className = 'tour-date-day';
        day.textContent = String(Number(match[2]));
        const monthLabel = document.createElement('span');
        monthLabel.className = 'tour-date-month';
        monthLabel.textContent = match[1].slice(0, 3);
        const year = document.createElement('span');
        year.className = 'tour-date-year';
        year.textContent = match[3];
        time.append(monthLabel, day, year);
        dateCell.replaceChildren(time);
      }
    }

    const location = row.querySelector('.seated-event-venue-location');
    if (location && !location.querySelector('.tour-city')) {
      const label = location.textContent.trim();
      const separator = label.lastIndexOf(',');
      const city = document.createElement('span');
      city.className = 'tour-city';
      city.textContent = separator > 0 ? label.slice(0, separator) : label;
      location.replaceChildren(city);
      if (separator > 0) {
        const comma = document.createElement('span');
        comma.className = 'sr-only';
        comma.textContent = ', ';
        const region = document.createElement('span');
        region.className = 'tour-region';
        region.textContent = label.slice(separator + 1).trim();
        location.append(comma, region);
      }
    }
  };

  const updateWidget = () => {
    widget.querySelectorAll('.seated-follow-box').forEach(box => box.remove());
    widget.querySelectorAll('.seated-events-table > div').forEach(element => {
      if (element.textContent.trim().startsWith('powered by') &&
          element.querySelector('a[href="https://www.seated.com"], a[href="https://www.seated.com/"]')) {
        element.remove();
      }
    });

    if (!widget.querySelector('.seated-event-row, .seated-no-events')) {
      if (status.hidden) {
        status.hidden = false;
        message.textContent = 'Loading shows…';
        retry.hidden = true;
        timeout = setTimeout(showError, 15000);
      }
      return;
    }
    status.hidden = true;
    clearTimeout(timeout);
    widget.querySelectorAll('.seated-event-row').forEach(styleEvent);
    // Seated injects links asynchronously. Preserve its labels and destinations.
    widget.querySelectorAll('a[target="_blank"]').forEach(link => {
      link.setAttribute('rel', 'noopener noreferrer');
    });
  };

  new MutationObserver(updateWidget).observe(widget, { childList: true, subtree: true });
  document.querySelector('#seated-script').addEventListener('error', showError);
  retry.addEventListener('click', () => window.location.reload());
  timeout = setTimeout(showError, 15000);
  updateWidget();
})();
