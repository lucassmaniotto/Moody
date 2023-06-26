import Swal from 'sweetalert2';

export const swalApiError = () => {
  Swal.fire({
    icon: 'error',
    title: 'API indisponível',
    text: 'Ocorreu um erro ao buscar os registros. Por favor, tente novamente mais tarde.',
  });
}
