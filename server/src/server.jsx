import Server from 'socket.io';


export function startServer(store) {
  const io = new Server().attach(8090);
  console.log('starting server on http://localhost:8090'); // eslint-disable-line no-console

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}

