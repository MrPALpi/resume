<template>
    <div class="container">
      <div>
        <label>
          <MyInput  type="file" id="file" ref="file" @change="$emit('handleFileUpload')"/>
        </label>
       
      </div>
    </div>
  </template>

  <script>

    export default {

      methods: {

      }
    }
  </script>