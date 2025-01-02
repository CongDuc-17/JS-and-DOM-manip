const colorCode = document.querySelector(".color-code");
const widthCode = document.querySelector(".width");
const heightCode = document.querySelector(".height");
const submitBtn = document.querySelector(".submit_pro");
const rectangleInfor = document.querySelector(".rectangle");

//hàm in ra kèm theo các số đo trên hcn
const rectangleWidth = document.querySelector(".rectangle__top");
const rectangleCenter = document.querySelector(".rectangle__center");
const rectangleHeight = document.querySelector(".rectangle__right");

//hàm kiểm tra dữ liệu đầu vào
function check() {
  const colorX = colorCode.value;
  const widthY = widthCode.value;
  const heightZ = heightCode.value;
  if (!colorX) {
    alert("VUI LÒNG NHẬP MÃ MÀU");
    return false;
  } else {
    if (!widthY && !heightZ) {
      alert("VUI LÒNG NHẬP ĐỦ THÔNG TIN NGANG, DỌC");
      return false;
    }
    if (!widthY) {
      alert("VUI LÒNG NHẬP THÊM CHIỀU NGANG");
      return false;
    } else if (!heightZ) {
      alert("VUI LÒNG NHẬP THÊM CHIỀU DỌC");
      return false;
    }
  }
  return true;
}

function check_input() {
  const prefix = "#";
  let colorX = colorCode.value;
  if (!colorX.startsWith(prefix)) {
    colorX = prefix + colorX;
  }
  return colorX;
}

//hàm thay đổi hcn
submitBtn.addEventListener("click", function () {
  if (!check()) return;
  const colorX = check_input();
  const widthY = widthCode.value;
  const heightZ = heightCode.value;

  rectangleInfor.style.backgroundColor = colorX;
  rectangleInfor.style.width = `${widthY}px`;
  rectangleInfor.style.height = `${heightZ}px`;

  rectangleWidth.innerText = `${widthY}px`;
  rectangleHeight.innerText = `${heightZ}px`;
  rectangleCenter.innerText = colorX;
});

//hàm reset về giá trị mặc định
rectangleInfor.addEventListener("click", function () {
  rectangleInfor.style.backgroundColor = "";
  rectangleInfor.style.width = "";
  rectangleInfor.style.height = "";
  rectangleWidth.innerText = "";
  rectangleHeight.innerText = "";
  rectangleCenter.innerText = "";
  colorCode.value = "";
  widthCode.value = "";
  heightCode.value = "";
});
