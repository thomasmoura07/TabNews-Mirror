function status(request, response) {
  response.status(200).json({ msg: "mandando uma mensagem para o mundão" });
}

export default status;
