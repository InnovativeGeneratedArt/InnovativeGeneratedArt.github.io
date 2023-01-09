AFRAME.registerComponent("look-at", {
  schema: { type: "selector" },

  init: function () {
    var cameraEl = document.getElementById("camera");
    cameraEl.setAttribute("look-controls", { enabled: false });
    this.el.object3D.lookAt(this.data.object3D.position);
    cameraEl.setAttribute("look-controls", { enabled: true });
  },

  tick: function () {},
});
