const worker = new Worker("./ww.js");

worker.onmessage = async function(event) {
  const { default: saveAs } = await import("file-saver");

  saveAs(event.data, "images.zip");
};

worker.onerror = function(event) {
  console.log(event);
};

function postMessageToWorker(message) {
  worker.postMessage(message);
}

export {
  postMessageToWorker
};
