<template>
    <div>
        <div class="starlight jizhang">
        <router-link to="/xiaofei" class="button medium regular orange btn1" href="javascript:void(0);">消费</router-link>
        <br>
        <router-link to="/shouru" class="button medium regular green btn2" href="javascript:void(0);">收入</router-link>
        </div>
    </div>

</template>
<script>

export default {
    
    
    
    
}
</script>
<style lang="css" scoped>
    .jizhang{
        width: 80%;
        height: 500px;
        margin-left: 30px;
        z-index: -34;
    }
    .starlight{
        z-index: -56;
    }
    .btn1,
    .btn2{
        padding: .5em 3.5em .75em !important;
        position: absolute !important;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .btn1{
        top: 40%;

    }
    .btn2{
        top:50%;
    }
    .canvas{
      opacity: 0;
    }
</style>