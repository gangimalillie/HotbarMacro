<template>
  <div
    id="actionicon"
    :style="`width:${Size+2}px;height:${Size+2}px;background-color:${getBackColor()};`"
  >
    <img
      id="icon"
      :src="Action.Icon"
      :width="`${Size}px`"
      :height="`${Size}px`"
      v-tooltip="getTooltip()"
      draggable
      @dragstart="drag($event, Action)"
      @dragend="isDrag=false"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDrag: false,
    };
  },
  props: {
    Action: Object,
    Size: Number,
  },
  methods: {
    getTooltip() {
      if (!this.isDrag) {
        return `${this.Action.Name}(${this.Action.Class})<br>Cast:${
          this.Action.Cast
        }/Recast:${this.Action.Recast}${
          this.Action.Time == -1.0 ? "" : "/Effect:" + this.Action.Time
        }<br>${
          this.Action.Cost == "-" ? "" : this.Action.Cost + "<br>"
        }${this.Action.Text.replace(/\r?\n/g, "<br>")}`;
      } else {
        return ``;
      }
    },
    getBackColor() {
      switch (this.Action.Class) {
        case "ウェポンスキル":
          return "#F0303D";
        case "魔法":
          return "#309DF0";
        case "アビリティ":
          return "#F0E330";
        default:
          return "#FFFFFF";
      }
    },
    drag(event, action) {
        this.isDrag=true;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("application/json", JSON.stringify(action));
      /*console.log(
        JSON.parse(event.dataTransfer.getData("application/json")).Name
      );*/
    },
  },
};
</script>
<style>
#actionicon {
  display: flex;
  justify-content: center;
  align-items: center;
}
#icon {
  top: 2px;
}
.tooltip {
  display: block !important;
  width: 300px;
  z-index: 10000;
}
.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 1px;
  padding: 5px 10px 4px;
}
.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}
.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}
.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}
.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}
.popover-inner.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}
.tooltip[x-placement^="right"] {
  margin-left: 5px;
}
.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
.tooltip[x-placement^="left"] {
  margin-right: 5px;
}
.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}
.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}
.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}
.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>