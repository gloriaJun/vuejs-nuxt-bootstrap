<template>
  <div class="image-upload input-group">
    <input
      type="text"
      class="form-control"
      :placeholder="placeholder"
      v-model="filename"
      @dragover.prevent
      @dragenter.prevent
      @drop.prevent="onFileDrop">
    <div class="input-group-append">
    <span
      class="input-group-text"
      @click="onClickAttachment"><i class="fa fa-paperclip"></i></span>
      <button
        class="btn btn-outline-info"
        @click="onClickUpload">Upload</button>
    </div>
    <input
      type=file
      class="file-input"
      ref="fileInput"
      accept="image/*"
      @change="onFileChange">
  </div>
</template>

<script>
export default {
  name: 'ImageUpload',
  props: {
    placeholder: {
      type: String,
      default: '파일을 선택하세요'
    },
    imageUrl: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      filename: this.imageUrl
    }
  },
  watch: {
    imageUrl (newValue) {
      this.filename = newValue
    }
  },
  methods: {
    /**
     * "<input type=file>" event trigger
     */
    onClickAttachment () {
      this.$refs.fileInput.click()
    },
    /**
     * "<input type=file>" event
     */
    onFileChange (event) {
      this.addImageFile(event.target.files)
    },
    /**
     * drag & drop event
     */
    onFileDrop (event) {
      this.addImageFile(event.dataTransfer.files)
    },
    /**
     * upload 버튼 클릭 시, input text에 입력된 이미지 파일 event emit
     */
    onClickUpload () {
      this.eventEmit(this.filename)
    },
    /**
     * file check and event emit
     * @param files
     * @returns {boolean}
     */
    addImageFile (files) {
      if (files.length) {
        // 한 번에 하나의 파일만 선택하여 업로드 할 수 있으므로 무조건 0번 index
        let file = files[0]
        if (!/^image\//.test(file.type)) {
          alert('이미지 파일만 등록이 가능합니다')
          return false
        }
        this.filename = file.name
        this.eventEmit(file)
      }
    },
    /**
     * 전달받은 파일을 부모 컴포넌트로 event trigger
     * @param file
     */
    eventEmit (file) {
      this.$emit('upload', file)
    }
  }
}
</script>

<style lang="scss" scoped>
.image-upload {
  .input-group-text {
    cursor: pointer;
    i.fa {
      font-size: 1.2rem;
    }
  }
  .file-input {
    display: none;
  }
}
</style>
