const dateInput = document.getElementById("date-input");
    const datePicker = document.getElementById("date-picker");
    const currentMonthYear = document.getElementById("current-month-year");
    const calendarBody = document.getElementById("calendar-body");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentDate = new Date();

    // Format date as dd-mm-yyyy
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }

    // Parse a date string (dd-mm-yyyy) into a Date object
    function parseDate(dateStr) {
      const [day, month, year] = dateStr.split('-').map(Number);
      return new Date(year, month - 1, day);
    }

    // Set initial value for the input field
    function setInitialDate() {
      const today = formatDate(currentDate);
      dateInput.value = today; // Set today's date as the initial value
    }

    // Show or hide the date picker
    dateInput.addEventListener("click", () => {
      datePicker.style.display = datePicker.style.display === "block" ? "none" : "block";
    });

    // Hide the date picker when clicking outside
    document.addEventListener("click", (event) => {
      if (!datePicker.contains(event.target) && event.target !== dateInput) {
        datePicker.style.display = "none";
      }
    });

    // Validate and update the input field when typing
    dateInput.addEventListener("blur", () => {
      const dateStr = dateInput.value;
      const datePattern = /^\d{2}-\d{2}-\d{4}$/;

      if (datePattern.test(dateStr)) {
        const parsedDate = parseDate(dateStr);
        if (!isNaN(parsedDate)) {
          currentDate = parsedDate; // Update the calendar's current date
          renderCalendar(currentDate); // Re-render the calendar
          return;
        }
      }

      // If the date is invalid, reset to today's date
      alert("Invalid date format. Please enter a date in the format dd-mm-yyyy.");
      setInitialDate();
    });

    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      currentMonthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

      const firstDay = new Date(year, month, 1).getDay(); // First day of the month
      const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month

      calendarBody.innerHTML = ""; // Clear previous cells

      let row = document.createElement("tr");
      // Fill empty cells before the 1st day
      for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        row.appendChild(document.createElement("td"));
      }

      // Fill the days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("td");
        cell.textContent = day;
        cell.addEventListener("click", () => {
          document.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
          cell.classList.add("selected");
          dateInput.value = formatDate(new Date(year, month, day));
          datePicker.style.display = "none";
        });
        row.appendChild(cell);

        // Start a new row after Saturday
        if ((firstDay + day - 1) % 7 === 0) {
          calendarBody.appendChild(row);
          row = document.createElement("tr");
        }
      }

      // Append the last row
      if (row.childElementCount > 0) {
        calendarBody.appendChild(row);
      }
    }

    // Event listeners for navigation
    prevButton.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    });

    nextButton.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });

    // Initialize
    setInitialDate();
    renderCalendar(currentDate);




  

