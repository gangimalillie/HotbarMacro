<template>
  <div id="content">
    <div id="settings" style="display: flex">
      <div id="jobselect" style="width: 200px; text-align: right">
        Job:
        <select name="job" v-model="selected">
          <option v-for="job in jobs" :key="job.Name" :value="job.Name">
            {{ job.Name }}
          </option>
        </select>
      </div>
      <div id="hotbarselect" style="margin: 0 auto; text-align: right">
        Hotbar Layout
        <select name="hotbar" v-model="hotbars.hotbarLayout">
          <option value="1x12">1x12</option>
          <option value="3x4">3x4</option>
          <option value="wx">WCross</option>
        </select>
      </div>
    </div>
    <div id="main" style="display: flex; align-items: flex-end">
      <ActionList :Actions="jobs[selected].Skills" />
      <h1x12set
        v-model="hotbars[selected]"
        v-if="hotbars.hotbarLayout == '1x12'"
      />
      <hwxhbset v-model="hotbars[selected]" v-if="hotbars.hotbarLayout=='wx'"/>
      <div id="decription" style="width:30%">
        <h1>つかいかた</h1>
        <p>Jobを右上から選ぶとアクション一覧が表示されます（ホットバーに置けないものも含まれています）。</p>
        <p>カーソルをあてると詳細を表示します。</p>
        <p>ホットバーのレイアウトを選択してアクションをD&Dで配置。</p>
        <p>ホットバーの横の番号は編集できます。WXHBの割当先も変更できます。</p>
        <p>マクロが生成されるのでコピーしてお使いください</p>
        <p>つくったひと:<a href="https://twitter.com/waneeeen">@waneeeen</a></p>
      </div>
    </div>
    <div id="macros" style="display: flex">
      <div v-for="(n, i) in Math.ceil(active.length / 15)" :key="i"  style="text-align:right;width:400px;border:2px solid;">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="40px"
        height="40px"
        viewBox="0 0 1151.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
        @click="copy(i)"
      >
        <metadata>
          Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M2592 12785 c-211 -46 -387 -217 -449 -435 -17 -63 -18 -241 -18 -4940 0 -4699 1 -4877 18 -4940 29 -103 84 -198 157 -271 72 -72 129 -109 229 -148 l66 -26 4180 -3 c3008 -2 4198 0 4245 8 212 36 377 181 463 407 l22 58 3 3158 2 3157 -2034 0 c-1430 0 -2051 3 -2088 11 -167 34 -332 164 -406 320 -22 46 -45 108 -51 137 -8 37 -11 575 -11 1787 l0 1735 -2132 -1 c-1770 0 -2144 -3 -2196 -14z"
          />
          <path
            d="M7320 11262 c0 -1066 3 -1547 11 -1584 43 -212 231 -404 442 -453 57 -13 287 -15 1896 -13 l1830 3 -2070 1775 c-1138 976 -2079 1781 -2089 1789 -20 13 -20 -1 -20 -1517z"
          />
          <path
            d="M464 10765 c-78 -17 -178 -66 -242 -119 -92 -76 -145 -153 -196 -286 l-21 -55 -3 -4880 c-2 -4435 -1 -4887 13 -4953 50 -225 236 -410 460 -457 105 -22 8334 -22 8439 0 214 45 392 216 452 435 16 57 18 113 18 455 l1 390 -3705 5 c-3561 5 -3707 6 -3760 23 -184 62 -321 196 -393 384 l-22 58 -3 4508 -2 4507 -488 -1 c-363 0 -502 -4 -548 -14z"
          />
        </g>
      </svg>
        <div v-for="(m, j) in 15" :key="j" style="text-align: left" >
          <p v-if="i * 15 + j < active.length" :class="`macro${i}`">
            /{{hotbars.hotbarLayout=='wx'?'crosshotbar':'hotbar'}} set {{ active[i * 15 + j].Name }}
            {{ active[i * 15 + j].i }} {{ active[i * 15 + j].j }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ActionList from "@/components/Hotbar/ActionList.vue";
import h1x12set from "@/components/Hotbar/1x12set.vue";
import hwxhbset from "@/components/Hotbar/WXHBset.vue";
import jobs from "../assets/jobs.json";
import hotbars from "../assets/hotbar_test.json";

export default {
  data() {
    return {
      jobs: jobs,
      selected: "ナイト",
      hotbars: hotbars,
    };
  },
  components: {
    ActionList,
    h1x12set,
    hwxhbset
  },
  computed: {
    active: {
      get() {
        var arr = [];
        this.hotbars[this.selected].Hotbars.forEach((hotbar) => {
          arr = arr.concat(
            hotbar.Actions.map((ac, j) => {
              ac.i = hotbar.Number;
              switch(this.hotbars.hotbarLayout){
                case "1x12" :
                case "3x4": 
                ac.j=j+1; break;
                case "wx":
                ac.j=hotbar.LR+(Math.floor(j/4)==0?'D':'A')+`${j%4+1}`;break
              }
              return ac;
            }).filter((ac) => Object.keys(ac).length > 2)
          );
        });
        return arr;
      },
    },
  },
  methods:{
    copy(index){
        var text = Array.from(document.getElementsByClassName(`macro${index}`)).map(c=>c.outerText).join("\n");
        navigator.clipboard.writeText(text).catch(e=>console.error(e));
    }
  },
  mounted() {
    //console.log(this.active.length)
  },
};
</script>
<style scoped>
select {
  -webkit-appearance: menulist-button;
  appearance: menulist-button;
  background-color: #ffe0ff;
}
</style>