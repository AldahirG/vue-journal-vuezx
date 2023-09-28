<template>

  <div class="entry-container mb-3 pointer p-2" 
  @click="$router.push({name: 'entry', params:{id:10}})"
  > 

    <div class="entry-title d-flex" >
        <span class="text-success fs-5 fw-bold" >21</span>
        <span class="mx-1 fs-5" >Septiembre</span>
        <span class="mx-2 fw-light" >2023</span>
    </div>
    <div class="entry-description">
      Cillum ad consectetur commodo occaecat nulla exercitation qui deserunt velit nostrud sunt deserunt est excepteur. Esse aliqua laboris laborum nisi elit ea nostrud labore ad labore laboris. Ut et amet duis do nostrud ullamco proident fugiat ad. Non commodo sunt velit ullamco id fugiat fugiat voluptate. In fugiat nulla reprehenderit incididunt veniam. Excepteur minim dolore incididunt Lorem ex ea voluptate magna.
    </div>

  </div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  
  &:hover{
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description{
    font-size: 14px;
    color: #7f8c8d;
  }
 
}
</style>