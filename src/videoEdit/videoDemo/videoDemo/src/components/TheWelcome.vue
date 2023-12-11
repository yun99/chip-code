<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <div>
      <video controls ref="video" :src="videoUrl"></video>
      <input
        type="range"
        ref="range"
        min="0"
        :max="duration"
        v-model="currentTime"
      />
      <button @click="cutVideo">剪切</button>
      <button @click="mergeVideo">合成</button>
      <video v-if="videoUrl2" controls ref="video2" :src="videoUrl2"></video>
    </div>
  </div>
</template>

<script>
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

export default {
  data() {
    return {
      videoUrl: "",
      videoUrl2: "",
      file: "",
      videoBlob: "",
      currentTime: 0,
      duration: 0,
      ffmpeg: null,
    };
  },
  mounted() {
    // 初始化FFmpeg.js
    this.ffmpeg = createFFmpeg({
      log: true,
      // corePath: "/ffmpeg-core.js",
      wasmPath: "/ffmpeg-core.wasm",
      // MEMFS: {
      //   TOTAL_MEMORY: 1073741824,
      // },
    });
    this.ffmpeg.load();
  },
  methods: {
    async handleFileChange(event) {
      const file = event.target.files[0];
      this.file = file;

      // 读取视频文件
      const videoData = await this.readFile(file);

      // 将视频文件转为Blob对象
      this.videoBlob = new Blob([videoData], { type: file.type });

      // 将Blob对象转为URL
      this.videoUrl = URL.createObjectURL(this.videoBlob);

      // 获取视频总时长
      const video = this.$refs.video;
      video.addEventListener("loadedmetadata", () => {
        this.duration = video.duration;
      });
    },
    async cutVideo() {
      // 获取视频文件
      const videoData = await this.readFile(this.videoBlob);

      // 将视频文件转为Blob对象
      const videoBlob = new Blob([videoData], { type: "video/mp4" });

      // 使用FFmpeg.js剪切视频
      if (!this.ffmpeg.isLoaded()) {
        await this.ffmpeg.load();
      }
      console.log(this.ffmpeg);

      await this.ffmpeg.FS("writeFile", "input.mp4", new Uint8Array(videoBlob));
      await this.ffmpeg.run(
        // "-ss",
        // this.currentTime.toString(),
        // "-t",
        // "10",
        "-i",
        "input.mp4",
        "-c",
        "copy",
        "output.mp4"
      );

      const outputData = await this.ffmpeg.FS("readFile", "input.mp4");
      const outputBlob = new Blob([videoBlob], { type: "video/mp4" });

      // 将剪切后的视频转为URL
      this.videoUrl2 = URL.createObjectURL(outputBlob);
      console.log(this.videoUrl2);
    },

    async mergeVideo() {
      // 获取视频文件
      const videoData = await this.readFile(this.file);
      console.log(11111);
      console.log(videoData);

      // 将视频文件转为Blob对象
      const videoBlob = new Blob([videoData], { type: "video/mp4" });

      // 使用FFmpeg.js合成视频
      await this.ffmpeg.load();
      await this.ffmpeg.write("input.mp4", new Uint8Array(videoBlob));
      await this.ffmpeg.run(
        "-i",
        "input.mp4",
        "-i",
        "input.mp4",
        "-filter_complex",
        "[0:v]scale=640:360[v0];[1:v]scale=640:360[v1];[v0][0:a][v1][1:a]concat=n=2:v=1:a=1",
        "-c:v",
        "libx264",
        "-c:a",
        "aac",
        "-strict",
        "experimental",
        "-b:a",
        "192k",
        "output.mp4"
      );
      const outputData = await this.ffmpeg.read("output.mp4");
      const outputBlob = new Blob([outputData.buffer], { type: "video/mp4" });

      // 将合成后的视频转为URL
      this.videoUrl2 = URL.createObjectURL(outputBlob);
    },
    async readFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
          console.log(111111);
          console.log(reader.result);
        };
        reader.onerror = reject;
        console.log(223333, file);
        console.log(file instanceof Blob);
        if (file instanceof Blob) {
          reader.readAsArrayBuffer(file);
        }
      });
    },
  },
};
</script>
