function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}
