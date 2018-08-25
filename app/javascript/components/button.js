import swal from 'sweetalert';

function sweetButton = () => {
  const swalButton = document.getElementById('sweet');
  if (swalButton) {
    swalButton.addEventListener("click", () => {
      swal({
        title: "Your cocktail was successfully deleted",
        icon: "success"
      })
    });
  }
}

export { sweetButton };
