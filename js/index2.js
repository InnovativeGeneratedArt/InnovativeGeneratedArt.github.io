AFRAME.registerComponent("look-at", {
  schema: { type: "selector" },

  init: function () {},

  tick: function () {
    this.el.object3D.rotation.set("0, 5, 0");
  },
});
