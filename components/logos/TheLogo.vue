<template>
<div class="font-extrabold hover:text-hot-pink text-3xl animation-logo tracking-tighter text-indigo-700">
  <img alt="DisCloud Logo" src="https://discloudbot.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Flogo-discloud.4a018b1d4811cbe43783b95ca3508f6a.svg&w=256&q=75">
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.animation-logo {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animationTimingFunction: cubic-bezier(0.4, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
  }
}

</style>
