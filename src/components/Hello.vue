<template>
  <div class="content-wrap">
    <h1 style="text-align: center;">拖动到指定div，限定拖动个数</h1>
      <div class='drag-content'>
        <div class='project-content'>
          <div class='select-item' draggable='true' @dragstart='drag($event)' v-for='pjdt in projectdatas'>{{pjdt.name}}</div>
        </div>
        <div class='people-content'>
          <div class='drag-div' v-for='(ppindex,ppdt) in peopledata' @drop='drop($event, ppindex)' @dragover='allowDrop($event)' :class="ppindex ? 'dragDiv_'+ppindex.id : ''">
            <div class='select-project-item'>
              <label class='drag-people-label'>{{ppindex.name}}：</label>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
let dom = '';
import draggable from 'vuedraggable'
import $ from 'jquery'
export default {
  data() {
    return {
      projectdatas: [
        { id: '1', name: '葡萄', },
        { id: '2', name: '芒果', },
        { id: '3', name: '木瓜', },
        { id: '4', name: '榴莲', },
        { id: '5', name: '哈密瓜', },
        { id: '6', name: '西红柿', },
        { id: '7', name: '土豆', },
        { id: '8', name: '番薯', },
        { id: '9', name: '西瓜', },
        { id: '10', name: '玉米', }
      ],
      peopledata: [
        { id: '1', name: 'first', },
        { id: '2', name: 'second', },
        { id: '3', name: 'third ', },
        { id: '4', name: 'four', }
      ]
    }
  },
  mounted () {
  },
  components: {　　
    draggable
  },
  methods: {
    drag (event) {
      dom = event.currentTarget
    },
    drop (event, index) {
      event.preventDefault()
      let tag = $('.dragDiv_'+index.id).find('.select-item').length
      console.log(tag)
      if(event.srcElement.className != 'select-item' && tag < 1) {
        event.target.appendChild(dom)
      } else {
        alert('已经超过上限，只能放置一个')
      }
    },
    allowDrop(event) {
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
.select-item { background-color: #5bc0de; display: inline-block; text-align: center; border-radius: 3px; margin: 0 10px 10px 0; cursor: pointer; padding: 6px 20px; color: #fff; }
.cursored { cursor: default; }
.project-content, .people-content { margin: 30px 50px; }
.people-content { margin-top: 30px; }
.drag-div { border: 1px solid #5bc0de; padding: 10px; margin-bottom: 10px; width: 800px; cursor: pointer; }
.select-project-item { display: inline-block; text-align: center; border-radius: 3px; }
.drag-people-label { margin-bottom: 0; padding-right: 10px; }
</style>
