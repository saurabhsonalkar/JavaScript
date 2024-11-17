//* 1 Way

// const calBtn = document.querySelector("button");

// calBtn.addEventListener("click", function(e) {
//     e.preventDefault();
// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const result = document.querySelector(".results");

// const h = height.value;
// const w = weight.value;

// const bmi = (w * 10000) / (h * h);

// result.innerText = `Your Body Mass Index is ${bmi.toPrecision(4)}`;
// result.style.backgroundColor="grey"
// });

//* 2 Way
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let remark;
    if (bmi < 18.6) {
      remark = `You are underweight.`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      remark = `You have normal weight.`;
    } else {
      remark = `You are overweight.`;
    }

    results.innerHTML = `<span>BMI: ${bmi} <br> ${remark}</span>`;
  }
});
