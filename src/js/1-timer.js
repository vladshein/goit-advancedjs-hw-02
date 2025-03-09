// Описаний в документації
import flatpickr from "flatpickr";
import iziToast from "izitoast";

let selectedDate = "";

const timer = {
  intervalId: null,
  refs: {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
    inputArea: document.querySelector("input#datetime-picker"),
  },

  start() {
    this.intervalId = setInterval(() => {
      const diff = selectedDate - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      const timeComponents = this.getTimeComponents(diff);

      this.refs.days.textContent = this.pad(timeComponents.days);
      this.refs.hours.textContent = this.pad(timeComponents.hours);
      this.refs.minutes.textContent = this.pad(timeComponents.minutes);
      this.refs.seconds.textContent = this.pad(timeComponents.seconds);

      btn.disabled = true;
      this.refs.inputArea.disabled = true;
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    btn.disabled = false;
    this.refs.inputArea.disabled = false;
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, "0");
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDate = selectedDates[0];

    const diff = selectedDate - Date.now();
    console.log("Selected date:", selectedDate);
    if (diff <= 0) {
      iziToast.show({
        title: "",
        message: "Please choose a date in the future",
      });
      // alert("Please choose a date in the future");
      btn.disabled = true;
      return;
    }
    btn.disabled = false;
  },
};

flatpickr("input#datetime-picker", options);

const btn = document.querySelector("button");
btn.addEventListener("click", event => {
  timer.start();
});
