import iziToast from "izitoast";

const form = document.querySelector(".form");

// let formDelay = null;
// let radioValue = null;

form.addEventListener("submit", event => {
  event.preventDefault();
  console.dir(event.target);
  console.log("send form!");

  let formDelay = form.querySelector("input[name='delay']").value;
  let radioValue = form.querySelector('input[name="state"]:checked').value;

  console.log(formDelay);
  console.log(radioValue);

  form.reset();

  console.log(formDelay);
  console.log(radioValue);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioValue === "fulfilled") {
        resolve(formDelay);
      } else {
        reject(formDelay);
      }
    }, formDelay);
  });

  promise
    .then(result => {
      iziToast.show({
        title: "",
        message: `Fulfilled promise in ${result}ms`,
      });
    })
    .catch(error => {
      iziToast.show({
        title: "",
        message: `Rejected promise in ${error}ms`,
      });
    });
});
