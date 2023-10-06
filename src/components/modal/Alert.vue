<template>
  <div v-if="openClose" class="modal fade show" style="display: block;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" @click="openCloseFun()"  aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot>

        </slot>
        {{ nombre }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" :class="'btn btn-'+variant"  @click="openCloseFun()" >Close</button>
      </div>
    </div>
  </div>
</div>
<button type="button" class="btn btn-secondary" :class="'btn btn-'+variant"  @click="openCloseFun()" >Open modal</button>

</template>

<script>


export default{
    name: 'Alert',
    props: {
        visible: Boolean,
        variant: String,
        obj: Object 
    },
    data(){
        return {
            openClose: this.visible
        }
    },
    methods:{
        openCloseFun(){
            this.openClose = !this.openClose;
        }
    },
    watch:{
        visible: function( newVal, oldVal ) {
            this.openClose = newVal;
        }
    }
}
</script>